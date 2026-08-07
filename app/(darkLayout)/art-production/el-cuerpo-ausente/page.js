"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function ElCuerpoAusente() {
  const images = [
    {
      src: "/art-production/el-cuerpo-ausente/imagen1_cuerpo-ausente.webp",
      alt: "el-cuerpo-ausente-1",
      aspectRatio: "384/558",
    },
    {
      src: "/art-production/el-cuerpo-ausente/imagen2_cuerpo-ausente.webp",
      alt: "el-cuerpo-ausente-2",
      aspectRatio: "661/960",
    },
    {
      src: "/art-production/el-cuerpo-ausente/imagen3_cuerpo-ausente.webp",
      alt: "el-cuerpo-ausente-3",
      aspectRatio: "3542/2362",
    },
    {
      src: "/art-production/el-cuerpo-ausente/imagen4_cuerpo-ausente.webp",
      alt: "el-cuerpo-ausente-4",
      aspectRatio: "661/960",
    },
    {
      src: "/art-production/el-cuerpo-ausente/imagen5_cuerpo-ausente.webp",
      alt: "el-cuerpo-ausente-5",
      aspectRatio: "5184/3456",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/el-cuerpo-ausente/portada_cuerpo-ausente.webp"
      title="El Cuerpo Ausente"
      description={[
        "Made during my exchange year in the Czech Republic, and the piece where I worked across the most media at once — photography, photographic intervention, and painting layered over each other.",
        "Here the wreath disappears and only the place is left. It's about the emptiness after losing someone close, and specifically about what time does to it: the memory slowly distorts, details drop away, and eventually all that remains is a thread of nostalgia. A feeling that can't be described, only felt — how every place that person once occupied quietly turns into longing.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
