import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";

interface Buttons {
  href?: string;
  label?: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  /**
   * @format textarea
   */
  description?: string;
  image: ImageWidget;
  imageSize: "small" | "medium" | "large";
  placement: "left" | "right";
  buttons?: Buttons[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

const IMAGE_SIZE = {
  small: "h-[15rem]",
  medium: "h-[25rem]",
  large: "h-full",
};

export default function ImagePresentation({
  title,
  description = "Section Description",
  image,
  subtitle,
  placement = "left",
  disableSpacing,
  imageSize = "medium",
  buttons,
}: Props) {
  return (
    <div class="w-full bg-[#E6E8E6]">
      <div
        class={`flex lg:container lg:max-w-7xl lg:mx-auto mx-5 md:mx-10 justify-evenly ${
          PLACEMENT[placement ?? "left"]
        } gap-14 md:gap-20 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-6 lg:pt-24"
        } ${disableSpacing?.bottom ? "" : "pb-6 lg:pb-24"}`}
      >
        <Image
          width={640}
          class={`${IMAGE_SIZE[imageSize ?? "medium"]} object-fit z-10 w-auto`}
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image ||
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/80a115a2-3623-4e9b-aec7-42601c2ff416"}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <div class="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:max-w-xl gap-4 z-10">
          <div class="flex flex-col gap-3">
            <p class="text-[40px] leading-[110%] font-normal text-accent">
              {title || "Section Title"}
            </p>
            {subtitle && (
              <p class="text-[33px] leading-[100%] text-accent font-semibold">
                {subtitle}
              </p>
            )}
          </div>

          <p class="text-accent text-[15px] md:text-[18px] leading-[150%]">
            {description || "Section Description"}
          </p>
          {buttons?.map((button) => (
            <a
              class="px-4 py-2 inline-flex rounded-[10px] justify-center items-center gap-2 border-none text-primary-content bg-primary transition-colors duration-200 cursor-pointer"
              href={button.href}
            >
              <span>{button.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
