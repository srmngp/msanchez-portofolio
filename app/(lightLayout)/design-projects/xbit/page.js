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
          {" was an independent exhibition series I co-founded and ran in Berlin with three other designers. Between us we directed the whole thing — artist curation, visual identity, event logistics, production — with "}
          <strong>{"no external budget, no agency, and no client."}</strong>
        </>,
        <>
          <strong>{"Five events in eleven months."}</strong>
          {" Three exhibitions we produced ourselves, across three Berlin venues, and two collaborative editions with established platforms from the city's art and nightlife scene. Dozens of artists, and a working network in Berlin's independent art scene that outlasted the project."}
        </>,
        <>
          <strong>{"Hasenheide Park"}</strong>
          {" — 18 July 2024"}
          <br />
          <strong>{"Humboldthain Flakturm"}</strong>
          {" — 9 August 2024"}
          <br />
          <strong>{"Gelegenheiten, Neukölln"}</strong>
          {" — 15 February 2025"}
          <br />
          <strong>whisprrr</strong>
          {", with Underlab — 10 May 2025"}
          <br />
          <strong>{"Noche de Junta"}</strong>
          {", with Nachtleben Berlin — 6 June 2025"}
        </>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["Co-founder & Creative Direction"],
            Dates: ["July 2024 – June 2025"],
            Agency: ["X.BIT"],
            "Creative direction": [
              "María Sánchez",
              "Francesca Cicconi",
              "Shanon Kennedy",
              "Anna Morreale",
            ],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
