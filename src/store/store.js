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
        },
    ),
);

export const useSignStore = create(
    persist(
        (set) => ({
            isSignInTab: true,
            setIsSignInTab: () =>
                set((state) => ({
                    isSignInTab: !state.isSignInTab,
                })),
        }),
        {
            name: "isSignInTab-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export const useMemberStore = create(
    persist(
        (set) => ({
            memberInfo: {
                accessToken: null,
                memberName: null,
            },
            isSignIn: false,
            setMemberInfo: (newInfo) => set({ memberInfo: newInfo }),
            clearMember: () =>
                set({
                    memberInfo: { accessToken: null, memberName: null },
                    isSignIn: false,
                }),
            setIsSignIn: (newState) => set({ isSignIn: newState }),
        }),
        {
            name: "member-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
