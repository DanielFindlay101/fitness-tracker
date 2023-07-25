import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function BottomNav() {
  return (
    <div className="w-full bg-black h-[70px] flex justify-evenly items-center fixed bottom-0 ">
      <HomeIcon className="w-6 h-6 text-lime-400" />
      <MagnifyingGlassIcon className="w-6 h-6 text-white" />
      <PlusCircleIcon className="w-8 h-8 bg-white rounded-full text-black" />
      <BellIcon className="w-6 h-6 text-white" />
      <Cog6ToothIcon className="w-6 h-6 text-white" />
    </div>
  );
}
