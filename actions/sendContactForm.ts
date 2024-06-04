import { AppContext } from "site/apps/site.ts";
import { Form } from "site/components/contact/ContactForm.tsx";

export interface Props {
  form: Form;
}

export default async function sendContactForm(
  { form }: Props,
  req: Request,
  ctx: AppContext,
) {
  const { smtp } = ctx.config;
  await ctx.invoke.site.actions.sendMail({
    config: {
      hostname: smtp.hostname,
      port: smtp.port,
      tls: smtp.tls,
      auth: {
        username: smtp.auth.username,
        password: smtp.auth.password,
      },
    },
    to: smtp.targetEmail,
    subject: "Solicitação de contato CuiaTech",
    content: `<p>Nome: ${form.name}</p>
    <p>Empresa: ${form.enterprise}</p>
    <p>Email: ${form.email}</p>
    <p>Telefone: ${form.phone}</p>
    <p>Mensagem: ${form.message}</p>
    `,
  }, req);
}
