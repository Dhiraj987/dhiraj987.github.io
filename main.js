

// scroll effect for the navigation bar
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("for_sticky", window.scrollY > 0)
})
