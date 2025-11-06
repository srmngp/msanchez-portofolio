"use client"

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import { ImageFrame } from "../../../components/Gallery";

export default function Xbit() {
    
    const getHalfFrameStyle = () => "w-full md:w-1/2 overflow-hidden md:h-[908px]";
    const getHalfAutoFrameStyle = () => "w-full md:w-1/2 overflow-hidden";
    const getFullFrameStyle = () => "w-full max-w-[1376px] overflow-hidden md:h-[800px]";

    const getGallerySectionStyle = () => "flex flex-col items-center gap-10 py-6";
    const getGalleryContainerStyle = () => "flex flex-col items-center gap-10 w-full";
    const getRowStyle = () => "flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]";
    const getFullRowStyle = () => "w-full max-w-[1376px]";

    const gallery = (
        <section className={getGallerySectionStyle()}>
            <div className={getGalleryContainerStyle()}>
                
                <div className={getRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen1_xbit.jpg" 
                        alt="xbit-1" 
                        className={getHalfFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen2_xbit.jpg" 
                        alt="xbit-2"
                        className={getHalfFrameStyle()}
                    />
                </div>
                
                <div className={getRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen3_xbit.jpg" 
                        alt="xbit-3"
                        className={getHalfAutoFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen4_xbit.jpg" 
                        alt="xbit-4"
                        className={getHalfAutoFrameStyle()}
                    />
                </div>

                <div className={getFullRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen5_xbit.jpg" 
                        alt="xbit-5"
                        width={1376}
                        height={800}
                        className={getFullFrameStyle()}
                    />
                </div>

                <div className={getRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen6_xbit.jpg" 
                        alt="xbit-6"
                        className={getHalfFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen7_xbit.jpg" 
                        alt="xbit-7"
                        className={getHalfFrameStyle()}
                    />
                </div>

                <div className={getRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen8_xbit.jpg" 
                        alt="xbit-8"
                        className={getHalfFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen9_xbit.jpg" 
                        alt="xbit-9"
                        className={getHalfFrameStyle()}
                    />
                </div>

                <div className={getRowStyle()}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen10_xbit.jpg" 
                        alt="xbit-10"
                        className={getHalfFrameStyle()}
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen11_xbit.jpg" 
                        alt="xbit-11"
                        className={getHalfFrameStyle()}
                    />
                </div>
            </div>
        </section>
    );

    return (
        <ProjectDetails
            image="/design-projects/xbit/portada_xbit.jpg"
            title="X.BIT"
            description={[
                "An independent cultural project in Berlin that connected emerging artists with local communities through exhibitions.",
                "I worked as organizer, coordinator, and designer, managing artist curation, branding, and event logistics. The project showcased diverse artistic practices, built a creative network, and engaged Berlin’s underground art community.",
                "2024 - 2025"
            ]}
            galleryComponent={gallery}
            footer={
                <ProjectFooter
                    sections={{
                        "Agency": ["X.BIT"],
                        "Creative director": ["María Sánchez", "Francesca Cicconi", "Shanon Kennedy", "Anna Morreale"],
                        "Designer": ["Maria Sanchez", "Shanon Kennedy", "Anna Morreale"],
                        "Location": ["Berlin, Germany"]
                    }}
                />
            }
        />
    );
}
