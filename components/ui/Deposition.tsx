import { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";

export interface Deposition {
  /**
   * @format textarea
   */
  description: string;
  image: ImageWidget;
  color?: keyof typeof COLORS;
}

const COLORS = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

const COLORS_CONTENT = {
  primary: "text-primary-content",
  secondary: "text-secondary-content",
};

export default function Deposition(
  { description, image, color = "primary" }: Deposition,
) {
  const isExpanded = useSignal(false);
  return (
    <div
      class={`relative flex items-center p-12 pb-16 mb-16 w-full sm:w-[32rem] ${
        COLORS[color]
      } rounded-3xl`}
    >
      <p
        class={`text-md ${COLORS_CONTENT[color]} ${
          isExpanded.value ? "max-h-full" : "max-h-36"
        } overflow-hidden`}
      >
        {description}
      </p>
      <div
        class={`absolute rounded-full bottom-6 left-0 text-md font-semibold ml-12 cursor-pointer ${
          COLORS_CONTENT[color]
        }`}
        onClick={() => {
          isExpanded.value = !isExpanded.value;
        }}
      >
        {isExpanded.value ? "Ler menos..." : "Ler mais..."}
      </div>
      <img
        className="absolute w-28 rounded-full -bottom-16 right-12 z-10"
        src={image}
      />
    </div>
  );
}
