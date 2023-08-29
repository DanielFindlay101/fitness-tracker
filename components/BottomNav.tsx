"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkNames = {
  name: string;
  icon: any;
  href: string;
}[];

const linkNames: LinkNames = [
  { name: "home", icon: <HomeIcon />, href: "/" },
  { name: "calendar", icon: <CalendarIcon />, href: "/test1" },
  { name: "create", icon: <PlusCircleIcon />, href: "/create" },
  { name: "notifications", icon: <BellIcon />, href: "/test2" },
  { name: "settings", icon: <Cog6ToothIcon />, href: "/test3" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    // <div className="w-full bg-black h-[70px] flex justify-evenly items-center fixed bottom-0 ">
    //   <Link href="/">
    //     <HomeIcon className="w-6 h-6 text-lime-400" />
    //   </Link>
    //   <CalendarIcon className="w-6 h-6 text-white" />
    //   <Link href="/create">
    //     <PlusCircleIcon className="w-8 h-8 bg-white rounded-full text-black" />
    //   </Link>
    //   <BellIcon className="w-6 h-6 text-white" />
    //   <Cog6ToothIcon className="w-6 h-6 text-white" />
    // </div>
    <>
      <div className="w-full bg-black h-[70px] flex justify-evenly items-center fixed bottom-0 ">
        {linkNames.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              className={isActive ? "w-7 h-7 text-lime-400" : "nav-link"}
              href={link.href}
              key={link.name}
            >
              {link.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
}
