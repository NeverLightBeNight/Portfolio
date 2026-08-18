import { create } from "zustand";

export type BurgerMenuStore = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const useIsOpenBurgerMenu = create<BurgerMenuStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

export default useIsOpenBurgerMenu;
