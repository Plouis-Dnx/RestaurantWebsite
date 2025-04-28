import {heure, nbPersonnes} from './interaction.js'
import { reservations, book, update, cancel } from "./reservations.js";

let idReservation = null;
let calendarEl = document.getElementById('calendar');
let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: false,
    events: [],
    eventClick: function(info) {
        idReservation = info.event.id;
        console.log('ID de la réservation cliquée :', idReservation);

        alert('Vous allez modifier une réservation !');
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('formulaires').style.display = 'block';
        document.getElementById('supprimer').style.display = 'block';
    }
});

// Récupérations des réservations dans la base de données
document.addEventListener('DOMContentLoaded', () => {
    reservations(calendar);
});

//Ajout d'une réservation
calendar.on('dateClick', info => {
    document.getElementById('calendar').style.display = 'none';
    document.getElementById('formulaires').style.display = 'block';
    document.getElementById('supprimer').style.display = 'none'; // On n'affiche pas le bouton de suppression

    document.getElementById('valider').addEventListener('click', async () => {
        await book(info.dateStr, heure, nbPersonnes);
        window.location.reload();
    });
});

document.getElementById('valider').addEventListener('click', async () => {
    if(idReservation) {
        await update(heure, nbPersonnes, idReservation);
        window.location.reload();
    }
});

document.getElementById('supprimer').addEventListener('click', async () => {
    if(idReservation) {
        await cancel(idReservation);
        window.location.reload();
    }
});

document.getElementById('retour').addEventListener('click', () => {
    window.location.reload();
});

calendar.render();