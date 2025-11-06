import Image from "next/image";

export default function ProjectDetails({ image, title, description, gallery, galleryComponent, footer }) {
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

      <div className="text-lg text-gray-700 text-left p-6">
        {description.map((para, idx) => (
          <p key={idx} className="mb-4">
            {para}
          </p>
        ))}
      </div>

      <hr className="border-gray-600" />

      {/* Optional gallery: either a custom galleryComponent (JSX) or a simple array of images rendered in flow */}
      {galleryComponent ? (
        galleryComponent
      ) : (
        gallery && gallery.length > 0 && (
          <div className="flex flex-col justify-center items-center gap-10 p-6">
            {gallery.map((src, idx) => (
              <div key={idx} className="w-full max-w-4xl">
                <Image
                  src={src}
                  alt={`gallery-${idx}`}
                  width={1000}
                  height={700}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </div>
        )
      )}

      {footer && (footer)}

    </main>
  );
}
