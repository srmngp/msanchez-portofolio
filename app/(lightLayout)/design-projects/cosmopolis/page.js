"use client"

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function Cosmopolis() {
  return (
    <ProjectDetails
      image="/design-projects/cosmopolis.png"
      title="Cosmopolis"
      description={[
        "Cosmopolis es un proyecto que explora la relación entre la ciudad y sus habitantes a través de la tipografía y el color.",
        "La obra busca representar la diversidad y el dinamismo urbano mediante una composición visual impactante."
      ]}
      footer={
          <ProjectFooter
            sections={{
              "Agency": ["Contenedor Cultural"],
              "Creative director": ["Agustin Linares"],
              "Designer": ["Maria Sanchez", "Lola Palacios", "Una mas"],
            }}
          />
      }
    />
  );
}
