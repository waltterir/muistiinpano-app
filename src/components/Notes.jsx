import { useStore } from "../store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Note from "./Note";

const haeMuistiinpanot = async () => {
  const response = await fetch(
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes",
  );
  if (!response.ok) throw new Error("Verkkovirhe: " + response.status);
  return response.json();
};

function Notes({ selectedCourse }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: haeMuistiinpanot,
  });

  const apiNotes = useStore((state) => state.apiNotes);
  const customNotes = useStore((state) => state.customNotes);
  const setApiNotes = useStore((state) => state.setApiNotes);
  const removedNotes = useStore((state) => state.removedNotes);

  useEffect(() => {
    if (data) {
      const notesWithCourse = data.map((note) => ({
        ...note,
        course: note.course || { id: null, name: "" },
      }));
      setApiNotes(notesWithCourse);
    }
  }, [data, setApiNotes]);

  const muistiinpanot = [
    ...apiNotes.filter((note) => !removedNotes.includes(note.id)),
    ...customNotes,
  ];

  const visibleNotes = muistiinpanot.filter((note) => {
    if (!selectedCourse) return true;
    return note.course?.id?.toString() === selectedCourse.id?.toString();
  });

  if (isLoading)
    return <p className="font-mono mt-4 text-center">Loading notes...</p>;
  if (isError)
    return <p className="font-mono mt-4 text-center">Error: {error.message}</p>;
  if (visibleNotes.length === 0)
    return <p className="font-mono mt-4 text-center">No notes!</p>;

  return (
    <div className="w-full flex flex-col gap-3 mt-4 px-2 ">
      {visibleNotes.map((note) => (
        <Note
          key={note.id}
          note={note}
          isCustom={customNotes.some((h) => h.id === note.id)}
        />
      ))}
    </div>
  );
}

export default Notes;
