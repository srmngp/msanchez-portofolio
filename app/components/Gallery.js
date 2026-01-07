import Image from "next/image";

export function ImageFrame({ src, alt = "", priority = false, objectFit = "cover" }) {
  return (
    <div className="relative w-full h-full">
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-${objectFit}`}
          priority={priority}
        />
      )}
    </div>
  );
}

export default function Gallery({ images, gridCols = 2 }) {
  return (
    <section className="w-full p-6">
      <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-10`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`
              ${image.className}
              relative overflow-hidden
            `}
            style={{
              aspectRatio: image.aspectRatio || "auto",
            }}
          >
            <ImageFrame
              src={image.src}
              alt={image.alt}
              priority={idx < 2}
              objectFit={image.objectFit}
            />
          </div>
        ))}
      </div>
    </section>
  );
}