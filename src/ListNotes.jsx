import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import Notes from "./Notes";

function ListNotes () {


    const [selectedCourse, setSelectedCourse] = useState(null);



    return (
        <div className="flex flex-col items-center mt-80 font-bold text-black">
            <Courses 
                selectedCourse={selectedCourse}
                onSelectCourse={setSelectedCourse}
            />
            <Notes 
                selectedCourse={selectedCourse}
                
            />
            
        </div>
    )
} 

export default ListNotes;