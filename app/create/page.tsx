"use client";
import MyCalender from "@/components/MyCalender";
import WorkoutModal from "@/components/WorkoutModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function page() {
  const [workoutModal, setWorkoutModal] = useState(false);

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
        {workoutModal && <WorkoutModal setWorkoutModal={setWorkoutModal} />}
      </section>
    </>
  );
}
