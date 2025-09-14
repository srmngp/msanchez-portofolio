import Image from "next/image";

export default function ProjectDetails({ image, title, description, footer }) {
    return (
        <main>
            <div className="flex justify-center mb-8 p-6">
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                    priority
                />
            </div>
            <h1 className="text-4xl font-bold mb-2 pl-6">{title}</h1>
            <hr className="border-gray-600" />
            <div className="text-lg text-gray-700 text-left p-6">
                {Array.isArray(description) && description.join(' ').length > 700 ? (
                  <div className="columns-1 md:columns-2 gap-8">
                    {description}
                  </div>
                ) : (
                  <div>
                    {description}
                  </div>
                )}
            </div>
            <hr className="border-gray-600" />
            {footer && ( footer )}
        </main>
    );
}
