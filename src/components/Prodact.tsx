import React from "react";
import { Pizza } from "../config/types";

function Prodact({ item }: { item: Pizza }) {
  return (
    <div className="px-9 border-b">
      <div className="grid grid-cols-2 justify-between items-center">
        <div className="">
          <h1>{item.name}</h1>
          <p className="text-sm text-black/50 pl-3 md:pl-14">{item.des}</p>
        </div>
        <div
          className={`rounded-lg ${
            item.category === "sandvich"
              ? "bg-orange-400"
              : item.category === "sib"
                ? "bg-[#ab6f73]"
                : item.category === "pasta" && "bg-rose-300"
          }`}
        >
          <img
            src={item.image}
            className="w-full h-28 md:h-44 object-cover rounded-lg aspect-4/4"
            alt=""
          />
        </div>
      </div>
      <div className="flex py-3 flex-col  justify-between items-center text-sm">
        <button className={`flex-1 ${item.price_2 != null && ""} p-3`}>
          {item.price_2 != null
            ? item.price === "-"
              ? ""
              : "یک نفره (23 سانتی متری) "
            : ""}
          {item.price === "-" ? "" : item.price}
        </button>
        {item.price_2 != null ? (
          <button className="flex-1 p-3">
            دو نفره (30 سانتی متری) {item.price_2}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Prodact;
