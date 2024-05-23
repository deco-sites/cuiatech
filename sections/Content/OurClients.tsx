import { ImageWidget } from "apps/admin/widgets.ts";
import Slides from "site/islands/Slides/Slides.tsx";

interface OurClientsProps {
  title?: string;
  slides?: Array<{
    title: string;
    image: ImageWidget;
  }>[];
}

export default function OurClients({
  title = "Nossos clientes",
  slides = [
    [
      {
        title: "Prospera Saúde",
        image: "/image/carousel/prospera.png",
      },
      {
        title: "Conducco",
        image: "/image/carousel/conducco.png",
      },
      {
        title: "Latendi",
        image: "/image/carousel/tendi.png",
      },
      {
        title: "Pordeus",
        image: "/image/carousel/pordeus.png",
      },
      {
        title: "Looping",
        image: "/image/carousel/looping.png",
      },
    ],
    [
      {
        title: "Biomaq",
        image: "/image/carousel/biomaq.png",
      },
      {
        title: "Refera",
        image: "/image/carousel/refera.png",
      },
      {
        title: "Viva Móveis",
        image: "/image/carousel/vivamoveis.png",
      },
      {
        title: "Phorte",
        image: "/image/carousel/phorte.png",
      },
      {
        title: "SS Móveis",
        image: "/image/carousel/ssmoveis.jpg",
      },
    ],
    [
      {
        title: "UChallenger",
        image: "/image/carousel/uchallenger.png",
      },
      {
        title: "Protector Brasil",
        image: "/image/carousel/protectorbrasil.png",
      },
      {
        title: "Passaporte do Saber",
        image: "/image/carousel/passaportedosaber.jpg",
      },
      {
        title: "KVoltz",
        image: "/image/carousel/kvoltz.jpg",
      },
      {
        title: "Felipelli",
        image: "/image/carousel/felipelli.jpg",
      },
    ],
    [
      {
        title: "Colabora Saúde",
        image: "/image/carousel/colaborasaude.jpg",
      },
    ],
  ],
}: OurClientsProps) {
  return (
    <>
      <div class="py-24">
        <h1 class="mb-8 text-3xl text-accent font-bold text-center">
          {title}
        </h1>
        <Slides slides={slides} />
      </div>
    </>
  );
}
