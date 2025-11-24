import { useStore } from "./store";

function Note({ note, isCustom  }) {
    const removeCustomNote = useStore((state) => state.removeCustomNote);
    const removeApiNote = useStore((state) => state.removeApiNote);


    const handleRemove = () => {
        if(isCustom) {
            removeCustomNote(note.id);
        } else {
            removeApiNote(note.id);
        }
    };

    return ( 
        <li>
            {note.text}
            {note.courseName}
            {note.courseId}
            {note.datetime}
            <button onClick={handleRemove}>❌</button>
        </li>
    );
}

export default Note;