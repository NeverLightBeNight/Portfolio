import type { BurgerMenuStore } from "../store/useIsOpenBurgerMenu";

const BurgerMenu = ({ toggle, isOpen }: BurgerMenuStore) => {
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center text-white rounded-xl min-[500px]:hidden"
      aria-label="Open menu"
      aria-expanded={isOpen}
    >
      <div className="relative h-5 w-6">
        <span
          className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-2 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-4 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
};

export default BurgerMenu;
