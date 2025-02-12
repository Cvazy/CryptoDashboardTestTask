import { BotsList } from "widgets";
import { TimeRange } from "features/TimeRange";

const MainPage = () => {
  return (
    <div className={"w-full h-full"}>
      <div
        className={
          "flex flex-col gap-4 items-center overflow-x-hidden w-full h-full"
        }
      >
        <div className={"w-full h-1/2"}>
          {/*Trade statistic start*/}
          <div className={"px-5"}></div>
          {/*Trade statistic end*/}

          {/*Graph start*/}
          <div></div>
          {/*Graph end*/}
        </div>

        <div className={"flex flex-col gap-5 w-full h-1/2"}>
          <BotsList />

          <TimeRange />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
