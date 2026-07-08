import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function BerlinSonar() {
  const images = [
    {
      src: "/design-projects/sonar-berlin/imagen1_sonar.webp",
      alt: "sonar-1",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen2_sonar.webp",
      alt: "sonar-2",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen3_sonar.webp",
      alt: "sonar-3",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen4_sonar.webp",
      alt: "sonar-4",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/contraportada_sonar.webp",
      alt: "sonar-5",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
  ];

  return (
    <ProjectDetails
      image="/design-projects/sonar-berlin/portada_sonar.webp"
      title="Sonar Berlin"
      description={[
        <>
          {"Final project for my Master's in UX/UI Design, developed for "}
          <a
            href="https://safer-nightlife.berlin/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-500 transition-colors"
          >
            SONAR Berlin
          </a>
          {" — a coalition of Berlin harm-reduction and addiction-support organizations, including Clubcommission Berlin, working to reduce risk and build drug literacy in nightlife spaces. I designed an interactive campaign concept: a web-based experience where users engage with objects representing different substances, revealing harm-reduction information through interaction. Research-led and concept-driven, built in Figma."}
        </>,
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
