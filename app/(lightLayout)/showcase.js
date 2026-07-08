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
        <section className="mt-10 border-t border-black grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 px-6 pt-10">

            <ProjectCard
                href="design-projects/xbit"
                src="/design-projects/xbit/portada_xbit.webp"
                alt="X.BIT"
                title="X.BIT"
                priority
            />

            <ProjectCard
                href="design-projects/berlin-sonar"
                src="/design-projects/sonar-berlin/portada_sonar.webp"
                alt="Sonar Berlin"
                title="Sonar Berlin"
                priority
            />

            <ProjectCard
                href="design-projects/cosmopolis"
                src="/design-projects/cosmopolis/portada_cosmopolis.webp"
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
                src="/design-projects/the-time-is-now/portada_ttin.webp"
                alt="The time is now"
                title="The time is now"
            />

            <ProjectCard
                href="design-projects/heart-of-gold"
                src="/design-projects/heart-of-gold/portada_hog.webp"
                alt="Heart of Gold Hostel"
                title="Heart of Gold Hostel"
            />

            <ProjectCard
                href="design-projects/contenedor-cultural"
                src="/design-projects/contenedor-cultural/portada_uma.webp"
                alt="Contenedor Cultural"
                title="Contenedor Cultural"
            />

        </section>
    )
}
