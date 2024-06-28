import { ImageWidget } from "apps/admin/widgets.ts";
import { Signal, useSignal } from "@preact/signals";

export type Slide = Array<{
  title: string;
  image: ImageWidget;
}>;

export interface Props {
  slides: Slide[];
}

const scrollToSlide = (index: number, sig: Signal) => {
  return (event: Event) => {
    sig.value = index;
    event?.preventDefault();
    document.querySelector(`#slide-oc${index}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
};

export default function Component({ slides }: Props) {
  const current = useSignal(0);

  return (
    <>
      <div class="relative w-full">
        <div className="z-10 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
          <a
            className="btn btn-ghost text-warning text-2xl"
            onClick={scrollToSlide(
              current.value - 1 < 0 ? slides.length - 1 : current.value - 1,
              current,
            )}
          >
            ❮
          </a>
          <a
            className="btn btn-ghost text-warning text-2xl"
            onClick={scrollToSlide(
              current.value + 1 >= slides.length ? 0 : current.value + 1,
              current,
            )}
          >
            ❯
          </a>
        </div>
        <div className="carousel w-full">
          {slides.map((images, index) => (
            <div
              id={"slide-oc" + index}
              className="carousel-item relative w-full"
            >
              <div class="flex flex-col justify-around items-center w-full px-16 sm:flex-row">
                {images.map((image) => (
                  <div class="w-32">
                    <img src={image.image} className="w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 justify-center items-center w-full py-2 gap-4">
          {slides.map((_, index) => (
            <a
              onClick={scrollToSlide(index, current)}
              data-active={index === current.value}
              className="w-[5px] h-[5px] bg-warning rounded-full cursor-pointer data-[active=true]:w-[7px] data-[active=true]:h-[7px]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
