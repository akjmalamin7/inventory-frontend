import { CustomerIcon } from "@/assets/icons/customer";
import React from "react";

interface SidebarMenuItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

export const SIDEBAR_MENU_DATA: SidebarMenuItem[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <CustomerIcon />,
    path: "/",
  },
  {
    id: 2,
    title: "Supplier",
    icon: <CustomerIcon />,
    path: "/supplier",
  },
  {
    id: 3,
    title: "Expense",
    icon: <CustomerIcon />,
    path: "/expense",
  },
  {
    id: 4,
    title: "Products",
    icon: <CustomerIcon />,
    path: "/products",
  },
  {
    id: 5,
    title: "Purchase",
    icon: <CustomerIcon />,
    path: "/purchase",
  },
  {
    id: 6,
    title: "Sales",
    icon: <CustomerIcon />,
    path: "/sales",
  },
  {
    id: 7,
    title: "Return",
    icon: <CustomerIcon />,
    path: "/return",
  },
  {
    id: 8,
    title: "Report",
    icon: <CustomerIcon />,
    path: "/report",
  },
];
