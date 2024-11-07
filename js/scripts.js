let currentChapter = null;
let currentSlide = 0;
const chapterSlideCounts = [9, 10, 15];

// Toggle chapter visibility on click
function toggleChapter(chapterIndex) {
    if (currentChapter === chapterIndex) {
        closeChapter();
        return;
    }
    closeChapter();
    currentChapter = chapterIndex;
    currentSlide = 0;
    displaySlide();

    document.getElementById(`chapterDisplay${chapterIndex}`).style.display = "block";
}

// Display the current slide
function displaySlide() {
    const chapterImage = document.getElementById(`chapterImage${currentChapter}`);
    const slideCount = chapterSlideCounts[currentChapter];

    if (currentSlide < slideCount) {
        chapterImage.src = `../Presentation${currentChapter + 1}/Slide${currentSlide + 1}.png`;
    }
}

// Go to the next slide
function nextSlide() {
    if (currentSlide < chapterSlideCounts[currentChapter] - 1) {
        currentSlide++;
        displaySlide();
    }
}

// Go to the previous slide
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        displaySlide();
    }
}

// Toggle fullscreen mode
function toggleFullScreen() {
    const chapterContainer = document.getElementById(`chapterDisplay${currentChapter}`);
    if (!document.fullscreenElement) {
        chapterContainer.requestFullscreen().catch(err => console.log(`Error: ${err.message}`));
    } else {
        document.exitFullscreen();
    }
}

// Close the currently open chapter
function closeChapter() {
    if (currentChapter !== null) {
        document.exitFullscreen();
        document.getElementById(`chapterDisplay${currentChapter}`).style.display = "none";
        currentChapter = null;
    }
}


// Adjust image sizes when window is resized
window.addEventListener('resize', () => {
    if (currentChapter !== null) {
        displaySlide();
    }
});

// Toggle the dropdown visibility on small screens
document.getElementById('menuToggle').addEventListener('click', () => {
    const siteNav = document.getElementById('siteNav');
    siteNav.classList.toggle('active');
});
