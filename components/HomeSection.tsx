"use client";

import HomeCards from "./HomeCards";
import ProgressSection from "./ProgressSection";

export default function HomeSection() {
  return (
    <div className="h-screen bg-black pt-[65px]">
      <HomeCards />
      <ProgressSection />
    </div>
  );
}
