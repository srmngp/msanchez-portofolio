"use client"

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function BerlinSonar() {
  return (
    <ProjectDetails
      image="/design-projects/berlin-sonar.png"
      title="Berlin Sonar"
      description={
        ["Proyecto Final; Master in Web Design and App UX/UI, Barcelona School of (LABASAD).        suuuper loong text that goes on and on to demonstrate the layout and how it handles longer content. This is a test to ensure that the design remains consistent and visually appealing even with extended text.        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
      }
      footer={
        <ProjectFooter
          sections={{
            "Agency": ["Contenedor Cultural"],
            "Creative director": ["Agustin Linares"],
            "Designer": ["Maria Sanchez", "Lola Palacios", "Una mas"],
            "Location": ["Berlin, Germany", "Barcelona, Spain"],
          }}
        />
      }
    />
  );
}
