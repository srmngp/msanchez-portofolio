"use client"

import { ImageFrame, layoutStyles } from "../../../components/Gallery";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function BerlinSonar() {

  const gallery = (
          <section className={layoutStyles.section}>
              <div className={layoutStyles.container}>
                  
                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen1_sonar.jpg" 
                        alt="xbit-5"
                        variant="full"
                        height={900}
                    />
                </div>

                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen2_sonar.jpg" 
                        alt="xbit-5"
                        variant="full"
                        height={900}
                    />
                </div>

                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen3_sonar.jpg" 
                        alt="xbit-5"
                        variant="full"
                        height={900}
                    />
                </div>


                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen4_sonar.jpg" 
                        alt="xbit-5"
                        variant="full"
                        height={900}
                    />
                </div>


                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/contraportada_sonar.jpg" 
                        alt="xbit-5"
                        variant="full"
                        height={900}
                    />
                </div>
                  
              </div>
          </section>
      );

  return (
    <ProjectDetails
      image="/design-projects/berlin-sonar.png"
      title="Sonar Berlin"
      description={
        ["Final Master’s project in UX/UI Design developed for Sonar Festival Berlin, a nonprofit organization.",
        "I designed an interactive concept campaign through research, web design, and creativity, aiming to raise awareness about responsible drug consumption. The project combined interactivity with social responsibility, using design to engage and inform.",
        "2023"]
      }
      galleryComponent={gallery}
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
