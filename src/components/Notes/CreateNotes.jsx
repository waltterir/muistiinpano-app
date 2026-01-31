import React, { useEffect, useState } from "react";
import AddNotesForm from "./AddNotesForm";
import Courses from "../Courses/Courses";

// Component for creating notes associated with selected courses
function CreateNotes() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sessionNotes, setSessionNotes] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  // Function to handle adding a new note
  function handleAddNote(newNote) {
    setSessionNotes([...sessionNotes, newNote]);
  }

  // Lock course selection after the first note is added
  useEffect(() => {
    if (sessionNotes.length > 0) {
      setIsLocked(true);
    }
  }, [sessionNotes]);

  return (
    <div className="flex flex-col items-center font-bold text-black font-mono px-4 shadow-md">
      <Courses
        selectedCourse={selectedCourse}
        onSelectCourse={setSelectedCourse}
        isLocked={isLocked}
      />
      <AddNotesForm selectedCourse={selectedCourse} onAddNote={handleAddNote} />

      <div className="w-full max-w-2x1 mt-6">
        {sessionNotes.map((note) => (
          <div
            key={note.id}
            className="shadow-md rounded-x1 p-4 mb-3 wrap-break-word"
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateNotes;
