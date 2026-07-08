import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function Xbit() {
  const images = [
    {
      src: "/design-projects/xbit/imagen1_xbit.webp",
      alt: "xbit-1",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen2_xbit.webp",
      alt: "xbit-2",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen3_xbit.webp",
      alt: "xbit-3",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen4_xbit.webp",
      alt: "xbit-4",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen5_xbit.webp",
      alt: "xbit-5",
      className: "md:col-span-2",
      aspectRatio: "1376/800",
    },
    {
      src: "/design-projects/xbit/imagen6_xbit.webp",
      alt: "xbit-6",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen7_xbit.webp",
      alt: "xbit-7",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen8_xbit.webp",
      alt: "xbit-8",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen9_xbit.webp",
      alt: "xbit-9",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen10_xbit.webp",
      alt: "xbit-10",
      aspectRatio: "678/908",
    },
    {
      src: "/design-projects/xbit/imagen11_xbit.webp",
      alt: "xbit-11",
      aspectRatio: "678/908",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/xbit/portada_xbit.webp"
      title="X.BIT"
      description={[
        <>
          <a
            href="https://www.instagram.com/x.bitte/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-500 transition-colors"
          >
            Art Xbition
          </a>
          {" is an independent exhibition series I founded and ran in Berlin, connecting emerging artists with local audiences across three venues — Humboldthain Flakturm, Hasenheide Park, and Gelegenheiten in Neukölln. I led the project end to end: artist curation, visual identity, and event logistics, working with a small team and no external budget or agency. Three exhibitions, dozens of artists, and a growing network in Berlin's independent art scene."}
        </>,
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
