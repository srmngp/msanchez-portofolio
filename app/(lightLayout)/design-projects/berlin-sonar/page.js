import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

const linkClass = "underline hover:text-green-500 transition-colors";

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

export default function BerlinSonar() {
  const images = [
    {
      src: "/design-projects/sonar-berlin/imagen1_sonar.webp",
      alt: "sonar-1",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen2_sonar.webp",
      alt: "sonar-2",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen3_sonar.webp",
      alt: "sonar-3",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/imagen4_sonar.webp",
      alt: "sonar-4",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
    {
      src: "/design-projects/sonar-berlin/contraportada_sonar.webp",
      alt: "sonar-5",
      className: "md:col-span-2",
      aspectRatio: "1376/900",
    },
  ];

  const process = (
    <>
      <p className="mb-4">
        <strong>{"Brand audit — the real problem wasn't the information, it was the delivery."}</strong>
        {" I started by auditing SONAR's existing presence against their own stated values, and found a gap between the two. Their voice is deliberately warm and non-judgemental; their website was formal enough to read as institutional. Concretely: an unintuitive and inaccessible menu, an illegible footer, low-quality images, no measurement of online impact, and no way for the audience to interact. An organization whose entire method is "}
        <em>approachability</em>
        {" had built a channel that wasn't approachable."}
      </p>

      <p className="mb-4">
        <strong>{"Framing the design challenge."}</strong>
        {" The obvious brief — “explain drugs and their effects clearly” — is the wrong one. The audience is 18–35, saturated with online content, and living inside a culture that romanticises nightlife as an aesthetic. Clear information loses that fight; nobody reads a pamphlet on their way to a club. So I reframed it:"}
      </p>

      <blockquote className="border-l-4 border-gray-400 pl-4 my-6 italic">
        {"How do we earn attention and engagement through a digital campaign where 18–32 year-olds inform themselves — and where the goal isn't just that frequent users learn their limits, but that people who don't use anything understand enough to help when something goes wrong?"}
      </blockquote>

      <p className="mb-4">
        {"Designing for the friend of the user, not only the user, is the reframe I'd defend hardest in this project. It changes who the product is for."}
      </p>

      <p className="mb-4">
        <strong>{"Two personas, then ruthless prioritisation."}</strong>
        {" Eliot, 21, Venezuelan, newly arrived in Berlin, visa trouble, ambitious. Erika, 24, a Berlin native who just finished a computer science degree and produces music, torn between a DJ career and a quiet job. I mapped both across joys, frustrations and tasks, then cut each list to six. What survived: "}
        <em>{"go out safely · stay healthy · know what you're taking · find the best parties · socialise · share your life."}</em>
        {" Harm reduction only appears on that list next to the fun — which is exactly how the product had to treat it."}
      </p>

      <p className="mb-4">
        <strong>{"Research: nobody in the category to copy, so I looked outside it."}</strong>
        {" Very few organizations do what SONAR does, so a conventional competitive analysis would have returned nothing useful. Instead I studied how non-profits and studios make heavy subjects interactive: "}
        <strong>QueerMaps</strong>
        {" (Special Offer) for archiving community history, "}
        <strong>I-Spy</strong>
        {" (Resn) for turning facts into exploration, "}
        <strong>Seen</strong>
        {" (Bakken & Baeck) for handling a painful topic through personal voice, and "}
        <strong>PlasticAir</strong>
        {" (Giorgia Lupi with Pentagram and Google Arts & Culture) for making an invisible risk visible through data as an object you can look at."}
      </p>

      <p className="mb-4">
        {"Then analogous inspiration for the interaction model itself: "}
        <strong>The Drop Store</strong>
        {" — a fictional dystopian shop selling products from a world in water crisis, built for the Dutch Ministry of Foreign Affairs — proved that a serious public-health message can be carried by a playful, almost sarcastic metaphor without losing credibility. "}
        <strong>Visual Society</strong>
        {" for filter-based browsing, "}
        <strong>Tomuch Studio</strong>
        {" for physics-driven play."}
      </p>

      <p className="mb-4">
        <strong>{"Decision 1 — a campaign, not a redesign."}</strong>
        {" Fixing SONAR's website would have improved a page nobody visits. A standalone campaign site could travel, be shared, and give the organization something to post — which also addressed the “no online interaction” weakness from the audit."}
      </p>

      <p className="mb-4">
        <strong>{"Decision 2 — no registration. This one is not negotiable in this category."}</strong>
        {" Every engagement pattern says capture the user. Here it would have killed the product: this is a stigmatised, criminalised topic, and asking someone to hand over their identity before reading about what they took is the fastest way to lose them. No account, no data, no barrier — so people come back, and come back often."}
      </p>

      <p className="mb-4">
        <strong>{"Decision 3 — play as the interface, with a serious escape hatch."}</strong>
        {" The core screen is an interactive composition of floating objects, each an icon for a substance. You drag them, mix them, recompose them — a giant puzzle — and double-click any one to open its information. That's what earns attention from an audience that ignores pamphlets."}
      </p>

      <p className="mb-4">
        {"But play is random, and someone who took something an hour ago and needs an answer now cannot be made to hunt for it. So the site carries a "}
        <strong>parallel gallery</strong>
        {": the same information, structured, searchable, filterable by substance and by mix. "}
        <strong>{"The playful path is for discovery; the direct path is for need."}</strong>
        {" Building both is the decision that makes the concept responsible rather than just clever."}
      </p>

      <p className="mb-4">
        <strong>{"Decision 4 — a content type for mixes."}</strong>
        {" The information architecture treats combinations as first-class objects, not footnotes: a mix has its own page, its own risks and safe-use guidance, and cross-links back to each substance involved. Most drug information covers substances one at a time, which is precisely not how they're taken. This came straight out of the harm-reduction logic of the brief."}
      </p>

      <p className="mb-4">
        <strong>{"Information architecture and flows."}</strong>
        {" Home (interactive puzzle) → Information → Gallery, split into Substances and Mixes, each leading to a detail sheet. A substance sheet carries name, ingredients, effects, side effects, long-term effects, and safe use. A mix sheet carries effects, risks, safe use, and links to both parent substances. Wireframed for mobile and desktop."}
      </p>

      <p className="mb-4">
        <strong>{"Art direction — legible chaos."}</strong>
        {" The target lives in a world of neon, colour and psychedelia, so a clean, clinical health-information aesthetic would have read as someone else's language. The direction is vibrant 3D objects and saturated colour — deliberately "}
        <em>messy but organised</em>
        {" — held together by very large, highly legible type. Typeface: "}
        <strong>Mukta</strong>
        {", a neo-grotesque sans chosen for legibility and for staying out of the way of the interaction. Colour: SONAR's existing identity is aqua blue, so I built the campaign on a "}
        <strong>purple</strong>
        {" that harmonises with it — the campaign reads as theirs without being constrained by a palette designed for a different medium."}
      </p>

      <p className="mb-4">
        <strong>{"Design system."}</strong>
        {" Full token set — colour ("}
        <code>#6303FF</code>
        {" brand, "}
        <code>#4D0CE3</code>
        {" campaign), a mobile type scale from 25px to 60px, icon sizes — and an atomic component library built up from atoms through molecules to organisms. Delivered as mobile and desktop prototypes in Figma, plus an animated state where the objects drift and reposition as the user plays with them."}
      </p>

      <p className="mb-4">
        <strong>{"What I'd do next."}</strong>
        {" The concept was never tested with the audience it's designed for, and the riskiest assumption is the one the whole thing rests on: that people will treat a playful interface about drugs as trustworthy rather than flippant. That's what I'd put in front of users first, and it's the reason the structured gallery exists as a fallback."}
      </p>
    </>
  );

  const media = (
    <section className="p-3 md:p-6">
      <div className="max-w-sm mb-8">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "9/16" }}>
          <iframe
            src="https://www.youtube.com/embed/3bEz7lb1hhw"
            title="Sonar Berlin — interactive campaign, animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {"The objects drifting and responding as the user plays with them."}
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-3">Prototypes</h3>
      <ul className="text-base md:text-lg space-y-2">
        <li>
          <ExternalLink href="https://www.figma.com/proto/wBNdmG9TxxC8w2hMl3bVn5/MariaSanchez_ProyectoFinMaster?node-id=303-391">
            {"Prototype — mobile"}
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.figma.com/proto/wBNdmG9TxxC8w2hMl3bVn5/MariaSanchez_ProyectoFinMaster?node-id=520-1564">
            {"Prototype — desktop"}
          </ExternalLink>
        </li>
      </ul>
    </section>
  );

  return (
    <ProjectDetails
      image="/design-projects/sonar-berlin/portada_sonar.webp"
      title="Sonar Berlin"
      subtitle="Making harm-reduction information something people actually pick up"
      description={[
        <>
          {"SONAR Berlin is a real harm-reduction coalition — "}
          <ExternalLink href="https://www.fixpunkt.org/">Fixpunkt</ExternalLink>
          {", "}
          <ExternalLink href="https://vistaberlin.de/">Vista</ExternalLink>
          {" and "}
          <ExternalLink href="https://drogennotdienst.de/">Notdienst Berlin</ExternalLink>
          {", working with "}
          <ExternalLink href="https://eclipse-ev.de/">Eclipse</ExternalLink>
          {" and the "}
          <ExternalLink href="https://www.clubcommission.de/">Clubcommission</ExternalLink>
          {" — that runs information booths at events, trains nightlife staff, and counsels people about party drugs without judgement. Their problem was reach: all of that work lived at events and on a website too formal to reach the people most at risk. I designed an interactive campaign to fix it — a full-screen playground of floating substances you drag, mix and recompose, and double-click to open the harm-reduction information underneath, with a structured, searchable gallery running in parallel for anyone who needs an answer right now."}
        </>,
        <em key="note">
          {"A self-initiated concept — nobody asked for it. I chose SONAR Berlin as the subject of my final Master's project (Web & App Design: UX/UI, LABASAD) because the problem was real and worth solving."}
        </em>,
      ]}
      process={process}
      media={media}
      galleryComponent={<Gallery images={images} gridCols={2} />}
      footer={
        <ProjectFooter
          sections={{
            Role: ["UX/UI Designer — solo project"],
            Dates: ["2023"],
            Context: ["Master's in Web & App Design: UX/UI", "LABASAD (online)"],
            Location: ["Berlin, Germany"],
          }}
        />
      }
    />
  );
}
