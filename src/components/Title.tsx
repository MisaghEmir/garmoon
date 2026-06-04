import React from "react";
import { useLocation, NavLink } from "react-router-dom";

function Title() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="px-9 py-4 border-b-8">
      <div className=" flex justify-between items-center">
        <h2 className="text-xl font-bold yekanX-bold">فست فود گارمون</h2>
        <div className="flex flex-col items-center gap-1 mt-6">
          <p>شماره تماس</p>
          <a href={`tel:023-3224-5007`}>
            <small className="flex flex-row-reverse gap-2 items-center pl-3">023-3224-5007
              <img src="/icons8_whatsapp_480px_1.png" className="w-5" alt="" />
            </small>
          </a>
        </div>
      </div>
      <div className="mt-0">
        <p className="text-sm yekanX-bold text-black/50 ">
          هر سفارش یه ترکیب خاص
        </p>
      </div>
      <div className="flex w-full gap-0 mt-10">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `border text-center flex-1 w-full  rounded-s-lg  yekanX-regular p-2 
          ${location.pathname === "/" ? "border-blue-700" : location.pathname === "/pizza" ? "border-blue-700" : location.pathname === "/berger" ? "border-blue-700" : location.pathname === "/sandvich" ? "border-blue-700" : location.pathname === "/sib" ? "border-blue-700" : location.pathname === "/pasta" ? "border-blue-700" : "border-black/30 border-l-0"}`
          }
          end
        >
          منو رستوران
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `border text-center flex-1 w-full  rounded-e-lg  yekanX-regular p-2 ${isActive ? "border-blue-700" : "border-black/30 border-r-0"}`
          }
        >
          اطلاعات
        </NavLink>
      </div>
    </div>
  );
}

export default Title;
