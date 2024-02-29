// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//pagination
document.addEventListener("DOMContentLoaded", function () {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const pagination = document.getElementById("pagination");

  const itemsPerPage = 6; // Jumlah item per halaman
  let currentPage = 1; // Halaman awal

  // Fungsi untuk menampilkan item pada halaman yang dipilih
  function displayItems(pageNumber) {
    // Menampilkan item pada halaman yang dipilih
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    const itemsToShow = document.querySelectorAll(".project-item");
    itemsToShow.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    // Memperbarui tampilan pagination
    updatePagination(pageNumber);
  }

  // Fungsi untuk memperbarui tampilan pagination
  function updatePagination(currentPage) {
    // Hapus seluruh elemen pagination
    pagination.innerHTML = "";

    // Hitung jumlah halaman berdasarkan jumlah item
    const numPages = Math.ceil(
      document.querySelectorAll(".project-item").length / itemsPerPage
    );

    // Tentukan rentang angka pagination yang akan ditampilkan (maksimal empat angka)
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(numPages, startPage + 3);

    // Buat tombol pagination untuk setiap halaman dalam rentang yang ditentukan
    for (let i = startPage; i <= endPage; i++) {
      const pageLink = document.createElement("a");
      pageLink.textContent = i;
      pageLink.href = "#";
      pageLink.classList.add("pagination-button");
      if (i === currentPage) {
        pageLink.classList.add("active");
      }
      pageLink.addEventListener("click", function () {
        currentPage = i;
        displayItems(currentPage);
      });
      pagination.appendChild(pageLink);
    }
  }

  // Handler untuk tombol "Previous"
  prevPageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayItems(currentPage);
    }
  });

  // Handler untuk tombol "Next"
  nextPageBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const numPages = Math.ceil(
      document.querySelectorAll(".project-item").length / itemsPerPage
    );
    if (currentPage < numPages) {
      currentPage++;
      displayItems(currentPage);
    }
  });

  // Tampilkan halaman pertama saat halaman dimuat
  displayItems(currentPage);
});

//whatsapp
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai input nama, email, dan pesan
    var namePribadi = document.getElementById("name-pribadi").value; // Perbaikan disini
    var namePerusahaan = document.getElementById("name-perusahaan").value; // Perbaikan disini
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Nomor WhatsApp Anda
    var phoneNumber = "6281283746577"; // Ganti dengan nomor WhatsApp Anda

    // Menghasilkan pesan WhatsApp
    var whatsappMessage =
      "Nama pribadi: " +
      namePribadi +
      "\nNama perusahaan: " +
      namePerusahaan +
      "\nEmail: " +
      email +
      "\nPesan: " +
      message;

    // Membuka aplikasi WhatsApp dengan pesan yang disiapkan
    window.open(
      "https://api.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(whatsappMessage),
      "_blank"
    );
  });
