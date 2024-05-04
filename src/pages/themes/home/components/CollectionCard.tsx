import React from "react";

function CollectionCard(props: any) {
  const { image, count, title } = props;
  return (
    <div className="w-full h-56 bg-neutral-100 relative justify-center cursor-pointer group hover:bg-neutral-400 transition-all duration-100">
      <div className="relative">
        <p className="transition-all duration-300 uppercase position-center scale-100 group-hover:scale-0 rounded shadow text-white bg-green-600 px-4 py-3">
          {title}
        </p>
        <p className="position-center uppercase text-sm transition-all duration-300 scale-0 group-hover:scale-100 text-white">
          {count} sản phẩm
        </p>
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default CollectionCard;
