"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function Duelo() {
  const images = [
    {
      src: "/art-production/duelo/imagen1_duelo.webp",
      alt: "duelo-1",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen2_duelo.webp",
      alt: "duelo-2",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen3_duelo.webp",
      alt: "duelo-3",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen4_duelo.webp",
      alt: "duelo-4",
      aspectRatio: "595/397",
    },
    {
      src: "/art-production/duelo/imagen5_duelo.webp",
      alt: "duelo-5",
      aspectRatio: "892/595",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/duelo/portada_duelo.webp"
      title="Duelo"
      description={[
        "The wreath left the frame and became an object I carried.",
        "Dressed in black, I made flower wreaths by hand and took them to a series of specific places — the places that remind me of my father, who died. When he went, he went from all of them: the rooms, the corners, the streets we shared. The piece is a tribute paid to each one separately, in the place itself.",
        "It came from the flowers people leave at the roadside after a fatal accident. Every time I pass one of those altars I feel respect, and I feel fear — they are a reminder of how easily a life ends, planted in the exact spot where it did. I wanted to carry that feeling somewhere other than the roadside.",
        <>
          {"Working with place, body, absence and death, "}
          <em>Duelo</em>
          {" is the prelude to "}
          <em>El Cuerpo Ausente</em>
          {"."}
        </>,
        <em key="note">
          {"Never exhibited. The exhibition proposal was an archive of the performance itself: photographs, video, and the address of every location."}
        </em>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
