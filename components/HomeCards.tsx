import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function HomeCards() {
  return (
    <>
      <div className="flex justify-center gap-2 mb-4">
        <Link href="/create">
          <div className="bg-lime-400 relative w-[160px] rounded-3xl h-[100px] p-3">
            <h1>Log a workout</h1>
            <ArrowRightIcon className="w-5 absolute right-[10px] bottom-[20px]" />
          </div>
        </Link>
        <div className="bg-lime-400 relative w-[160px] rounded-3xl h-[100px] p-3">
          <h1>View a workout</h1>
          <ArrowRightIcon className="w-5 absolute right-[10px] bottom-[20px]" />
        </div>
      </div>
    </>
  );
}
