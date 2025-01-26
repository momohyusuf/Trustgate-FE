import {
  House,
  Phone,
  PhoneCall,
  CreditCard,
  CloudUpload,
  MessageCircle,
  CircleHelp,
} from "lucide-react";
import React from "react";

interface IRoute {
  id: number;
  title: string;
  icon: React.ReactNode;
  to: string;
}

export const userRoutes: IRoute[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <House strokeWidth={2.5} />,
    to: "dashboard",
  },
  {
    id: 2,
    title: "Buy Virtual Numbers",
    icon: <Phone strokeWidth={2.5} />,
    to: "buy-virtual-numbers",
  },
  {
    id: 3,
    title: "Active Numbers",
    icon: <PhoneCall strokeWidth={2.5} />,
    to: "active-numbers",
  },
  {
    id: 4,
    title: "Wallet",
    icon: <CreditCard strokeWidth={2.5} />,
    to: "wallet",
  },
  {
    id: 5,
    title: "Transaction History",
    icon: <CloudUpload strokeWidth={2.5} />,
    to: "transaction-history",
  },
  {
    id: 6,
    title: "Notifications",
    icon: <MessageCircle strokeWidth={2.5} />,
    to: "notifications",
  },
  {
    id: 7,
    title: "Help & Tutorials",
    icon: <CircleHelp strokeWidth={2.5} />,
    to: "help-and-tutorials",
  },
];
