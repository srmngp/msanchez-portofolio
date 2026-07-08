"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function SunflowerHostel() {
  const images = [
    {
      src: "/design-projects/sunflower-hostel/imagen1_sunflower.webp",
      alt: "sunflower-1",
      aspectRatio: "5536/3204",
    },
    {
      src: "/design-projects/sunflower-hostel/imagen2_sunflower.webp",
      alt: "sunflower-2",
      aspectRatio: "5504/3200",
    },
    {
      src: "/design-projects/sunflower-hostel/imagen3_sunflower.webp",
      alt: "sunflower-3",
      aspectRatio: "5556/3212",
    },
    {
      src: "/design-projects/sunflower-hostel/imagen4_sunflower.webp",
      alt: "sunflower-4",
      aspectRatio: "5504/3200",
    },
    {
      src: "/design-projects/sunflower-hostel/imagen5_sunflower.webp",
      alt: "sunflower-5",
      aspectRatio: "5504/3200",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/sunflower-hostel/portada_sunflower.webp"
      imageAspectRatio="1376/800"
      title="Sunflower Hostel"
      description={[
        <>
          {"At Sunflower Hostel, one of Berlin's oldest hostels, I coordinate the content team and manage the "}
          <a
            href="https://www.instagram.com/sunflower_hostel/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-500 transition-colors"
          >
            {"hostel's social media"}
          </a>
          {" output — planning, briefing, and design. Using Procreate, Adobe Creative Suite, and Canva, I built a refreshed visual identity across video, reels, and illustrated assets, capturing the hostel's rooms, activities, and atmosphere. The result: a visual identity that keeps the hostel's original spirit intact while speaking to a new generation of travelers."}
        </>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
      footer={
        <ProjectFooter
          sections={{
            Entity: ["Sunflower Hostel"],
            "Creative Team": [
              "María Sánchez",
              "Martina Donofrio",
              "Mathias Pasula",
              "Marianthi Eulogitou",
            ],
            Designer: ["María Sánchez"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
