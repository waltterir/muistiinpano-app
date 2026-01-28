import { useStore } from "../store";

function Note({ note, isCustom }) {
  const removeCustomNote = useStore((state) => state.removeCustomNote);
  const removeApiNote = useStore((state) => state.removeApiNote);

  const handleRemove = () => {
    if (isCustom) {
      removeCustomNote(note.id);
    } else {
      removeApiNote(note.id);
    }
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-4 mb-2 border-gray-200 font-mono">
      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
        <span>{note.timestamp}</span>
        <span className=" text-gray-700">{note.course?.name}</span>
        <span>ID:{note.id}</span>
      </div>
      <p className="text-base text-gray-800 mb-2 font-mono">
        {note.text}
        <button className="ml-3" onClick={() => handleRemove(note.id)}>
          ❌
        </button>
      </p>
    </div>
  );
}

export default Note;
