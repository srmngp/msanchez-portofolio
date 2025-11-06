import Image from "next/image";

export default function ProjectDetails({ image, title, description, galleryComponent, footer }) {
  return (
    <main>

      <div className="flex justify-center mb-8 p-6">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="object-cover w-full h-auto"
          priority
        />
      </div>

      <h2 className="text-4xl font-bold mb-2 pl-6">{title}</h2>

      <hr className="border-gray-600" />

      <div className="text-lg text-left p-6">
        {description.map((para, idx) => (
          <p key={idx} className="mb-4">
            {para}
          </p>
        ))}
      </div>

      <hr className="border-gray-600" />

      {galleryComponent && (galleryComponent)}

      <hr className="border-gray-600" />

      {footer && (footer)}

    </main>
  )
}
