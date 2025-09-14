"use client"

import Image from "next/image";
import ProjectDetails from "../ProjectDetails";

export default function Internship() {
  return (
        <ProjectDetails
          image="/design-projects/internship.png"
          title="Internship"
          description={[
            "Descripción del proyecto Internship.",
            "Detalles adicionales sobre el proyecto."
          ]}
          footer={
            <footer className="w-full border-gray-200 mt-12 py-8 bg-white">
              <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
