import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function BerlinSonar() {
  const images = [
    {
      src: "/design-projects/sonar-berlin/imagen1_sonar.jpg",
      alt: "sonar-1",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen2_sonar.jpg",
      alt: "sonar-2",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen3_sonar.jpg",
      alt: "sonar-3",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen4_sonar.jpg",
      alt: "sonar-4",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/contraportada_sonar.jpg",
      alt: "sonar-5",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/sonar-berlin/portada_sonar.jpg"
      title="Sonar Berlin"
      description={[
        "Final Master’s project in UX/UI Design developed for Sonar Festival Berlin, a nonprofit organization.",
        "I designed an interactive concept campaign through research, web design, and creativity, aiming to raise awareness about responsible drug consumption. The project combined interactivity with social responsibility, using design to engage and inform.",
        "2023",
      ]}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Contenedor Cultural"],
            "Creative director": ["Agustin Linares"],
            Designer: ["Maria Sanchez", "Lola Palacios", "Una mas"],
            Location: ["Berlin, Germany", "Barcelona, Spain"],
          }}
        />
      }
    />
  );
}
