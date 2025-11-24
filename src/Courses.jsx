import { useStore } from "./store";
import React, { useEffect, useState } from "react";
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
    onSelectCourse(course);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Dropdown Button*/}
      <button className="font-mono text-black px-2 border-2 rounded-2xl mb-3" 
      onClick={() => setIsOpen(!isOpen)}>
      {selectedCourse ? selectedCourse.name : "Valitse opintojakso: "}
      </button>

      {/* Dropdown Lista*/}
      {isOpen && (
        <ul>
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
