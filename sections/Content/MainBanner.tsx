import { ImageWidget } from "apps/admin/widgets.ts";
import MainSlider from "site/islands/MainSlider/MainSlider.tsx";

export type CuiaSlider = {
  title?: string;
  description?: string;
  buttonText?: string;
  slideInfo?: {
    image: ImageWidget;
    imageDescription: string;
  }[];
  firstSlide?: {
    image?: ImageWidget;
    imageDescription: ImageWidget;
  };
  variant: "1" | "2" | "3";
};

export interface Props {
  slides: CuiaSlider[];
}

export default function MainBanner({
  slides = [
    {
      variant: "1",
      firstSlide: {
        image: "/image/mainBanner/cuia.png",
        imageDescription: "/image/mainBanner/tecnologyToTransform.png",
      },
    },
    {
      variant: "2",
      title: "Nossos Serviços",
      description: "Criação de valor a partir de novos conceitos e ideias",
      slideInfo: [
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/web.png",
          imageDescription: "Web Front End",
        },
        {
          image: "/image/tecnologiesAndSolutions/backend.png",
          imageDescription: "Web Back End",
        },
        {
          image: "/image/tecnologiesAndSolutions/infra.png",
          imageDescription: "Infra",
        },
      ],
    },
    {
      variant: "3",
      title: "Tecnologias",
      description:
        "Somos capacitados nas principais tecnologias de desenvolvimento de soluções digitais.",
      slideInfo: [
        {
          image: "/image/tecnologiesAndSolutions/mobile.png",
          imageDescription: "Mobile",
        },
        {
          image: "/image/tecnologiesAndSolutions/web.png",
          imageDescription: "Web Front End",
        },
        {
          image: "/image/tecnologiesAndSolutions/backend.png",
          imageDescription: "Web Back End",
        },
        {
          image: "/image/tecnologiesAndSolutions/infra.png",
          imageDescription: "Infra",
        },
      ],
    },
  ],
}: Props) {
  return (
    <section class={`w-full flex flex-col items-center justify-center `}>
      <MainSlider slides={slides} />
    </section>
  );
}
