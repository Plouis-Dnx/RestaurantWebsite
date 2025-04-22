document.addEventListener('DOMContentLoaded', function () {
  let calendarEl = document.getElementById('calendar');

  let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Vue par défaut
      selectable: true, // Permet la sélection de dates
      editable: true, // Permet le déplacement des événements
      events: [], // Liste des événements (vide au début)

      // Quand on clique sur une case
      dateClick: function(info) {
          let title = prompt("Nom de l'événement :"); // Demander un titre à l'utilisateur
          if (title) {
              calendar.addEvent({
                  title: title,
                  start: info.dateStr, // Date sélectionnée
                  allDay: true
              });
          }
      }
  });

  calendar.render();
});