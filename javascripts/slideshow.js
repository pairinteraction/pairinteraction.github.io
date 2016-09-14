var slideshow = {
    idx: 0,

    start: function () {
        this.show(0);
    },

    step: function (n) {
        this.show(this.idx += n);
    },

    show: function(n) {
        var slides = document.getElementsByClassName("slide");
        this.idx = Math.abs(n % slides.length);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[this.idx].style.display = "block";
    }
}
