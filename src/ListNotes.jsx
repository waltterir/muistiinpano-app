import { useState } from "react";
import Courses from "./Courses";
import Notes from "./Notes";

function ListNotes() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="flex flex-col items-center font-bold text-black shadow-md">
      <Courses
        selectedCourse={selectedCourse}
        onSelectCourse={setSelectedCourse}
      />
      <div className="w-full max-w-3x1 mt-6">
        <Notes selectedCourse={selectedCourse} />
      </div>
    </div>
  );
}

export default ListNotes;
