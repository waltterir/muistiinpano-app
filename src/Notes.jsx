import { useStore } from "./store";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Note from "./Note";



const haeMuistiinpanot = async () => {
    const response = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
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
        if(data) setApiNotes(data);
    }, [data, setApiNotes]);

    const muistiinpanot = [
        ...apiNotes.filter((note) => !removedNotes.includes(note.id)),
        ...customNotes,
    ];


    const visibleNotes = muistiinpanot.filter(note => {
        if (!selectedCourse) return true;
        return note.courseId?.toString() === selectedCourse.id?.toString();
    });
 

    if (isLoading) return <p>Loading notes...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    if (visibleNotes.length === 0) return <p className="font-mono">No notes!</p>;

    return (
        <div>
            <ul>
                {visibleNotes.map((note) => (
                    <Note
                    key={note.id}
                    note={note}
                    isCustom={customNotes.some(h => h.id === note.id)}
                    />
                ))} 
            </ul>
        </div>
    ); 
}

export default Notes;

