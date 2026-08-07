"use client";

import ProjectDetails from "../../../components/ProjectDetails";
import ProjectFooter from "../../../components/ProjectFooter";
import Gallery from "../../../components/Gallery";

export default function Cosmopolis() {
  const images = [
    {
      src: "/design-projects/cosmopolis/imagen1_cosmopolis.webp",
      alt: "cosmopolis-1",
      className: "md:col-span-1",
      aspectRatio: "440/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen2_cosmopolis.webp",
      alt: "cosmopolis-2",
      className: "md:col-span-2",
      aspectRatio: "903/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen3_cosmopolis.webp",
      alt: "cosmopolis-3",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen4_cosmopolis.webp",
      alt: "cosmopolis-4",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen5_cosmopolis.webp",
      alt: "cosmopolis-5",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen6_cosmopolis.webp",
      alt: "cosmopolis-6",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen7_cosmopolis.webp",
      alt: "cosmopolis-7",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
    {
      src: "/design-projects/cosmopolis/imagen8_cosmopolis.webp",
      alt: "cosmopolis-8",
      className: "md:col-span-3",
      aspectRatio: "1376/880",
    },
  ];

  const process = (
    <>
      <p className="mb-4">
        <strong>{"The problem."}</strong>
        {" A traveller with four days in an unfamiliar city has two bad options: follow the guidebook and see what everyone sees, or spend the trip researching. The knowledge that would fix this exists — it just lives with residents and previous travellers, and there's nowhere to put it."}
      </p>

      <p className="mb-4">
        <strong>{"Reference research."}</strong>
        {" Rather than start from a blank canvas, I broke the problem into behaviours that already work elsewhere and studied each one:"}
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>{"Booking mechanics"}</strong>
          {" — Ryanair and Vueling, for the date/passenger/confirmation sequence people already know how to use."}
        </li>
        <li>
          <strong>{"Trip interactions"}</strong>
          {" — Airbnb, for how a listing turns into a booking without friction."}
        </li>
        <li>
          <strong>{"Browsing and saving"}</strong>
          {" — Pinterest and Instagram. Pinterest especially: it proves that a dense grid of images can still be simple and accessible."}
        </li>
        <li>
          <strong>{"Community knowledge"}</strong>
          {" — Google Maps, where people already leave reviews, photos, and comments on the places they visit."}
        </li>
      </ul>

      <p className="mb-4">
        {"The last one was the unlock. Google Maps shows that travellers "}
        <em>will</em>
        {" document places for strangers — that behaviour just isn't connected to anything that helps you plan a trip. Cosmopolis connects them."}
      </p>

      <p className="mb-4">
        <strong>{"The key decision: saving is public, not private."}</strong>
        {" Every travel app lets you save places to a private wishlist. In Cosmopolis you save into "}
        <strong>public folders</strong>
        {", Pinterest-style, that other travellers can browse and follow. It's a small mechanical change with a large consequence: private saves make the app a personal notepad, public folders make the local knowledge compound. Without it, the concept doesn't work — there would be nothing in the app that a guidebook doesn't have."}
      </p>

      <p className="mb-4">
        <strong>{"Designing for the undecided traveller."}</strong>
        {" Mapping the user flow surfaced a branch most travel apps skip. After sign-in the app asks whether you already know where you're going. If yes, you go straight to city and dates. "}
        <strong>{"If no, you enter Discovery"}</strong>
        {" — browsing by mood and category (Beach, Mountain, City) rather than by destination. Treating “I don't know where I want to go” as a first-class entry point rather than a dead end is the decision I'd defend hardest in this project."}
      </p>

      <p className="mb-4">
        <strong>{"Information architecture."}</strong>
        {" The app is deliberately two page families that meet at the place detail:"}
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <em>Trip</em>
          {" — home listing with country filter → explore/search → destination detail → booking (dates, passengers, luggage) → confirmation with insurance and cancellation policy."}
        </li>
        <li>
          <em>Social</em>
          {" — user profile with custom banner → saved places as folders → created reviews → place detail with rating and comments."}
        </li>
      </ul>

      <p className="mb-4">
        {"Keeping them separate stops the social layer from turning the booking flow into a feed, and stops the booking flow from making the social layer feel transactional."}
      </p>

      <p className="mb-4">
        <strong>{"Accessibility as a constraint, from the moodboard onward."}</strong>
        {" I committed early to a typographic system — the layouts are built out of text compositions rather than decorated with them — and set type deliberately large for legibility. That single constraint drove the whole visual language: simple, high-contrast, dynamic, and readable. Both "}
        <strong>{"light and dark modes"}</strong>
        {" were designed in full, on native iOS components, so the interface stays coherent in either."}
      </p>

      <p className="mb-4">
        <strong>{"Onboarding."}</strong>
        {" Three screens, one per core function — "}
        <em>Explore</em>
        {", "}
        <em>Make plans</em>
        {", "}
        <em>Share</em>
        {" — each skippable. If the app needs more than three screens to explain itself, the design is wrong."}
      </p>

      <p className="mb-4">
        <strong>{"Outcome."}</strong>
        {" The full flow designed end to end — onboarding, discovery, destination detail, booking, confirmation, profile, folders and reviews — in both light and dark mode, on native iOS components."}
      </p>

      <p className="mb-4">
        <strong>{"What I'd do next."}</strong>
        {" The project ran on a fixed academic deadline and the interface never got in front of real users. The first thing I'd do with more time is test the Discovery branch and the public-folder model with actual travellers — the two decisions the whole concept rests on, and the two I'd most want to be proven wrong about."}
      </p>
    </>
  );

  return (
    <ProjectDetails
      image="/design-projects/cosmopolis/portada_cosmopolis.webp"
      title="Cosmopolis"
      subtitle="A travel app built on local knowledge"
      description={[
        "Most travel apps sell you the landmarks. Cosmopolis is built for the traveller who wants the other thing: the restaurants, bars, galleries and events that only someone who lives there would know.",
        <>
          {"The idea didn't come from a brief. I was working in a Berlin hostel, talking every day with people passing through, and what became obvious is that people don't want to "}
          <em>see</em>
          {" a city — they want to live it the way a resident does. You can't do that from a guidebook, because the places that would let you aren't in one."}
        </>,
        "Cosmopolis is my answer: an iOS travel app, designed end to end, where saved places are public rather than private — so local knowledge compounds instead of sitting in one traveller's wishlist.",
      ]}
      process={process}
      galleryComponent={<Gallery images={images} gridCols={3} />}
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
