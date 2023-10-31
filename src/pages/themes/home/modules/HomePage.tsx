import React, { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useToggle } from "react-use";
import CollectionSection from "../components/CollectionSection";
import CustomerSay from "../components/CustomerSay";
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
          link: "",
          image: "",
        },
        {
          sub_title: "",
          title: "",
          link: "",
          image: "",
        },
        {
          sub_title: "",
          title: " adipiscing sodales",
          link: "",
          image: "",
        },
        {
          image: "",
        },
      ],
      products: [
        {
          sub_title: "WOODEN ACCESSORIES",
          title: "FEATURED PRODUCTS",
          desc: "Visit our shop to see amazing creations from our designers.        ",
          categories: [
            {
              name: "best sellers",
              data: [],
            },
            {
              name: "sales",
              data: [],
            },
            {
              name: "new arrival",
              data: [],
            },
          ],
        },
      ],
    },
  });
  return (
    <FormProvider {...methods}>
      <ThemeContext.Provider value={{ openEdit, setOpenEditor }}>
        <div className="flex bg-white flex-col gap-y-12">
          <HeroBanner />
          <ProductSection />
          <CollectionSection />
          <ServiceSection />
          <NewsSection />
          <CustomerSay />
        </div>
      </ThemeContext.Provider>
    </FormProvider>
  );
}

export default HomePage;
