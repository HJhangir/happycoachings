let accdr = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accdr.length; i++) {
    accdr[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}