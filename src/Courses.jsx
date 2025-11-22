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

function Courses() {
  const { data } = useQuery({
    queryKey: ["opintojaksot"],
    queryFn: haeOpintojaksot,
  });

  const apiOpintojaksot = useStore((state) => state.apiOpintojaksot);
  const customOpintojaksot = useStore((state) => state.customOpintojaksot);
  const setApiOpintojaksot = useStore((state) => state.setApiOpintojaksot);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setApiOpintojaksot(data);
    }
  }, [data, setApiOpintojaksot]);

  const opintojaksot = [...apiOpintojaksot, ...customOpintojaksot];


  const HandleSelect = (course) => {
    setSelectedCourse(course);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Dropdown Button*/}
      <button className="font-mono text-black " onClick={() => setIsOpen(!isOpen)}>
        {selectedCourse ? selectedCourse.name : "Valitse opintojakso:"}
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
