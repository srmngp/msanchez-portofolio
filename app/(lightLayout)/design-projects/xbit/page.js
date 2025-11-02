"use client"

import ProjectDetails from "../ProjectDetails";
import ProjectFooter from "../ProjectFooter";
import XbitGallery from "../XbitGallery";

export default function Xbit() {
    const images = [
        "/design-projects/xbit/imagen1_xbit.jpg",
        "/design-projects/xbit/imagen2_xbit.jpg",
        "/design-projects/xbit/imagen3_xbit.jpg",
        "/design-projects/xbit/imagen4_xbit.jpg",
        "/design-projects/xbit/imagen5_xbit.jpg",
        "/design-projects/xbit/imagen6_xbit.jpg",
        "/design-projects/xbit/imagen7_xbit.jpg",
        "/design-projects/xbit/imagen8_xbit.jpg",
        "/design-projects/xbit/imagen9_xbit.jpg",
        "/design-projects/xbit/imagen10_xbit.jpg",
        "/design-projects/xbit/imagen11_xbit.jpg",
    ];

    return (
        <ProjectDetails
            image="/design-projects/xbit/portada_xbit.jpg"
            title="X.BIT"
            description={[
                "An independent cultural project in Berlin that connected emerging artists with local communities through exhibitions.",
                "I worked as organizer, coordinator, and designer, managing artist curation, branding, and event logistics. The project showcased diverse artistic practices, built a creative network, and engaged Berlin’s underground art community.",
                "2024 - 2025"
            ]}
            galleryComponent={<XbitGallery images={images} />}
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
