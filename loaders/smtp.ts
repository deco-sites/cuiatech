import { Secret } from "apps/website/loaders/secret.ts";

export interface SmtpConfig {
  /**
   * @title Email
   * @description Email to send the contact form to
   */
  targetEmail: string;
  /**
   * @title Hostname
   * @description SMTP server hostname (e.g. smtp.gmail.com)
   * @default smtp.gmail.com
   */
  hostname: string;
  port: number;
  tls: boolean;
  auth: {
    username: Secret;
    password: Secret;
  };
}

export type SmtpResult = Omit<SmtpConfig, "auth"> & {
  auth: {
    username: string;
    password: string;
  };
};

export default function SmtpConfig({
  targetEmail,
  hostname = "smtp.gmail.com",
  port,
  tls,
  auth,
}: SmtpConfig): SmtpResult {
  return {
    targetEmail,
    hostname,
    port,
    tls,
    auth: {
      username: auth.username.get() ?? "",
      password: auth.password.get() ?? "",
    },
  };
}
