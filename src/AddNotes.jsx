import React, { useState } from "react";
import { useStore } from "./store";

function AddNotes() {
    const startSession = useStore((state) => state.startSession);
    const addNote = useStore((state) => state.addNote);
    const courses = useStore((state) => state.courses); 
    const currentSession = useStore((state) => state.currentSession);

    const [noteText, setNoteText] = useState("");
    const [selectedCourseID, setSelectedCourseID] = useState(
        courses.length > 0 ? courses[0].id : null
    );
    
    const HandleAddNotes = () => {
        if(!noteText.trim()) return;

        const newNote = {
            id: Date.now(),
            name: noteText,
            dateTime: new Date().toISOString(),
        };
        
        addNote(newNote);
        setNote("");
    };

    return (
        <div>
            {!currentSession && courses.length > 0 && (
                <select
                    value={selectedCourseID}
                    onChange={(e) => setSelectedCourseID(Number(e.target.value))}
                >
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
            )}

            <input 
                type="text"
                placeholder="Save Your Thoughts"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />

            <button onClick={HandleAddNotes}>Add</button>
        </div>
    );
}

export default AddNotes;