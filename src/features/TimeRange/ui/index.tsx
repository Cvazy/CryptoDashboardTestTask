import { Button } from "features/TimeRange/ui/Button";
import { useState } from "react";
import { ButtonEnum } from "../model";
import { useAppSelector } from "app/providers";

export const TimeRange = () => {
  const activeTimeRange = useAppSelector((state) => state.timeRange.range);

  const [isActiveButton, setIsActiveButton] = useState<ButtonEnum>(
    ButtonEnum[activeTimeRange as keyof typeof ButtonEnum],
  );

  return (
    <div className={"px-5 w-full"}>
      <div
        className={
          "flex items-center justify-between flex-nowrap gap-2 w-full max-[411px]:items-start"
        }
      >
        <p
          className={
            "text-left text-sm text-[#4d6077] whitespace-nowrap font-bold"
          }
        >
          Time Range:
        </p>

        <div className={"flex items-center flex-wrap gap-2 w-full"}>
          <Button
            text={"24h"}
            field={"24h"}
            isActive={isActiveButton === ButtonEnum["24h"]}
            onClick={setIsActiveButton}
          />

          <Button
            text={"7 days"}
            field={"7d"}
            isActive={isActiveButton === ButtonEnum["7d"]}
            onClick={setIsActiveButton}
          />

          <Button
            text={"30 days"}
            field={"30d"}
            isActive={isActiveButton === ButtonEnum["30d"]}
            onClick={setIsActiveButton}
          />

          <Button
            text={"All time"}
            field={"all_time"}
            isActive={isActiveButton === ButtonEnum["all_time"]}
            onClick={setIsActiveButton}
          />
        </div>
      </div>
    </div>
  );
};
