// Event container
let eventId = 0;

// Open and close modal functions
function openAddEventModal() {
  document.getElementById('add-event-modal').classList.remove('hidden');
}

function closeAddEventModal() {
  document.getElementById('add-event-modal').classList.add('hidden');
}

// Add event function
document.getElementById('add-event-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const eventName = document.getElementById('event-name').value;
  const eventTime = document.getElementById('event-time').value;
  const eventLocation = document.getElementById('event-location').value;

  // Create event marker
  const eventMarker = document.createElement('button');
  eventMarker.textContent = '📍';
  eventMarker.classList.add('absolute', 'cursor-pointer');
  eventMarker.style.zIndex = 10;
  eventMarker.dataset.eventName = eventName;
  eventMarker.dataset.eventTime = eventTime;
  eventMarker.dataset.eventLocation = eventLocation;

  // Add event marker to campus map
  const campusMapContainer = document.getElementById('campus-map-container');
  campusMapContainer.appendChild(eventMarker);

  // Allow event marker to be draggable
  eventMarker.draggable = true;
  eventMarker.ondragstart = function (e) {
    e.dataTransfer.setData('text', eventMarker.dataset.eventName);
  };
  eventMarker.ondragend = function (e) {
    const left = e.pageX - campusMapContainer.offsetLeft - eventMarker.offsetWidth / 2;
    const top = e.pageY - campusMapContainer.offsetTop - eventMarker.offsetHeight / 2;
    eventMarker.style.left = `${left}px`;
    eventMarker.style.top = `${top}px`;
  };

  // Show event details when clicked
  eventMarker.onclick = function () {
    alert(`Event: ${eventName}\nTime: ${eventTime}\nLocation: ${eventLocation}`);
  };

  closeAddEventModal();
});
