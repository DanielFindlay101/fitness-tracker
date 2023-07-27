import MyCalender from "@/components/MyCalender";
import WorkoutModal from "@/components/WorkoutModal";
import React from "react";

export default function page() {
  return (
    <>
      <section className="bg-black h-screen p-4 flex flex-col gap-[50px]">
        <h1 className="text-white">Select a date</h1>
        <div className="flex flex-col items-center gap-3">
          <MyCalender />
          <WorkoutModal />
        </div>
      </section>
    </>
  );
}
