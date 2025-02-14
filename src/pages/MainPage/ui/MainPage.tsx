import { BotsList, TradeStatistic } from "widgets";
import { TimeRange } from "features/TimeRange";

const MainPage = () => {
  return (
    <div className={"w-full h-full"}>
      <div
        className={
          "flex flex-col gap-4 justify-between items-center overflow-x-hidden w-full h-full"
        }
      >
        <div className={"flex flex-col gap-5 w-full h-[55%]"}>
          <TradeStatistic />

          {/*Graph start*/}
          <div></div>
          {/*Graph end*/}
        </div>

        <div className={"flex flex-col gap-5 w-full h-[45%]"}>
          <BotsList />

          <TimeRange />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
