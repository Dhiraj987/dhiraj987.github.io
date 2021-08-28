

// scroll effect for the navigation bar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("for_sticky", window.scrollY > 0)

    header.classList.toggle("nav_bar_with_shadow", this.window.scrollY > 740)
})
