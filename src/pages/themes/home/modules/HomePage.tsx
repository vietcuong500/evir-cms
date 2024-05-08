import { Button, Select, Spin } from "antd";
import { useListingCollection } from "hooks/collection";
import { enqueueSnackbar } from "notistack";
import React, { createContext, useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useToggle } from "react-use";
import { useGetHomeConfig, useUpdateHomeConfig } from "../api";
import CollectionSection from "../components/CollectionSection";
import CustomerSay from "../components/CustomerSay";
import FooterHome from "../components/FooterHome";
import HeaderHome from "../components/HeaderHome";
import HeroBanner from "../components/HeroBanner";
import ProductSection from "../components/ProductSection";
import ServiceSection from "../components/ServiceSection";
import TopHead from "../components/TopHead";

const ThemeContext = createContext({} as any);

export const useThemes = () => useContext(ThemeContext);

function HomePage() {
  const [openEdit, setOpenEditor] = useToggle(false);
  const [lang, setlang] = useState("vi");
  const methods = useForm({
    defaultValues: {
      vi: {
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
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
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
        header: {
          title1: "Liên hệ",
          desc1: "(+84) 099 213 826",
          title2: "Hỏi đáp",
          desc2: "hand@made.com",
        },
        collection: {
          sub_title: "WOODEN ACCESSORIES",
          title: "FEATURED Categories",
          desc: "Visit our shop to see amazing creations from our designers.",
          items: [
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
          ],
        },
        top: {
          shipping: "Kiến tạo phong cách sống",
          fb_link: "#",
          tw_link: "#",
          ins_link: "#",
          yt_link: "#",
          newsletter_link: "#",
          contact_link: "#",
          faqs: "#",
        },
        products: {
          sub_title: "   WOODEN ACCESSORIES",
          title: "FEATURED PRODUCTS",
          desc: "Visit our shop to see amazing creations from our designers."
        }
      },
      en: {
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
        top: {
          shipping: "Kiến tạo phong cách sống",
          fb_link: "#",
          tw_link: "#",
          ins_link: "#",
          yt_link: "#",
          newsletter_link: "#",
          contact_link: "#",
          faqs: "#",
        },
        service: {
          sub_title: "WOODEN ACCESSORIES",
          title: "HAND MADE SERVICE",
          desc: " Visit our shop to see amazing creations from our designers.",
          items: [
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
            },
            {
              icon: "",
              title: "Ullamcorper",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
              action: "/",
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
        header: {
          title1: "Liên hệ",
          desc1: "(+84) 099 213 826",
          title2: "Hỏi đáp",
          desc2: "hand@made.com",
        },
        collection: {
          sub_title: "WOODEN ACCESSORIES",
          title: "FEATURED Categories",
          desc: "Visit our shop to see amazing creations from our designers.",
          items: [
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
            {
              title: "",
              count: 3,
              id: 2,
              image: "",
            },
          ],
        },
        products: {
          sub_title: "   WOODEN ACCESSORIES",
          title: "FEATURED PRODUCTS",
          desc: "Visit our shop to see amazing creations from our designers."
        }
      },
    },
  });

  const { mutateAsync } = useUpdateHomeConfig();
  const { isLoading, data } = useGetHomeConfig();
  const {
    data: collections,
    isLoading: loadingCollection,
    isSuccess,
  } = useListingCollection({ page: 1, page_size: 100 });

  useEffect(() => {
    if (data) {
      const config = data.data.find((el: any) => el.key === "homepage");
      if (config) methods.reset(JSON.parse(config.value));
    }
  }, [data]);
  if (isLoading) return <Spin />;
  if (data)
    return (
      <FormProvider {...methods}>
        <div className="my-4 flex justify-end">
          <Select
            value={lang}
            onChange={(val) => setlang(val)}
            options={[
              { label: "VIETNAM", value: "vi" },
              { label: "ENGLISH", value: "en" },
            ]}
          />
        </div>
        <ThemeContext.Provider value={{ openEdit, setOpenEditor }}>
          <div className="flex bg-white flex-col gap-y-12">
            <TopHead lang={lang} />
            <HeaderHome lang={lang} />
            <HeroBanner lang={lang} />
            <ProductSection lang={lang} />
            <CollectionSection
              data={collections}
              isLoading={loadingCollection}
              lang={lang}
            />
            <ServiceSection lang={lang} />
            {/* <NewsSection /> */}
            <CustomerSay lang={lang} />
            <FooterHome lang={lang} />
          </div>
        </ThemeContext.Provider>
        <Button
          type="primary"
          className="mt-8"
          onClick={methods.handleSubmit(async (data) => {
            const res = await mutateAsync({
              configs: [
                {
                  key: "homepage",
                  value: JSON.stringify(data),
                },
              ],
            });
            if (res) {
              enqueueSnackbar({
                message: "Cập nhật trang chủ thành công",
                variant: "success",
              });
            } else {
              enqueueSnackbar({
                message: "Cập nhật trang chủ không thành công",
                variant: "error",
              });
            }
          })}
        >
          hoàn thành
        </Button>
      </FormProvider>
    );
  return null;
}

export default HomePage;
