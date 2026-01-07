"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function Cosmopolis() {
  const images = [
    {
      src: "/design-projects/cosmopolis/imagen1_cosmopolis.jpg",
      alt: "cosmopolis-1",
      className: "md:col-span-1",
      aspectRatio: "440/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen2_cosmopolis.jpg",
      alt: "cosmopolis-2",
      className: "md:col-span-2",
      aspectRatio: "903/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen3_cosmopolis.jpg",
      alt: "cosmopolis-3",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen4_cosmopolis.jpg",
      alt: "cosmopolis-4",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen5_cosmopolis.jpg",
      alt: "cosmopolis-5",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen6_cosmopolis.jpg",
      alt: "cosmopolis-6",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen7_cosmopolis.jpg",
      alt: "cosmopolis-7",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen8_cosmopolis.jpg",
      alt: "cosmopolis-8",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/cosmopolis/portada_cosmopolis.jpg"
      title="Cosmopolis"
      description={[
        "Cosmopolis es un proyecto que explora la relación entre la ciudad y sus habitantes a través de la tipografía y el color.",
        "La obra busca representar la diversidad y el dinamismo urbano mediante una composición visual impactante.",
        "2024",
      ]}
      galleryComponent={<Gallery images={images} gridCols={3} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Independent Project"],
            "Creative director": ["Maria Sanchez"],
            Designer: ["Maria Sanchez"],
            Location: ["Berlin, Germany", "Barcelona, Spain"],
          }}
        />
      }
    />
  );
}
