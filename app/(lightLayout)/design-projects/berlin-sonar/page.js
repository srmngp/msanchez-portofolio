"use client"

import Image from "next/image";
import ProjectDetails from "../ProjectDetails";

export default function BerlinSonar() {
  return (
    <ProjectDetails
      image="/design-projects/berlin-sonar.png"
      title="Berlin Sonar"
      description={
        ["Proyecto Final; Master in Web Design and App UX/UI, Barcelona School of (LABASAD).        suuuper loong text that goes on and on to demonstrate the layout and how it handles longer content. This is a test to ensure that the design remains consistent and visually appealing even with extended text.        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
      }
      footer={
        <>
          <footer className="w-full border-gray-200 py-8 bg-white">
            <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
        </>
      }
    />
  );
}
