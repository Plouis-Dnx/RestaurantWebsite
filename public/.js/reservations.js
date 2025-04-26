// Récupération
export async function reservations(){
    const res = await fetch('/reservations');
    if(res.ok){
        const data = await res.json();
        // Ajout des reservations au bon emplacement etc.
    } else {
        message = 'Unabled to find reservations.';
    }
}

// Ajout
export async function book(){
    const res = await fetch('/book');
    // Lorsqu'une validation de la réservation est envoyée via formulaire
}

// Modification
export async function update(){
    const res = await fetch('/update');
    // Lorsqu'on clique sur le bouton "Modifier" si le nom et prénoms correspondent ?
}

// Annulation
export async function cancel() {
    const res = await fetch('/cancel');
    // Lorsqu'on clique sur le bouton annuler si le nom et prénoms correspondent ?
}

// Ajout d'un compte avec mdp ?