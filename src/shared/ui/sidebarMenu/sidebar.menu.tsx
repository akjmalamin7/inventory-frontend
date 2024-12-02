import CartIcon from "@/assets/icons/cartIcon";
import { CustomerIcon } from "@/assets/icons/customer";
import ExpenseIcon from "@/assets/icons/expenseIcon";
import HomeIcon from "@/assets/icons/homeIcon";
import ProductsIcon from "@/assets/icons/productsIcon";
import ReportIcon from "@/assets/icons/reportIcon";
import SalesIcon from "@/assets/icons/salesIcon";
import React from "react";

export interface SidebarMenuProps {
  _id: string;
  title?: string;
  icon?: React.ReactNode;
  isParent?: boolean;
  path:string;
  children?: SidebarMenuProps[];
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <HomeIcon />,
    isParent: false,
    path: "/",
  },
  {
    _id:" 2",
    title: "Customer",
    icon: <CustomerIcon />,
    path: "/customer",
    isParent: true,
    children: [
      {
        _id: "1",
        title: "New customer",
        path: "/customer/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Customer List",
        path: "/customer/list",
        icon: "",
        isParent: false,
      },
    ],
  },
  {
    _id: "3",
    title: "Supplier",
    icon: <CartIcon />,
    path: "/supplier",
    isParent: true,
    children: [
      {
        _id: "1",
        title: "New Supplier",
        path: "/supplier/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Supplier List",
        path: "/supplier/list",
        icon: "",
        isParent: false,
      },
    ],
  },
  {
    _id: "4",
    title: "Expense",
    icon: <ExpenseIcon />,
    path: "/expense",
    isParent: true,
    children: [
      {
        _id: "1",
        title: "New Expense Type",
        path: "/expense/type/new",
        icon: "",
        isParent: false,
      },
      {
        _id:"2",
        title: "Expense Type List",
        path: "/expense/type/list",
        icon: "",
        isParent: false,
      },
      {
        _id: "3",
        title: "New Expense",
        path: "/expense",
        icon: "",
        isParent: false,
      },
      {
        _id: "4",
        title: "Expense List",
        path: "/expense/list",
        icon: "",
        isParent: false,
      },
    ],
  },
  {
    _id: "5",
    title: "Products",
    icon: <ProductsIcon />,
    path: "/products",
    isParent: true,
    children:[
      {
        _id: "1",
        title: "New Brand",
        path: "/brand/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Brand List",
        path: "/brand/list",
        icon: "",
        isParent: false,
      },
      {
        _id: "3",
        title: "New Category",
        path: "/category",
        icon: "",
        isParent: false,
      },
      {
        _id: "4",
        title: "Category List",
        path: "/category/list",
        icon: "",
        isParent: false,
      },
      {
        _id: "5",
        title: "New Product",
        path: "/product/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "6",
        title: "Product List",
        path: "/product/list",
        icon: "",
        isParent: false,
      },
    ]
  },
  {
    _id: "6",
    title: "Purchase",
    icon: <CartIcon />,
    path: "/purchase",
    isParent: true,
    children:[
      {
        _id: "1",
        title: "New Purchase",
        path: "/purchase/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Purchase List",
        path: "/purchase/list",
        icon: "",
        isParent: false,
      },
    ]
  },

  {
    _id: "7",
    title: "Sales",
    icon: <SalesIcon />,
    path: "/sales",
    isParent: true,
    children:[
      {
        _id: "1",
        title: "New Sale",
        path: "/sales/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Sale List",
        path: "/sales/list",
        icon: "",
        isParent: false,
      },
    ]
  },
  {
    _id: "8",
    title: "Return",
    icon: <ProductsIcon />,
    path: "/return",
    isParent: true,
    children:[
      {
        _id: "1",
        title: "New Return",
        path: "/return/new",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Return List",
        path: "/return/list",
        icon: "",
        isParent: false,
      },
    ]
  },
  {
    _id: "9",
    title: "Report",
    icon: <ReportIcon />,
    path: "/report",
    isParent: true,
    children:[
      {
        _id: "1",
        title: "Sales Report",
        path: "/report/sales",
        icon: "",
        isParent: false,
      },
      {
        _id: "2",
        title: "Return Report",
        path: "/report/return",
        icon: "",
        isParent: false,
      },
      {
        _id: "3",
        title: "Purchase Report",
        path: "/report/purchase",
        icon: "",
        isParent: false,
      }
    ]
  },
];
