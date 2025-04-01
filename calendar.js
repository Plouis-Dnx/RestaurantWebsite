document.addEventListener("DOMContentLoaded", function () {
  const boutonReserver = document.getElementById("btn-reserver");
  const formulaire = document.getElementById("formulaire-reservation");

  if (boutonReserver && formulaire) {
    boutonReserver.addEventListener("click", function () {
      formulaire.style.display = "block";
      boutonReserver.style.display = "none";
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'Événement test', date: '2025-04-01' }
      ]
    });
  
    calendar.render();
});