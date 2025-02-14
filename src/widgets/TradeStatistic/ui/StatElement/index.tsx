import CurrencyIcon from "shared/assets/images/icons/currency.svg";

interface IStatElementProps {
  title: string;
  value: number;
}

export const StatElement = ({ title, value }: IStatElementProps) => {
  return (
    <div
      className={"flex items-center justify-between flex-nowrap gap-1.5 w-full"}
    >
      <p
        className={
          "text-left text-sm text-[#4d6077] uppercase whitespace-nowrap font-bold w-20"
        }
      >
        {title}:
      </p>

      <div className={"flex items-center flex-nowrap gap-1.5 w-fit"}>
        <p
          className={
            "text-left text-sm text-white uppercase whitespace-nowrap font-extrabold"
          }
        >
          {value.toLocaleString("ru-RU")}
        </p>

        <img
          src={CurrencyIcon}
          alt="Currency Icon"
          className={"block w-4 h-4"}
          loading={"lazy"}
        />
      </div>
    </div>
  );
};
