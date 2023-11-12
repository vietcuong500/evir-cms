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
import { ListingDiscount } from "pages/discounts";
import AuthProvider from "auth/AuthProvider";
import Authentication from "auth/Authentication";
import LoginLayout from "pages/login/LoginLayout";
import { AddPost, ListingPost } from "pages/blog";
import { ListingCategory } from "pages/category";
import UpdatePost from "pages/blog/UpdatePost";
import UpdateProduct from "pages/products/modules/UpdateProduct";
import AddCategory from "pages/category/module/AddCategory";
import UpdateCategory from "pages/category/module/UpdateCategory";
import UpdateCollection from "pages/collections/modules/UpdateCollection";
import AddDiscountMaster from "pages/discounts/modules/AddDiscountMaster";
import UpdateDiscountMaster from "pages/discounts/modules/UpdateDiscountMaster";
import { AddComment, ListingComment, UpdateComment } from "pages/comment";
import { HomePage } from "pages/themes/home";
import OrderDetail from "pages/orders/modules/OrderDetail";
import ListingReview from "pages/reviews/modules/ListingReview";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/admin" Component={AuthProvider}>
      <Route path="login" Component={LoginLayout} />
      <Route Component={Authentication}>
        <Route path="" Component={Root}>
          <Route path="products">
            <Route path="" Component={ListingProduct} />
            <Route path="add" Component={AddProduct} />
            <Route path=":id" Component={UpdateProduct} />
          </Route>
          <Route path="review">
            <Route path="" Component={ListingReview} />
          </Route>
          <Route path="collections">
            <Route path="" Component={ListingCollection} />
            <Route path="add" Component={AddCollection} />
            <Route path=":id" Component={UpdateCollection} />
          </Route>
          <Route path="orders">
            <Route path="" Component={ListingOrder} />
            <Route path="add" Component={AddOrder} />
            <Route path=":id" Component={OrderDetail} />
          </Route>
          <Route path="customers">
            <Route path="" Component={ListingCustomer} />
            <Route path="add" Component={AddCustomer} />
            <Route path=":id" Component={DetailCustomer} />
          </Route>
          <Route path="discounts">
            <Route path="" Component={ListingDiscount} />
            <Route path="add" Component={AddDiscountMaster} />
            <Route path=":id" Component={UpdateDiscountMaster} />
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
            <Route path="add" Component={AddCategory} />
            <Route path=":id" Component={UpdateCategory} />
          </Route>
          <Route path="comment">
            <Route path="" Component={ListingComment} />
            <Route path="add" Component={AddComment} />
            <Route path=":id" Component={UpdateComment} />
          </Route>
          <Route path="themes">
            <Route path="home" Component={HomePage} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);
