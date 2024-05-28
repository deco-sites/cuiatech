import { ImageWidget } from "apps/admin/widgets.ts";
import SolutionsSlider from "site/islands/SolutionsSlider/SolutionsSlider.tsx";

export type Slide = {
  title: string;
  subtitle: string;
  slideInfo: {
    imageDescription: string;
    image: ImageWidget;
  }[];
};

export interface Props {
  slides: Slide[];
}

export default function TecnologiesAndServices({
  slides = [
    {
      title: "Tecnologias",
      subtitle:
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
    {
      title: "Soluções",
      subtitle: "Principais serviços oferecidos",
      slideInfo: [
        {
          image: "/image/tecnologiesAndSolutions/discovery.png",
          imageDescription: "Ideação & Discovery",
        },
        {
          image: "/image/tecnologiesAndSolutions/consultories.png",
          imageDescription: "Consultorias",
        },
        {
          image: "/image/tecnologiesAndSolutions/solutionsDevelopment.png",
          imageDescription: "Desenvolvimento de Soluções",
        },
        {
          image: "/image/tecnologiesAndSolutions/squadAsAService.png",
          imageDescription: "Squad as a Service",
        },
      ],
    },
  ],
}: Props) {
  return (
    <section class="w-full flex flex-col items-center py-[60px]">
      <SolutionsSlider slides={slides} />
    </section>
  );
}
