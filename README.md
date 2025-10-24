# 🏛️ Senyiur Architect: Tropical Modern Villa

Selamat datang di repositori proyek website arsitektur Senyiur Architect. Proyek ini menampilkan desain modern tropis unggulan dan berfungsi sebagai portofolio digital untuk layanan arsitektur.

---

## ✨ Fitur Utama

* **Desain Responsif:** Tampilan optimal di semua perangkat (Desktop, Tablet, dan Ponsel).
* **Galeri Proyek Unggulan:** Menampilkan proyek-proyek utama dengan efek hover yang elegan.
* **Filter Proyek Dinamis:** Fungsionalitas JavaScript untuk memfilter proyek berdasarkan kategori (di halaman `projects.html`).
* **Multibahasa (ID & EN):** Dilengkapi dengan *language switcher* menggunakan JavaScript/Local Storage.
* **Formulir Kontak AJAX:** Menggunakan PHP sebagai *backend* sederhana untuk memproses data formulir tanpa memuat ulang halaman.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
* **Backend:** PHP (untuk simulasi pemrosesan formulir kontak)
* **Desain:** Fokus pada estetika **Tropical Modern** dan tata letak minimalis.

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Untuk menjalankan fungsionalitas PHP (termasuk formulir kontak) secara penuh, Anda memerlukan *local server environment* seperti XAMPP atau Laragon.

1.  **Clone Repositori:**
    ```bash
    git clone [https://github.com/hallindaputri/SenyiurArchitect.git](https://github.com/hallindaputri/SenyiurArchitect.git)
    ```

2.  **Pindahkan ke Server:**
    Pindahkan folder `SenyiurArchitect` ke direktori web server Anda (misalnya: `htdocs` di XAMPP).

3.  **Akses Melalui Browser:**
    Akses proyek melalui URL lokal Anda (misalnya: `http://localhost/SenyiurArchitect/` atau `http://localhost/SenyiurArchitect/index.html`).

---
## 📁 Struktur File

Struktur proyek mengikuti standar web:

SenyiurArchitect/
├── api/
│   └── send_email.php   # Endpoint PHP untuk memproses formulir kontak AJAX.
├── css/
│   └── style.css        # Berisi semua styling utama (CSS) untuk seluruh website.
├── images/              # Folder untuk semua aset gambar (proyek, logo, dll.).
├── js/
│   └── main.js          # Berisi semua skrip JavaScript (language switcher, filter, AJAX client-side).
├── .gitignore (Opsional)  # File untuk memberitahu Git file/folder apa yang harus diabaikan (mis. file log).
├── index.html           # Halaman Beranda (Home Page).
├── about.html           # Halaman Tentang Kami (About Us).
├── projects.html        # Halaman Galeri Proyek (Projects Gallery).
└── contact.html         # Halaman Kontak.

---

## ✍️ Kontribusi

Proyek ini dibuat oleh **Hallinda Putri**.

* **GitHub:** [@hallindaputri](https://github.com/hallindaputri)

Jika Anda menemukan *bug* atau memiliki saran perbaikan, silakan buka *Issue* di repositori ini.


