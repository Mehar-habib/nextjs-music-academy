"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Introduction to Web Development",
      description:
        "A comprehensive overview of web development fundamentals. This webinar will cover HTML, CSS, and JavaScript basics, and introduce you to the tools and frameworks that are essential for modern web development.",
      link: "https://example.com/webinars/intro-to-web-development",
    },
    {
      title: "Mastering React: From Basics to Advanced",
      description:
        "Dive deep into React with this advanced webinar. Learn about hooks, context API, performance optimization, and best practices for building scalable and maintainable React applications.",
      link: "https://example.com/webinars/mastering-react",
    },
    {
      title: "Data Science and Machine Learning Essentials",
      description:
        "Explore the fundamentals of data science and machine learning. This session will cover data analysis techniques, machine learning algorithms, and practical applications using popular Python libraries.",
      link: "https://example.com/webinars/data-science-essentials",
    },
    {
      title: "Digital Marketing Strategies for 2024",
      description:
        "Stay ahead in the digital marketing world with our webinar on the latest strategies for 2024. Learn about SEO, content marketing, social media trends, and how to leverage data for better marketing results.",
      link: "https://example.com/webinars/digital-marketing-strategies",
    },
    {
      title: "Cybersecurity Best Practices for Businesses",
      description:
        "Protect your business from cyber threats by learning the best practices in cybersecurity. This webinar covers risk management, threat detection, data protection, and how to build a robust security framework for your organization.",
      link: "https://example.com/webinars/cybersecurity-best-practices",
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-300 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
