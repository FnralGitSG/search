// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Load Data (can be JSON or CSV)
let dataset = [];

// Example: JSON file
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    dataset = data;
    document.getElementById("summary").innerText = 
      `Total items: ${dataset.length}`;
  });

// Search Functionality
document.getElementById("searchBox").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = dataset.filter(item => 
    item.name.toLowerCase().includes(query)
  );

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = `${item.name} - ${item.value}`;
    resultsDiv.appendChild(div);
  });
});
