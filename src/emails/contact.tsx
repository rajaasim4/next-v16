import { Html, Text } from "@react-email/components";
import * as React from "react";

export interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Text>
        📬 New message from {name} ({email})
      </Text>
      <Text>{message}</Text>
    </Html>
  );
}
