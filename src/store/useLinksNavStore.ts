import { create } from "zustand";
import type { ILinksNavState } from "../ts/typNavLinks";

const useLinksNavStore = create<ILinksNavState>(() => ({
  links: [
    { title: "Home", href: "#" },
    { title: "About me", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Contact me", href: "#contact" },
  ],
}));

export default useLinksNavStore;
