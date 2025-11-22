import React, { useState } from "react";
import { useStore } from "./store";

function AddCoursesForm() {
  const addCourse = useStore((state) => state.addOpintojakso);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const HandleAddCourses = () => {
    const id = Date.now();
    const currentName = name;

    if (!name) return;

    addCourse({ id, name });

    setName("");
    setMessage(`Opintojakso: '${currentName}' lisätty id:llä: ${id}.`);
  };

  return (
    <div className="font-mono text-black">
      <input
        type="text"
        placeholder="Add course: "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button 
      className="ml-4 text-white px-2 rounded-2xl bg-black hover:scale-110 hover:-translate-y-1 hover:ease-in-out hover:bg-green-800 shadow-md" 
      onClick={HandleAddCourses}> 
      Add 
      </button>

      {message && <p className="text-black mt-2">{message}</p>}
    </div>
  );
}

export default AddCoursesForm;
