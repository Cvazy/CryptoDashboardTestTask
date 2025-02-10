import { RouteProps } from "react-router-dom";
import {
  BotMarketPage,
  CoinPricesPage,
  MainPage,
  MegaBotPage,
  NotFoundPage,
  ProfilePage,
} from "pages";

export enum AppRoutes {
  MAIN = "main",
  MARKET = "market",
  COIN_PRICES = "prices",
  MEGA_BOT = "mega-bot",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.MARKET]: "/market",
  [AppRoutes.COIN_PRICES]: "/prices",
  [AppRoutes.MEGA_BOT]: "/mega-bot",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.MARKET]: {
    path: RoutePaths.market,
    element: <BotMarketPage />,
  },

  [AppRoutes.COIN_PRICES]: {
    path: RoutePaths.prices,
    element: <CoinPricesPage />,
  },

  [AppRoutes.MEGA_BOT]: {
    path: RoutePaths["mega-bot"],
    element: <MegaBotPage />,
  },

  [AppRoutes.PROFILE]: {
    path: RoutePaths.profile,
    element: <ProfilePage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
