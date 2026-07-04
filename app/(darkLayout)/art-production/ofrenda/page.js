"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function Ofrenda() {
  const images = [
    {
      src: "/art-production/ofrenda/imagen1_ofrenda.webp",
      alt: "ofrenda-1",
      aspectRatio: "2464/3063",
    },
    {
      src: "/art-production/ofrenda/imagen2_ofrenda.webp",
      alt: "ofrenda-2",
      aspectRatio: "5184/3456",
    },
    {
      src: "/art-production/ofrenda/imagen3_ofrenda.webp",
      alt: "ofrenda-3",
      aspectRatio: "5184/3456",
    },
    {
      src: "/art-production/ofrenda/imagen4_ofrenda.webp",
      alt: "ofrenda-4",
      aspectRatio: "5184/3456",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/ofrenda/portada_ofrenda.webp"
      title="Ofrenda"
      description={[
        "A mixed-media project that reflects on memory and absence through the symbolism of funeral flowers. Childhood photographs were reinterpreted into floral compositions, creating a ritual-like space where personal memories transform into universal reflections on loss and remembrance.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
