"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import image1 from './assets/image1.avif';
import image2 from './assets/image2.avif';
import image3 from './assets/image3.avif';
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      image1,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      image2,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      image3,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
