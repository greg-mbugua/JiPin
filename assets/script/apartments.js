function myFunction() {
    document.getElementById("loc").classList.toggle("show");
}
window.onclick = function(_event) {
    if (!_event.targret.matched('.dropbtn')) {
        var listings = document.getElementsByName("list")
        var i;
        for (i = 0; i < listings.length; i++){
            var openListings = listings[i];
            if (openListings.classList.contains('show')){
                openListings.classList.remove('show');
            }
        }

    }
}