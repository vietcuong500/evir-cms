import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function ProductSection() {
  return (
    <div className="container mx-auto">
      <div>
        <p className="text-sm text-center font-medium text-green-600">
          WOODEN ACCESSORIES
        </p>
        <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
          FEATURED PRODUCTS
        </p>
        <p className="text-sm text-neutral-800 text-center font-light">
          Visit our shop to see amazing creations from our designers.
        </p>

        <ul className="flex items-center justify-center mt-4 gap-x-6">
          <li className="flex flex-col group">
            <a
              href="/best-sellers"
              className="text-neutral-600 uppercase font-medium group-hove:text-neutral-900"
            >
              best sellers
            </a>
            <span className="inline-block h-[1px] transition-all duration-200 w-0 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex flex-col group">
            <a
              href="/best-sellers"
              className="text-neutral-600 uppercase font-medium group-hove:text-neutral-900"
            >
              featured
            </a>
            <span className="inline-block h-[1px] transition-all duration-200 w-0 group-hover:w-full bg-green-600"></span>
          </li>
          <li className="flex flex-col group">
            <a
              href="/best-sellers"
              className="text-neutral-600 uppercase font-medium group-hove:text-neutral-900"
            >
              sales
            </a>
            <span className="inline-block h-[1px] transition-all duration-200 w-0 group-hover:w-full bg-green-600"></span>
          </li>
        </ul>
      </div>
      <div className="mt-6 overflow-hidden">
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </div>
  );
}

export default ProductSection;