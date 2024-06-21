import { ImageWidget } from "apps/admin/widgets.ts";
import { Signal, useSignal } from "@preact/signals";

export type Slide = {
  title?: string;
  subtitle?: string;
  slideInfo?: {
    imageDescription: string;
    image: ImageWidget;
  }[];
};

export interface Props {
  slides: Slide[];
}

const scrollToSlide = (index: number, sig: Signal) => {
  return (event: Event) => {
    sig.value = index;
    event?.preventDefault();
    document.querySelector(`#slide-ts${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
};

export default function Component({ slides }: Props) {
  const current = useSignal(0);

  return (
    <>
      <div className="carousel w-full">
        {slides.map((items, index) => (
          <div
            id={"slide-ts" + index}
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
              {items.slideInfo?.map((image, index) => {
                return (
                  <div
                    id="image-container"
                    class={`flex flex-col gap-4 items-center justify-center ${
                      index === 3 ? "hidden" : "sm:flex"
                    } last:hidden md:last:flex`}
                  >
                    <div class="md:max-w-[120px] max-w-[70px] flex flex-col flex-wrap items-center justify-center gap-2">
                      <img
                        src={image.image}
                        width={image.imageDescription === "Mobile" ? 34 : 60}
                        height={image.imageDescription === "Mobile" ? 30 : 60}
                      />

                      <span class="text-base md:text-xl text-accent text-center font-bold leading-[16px] md:leading-[20px] mt-[10px]">
                        {image.imageDescription}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
              <a
                className="btn btn-ghost hover:text-white  border-0 hover:bg-primary"
                onClick={scrollToSlide(
                  current.value - 1 < 0 ? slides.length - 1 : current.value - 1,
                  current,
                )}
              >
                ❮
              </a>
              <a
                className="btn btn-ghost  hover:text-white border-0 hover:bg-primary"
                onClick={scrollToSlide(
                  current.value + 1 >= slides.length ? 0 : current.value + 1,
                  current,
                )}
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
            onClick={scrollToSlide(index, current)}
            className="w-[5px] h-[5px] bg-secondary-500 rounded-full cursor-pointer"
          />
        ))}
      </div>
    </>
  );
}
