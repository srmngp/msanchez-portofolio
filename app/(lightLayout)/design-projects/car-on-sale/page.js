"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function CarOnSale() {
  const images = [
    {
      src: "/design-projects/car-on-sale/imagen1_caronsale.webp",
      alt: "caronsale-1",
      aspectRatio: "2560/1440",
    },
    {
      src: "/design-projects/car-on-sale/imagen2_caronsale.webp",
      alt: "caronsale-2",
      aspectRatio: "1376/883",
    },
    {
      src: "/design-projects/car-on-sale/imagen3_caronsale.webp",
      alt: "caronsale-3",
      aspectRatio: "1376/883",
    },
    {
      src: "/design-projects/car-on-sale/imagen4_caronsale.webp",
      alt: "caronsale-4",
      aspectRatio: "16/9",
    },
    {
      src: "/design-projects/car-on-sale/imagen5_caronsale.webp",
      alt: "caronsale-5",
      aspectRatio: "16/9",
    },
    {
      src: "/design-projects/car-on-sale/imagen6_caronsale.webp",
      alt: "caronsale-6",
      aspectRatio: "16/9",
    },
    {
      src: "/design-projects/car-on-sale/imagen7_caronsale.webp",
      alt: "caronsale-7",
      aspectRatio: "16/9",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/car-on-sale/portada_caronsale.webp"
      title="CarOnSale"
      description={[
        "Design and social media internship at CarOnSale, a Berlin-based automotive tech startup. I took ownership of content and asset creation for the company's social channels, and joined the core team behind a company-wide rebrand — producing visual assets across web, print, and social. Set up new production workflows using Freepik AI, NanoBanana, DataLeap, and Langdock to speed up content turnaround, and worked cross-functionally with Marketing, HR, Talent Acquisition, and Product Design.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
      footer={
        <ProjectFooter
          sections={{
            Entity: ["CarOnSale"],
            "Creative Team": ["CRU Design Agency", "Nuri Schömann", "María Sánchez"],
            Designer: ["María Sánchez", "Andrea Bazalar"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
