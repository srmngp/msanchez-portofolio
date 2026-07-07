import Image from "next/image";

export default function ProjectDetails({ image, title, description, galleryComponent, footer, imageAspectRatio }) {
  return (
    <article>

      <div className="flex justify-center mb-8 p-6">
        {imageAspectRatio ? (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: imageAspectRatio }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
            priority
          />
        )}
      </div>

      <h1 className="text-4xl font-bold mb-2 pl-6">{title}</h1>

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

      {footer && (
        <>
          <hr className="border-gray-600" />
          {footer}
        </>
      )}

    </article>
  )
}
