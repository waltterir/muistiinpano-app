import { useStore } from "./store";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
        className="font-mono text-black px-2 border-2 mb-3 rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCourse ? selectedCourse.name : "Valitse opintojakso: "}
      </button>

      {/* Dropdown Lista*/}
      {isOpen && (
        <ul className="border-2 px-2 font-mono ">
          {opintojaksot.map((opintojakso) => (
            <li key={opintojakso.id} onClick={() => HandleSelect(opintojakso)}>
              {opintojakso.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Courses;
