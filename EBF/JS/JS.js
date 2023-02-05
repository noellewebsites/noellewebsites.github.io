/* Enforce HTTPS */
if (window.location.protocol === "http:") {
    window.location.href = window.location.href.replace(window.location.protocol,"https:");
}

/* Fixed Menu Settings */
function fixedMenu(x) {
    x.classList.toggle("change");
}

function openSlideMenu() {
    document.getElementById('myNav').classList.toggle("open");
}

/* Email Signup Modal */
var suButton = dcoument.getElementById("SU1");
var emModal = document.getElementById("EM1");
var emClose = document.getElementById("EMC");
var emCancel = document.getElementById("CN1");
var emForm = document.getElementById("EF1");
var opButton = document.getElementById("OP1");

/* Open form on button click */
opButton.onclick = function() {
    emForm.style.display = "block";
    emForm.className = "form-popup col-5 animate_animated animate_zoomIn";
}

/* Open modal on button click */
suButton.onclick = function() {
    emModal.style.display = "block";
    emModal.className = "email-modal animate_animated animate_zoomIn";
}

/* Close Modal on button click */
emClose.onclick = function() {
    emModal.style.display = "none";
}

/* Close modal with cancel button* */
emCancel.onclick = function() {
    emModal.style.display = "none";
}

//Close modal if user clicks outside
window.onclick = function(event) {
    if (event.target == emModal) {
        emModal.style.display = "none";
    }
}