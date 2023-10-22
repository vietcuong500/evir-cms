import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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
import AuthProvider from "auth/AuthProvider";
import Authentication from "auth/Authentication";
import LoginLayout from "pages/login/LoginLayout";
import { AddPost, ListingPost } from "pages/blog";
import { ListingCategory } from "pages/category";
import UpdatePost from "pages/blog/UpdatePost";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route Component={AuthProvider}>
      <Route path="/login" Component={LoginLayout} />
      <Route Component={Authentication}>
        <Route path="/" Component={Root}>
          <Route path="products">
            <Route path="" Component={ListingProduct} />
            <Route path="add" Component={AddProduct} />
          </Route>
          <Route path="collections">
            <Route path="" Component={ListingCollection} />
            <Route path="add" Component={AddCollection} />
          </Route>
          <Route path="orders">
            <Route path="" Component={ListingOrder} />
            <Route path="add" Component={AddOrder} />
          </Route>
          <Route path="customers">
            <Route path="" Component={ListingCustomer} />
            <Route path="add" Component={AddCustomer} />
            <Route path="detail" Component={DetailCustomer} />
          </Route>
          <Route path="discounts">
            <Route path="" Component={ListingDiscount} />
            <Route path="add" Component={DiscountMaster} />
          </Route>
          <Route path="inventory">
            <Route path="" Component={ListingInventory} />
          </Route>
          <Route path="posts">
            <Route path="" Component={ListingPost} />
            <Route path="add" Component={AddPost} />
            <Route path=":id" Component={UpdatePost} />
          </Route>
          <Route path="category">
            <Route path="" Component={ListingCategory} />
            <Route path="add" Component={AddPost} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);
