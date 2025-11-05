"use client"

import ProjectDetails from "../ProjectDetails";
import ProjectFooter from "../ProjectFooter";
import { ImageFrame, layoutStyles } from "../../../components/Gallery";

export default function Xbit() {

    const gallery = (
        <section className={layoutStyles.section}>
            <div className={layoutStyles.container}>
                {/* Row 1 */}
                <div className={layoutStyles.row}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen1_xbit.jpg" 
                        alt="xbit-1" 
                        variant="half"
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen2_xbit.jpg" 
                        alt="xbit-2"
                        variant="half"
                    />
                </div>
                
                {/* Row 2 */}
                <div className={layoutStyles.row}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen3_xbit.jpg" 
                        alt="xbit-3"
                        variant="halfAuto"
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen4_xbit.jpg" 
                        alt="xbit-4"
                        variant="halfAuto"
                    />
                </div>

                {/* Row 3 */}
                <div className={layoutStyles.fullRow}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen5_xbit.jpg" 
                        alt="xbit-5"
                        variant="full"
                    />
                </div>

                {/* Row 4 */}
                <div className={layoutStyles.row}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen6_xbit.jpg" 
                        alt="xbit-6"
                        variant="half"
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen7_xbit.jpg" 
                        alt="xbit-7"
                        variant="half"
                    />
                </div>

                {/* Row 5 */}
                <div className={layoutStyles.row}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen8_xbit.jpg" 
                        alt="xbit-8"
                        variant="half"
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen9_xbit.jpg" 
                        alt="xbit-9"
                        variant="half"
                    />
                </div>

                {/* Row 6 */}
                <div className={layoutStyles.row}>
                    <ImageFrame 
                        src="/design-projects/xbit/imagen10_xbit.jpg" 
                        alt="xbit-10"
                        variant="half"
                    />
                    <ImageFrame 
                        src="/design-projects/xbit/imagen11_xbit.jpg" 
                        alt="xbit-11"
                        variant="half"
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
