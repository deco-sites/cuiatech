import { ImageWidget } from "apps/admin/widgets.ts";
import { SiteNavigationElement } from "apps/commerce/types.ts";
import Button from "site/components/ui/Button.tsx";
import Icon from "site/components/ui/Icon.tsx";
import Menu from "site/islands/Menu.tsx";

interface Logo {
  src: "LogoCuia" | "LogoCuia";
  alt: string;
  width?: number;
  height?: number;
}

interface Props {
  navItems?: SiteNavigationElement[] | null;
  logo: Logo;
  iconButtons?: {
    icon: "Instagram" | "WhatsApp" | "Linkedin" | "Message";
    url: string;
  }[];
}

function CuiaHeader({
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Home",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sobre nós",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Serviços",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Casos",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Blog",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contato",
      url: "/",
    },
  ],
  logo,
  iconButtons = [
    {
      icon: "WhatsApp",
      url:
        "https://api.whatsapp.com/send/?phone=5511989833697&text&type=phone_number&app_absent=0",
    },
    {
      icon: "Instagram",
      url: "https://www.instagram.com/cuia.tech?igsh=N2plMXhwb3dpbzdt",
    },
    {
      icon: "Linkedin",
      url: "https://www.linkedin.com/company/cuiatech/about/?viewAsMember=true",
    },
    {
      icon: "Message",
      url: "/",
    },
  ],
}: Props) {
  return (
    <header class="max-h-[140px] w-full flex items-center justify-center p-4 ">
      <Menu navItems={navItems} />
      <div class="w-[90%] flex flex-col mlg:flex-row justify-center items-center">
        <Icon
          id={logo.src}
          alt={logo.alt}
          size={logo.width}
          strokeWidth={0.2}
          fontWeight={600}
          class="max-w-24 xl:max-w-20"
        />
        <nav class={`w-[80%] mlg:flex hidden items-center justify-center ml-5`}>
          <ul class={`flex lg:gap-3 xl:gap-7 items-center`}>
            {navItems?.map((node) => (
              <li class="hover:bg-primary hover:text-white hover:font-medium hover:scale-125 transition:all ease-in-out duration-300 px-6 py-2 rounded-md cursor-pointer lg:text-sm xl:text-[16px]">
                <a href={node.url}>
                  <span>{node.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div class="lg:flex hidden items-center lg:gap-2">
          {iconButtons.map((button) => (
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
      </div>
    </header>
  );
}

export default CuiaHeader;
