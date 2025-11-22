import { create  } from "zustand";

export const useStore = create((set) => ({
    apiOpintojaksot: [],
    customOpintojaksot: [],

    setApiOpintojaksot: (data) => set({ apiOpintojaksot: data }),

    addOpintojakso: (opintojakso) => set((state) => ({
        customOpintojaksot: [...state.customOpintojaksot, opintojakso],
    })),
}));