window.onscroll = function() {
    aboutFunction()
    cbFunction()
    pgFunction()
};

function aboutFunction() {
    if (document.documentElement.scrollTop > 275) {
        document.getElementById("A1").className = "r1 col-9 w3-animate-bottom";
    }
}

function cbFunction() {
    if (document.documentElement.scrollTop > 90) {
        document.getElementById("CB1").className = "ocm-center w3-animate-right";
    }
}

function pgFunction() {
    if (document.documentElement.scrollTop > 1070) {
        document.getElementById("PG1").className = "row w3-animate-left";
    }
}


