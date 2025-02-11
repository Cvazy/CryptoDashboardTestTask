import MenuIcon from "shared/assets/images/icons/menu.svg";
import RefreshIcon from "shared/assets/images/icons/refresh.svg";
import styles from "./Header.module.css";
import React, { useState } from "react";
import { RouteConfig } from "shared/config";

export const Header = () => {
  const pathname = window.location.pathname;
  const [isRotate, setIsRotate] = useState<boolean>(false);

  const pathData = Object.values(RouteConfig).find(
    ({ path }) => path?.toLowerCase() === pathname.toLowerCase(),
  );

  const title = pathData?.title || "Not Found";

  return (
    <header className={"w-full"}>
      <div className={`${styles.Header} px-5 py-8 w-full`}>
        <div
          className={"flex items-center justify-between relative z-50 w-full"}
        >
          <button type={"button"} className={"border-0 p-0 w-5 h-5"}>
            <img
              src={MenuIcon}
              alt={"Menu Icon"}
              className={"w-full h-full"}
              loading={"lazy"}
            />
          </button>

          <h1 className={"text-center text-2xl text-[#4d6077] font-bold"}>
            {title}
          </h1>

          <button
            type={"button"}
            onClick={() => setIsRotate(!isRotate)}
            className={"border-0 p-0 w-5 h-5"}
          >
            <img
              src={RefreshIcon}
              alt={"Refresh Icon"}
              className={`!duration-700 ${isRotate ? "rotate-[360deg]" : ""} w-full h-full`}
              loading={"lazy"}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
