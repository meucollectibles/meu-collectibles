const WHATSAPP_NUMBER = "50769680686"; // tu número

const items = [
  { name: "Muichiro Tokito (Chase)", price:  40, img: "img/TokitoChase.jpg" },
  { name: "Igris (Metallic Chase)", price:  55, img: "img/igrischase.jpg" },
  { name: "Luck Voltia + (Chase)", price: 50, img: "img/Voltiax2chase.jpg" },
  { name: "Pop! Die-Cast The Joker (Chase)", price:  85, img: "img/joker_2.jpg" },
  { name: "Pop! Premium Boa Hancock on Throne",
    price: 34,
    img: "img/Boa_caja_h.jpg",
    status: "disponible",
    badge: "NEW",
    category: "One Piece" },
  { name: "Pop! Deluxe Hungry Big Mom", price: 30, img: "img/Bigmom.jpg", category: "One Piece" },
  { name: "Pop! Sugar (Scented)", price: 21, img: "img/Sugar(Scented).jpg", category: "One Piece" },
  { name: "Pop! Kuzan (Ice Block Partisan)", price: 22, img: "img/Kuzan_IceBlock_Partisan.jpg", status: "disponible", badge: "" },
  { name: "Pop! Rob Lucci with Hattori", price: 22, img: "img/RobLucci_with.jpg", category: "One Piece" },
  { name: "Pop! Marshall D. Teach", price: 18, img: "img/MarshallD_Teach.jpg", category: "One Piece" },
  { name: "Poster Usopp (Wanted)", price: 29.50, img: "img/Poster_Usopp_(Wanted).jpg", category: "One Piece" },
  { name: "Poster Roronoa Zoro (Wanted)", price: 33.50, img: "img/Poster_RoronoaZoro_(Wanted).jpg", category: "One Piece" },
  { name: "Hot Rod with Matrix 7500 PCS (Glow)", price: 48, img: "img/Hot_Rod.jpg" },
  { name: "Plus Super Saiyan 4 Goku (Dragon Fist)", price: 28, img: "img/PlusSuper_Saiyan4 .jpg" },
  { name: "Taro Sakamoto", price: 18, img: "img/Taro_Sakamoto.jpg" },
  { name: "Beetlejuice in Cardigan (Chase)", price: 29.5, img: "img/Beetlejuice.jpg" },
  { name: "Deluxe Father on Throne", price: 30, img: "img/ThroneF.jpg", category: "Full Metal Alchemist" },
  { name: "Mina Ashiro", price: 18, img: "img/Mina.jpg" },
  { name: "Mayday Parker", price:  15, img: "img/Mayday.jpg", category: "Marvel" },
  { name: "Peter Parker (Holding Backpack)", price: 20.00, img: "img/PeterP_H.jpg", category: "Marvel" },
  { name: "Mister Fantastic (Space Suit) (Fantastic Four: First Steps)", price: 25, img: "img/MisterFantastic.jpg", category: "Marvel" },
  { name: "Mister Fantastic (Fantastic Four: First Steps)", price: 20, img: "img/MisterFantastic_2.jpg", category: "Marvel" },
  { name: "H.E.R.B.I.E. (Fantastic Four: First Steps)", price: 25, img: "img/H.E.R.B.I.E.jpg", category: "Marvel" },
  { name: "Invisible Woman (Space Suit) (Fantastic Four: First Steps)", price: 25, img: "img/InvisibleWoman.jpg", category: "Marvel" },
  { name: "Invisible Woman & Franklin (Fantastic Four: First Steps)", price: 20, img: "img/invisible.jpg", category: "Marvel" },
  { name: "Human Torch (Space Suit) (Fantastic Four: First Steps)", price: 25, img: "img/HumanTorch_2.jpg", category: "Marvel" },
  { name: "Human Torch (Fantastic Four: First Steps)", price: 20, img: "img/HumanTorch_1.jpg", category: "Marvel" },
  { name: "Silver Surfer (Fantastic Four: First Steps)", price: 20, img: "img/SilverSurfer.jpg", category: "Marvel" },
  { name: "Super Galactus (Fantastic Four: First Steps)", price: 35, img: "img/SuperGalactus.jpg", category: "Marvel" },
  { name: "The Thing (Fantastic Four: First Steps)", price: 20, img: "img/TheThing_1.jpg", category: "Marvel" },
  { name: "The Thing (Space Suit) (Fantastic Four: First Steps)", price: 25, img: "img/TheThing_2.jpg", category: "Marvel" },
  { name: "Hashirama & Tobirama 2-Pack", price:  32, img: "img/hokages.jpg" },
  { name: "Battle Levi", price:  19, img: "img/Levi.jpg" },
  
  
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
document.getElementById("year").textContent = new Date().getFullYear();

function render(list) {
  grid.innerHTML = "";
  list.forEach(item => {
    const msg = `Hola Meu, quiero comprar: ${item.name} por $${item.price} USD. ¿Sigue disponible?`;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    const badgeHTML = item.badge ? `<div class="badge ${item.badge.toLowerCase()}">${item.badge}</div>` : "";
    const soldOverlay = item.status === "vendido" ? `<div class="sold-overlay">VENDIDO</div>` : "";
    const actionHTML = item.status === "vendido"
      ? `<button class="btn disabled" disabled>No disponible</button>`
      : `<a class="btn" href="${link}" target="_blank">Comprar por WhatsApp</a>`;

    grid.innerHTML += `
      <div class="card">
        ${badgeHTML}
        ${soldOverlay}
        <img src="${item.img}" alt="${item.name}">
        <div class="content">
          <h3>${item.name}</h3>
          <p class="price">$${item.price} USD</p>
          ${actionHTML}
        </div>
      </div>
    `;
  });
}

render(items);

search.addEventListener("input", e => {
  const text = e.target.value.toLowerCase();
  render(items.filter(i => i.name.toLowerCase().includes(text)));
});

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function applyFilters() {
  let filtered = [...items];

  const category = categoryFilter.value;
  const priceOrder = priceFilter.value;
  const text = search.value.toLowerCase();

  if (category !== "all") {
    filtered = filtered.filter(i => i.category === category);
  }

  if (text) {
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(text)
    );
  }

  if (priceOrder === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (priceOrder === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  render(filtered);
}

search.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);

