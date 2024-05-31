import { ImageWidget } from "apps/admin/widgets.ts";
import { Signal, useSignal } from "@preact/signals";

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

const scrollToSlide = (index: number, sig: Signal) => {
  return (event: Event) => {
    sig.value = index;
    event?.preventDefault();
    document.querySelector(`#slide-mainSlider${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
};

export default function Component({ slides }: Props) {
  const current = useSignal(0);
  const width = globalThis.innerWidth;

  return (
    <>
      <div className="carousel w-full">
        {slides.map((item, index) => (
          <div
            id={"slide-mainSlider" + index}
            class={`carousel-item relative w-full flex flex-col items-center justify-center gap-[40px] md:py-[40px] py-4 ${
              index === 0 ? "bg-base-200" : "bg-primary"
            }`}
          >
            {item.variant === "1" && (
              <div class="flex justify-around items-center w-full mt-5 sm:mt-0 pb-2">
                <div
                  id="image-container"
                  class={`flex flex-col gap-4 items-center justify-center `}
                >
                  <div class="md:max-w-[500px] max-w-[200px] flex flex-col flex-wrap items-center justify-center gap-[50px]">
                    <img
                      src={item.firstSlide?.image}
                      width={150}
                      height={150}
                    />

                    <img
                      src={item.firstSlide?.imageDescription}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            )}
            {item.variant === "2" && (
              <>
                <div class="w-[90%] sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[16px] items-center">
                  <h2 class="text-3xl md:text-[42px] text-primary-content font-sans text-center md:text-start font-semibold">
                    {item.title}
                  </h2>
                  <p class="text-[16px] md:text-[20px] text-primary-content text-center">
                    {item.description}
                  </p>
                </div>

                <div class="flex justify-around items-center w-full mt-5 sm:mt-0 pb-2">
                  {item?.slideInfo?.map((image, index) => (
                    <div
                      id="image-container"
                      class={`flex flex-col gap-0 md:gap-4 items-center justify-center ${
                        index === 3 ? "hidden" : "sm:flex"
                      } last:hidden md:last:flex`}
                    >
                      <div class="md:max-w-[160px] max-w-[65px] flex flex-col flex-wrap items-center justify-center">
                        <img
                          src={image.image}
                          width={width > 450 ? 60 : 45}
                          height={width > 450 ? 60 : 45}
                        />

                        <div class="w-[50%] flex flex-wrap items-center justify-center mt-1 mt:gap-2">
                          <span class="text-[14px] md:text-[20px] text-primary-content text-center font-bold leading-[16px] md:leading-[20px]">
                            {image.imageDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {item.variant === "3" && (
              <>
                <div class="w-[90%] sm:w-[50%] 2xl:w-[30%] flex flex-col gap-[16px] items-center">
                  <h2 class="text-3xl md:text-[42px] text-primary-content font-sans text-center md:text-start font-semibold">
                    {item.title}
                  </h2>
                  <p class="text-[16px] md:text-[20px] text-primary-content text-center">
                    {item.description}
                  </p>
                </div>

                <div class="flex justify-around items-center w-full mt-5 sm:mt-0 pb-2">
                  {item?.slideInfo?.map((image, index) => (
                    <div
                      id="image-container"
                      class={`flex flex-col gap-4 items-center justify-center ${
                        index === 3 ? "hidden" : "sm:flex"
                      } last:hidden md:last:flex`}
                    >
                      <div class="md:max-w-[160px] max-w-[75px] flex flex-col flex-wrap items-center justify-center gap-1 md:gap-2">
                        <img
                          src={image.image}
                          width={width > 450 ? 60 : 45}
                          height={width > 450 ? 60 : 45}
                        />

                        <span class="text-[14px] md:text-[20px] text-primary-content text-center font-bold leading-[16px] md:leading-[20px] mt-[10px]">
                          {image.imageDescription}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mb-4 ">
              <a
                className={`btn btn-ghost ${
                  item.variant === "1" ? "text-secondary-content" : "text-white"
                } hover:text-white border-0  ${
                  item.variant === "1" && "hover:bg-primary"
                } md:text-[34px]`}
                onClick={scrollToSlide(
                  current.value - 1 < 0 ? slides.length - 1 : current.value - 1,
                  current
                )}
              >
                ❮
              </a>
              <a
                className={`btn btn-ghost ${
                  item.variant === "1" ? "text-secondary-content" : "text-white"
                } ${
                  item.variant === "1" && "hover:bg-primary"
                } hover:text-white border-0 md:text-[34px]`}
                onClick={scrollToSlide(
                  current.value + 1 >= slides.length ? 0 : current.value + 1,
                  current
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
