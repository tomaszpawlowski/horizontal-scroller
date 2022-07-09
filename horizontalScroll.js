window.addEventListener('DOMContentLoaded', function (event) {
    var horizontallScrolls = document.getElementsByClassName('horizontalScroll');
    for (var i = 0; i < horizontallScrolls.length; i++) {
        horizontallScrolls[i].addEventListener("wheel", function (event) {
            event.preventDefault(); // prevent default will block vertical scroll, however i it's need to handle nesting scrolls
            if (event.deltaY !== 0) { this.scrollLeft += event.deltaY; }
            else { console.log("[horizontalScroll]", this, "deltaY : none value. Event:", event); }
        });
    }
});
