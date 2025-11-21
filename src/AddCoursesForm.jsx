import React, { useState } from "react";
import { useStore } from "./store";

function AddCoursesForm() {

    const addCourse = useStore((state) => state.addCourse);
    

    const [name, setName] = useState("");
    const [message, setMessage] = useState(""); 

    const HandleAddCourses = () => {
        const id = Date.now();
        const currentName = name;

        if(!name) return 

        addCourse({id, name});

        setName("");
        setMessage(`Opintojakso '${currentName} lisätty id:llä ${id}.`);
    }

    return (   
        <div>

            <input 
            type="text"
            placeholder="Opintojakso"
            value={name}
            onChange={(e) => setName(e.target.value)}
             />

             <button onClick={HandleAddCourses}>
                Add
             </button>

            
            {message}

        </div>
    )
}

export default AddCoursesForm;