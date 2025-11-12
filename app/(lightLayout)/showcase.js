"use client"

import Link from "next/link";
import Image from "next/image";

function ProjectImage({ src, alt }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
            priority
        />
    );
}

function Project({ href, images, title, description }) {
    return (
        <div className="border-t border-gray-500">
            <Link href={href} className="block transition rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    <div className="lg:col-span-2">{images}</div>

                    <div className="text-right lg:col-span-1 self-start">
                        <h3 className="font-semibold mb-2">{title}</h3>
                        <div className="text-sm">{description}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default function Showcase() {
    return (
        <section>

            {/* XBIT*/}
            <Project
                href="design-projects/xbit"
                images={<ProjectImage src="/design-projects/xbit/portada_xbit.jpg" alt="XBIT" />}
                title="XBIT"
                description={
                    <>
                        <p>Project management</p>
                        <p>Branding</p>
                        <p>Event logistics</p>
                    </>
                }
            />

            {/* Berlin sonar*/}
            <Project
                href="design-projects/berlin-sonar"
                images={<ProjectImage src="/design-projects/sonar-berlin/portada_sonar.jpg" alt="Berlin Sonar" />}
                title="Berlin Sonar"
                description={
                    <>
                        <p>Research</p>
                        <p>UX/UI Design</p>
                        <p>Figma</p>
                    </>
                }
            />

            {/* Cosmopolis */}
            <Project
                href="design-projects/cosmopolis"
                images={<ProjectImage src="/design-projects/cosmopolis/portada_cosmopolis.jpg" alt="Cosmopolis" />}
                title={"Cosmopolis"}
                description={
                    <>
                        <p>Research</p>
                        <p>UX/UI Design</p>
                        <p>Figma</p>
                    </>
                }
            />

            {/* Heart of Gold */}
            <Project
                href="design-projects/heart-of-gold"
                images={<ProjectImage src="/design-projects/heart-of-gold/portada_hog.png" alt="Heart of Gold" />}
                title="Heart of Gold"
                description={
                    <>
                        <p>Research</p>
                        <p>UX/UI Design</p>
                        <p>Figma</p>
                    </>
                }
            />

            {/* The Time is Now */}
            <Project
                href="design-projects/the-time-is-now"
                images={<ProjectImage src="/design-projects/the-time-is-now/portada_ttin.jpg" alt="The Time is Now" />}
                title="The Time is Now"
                description={
                    <>
                        <p>Illustration</p>
                        <p>Animation</p>
                        <p>Adobe Creative Suite </p>
                    </>
                }
            />

            {/* Contenedor cultural */}
            <Project
                href="design-projects/contenedor-cultural"
                images={<ProjectImage src="/design-projects/contenedor-cultural/portada_uma.jpg" alt="Contenedor Cultural" />}
                title="Contenedor Cultural"
                description={
                    <>
                        <p>Editorial design</p>
                        <p>Adobe Creative Suite</p>
                        <p>Advertising campaigns</p>
                        <p>Event promotion</p>
                    </>
                }
            />

        </section>
    )
}
