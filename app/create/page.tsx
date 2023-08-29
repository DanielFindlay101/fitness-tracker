"use client";
import MyCalender from "@/components/MyCalender";
import WorkoutModal from "@/components/WorkoutModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useStore } from "../store";

export default function page() {
  const workoutModal = useStore((state) => state.workoutModal);
  const setWorkoutModal = useStore((state) => state.setWorkoutModal);

  return (
    <>
      <section>
        <div className={workoutModal ? "opacity-50" : "flex flex-col gap-5"}>
          {!workoutModal && <h1 className="text-white">Select a date</h1>}
          <div className="flex flex-col items-center gap-3">
            <MyCalender />
            <Button
              className="bg-lime-400 text-black hover:bg-lime-500"
              onClick={() => setWorkoutModal(true)}
            >
              Log Workout
            </Button>
          </div>
        </div>
        {workoutModal && <WorkoutModal />}
      </section>
    </>
  );
}
