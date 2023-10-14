import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ListingProduct from "../pages/products/ListingProduct";
import AddProduct from "../pages/products/AddProduct";
import ListingCollection from "pages/collections/ListingCollection";
import AddCollection from "pages/collections/AddCollection";
import ListingInventory from "pages/inventory/ListingInventory";
import ListingOrder from "pages/orders/ListingOrder";
import AddOrder from "pages/orders/AddOrder";
import { AddCustomer, DetailCustomer, ListingCustomer } from "pages/customers";
import { DiscountCode, DiscountMaster, ListingDiscount } from "pages/discounts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/products/*",
        children: [
          {
            index: true,
            Component: ListingProduct,
          },
          {
            path: "*",
            Component: ListingProduct,
          },

          {
            path: "add",
            Component: AddProduct,
          },
        ],
      },
      {
        path: "/collections/*",
        children: [
          {
            index: true,
            Component: ListingCollection,
          },
          {
            path: "*",
            Component: ListingCollection,
          },

          {
            path: "add",
            Component: AddCollection,
          },
        ],
      },
      {
        path: "/inventory/*",
        children: [
          {
            index: true,
            Component: ListingInventory,
          },
          {
            path: "*",
            Component: ListingInventory,
          },
        ],
      },
      {
        path: "/orders/*",
        children: [
          {
            index: true,
            Component: ListingOrder,
          },
          {
            path: "*",
            Component: ListingOrder,
          },

          {
            path: "add",
            Component: AddOrder,
          },
        ],
      },
      {
        path: "/customers/*",
        children: [
          {
            index: true,
            Component: ListingCustomer,
          },
          {
            path: "*",
            Component: ListingCustomer,
          },

          {
            path: "add",
            Component: AddCustomer,
          },
          {
            path: "detail",
            Component: DetailCustomer,
          },
        ],
      },
      {
        path: "/discounts/*",
        children: [
          {
            index: true,
            Component: ListingDiscount,
          },
          {
            path: "*",
            Component: ListingDiscount,
          },
          {
            path: "add",
            Component: DiscountMaster,
          },
          {
            path: "add?type=discount-code",
            Component: DiscountCode,
          },
        ],
      },
    ],
  },
]);
