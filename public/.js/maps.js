async function initMap() {
    // Request required libraries
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const location = { lat: 50.349998, lng: 3.53333 }; // Paris coordinates

    const map = new Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
        mapId: "DEMO_MAP_ID" // Optional: add a map ID for styling
    });

    new AdvancedMarkerElement({
        position: location,
        map: map,
        title: "Le Festin du Chef"
    });
}

// Vérifier que la carte est bien chargée
window.initMap = initMap;