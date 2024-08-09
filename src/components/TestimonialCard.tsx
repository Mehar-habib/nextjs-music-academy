"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonialContent = [
  {
    name: "Alice Johnson",
    title: "Software Engineer",
    quote:
      "Working with this team has been a game-changer for our project. Their attention to detail and innovative solutions have exceeded our expectations. Highly recommend!",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    quote:
      "The expertise and professionalism of the service provided were outstanding. They delivered on time and helped us achieve our goals efficiently. A truly valuable partner.",
  },
  {
    name: "Charlie Brown",
    title: "UX Designer",
    quote:
      "I am impressed by the creativity and dedication demonstrated in the design phase. The results were beyond what we had envisioned, and the feedback from users has been overwhelmingly positive.",
  },
  {
    name: "Dana White",
    title: "Marketing Specialist",
    quote:
      "The campaign strategies and insights offered were exactly what we needed. Their approach was thorough, and the impact on our metrics was immediate and significant.",
  },
  {
    name: "Evan Davis",
    title: "Business Analyst",
    quote:
      "The analysis provided was both comprehensive and actionable. It gave us a clear direction and helped streamline our operations. The team's professionalism made the entire process smooth and effective.",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonialContent}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
