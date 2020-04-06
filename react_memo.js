import { useState } from "react";
// state

const [ state, setState ] = useState("default value"); 
// equivalent to : let state = " default value"

// envoi de formilaoire
const handleSubmit = (event) => {
    event.preventDefault(); // empéche l'envoi d'une requéte

    // l'action à efféctuer lors de l'envoi du formulaire
}

//changement d'un state via fromulaire
// -- DANS LA PARTIE FUNCTIONELLE (EN HAUT)
const handleChange = (event) => {
    switch (event.target.name) {
        case "state":
            setState(event.target.name);
            break;
        // no default
    }
}

// --DANS LE RETURN
<input
    type="text"
    name="state" // équivalent au name dans le switch
    OnChange={handleChange}
    value={state} // équivalent au nom du state
/>