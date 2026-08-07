import Image from "next/image"
import Hero from "../../components/hero"
import ListSection from "../../components/ListSection"

export default function PersonalData() {
  const studiesData = [
    {
      title: "Barcelona School of Art & Design (LABASAD).",
      lines: ["Barcelona, Spain (online).", "2022/2023", "Master in Web and App Design: UX/UI."]
    },
    {
      title: "University of Malaga (UMA).",
      lines: [
        "Málaga, Spain.",
        "2020/2021",
        "Master in Interdisciplinary Artistic Production."
      ]
    },
    {
      title: "University of Malaga (UMA).",
      lines: [
        "Málaga, Spain.",
        "2015/2020",
        "Fine Arts Degree.",
        "└ University of Ostrava (OSU), Czech Republic. 2018/2019 — Erasmus Programme."
      ]
    },
    {
      title: "Self-management Course: For artists, musicians and creators.",
      lines: ["2020", "Link by UMA."]
    },
    {
      title: "Commercial Spaces Course: Visual Merchandise.",
      lines: ["2019", "Link by UMA & IKEA."]
    }
  ]

  const projectsData = [
    {
      title: "CarOnSale (Castle Tech GmbH)",
      lines: [
        "Berlin, Germany,",
        "Social Media & Design.",
        "2025/2026",
        "Took ownership of content and asset creation for the brand's social channels, and joined the core team behind a company-wide rebrand — producing visual assets across web, print, and social."
      ]
    },
    {
      title: "Art Xbition, Berlin.",
      lines: [
        "Berlin, Germany.",
        "Co-founder & Creative Direction.",
        "07/2024–06/2025",
        "Designed the exhibition series' visual identity, researched and selected emerging artists, and managed event logistics and timelines."
      ]
    },
    {
      title: "Sunflower Hostel",
      lines: [
        "Berlin, Germany.",
        "Social Media Team Coordinator.",
        "2024–Present",
        "Refreshed the hostel's visual identity for social media, produced promotional content, and managed digital communication."
      ]
    },
    {
      title: "Heart of Gold Hostel",
      lines: [
        "Berlin, Germany.",
        "Graphic Designer.",
        "2023/2024"
      ]
    },
    {
      title: "Contenedor Cultural, University of Málaga",
      lines: [
        "Málaga, Spain.",
        "Graphic Design Internship.",
        "2020/2021",
        "Designed exhibition catalogues, posters, and advertising campaigns for university cultural events."
      ]
    },
    {
      title: "Fancine Fantasy Film Festival",
      lines: [
        "Málaga, Spain.",
        "Merch, catalogue and photography.",
        "2020"
      ]
    },
    {
      title: "Trincharte Association",
      lines: [
        "Málaga, Spain.",
        "2016/2018",
        "Organized and took part in cultural and artistic events promoting local art in Málaga."
      ]
    },
    {
      title: "Mural Hospital Materno",
      lines: [
        "Málaga, Spain.",
        "2017",
        "Collaborated on a mural for the hospital's maternity ward."
      ]
    }
  ]

  const exhibitionsData = [
    {
      title: "Art Xbition × Nachtleben Berlin: Noche de Junta",
      lines: [
        "Berlin, Germany.",
        "06/06/2025"
      ]
    },
    {
      title: "Art Xbition × Underlab: whisprrr",
      lines: [
        "Berlin, Germany.",
        "10/05/2025"
      ]
    },
    {
      title: "Art Xbition: Gelegenheiten",
      lines: [
        "Neukölln, Berlin, Germany.",
        "15/02/2025",
        "Group exhibition hosted by the Art Xbition community in collaboration with Gelegenheiten event space."
      ]
    },
    {
      title: "Art Xbition: Humboldthain Flakturm",
      lines: [
        "Berlin, Germany.",
        "09/08/2024",
        "Group exhibition held inside a historic WWII flak tower, pairing contemporary work with the building's architecture."
      ]
    },
    {
      title: "Art Xbition: Hasenheide Park",
      lines: [
        "Berlin, Germany.",
        "18/07/2024",
        "Outdoor group exhibition presenting contemporary work in a public park setting."
      ]
    },
    {
      title: "Master Showcase",
      lines: [
        "University of Málaga, Spain.",
        "2021",
        "Presentation of work developed during the Master's in Interdisciplinary Artistic Production."
      ]
    },
    {
      title: "Botánico Exhibition: Botanic Garten",
      lines: [
        "Málaga, Spain.",
        "2019",
        "Group exhibition exploring botanical and natural themes."
      ]
    }
  ]

  return (
    <>
      <Hero />
      <div className="mt-10 border-t border-black pt-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 p-6 mb-8">
          <div className="w-full md:w-1/2 aspect-[683/778] relative overflow-hidden">
            <Image
              src="/bio/primera_bio.webp"
              alt="Maria Sanchez - Bio Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 aspect-[683/778] relative overflow-hidden">
            <Image
              src="/bio/segunda_bio.webp"
              alt="Maria Sanchez - Bio Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Bio</h2>
        <hr className="border-gray-600" />
        <div className="p-6">
          <p className="text-lg leading-relaxed columns-1 md:columns-2 gap-6 sm:gap-8">
            {"I'm a Spanish designer based in Berlin, with a foundation in Fine Arts that shapes how I approach every project, blending artistic sensibility with technical expertise."}
            <br /><br />
            {"I work across two connected tracks. In "}
            <strong>{"social media and content"}</strong>
            {", I build and run brand presence end to end — most recently averaging "}
            <strong>{"34.94% LinkedIn engagement over 90 days at CarOnSale"}</strong>
            {" (roughly 10× benchmark, 120K+ organic reach) and growing Sunflower Hostel's Instagram "}
            <strong>{"~44% in a year"}</strong>
            {". In "}
            <strong>{"product and UX/UI"}</strong>
            {", I bring formal training and a research-led process to interfaces that have to be genuinely accessible, not just attractive."}
            <br /><br />
            {"Across my work I've built visual identities, designed digital products, produced content systems, and curated exhibitions, moving between traditional techniques and tools like Figma, Procreate, Magnific (Freepik), NanoBanana, and Higgsfield. That range lets me move across branding, editorial design, content creation, and user-centered digital experiences."}
            <br /><br />
            {"Alongside my professional practice, I keep an independent artistic practice — exploring memory, tradition, and identity through embroidery, crochet, performance, and video."}
            <br /><br />
            {"My goal is design that works and holds meaning: visual solutions that create real connections between brands, projects, and their audiences."}
          </p>
        </div>

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Projects and Collaborations</h2>
        <hr className="border-gray-600" />
        <ListSection items={projectsData} />

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Exhibitions</h2>
        <hr className="border-gray-600" />
        <ListSection items={exhibitionsData} />

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Education</h2>
        <hr className="border-gray-600" />
        <ListSection items={studiesData} />

      </div>
    </>
  )
}
