let artworks = [
    {
        src: 'images/Europe/1800s/Male/Artwork2.jpg', // Update with the correct path
        artist: 'Gustav Klimt',
        title: 'The Kiss',
        year: '1907-1908',
        origin: 'Austria',
        ownership: 'Österreichische Galerie Belvedere, Vienna',
        funFact: 'The Kiss is Klimt\'s most famous work and is a symbol of Viennese Art Nouveau.',
        possibleArtists: ['Gustav Klimt', 'Egon Schiele', 'Oskar Kokoschka', 'Richard Gerstl'] // Multiple choice options
    },
    // ... other artworks
];

let currentArtworkIndex = 0;

document.getElementById('next').addEventListener('click', loadNextArtwork);

// Display the current artwork and set up the guessing game
function displayArtwork(artwork) {
    const artworkImage = document.getElementById('artwork');
    artworkImage.src = artwork.src;
    artworkImage.alt = artwork.title; // Good practice to include an alt attribute for accessibility
    setupGuessingGame(artwork);
}

// Set up the game for the current artwork (e.g., guessing the artist)
function setupGuessingGame(artwork) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = "Who is the artist of this artwork?";

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    artwork.possibleArtists.forEach(artist => {
        const button = document.createElement('button');
        button.textContent = artist;
        button.className = 'choice-button';
        button.onclick = () => handleChoice(artist, artwork.artist);
        choicesContainer.appendChild(button);
    });
}

// Handle the player's choice
function handleChoice(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        alert(`Correct! Fun Fact: ${artworks[currentArtworkIndex].funFact}`);
    } else {
        alert(`Wrong. The correct answer was ${correctAnswer}.`);
    }
    currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length; // Move to the next artwork
    loadNextArtwork();
}

// Load the next artwork for guessing
function loadNextArtwork() {
    displayArtwork(artworks[currentArtworkIndex]);
}

// Initial call to load the first artwork
loadNextArtwork();
