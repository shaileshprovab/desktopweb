$(window).resize(function () {
  changePage();
});

function changePage() {
    var windowWidth = screen.width;
        var path = window.location.pathname;
        var page = path.split("/").pop();
    if(windowWidth > 767) {
        if(page=="game_mobile.html"){
            location.replace('game_desktop.html');
        }
        if(page=="lobby_mobile.html"){
            location.replace('lobby_desktop.html');
        }
        /*if(page != 'lobby_desktop.html') {
        location.replace('lobby_desktop.html');
        }*/
    } else {    //Less then 767
        if(page=="game_desktop.html"){
            location.replace('game_mobile.html');
        }
        if(page=="lobby_desktop.html"){
            location.replace('lobby_mobile.html');
        }
        /*if(page != 'lobby_mobile.html') {
            location.replace('lobby_mobile.html');
        }*/
    }
}
changePage();