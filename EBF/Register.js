/* Email Signup Modal */
var emForm = document.getElementById("EF1");
var opButton = document.getElementById("OP1");
var closeButton = document.getElementById("CB1");

/* Open form on button click */
opButton.onclick = function() {
    emForm.style.display = "block";
    document.getElementById("EF1").className = "form-popup col-5 animate_animated animate_zoomIn";
}

//Close form on button click
closeButton.onclick = function() {
    emForm.style.display = "none";
}

//Close modal if user clicks outside
window.onclick = function(event) {
    if (event.target == emForm) {
        emForm.style.display = "none";
    }
}