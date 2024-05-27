import Deposition, {
  Deposition as DepositionsProps,
} from "site/components/ui/Deposition.tsx";

export interface Props {
  title?: string;
  subtitle?: string;
  titleColor?: "primary" | "secondary";
  /**
   * @title Depositions
   */
  depositions: DepositionsProps[];
}

const COLORS = {
  primary: "text-primary-content",
  secondary: "text-secondary-content",
};

function Header(
  { title, subtitle, titleColor = "secondary" }: Omit<Props, "depositions">,
) {
  return (
    <div class="flex flex-col mb-8 items-center w-full pt-8">
      <h1 class={`text-3xl font-semibold ${COLORS[titleColor]}`}>{title}</h1>
      <h2 class={`text-2xl font-light ${COLORS[titleColor]}`}>{subtitle}</h2>
    </div>
  );
}

export default function Component({
  title = "Depoimentos",
  subtitle = "dos nossos colaboradores",
  depositions,
  titleColor = "secondary",
}: Props) {
  return (
    <>
      <div class="relative w-full bg-base-200">
        <Header
          titleColor={titleColor}
          title={title}
          subtitle={subtitle}
        />
        <div className="cuia-scrollbar flex justify-start p-8 gap-12 overflow-x-scroll">
          {depositions.map(({ description, image }, index) => (
            <div class="">
              <Deposition
                description={description}
                image={image}
                color={index % 2 === 0 ? "primary" : "secondary"}
                key={`fst-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
