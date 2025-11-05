import { Html, Text, Link } from "@react-email/components";
import * as React from "react";

export interface ResetEmailProps {
  resetLink: string;
}

export default function ResetEmail({ resetLink }: ResetEmailProps) {
  return (
    <Html>
      <Text>Click below to reset your password:</Text>
      <Link href={resetLink}>{resetLink}</Link>
    </Html>
  );
}
