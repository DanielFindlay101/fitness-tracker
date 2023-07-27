import MyCalender from "@/components/MyCalender";
import React from "react";

export default function page() {
  return (
    <>
      <section className="bg-black h-screen p-4">
        <h1 className="text-white">Select a date:</h1>
        <MyCalender />
      </section>
    </>
  );
}
