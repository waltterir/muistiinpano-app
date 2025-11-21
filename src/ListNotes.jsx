import Note from "./Note";
import { useStore } from "./store";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchNotes = async () => {
    const response = await fetch (
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
    );
    if (!response.ok) throw new Error("Verkkovirhe: " + response.status);
    return response.json();
};

function ListNotes() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["notes"],
        queryFn: fetchNotes,
    });


const apiNotes = useStore((state) => state.apiNotes);
const customNotes = useStore((state) => state.customNotes);
const setApiNotes = useStore((state) => state.setApiNotes);

    useEffect(() => {
        if(data) {
            setApiNotes(data);
        }
    }, [data, setApiNotes]);

    if(isLoading) return <p>Ladataan muistiinpanoja...</p>;
    if(isError) return <p>Virhe: {error.message}</p>;
    if(notes.length === 0) return <p>Ei muistiinpanoja</p>;

    return (
            <ul>
                {notes.map((note) => (
                    <Note
                    key={note.id}
                    id={note.id}
                    text={note.name}
                    datetime={note.datetime}
                    isCustom={customNotes.some((h) => h.id === note.id)}
                    />
                ))}
            </ul>
    );
}

export default ListNotes;
