"use client"

import ProjectDetails from "../ProjectDetails";
import ProjectFooter from "../ProjectFooter";

export default function Internship() {
  return (
        <ProjectDetails
          image="/design-projects/xbit/portada.jpg"
          title="Internship"
          description={[
            "Descripción del proyecto Internship.",
            "Detalles adicionales sobre el proyecto."
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
