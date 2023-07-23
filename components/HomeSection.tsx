"use client";

import BottomNav from "./BottomNav";
import HomeCards from "./HomeCards";
import ProgressSection from "./ProgressSection";

export default function HomeSection() {
  return (
    <div className=" h-screen bg-black">
      <HomeCards />
      <ProgressSection />
      <BottomNav />
    </div>
  );
}
