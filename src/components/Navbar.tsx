import useLinksNavStore from "../store/useLinksNavStore";
import { animation } from "../style/animate";
import LogoTitle from "./LogoTitle";
import LinksItem from "./NavLinks/LinksItem";

const Navbar = () => {
  const links = useLinksNavStore((s) => s.links);

  return (
    <>
      <nav
        className={`w-200 mx-auto mt-5 shadow-[0px_0px_25px_8px_rgba(0,0,0,0.1)] rounded-2xl ${animation}`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <LogoTitle />
          <ul className="flex items-center gap-2">
            {links.map((link, index) => (
              <LinksItem
                key={link.title}
                href={link.href}
                context={link.title}
                index={index}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
