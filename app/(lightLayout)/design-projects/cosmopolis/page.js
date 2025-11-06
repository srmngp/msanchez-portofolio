"use client"

import { ImageFrame } from "../../../components/Gallery";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function Cosmopolis() {
    // Style functions for layout
    const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6";
    const getGalleryContainerStyle = () => "flex flex-col items-center gap-10 w-full";
    
    // Row styles
    const getFirstRowStyle = () => "flex flex-col md:flex-row items-center justify-center gap-[30px] w-full max-w-[1374px] h-[880px]";
    const getFullRowStyle = () => "w-full max-w-[1376px] h-[880px]";

    // Frame styles based on layout specifications
    const getSmallFrameStyle = () => "w-[440px] h-[880px] overflow-hidden";
    const getLargeFrameStyle = () => "w-[903px] h-[880px] overflow-hidden";
    const getFullFrameStyle = () => "w-full max-w-[1376px] h-[880px] overflow-hidden";

    const gallery = (
        <section className={getGallerySectionStyle()}>
            <div className={getGalleryContainerStyle()}>
                {/* Row 1: 440px + 903px layout */}
                <div className={getFirstRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen1_cosmopolis.jpg" 
                        alt="cosmopolis-1"
                        width={440}
                        height={880}
                        className={getSmallFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen2_cosmopolis.jpg"
                        alt="cosmopolis-2"
                        width={903}
                        height={880}
                        className={getLargeFrameStyle()}
                    />
                </div>

                {/* Row 2: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen3.jpg"
                        alt="cosmopolis-3"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>

                {/* Row 3: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen4_cosmopolis.jpg"
                        alt="cosmopolis-4"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>

                {/* Row 4: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen5_cosmopolis.jpg"
                        alt="cosmopolis-5"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>

                {/* Row 5: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen6_cosmopolis.jpg"
                        alt="cosmopolis-6"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>

                {/* Row 6: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen7_cosmopolis.jpg"
                        alt="cosmopolis-7"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>

                {/* Row 7: Full width image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/cosmopolis/imagen8_cosmopolis.jpg"
                        alt="cosmopolis-8"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle()}
                    />
                </div>
            </div>
        </section>
    );

    return (
        <ProjectDetails
            image="/design-projects/cosmopolis/portada_cosmopolis.jpg"
            title="Cosmopolis"
            description={[
                "Cosmopolis es un proyecto que explora la relación entre la ciudad y sus habitantes a través de la tipografía y el color.",
                "La obra busca representar la diversidad y el dinamismo urbano mediante una composición visual impactante.",
                "2024"
            ]}
            galleryComponent={gallery}
            footer={
                <ProjectFooter
                    sections={{
                        "Agency": ["unexisten"],
                        "Creative director": ["Maria Sanchez"],
                        "Designer": ["Maria Sanchez"],
                        "Location": ["Berlin, Germany", "Barcelona, Spain"]
                    }}
                />
            }
        />
    );
}
