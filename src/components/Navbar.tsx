import useIsOpenBurgerMenu from "../store/useIsOpenBurgerMenu";
import useLinksNavStore from "../store/useLinksNavStore";
import { animation } from "../style/animate";
import BurgerMenu from "./BurgerMenu";
import LogoTitle from "./LogoTitle";
import LinksItem from "./NavLinks/LinksItem";

const Navbar = () => {
  const links = useLinksNavStore((s) => s.links);
  const isOpen = useIsOpenBurgerMenu((s) => s.isOpen);
  const toggle = useIsOpenBurgerMenu((s) => s.toggle);

  return (
    <nav
      className={`shadow-[0px_0px_25px_8px_rgba(0,0,0,0.1)] rounded-2xl ${animation}`}
    >
      <div className=" mx-auto max-w-6xl px-4 py-4 min-[500px]:px-6 min-[500px]:py-5">
        <div className="flex items-center justify-between">
          <LogoTitle />

          <BurgerMenu isOpen={isOpen} toggle={toggle} />

          <ul className="hidden items-center gap-2 min-[500px]:flex">
            {links.map((link) => (
              <LinksItem key={link.title} to={link.to} context={link.title} />
            ))}
          </ul>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 min-[500px]:hidden ${
            isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 rounded-2xl p-2">
            {links.map((link) => (
              <LinksItem key={link.title} to={link.to} context={link.title} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
