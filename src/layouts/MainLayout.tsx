import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import {
  MdHome,
  MdSell,
  MdInbox,
  MdAccountCircle,
  MdFolderSpecial,
  MdOutlineSettings,
  MdAnalytics,
} from "react-icons/md";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const nav: MenuProps["items"] = [
  {
    key: "home",
    icon: <MdHome />,
    label: "Trang chủ",
  },
  {
    key: "analytics",
    label: "Báo cáo",
    icon: <MdAnalytics />,
  },
  {
    key: "orders",
    label: <Link to="orders">Đơn hàng</Link>,
    icon: <MdInbox />,
  },

  {
    key: "module",
    label: "Sản phẩm",
    icon: <MdSell />,
    children: [
      {
        key: "products",
        label: <Link to="products">Sản phẩm</Link>,
      },
      {
        key: "collections",
        label: <Link to="collections">Danh mục</Link>,
      },
      {
        key: "inventory",
        label: <Link to="inventory">Hàng tồn kho</Link>,
      },
    ],
  },
  {
    key: "customers",
    label: <Link to="customers">Khách hàng</Link>,
    icon: <MdAccountCircle />,
  },

  {
    key: "discounts",
    label: <Link to="discounts">Khuyến mãi</Link>,
    icon: <MdOutlineSettings />,
  },
  {
    key: "news",
    // label: <Link to="posts">Bài viết</Link>,
    label: "Bài viết",
    icon: <MdFolderSpecial />,
    children: [
      {
        key: "category",
        label: <Link to="category">Danh mục</Link>,
      },
      {
        key: "posts",
        label: <Link to="posts">Bài viết</Link>,
      },
    ],
  },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="h-16 bg-white shadow-2xl flex justify-between">
        <div className="tracking-wider w-[200px] capitalize text-xl text-stone-800 font-semibold h-16 flex items-center justify-center ">
          <div className="cursor-pointer w-9 h-9 rounded-full border-2 border-solid border-blue-600 flex items-center justify-center uppercase font-bold text-blue-600 text-xl ">
            N
          </div>
          <p className="text-blue-600 ml-2">Infit</p>
        </div>
        <div></div>
      </div>
      <Layout
        style={{
          height: "100%",
        }}
      >
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={nav}
            className="sidebar-menu"
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          <Content
            style={{
              margin: 0,
              minHeight: 280,
              marginTop: 16,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
