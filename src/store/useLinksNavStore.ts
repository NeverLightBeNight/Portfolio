import { create } from "zustand";
import type { ILinksNavState } from "../ts/typNavLinks";

const useLinksNavStore = create<ILinksNavState>(() => ({
  links: [
    { title: "Home", to: "/" },
    { title: "About me", to: "/about" },
    { title: "Skills", to: "/skills" },
    { title: "Contact me", to: "/contact" },
  ],
}));

export default useLinksNavStore;
