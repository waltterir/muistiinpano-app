import { create  } from "zustand";

export const useStore = create((set) => ({
    apiOpintojaksot: [],
    customOpintojakso: [],

    setApiOpintojaksot: (opintojakso) => set({ apiOpintojaksot: opintojakso }),

    addOpintojakso: (opintojakso) => set((state) => ({
        customOpintojakso: [...state.customOpintojakso, opintojakso],
    })),
}));