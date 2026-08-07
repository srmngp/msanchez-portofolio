import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function HeartOfGold() {
  const images = [
    {
      src: "/design-projects/heart-of-gold/imagen1_hog.webp",
      alt: "heart-of-gold-1",
      className: "md:col-span-2",
      aspectRatio: "1376/800",
    },
    {
      src: "/design-projects/heart-of-gold/imagen2_hog.webp",
      alt: "heart-of-gold-2",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen3_hog.webp",
      alt: "heart-of-gold-3",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen4_hog.webp",
      alt: "heart-of-gold-4",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen5_hog.webp",
      alt: "heart-of-gold-5",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen6_hog.webp",
      alt: "heart-of-gold-6",
      className: "md:col-span-2",
      aspectRatio: "1376/950",
    },
    {
      src: "/design-projects/heart-of-gold/imagen7_hog.webp",
      alt: "heart-of-gold-7",
      className: "md:col-span-2",
      aspectRatio: "1376/950",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/heart-of-gold/portada_hog.webp"
      title="Heart of Gold Hostel"
      description={[
        "While working at Heart of Gold Hostel I proposed and developed a visual identity concept for the property, building on a mural an artist had painted in the space. The work covered research, branding, and UI design in Adobe Creative Suite and Figma, and produced a design system proposal and a set of guest-facing communication concepts.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["Visual Identity Proposal"],
            Dates: ["2023 – 2024"],
            Entity: ["Heart of Gold Hostel"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
