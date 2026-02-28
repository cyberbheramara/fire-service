const fireService = [
  { district: "Dhaka", phone: "029555555" },
  { district: "Chattogram", phone: "031555555" },
  { district: "Rajshahi", phone: "072155555" },
  { district: "Khulna", phone: "041555555" },
  { district: "Sylhet", phone: "082155555" }
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function showData(data) {
  list.innerHTML = "";
  data.forEach(item => {
    list.innerHTML += `
      <div class="card">
        <h3>${item.district}</h3>
        <p>${item.phone}</p>
        <a href="tel:${item.phone}" class="call">📞 Call</a>
      </div>
    `;
  });
}

showData(fireService);

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = fireService.filter(d =>
    d.district.toLowerCase().includes(value)
  );
  showData(filtered);
});