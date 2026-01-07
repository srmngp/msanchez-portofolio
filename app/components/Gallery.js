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

export default function Gallery({ images, gridCols = 2, rows }) {
  // Si se proporciona el prop 'rows', usar layout por filas con alturas fijas
  if (rows) {
    return (
      <section className="w-full p-6">
        <div className="flex flex-col gap-10">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-10`}>
              {row.images.map((image, imgIdx) => (
                <div
                  key={imgIdx}
                  className={`
                    ${image.className || ''}
                    relative overflow-hidden
                  `}
                  style={{
                    height: row.height ? `${row.height}px` : 'auto',
                    aspectRatio: !row.height && image.aspectRatio ? image.aspectRatio : 'auto',
                  }}
                >
                  <ImageFrame
                    src={image.src}
                    alt={image.alt}
                    priority={rowIdx === 0 && imgIdx < 2}
                    objectFit={image.objectFit}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Layout tradicional con aspectRatio
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