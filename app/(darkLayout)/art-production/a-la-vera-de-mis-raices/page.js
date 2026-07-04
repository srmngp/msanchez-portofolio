"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function ALaVera() {
  const images = [
    {
      src: "/art-production/a-la-vera/imagen1_raices.webp",
      alt: "a-la-vera-de-mis-raices-1",
      aspectRatio: "1280/1280",
    },
    {
      src: "/art-production/a-la-vera/imagen2_raices.webp",
      alt: "a-la-vera-de-mis-raices-2",
      aspectRatio: "1280/1280",
    },
    {
      src: "/art-production/a-la-vera/imagen3_raices.webp",
      alt: "a-la-vera-de-mis-raices-3",
      aspectRatio: "1280/1280",
    },
    {
      src: "/art-production/a-la-vera/imagen4_raices.webp",
      alt: "a-la-vera-de-mis-raices-4",
      aspectRatio: "1280/1280",
    },
    {
      src: "/art-production/a-la-vera/imagen5_raices.webp",
      alt: "a-la-vera-de-mis-raices-5",
      aspectRatio: "1280/1280",
    },
    {
      src: "/art-production/a-la-vera/imagen6_raices.webp",
      alt: "a-la-vera-de-mis-raices-6",
      aspectRatio: "1280/1280",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/a-la-vera/portada_raices.webp"
      imageAspectRatio="1376/800"
      title="A la vera de mis raíces"
      description={[
        "A textile project that reconnects with cultural traditions through crochet. By combining ancestral craft with contemporary composition, the work positions landscape as both backdrop and protagonist, symbolizing the longing for origin and belonging.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
