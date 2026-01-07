import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function ContenedorCultural() {
  const images = [
    {
      src: "/design-projects/contenedor-cultural/imagen1_uma.jpg",
      alt: "contenedor-cultural-1",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen2_uma.jpg",
      alt: "contenedor-cultural-2",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen3_uma.jpg",
      alt: "contenedor-cultural-3",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen4_uma.jpg",
      alt: "contenedor-cultural-4",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen5_uma.jpg",
      alt: "contenedor-cultural-5",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen6_uma.jpg",
      alt: "contenedor-cultural-6",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/contenedor-cultural/imagen7_uma.jpg",
      alt: "contenedor-cultural-7",
      className: "md:col-span-2",
      aspectRatio: "1376/880",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/contenedor-cultural/portada_uma.jpg"
      title="Contenedor Cultural"
      description={[
        "During my internship at the University of Málaga’s cultural department, I worked as a Graphic Design Intern, creating art catalogues and exhibition materials.",
        "My responsibilities included editorial design, advertising campaigns, and event promotion. The outcome was a series of catalogues and visual campaigns that boosted the visibility of the university’s cultural activities and exhibitions.",
        "2020 - 2021",
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
