// Open the Add Event Modal
function openAddEventModal() {
  document.getElementById('add-event-modal').classList.remove('hidden');
}

// Close the Add Event Modal
function closeAddEventModal() {
  document.getElementById('add-event-modal').classList.add('hidden');
}

// Handle the form submission
document.getElementById('add-event-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const eventName = document.getElementById('event-name').value;
  const eventTime = document.getElementById('event-time').value;
  const eventLocation = document.getElementById('event-location').value;

  if (eventName && eventTime && eventLocation) {
    // Create the event marker (📍)
    const eventMarker = document.createElement('button');
    eventMarker.textContent = '📍';
    eventMarker.classList.add('absolute', 'cursor-pointer');
    eventMarker.style.zIndex = 10;
    eventMarker.style.left = '50%'; // Default position (centered)
    eventMarker.style.top = '50%';  // Default position (centered)
    eventMarker.dataset.eventName = eventName;
    eventMarker.dataset.eventTime = eventTime;
    eventMarker.dataset.eventLocation = eventLocation;

    // Add event marker to the map container
    const campusMapContainer = document.getElementById('campus-map-container');
    campusMapContainer.appendChild(eventMarker);

    // Make the event marker draggable
    eventMarker.draggable = true;
    eventMarker.ondragstart = function(e) {
      e.dataTransfer.setData('text', eventMarker.dataset.eventName);
    };

    // Set position after drag
    eventMarker.ondragend = function(e) {
      const left = e.pageX - campusMapContainer.offsetLeft - eventMarker.offsetWidth / 2;
      const top = e.pageY - campusMapContainer.offsetTop - eventMarker.offsetHeight / 2;
      eventMarker.style.left = `${left}px`;
      eventMarker.style.top = `${top}px`;
    };

    // Display event details when clicked
    eventMarker.onclick = function() {
      alert(`Event: ${eventName}\nTime: ${eventTime}\nLocation: ${eventLocation}`);
    };

    // Close the modal after saving the event
    closeAddEventModal();
  } else {
    alert('Please fill in all the fields.');
  }
});
