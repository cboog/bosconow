// Select all interactive circles and the tooltip element
const circles = document.querySelectorAll('.circle');
const tooltip = document.getElementById('tooltip');

// Add event listeners to each circle
circles.forEach(circle => {
    circle.addEventListener('mouseover', (e) => {
        // Get location name from the data attribute
        const locationName = circle.getAttribute('data-location');
        tooltip.textContent = locationName;

        // Show tooltip
        tooltip.style.display = 'block';
        tooltip.style.top = `${e.pageY + 10}px`; // Position tooltip below the mouse
        tooltip.style.left = `${e.pageX + 10}px`; // Position tooltip to the right of the mouse
    });

    circle.addEventListener('mousemove', (e) => {
        // Update tooltip position as the mouse moves
        tooltip.style.top = `${e.pageY + 10}px`;
        tooltip.style.left = `${e.pageX + 10}px`;
    });

    circle.addEventListener('mouseout', () => {
        // Hide tooltip when the mouse leaves the circle
        tooltip.style.display = 'none';
    });
});

