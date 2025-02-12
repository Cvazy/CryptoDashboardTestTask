import { ReactComponent as BotImage } from "shared/assets/images/bots/bot.svg";
import { ReactComponent as MegaBotImage } from "shared/assets/images/bots/megaBot.svg";
import { cloneElement, Dispatch, SetStateAction } from "react";

interface IBotItemProps {
  index: number;
  isActive: boolean;
  setIsActiveBot: Dispatch<SetStateAction<number>>;
  fill: string;
  title: string;
  name: string;
  value: number;
}

export const BotItem = ({
  index,
  isActive,
  setIsActiveBot,
  fill,
  title,
  name,
  value,
}: IBotItemProps) => {
  return (
    <div
      onClick={() => setIsActiveBot(index)}
      className={`relative bg-[#1b283f] aspect-square rounded-md w-full overflow-hidden 
        ${isActive ? "before:content-[''] before:absolute before:inset-0 before:rounded-md before:shadow-[inset_0_0_40px_#21476f]" : ""}
      `}
    >
      <div className={"p-5 w-full h-full"}>
        <div className={"flex items-center justify-center w-full h-full"}>
          <div className={"flex flex-col items-center gap-2 w-full"}>
            {cloneElement(
              name === "yellow_bot" ? <MegaBotImage /> : <BotImage />,
              {
                fill,
                className: "block w-2/3 h-2/3",
              },
            )}

            <div className={"flex flex-col items-center w-full"}>
              <p
                className={
                  "uppercase text-white text-sm font-semibold whitespace-nowrap"
                }
              >
                {title}
              </p>

              <p
                className={`${value > 0 ? "text-[#5ea853]" : "text-[#f3427e]"} text-xs font-semibold`}
              >
                {value > 0 ? "+" : ""}
                {value}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
