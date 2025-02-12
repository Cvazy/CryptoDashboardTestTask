import { Dispatch, SetStateAction } from "react";
import { ButtonEnum, changeTimeRange } from "features/TimeRange";
import { useAppDispatch } from "app/providers";

interface IButtonProps {
  isActive: boolean;
  text: string;
  field: keyof typeof ButtonEnum;
  onClick: Dispatch<SetStateAction<ButtonEnum>>;
}

export const Button = ({ isActive, text, field, onClick }: IButtonProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    onClick(ButtonEnum[field as keyof typeof ButtonEnum]);
    dispatch(changeTimeRange(field));
  };

  return (
    <button
      onClick={handleClick}
      type={"button"}
      className={`border border-solid ${isActive ? "text-white border-white" : "text-[#4d6077] border-[#1c2e45]"} rounded-full text-center text-sm px-1.5 py-0.5 min-w-16`}
    >
      {text}
    </button>
  );
};
