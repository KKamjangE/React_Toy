import { create } from "zustand";

export const useCentersStore = create((set) => ({
    centers: null,
    setCenters: (newCenters) => {
        set({ centers: newCenters });
    },
}));
