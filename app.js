const WHATSAPP_NUMBER = "50769680686"; // tu número

const items = [
  { name: "Pop! Premium Boa Hancock on Throne", price: 34, img: "img/Boa_caja_h.jpg" },
  { name: "Pop! Kuzan (Ice Block Partisan)", price: 24, img: "img/Kuzan_IceBlock_Partisan.jpg" },
  { name: "Pop! Rob Lucci with Hattori", price: 20, img: "img/RobLucci_with.jpg" },
  { name: "Pop! Marshall D. Teach", price: 18, img: "img/MarshallD_Teach.jpg" },
  { name: "Poster Usopp (Wanted)", price: 29.50, img: "img/Poster_Usopp_(Wanted).jpg" },
  { name: "Poster Roronoa Zoro (Wanted)", price: 33.50, img: "img/Poster_RoronoaZoro_(Wanted).jpg" },
  { name: "Peter Parker (Holding Backpack)", price: 20.00, img: "img/PeterP_H.jpg" },
  { name: "Hot Rod with Matrix (Glow)", price: 48, img: "img/Hot_Rod.jpg" },
  { name: "Plus Super Saiyan 4 Goku (Dragon Fist)", price: 28, img: "img/PlusSuper_Saiyan4 .jpg" },
  { name: "Taro Sakamoto", price: 18, img: "img/Taro_Sakamoto.jpg" },
  { name: "Beetlejuice in Cardigan (Chase)", price: 29.5, img: "img/Beetlejuice.jpg" },
  
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
document.getElementById("year").textContent = new Date().getFullYear();

function render(list) {
  grid.innerHTML = "";
  list.forEach(item => {
    const msg = `Hola Meu, quiero comprar: ${item.name} por $${item.price}. ¿Sigue disponible?`;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    grid.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.name}">
        <div class="content">
          <h3>${item.name}</h3>
          <p class="price">$${item.price} USD</p>
          <a class="btn" href="${link}" target="_blank">Comprar por WhatsApp</a>
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
