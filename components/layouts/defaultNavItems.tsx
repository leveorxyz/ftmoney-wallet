import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Wallet",
    href: "/wallet",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Transaction",
    href: "/transaction",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Price",
    href: "/price",
    icon: <CalendarIcon className="w-6 h-6" />,
  },
];
