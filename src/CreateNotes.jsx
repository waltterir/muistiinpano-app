import React, { use, useEffect, useState } from "react";
import AddNotesForm from "./AddNotesForm";
import Courses from "./Courses";


function CreateNotes() {
    
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [sessionNotes, setSessionNotes] = useState([]);
    const [isLocked, setIsLocked] = useState(false);
    
function handleAddNote(newNote) {
    setSessionNotes([...sessionNotes, newNote])
    
}

useEffect(() => {
    if (sessionNotes.length > 0 ) {
        setIsLocked(true);
    } 
}, [sessionNotes]);




    return (
    <div className="flex flex-col items-center mt-80 font-bold text-black">
        <Courses 
        selectedCourse={selectedCourse}
        onSelectCourse={setSelectedCourse}
        isLocked={isLocked}
        />

        <AddNotesForm 
        selectedCourse={selectedCourse}
        onAddNote={handleAddNote}
        isLocked={isLocked}
        />


        
    </div>
    )
}

export default CreateNotes;
