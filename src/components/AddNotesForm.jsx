import { useState } from "react";
import { useStore } from "../store";

function formatTimestamp(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

function AddNotesForm({ selectedCourse, onAddNote }) {
  const addNoteStore = useStore((state) => state.addMuistiinpano);

  const [text, setText] = useState("");

  const handleAddNotes = () => {
    if (!text.trim()) return;
    if (!selectedCourse) {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: text.trim(),
      timestamp: formatTimestamp(new Date()),
      course: {
        id: selectedCourse.id,
        name: selectedCourse.name,
      },
    };

    onAddNote(newNote);
    addNoteStore(newNote);
    setText("");
  };

  return (
    <div className="font-mono">
      <textarea
        className="w-80 h-40 p-4 text-md rounded-xl mt-2 border-2 border-black text-black"
        id="text"
        type="text"
        placeholder="Save your thoughts"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-2">
        <button
          className="ml-4 text-white px-2 rounded-2xl bg-black hover:scale-110 hover:-translate-y-1 hover:ease-in-out hover:bg-red-400 shadow-md"
          type="button"
          onClick={handleAddNotes}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNotesForm;
