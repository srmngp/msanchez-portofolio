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
                        <p>Proyecto Final;</p>
                        <p>Master in</p>
                        <p>Web Desing and App UX/UI</p>
                        <p>Barcelona School of Art</p>
                        <p>(LABASAD)</p>
                    </>
                }
            />

            {/* Cosmopolis */}
            <Project
                href="design-projects/cosmopolis"
                images={<ProjectImage src="/design-projects/cosmopolis/portada_cosmopolis.jpg" alt="Cosmopolis" />}
                title={"Cosmopolis"}
                description={<p className="text-sm text-gray-600">Description</p>}
            />

            {/* Internship */}
            <Project
                href="design-projects/internship"
                images={<ProjectImage src="/design-projects/internship.png" alt="Internship" />}
                title="Internship"
                description={
                    <p className="text-sm text-gray-600">
                        A collection of thoughts and designs that explore the boundaries of creativity and self-expression.
                    </p>
                }
            />


        </section>
    )
}
