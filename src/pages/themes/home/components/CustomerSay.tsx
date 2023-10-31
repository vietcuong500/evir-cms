import React from "react";

function CustomerSay() {
  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 my-8">
      <div className="mx-auto text-center">
        <p className="text-sm text-center font-medium text-green-600">
          WOODEN ACCESSORIES
        </p>
        <p className="text-xl relative uppercase text-neutral-800 font-medium text-center mb-8 mt-4">
          WHAT THEY SAY ABOUT US
          <span className="absolute block w-14 h-1 bg-green-700 left-[50%] -translate-x-[50%] mt-2"></span>
        </p>
        <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden bg-neutral-200 mb-3"></div>
        <p className="text-sm text-neutral-900">
          Faucibus nisi class consectetur habitant aenean id accumsan
          scelerisque&nbsp;libero nam sodales consequat nulla parturient hac a a
          nam condimentum. Accumsan a nunc lectus condimentum nasdiam.
        </p>
        <p className="text-sm mt-4">
          <span className="font-semibold">Walter Leone</span>
          <span className="text-neutral-700"> - Happy Customer</span>
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 relative">
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="bg-neutral-100"></div>
        <div className="absolute w-[300px] text-center h-[220px] bg-white shadow left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-5 flex flex-col items-center justify-center">
          <p className="uppercase">INSTAGRAM</p>
          <p className="text-sm text-neutral-500 mt-1">@NAME_ACCOUNT</p>
          <p className="text-sm text-neutral-900 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerSay;
