import LineImage from "shared/assets/images/other/line.svg";

export const MegaBotDecor = () => {
  return (
    <>
      <div
        className={
          "absolute z-10 w-14 top-[43%] left-[58%] -rotate-45 sm:hidden"
        }
      >
        <img
          src={LineImage}
          alt={"Line"}
          className={"w-full h-full"}
          loading={"lazy"}
        />
      </div>

      <div
        className={"absolute z-10 w-14 top-[43%] left-[28%] sm:hidden"}
        style={{
          transform: "scale(-1, 1)",
          rotate: "45deg",
        }}
      >
        <img
          src={LineImage}
          alt={"Line"}
          className={"w-full h-full"}
          loading={"lazy"}
        />
      </div>

      <div className={"absolute z-10 w-14 bottom-[22%] right-[28%] sm:hidden"}>
        <img
          src={LineImage}
          alt={"Line"}
          className={"w-full h-full"}
          loading={"lazy"}
        />
      </div>

      <div
        className={"absolute z-10 w-14 bottom-[22%] left-[28%] sm:hidden"}
        style={{
          transform: "scale(-1, 1)",
        }}
      >
        <img
          src={LineImage}
          alt={"Line"}
          className={"w-full h-full"}
          loading={"lazy"}
        />
      </div>
    </>
  );
};
