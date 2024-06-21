import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  title: string;
  blogs: Blog[];
}

export interface Blog {
  src: ImageWidget;
  alt: string;
  href: string;
  description: string;
}

const DEFAULT_PROPS = {
  title: "Blogs",
  blogs: [],
};

export default function Blog(props: Props) {
  const { title, blogs } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const blogsContent = Array.isArray(blogs) && blogs.length > 0
    ? (
      <div class="flex justify-center mt-8 mb-8 bg-base-200">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogs.slice(0, 3).map((item, index) => (
            <div>
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                class="block hover:scale-105 transition-transform duration-300 overflow-hidden m-4"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  class="w-full h-auto object-cover shadow-lg"
                />
                <p class="text-secondary-content text-center font-normal px-2 py-4">
                  {item.description}
                </p>
              </a>
              <div class="btn w-24 bg-primary font-normal">
                <a
                  href={item.href}
                  target="_blank"
                  class="text-primary-content"
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
    : null;

  return (
    <div class="w-full text-center bg-base-200 py-16">
      <h1 class="text-3xl font-bold text-secondary-content mb-4">{title}</h1>
      {blogsContent}
    </div>
  );
}
