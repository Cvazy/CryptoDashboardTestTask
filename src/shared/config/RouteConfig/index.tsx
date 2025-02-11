import { RouteProps } from "react-router-dom";
import {
  BotMarketPage,
  CoinPricesPage,
  MainPage,
  MegaBotPage,
  NotFoundPage,
  ProfilePage,
} from "pages";

type AppRouteProps = RouteProps & { title: string };

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

export const RouteTitles: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "Dashboard",
  [AppRoutes.MARKET]: "Bot Market",
  [AppRoutes.COIN_PRICES]: "Coin Prices",
  [AppRoutes.MEGA_BOT]: "Mega Bot",
  [AppRoutes.PROFILE]: "Profile",
  [AppRoutes.NOT_FOUND]: "Not Found",
};

export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths[AppRoutes.MAIN],
    title: RouteTitles[AppRoutes.MAIN],
    element: <MainPage />,
  },

  [AppRoutes.MARKET]: {
    path: RoutePaths[AppRoutes.MARKET],
    title: RouteTitles[AppRoutes.MARKET],
    element: <BotMarketPage />,
  },

  [AppRoutes.COIN_PRICES]: {
    path: RoutePaths[AppRoutes.COIN_PRICES],
    title: RouteTitles[AppRoutes.COIN_PRICES],
    element: <CoinPricesPage />,
  },

  [AppRoutes.MEGA_BOT]: {
    path: RoutePaths[AppRoutes.MEGA_BOT],
    title: RouteTitles[AppRoutes.MEGA_BOT],
    element: <MegaBotPage />,
  },

  [AppRoutes.PROFILE]: {
    path: RoutePaths[AppRoutes.PROFILE],
    title: RouteTitles[AppRoutes.PROFILE],
    element: <ProfilePage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths[AppRoutes.NOT_FOUND],
    title: RouteTitles[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
