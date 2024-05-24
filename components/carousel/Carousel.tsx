import { ImageWidget } from "apps/admin/widgets.ts";
import { signal } from "@preact/signals";

export type Slide = Array<{
  title: string;
  image: ImageWidget;
}>;

export interface Props {
  slides: Slide[];
}

export default function Component({ slides }: Props) {
  return (
    <>
      <div className="carousel w-full lg:container flex justify-center lg:max-w-7xl lg:mx-auto mx-5 md:mx-10">
        {slides.map((images, index) => (
          <div
            id={"slide" + index}
            className="carousel-item relative w-full flex justify-center"
          >
            <div class="flex justify-center items-center w-full gap-4">
              {images.map((image, index) => (
                <div class="w-[50%] h-60 flex rounded-[33px] bg-primary-500">
                </div>
              ))}
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={"#slide" +
                  (index - 1 < 0 ? slides.length - 1 : index - 1)}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={"#slide" + (index + 1 >= slides.length ? 0 : index + 1)}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {slides.map((_, index) => (
          <a
            href={"#slide" + index}
            className="w-2 h-2 bg-secondary-500 rounded-full cursor-pointer"
          />
        ))}
      </div>
    </>
  );
}
