import { ImageFrame } from "../../../components/Gallery"
import ProjectDetails from "../../../components/ProjectDetails"
import ProjectFooter from "../../../components/ProjectFooter"

export default function TheTimeIsNow() {

    const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6"
    const getGalleryContainerStyle = () => "flex flex-col items-center gap-[40px] w-full"

    const getFullRowStyle = () => "w-full";

    const getFullFrameStyle = (height) => `w-full overflow-hidden h-[${height}px]`

    const gallery = (
        <section className={getGallerySectionStyle()}>
            <div className={getGalleryContainerStyle()}>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen1_uma.jpg"
                        alt="contenedor-cultural-1"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen2_uma.jpg"
                        alt="contenedor-cultural-2"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen3_uma.jpg"
                        alt="contenedor-cultural-3"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen4_uma.jpg"
                        alt="contenedor-cultural-4"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen5_uma.jpg"
                        alt="contenedor-cultural-5"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen6_uma.jpg"
                        alt="contenedor-cultural-6"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/contenedor-cultural/imagen7_uma.jpg"
                        alt="contenedor-cultural-27"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(900)}
                    />
                </div>


            </div>
        </section>
    )

    return (
        <ProjectDetails
            image="/design-projects/contenedor-cultural/portada_uma.jpg"
            title="Contenedor Cultural"
            description={[
                "During my internship at the University of Málaga’s cultural department, I worked as a Graphic Design Intern, creating art catalogues and exhibition materials.",
                "My responsibilities included editorial design, advertising campaigns, and event promotion. The outcome was a series of catalogues and visual campaigns that boosted the visibility of the university’s cultural activities and exhibitions.",
                "2020 - 2021"
            ]}
            galleryComponent={gallery}
            footer={
                <ProjectFooter
                    sections={{
                        "Agency": ["Contenedor Cultural", "University of Málaga", "Culture Vice-Rectorate"],
                        "Creative director": ["Agustin Linares"],
                        "Designer": ["Maria Sanchez", "Lola Palacios", "Maria José García", "Irene Ramírez"],
                        "Location": ["Malaga, Spain"]
                    }}
                />
            }
        />
    )
}
