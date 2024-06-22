document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const siblings = this.parentNode.children;

            for (let i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove('selected');
            }

            for (let i = 0; i < value; i++) {
                siblings[i].classList.add('selected');
            }
        });
    });
});
