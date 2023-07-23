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
      <div className="bg-black flex justify-evenly p-4">
        <h1 className="text-white text-left">My Fitness Tracker</h1>
      </div>
    </>
  );
}
