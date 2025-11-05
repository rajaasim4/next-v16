import { Html, Text } from "@react-email/components";
import * as React from "react";

export interface OtpEmailProps {
  otp: string;
}

export default function OtpEmail({ otp }: OtpEmailProps) {
  return (
    <Html>
      <Text>
        Your OTP Code is: <strong>{otp}</strong>
      </Text>
      <Text>Use this code to verify your account.</Text>
    </Html>
  );
}
