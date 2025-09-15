"use client"

import ProjectDetails from "../ProjectDetails";

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
        <footer className="w-full border-gray-200 mt-12 py-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-bold mb-2">Agency</h4>
              <ul className="space-y-1 text-sm">
                <li>Contenedor Cultural</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Creative director</h4>
              <ul className="space-y-1 text-sm">
                <li>Agustin Linares</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Designer</h4>
              <ul className="space-y-1 text-sm">
                <li>Maria Sanchez</li>
                <li>Lola Palacios</li>
                <li>Una mas</li>
              </ul>
            </div>
          </div>
        </footer>
      }
    />
  );
}
