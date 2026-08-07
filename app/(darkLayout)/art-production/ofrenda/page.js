"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import Gallery from "../../../components/Gallery";

export default function Ofrenda() {
  const images = [
    {
      src: "/art-production/ofrenda/imagen1_ofrenda.webp",
      alt: "ofrenda-1",
      aspectRatio: "2464/3063",
    },
    {
      src: "/art-production/ofrenda/imagen2_ofrenda.webp",
      alt: "ofrenda-2",
      aspectRatio: "5184/3456",
    },
    {
      src: "/art-production/ofrenda/imagen3_ofrenda.webp",
      alt: "ofrenda-3",
      aspectRatio: "5184/3456",
    },
    {
      src: "/art-production/ofrenda/imagen4_ofrenda.webp",
      alt: "ofrenda-4",
      aspectRatio: "5184/3456",
    },
  ];

  return (
    <ProjectDetails
      image="/art-production/ofrenda/portada_ofrenda.webp"
      title="Ofrenda"
      description={[
        "The first piece I made about life, death and family, and the one everything else came out of.",
        "I started from the funeral wreath — the object that turns up whenever someone dies, always the same, always flowers. I designed a series of wreath patterns to be embroidered, but with one substitution: what looks like a flower isn't one. Each is an image pulled from the memories of the person who has gone, abstracted until it reads as petal, leaf, stem.",
        "That substitution is the whole idea. Embroidering an image doesn't preserve it — the thread turns it into something else, and what you end up with is new. Which is what I think happens to a life: it doesn't disappear, it transforms.",
        <em key="note">{"Exhibited at the Botanical Garden, Málaga, 2019."}</em>,
      ]}
      galleryComponent={<Gallery images={images} gridCols={1} />}
    />
  );
}
