import {heure, nbPersonnes} from './interaction.js'

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridWeek',
        selectable: true,
        editable: false,
        events: [],
    });

    calendar.render();

    let selectedDate = null;

    // Quand on clique sur une case du calendrier
    calendar.on('dateClick', function(info) {
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('formulaires').style.display = 'block';

        // Stocke la date sélectionnée
        selectedDate = info.dateStr;
    });

    // Écouteur "Valider" attaché **une seule fois**
    document.getElementById('valider').addEventListener('click', () => {
        if (selectedDate) {
            calendar.addEvent({
                title: heure + nbPersonnes,
                start: selectedDate,
                allDay: true
            });
        }
    });
});