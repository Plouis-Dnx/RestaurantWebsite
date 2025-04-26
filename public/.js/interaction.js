document.getElementById('retour').addEventListener('click', () => {
    document.getElementById('calendar').style.display = '';
    document.getElementById('formulaires').style.display = 'none';
});
document.getElementById('valider').addEventListener('click', () => {
    document.getElementById('calendar').style.display = '';
    document.getElementById('formulaires').style.display = 'none';
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