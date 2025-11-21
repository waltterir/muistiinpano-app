import { create  } from "zustand";

export const useStore = create((set) => ({
    apiNotes: [], 
    apiCourseTag: [], 
    courses: [],

    currentSession: null,

    // asetetaan apit
    setApiNotes: (notes) => set({ apiNotes: notes }),
    setApiCourseTag: (course) => set({ apiCourseTag: course }),

    startSession: (courseID) => 
        set((state) => {
            if(!state.currentSession) {
                return { currentSession: {courseID, notes: [] } }
            }
            return state;
        }),

    // voidaan lisätä uusi note tai opintojakso
  addNote: (newNote) => set((state) => {
    if(!state.currentSession)
        return state;
    return{
        currentSession: {
            ...state.currentSession,
            notes: [...state.currentSession.notes, newNote]
        }
    }
}),

    addCourse: (course) => set((state) => ({
        courses: [...state.courses, course],
    })),

    setNotes: (notes) => set({ customNotes: notes }),


}));