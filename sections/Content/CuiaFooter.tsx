import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

// Definição das interfaces para as propriedades
export interface Props {
  baseContact: BaseTextConfiguration;
  baseText: BaseTextConfiguration;
  logo?: Logo;
  social: {
    icon: "Instagram" | "WhatsApp" | "Linkedin" | "Message";
    url: string;
  }[];
}

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface BaseTextConfiguration {
  text: string;
  textFontSize: number;
  textFontWeight?: number;
  textAlign?: "center" | "left" | "right";
}

export default function CuiaFooter({
  social = [
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
  baseContact,
  baseText,
  logo,
}: Props) {
  const socialContent = social.map((item, index) => (
    <a
      href={item.url}
      style={{
        color: "white",
        fontWeight: "bold",
      }}
      class="hover:scale-125"
    >
      <Icon
        id={item.icon}
        size={20}
        strokeWidth={0.2}
        fontWeight={600}
        style={{
          color: "white",
        }}
      />
    </a>
  ));

  return (
    <div class="w-full text-center bg-primary mb-6 last:mb-0 py-5">
      <div class="flex justify-center mb-6 last:mb-0">
        <img
          src={logo?.src}
          alt={logo?.alt}
          width={logo?.width}
          height={logo?.height}
          style={{
            marginTop: "1rem",
          }}
        />
      </div>
      <div
        class="mb-6 last:mb-0"
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: `${baseContact.textFontSize}px`,
          fontWeight: baseContact.textFontWeight,
          textAlign: baseContact.textAlign,
        }}
      >
        <p style={{ color: "white" }}>{baseContact.text}</p>
      </div>
      <div class="flex justify-center space-x-8 mb-6">{socialContent}</div>
      <div
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: `${baseText.textFontSize}px`,
          fontWeight: baseText.textFontWeight,
          textAlign: baseText.textAlign,
        }}
      >
        <p style={{ color: "white" }}>{baseText.text}</p>
      </div>
    </div>
  );
}
