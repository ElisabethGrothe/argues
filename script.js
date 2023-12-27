
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next');
    nextButton.addEventListener('click', loadNewArtwork);
});

function loadNewArtwork() {
    // Example API call to fetch artwork data
    // Replace with actual API call and handle response data
    const artworkData = {
        src: 'https://via.placeholder.com/600x400',
        time: ['1800s', '1900s', '2000s', '2100s'],
        period: ['Renaissance', 'Baroque', 'Modern', 'Contemporary'],
        artist: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
        location: ['France', 'Italy', 'USA', 'Japan'],
        material: ['Oil', 'Acrylic', 'Watercolor', 'Digital']
    };

    updateArtwork(artworkData);
}

function updateArtwork(data) {
    document.getElementById('artwork').src = data.src;
    updateQuestion('time-question', 'When was this created?', data.time);
    updateQuestion('period-question', 'What is the period?', data.period);
    updateQuestion('artist-question', 'Who is the artist?', data.artist);
    updateQuestion('location-question', 'Where was this created?', data.location);
    updateQuestion('material-question', 'What material is used?', data.material);
}

function updateQuestion(containerId, questionText, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<h3>${questionText}</h3>`;

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'choice-button';
        button.onclick = function() { handleChoice(option); };
        container.appendChild(button);
    });
}

function handleChoice(choice) {
    // Placeholder for handling choices
    // Implement logic to verify choice and update score
    alert(`You chose: ${choice}`);
}

// Update the displayed year as the slider moves
document.getElementById('year-slider').oninput = function() {
    document.getElementById('year-value').textContent = this.value;
};

// Initialize Leaflet map
function initMap() {
    const map = L.map('map').setView([51.505, -0.09], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.on('click', function(e) {
        // Handle map click for country guessing
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMap();
    // existing code...
});
