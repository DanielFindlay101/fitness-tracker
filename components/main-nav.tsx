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
      <div className="flex justify-around items-center bg-green-400 p-4">
        <h1>Welcome</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-red-200">
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="p-2">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-blue-200">
                Item Two
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="p-4">
                  Hi Friends
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
