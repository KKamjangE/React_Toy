import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSearchStateStore = create(
    persist(
        (set) => ({
            page: 1,
            perPage: 10,
            setPage: (newPage) => set({ page: newPage }),
            setPerPage: (newPerPage) => set({ perPage: newPerPage }),
        }),
        {
            name: "search-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useSignStore = create(
    persist(
        (set) => ({
            isSignInView: true,
            setIsSignInView: () =>
                set((state) => ({
                    isSignIn: !state.isSignIn,
                })),
        }),
        {
            name: "sign-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useMemberStore = create(
    persist(
        (set) => ({
            accessToken: null,
            memberName: null,
            setAccessToken: (newToken) => set({ accessToken: newToken }),
            setMemberName: (newName) => set({ memberName: newName }),
        }),
        {
            name: "member-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
