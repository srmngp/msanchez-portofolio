import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function HeartOfGold() {
  const images = [
    {
      src: "/design-projects/heart-of-gold/imagen1_hog.png",
      alt: "heart-of-gold-1",
      className: "md:col-span-2",
      aspectRatio: "1376/800",
    },
    {
      src: "/design-projects/heart-of-gold/imagen2_hog.png",
      alt: "heart-of-gold-2",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen3_hog.png",
      alt: "heart-of-gold-3",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen4_hog.png",
      alt: "heart-of-gold-4",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen5_hog.png",
      alt: "heart-of-gold-5",
      aspectRatio: "678/940",
    },
    {
      src: "/design-projects/heart-of-gold/imagen6_hog.png",
      alt: "heart-of-gold-6",
      className: "md:col-span-2",
      aspectRatio: "1376/950",
    },
    {
      src: "/design-projects/heart-of-gold/imagen7_hog.png",
      alt: "heart-of-gold-7",
      className: "md:col-span-2",
      aspectRatio: "1376/950",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/heart-of-gold/portada_hog.png"
      title="Heart of Gold Hostel"
      description={[
        "As part of a practical exercise, I selected the hostel where I previously worked to design and develop new graphic and branding materials based on their existing corporate identity.",
        "My role as a Graphic Designer involved research, Adobe Suite, Figma, branding, and UI design. The outcome was a refreshed visual identity and communication assets that enhanced the hostel's visibility and strengthened guest engagement.",
        "2024",
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Heart of Gold Hostel"],
            Designer: ["Maria Sanchez"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
