let artworks = [
    {
        src: 'images/Europe/1800s/Klimt/Artwork2.jpeg',
        artist: 'Gustav Klimt',
        title: 'The Kiss',
        year: '1907-1908',
        origin: 'Austria',
        ownership: 'Österreichische Galerie Belvedere, Vienna',
        funFact: 'The Kiss by Klimt is known for its elaborate and ornate golden patterns.'
    },
    // ... Add more artworks as needed
];

let currentArtworkIndex = 0;

document.getElementById('next').addEventListener('click', loadNextArtwork);

// Display the current artwork and set up the guessing game
function displayArtwork(artwork) {
    document.getElementById('artwork').src = artwork.src;
    setupGuessingGame(artwork);
}

// Set up the game for the current artwork (e.g., guessing the artist)
function setupGuessingGame(artwork) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = "Who is the artist of this artwork?";

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    // Normally you'd include multiple choices, for simplicity, we're only adding the correct choice here
    const button = document.createElement('button');
    button.textContent = artwork.artist;
    button.className = 'choice-button';
    button.onclick = () => handleChoice(artwork.artist, artwork.artist);
    choicesContainer.appendChild(button);
}

// Handle the player's choice
function handleChoice(selectedChoice, correctAnswer) {
    let message = '';
    if (selectedChoice === correctAnswer) {
        message = `Correct! Fun Fact: ${artworks[currentArtworkIndex].funFact}`;
        currentArtworkIndex = (currentArtworkIndex + 1) % artworks.length;
    } else {
        message = `Wrong. The correct answer was ${correctAnswer}. Try again!`;
    }
    alert(message);
    loadNextArtwork(); // Load next artwork whether the guess was right or wrong
}

// Load the next artwork for guessing
function loadNextArtwork() {
    if (artworks.length === 0) {
        console.log("No artworks available.");
        return;
    }
    displayArtwork(artworks[currentArtworkIndex]);
}

// Initial call to load the first artwork
loadNextArtwork();
