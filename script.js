 let likeCount = 0;
        let dislikeCount = 0;
        let isLiked = false;
        let isDisliked = false;

     

  // Function to load the selected game
function loadGame(gameTitle, gameUrl) {
    const iframe = document.querySelector("iframe");
    const gameTitleElement = document.getElementById("game-title");

    if (iframe && gameTitleElement) {
        // Update the iframe source and game title
        iframe.src = gameUrl;
        gameTitleElement.textContent = gameTitle;

        // Update the URL without reloading the page
        window.history.pushState(null, "", `?game=${encodeURIComponent(gameUrl)}`);
    } else {
        console.error("Iframe or Game Title Element not found!");
    }
}

// Attach event listeners to all game cards
document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", function () {
        const gameTitle = this.getAttribute("data-title");
        const gameUrl = this.getAttribute("data-url");
        loadGame(gameTitle, gameUrl);
    });
});

// Load game on page load if URL has query parameters
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const gameUrl = params.get("game");

    if (gameUrl) {
        const iframe = document.querySelector("iframe");
        if (iframe) iframe.src = gameUrl;

        const gameTitleElement = document.getElementById("game-title");
        if (gameTitleElement) gameTitleElement.textContent = decodeURIComponent(gameUrl.split('/').pop());
    }
};




        function toggleLike() {
            const likeButton = document.getElementById("like-button");
            const dislikeButton = document.getElementById("dislike-button");
            if (isLiked) {
                likeButton.style.backgroundColor = '#333';
                likeCount--;
                isLiked = false;
            } else {
                likeButton.style.backgroundColor = '#00FF00';  // Green for like
                likeCount++;
                isLiked = true;
                if (isDisliked) {
                    dislikeButton.style.backgroundColor = '#333';  // Reset dislike
                    dislikeCount--;
                    isDisliked = false;
                }
            }
            updateButtonCounts();
        }

        function toggleDislike() {
            const likeButton = document.getElementById("like-button");
            const dislikeButton = document.getElementById("dislike-button");
            if (isDisliked) {
                dislikeButton.style.backgroundColor = '#333';
                dislikeCount--;
                isDisliked = false;
            } else {
                dislikeButton.style.backgroundColor = '#FF0000';  // Red for dislike
                dislikeCount++;
                isDisliked = true;
                if (isLiked) {
                    likeButton.style.backgroundColor = '#333';  // Reset like
                    likeCount--;
                    isLiked = false;
                }
            }
            updateButtonCounts();
        }

        function updateButtonCounts() {
            document.getElementById("like-count").textContent = likeCount;
            document.getElementById("dislike-count").textContent = dislikeCount;
        }

        function toggleFullscreen() {
            const iframe = document.querySelector("iframe");
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { // Firefox
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            }
        }
 function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            document.querySelector('header').classList.toggle('dark-mode');
        }
// Toggle Hamburger Menu
function toggleMenu() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.toggle('show');
}

// Search Bar Toggle
function toggleSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');

    // Toggle 'active' class
    overlay.classList.toggle('active');

    // Focus input field if active
    if (overlay.classList.contains('active')) {
        input.focus();
    } else {
        input.value = ''; // Clear input when closing
    }
}

// Event listener to close overlay when Escape is pressed
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('search-overlay');
        if (overlay.classList.contains('active')) {
            toggleSearchOverlay();
        }
    }
});

function loadGame(gameTitle, gameUrl) {
    const iframe = document.querySelector("iframe");
    const gameTitleElement = document.getElementById("game-title");

    // Hide iframe for smooth transition
    iframe.classList.add("hidden");

    setTimeout(() => {
        // Update the iframe source and title
        gameTitleElement.textContent = gameTitle;
        iframe.src = gameUrl;

        // Update the URL
        window.history.pushState(null, "", `?game=${encodeURIComponent(gameUrl)}`);

        // Show iframe after updating
        iframe.classList.remove("hidden");
    }, 300); // Match transition duration
}
