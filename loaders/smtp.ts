import { Secret } from "apps/website/loaders/secret.ts";

export interface SmtpConfig {
  /**
   * @title Hostname (example: smtp.example.com)
   * @default smtp.pbhub.com.br
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
  hostname = "smtp.gmail.com",
  port,
  tls,
  auth,
}: SmtpConfig): SmtpResult {
  return {
    hostname,
    port,
    tls,
    auth: {
      username: auth.username.get() ?? '',
      password: auth.password.get() ?? '',
    },
  }
};