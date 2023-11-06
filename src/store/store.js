import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCentersStore = create(
    persist(
        (set) => ({
            centers: null,
            setCenters: (newCenters) => set({ centers: newCenters }),
        }),
        {
            name: "center-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
