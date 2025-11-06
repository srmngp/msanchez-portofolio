import Image from "next/image"
import Link from "next/link"

export default function Home() {

  return (
    <div className="grid grid-cols-2 gap-8 px-6">
      <ArtProductionProject
        href="/art-production/a-la-vera-de-mis-raices"
        image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
        title="A la vera de mis raíces"
        subtitle="Crochet and textile art" />

      <ArtProductionProject
        href="/art-production/a-la-vera-de-mis-raices"
        image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
        title="El Cuerpo Ausente"
        subtitle="Photography, digital manipulation, painting" />

      <ArtProductionProject
        href="/art-production/a-la-vera-de-mis-raices"
        image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
        title="Memorium"
        subtitle="Video and digital drawing" />

      <ArtProductionProject
        href="/art-production/a-la-vera-de-mis-raices"
        image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
        title="Duelo"
        subtitle="Performance and site-specific intervention" />

      <ArtProductionProject
        href="/art-production/a-la-vera-de-mis-raices"
        image={"/art-production/a-la-vera/a-la-vera-de-mis-raices.png"}
        title="Ofrenda"
        subtitle="Embroidery and textile art." />

    </div>
  )

}

export function ArtProductionProject({ href, image, title, subtitle }) {
  return (
    <div className="w-full">

      <Link href={href} className="block transition">

        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full"
          priority
        />

        <p className="mt-4 font-semibold mb-1">{title}</p>

        <p className="text-sm">{subtitle}</p>

      </Link>

    </div>
  )

} 