import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

interface ContainerProps {
  children: ComponentChildren;
}

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  values?: Array<DepositionProps>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-white">{title}</h1>
      <h2 class="text-2xl font-light text-white">{subtitle}</h2>
    </div>
  );
}

function Container({ children }: ContainerProps) {
  return (
    <div class="w-full p-2 py-16">
      {children}
    </div>
  );
}

interface DepositionProps {
  text: string;
  name: string;
  role: string;
  avatar?: string;
}

function Bubble({ text }: { text: string }) {
  return (
    <div class="bg-white p-6 rounded-badge chat-bubble">
      <p class="text-sm font-thin text-accent">{text}</p>
    </div>
  );
}

function Deposition({ text, name, role, avatar }: DepositionProps) {
  return (
    <div class="pt-16 flex flex-col items-center chat chat-end">
      <Bubble text={text} />
      <div class="w-full flex gap-2 items-center justify-end mt-4">
        <div class="flex flex-col items-end">
          <p class="text-white text-lg font-semibold">{name}</p>
          <p class="text-white text-md font-light">{role}</p>
        </div>
        <Avatar src={avatar ?? ""} />
      </div>
    </div>
  );
}

interface AvatarProps {
  src: string;
}

function Avatar({ src }: AvatarProps) {
  return (
    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
      {!src
        ? (
          <span class="text-lg font-bold text-primary-500">
            PH
          </span>
        )
        : (
          <img
            src={src}
            alt="Avatar"
            class="w-full h-full object-cover rounded-full"
          />
        )}
    </div>
  );
}

export default function Depositions({
  title = "Depoimentos",
  subtitle = "dos nossos clientes",
  values = [
    {
      text:
        `"Ótimo atendimento e excelência em todas as etapas do processo. Somos muito gratos por essa parceria, dedicação e profissionalismo da equipe."`,
      name: "Fábio",
      role: "Coordenador de TI da Fellipelli",
      avatar: "",
    },
    {
      text:
        `"Ficou muito top, Eu particularmente gostei muito, um time dinâmico, extrovertido, paciente, muito paciente e focado voltado a solução. Quanto a qualidade de trabalho e entrega: Nota 10."
      "Código Bem estruturado, código leve, fácil de identificar eu abri o código de vocês aqui e consegui entender a estrutura de boa, então ele ta bem identado, consegui fazer alteração por aqui sem precisar incomodar vocês ai. Então Parabens amigo Excelente o trabalho de vocês. Tem a minha recomendação."`,
      name: "Bruno Henrique",
      role: "Gerente de Tecnologia",
      avatar: "",
    },
  ],
}: Props) {
  return (
    <div class="w-full text-center bg-primary">
      <div class="max-w-4xl mx-auto">
        <Container>
          <Header title={title} subtitle={subtitle} />
          <div class="flex flex-col gap-12">
            {values.map((value) => (
              <Deposition
                text={value.text}
                name={value.name}
                role={value.role}
                avatar={value.avatar}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
