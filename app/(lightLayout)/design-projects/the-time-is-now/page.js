import Image from "next/image";
import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";

function TheTimeIsNowGallery() {
  return (
    <section className="w-full p-6">
      <div className="flex flex-col gap-10">
        {/* Primera fila - con altura uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <Image
              src="/design-projects/the-time-is-now/imagen1_ttin.png"
              alt="the-time-is-now-1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-[400px] md:h-[600px] md:col-span-2 overflow-hidden">
            <Image
              src="/design-projects/the-time-is-now/imagen2_ttin.jpg"
              alt="the-time-is-now-2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Segunda fila - con altura uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="relative w-full h-[400px] md:h-[600px] md:col-span-2 overflow-hidden">
            <Image
              src="/design-projects/the-time-is-now/imagen3_ttin.jpg"
              alt="the-time-is-now-3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <Image
              src="/design-projects/the-time-is-now/imagen4_ttin.png"
              alt="the-time-is-now-4"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Resto de imágenes */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1376/880" }}>
          <Image
            src="/design-projects/the-time-is-now/imagen5_ttin.png"
            alt="the-time-is-now-5"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1376/880" }}>
          <Image
            src="/design-projects/the-time-is-now/imagen6_ttin.png"
            alt="the-time-is-now-6"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1376/880" }}>
          <Image
            src="/design-projects/the-time-is-now/imagen7_ttin.jpg"
            alt="the-time-is-now-7"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1376/880" }}>
          <Image
            src="/design-projects/the-time-is-now/imagen8_ttin.jpg"
            alt="the-time-is-now-8"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1376/880" }}>
          <Image
            src="/design-projects/the-time-is-now/Fondo_Pisos_Nocturno_1.jpg"
            alt="the-time-is-now-fondo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function TheTimeIsNow() {
  return (
    <ProjectDetails
      image="/design-projects/the-time-is-now/portada_ttin.jpg"
      title="The Time Is Now"
      description={[
        "Collaboration with an emerging Argentinian musician to design the visual identity for his new album.",
        "Working hand to hand with the artist Peace Dealer I created a custom illustrated album cover and a personalized intro animation, blending visual storytelling with the artist's sound and identity to strengthen his personal brand.",
        "2024",
      ]}
      galleryComponent={<TheTimeIsNowGallery />}
      footer={
        <ProjectFooter
          sections={{
            Agency: ["Independent Project"],
            "Creative director": ["María Sánchez", "Peace Dealer"],
            Designer: ["Maria Sanchez"],
            Location: ["Córdoba, Argentina", "Berlin, Germany"],
          }}
        />
      }
    />
  );
}
