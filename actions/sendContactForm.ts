import { AppContext } from "site/apps/site.ts";
import { Form } from "site/components/contact/ContactForm.tsx";
import { SmtpResult } from "site/loaders/smtp.ts";

export interface Props {
  email: string;
  form: Form;
  config: SmtpResult;
}

export default async function sendContactForm({ email, form, config }: Props, req: Request, ctx: AppContext) {
  await ctx.invoke.site.actions.sendMail({
    config: {
      hostname: config.hostname,
      port: config.port,
      tls: config.tls,
      auth: {
        username: config.auth.username,
        password: config.auth.password,
      }
    },
    to: email,
    subject: "Solicitação de contato CuiaTech",
    content: `<p>Nome: ${form.name}</p>
    <p>Empresa: ${form.enterprise}</p>
    <p>Email: ${form.email}</p>
    <p>Telefone: ${form.phone}</p>
    <p>Mensagem: ${form.message}</p>
    `
  }, req);
}