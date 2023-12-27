const apiKey = 'KB4tTGDH'; // Your Rijksmuseum API key
let artworks = [];
let currentArtworkIndex = 0;

document.getElementById('next').addEventListener('click', loadNextArtwork);

// Fetch a batch of artworks from the Rijksmuseum API
function fetchArtworks() {
    fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&format=json&ps=10&p=${getRandomPage()}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.artObjects) {
                artworks = data.artObjects;
                currentArtworkIndex = 0;
                displayArtwork(artworks[currentArtworkIndex]);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Display the current artwork and set up the guessing game
function displayArtwork(artwork) {
    document.getElementById('artwork').src = artwork.webImage.url;
    setupGuessingGame(artwork);
}

// Set up the game for the current artwork (e.g., guessing the artist)
function setupGuessingGame(artwork) {
    // Example: Guess the artist's name
    const questionElement = document.getElementById('question');
    questionElement.textContent = "Who is the artist of this artwork?";

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    // Randomly select a few other artists for the multiple choice (placeholder logic)
    const choices = [artwork.principalOrFirstMaker, 'Artist B', 'Artist C', 'Artist D'];
    choices.sort(() => Math.random() - 0.5); // Shuffle choices

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        button.onclick = () => handleChoice(choice, artwork.principalOrFirstMaker);
        choicesContainer.appendChild(button);
    });
}

// Handle the player's choice
function handleChoice(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong. The correct answer was ' + correctAnswer);
    }
    loadNextArtwork();
}

// Load the next artwork for guessing
function loadNextArtwork() {
    currentArtworkIndex++;
    if (currentArtworkIndex >= artworks.length) {
        // Fetch new artworks if we've gone through the current batch
        fetchArtworks();
    } else {
        displayArtwork(artworks[currentArtworkIndex]);
    }
}

// Helper function to get a random page number
function getRandomPage() {
    return Math.floor(Math.random() * 100) + 1; // Random page number
}

// Initial artworks fetch
fetchArtworks();
