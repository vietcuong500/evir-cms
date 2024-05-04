import React from "react";
import {
  RiShoppingCartLine,
  RiHeart3Line,
  RiSearch2Line,
  RiShareLine,
} from "react-icons/ri";

function ProductCard() {
  return (
    <div className="w-full">
      <div className="w-full overflow-hidden group h-56 bg-neutral-100 relative cursor-pointer">
        <div></div>
        <div className="absolute bg-green-700 w-16 text-center px-2 top-4">
          <span className="uppercase text-xs font-light text-white">new</span>
        </div>
        <div className="absolute -bottom-10 group-hover:bottom-3 transition-all duration-300 left-[50%] -translate-x-[50%]">
          <ul className="flex gap-6 bg-white w-fit px-4 py-2 rounded shadow">
            <li>
              <RiShoppingCartLine className="w-6 h-6 hover:text-green-700" />
            </li>
            <li>
              <RiHeart3Line className="w-6 h-6 hover:text-green-700" />
            </li>
            <li>
              <RiSearch2Line className="w-6 h-6 hover:text-green-700" />
            </li>
            <li>
              <RiShareLine className="w-6 h-6 hover:text-green-700" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">jhjka ashda sdkjashd</p>
        <p className="text-xs mt-2 mb-1 text-neutral-500">Accessories</p>
        <p className="text-sm font-medium text-green-600">
          <span className="line-through text-neutral-500 text-xs mr-2">
            500.00 USD
          </span>
          400.00 USD
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
