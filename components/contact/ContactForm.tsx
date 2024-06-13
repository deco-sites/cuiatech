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
    <form className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-md p-5">
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            onChange={(e) => {
              setForm({ ...form, name: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="company">
          Nome da Empresa:
          <input
            type="text"
            id="company"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            onChange={(e) => {
              setForm({ ...form, enterprise: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            onChange={(e) => {
              setForm({ ...form, email: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="phone">
          Telefone:
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            onChange={(e) => {
              setForm({ ...form, phone: e.currentTarget.value });
            }}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="message">
          Mensagem:
          <textarea
            id="message"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500"
            style={{ minHeight: "100px" }}
            onChange={(e) => {
              setForm({ ...form, message: e.currentTarget.value });
            }}
          />
        </label>
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          className="flex btn bg-primary text-primary-content self-end"
          onClick={async () => await sendContactForm(form)}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
