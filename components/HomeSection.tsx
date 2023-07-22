"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "./ui/button";

export default function HomeSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleClick = () => {
    console.log("hello");
  };
  console.log(date);
  return (
    <section className="p-6 justify-around h-screen bg-black">
      <h1 className="text-white">
        Choose a date on the calender to log a workout
      </h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-slate-200 "
      />
      <Button className="bg-emerald-500" disabled={!date}>
        Log a workout
      </Button>
    </section>
  );
}
