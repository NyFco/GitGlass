import { UserData } from "@/hooks/useUserData";
import { create } from "zustand";

type UserStore = {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
};

const useCategoryStore = create<UserStore>()((set) => ({
  userData: null,
  setUserData: (userData) => set(() => ({ userData })),
}));

export default useCategoryStore;
