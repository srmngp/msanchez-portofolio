import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function Xbit() {
  const images = [
    {
      src: "/design-projects/xbit/imagen1_xbit.jpg",
      alt: "xbit-1",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen2_xbit.jpg",
      alt: "xbit-2",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen3_xbit.jpg",
      alt: "xbit-3",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen4_xbit.jpg",
      alt: "xbit-4",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen5_xbit.jpg",
      alt: "xbit-5",
      className: "md:col-span-2",
      aspectRatio: "1376/800",
    },
    {
      src: "/design-projects/xbit/imagen6_xbit.jpg",
      alt: "xbit-6",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen7_xbit.jpg",
      alt: "xbit-7",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen8_xbit.jpg",
      alt: "xbit-8",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen9_xbit.jpg",
      alt: "xbit-9",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen10_xbit.jpg",
      alt: "xbit-10",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen11_xbit.jpg",
      alt: "xbit-11",
      aspectRatio: "678/908",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/xbit/portada_xbit.jpg"
      title="X.BIT"
      description={[
        "An independent cultural project in Berlin that connected emerging artists with local communities through exhibitions.",
        "I worked as organizer, coordinator, and designer, managing artist curation, branding, and event logistics. The project showcased diverse artistic practices, built a creative network, and engaged Berlin’s underground art community.",
        "2024 - 2025",
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["X.BIT"],
            "Creative director": [
              "María Sánchez",
              "Francesca Cicconi",
              "Shanon Kennedy",
              "Anna Morreale",
            ],
            Designer: ["Maria Sanchez", "Shanon Kennedy", "Anna Morreale"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
