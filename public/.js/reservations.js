// Récupération
export async function reservations(){
    const res = await fetch('/reservations');
    if(res.ok){
        const data = await res.json();

        // Ajout des reservations au bon emplacement etc.

        
        let calendarEl = document.getElementById('calendar');
        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            selectable: true,
            editable: false,
            events: [],
        });
        data.forEach(e => {
            calendar.addEvent({
                title: e.date,
                start: e.date, // Modifier ici en fonction de la base de données
                allDay: true
            });
        });
        
        calendar.render();
        return calendar;
    } else {
        console.log('Unabled to find reservations.');
    }
}

// Ajout
export async function book(heure, nbPersonnes){
    try {
        const res = await fetch('/book', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({heure, nbPersonnes})
        });
        if(!res.ok) throw new Error('Failed to book');
        else alert('Reservation successfully added !');
    } catch(err) {
        console.error(err);
        alert(err);
    }
}

// Modification
export async function update(heure, nbPersonnes){
    try{
        alert('Vous allez modifier une réservation !');
        const res = await fetch('/update', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({heure, nbPersonnes})
        });

        if(!res.ok) throw new Error('Failed to update the current reservation');
        else alert('Reservation successfully updated !');
    } catch(err) {
        console.error(err);
        alert(err);
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
        console.log('Unabled to find reservations.');
    }
}