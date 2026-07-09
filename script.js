// ==============================
// Data Produk
// ==============================
const products = [
  {
    id: 1,
    nama: "Industrial Control Panel",
    kategori: "Elektronik",
    harga: 18500000,
    gambar: "assets/images/product-electronic-control-panel.svg",
    deskripsi: "Panel kontrol industri untuk monitoring dan pengaturan sistem produksi.",
    spesifikasi: [
      "Material box metal powder coating",
      "Support PLC dan relay kontrol",
      "Tegangan kerja 220V - 380V",
      "Cocok untuk pabrik, gudang, dan mesin produksi",
    ],
  },
  {
    id: 2,
    nama: "Smart Sensor Module",
    kategori: "Elektronik",
    harga: 2450000,
    gambar: "assets/images/product-smart-sensor.svg",
    deskripsi: "Modul sensor pintar untuk membaca suhu, kelembapan, dan status perangkat.",
    spesifikasi: [
      "Koneksi digital dan analog",
      "Rentang suhu -20 sampai 80 derajat Celsius",
      "Kompatibel dengan sistem IoT industri",
      "Housing ringkas dan mudah dipasang",
    ],
  },
  {
    id: 3,
    nama: "CNC Compact Machine",
    kategori: "Mesin",
    harga: 96500000,
    gambar: "assets/images/product-cnc-machine.svg",
    deskripsi: "Mesin CNC compact untuk kebutuhan produksi presisi skala kecil hingga menengah.",
    spesifikasi: [
      "Area kerja 600 x 400 mm",
      "Motor spindle high precision",
      "Kontrol digital dengan panel operator",
      "Ideal untuk prototyping dan produksi custom",
    ],
  },
  {
    id: 4,
    nama: "Packaging Sealer Pro",
    kategori: "Mesin",
    harga: 12800000,
    gambar: "assets/images/product-packaging-sealer.svg",
    deskripsi: "Mesin sealer kemasan untuk lini produksi makanan, farmasi, dan manufaktur.",
    spesifikasi: [
      "Kecepatan sealing stabil",
      "Material stainless steel",
      "Pengaturan suhu digital",
      "Dapat digunakan untuk berbagai ukuran kemasan",
    ],
  },
  {
    id: 5,
    nama: "Executive Workstation Desk",
    kategori: "Furniture",
    harga: 6750000,
    gambar: "assets/images/product-workstation-desk.svg",
    deskripsi: "Meja kerja modular untuk kantor modern, coworking space, dan ruang manajemen.",
    spesifikasi: [
      "Top table engineered wood premium",
      "Rangka metal kokoh",
      "Cable management terintegrasi",
      "Pilihan konfigurasi single dan cluster",
    ],
  },
  {
    id: 6,
    nama: "Ergo Mesh Office Chair",
    kategori: "Furniture",
    harga: 3200000,
    gambar: "assets/images/product-office-chair.svg",
    deskripsi: "Kursi kerja ergonomis dengan sandaran mesh untuk penggunaan kantor harian.",
    spesifikasi: [
      "Adjustable height dan armrest",
      "Lumbar support ergonomis",
      "Roda nylon halus",
      "Garansi struktur hingga 2 tahun",
    ],
  },
  {
    id: 7,
    nama: "Hydraulic Lift Table",
    kategori: "Alat Industri",
    harga: 21400000,
    gambar: "assets/images/product-hydraulic-lift.svg",
    deskripsi: "Meja angkat hidrolik untuk pemindahan barang berat di area gudang dan produksi.",
    spesifikasi: [
      "Kapasitas angkat hingga 1000 kg",
      "Sistem hidrolik stabil",
      "Roda heavy-duty dengan rem",
      "Platform anti-slip",
    ],
  },
  {
    id: 8,
    nama: "Warehouse Safety Barrier",
    kategori: "Alat Industri",
    harga: 4850000,
    gambar: "assets/images/product-safety-barrier.svg",
    deskripsi: "Barrier keselamatan untuk memisahkan area kerja, jalur forklift, dan zona risiko.",
    spesifikasi: [
      "Material steel pipe tebal",
      "Finishing powder coating kuning",
      "Mudah dipasang ke lantai beton",
      "Cocok untuk gudang dan pabrik",
    ],
  },
  {
    id: 9,
    nama: "Precision Bearing Set",
    kategori: "Sparepart",
    harga: 1750000,
    gambar: "assets/images/product-bearing-set.svg",
    deskripsi: "Set bearing presisi untuk kebutuhan maintenance mesin produksi dan conveyor.",
    spesifikasi: [
      "Material chrome steel",
      "Rotasi halus dan tahan panas",
      "Tersedia berbagai ukuran",
      "Cocok untuk perawatan rutin mesin",
    ],
  },
  {
    id: 10,
    nama: "Conveyor Belt Spare Kit",
    kategori: "Sparepart",
    harga: 8350000,
    gambar: "assets/images/product-conveyor-kit.svg",
    deskripsi: "Paket sparepart conveyor berisi belt, roller, bracket, dan komponen pendukung.",
    spesifikasi: [
      "Belt karet industri",
      "Roller galvanis tahan aus",
      "Bracket modular",
      "Dapat disesuaikan dengan layout conveyor",
    ],
  },
  {
    id: 11,
    nama: "Industrial Power Inverter",
    kategori: "Elektronik",
    harga: 14800000,
    gambar: "assets/images/product-power-inverter.svg",
    deskripsi: "Inverter daya untuk mengatur kecepatan motor dan efisiensi energi mesin industri.",
    spesifikasi: [
      "Output stabil untuk motor 3 phase",
      "Proteksi overload dan overheat",
      "Panel kontrol digital",
      "Mendukung instalasi kabinet listrik",
    ],
  },
  {
    id: 12,
    nama: "Modular Storage Cabinet",
    kategori: "Furniture",
    harga: 5400000,
    gambar: "assets/images/product-storage-cabinet.svg",
    deskripsi: "Kabinet penyimpanan modular untuk dokumen, sparepart ringan, dan kebutuhan kantor.",
    spesifikasi: [
      "Material steel plate",
      "Sistem kunci ganda",
      "Rak adjustable",
      "Finishing tahan gores",
    ],
  },
];

// ==============================
// Elemen DOM Utama
// ==============================
const siteHeader = document.getElementById("siteHeader");
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar__link");
const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-button");
const productCount = document.getElementById("productCount");
const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const modalSalesButton = document.getElementById("modalSalesButton");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const revealElements = document.querySelectorAll(".reveal");
const pageSections = document.querySelectorAll("main section[id]");

let activeCategory = "Semua";
let searchKeyword = "";

// ==============================
// Helper Format Harga
// ==============================
function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

// ==============================
// Render Produk
// ==============================
function renderProducts() {
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Semua" || product.kategori === activeCategory;
    const matchesSearch = product.nama.toLowerCase().includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  productCount.textContent = `Menampilkan ${filteredProducts.length} produk`;

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3>Produk tidak ditemukan</h3>
        <p>Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      return `
        <article class="product-card reveal visible">
          <img src="${product.gambar}" alt="Foto ${product.nama}" class="product-card__image">
          <div class="product-card__body">
            <span class="product-card__category">${product.kategori}</span>
            <h3>${product.nama}</h3>
            <p class="product-card__description">${product.deskripsi}</p>
            <p class="product-card__price">${formatRupiah(product.harga)}</p>
            <button class="product-card__button" type="button" data-product-id="${product.id}">
              Detail
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

// ==============================
// Filter Produk
// ==============================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.category;
    renderProducts();
  });
});

// ==============================
// Search Produk Realtime
// ==============================
productSearch.addEventListener("input", (event) => {
  searchKeyword = event.target.value.trim();
  renderProducts();
});

// ==============================
// Modal Detail Produk
// ==============================
function openProductModal(productId) {
  const product = products.find((item) => item.id === Number(productId));

  if (!product) return;

  modalImage.src = product.gambar;
  modalImage.alt = `Foto ${product.nama}`;
  modalCategory.textContent = product.kategori;
  modalTitle.textContent = product.nama;
  modalPrice.textContent = formatRupiah(product.harga);
  modalDescription.textContent = product.deskripsi;
  modalSpecs.innerHTML = product.spesifikasi.map((spec) => `<li>${spec}</li>`).join("");

  productModal.classList.add("show");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.remove("show");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

productGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-product-id]");

  if (detailButton) {
    openProductModal(detailButton.dataset.productId);
  }
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProductModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && productModal.classList.contains("show")) {
    closeProductModal();
  }
});

modalSalesButton.addEventListener("click", () => {
  closeProductModal();
});

// ==============================
// Navbar Mobile dan Smooth Scroll
// ==============================
navbarToggle.addEventListener("click", () => {
  const isOpen = navbarMenu.classList.toggle("show");

  navbarToggle.classList.toggle("is-open", isOpen);
  navbarToggle.setAttribute("aria-expanded", isOpen.toString());
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    event.preventDefault();

    const headerHeight = siteHeader.offsetHeight;
    const targetTop = targetElement.offsetTop - headerHeight + 2;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    navbarMenu.classList.remove("show");
    navbarToggle.classList.remove("is-open");
    navbarToggle.setAttribute("aria-expanded", "false");
  });
});

// ==============================
// Sticky Navbar, Active Menu, Back To Top
// ==============================
function setActiveMenu() {
  const scrollPosition = window.scrollY + siteHeader.offsetHeight + 90;

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
      });
    }
  });
}

function handleScroll() {
  siteHeader.classList.toggle("is-sticky", window.scrollY > 24);
  backToTop.classList.toggle("show", window.scrollY > 560);
  setActiveMenu();
}

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ==============================
// Fade Animation Saat Elemen Muncul
// ==============================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// ==============================
// Form Kontak
// ==============================
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent = "Terima kasih. Tim sales kami akan segera menghubungi Anda.";
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 4500);
});

// ==============================
// Inisialisasi Halaman
// ==============================
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", () => {
  renderProducts();
  handleScroll();
});
