import { SiteNavigationElement } from "apps/commerce/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import CuiaHeaderComponent from "site/islands/CuiaHeaderComponent/CuiaHeaderComponent.tsx";

interface Logo {
  src: ImageWidget;
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
  logo = {
    src: "/static/image/logo.png",
    alt: "Logo Cuia Tech",
  },
  iconButtons = [
    {
      icon: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=5511989833697&text&type=phone_number&app_absent=0",
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
    <header class="max-h-[140px] w-full flex items-center justify-center lg:p-4 p-0 relative">
      <CuiaHeaderComponent
        logo={logo}
        iconButtons={iconButtons}
        navItems={navItems}
      />
    </header>
  );
}

export default CuiaHeader;
