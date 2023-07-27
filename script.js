const data = {
  title: "Event Title",
  image: "https://example.com/image.jpg",
  description: "Description of the event.",
  date: "July 27, 2023",
  location: "City, Country",
  coordinates: "Latitude: 12.345, Longitude: 67.890",
  casualties: "X killed, Y injured",
  participants: "A, B, C",
  outcome: "Result of the event.",
};

// Function to fill in the infobox with data
function fillInfobox(data) {
  document.getElementById("title").textContent = data.title;
  document.getElementById("image").src = data.image;
  document.getElementById("description").textContent = data.description;
  document.getElementById("date").textContent = data.date;
  document.getElementById("location").textContent = data.location;
  document.getElementById("coordinates").textContent = data.coordinates;
  document.getElementById("casualties").textContent = data.casualties;
  document.getElementById("participants").textContent = data.participants;
  document.getElementById("outcome").textContent = data.outcome;
}

// Call the function to populate the infobox
fillInfobox(data);
