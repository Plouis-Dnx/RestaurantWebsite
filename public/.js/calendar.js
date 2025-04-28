import {heure, nbPersonnes} from './interaction.js'

import { reservations, book, update, cancel } from "./reservations.js";

let calendarEl = document.getElementById('calendar');
let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    editable: false,
    events: [],
});

// Récupérations des réservations dans la base de données
document.addEventListener('DOMContentLoaded', function () {
    reservations(calendar);
});

//Ajout d'une réservation
calendar.on('dateClick', info => {
    document.getElementById('calendar').style.display = 'none';
    document.getElementById('formulaires').style.display = 'block';
    document.getElementById('supprimer').style.display = 'none'; // On n'affiche pas le bouton de suppression

    document.getElementById('valider').addEventListener('click', () => {
        book(heure, nbPersonnes);
    });
});

// Modification d'une réservation
document.addEventListener('click', e => { //Clique sur une réservation
    if(e.target.matches('div.fc-event-title-container')) {
        alert('Vous allez modifier une réservation !');
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('formulaires').style.display = 'block';
        document.getElementById('supprimer').style.display = 'block'; // Affichage du bouton de suppression

        document.getElementById('valider').addEventListener('click', () => {
            update(heure, nbPersonnes);
        });

        // Suppression d'une réservation
        document.getElementById('supprimer').addEventListener('click', () => {
            cancel(idReservation);
        })
    }
});

// Annulation d'une réservation

calendar.render();