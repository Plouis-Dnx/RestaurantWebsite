// Récupération
export async function reservations(){
    const res = await fetch('/reservations');
    if(res.ok){
        const data = await res.json();

        // Ajout des reservations au bon emplacement etc.

        document.addEventListener('DOMContentLoaded', function () {
            let calendarEl = document.getElementById('calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridWeek',
                selectable: true,
                editable: false,
                events: [],
            });

            data.forEach(e => {
                calendar.addEvent({
                    title: heure + nbPersonnes,
                    start: e.date, // Modifier ici en fonction de la base de données
                    allDay: true
                });
            });
            
            calendar.render();
        });
    } else {
        message = 'Unabled to find reservations.';
    }
}

// Ajout
export async function book(){
    const res = await fetch('/book');
    // Lorsqu'une validation de la réservation est envoyée via formulaire
    if(res.ok){
        const data = await res.json();
        // Ajout des reservations au bon emplacement etc.
        
    } else {
        message = 'Unabled to find reservations.';
    }
}

// Modification
export async function update(){
    const res = await fetch('/update');
    // Lorsqu'on clique sur le bouton "Modifier" si le nom et prénoms correspondent ?
    if(res.ok){
        const data = await res.json();
        // Ajout des reservations au bon emplacement etc.
        
    } else {
        message = 'Unabled to find reservations.';
    }
}

// Annulation
export async function cancel() {
    const res = await fetch('/cancel');
    // Lorsqu'on clique sur le bouton annuler si le nom et prénoms correspondent ?
    if(res.ok){
        const data = await res.json();
        // Ajout des reservations au bon emplacement etc.
        
    } else {
        message = 'Unabled to find reservations.';
    }
}