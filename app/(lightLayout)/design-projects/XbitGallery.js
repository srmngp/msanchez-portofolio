import Image from "next/image";

export default function XbitGallery({ images = [] }) {
  // images: array of paths (expected up to 11 for this layout)
  return (
    <section className="flex flex-col items-center gap-10 py-6">
      <div className="flex flex-col items-center gap-10 w-full">
        {/* FRAME 1: two columns (666 x 908) and (678 x 908) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]">
          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[0] && (
              <Image src={images[0]} alt="xbit-1" width={666} height={908} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[1] && (
              <Image src={images[1]} alt="xbit-2" width={678} height={908} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* FRAME 3: two columns (666 x 888) + (678 x 888) and then a full-width rectangle (1376 x 800) */}
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]">
            <div className="w-full md:w-1/2 rounded overflow-hidden">
              {images[2] && (
                <Image src={images[2]} alt="xbit-3" width={678} height={888} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="w-full md:w-1/2 rounded overflow-hidden">
              {images[3] && (
                <Image src={images[3]} alt="xbit-4" width={678} height={888} className="w-full h-full object-cover" />
              )}
            </div>
          </div>

          <div className="w-full max-w-[1376px] rounded overflow-hidden">
            {images[4] && (
              <Image src={images[4]} alt="xbit-5" width={1376} height={800} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* FRAME 4: two columns (666 x 888) and (678 x 888) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]">
          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[5] && (
              <Image src={images[5]} alt="xbit-6" width={666} height={888} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[6] && (
              <Image src={images[6]} alt="xbit-7" width={678} height={888} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* FRAME 7: two columns (666 x 888) and (678 x 888) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]">
          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[7] && (
              <Image src={images[7]} alt="xbit-8" width={666} height={888} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[8] && (
              <Image src={images[8]} alt="xbit-9" width={678} height={888} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        {/* FRAME 6: two columns (666 x 888) and (678 x 888) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-[1374px]">
          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[9] && (
              <Image src={images[9]} alt="xbit-10" width={666} height={888} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="w-full md:w-1/2 rounded overflow-hidden">
            {images[10] && (
              <Image src={images[10]} alt="xbit-11" width={678} height={888} className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
