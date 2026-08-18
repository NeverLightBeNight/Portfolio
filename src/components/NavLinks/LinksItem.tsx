import { NavLink } from "react-router-dom";
import type { IProps } from "../../ts/typLinksNav";

const LinksItem = ({ to, context }: IProps) => {
  const style =
    "rounded-lg px-4 py-2 text-sm font-medium bg-cyan-500 transition-all duration-200 outline-none hover:bg-cyan-200/90 transition-all";
  return (
    <NavLink to={to} className={`${style}`}>
      {context}
    </NavLink>
  );
};

export default LinksItem;
