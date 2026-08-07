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
        "My final project for the Master's in Interdisciplinary Artistic Production, and the point where the work turns from loss toward inheritance.",
        "It's a body of crochet exploring memory through a craft medium, and a way of honouring the handmade art of ordinary people — my mother, my grandmothers, women who made things constantly without ever calling it art. Crochet abstracts form by nature: you build a shape out of repeated loops and it arrives approximate, softened, not quite the thing it represents. That is exactly what memory does. So the technique stopped being a way of making the piece and became the argument in it.",
        <em key="note">
          {"Exhibited at the Master's open room (2020–2021), at the Master Showcase with my cohort (2021), and at the first and third editions of X.BIT (2024 and 2025)."}
        </em>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
