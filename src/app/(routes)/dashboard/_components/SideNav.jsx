import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  BadgeIndianRupee,
  Info,
  Mail,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: BadgeIndianRupee,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
    {
      id: 6,
      name: "Contact",
      icon: Mail,
      path: "/dashboard/contact",
    },
    {
      id: 7,
      name: "About",
      icon: Info,
      path: "/dashboard/about",
    },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <span className="font-bold text-xl" style={{ color: "#14b8a6" }}>
            TrackWise
          </span>
        </Link>
      </div>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                text-gray-500 font-medium
                mb-2
                p-4 cursor-pointer rounded-full
                hover:text-primary hover:bg-teal-100
                ${path == menu.path && "text-primary bg-teal-100"}
              `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 w-full px-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} TrackWise. All rights reserved.
      </div>
    </div>
  );
}

export default SideNav;
