import React from "react";

function About() {
  return (
    <div className=" flex flex-col py-5">
      <div className="flex flex-col gap-2 py-5 border-b px-9">
        <h2 className="yekanX-bold">شماره تماس</h2>
        <a href={`tel:023-3224-5007`}>
          <p className="text-sm font-light text-black/50">023-3224-5007</p>
        </a>
      </div>
      <div className="flex flex-col gap-2 py-5 border-b px-9">
        <h2 className="yekanX-bold">ساعت کار مجموعه</h2>
        <p className="text-sm font-light text-black/50">17:00 - الی - 00:30</p>
      </div>
      <div className="flex flex-col gap-3 py-5 border-b px-9">
        <h2 className="yekanX-bold">آدرس</h2>
        <p className="text-sm font-light text-black/50">
          شاهرود, خیابان 22 بهمن, جنب اداره دخانیات, روبروی خیابان ابن یمین, فست
          فود گارمون
        </p>
        <img src="/Screenshot 2026-05-14 161507.png" alt="" />{" "}
      </div>
    </div>
  );
}

export default About;
