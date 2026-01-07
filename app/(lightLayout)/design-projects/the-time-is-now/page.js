import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function TheTimeIsNow() {
  const galleryRows = [
    {
      height: 600,
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen1_ttin.png",
          alt: "the-time-is-now-1",
          className: "md:col-span-1",
        },
        {
          src: "/design-projects/the-time-is-now/imagen2_ttin.jpg",
          alt: "the-time-is-now-2",
          className: "md:col-span-2",
        },
      ],
    },
    {
      height: 600,
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen3_ttin.jpg",
          alt: "the-time-is-now-3",
          className: "md:col-span-2",
        },
        {
          src: "/design-projects/the-time-is-now/imagen4_ttin.png",
          alt: "the-time-is-now-4",
          className: "md:col-span-1",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen5_ttin.png",
          alt: "the-time-is-now-5",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen6_ttin.png",
          alt: "the-time-is-now-6",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen7_ttin.jpg",
          alt: "the-time-is-now-7",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen8_ttin.jpg",
          alt: "the-time-is-now-8",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/Fondo_Pisos_Nocturno_1.jpg",
          alt: "the-time-is-now-fondo",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/the-time-is-now/portada_ttin.jpg"
      title="The Time Is Now"
      description={[
        "Collaboration with an emerging Argentinian musician to design the visual identity for his new album.",
        "Working hand to hand with the artist Peace Dealer I created a custom illustrated album cover and a personalized intro animation, blending visual storytelling with the artist's sound and identity to strengthen his personal brand.",
        "2024",
      ]}
      galleryComponent={<Gallery rows={galleryRows} gridCols={3} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Independent Project"],
            "Creative director": ["María Sánchez", "Peace Dealer"],
            Designer: ["Maria Sanchez"],
            Location: ["Córdoba, Argentina", "Berlin, Germany"],
          }}
        />
      }
    />
  );
}
