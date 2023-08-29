import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="h-screen bg-black pt-[65px] flex flex-col justify-evenly items-center">
      <h1 className="text-white">
        We cannot find the page you're looking for...
      </h1>
      <Link href="/">
        <p className="text-white">
          Go back <span className="text-lime-400">Home</span>
        </p>
      </Link>
    </main>
  );
}
