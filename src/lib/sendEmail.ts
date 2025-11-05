import ContactEmail from "@/emails/contact";
import OtpEmail from "@/emails/otp";
import ResetEmail from "@/emails/reset";
import WelcomeEmail from "@/emails/welcome";
import { Resend } from "resend";

// Import templates dynamically

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

type EmailType = "contact" | "otp" | "welcome" | "reset";

const templates: Record<EmailType, (data: any) => JSX.Element> = {
  contact: (data) => ContactEmail(data),
  otp: (data) => OtpEmail(data),
  welcome: (data) => WelcomeEmail(data),
  reset: (data) => ResetEmail(data),
};

interface SendEmailOptions {
  type: EmailType;
  to: string | string[];
  subject?: string;
  data: any;
}

export async function sendEmail({ type, to, subject, data }: SendEmailOptions) {
  const template = templates[type];
  if (!template) throw new Error(`Unknown email type: ${type}`);

  const reactTemplate = template(data);
  const emailSubject =
    subject ||
    {
      contact: "New Contact Message",
      otp: "Your Verification Code",
      welcome: "Welcome to Morpho",
      reset: "Reset Your Password",
    }[type];

  const result = await resend.emails.send({
    from: "Morpho <onboarding@resend.dev>",
    // from: `Morpho {process.env.NEXT_FROM_EMAIL}`,
    to: process.env.NEXT_TO_EMAIL!,
    // to,
    subject: emailSubject,
    react: reactTemplate,
  });

  return result;
}
