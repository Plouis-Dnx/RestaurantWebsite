export async function reservations(){
    const res = await fetch('/reservations');
    if(res.ok){
        const data = await res.json();
        // Ajout des reservations au bon emplacement etc.
    } else {
        message = 'Unabled to find reservations.';
    }
}