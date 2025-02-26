document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-shadow');
        } else {
            navbar.classList.remove('navbar-shadow');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); //initial check incase the page loads scrolled.
});