import { ReactComponent as DashboardIcon } from "shared/assets/images/icons/dashboard.svg";
import { ReactComponent as MegaBotIcon } from "shared/assets/images/icons/statistic.svg";
import { ReactComponent as BotMarketIcon } from "shared/assets/images/icons/market.svg";
import { ReactComponent as CoinPricesIcon } from "shared/assets/images/icons/coin_prices.svg";
import { ReactComponent as ProfileIcon } from "shared/assets/images/icons/profile.svg";

import { NavItem } from "./components";

export const NavBar = () => {
  return (
    <div className={"bg-[#19273d] w-full"}>
      <div className={"px-4 py-2 w-full"}>
        <div
          className={"flex items-center gap-2 justify-between w-full h-full"}
        >
          <NavItem icon={<DashboardIcon />} label={"Dashboard"} link={"/"} />

          <NavItem
            icon={<MegaBotIcon />}
            label={"Megabot"}
            link={"/mega-bot"}
          />

          <NavItem
            icon={<BotMarketIcon />}
            label={"Bot market"}
            link={"/market"}
          />

          <NavItem
            icon={<CoinPricesIcon />}
            label={"Coin prices"}
            link={"/prices"}
          />

          <div className={"relative"}>
            <div
              className={
                "flex items-center justify-center rounded-full bg-[#fc9819] absolute top-[-11px] -right-1.5 w-5 h-5"
              }
            >
              <p
                className={
                  "text-center text-xs font-bold text-white !leading-none"
                }
              >
                3
              </p>
            </div>

            <NavItem
              icon={<ProfileIcon />}
              label={"Profile"}
              link={"/profile"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
