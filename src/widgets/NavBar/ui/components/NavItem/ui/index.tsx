import {
  ButtonHTMLAttributes,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";

interface INavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  label: string;
  link: string;
}

export const NavItem: FC<INavItemProps> = ({ icon, label, link, ...props }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === link);

  useEffect(() => {
    setIsActive(pathname === link);
  }, [pathname, link]);

  return (
    <Link to={link}>
      <button
        type={"button"}
        className={"flex flex-col items-center gap-2 border-0 p-0"}
        {...props}
      >
        {cloneElement(icon, {
          fill: isActive ? "white" : "#4d6077",
          className: "block w-6 h-6",
        })}

        <p
          className={`text-center whitespace-nowrap ${isActive ? "text-white" : "text-[#4d6077]"} font-medium text-xs`}
        >
          {label}
        </p>
      </button>
    </Link>
  );
};
