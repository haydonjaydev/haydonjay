var coll = document.getElementsByClassName("nav-collapsible");
var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.getElementsByClassName("btn")[0].classList.toggle("fa-chevron-right");
        this.getElementsByClassName("btn")[0].classList.toggle("fa-chevron-down");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    }
