// 🌍 TRANSLATIONS
const translations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",
    "hero-title": "Mewujudkan Arsitektur Bernilai Seni & Fungsional",
    "hero-desc":
      "Kami merancang ruang yang hidup, indah, dan berkelanjutan untuk masa depan yang lebih baik.",
    "hero-btn": "Lihat Proyek Kami",
    "hero-btn2": "Konsultasi Gratis",
    "projects-label": "Proyek Unggulan",
    "projects-title": "Karya Terbaru Kami",
    "projects-subtitle":
      "Eksplorasi inovasi dalam setiap desain yang kami ciptakan",
    "proj1-title": "Tropical Modern Villa",
    "proj1-desc": "Bali, Indonesia – 2024",
    "proj2-title": "Minimalist Family House",
    "proj2-desc": "Bandung, Indonesia – 2023",
    "proj3-title": "Urban Nature Residence",
    "proj3-desc": "Jakarta, Indonesia – 2022",
    "services-label": "Layanan",
    "services-title": "Keahlian Kami",
    "services-subtitle":
      "Solusi arsitektur terpadu dari konsep hingga realisasi",
    service1: "Desain Arsitektur",
    "service1-desc":
      "Kami menghadirkan desain modern dan alami yang merefleksikan karakter klien dengan sentuhan inovatif.",
    service2: "Desain Interior",
    "service2-desc":
      "Menciptakan ruang dalam yang nyaman, fungsional, dan berestetika tinggi dengan material berkualitas.",
    service3: "Konsultasi Desain",
    "service3-desc":
      "Memberikan solusi arsitektur profesional sesuai kebutuhan dan gaya hidup Anda dengan pendekatan personal.",
    "service-link": "Lihat Detail →",
    stat1: "Proyek Selesai",
    stat2: "Kepuasan Klien",
    stat3: "Tahun Pengalaman",
    stat4: "Penghargaan",
    "cta-title": "Mari Wujudkan Proyek Impian Anda",
    "cta-desc":
      "Konsultasikan ide arsitektur Anda bersama tim profesional kami",
    "cta-btn": "Hubungi Kami Sekarang",
    "footer-desc":
      "Studio arsitektur yang menghadirkan desain inovatif dan berkelanjutan.",
    "footer-quick": "Tautan Cepat",
    "footer-contact-title": "Kontak",
    footer: "Dibuat dengan dedikasi dan estetika.",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    "hero-title": "Creating Architecture with Art and Function",
    "hero-desc":
      "We design living spaces that are beautiful, timeless, and sustainable for a better future.",
    "hero-btn": "View Our Projects",
    "hero-btn2": "Free Consultation",
    "projects-label": "Featured Projects",
    "projects-title": "Our Latest Works",
    "projects-subtitle": "Exploring innovation in every design we create",
    "proj1-title": "Tropical Modern Villa",
    "proj1-desc": "Bali, Indonesia – 2024",
    "proj2-title": "Minimalist Family House",
    "proj2-desc": "Bandung, Indonesia – 2023",
    "proj3-title": "Urban Nature Residence",
    "proj3-desc": "Jakarta, Indonesia – 2022",
    "services-label": "Services",
    "services-title": "Our Expertise",
    "services-subtitle":
      "Integrated architectural solutions from concept to realization",
    service1: "Architectural Design",
    "service1-desc":
      "We create modern and natural designs reflecting each client's character with innovative touches.",
    service2: "Interior Design",
    "service2-desc":
      "Crafting interior spaces that are functional, comfortable, and highly aesthetic with quality materials.",
    service3: "Design Consultation",
    "service3-desc":
      "Providing professional architectural solutions tailored to your needs and lifestyle with a personal approach.",
    "service-link": "View Details →",
    stat1: "Projects Completed",
    stat2: "Client Satisfaction",
    stat3: "Years of Experience",
    stat4: "Awards",
    "cta-title": "Let's Realize Your Dream Project",
    "cta-desc": "Consult your architectural ideas with our professional team",
    "cta-btn": "Contact Us Now",
    "footer-desc":
      "An architecture studio that delivers innovative and sustainable designs.",
    "footer-quick": "Quick Links",
    "footer-contact-title": "Contact",
    footer: "Created with dedication and aesthetics.",
    // Di dalam translations.id tambahkan:
    "about-title": "Tentang Senyiur Architect",
    "about-sub":
      "Mendesain ruang hidup dengan keseimbangan antara estetika, alam, dan fungsi.",
    "about-vision": "Filosofi Kami",
    "about-vision-desc":
      "Setiap desain yang kami buat memiliki jiwa, terinspirasi oleh alam dan kehidupan manusia. Kami percaya bahwa arsitektur bukan sekadar bangunan, melainkan bentuk komunikasi antara manusia dan lingkungannya. Pendekatan kami menggabungkan keindahan estetika dengan fungsionalitas praktis, menciptakan ruang yang tidak hanya indah dipandang tetapi juga nyaman dihuni.",
    "about-team": "Tim Kami",
    "about-founder": "Arsitek Utama & Pendiri",
    "about-designer": "Desainer Interior",
    "about-architect": "Arsitek Proyek",

    // Di dalam translations.en tambahkan:
    "about-title": "About Senyiur Architect",
    "about-sub":
      "Designing living spaces with a balance between aesthetics, nature, and function.",
    "about-vision": "Our Philosophy",
    "about-vision-desc":
      "Every design we create has a soul, inspired by nature and human life. We believe that architecture is not just buildings, but a form of communication between humans and their environment. Our approach combines aesthetic beauty with practical functionality, creating spaces that are not only beautiful to look at but also comfortable to live in.",
    "about-team": "Our Team",
    "about-founder": "Lead Architect & Founder",
    "about-designer": "Interior Designer",
    "about-architect": "Project Architect",
  },
};

// 🔄 CHANGE LANGUAGE FUNCTION
function changeLanguage(lang) {
  const langElements = document.querySelectorAll("[data-lang-id]");

  langElements.forEach((el) => {
    const key = el.getAttribute("data-lang-id");

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button states
  const langID = document.getElementById("langID");
  const langEN = document.getElementById("langEN");

  if (langID && langEN) {
    langID.classList.toggle("active", lang === "id");
    langEN.classList.toggle("active", lang === "en");
  }

  localStorage.setItem("language", lang);
}

// 🎬 DOM LOADED
document.addEventListener("DOMContentLoaded", function () {
  // Language switcher
  const langID = document.getElementById("langID");
  const langEN = document.getElementById("langEN");

  if (langID) {
    langID.addEventListener("click", () => changeLanguage("id"));
  }

  if (langEN) {
    langEN.addEventListener("click", () => changeLanguage("en"));
  }

  // Load saved language
  const savedLang = localStorage.getItem("language") || "id";
  changeLanguage(savedLang);

  // 🍔 Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "auto";
    });

    // Close on link click
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
