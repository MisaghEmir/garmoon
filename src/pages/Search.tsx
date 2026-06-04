import React from "react";
import { Pizza } from "../config/types";
import Prodact from "../components/Prodact";

function Search({ search }: { search: Pizza[] }) {
  return (
    <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
      {search.length === 0 ? (
        <h1 className="px-9 text-xl">
          غذایی یافت نشد
        </h1>
      ) : (
        search.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
