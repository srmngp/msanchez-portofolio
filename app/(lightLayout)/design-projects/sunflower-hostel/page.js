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
          {" output — planning, briefing, and design. Using Procreate, Adobe Creative Suite, and Canva, I built a refreshed visual identity across video, reels, and illustrated assets, capturing the hostel's rooms, activities, and atmosphere."}
        </>,
        <>
          {"I built the presence from scratch and have run a full year of sustained multi-format content — "}
          <strong>{"104 pieces"}</strong>
          {" across feed, reels, and stories, at a steady two posts and two reels a month with no gaps. Engagement analysis showed reels outperforming every other format at roughly "}
          <strong>{"2.9× the interactions of a feed post"}</strong>
          {", so I shifted the content mix toward them — "}
          <strong>{"followers grew ~44% over the year, from 1,193 to 1,715, with positive net growth in every single month."}</strong>
        </>,
        <>
          {"The reach went well past the existing audience: "}
          <strong>{"78.7% of the accounts engaging in the most recent quarter weren't followers yet."}</strong>
          {" And the audience that formed matches who actually books the hostel — "}
          <strong>{"41.9% aged 25–34"}</strong>
          {", concentrated in Berlin, Germany, the UK, the US, Italy, and the Netherlands."}
        </>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["Social Media Team Coordinator"],
            Dates: ["2024 – Present"],
            Entity: ["Sunflower Hostel"],
            "Creative Team": [
              "María Sánchez",
              "Martina Donofrio",
              "Mathias Pasula",
              "Marianthi Eulogitou",
            ],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
