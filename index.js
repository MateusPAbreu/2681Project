let navbarCount = 0; // navbarCount will be used to keep track of which state the navbar is in, hidden or not

function displayNavbar(){
    document.getElementById("navbar").style.display = "block";
    navbarCount = 1;
}

function hideNavbar(){
    document.getElementById("navbar").style.display = "none";
    navbarCount = 0;
}

function callNavbar(){
    if(navbarCount == 0){
        displayNavbar();
    }else{
        hideNavbar();
    }
}
