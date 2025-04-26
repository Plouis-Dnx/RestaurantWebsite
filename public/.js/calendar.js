import {heure, nbPersonnes} from './interaction.js'

document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vue par défaut
        selectable: true, // Permet la sélection de dates
        editable: true, // Permet le déplacement des événements
        events: [], // Liste des événements (vide au début)

        // Quand on clique sur une case
        dateClick: function(info) {
            // Lorsqu'on clique, on affiche le formulaire
            document.getElementById('calendar').style.display = 'none';
            document.getElementById('formulaires').style.display = 'block';

            //Ajout de l'évènement
            document.getElementById('valider').addEventListener('click', () => {
                calendar.addEvent({
                    title: heure + nbPersonnes,
                    start: info.dateStr, // Date sélectionnée
                    allDay: true
                });
            });
        }
    });

  calendar.render();
});