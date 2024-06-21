import { ComponentChildren } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { JSX } from "preact/jsx-runtime";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  description?: string;
  values?: Array<{
    label: string;
    icon: JSX.Element;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function OurValues({
  title = "Nossos valores",
  description = "",
  values = [
    {
      icon: (
        <Icon
          id="Diversity"
          class="w-20"
        />
      ),
      label: "Diversidade",
    },
    {
      icon: (
        <Icon
          id="TeamWork"
          class="w-16"
        />
      ),
      label: "Trabalho em Equipe",
    },
    {
      icon: (
        <Icon
          id="ClientFocus"
          class="w-16"
        />
      ),
      label: "Foco no Cliente",
    },
    {
      icon: (
        <Icon
          id="Autonomy"
          class="w-12"
        />
      ),
      label: "Autonomia",
    },
    {
      icon: (
        <Icon
          id="Innovation"
          class="w-16"
        />
      ),
      label: "Inovação",
    },
  ],
}: Props) {
  return (
    <div class="py-16 w-full p-2 text-center">
      <div class="max-w-5xl mx-auto">
        <Title title={title} />
        <Container>
          {values.map((value) => (
            <Card
              label={value.label}
              icon={value.icon}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}

interface CardProps {
  label: string;
  icon: JSX.Element;
}

function Card({ label, icon }: CardProps) {
  return (
    <div class="xl:relative w-full flex flex-col align-middle items-center justify-center xl:justify-normal h-64 sm:h-48 p-4 bg-primary rounded-badge shadow-md">
      <p class="mt-12 xl:mt-2 text-lg text-secondary font-extrabold">
        {label}
      </p>
      <div class="xl:absolute xl:mt-8 mt-2 flex flex-col items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return <h1 class="pb-8 text-3xl font-bold text-accent">{title}</h1>;
}

interface ContainerProps {
  children: ComponentChildren;
}

function Container({ children }: ContainerProps) {
  return (
    <div class="grid grid-cols-1 p-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
      {children}
    </div>
  );
}
