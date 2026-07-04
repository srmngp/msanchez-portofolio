"use client"

import Link from "next/link";
import Image from "next/image";

function ProjectCard({ href, src, alt, title, priority = false }) {
    return (
        <Link href={href} className="block">
            <div className="relative w-full aspect-[677/403] overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={priority}
                />
            </div>
            <p className="mt-5 font-semibold text-lg md:text-[25px]">{title}</p>
        </Link>
    );
}

export default function Showcase() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 px-6 pt-10">

            <ProjectCard
                href="design-projects/xbit"
                src="/design-projects/xbit/portada_xbit.jpg"
                alt="XBIT"
                title="XBIT"
                priority
            />

            <ProjectCard
                href="design-projects/berlin-sonar"
                src="/design-projects/sonar-berlin/portada_sonar.webp"
                alt="Berlin Sonar"
                title="Berlin Sonar"
                priority
            />

            <ProjectCard
                href="design-projects/cosmopolis"
                src="/design-projects/cosmopolis/portada_cosmopolis.jpg"
                alt="Cosmopolis"
                title="Cosmopolis"
            />

            <ProjectCard
                href="design-projects/car-on-sale"
                src="/design-projects/car-on-sale/portada_caronsale.webp"
                alt="CarOnSale"
                title="CarOnSale"
            />

            <ProjectCard
                href="design-projects/sunflower-hostel"
                src="/design-projects/sunflower-hostel/portada_sunflower.webp"
                alt="Sunflower Hostel"
                title="Sunflower Hostel"
            />

            <ProjectCard
                href="design-projects/the-time-is-now"
                src="/design-projects/the-time-is-now/portada_ttin.jpg"
                alt="The Time is Now"
                title="The Time is Now"
            />

            <ProjectCard
                href="design-projects/heart-of-gold"
                src="/design-projects/heart-of-gold/portada_hog.png"
                alt="Heart of Gold"
                title="Heart of Gold"
            />

            <ProjectCard
                href="design-projects/contenedor-cultural"
                src="/design-projects/contenedor-cultural/portada_uma.jpg"
                alt="Contenedor Cultural"
                title="Contenedor Cultural"
            />

        </section>
    )
}
