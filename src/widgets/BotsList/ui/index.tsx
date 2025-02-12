import { BotItem, getBotColors, useFetchAllBotsQuery } from "entities/Bot";
import { useState } from "react";

export const BotsList = () => {
  const { data } = useFetchAllBotsQuery();

  const [isActiveBot, setIsActiveBot] = useState(0);

  return (
    <div className={"px-5 w-full"}>
      <div className={"grid grid-cols-3 gap-0.5 w-full"}>
        {data?.map(({ name, title, all_time }, index) => (
          <BotItem
            key={name}
            isActive={isActiveBot === index}
            setIsActiveBot={setIsActiveBot}
            title={title}
            fill={getBotColors(name) || ""}
            index={index}
            name={name}
            value={all_time}
          />
        ))}
      </div>
    </div>
  );
};
