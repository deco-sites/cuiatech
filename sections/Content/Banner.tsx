import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo: ImageWidget;
  slogan: string;
  image: ImageWidget;
  imageAlt: string;
}

export default function Banner({ logo, slogan, image, imageAlt }: Props) {
  return (
    <div class="w-full relative flex justify-center items-center mt-8 mx-auto">
      <div class="absolute z-10 flex-row justify-center items-center gap-4">
        <img
          src={logo}
          alt="Tecnologia para transformar"
          class="w-40 h-auto object-contain mx-auto"
        />
        <h1 class="text-primary-content text-3xl text-center mt-4 font-futura font-light">
          {slogan}
        </h1>
      </div>
      <div class="absolute w-full h-full top-0 left-0 bg-primary opacity-60" />
      <div>
        <img
          src={image}
          alt={imageAlt}
          class="w-full h-72 sm:h-auto object-cover"
        />
      </div>
    </div>
  );
}
