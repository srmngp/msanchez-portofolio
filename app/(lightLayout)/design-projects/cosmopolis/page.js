"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function Cosmopolis() {
  const images = [
    {
      src: "/design-projects/cosmopolis/imagen1_cosmopolis.webp",
      alt: "cosmopolis-1",
      className: "md:col-span-1",
      aspectRatio: "440/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen2_cosmopolis.webp",
      alt: "cosmopolis-2",
      className: "md:col-span-2",
      aspectRatio: "903/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen3_cosmopolis.webp",
      alt: "cosmopolis-3",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen4_cosmopolis.webp",
      alt: "cosmopolis-4",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen5_cosmopolis.webp",
      alt: "cosmopolis-5",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen6_cosmopolis.webp",
      alt: "cosmopolis-6",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen7_cosmopolis.webp",
      alt: "cosmopolis-7",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen8_cosmopolis.webp",
      alt: "cosmopolis-8",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/cosmopolis/portada_cosmopolis.webp"
      title="Cosmopolis"
      description={[
        "Master's project in UX/UI Design. I designed Cosmopolis, a travel and social app built around local knowledge — connecting travelers with the places only residents know, instead of another guide to tourist landmarks. The concept came out of years working in Berlin's hospitality industry, watching what travelers actually wanted versus what they were being sold. Full process: user research, user flow, prototyping, and visual design in Figma.",
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
