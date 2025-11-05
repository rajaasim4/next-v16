import { Html, Text } from "@react-email/components";
import * as React from "react";

export interface WelcomeEmailProps {
  name: string;
}

export default function WelcomeEmail({ name }: WelcomeEmailProps) {
  return (
    <Html>
      <Text>Hi {name}, welcome aboard 🎉</Text>
      <Text>We’re excited to have you with us.</Text>
    </Html>
  );
}
