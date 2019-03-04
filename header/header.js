window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("header").className = "header-h";
        document.getElementById("tab").className = "tabop-h";
        document.scrollbar.style.display = "block";

    } else {
        document.getElementById("header").className = "header";
        document.getElementById("tab").className = "tabop";
        document.scrollbar.style.display = "none";
    }
}



window.innerWidth = function() {myFunction1()};

function myFunction1() {
    if (window.innerWidth < 400 || document.body.clientWidth < 400 ) {
        document.getElementById("header").style.height = "100px";
    } else {
        document.getElementById("header").style.height = "60px";
    }
}
