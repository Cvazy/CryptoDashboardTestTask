import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={"flex items-center justify-center w-full h-full"}>
      <div className={"flex flex-col items-center gap-4"}>
        <p
          className={
            "text-9xl font-semibold text-center text-[#4A6078] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[256px]"
          }
        >
          404
        </p>

        <p
          className={
            "text-base font-normal text-center text-[#4A6078] md:text-lg xl:text-xl"
          }
        >
          The page was not found
        </p>

        <Link to={"/"} className={"w-full"}>
          <button
            type={"button"}
            className={
              "text-white text-lg text-bold text-center px-4 py-3 w-full"
            }
          >
            To the main page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
