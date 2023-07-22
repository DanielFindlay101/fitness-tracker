"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function MainNav() {
  return (
    <>
      <div className="flex justify-around items-center w-full bg-indigo-900 p-4">
        <h1 className="text-white">My Fitness Tracker</h1>
      </div>
    </>
  );
}
