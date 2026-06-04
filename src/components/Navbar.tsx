import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({searchHandle}:{searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  const [search, setSearch] = useState(false);
  return (
    <div className=" w-full overflow-x-auto whitespace-nowrap bg-white notscroll">
      <ul className=" inline-flex items-center font-medium md:w-full yekanX-medium gap-10 px-9 py-2 border-b pb-0">
        <li
          className={`py-2 px-2 h-7 ${search ? "w-60" : "w-7"} flex items-center gap-4`}
        >
          <img
            className={`h-full cursor-pointer ${search ? "hidden" : "block"}`}
            src={
              search ? "/icons8_close_500px.png" : "/icons8_search_512px.png"
            }
            alt=""
            onClick={() => setSearch(true)}
          />
          <img
            className={`h-full cursor-pointer ${search ? "block" : "hidden"}`}
            src={"/icons8_close_500px.png"}
            alt=""
            onClick={() => setSearch(false)}
          />
          <input
            type="text"
            placeholder="نام غذا را جستجو کنید"
            onChange={(e) =>  searchHandle(e)}
            className={`bg-stone-700 py-1 text-white outline-none pr-3 rounded-lg ${search ? "block" : "hidden"}`}
          />
        </li>

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
           onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className={"py-2 pb-3 px-2"}>همه غذاها</li>
        </NavLink>
        <NavLink
          to={"/pizza"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
           onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className="py-2 pb-3  px-2">پیتزا</li>
        </NavLink>
        <NavLink
          to={"/berger"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
           onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className="py-2 pb-3 border-black px-2">برگر</li>
        </NavLink>
        <NavLink
          to={"/sandvich"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
           onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className="py-2 pb-3 border-black px-2">ساندویچ</li>
        </NavLink>
        <NavLink
          to={"/sib"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
           onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className="py-2 pb-3 border-black px-2">سیب زمینی</li>
        </NavLink>
        <NavLink
          to={"/pasta"}
          className={({ isActive }) =>
            `border-black ${isActive && "border-b-2"}`
          }
          onClick={() => window.scrollTo({ top: 140, behavior: "smooth" })}
        >
          <li className="py-2 pb-3 border-black px-2">پاستا و سالاد</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
