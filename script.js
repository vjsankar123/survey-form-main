document.addEventListener('DOMContentLoaded', function() {
    function showSlidesAfterLoading() {
        document.querySelector('.loading-container').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
        document.getElementById('slide1').classList.add('active');
    }

    setTimeout(showSlidesAfterLoading, 3000); 
});

function nextSlide() {
    document.getElementById('slide1').classList.remove('active');
    document.getElementById('slide2').classList.add('active');
}

function goBack() {
    document.getElementById('slide2').classList.remove('active');
    document.getElementById('slide1').classList.add('active');
}

let currentSlide = 1;

function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Show the current slide
    document.getElementById('slide' + slideNumber).style.display = 'block';
}

function nextSlide(slideNumber) {
    // Increment the slide number
    currentSlide = slideNumber + 1;

    // Show the next slide
    showSlide(currentSlide);
}

// Initialize the first slide to show
showSlide(1);

function nextSlide(slideNumber) {
    // Increment the slide number
    currentSlide = slideNumber + 1;

    // Show the next slide
    showSlide(currentSlide);
}
 
// Function to handle slide transitions
function nextSlide(currentSlide) {
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Hide all slides
    }

    // If we're on slide 5, show the popup first
    if (currentSlide === 5) {
        document.getElementById('popup').style.display = 'block'; // Show popup
    } else if (currentSlide < slides.length) {
        slides[currentSlide].style.display = 'block'; // Show the next slide
    }
}

// When the "START" button on the popup is clicked, hide the popup and go to the next slide
function startFeedback() {
    document.getElementById('popup').style.display = 'none';
    nextSlide(6);
}

// If the "START" button in the popup is clicked, call the startFeedback function
document.querySelector('.popup .btns').onclick = startFeedback;


function updateValue(value) {
    // Get all labels
    const labels = document.querySelectorAll('.range-label');
    
    // Remove active class from all labels
    labels.forEach(label => {
        label.classList.remove('active');
    });
    
    // Add active class to the current label based on slider value
    document.getElementById(`label-${value}`).classList.add('active');
}

// Set initial value for active label
updateValue(0);



function toggleOtherField(show) {
    var otherTextField = document.getElementById('otherTextField');
    if (show) {
        otherTextField.style.display = 'block';
    } else {
        otherTextField.style.display = 'none';
    }
}


// Show popup when transitioning to Slide 6
function showPopupOnSlideChange() {
    showPopup();
}

function updateFunOMeter(value) {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.classList.remove('active');
    });
    const activeEmoji = document.querySelector(`.emoji[data-value="${value}"]`);
    if (activeEmoji) {
        activeEmoji.classList.add('active');
    }
}






