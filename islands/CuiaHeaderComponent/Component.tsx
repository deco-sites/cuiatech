import { SiteNavigationElement } from "apps/commerce/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import Button from "site/components/ui/Button.tsx";
import { Signal, useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Props {
  navItems?: SiteNavigationElement[] | null;
  logo: Logo;
  iconButtons?: {
    icon: "Instagram" | "WhatsApp" | "Linkedin" | "Message";
    url: string;
  }[];
}

export default function Component({ logo, iconButtons, navItems }: Props) {
  const signal = useSignal(false);
  const width = globalThis.innerWidth;

  return (
    <>
      <div class="w-[90%] flex justify-between lg:justify-center items-center">
        <img
          src={logo.src}
          alt={logo.alt}
          width={width < 500 ? 150 : logo.width}
        />

        <nav class={`w-[80%] lg:flex hidden items-center justify-center ml-5`}>
          <ul class={`flex lg:gap-7 xl:gap-10 items-center`}>
            {navItems?.map((node) => (
              <li class="hover:bg-primary hover:text-white hover:font-medium hover:scale-125 transition:all ease-in-out duration-300 px-6 py-2 rounded-md cursor-pointer lg:text-sm xl:text-[16px]">
                <a
                  href={
                    node.name && node.name.toLowerCase() === "contato"
                      ? "#contato"
                      : node.url
                  }
                >
                  <span>{node.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div class="lg:flex hidden items-center lg:gap-2">
          {iconButtons?.map((button) => (
            <>
              <Button
                class="btn-circle btn-sm btn-ghost sm:flex bg-primary hover:bg-primary items-center justify-center hover:scale-125 transition:all ease-in-out duration-300"
                aria-label="search icon button"
              >
                <a
                  href={button.url}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <Icon
                    id={button.icon}
                    size={24}
                    strokeWidth={0.2}
                    fontWeight={600}
                    style={{
                      color: "white",
                    }}
                  />
                </a>
              </Button>
            </>
          ))}
        </div>
        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
          onClick={() => {
            signal.value = !signal.value;
          }}
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {signal.value === true && (
        <div class="lg:hidden w-full flex flex-col items-center justify-center p-4 bg-base-200 absolute z-50 top-[110px] left-0 shadow-md">
          <nav>
            <ul class="flex flex-col gap-4">
              {navItems?.map((node) => (
                <li class="hover:bg-primary hover:text-white hover:font-medium hover:scale-125 transition:all ease-in-out duration-300 px-6 py-2 rounded-md cursor-pointer lg:text-sm xl:text-[16px]">
                  <a
                    href={
                      node.name && node.name.toLowerCase() === "contato"
                        ? "#contato"
                        : node.url
                    }
                  >
                    <span>{node.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
