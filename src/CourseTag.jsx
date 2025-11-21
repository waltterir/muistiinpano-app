import { useStore } from "./store";

function Opintojakso({ name, id }) {
    return(
        <li>
            {name} - {id}
        </li>
    );
}