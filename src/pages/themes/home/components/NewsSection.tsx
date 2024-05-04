import React from "react";
import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <div className="container mx-auto">
      <div>
        <p className="text-sm text-center font-medium text-green-600">
          WOODEN ACCESSORIES
        </p>
        <p className="text-xl uppercase text-neutral-800 font-medium text-center my-3">
          HAND MADE MAGAZINE
        </p>
        <p className="text-sm text-neutral-800 text-center font-light">
          Visit our shop to see amazing creations from our designers.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default NewsSection;
