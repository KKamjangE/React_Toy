import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSearchStateStore = create((set) => ({
    page: 1,
    perPage: 10,
    setPage: (newPage) => set({ page: newPage }),
    setPerPage: (newPerPage) => set({ perPage: newPerPage }),
}));

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

export const useThemeStore = create(
    persist(
        (set) => ({
            isDarkMode: false,
            setIsDarkMode: () =>
                set((state) => ({
                    isDarkMode: !state.isDarkMode,
                })),
        }),
        {
            name: "theme-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export const useCenterTypeStore = create((set) => ({
    centerType: "",
    setCenterType: (newType) => set({ centerType: newType }),
}));
