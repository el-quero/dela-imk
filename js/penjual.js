// Tampilkan profil penjual
function showProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser || currentUser.type !== "seller") {
    alert("Pengguna tidak ditemukan atau bukan penjual.");
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
          <p><strong>Jenis Produk:</strong> ${currentUser.productType}</p>
          <p><strong>Kapasitas:</strong> ${currentUser.capacity} produk</p>
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

// Fungsi untuk menambah produk
function addProduct() {
  alert("Fitur tambah produk akan ditambahkan di sini.");
  // Anda dapat menambahkan form atau modal untuk input data produk baru
}

// Fungsi untuk melihat pesanan
function viewOrders() {
  alert("Fitur melihat pesanan akan ditambahkan di sini.");
  // Tampilkan pesanan dari database lokal atau backend
}

// Fungsi untuk mengelola stok
function manageStock() {
  alert("Fitur mengelola stok akan ditambahkan di sini.");
  // Tambahkan logika untuk melihat atau mengedit stok produk
}

// Fungsi untuk membuka chat
function openChat() {
  alert("Fitur chat akan ditambahkan di sini.");
  // Tambahkan logika untuk membuka fitur chat
}

// // Periksa apakah ada pengguna yang login
// function checkUser() {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   if (!currentUser || currentUser.type !== "seller") {
//     alert("Anda belum login atau tidak memiliki akses ke halaman ini.");
//     window.location.href = "index.html";
//   }
// }

// Inisialisasi halaman
checkUser();
