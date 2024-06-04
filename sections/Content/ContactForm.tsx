import Island from "site/islands/ContactForm.tsx";

export interface Props {
  title?: string;
}

export default function ContactForm({ title, ...props }: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      <div className="w-full max-w-4xl p-5 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-white mb-8">{title}</h1>
        <Island {...props} />
      </div>
    </div>
  );
}
