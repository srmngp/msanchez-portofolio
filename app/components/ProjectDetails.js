import Image from "next/image";

export default function ProjectDetails({
  image,
  title,
  subtitle,
  description,
  galleryComponent,
  footer,
  imageAspectRatio,
  process,
  media,
}) {
  // Case-study pages (Sonar, Cosmopolis) slot Process and any media between the
  // description and the images. Credits close every page, case study or not.
  return (
    <article>

      <div className="flex justify-center mb-4 md:mb-8 p-3 md:p-6">
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

      <h1 className="text-4xl font-bold mb-2 pl-3 md:pl-6">{title}</h1>

      {subtitle && (
        <p className="text-xl md:text-2xl leading-snug mb-3 pl-3 md:pl-6 pr-3 md:pr-6 text-gray-700">
          {subtitle}
        </p>
      )}

      <hr className="border-gray-600" />

      <div className="text-base md:text-lg text-left p-3 md:p-6">
        {description.map((para, idx) => (
          <p key={idx} className="mb-4">
            {para}
          </p>
        ))}
      </div>

      <hr className="border-gray-600" />

      {process && (
        <>
          <section className="p-3 md:p-6">
            <h2 className="text-3xl font-bold mb-4">Process</h2>
            <div className="text-base md:text-lg text-left">{process}</div>
          </section>

          <hr className="border-gray-600" />
        </>
      )}

      {media && (
        <>
          {media}
          <hr className="border-gray-600" />
        </>
      )}

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
