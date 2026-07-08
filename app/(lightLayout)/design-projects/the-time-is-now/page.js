import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function TheTimeIsNow() {
  const galleryRows = [
    {
      height: 600,
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen1_ttin.webp",
          alt: "the-time-is-now-1",
          className: "md:col-span-1",
        },
        {
          src: "/design-projects/the-time-is-now/imagen2_ttin.webp",
          alt: "the-time-is-now-2",
          className: "md:col-span-2",
        },
      ],
    },
    {
      height: 600,
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen3_ttin.webp",
          alt: "the-time-is-now-3",
          className: "md:col-span-2",
        },
        {
          src: "/design-projects/the-time-is-now/imagen4_ttin.webp",
          alt: "the-time-is-now-4",
          className: "md:col-span-1",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen5_ttin.webp",
          alt: "the-time-is-now-5",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen6_ttin.webp",
          alt: "the-time-is-now-6",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen7_ttin.webp",
          alt: "the-time-is-now-7",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen8_ttin.webp",
          alt: "the-time-is-now-8",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/Fondo_Pisos_Nocturno_1.webp",
          alt: "the-time-is-now-fondo",
          className: "md:col-span-3",
          aspectRatio: "1376/880",
        },
      ],
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/the-time-is-now/portada_ttin.webp"
      title="The time is Now"
      description={[
        'Collaboration with Peace Dealer, an emerging musician from Córdoba, Argentina, to design the visual identity for his album "The Time Is Now." Working directly with the artist, I created the illustrated cover art and a custom intro animation — translating his sound and persona into one cohesive visual identity. Delivered fully remote, across Argentina and Germany.',
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
