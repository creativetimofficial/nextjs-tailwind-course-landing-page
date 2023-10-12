"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "The instructors are top-notch, and the hands-on approach to learning is incredibly effective.",
    client: "Jessica Devis",
    title: "Web Developer @ MARKETING DIGITAL LTD.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "I went from knowing nothing about web development to landing my dream job as a frontend developer.",
    client: "Linde Michel",
    title: "Web Developer @ APPLE INC.",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "The courses are structured well, and the projects helped me build a strong portfolio.",
    client: "Misha Stam",
    title: "Web Developer @ APPLE INC.",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our Students Are Saying
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Our mission is to empower individuals with the knowledge and skills
            they need to succeed in the world of web development. But don&apos;t
            just take our word for it.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
