// Database produk
const products = [
  { id: 1, name: "Vivo", price: 2500000, image: "images/vivo.png" },
  { id: 2, name: "Oppo", price: 6000000, image: "images/oppo.png" },
  { id: 3, name: "Iphone", price: 9200000, image: "images/iphone.png" },
  { id: 4, name: "Samsung", price: 8999999, image: "images/samsung.png" },
];

// Render produk
function renderProducts(filter = "") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rp. ${product.price.toLocaleString()}</p>
        <button>Add to Cart</button>
      `;
    productList.appendChild(productDiv);
  });
}

// Event pencarian
document.getElementById("search").addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

// Tampilkan opsi registrasi
document.getElementById("register").addEventListener("click", () => {
  const modalHtml = `
      <div class="modal">
        <div class="modal-content">
          <h2>Pilih Jenis Registrasi</h2>
          <button id="registerBuyer">Registrasi Pembeli</button>
          <button id="registerSeller">Registrasi Penjual</button>
          <button id="closeModal">Batal</button>
        </div>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  document.getElementById("registerBuyer").addEventListener("click", () => {
    showRegisterForm("buyer");
  });
  document.getElementById("registerSeller").addEventListener("click", () => {
    showRegisterForm("seller");
  });
  document.getElementById("closeModal").addEventListener("click", () => {
    closeModal();
  });
});

// Tampilkan form registrasi
function showRegisterForm(type) {
  closeModal();

  const formHtml = `
      <div class="modal">
        <div class="modal-content">
          <h2>Form Registrasi ${type === "buyer" ? "Pembeli" : "Penjual"}</h2>
          <form id="registerForm">
            <label>Nama: <input type="text" id="name" required></label><br>
            <label>Alamat: <input type="text" id="address" required></label><br>
            <label>Email: <input type="email" id="email" required></label><br>
            <label>No Telp: <input type="text" id="phone" required></label><br>
            ${
              type === "seller"
                ? `
                <label>Jenis Produk: <input type="text" id="productType" required></label><br>
                <label>Kapasitas: <input type="number" id="capacity" required></label><br>
              `
                : ""
            }
            <button type="submit">Masuk</button>
          </form>
          <button id="closeModal">Batal</button>
        </div>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", formHtml);

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (type === "buyer") registerBuyer();
    else registerSeller();
  });
  document.getElementById("closeModal").addEventListener("click", closeModal);
}

// Registrasi pembeli
function registerBuyer() {
  const buyer = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  // Simpan pembeli dan arahkan ke halaman pembeli
  console.log("Registrasi pembeli:", buyer);
  alert("Registrasi sebagai pembeli berhasil!");
  window.location.href = "pembeli.html";
}

// Registrasi penjual
function registerSeller() {
  const seller = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    productType: document.getElementById("productType").value,
    capacity: document.getElementById("capacity").value,
  };

  // Simpan penjual dan arahkan ke halaman penjual
  console.log("Registrasi penjual:", seller);
  alert("Registrasi sebagai penjual berhasil!");
  window.location.href = "penjual.html";
}

// Tutup modal
function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) modal.remove();
}

// Registrasi pembeli
function registerBuyer() {
  const buyer = {
    type: "buyer", // Menandakan pengguna adalah pembeli
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  // Simpan data pembeli ke Local Storage
  localStorage.setItem("currentUser", JSON.stringify(buyer));

  // Arahkan ke halaman pembeli
  alert("Registrasi sebagai pembeli berhasil!");
  window.location.href = "pembeli.html";
}

// Registrasi penjual
function registerSeller() {
  const seller = {
    type: "seller", // Menandakan pengguna adalah penjual
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    productType: document.getElementById("productType").value,
    capacity: document.getElementById("capacity").value,
  };

  // Simpan data penjual ke Local Storage
  localStorage.setItem("currentUser", JSON.stringify(seller));

  // Arahkan ke halaman penjual
  alert("Registrasi sebagai penjual berhasil!");
  window.location.href = "penjual.html";
}

// Inisialisasi halaman
renderProducts();
