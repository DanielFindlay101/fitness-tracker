"use client";
import MyCalender from "@/components/MyCalender";
import WorkoutModal from "@/components/WorkoutModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function page() {
  const [toggleWorkoutModal, setToggleWorkoutModal] = useState(false);

  return (
    <>
      <section className="bg-black h-screen p-4 flex flex-col gap-[50px]">
        <h1 className="text-white">Select a date</h1>
        <div className="flex flex-col items-center gap-3">
          <MyCalender />
          <Button
            className="bg-lime-400 text-black hover:bg-lime-500"
            onClick={() => setToggleWorkoutModal(true)}
          >
            Log Workout
          </Button>
          {toggleWorkoutModal && <WorkoutModal />}
        </div>
      </section>
    </>
  );
}
