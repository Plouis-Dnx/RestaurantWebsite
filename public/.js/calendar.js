import { reservations, book, update, cancel } from "./reservations.js";

let calendar = null;

// Récupérations des réservations dans la base de données
document.addEventListener('DOMContentLoaded', function () {
    calendar = reservations();
});

// Modification d'une réservation
document.addEventListener('click', e => {
    if(e.target.matches('div.fc-event-title-container')) {
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('formulaires').style.display = 'block';

        document.getElementById('valider').addEventListener('click', () => {
            update(heure, nbPersonnes);
        });
    }
});

document.getElementById('valider').addEventListener('click', () => {
    book(heure, nbPersonnes);
});

calendar.on('dateClick', info => {
    document.getElementById('calendar').style.display = 'none';
    document.getElementById('formulaires').style.display = 'block';
});