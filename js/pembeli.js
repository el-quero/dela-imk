// Tampilkan profil penjual
function showProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser || currentUser.type !== "buyer") {
    alert("Pengguna tidak ditemukan atau bukan pembeli.");
    return;
  }

  const profileHtml = `
        <div class="modal">
          <div class="modal-content">
            <h2>Profil Penjual</h2>
            <p><strong>Nama:</strong> ${currentUser.name}</p>
            <p><strong>Alamat:</strong> ${currentUser.address}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
            <p><strong>No Telp:</strong> ${currentUser.phone}</p>
            <button onclick="closeModal()">Tutup</button>
          </div>
        </div>
      `;
  document.body.insertAdjacentHTML("beforeend", profileHtml);
}

// Tutup modal
function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) modal.remove();
}

// Data produk sementara yang dapat ditambahkan atau diganti dengan API yang sesungguhnya
const products = [
  { id: 1, name: "Vivo", price: 2500000, image: "images/vivo.png" },
  { id: 2, name: "Oppo", price: 6000000, image: "images/oppo.png" },
  { id: 3, name: "Iphone", price: 9200000, image: "images/iphone.png" },
  { id: 4, name: "Samsung", price: 8999999, image: "images/samsung.png" },
];

// Fungsi untuk menampilkan produk
function renderProducts(filter = "") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Kosongkan daftar produk sebelumnya

  // Filter produk berdasarkan kata kunci pencarian
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Menampilkan produk yang sudah difilter
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rp. ${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productList.appendChild(productDiv);
  });
}

// Fungsi untuk menambah produk ke keranjang (keranjang hanya ditampilkan di console)
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  alert(`${product.name} telah ditambahkan ke keranjang!`);
  console.log("Keranjang:", product); // Bisa disesuaikan dengan fungsi keranjang
}

// Event listener untuk pencarian produk
document.getElementById("search").addEventListener("input", (e) => {
  renderProducts(e.target.value); // Menampilkan produk sesuai pencarian
});

// Inisialisasi tampilan produk pertama kali
renderProducts();
