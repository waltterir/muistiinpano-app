import { useStore } from "./store";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaChevronDown } from "react-icons/fa";

const haeOpintojaksot = async () => {
  const response = await fetch(
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
  );

  if (!response.ok) throw new Error("Verkkovirhe: " + response.status);
  return response.json();
};

function Courses({ selectedCourse, onSelectCourse, isLocked }) {
  const { data } = useQuery({
    queryKey: ["opintojaksot"],
    queryFn: haeOpintojaksot,
  });

  const apiOpintojaksot = useStore((state) => state.apiOpintojaksot);
  const customOpintojaksot = useStore((state) => state.customOpintojaksot);
  const setApiOpintojaksot = useStore((state) => state.setApiOpintojaksot);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setApiOpintojaksot(data);
    }
  }, [data, setApiOpintojaksot]);

  // renderöidään listat yhteen
  const opintojaksot = [...apiOpintojaksot, ...customOpintojaksot];

  const HandleSelect = (course) => {
    if (isLocked && course.id !== selectedCourse?.id) {
      return;
    }
    onSelectCourse(course);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Dropdown Button*/}
      <button
        className="font-mono text-black px-4 border-2 mb-3 rounded-xl flex items-center justify-between w-full
       hover:border-red-400 transition-colors duration-300 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCourse ? selectedCourse.name : "Course"}
        <FaChevronDown
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Lista*/}
      {isOpen && (
        <ul className="list-none px-2 font-mono cursor-pointer">
          {opintojaksot.map((opintojakso) => (
            <li
              className="hover:text-red-400 hover:shadow-xl rounded-xl"
              key={opintojakso.id}
              onClick={() => HandleSelect(opintojakso)}
            >
              {opintojakso.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Courses;
