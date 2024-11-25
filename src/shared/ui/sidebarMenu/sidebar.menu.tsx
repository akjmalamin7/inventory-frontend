import { CustomerIcon } from "@/assets/icons/customer";
import React from "react";

export interface SidebarMenuProps {
  _id: number;
  title?: string;
  icon?: React.ReactNode;
  isParent?: boolean;
  children?: SidebarMenuProps[];
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: 1,
    title: "Dashboard",
    icon: <CustomerIcon />,
    isParent: false,
    path: "/",
  },
  {
    _id: 2,
    title: "Supplier",
    icon: <CustomerIcon />,
    path: "/supplier",
    isParent: false,
    children: [
      {
        _id: 1,
        title: "Create Supplier",
        path: "/supplier/create",
        icon: <CustomerIcon />,
        isParent: false,
      },
    ],
  },
  {
    _id: 3,
    title: "Expense",
    icon: <CustomerIcon />,
    path: "/expense",
    isParent: false,
    children: [
      {
        _id: 1,
        title: "Create Expense",
        path: "/expense/create",
        icon: <CustomerIcon />,
        isParent: false,
      },
    ],
  },
  {
    _id: 4,
    title: "Products",
    icon: <CustomerIcon />,
    path: "/products",
    isParent: false,
  },
  {
    _id: 5,
    title: "Purchase",
    icon: <CustomerIcon />,
    path: "/purchase",
    isParent: false,
  },
  {
    _id: 6,
    title: "Sales",
    icon: <CustomerIcon />,
    path: "/sales",
    isParent: false,
  },
  {
    _id: 7,
    title: "Return",
    icon: <CustomerIcon />,
    path: "/return",
    isParent: false,
  },
  {
    _id: 8,
    title: "Report",
    icon: <CustomerIcon />,
    path: "/report",
    isParent: false,
  },
];
