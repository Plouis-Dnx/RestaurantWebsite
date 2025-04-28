// Récupération
export async function reservations(calendar){
    const res = await fetch('/reservations');
    if(res.ok){
        const data = await res.json();

        // Ajout des reservations au bon emplacement etc.
        data.forEach(e => {
            calendar.addEvent({
                title: e.titre,
                start: e.date, // Modifier ici en fonction de la base de données
                allDay: true
            });
        });
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
    try{
        const res = await fetch('/cancel', {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({idReservation})
        });

        if(!res.ok) throw new Error('Failed to cancel the current reservation');
        else alert('Reservation successfully canceled !');
    } catch(err) {
        console.error(err);
        alert(err);
    }
}