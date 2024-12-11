// Initialisation de la carte Leaflet
const map = L.map('map').setView([48.8566, 2.3522], 5);

// Ajout des tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Ajout des villes sur la carte
const cities = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Rome", coords: [41.9028, 12.4964] },
    { name: "Londres", coords: [51.5074, -0.1278] },
    { name: "Barcelone", coords: [41.3851, 2.1734] },
    { name: "Amsterdam", coords: [52.3676, 4.9041] },
    { name: "Berlin", coords: [52.52, 13.4050] },
];

cities.forEach(city => {
    L.marker(city.coords).addTo(map).bindPopup(city.name);
});

// Script pour les boutons collapsibles
document.querySelectorAll('.collapse-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});


// Initialiser le carousel
let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function moveSlide(direction) {
    // Déplace la position actuelle
    currentIndex += direction;

    // Si on dépasse les limites, on recommence
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Appliquer le défilement
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100 / totalImages;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Défilement automatique (chaque 3 secondes)
setInterval(() => {
    moveSlide(1);
}, 3000);

// Mettre à jour le carousel au démarrage
updateCarousel();