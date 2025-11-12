import { ImageFrame } from "../../../components/Gallery";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

export default function TheTimeIsNow() {

    const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6";
    const getGalleryContainerStyle = () => "flex flex-col items-center gap-[40px] w-full";

    const getSplitRowStyle = (height) => `flex flex-col md:flex-row items-center justify-center gap-[30px] w-full max-w-[1374px] h-[${height}px]`;
    const getFullRowStyle = () => "w-full max-w-[1376px]";

    const getFullFrameStyle = (height) => `w-full max-w-[1376px] overflow-hidden h-[${height}px]`;
    const getLeftFrameStyle = (w, h) => `w-[${w}px] h-[${h}px] overflow-hidden`;
    const getRightFrameStyle = (w, h) => `w-[${w}px] h-[${h}px] overflow-hidden`;

    const gallery = (
        <section className={getGallerySectionStyle()}>
            <div className={getGalleryContainerStyle()}>

                {/* Frame 1 - split 440 x 880 (left) | 903 x 880 (right) */}
                <div className={getSplitRowStyle(880)}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen1_ttin.png"
                        alt="the-time-is-now-1"
                        width={440}
                        height={880}
                        className={getLeftFrameStyle(440, 880)}
                    />
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen2_ttin.jpg"
                        alt="the-time-is-now-2"
                        width={903}
                        height={880}
                        className={getRightFrameStyle(903, 880)}
                    />
                </div>

                {/* Frame 2 - reversed, 903 x 900 (left) | 440 x 900 (right) */}
                <div className={getSplitRowStyle(900)}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen3_ttin.jpg"
                        alt="the-time-is-now-3"
                        width={903}
                        height={900}
                        className={getLeftFrameStyle(903, 880)}
                    />
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen4_ttin.png"
                        alt="the-time-is-now-4"
                        width={440}
                        height={900}
                        className={getRightFrameStyle(440, 880)}
                    />
                </div>

                {/* Full-width frames per Figma (1376 x 880 each) - use remaining images */}
                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen5_ttin.png"
                        alt="the-time-is-now-5"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(880)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen6_ttin.png"
                        alt="the-time-is-now-6"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(880)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen7_ttin.jpg"
                        alt="the-time-is-now-7"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(880)}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/imagen8_ttin.jpg"
                        alt="the-time-is-now-8"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(880)}
                    />
                </div>

                {/* optional ambient background image */}
                <div className={getFullRowStyle()}>
                    <ImageFrame
                        src="/design-projects/the-time-is-now/Fondo_Pisos_Nocturno_1.jpg"
                        alt="the-time-is-now-fondo"
                        width={1376}
                        height={880}
                        className={getFullFrameStyle(880)}
                    />
                </div>

            </div>
        </section>
    )

    return (
        <ProjectDetails
            image="/design-projects/the-time-is-now/portada_ttin.jpg"
            title="The Time Is Now"
            description={[
                "Collaboration with an emerging Argentinian musician to design the visual identity for his new album.",
                "Working hand to hand with the artist Peace Dealer I created a custom illustrated album cover and a personalized intro animation, blending visual storytelling with the artist’s sound and identity to strengthen his personal brand.",
                "2024"
            ]}
            galleryComponent={gallery}
            footer={
                <ProjectFooter
                    sections={{
                        "Agency": ["Independent Project"],
                        "Creative director": ["María Sánchez", "Peace Dealer"],
                        "Designer": ["Maria Sanchez"],
                        "Location": ["Córdoba, Argentina", "Berlin, Germany"]
                    }}
                />
            }
        />
    )
}
