const borough = window.location.pathname.split("/").pop().slice(0, -10);
const url = `https://data.cityofnewyork.us/resource/gpwd-npar.json?borough=${borough}&$limit=10000&$$app_token=IpDiRB5B4jLhy6uFtjQ5pATv3`;

const button = document.getElementById("get-data-button");
button.addEventListener("click", fetchData);

function fetchData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(row => row.location && row.location.coordinates);
      const randomData = getRandomData(filteredData, 4);
      displayData(randomData);
    })
    .catch(error => console.error(error));
}

function getRandomData(data, num) {
  const randomIndexes = new Set();
  while (randomIndexes.size < num && randomIndexes.size < data.length) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomIndexes.add(randomIndex);
  }
  return Array.from(randomIndexes).map(index => data[index]);
}

function displayData(data) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";
  data.forEach(row => {
    const coordinates = row.location.coordinates;
    const latitude = coordinates[1];
    const longitude = coordinates[0];
    const div = document.createElement("div");
    div.textContent = `${latitude}, ${longitude}`;
    container.appendChild(div);
  });
}
