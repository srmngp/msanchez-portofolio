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
        "A photographic and painterly exploration of absence. By digitally erasing figures from archival photographs and replacing them with drawn silhouettes, the work confronts the void left by missing presences and the silent narratives of empty spaces.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
