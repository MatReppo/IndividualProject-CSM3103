document.addEventListener('DOMContentLoaded', function() {
    const statement = document.getElementById('floating-statement');

    function getRandomPosition() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const elementWidth = statement.clientWidth;
        const elementHeight = statement.clientHeight;

        const randomX = Math.random() * (screenWidth - elementWidth);
        const randomY = Math.random() * (screenHeight - elementHeight);

        return { x: randomX, y: randomY };
    }

    function flyAround() {
        const newPosition = getRandomPosition();
        statement.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;

        setTimeout(flyAround, 500); // Change position every 2 seconds
    }

    flyAround();
});