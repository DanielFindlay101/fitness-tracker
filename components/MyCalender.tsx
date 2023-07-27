"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function MyCalender() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="h-full flex flex-col justify-center items-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-purple-800 text-white "
      />
    </div>
  );
}
