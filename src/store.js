import { create  } from "zustand";

export const useStore = create((set) => ({
    apiOpintojaksot: [],
    customOpintojaksot: [],
    apiNotes: [],
    customNotes: [],


    /* Opintojakso */
    setApiOpintojaksot: (data) => set({ apiOpintojaksot: data }),

    addOpintojakso: (opintojakso) => set((state) => ({
        customOpintojaksot: [...state.customOpintojaksot, opintojakso],
    })),



    /* Muistiinpano */ 
    setApiNotes: (data) => set ({ apiNotes: data }),

    addMuistiinpano: (muistiinapano) => set((state) => ({
        customNotes: [...state.customNotes, muistiinapano],
    })),
}));