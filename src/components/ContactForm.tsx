"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ✅ Validation Schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().trim().required("Message is required"),
});

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        setStatus(null);

        try {
          const res = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "otp",
              to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "admin@morpho.org",
              data: values,
            }),
          });

          const data = await res.json();

          if (res.ok) {
            setStatus("✅ Email sent successfully!");
            resetForm();
          } else {
            setStatus(`❌ Error: ${data.error || "Failed to send email"}`);
          }
        } catch (error) {
          console.error(error);
          setStatus("❌ Something went wrong. Please try again.");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 max-w-md mx-auto p-4 border rounded-lg">
          {/* Name */}
          <div>
            <Field
              as={Input}
              name="name"
              placeholder="Your Name"
              className={errors.name && touched.name ? "border-red-500" : ""}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <Field
              as={Input}
              type="email"
              name="email"
              placeholder="Your Email"
              className={errors.email && touched.email ? "border-red-500" : ""}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message */}
          <div>
            <Field
              as={Textarea}
              name="message"
              placeholder="Your Message"
              className={
                errors.message && touched.message ? "border-red-500" : ""
              }
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {/* Status message */}
          {status && (
            <p
              className={`text-sm mt-2 ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
