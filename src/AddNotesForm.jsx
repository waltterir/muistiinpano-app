import React, { useState } from "react";
import { useStore } from "./store";


function AddNotesForm({ selectedCourse, onAddNote, isLocked }) {
    const addNote = useStore((state) => state.addMuistiinpano);

    const [text, setText] = useState("");

    const handleAddNotes = () => {
        if (!text.trim() || isLocked) return;

    const newNote = {
        id: Date.now(),
        text: text,
        datetime: new Date().toISOString(),
        courseId: selectedCourse.id
    };

    
    onAddNote(newNote)
    setText("");

    }; 

    return (
        <div className="font-mono">
            <textarea 
            className="w-80 h-40 p-4 text-lg rounded-xl mt-3 border-2 border-black text-black font-bold"
                disabled={isLocked}
                type="text"
                placeholder="Save your thoughts"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />

        <div className="mt-2">
                <button 
                className="ml-4 text-white px-2 rounded-2xl bg-black hover:scale-110 hover:-translate-y-1 hover:ease-in-out hover:bg-yellow-500 shadow-md"
                type="button"
                onClick={handleAddNotes}>
                    Save
                </button>

         </div>       
        </div>

    )
}

export default AddNotesForm;