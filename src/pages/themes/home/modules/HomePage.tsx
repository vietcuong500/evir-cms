import { Button } from "antd";
import { useCreatePage } from "hooks/themes";
import React, { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useToggle } from "react-use";
import CollectionSection from "../components/CollectionSection";
import CustomerSay from "../components/CustomerSay";
import FooterHome from "../components/FooterHome";
import HeroBanner from "../components/HeroBanner";
import NewsSection from "../components/NewsSection";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";

const ThemeContext = createContext({} as any);

export const useThemes = () => useContext(ThemeContext);

function HomePage() {
  const [openEdit, setOpenEditor] = useToggle(false);
  const methods = useForm({
    defaultValues: {
      hero: [
        {
          sub_title: "porta consectetur imperdiet",
          title: "porta consectetur imperdiet frigilla",
          link: "/",
          image: "",
        },
        {
          sub_title: "",
          title: "",
          link: "/",
          image: "",
        },
        {
          sub_title: "",
          title: " adipiscing sodales",
          link: "/",
          image: "",
        },
        {
          image: "",
        },
      ],
      service: {
        sub_title: "WOODEN ACCESSORIES",
        title: "HAND MADE SERVICE",
        desc: " Visit our shop to see amazing creations from our designers.",
        items: [
          {
            icon: "",
            title: "Ullamcorper",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
            action: "read more",
          },
          {
            icon: "",
            title: "Ullamcorper",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
            action: "read more",
          },
          {
            icon: "",
            title: "Ullamcorper",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
            action: "read more",
          },
          {
            icon: "",
            title: "Ullamcorper",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
            action: "read more",
          },
        ],
      },
      customer_say: {
        sub_title: "WOODEN ACCESSORIES",
        title: "WHAT THEY SAY ABOUT US",
        desc: `Faucibus nisi class consectetur habitant aenean id accumsan
        scelerisque libero nam sodales consequat nulla parturient hac a a
        nam condimentum. Accumsan a nunc lectus condimentum nasdiam.`,
        name: "Walter Leone",
        avatar: "",
        status: "Happy Customer",
        images: [
          {
            link: "",
          },
          {
            link: "",
          },
          {
            link: "",
          },
          {
            link: "",
          },
          {
            link: "",
          },
          {
            link: "",
          },
        ],
        social: {
          name: "INSTAGRAM",
          account: "@NAME_ACCOUNT",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
      },

      footer: {
        desc: "Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.",
        address: "451 Wall Street, UK, London",
        phone: "Phone: (065) 123 531",
        fax: "Fax: (087) 342 543",
        col1: {
          title: "OUR STORES",
          menu: [
            {
              title: "new york",
              link: "/",
            },
            {
              title: "london",
              link: "/",
            },
            {
              title: "cockfosters",
              link: "/",
            },
            {
              title: "chicago",
              link: "/",
            },
          ],
        },
        col2: {
          title: "USEFULL LInks",
          menu: [
            {
              title: "new york",
              link: "/",
            },
            {
              title: "london",
              link: "/",
            },
            {
              title: "cockfosters",
              link: "/",
            },
            {
              title: "chicago",
              link: "/",
            },
          ],
        },
        col3: {
          title: "MENU",
          menu: [
            {
              title: "new york",
              link: "/",
            },
            {
              title: "london",
              link: "/",
            },
            {
              title: "cockfosters",
              link: "/",
            },
            {
              title: "chicago",
              link: "/",
            },
          ],
        },
      },
    },
  });

  const { mutateAsync } = useCreatePage();
  return (
    <FormProvider {...methods}>
      <ThemeContext.Provider value={{ openEdit, setOpenEditor }}>
        <div className="flex bg-white flex-col gap-y-12">
          <HeroBanner />
          {/* <ProductSection />
          <CollectionSection /> */}
          <ServiceSection />
          {/* <NewsSection /> */}
          <CustomerSay />
          <FooterHome />
        </div>
      </ThemeContext.Provider>
      <Button
        type="primary"
        className="mt-8"
        onClick={methods.handleSubmit(async (data) => {
          //
          const res = await mutateAsync(data);
        })}
      >
        hoàn thành
      </Button>
    </FormProvider>
  );
}

export default HomePage;
