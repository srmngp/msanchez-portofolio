"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function CarOnSale() {
  const images = [
    {
      src: "/design-projects/car-on-sale/imagen1_caronsale.webp",
      alt: "caronsale-1",
      aspectRatio: "1376/810",
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
      aspectRatio: "1376/810",
    },
    {
      src: "/design-projects/car-on-sale/imagen5_caronsale.webp",
      alt: "caronsale-5",
      aspectRatio: "1376/810",
    },
    {
      src: "/design-projects/car-on-sale/imagen6_caronsale.webp",
      alt: "caronsale-6",
      aspectRatio: "1376/810",
    },
    {
      src: "/design-projects/car-on-sale/imagen7_caronsale.webp",
      alt: "caronsale-7",
      aspectRatio: "1376/810",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/car-on-sale/portada_caronsale.webp"
      title="CarOnSale"
      description={[
        <>
          {"Social media and design for CarOnSale, a Berlin-based automotive tech startup. I took ownership of content and asset creation across "}
          <a
            href="https://www.linkedin.com/company/caronsale/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-500 transition-colors"
          >
            {"the company's social channels"}
          </a>
          {", and joined the core team behind a company-wide rebrand — producing visual assets across web, print, and social. I set up new production workflows using Freepik AI, NanoBanana, DataLeap, and Langdock to speed up content turnaround, and worked cross-functionally with Marketing, HR, Talent Acquisition, and Product Design."}
        </>,
        <>
          <strong>
            {"Over 90 days the channels averaged 34.94% LinkedIn engagement across 26 posts — roughly 10× benchmark — with 120K+ combined organic reach across LinkedIn and Instagram."}
          </strong>
          {" I launched seven content series, including Welcome Days, and built the systems underneath them: a centralized content calendar, a weekly production workflow, a template library, and a bilingual EN/DE copywriting standard."}
        </>,
        "Beyond the channels, I produced the Women@COS interview campaign for International Women's Day, directed video recording and editing — including coaching colleagues to feel comfortable on camera — and contributed to the development of a custom internal AI copywriting tool.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["Social Media & Design"],
            Dates: ["2025 – 2026"],
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
