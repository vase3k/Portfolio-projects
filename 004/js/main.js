window.addEventListener('scroll', function () {
    this.document.getElementById('header-nav').classList.toggle('headernav-scroll', this.window.scrollY > 135);
});