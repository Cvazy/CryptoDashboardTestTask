import {
  BotItem,
  getBotColors,
  IBot,
  useFetchAllBotsQuery,
} from "entities/Bot";
import { useAppSelector } from "app/providers";
import { ButtonEnum } from "features/TimeRange";
import { MegaBotDecor, useLocalStorageQuery } from "shared";

export const BotsList = () => {
  const { data } = useLocalStorageQuery<IBot[]>(
    "botListApiData",
    useFetchAllBotsQuery,
  );

  const activeTimeRange = useAppSelector((state) => state.timeRange.range);

  const activeBot = useAppSelector((state) => state.activeBot.activeIndex);

  return (
    <div className={"px-4 relative w-full"}>
      {data?.findIndex((bot) => bot.name === "yellow_bot") && <MegaBotDecor />}

      <div
        className={
          "grid grid-cols-3 gap-0.5 w-full sm:grid-cols-4 md:grid-cols-6"
        }
      >
        {data?.map((bot, index) => (
          <BotItem
            key={bot.name}
            isActive={activeBot === index}
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
