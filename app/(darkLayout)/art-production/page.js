import Image from "next/image"
import Link from "next/link"

export default function Home() {

  return (
    <div className="px-6">

      <h1 className="sr-only">Art Production</h1>

      <div className="grid grid-cols-2 gap-8">
        <ArtProductionProject
          href="/art-production/a-la-vera-de-mis-raices"
          image={"/art-production/a-la-vera/portada_raices.webp"}
          title="A la vera de mis raíces"
          subtitle="Crochet and textile art · 2020–2021" />

        <ArtProductionProject
          href="/art-production/el-cuerpo-ausente"
          image={"/art-production/el-cuerpo-ausente/portada_cuerpo-ausente.webp"}
          title="El Cuerpo Ausente"
          subtitle="Photography, digital manipulation, painting · 2018–2019" />

        <ArtProductionProject
          href="/art-production/duelo"
          image={"/art-production/duelo/portada_duelo.webp"}
          title="Duelo"
          subtitle="Performance and site-specific intervention · 2018" />

        <ArtProductionProject
          href="/art-production/ofrenda"
          image={"/art-production/ofrenda/portada_ofrenda.webp"}
          title="Ofrenda"
          subtitle="Embroidery and textile art · 2017–2018" />
      </div>

    </div>
  )

}

export function ArtProductionProject({ href, image, title, subtitle }) {
  return (
    <div className="w-full">

      <Link href={href} className="block transition">

        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-4 font-semibold mb-1">{title}</p>

        <p className="text-sm">{subtitle}</p>

      </Link>

    </div>
  )

} 