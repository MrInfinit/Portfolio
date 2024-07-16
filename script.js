document.addEventListener('DOMContentLoaded', function () {
const popupOverlay = document.getElementById('popupOverlay');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const Darkmode = document.getElementById('dark-mode');
    // Function to open the popup

function openPopup() {
     popupOverlay.style.display = 'block';
}

function dark() {
    var body = document.body;
    body.classList.toggle('dark-mode');

}
Darkmode.addEventListener('click', dark)

// Function to close the popup

function closePopupFunc() {
    popupOverlay.style.display = 'none';
}

    // Event listeners
    // Trigger the popup to open (you can call this function on a button click or any other event)

    popup.addEventListener('click', openPopup);

    // Close the popup when the close button is clicked

    closePopup.addEventListener('click', closePopupFunc);
 
    // Close the popup when clicking outside the popup content

    popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
        closePopupFunc();
    }
});


// You can customize and expand these functions based on your specific requirements.
});