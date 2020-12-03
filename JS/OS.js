window.onscroll = function() {
    aboutFunction()
    cbFunction()
    pgFunction()
    cvFunction()
};

function aboutFunction() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("A1").className = "r1 container-o col-9 w3-animate-bottom";
    }
}

function cbFunction() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("CB1").className = "ocm-center w3-animate-right";
    }
}

function cvFunction() {
    if (document.documentElement.scrollTop > 700) {
        document.getElementById("CV1").className = "r1 container-o col-9 w3-animate-bottom";
    }
}

function pgFunction() {
    if (document.documentElement.scrollTop > 1400) {
        document.getElementById("PG1").className = "row w3-animate-left";
    }
}


