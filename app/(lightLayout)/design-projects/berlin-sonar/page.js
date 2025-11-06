"use client"

import { ImageFrame } from "../../../components/Gallery"
import ProjectDetails from "../../../components/ProjectDetails"
import ProjectFooter from "../../../components/ProjectFooter"

export default function BerlinSonar() {

    const getFullWidthImageStyle = () => "w-full max-w-[1376px] overflow-hidden md:h-[900px]"
    const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6"
    const getGalleryContainerStyle = () => "flex flex-col items-center gap-10 w-full"
    const getFullRowStyle = () => "w-full max-w-[1376px]"

    const gallery = (
          <section className={getGallerySectionStyle()}>
              <div className={getGalleryContainerStyle()}>
                  
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen1_sonar.jpg" 
                        alt="sonar-1"
                        width={1376}
                        height={900}
                        className={getFullWidthImageStyle()}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen2_sonar.jpg" 
                        alt="sonar-2"
                        width={1376}
                        height={900}
                        className={getFullWidthImageStyle()}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen3_sonar.jpg" 
                        alt="sonar-3"
                        width={1376}
                        height={900}
                        className={getFullWidthImageStyle()}
                    />
                </div>


                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/imagen4_sonar.jpg" 
                        alt="sonar-4"
                        width={1376}
                        height={900}
                        className={getFullWidthImageStyle()}
                    />
                </div>


                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/sonar-berlin/contraportada_sonar.jpg" 
                        alt="sonar-5"
                        width={1376}
                        height={900}
                        className={getFullWidthImageStyle()}
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
  )
}
