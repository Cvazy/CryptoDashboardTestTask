import { IData, useFetchAllCurrencyDataQuery } from "../model";
import { StatElement } from "./StatElement";
import { useLocalStorageQuery } from "shared/hooks";

export const TradeStatistic = () => {
  const { data } = useLocalStorageQuery<IData>(
    "tradeStatisticData",
    useFetchAllCurrencyDataQuery,
  );

  return (
    <div className={"px-4 w-full"}>
      <div className={"flex items-end justify-between flex-wrap gap-4 w-full"}>
        <div className={"flex flex-col items-start w-fit"}>
          <h2
            className={
              "text-left text-sm text-[#4d6077] uppercase whitespace-nowrap font-bold"
            }
          >
            Trading capital
          </h2>

          <p
            className={
              "text-left text-white text-4xl whitespace-nowrap uppercase font-light"
            }
          >
            {data?.trading_capital} {data?.trading_capital_currency}
          </p>
        </div>

        <div className={"flex flex-col items-start gap-1 w-fit"}>
          <StatElement title={"Balance"} value={data?.balance || 0} />

          <StatElement title={"On hold"} value={data?.on_hold || 0} />
        </div>
      </div>
    </div>
  );
};
