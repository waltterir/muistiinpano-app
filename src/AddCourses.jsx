import React, { useState } from "react";
import { useStore } from "./store";

function AddCourses() {
    const addCourse = useStore((state) => state.addCourse);
    const courses = useStore((state) => state.courses);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const HandleAddCourses = () => {
        if(!name) return;

        const nextID = courses.length > 0
        ? Math.max(...courses.map(course => course.id)) + 1
        : 1;

        addCourse({ id: nextID, name });

        setMessage(`Opintojakso '${name}' lisätty id:llä ${nextID}`);
        
        setName("");
    };

    return (
        <div>
            <input 
            type="text"
            placeholder="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <button onClick={HandleAddCourses}
            className=""
            >Add
            </button>

            {message && <p>{message}</p>}

        </div>
    );
}

export default AddCourses;