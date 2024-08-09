"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Symphony of the Stars",
    description:
      "A grand orchestral piece that takes listeners on a cosmic journey through the night sky. With sweeping strings, powerful brass sections, and ethereal woodwinds, this symphony paints a vivid picture of the celestial dance of stars and planets.A grand orchestral piece that takes listeners on a cosmic journey through the night sky. With sweeping strings, powerful brass sections, and ethereal woodwinds, this symphony paints a vivid picture of the celestial dance of stars and planets.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={
            "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Symphony of the Stars"
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    ),
  },
  {
    title: "Echoes of the Past",
    description:
      "This hauntingly beautiful composition weaves together elements of classical and contemporary music to evoke a sense of nostalgia and longing. The interplay of piano and strings creates a rich, emotive soundscape that resonates with memories of bygone eras.This hauntingly beautiful composition weaves together elements of classical and contemporary music to evoke a sense of nostalgia and longing. The interplay of piano and strings creates a rich, emotive soundscape that resonates with memories of bygone eras.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={
            "https://images.unsplash.com/photo-1660134371062-6a43a1df5411?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Symphony of the Stars"
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    ),
  },
  {
    title: "Rhythms of the Heartbeat",
    description:
      "An energetic and dynamic fusion of various world music genres, this track explores the primal connection between rhythm and human emotion. Percussion-driven beats and vibrant melodies blend seamlessly to create an invigorating and immersive listening experience.An energetic and dynamic fusion of various world music genres, this track explores the primal connection between rhythm and human emotion. Percussion-driven beats and vibrant melodies blend seamlessly to create an invigorating and immersive listening experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={
            "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Rhythms of the Heartbeat"
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    ),
  },
  {
    title: "Serenade of the Waves",
    description:
      "A soothing and melodic piece that captures the tranquil beauty of the ocean. With gentle acoustic guitars, calming flute passages, and subtle ambient sounds, this serenade provides a peaceful escape and a moment of reflection amidst the ebb and flow of the tides.A soothing and melodic piece that captures the tranquil beauty of the ocean. With gentle acoustic guitars, calming flute passages, and subtle ambient sounds, this serenade provides a peaceful escape and a moment of reflection amidst the ebb and flow of the tides.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={
            "https://images.unsplash.com/photo-1545105366-5d6173ec720a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Symphony of the Stars"
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />
      </div>
    ),
  },
];

function WhyChoseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChoseUs;
