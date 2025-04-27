document.getElementById("button-container").querySelectorAll('button')
    .forEach(btn => {
        btn.addEventListener('click', () => {
            // Calendar rendu visible
            const calendrier = document.getElementById('calendar').style;
            calendrier.display = 'block';
            calendrier.zIndex = 1;
            calendrier.opacity = 1;
            calendrier.height = 'auto';
            calendrier.overflow = 'visible';

            // Formulaire caché
            document.getElementById('formulaires').style.display = 'none';
        });
    });

export let heure, nbPersonnes;
document.querySelectorAll('#horaires button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        heure = btn.innerHTML;

        document.querySelectorAll('#horaires button').forEach(btn => {
            if(btn.classList.contains('border')){
                btn.classList.remove('border', 'border-warning-subtle');
                btn.classList.add('bg-orange');
            }
        });
        btn.classList.remove('bg-orange');
        btn.classList.add('border', 'border-warning-subtle');
    });
});

document.querySelectorAll('#nbPersonnes button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        nbPersonnes = btn.innerHTML;

        document.querySelectorAll('#nbPersonnes button').forEach(btn => {
            if(btn.classList.contains('border')){
                btn.classList.remove('border', 'border-warning-subtle');
                btn.classList.add('bg-orange');
            }
        });
        btn.classList.remove('bg-orange');
        btn.classList.add('border', 'border-warning-subtle');
    });
});