import React from "react";
import Prodact from "../components/Prodact";
import { berger, pasta, pizza, sandvich, sib } from "../config/data";

function Home() {
  return (
    <div>
      <h1 className="px-9 text-xl border-b yekanX-bold pt-7 pb-2">
        پیتزا
      </h1>
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
        {pizza.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))}
      </div>
      <h1 className="px-9 text-xl border-b yekanX-bold pt-7 pb-2">
        برگر
      </h1>
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
        {berger.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))}
      </div>
      <h1 className="px-9 text-xl border-b yekanX-bold pt-7 pb-2">
        ساندویچ
      </h1>
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
        {sandvich.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))}
      </div>
      <h1 className="px-9 text-xl border-b yekanX-bold pt-7 pb-2">
        سیب زمینی سرخ شده
      </h1>
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
        {sib.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))}
      </div>
      <h1 className="px-9 text-xl border-b yekanX-bold pt-7 pb-2">
        پاستا و سالاد
      </h1>
      <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
        {pasta.map((item, index) => (
          <div key={index}>
            <Prodact item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
