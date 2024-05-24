import { ImageWidget } from "apps/admin/widgets.ts";

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
  const scrollToSlide = (index: number) => {
    return (event: Event) => {
      event?.preventDefault();
      document.querySelector(`#slide${index}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    };
  };

  return (
    <section class="w-full flex flex-col items-center py-[60px]">
      <>
        <div className="carousel w-full">
          {slides.map((items, index) => (
            <div
              id={"slide" + index}
              class="carousel-item relative w-full flex flex-col items-center justify-center gap-[40px]"
            >
              <div class="w-[90%] sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[16px] items-center">
                <h2 class="text-3xl md:text-[42px] text-primary-550 font-sans text-center md:text-start font-semibold">
                  {items.title}
                </h2>
                <p class="text-[16px] md:text-[20px] text-primary-550 text-center">
                  {items.subtitle}
                </p>
              </div>

              <div class="flex justify-around items-center w-full mt-5 sm:mt-0 pb-2">
                {items.slideInfo.map((image, index) => (
                  <div
                    id="image-container"
                    class={`flex flex-col gap-4 items-center justify-center ${
                      index === 3 ? "hidden" : "sm:flex"
                    } last:hidden md:last:flex`}
                  >
                    <div class="md:max-w-[120px] max-w-[70px] flex flex-wrap items-center justify-center gap-2">
                      <img
                        src={image.image}
                        width={image.imageDescription === "Mobile" ? 34 : 60}
                        height={image.imageDescription === "Mobile" ? 30 : 60}
                      />

                      <span class="text-[16px] md:text-[20px] text-accent text-center font-bold leading-[16px] md:leading-[20px] mt-[10px]">
                        {image.imageDescription}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
                <a
                  className={`btn btn-ghost hover:text-white bg-white border-0 ${
                    index === 0 ? "hover:bg-gray-500" : "hover:bg-primary"
                  } ${index === 0 ? "disabled" : ""}`}
                  onClick={index > 0 ? scrollToSlide(index - 1) : undefined}
                >
                  ❮
                </a>
                <a
                  className={`btn btn-ghost bg-white hover:text-white border-0 ${
                    index === slides.length - 1
                      ? "hover:bg-gray-500"
                      : "hover:bg-primary"
                  } ${index === slides.length - 1 ? "disabled" : ""}`}
                  onClick={
                    index < slides.length - 1
                      ? scrollToSlide(index + 1)
                      : undefined
                  }
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 justify-center w-full py-2 gap-4">
          {slides.map((_, index) => (
            <a
              onClick={scrollToSlide(index)}
              className="w-[5px] h-[5px] bg-secondary-500 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </>
    </section>
  );
}
