import type { IProps } from "../../ts/typLinksNav";

const LinksItem = ({ href, context, index }: IProps) => {
  const style =
    "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  return (
    <li>
      <a
        href={href}
        className={`${style} ${
          index === 0
            ? "bg-cyan-400 text-slate-950"
            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
        }`}
      >
        {context}
      </a>
    </li>
  );
};

export default LinksItem;
