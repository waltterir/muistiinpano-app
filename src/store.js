import { create } from "zustand";

export const useStore = create((set) => ({
  apiOpintojaksot: [],
  customOpintojaksot: [],
  apiNotes: [],
  customNotes: [],
  removedNotes: [],

  /* Opintojakso */
  setApiOpintojaksot: (data) => set({ apiOpintojaksot: data }),

  addOpintojakso: (opintojakso) =>
    set((state) => ({
      customOpintojaksot: [...state.customOpintojaksot, opintojakso],
    })),

  /* Muistiinpano */
  setApiNotes: (data) => set({ apiNotes: data }),

  addMuistiinpano: (muistiinpano) =>
    set((state) => ({
      customNotes: [...state.customNotes, muistiinpano],
    })),

  /* Muistiinpano Poistot */
  removeCustomNote: (noteId) =>
    set((state) => ({
      customNotes: state.customNotes.filter((note) => note.id !== noteId),
    })),

  removeApiNote: (noteId) =>
    set((state) => ({
      removedNotes: [...state.removedNotes, noteId],
    })),
}));
