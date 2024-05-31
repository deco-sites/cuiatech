import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { AppContext } from "site/apps/site.ts";
import { SmtpResult } from "site/loaders/smtp.ts";

export interface Props {
  to: string;
  subject: string;
  /** @format html */
  content: string;
  config: SmtpResult;
}

export interface Result {
  status: "ok" | "failure";
  error?: unknown;
}

export default async function sendMail({
  to,
  subject,
  content,
  config,
}: Props, _req: Request, _ctx: AppContext): Promise<Result> {
  const client = new SMTPClient({
    connection: {
      hostname: config.hostname,
      port: config.port,
      tls: config.tls,
      auth: {
        username: config.auth.username,
        password: config.auth.password,
      },
    },
  });
 
  try {
    await client.send({
      from: config.auth.username,
      to,
      subject,
      content: "auto",
      html: content,
    });
    
    await client.close();
    return { status: "ok" };
  } catch (error) {
    console.error(error);
    return { status: "failure", error, };
  }
}