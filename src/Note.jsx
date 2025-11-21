import { defaultClientConditions } from "vite";
import { useStore } from "./store";


function Note({ id, text, datetime}) {
    return(
        <li>
            {id} - {text} - {datetime}
        </li>
    );
}

export default Note;