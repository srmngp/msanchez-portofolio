import Image from "next/image"
import Hero from "../../components/hero"
import ListSection from "../../components/ListSection"

export default function PersonalData() {
  const studiesData = [
    {
      title: "Barcelona School of Art & Desing (LABASAD).",
      lines: ["Barcelona, Spain.", "2022/2023. Online master in Web Desing and App: UX/UI"]
    },
    {
      title: "University of Malaga (UMA).",
      lines: ["Malaga, Spain.",
        "2015/2020 Fine Arts Degree.",
        "2020/2021 Master in Interdisciplinary Artistic Production."
      ]
    },
    {
      title: "University of Ostrava (OSU).",
      lines: [" Ostrava, Czech Republic", "2018/2019. Erasmus programe."]
    },
    {
      title: "Self-management Course: For artists, musicians and creators. 2020",
      lines: ["Link by UMA."]
    },
    {
      title: "Comercial Spaces Course: Visual Merchandise. 2019",
      lines: ["Link by UMA & IKEA."]
    }
  ]

  const exhibitionsData = [
    {
      title: "Art Xbition: Gelegenheiten,",
      lines: [
        "Neukölln, Berlin, Germany",
        "15/02/2025",
        "Group exhibition hosted by the X.BIT community in collaboration with Gelengenheiten event space."
      ]
    },
    {
      title: "Art Xbition: Humboldthain Flakturm,",
      lines: [
        "Berlin, Germany",
        "09/08/2024",
        "Group exhibition held in a historic venue, blending modern art with iconic architecture."
      ]
    },
    {
      title: "Art Xbition: Hasenheide Park,",
      lines: [
        "Berlin, Germany",
        "18/07/2024",
        "Outdoor group exhibition showcasing contemporary works in a vibrant public space."
      ]
    },
    {
      title: "Exhibition: Master Showcase",
      lines: [
        "University of Málaga, Spain",
        "2020",
        "Presentation of contemporary works created during the Master's program."
      ]
    },
    {
      title: "Botánico Exhibition: Botanic Garten,",
      lines: [
        "Málaga, Spain",
        "2019",
        "Group exhibition exploring natural and botanical themes in visual art."
      ]
    }
  ]

  const projectsData = [
    {
      title: "Art Xbition, Berlin.",
      lines: [
        "2024/2025",
        "Organizer and coordinator of the exhibition, responsible for designing and developing the visual identity, researching emerging artists, and managing event logistics and timelines."
      ]
    },
    {
      title: "Sunflower Hostel",
      lines: [
        "Berlin, Germany",
        "2024/2025",
        "Social Media Manager & Designer. Developed a refreshed visual identity for social media, produced promotional content, and managed digital communication."
      ]
    },
    {
      title: "Contenedor Cultural, University of Málaga",
      lines: [
        "Málaga, Spain",
        "2020/2021",
        "Graphic Design Internship. Designed exhibition catalogues, posters, and advertising campaigns."
      ]
    },
    {
      title: "Fancine Fantasy Film Festival",
      lines: [
        "Málaga, Spain",
        "2020",
        "Graphic Design Internship. Created visual pieces and promotional materials for the festival."
      ]
    },
    {
      title: "Mural",
      lines: [
        "Hospital Materno Málaga, Spain",
        "2017",
        "Collaborative mural project for the hospital's maternity ward."
      ]
    },
    {
      title: "Trincharte Association",
      lines: [
        "Málaga, Spain,",
        "2016/2018",
        "Organization and participation in cultural and artistic events promoting local art."
      ]
    }
  ]

  return (
    <>
      <Hero />
      <main>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 p-6 mb-8">
          <div className="w-full md:w-1/2 aspect-[683/778] relative overflow-hidden">
            <Image
              src="/bio/primera_bio.jpg"
              alt="Maria Sanchez - Bio Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 aspect-[678/778] relative overflow-hidden">
            <Image
              src="/bio/segunda_bio.jpg"
              alt="Maria Sanchez - Bio Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Bio</h2>
        <hr className="border-gray-600" />
        <div className="p-6">
          <p className="text-base sm:text-lg md:text-[22px] leading-relaxed columns-1 md:columns-2 gap-6 sm:gap-8">
            María Sánchez Molina is a Spanish graphic and digital designer based in Berlin, with a strong passion for combining art and technology. With a background in Fine Arts, she brings a unique perspective to design, blending artistic sensibility with technical expertise to create impactful and meaningful visual solutions.
            <br /><br />
            Her work combines traditional art techniques with advanced digital tools such as Adobe Creative Suite, Figma, and Procreate. This versatility allows her to develop projects across branding, editorial design, content creation, and user-centered digital experiences.
            <br /><br />
            María has collaborated with cultural institutions, festivals, and hospitality businesses, designing visual identities, communication campaigns, and digital strategies. Alongside her professional practice, she continues her independent artistic work, which explores themes of memory, tradition, and identity through media such as embroidery, crochet, performance, and video. This dual perspective enriches her design approach, allowing her to merge storytelling with innovation.
            <br /><br />
            She holds a Master&apos;s in UX/UI Design and a Master&apos;s in Artistic Production, and she is committed to continuous growth and learning. By staying at the forefront of industry trends, María thrives in dynamic, collaborative environments where creativity, strategy, and technology intersect.
            <br /><br />
            Her goal is to deliver designs that not only function effectively but also resonate emotionally, creating authentic connections between brands, projects, and their audiences.
          </p>
        </div>

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Studies</h2>
        <hr className="border-gray-600" />
        <ListSection items={studiesData} />

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Exhibitions</h2>
        <hr className="border-gray-600" />
        <ListSection items={exhibitionsData} />

        <h2 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Projects and Collaborations</h2>
        <hr className="border-gray-600" />
        <ListSection items={projectsData} />

      </main>
    </>
  )
}
