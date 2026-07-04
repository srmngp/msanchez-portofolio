"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function Duelo() {
  const images = [
    {
      src: "/art-production/duelo/imagen1_duelo.webp",
      alt: "duelo-1",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen2_duelo.webp",
      alt: "duelo-2",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen3_duelo.webp",
      alt: "duelo-3",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen4_duelo.webp",
      alt: "duelo-4",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen5_duelo.webp",
      alt: "duelo-5",
      aspectRatio: "892/595",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/duelo/portada_duelo.webp"
      title="Duelo"
      description={[
        "A performance piece exploring mourning rituals and their presence in public space. Through minimal interventions resembling offerings, the work transforms ordinary environments into sites of reflection, evoking the emotional resonance of collective memory and grief.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
