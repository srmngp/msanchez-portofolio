import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function TheTimeIsNow() {
  const galleryRows = [
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen1_ttin.webp",
          alt: "the-time-is-now-1",
          className: "md:col-span-1",
          aspectRatio: "440/880",
          mobileAspectRatio: "1440/870",
        },
        {
          src: "/design-projects/the-time-is-now/imagen2_ttin.webp",
          alt: "the-time-is-now-2",
          className: "md:col-span-2",
          aspectRatio: "903/880",
          mobileAspectRatio: "1/1",
        },
      ],
    },
    {
      images: [
        {
          src: "/design-projects/the-time-is-now/imagen3_ttin.webp",
          alt: "the-time-is-now-3",
          className: "md:col-span-2",
          aspectRatio: "904/900",
          mobileAspectRatio: "1/1",
        },
        {
          src: "/design-projects/the-time-is-now/imagen4_ttin.webp",
          alt: "the-time-is-now-4",
          className: "md:col-span-1",
          aspectRatio: "440/900",
          mobileAspectRatio: "1440/870",
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
        <>
          {"Collaboration with Peace Dealer, an emerging musician from Córdoba, Argentina, to design the visual identity for his album "}
          <em>{"The Time Is Now."}</em>
          {" The commission came through a mutual contact — a friend of his who knew my work. Working directly with the artist over two months, I created the illustrated cover art and a custom intro animation, translating his sound and persona into one cohesive visual identity. Delivered fully remote, across Argentina and Germany, from first conversation to final assets."}
        </>,
        <em key="note">
          {"The album was never released. The animation is published here with the artist's permission."}
        </em>,
      ]}
      galleryComponent={<Gallery rows={galleryRows} gridCols={3} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["Visual Identity & Illustration"],
            Dates: ["July – September 2024"],
            Entity: ["Independent, with Peace Dealer"],
            Location: ["Córdoba, Argentina", "Berlin, Germany"],
          }}
        />
      }
    />
  );
}
