window.onscroll = function() {
    aboutFunction()
    cbFunction()
    fqFunction()
    cvFunction()
    adFunction()
};

function aboutFunction() {
    if (document.documentElement.scrollTop > 185) {
        document.getElementById("A1").className = "r1 container-o col-11 w3-animate-bottom";
    }
}

function cbFunction() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("CB1").className = "ocm-center w3-animate-right";
    }
}

function cvFunction() {
    if (document.documentElement.scrollTop > 500) {
        document.getElementById("CV1").className = "r1 container-o col-11 w3-animate-bottom";
    }
}

function fqFunction() {
    if (document.documentElement.scrollTop > 825) {
        document.getElementById("FAQ1").className = "r1 col-7 w3-animate-bottom";
    }
}

function adFunction() {
    if (document.documentElement.scrollTop > 975) {
        document.getElementById("C1").className = "r1 gmi col-6 w3-animate-left";
    }
}

