import {
  BotItem,
  getBotColors,
  IBot,
  useFetchAllBotsQuery,
} from "entities/Bot";
import { useState } from "react";
import { useAppSelector } from "app/providers";
import { ButtonEnum } from "features/TimeRange";
import { useLocalStorageQuery } from "shared";

export const BotsList = () => {
  const { data } = useLocalStorageQuery<IBot[]>(
    "botListApiData",
    useFetchAllBotsQuery,
  );

  const activeTimeRange = useAppSelector((state) => state.timeRange.range);

  const [isActiveBot, setIsActiveBot] = useState(0);

  return (
    <div className={"px-4 w-full"}>
      <div
        className={
          "grid grid-cols-3 gap-0.5 w-full sm:grid-cols-4 md:grid-cols-6"
        }
      >
        {data?.map((bot, index) => (
          <BotItem
            key={bot.name}
            isActive={isActiveBot === index}
            setIsActiveBot={setIsActiveBot}
            title={bot.title}
            fill={getBotColors(bot.name) || ""}
            index={index}
            name={bot.name}
            value={bot[activeTimeRange as keyof typeof ButtonEnum]}
          />
        ))}
      </div>
    </div>
  );
};
