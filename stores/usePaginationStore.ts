import { create } from "zustand";

type PaginationStore = {
  page: number;
  max: number;
  setPage: (page: number) => void;
  setMax: (max: number) => void;
};

const usePaginationStore = create<PaginationStore>()((set) => ({
  page: 1,
  max: 1,
  setPage: (page) => set(() => ({ page })),
  setMax: (max) => set(() => ({ max })),
}));

export default usePaginationStore;
