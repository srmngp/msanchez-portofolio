import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function ContenedorCultural() {
  const images = [
    {
      src: "/design-projects/contenedor-cultural/imagen1_uma.webp",
      alt: "contenedor-cultural-1",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen2_uma.webp",
      alt: "contenedor-cultural-2",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen3_uma.webp",
      alt: "contenedor-cultural-3",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen4_uma.webp",
      alt: "contenedor-cultural-4",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen5_uma.webp",
      alt: "contenedor-cultural-5",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen6_uma.webp",
      alt: "contenedor-cultural-6",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen7_uma.webp",
      alt: "contenedor-cultural-7",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/contenedor-cultural/portada_uma.webp"
      title="Contenedor Cultural"
      description={[
        "Graphic Design internship at the University of Málaga's cultural department (Vice-Rectorate of Culture), designing exhibition catalogues, event advertising, and print materials across vinyl, canvas, posters, and flyers. Ran concurrently with an internship at FANCINE Fantasy Film Festival, where I handled the festival's full branding and contributed to the website UI. Together, these gave me a first real look at the full production chain, from concept through physical print.",
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Contenedor Cultural", "University of Málaga", "Culture Vice-Rectorate"],
            "Creative director": ["Agustin Linares"],
            Designer: ["Maria Sanchez", "Lola Palacios", "Maria José García", "Irene Ramírez"],
            Location: ["Malaga, Spain"],
          }}
        />
      }
    />
  );
}
