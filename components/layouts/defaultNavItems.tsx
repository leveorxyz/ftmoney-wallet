import {
  HomeIcon,
  PaperAirplaneIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Send",
    href: "/send",
    icon: <PaperAirplaneIcon className="w-6 h-6" />,
  },
  {
    label: "Buy",
    href: "/buy",
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
  },
];
