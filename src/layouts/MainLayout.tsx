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
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
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
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              margin: 0,
              minHeight: 280,
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
