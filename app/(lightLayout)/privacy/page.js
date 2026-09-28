import ListSection from "../../components/ListSection"

export const metadata = {
  title: "Privacy Policy - María Sánchez",
}

export default function Privacy() {
  const sections = [
    {
      title: "Who is responsible",
      lines: [
        "Maria Sanchez Molina, Berlin, Germany.",
        "Contact: ms.maria.sanchez.molina@gmail.com",
      ],
    },
    {
      title: "What is measured and why",
      lines: [
        "I use PostHog analytics to understand how visitors use this portfolio and improve it: which pages and projects are viewed, time on page and scroll depth, clicks (for example on the resume or contact links), browser and device type, the referring website, and an approximate country derived from the IP address. IP addresses are not stored.",
        "The data is never sold, shared for advertising, or used to identify you personally.",
      ],
    },
    {
      title: "If you accept",
      lines: [
        "PostHog stores an anonymous identifier in a cookie and in your browser's local storage (names starting with \"ph_\", kept for up to one year) so repeat visits can be recognised.",
        "Sessions may be recorded (clicks, scrolling and page changes) to see how the site is used. This site has no forms, so no personal input is captured.",
        "Legal basis: your consent (Art. 6(1)(a) GDPR).",
      ],
    },
    {
      title: "If you reject",
      lines: [
        "No analytics cookies are set and sessions are not recorded. Page views and clicks are still counted anonymously, without storing anything on your device, and each visit is counted separately.",
        "Only your choice itself is saved in your browser's local storage (\"analytics_consent\") so the banner does not ask again.",
        "Legal basis: legitimate interest in basic, anonymous usage statistics (Art. 6(1)(f) GDPR).",
      ],
    },
    {
      title: "Service providers",
      lines: [
        "Analytics: PostHog Inc., with data stored on its EU servers.",
        "Hosting: Vercel Inc., which processes technical request data such as your IP address to deliver the pages.",
      ],
    },
    {
      title: "Your choices and rights",
      lines: [
        "You can change your decision at any time with \"Cookie settings\" at the bottom of every page. Withdrawing consent deletes the analytics cookie and stops recording.",
        "You can ask for access to or deletion of your data by email. You also have the right to lodge a complaint with a data protection authority, such as the Berlin Commissioner for Data Protection and Freedom of Information.",
      ],
    },
    {
      title: "Last updated",
      lines: ["September 2026."],
    },
  ]

  return (
    <div>
      <h1 className="py-6 text-3xl sm:text-4xl md:text-5xl pl-6 mb-2">Privacy Policy</h1>
      <hr className="border-gray-600" />
      <ListSection items={sections} />
    </div>
  )
}
