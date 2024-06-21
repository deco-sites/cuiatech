import { useState } from "preact/hooks";
import { invoke } from "site/runtime.ts";

export interface Form {
  name: string;
  enterprise: string;
  email: string;
  phone: string;
  message: string;
}

const sendContactForm = async (
  form: Form,
) => {
  await invoke.site.actions.sendContactForm({
    form,
  });
};

export default function ContactForm(props: unknown) {
  const [form, setForm] = useState<Form>({
    name: "",
    enterprise: "",
    email: "",
    phone: "",
    message: "",
  } as Form);

  return (
    <form className="w-full md:w-2/3 text-primary-content">
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">
          Nome*
          <input
            type="text"
            id="name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-secondary-content"
            onChange={(e) => {
              setForm({ ...form, name: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="company">
          Empresa
          <input
            type="text"
            id="company"
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-secondary-content"
            onChange={(e) => {
              setForm({ ...form, enterprise: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="flex mb-4 gap-x-4">
        <label className="block mb-2 w-1/2" htmlFor="email">
          Email*
          <input
            type="email"
            id="email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-secondary-content"
            onChange={(e) => {
              setForm({ ...form, email: e.currentTarget.value });
            }}
          />
        </label>
        <label className="block mb-2 w-1/2" htmlFor="phone">
          Telefone
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-secondary-content"
            onChange={(e) => {
              setForm({ ...form, phone: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="message">
          Mensagem*
          <textarea
            id="message"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none text-secondary-content"
            style={{ minHeight: "100px" }}
            onChange={(e) => {
              setForm({ ...form, message: e.currentTarget.value });
            }}
          />
        </label>
      </div>
      <div class="flex justify-end">
        <div
          className="flex btn w-24 font-normal bg-primary text-primary-content self-end border-none"
          onClick={async () => await sendContactForm(form)}
        >
          Enviar
        </div>
      </div>
    </form>
  );
}
