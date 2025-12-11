/**
 * main.js
 * Skrip JavaScript untuk Ensiklopedia Budaya Madura (Madu-Pedia).
 * * Fungsionalitas Tambahan:
 * 4. Scroll Header Effect: Mengubah tampilan header saat pengguna menggulir halaman.
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Variabel Elemen DOM
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a'); 
    const header = document.querySelector('.main-header'); // Tambahan untuk efek scroll

    // 2. Fungsionalitas Toggle Navigasi Mobile
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); 
            }
        });
    }

    // 3. Menutup Navigasi saat Link Diklik
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (mainNav.classList.contains('active')) {
                    setTimeout(() => {
                        mainNav.classList.remove('active');
                        
                        const icon = navToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }, 300); 
                }
            });
        });
    }
    
    // 4. Scroll Header Effect (Fitur baru untuk tampilan yang lebih menarik)
    const scrollThreshold = 80; // Jarak scroll (dalam piksel) sebelum header berubah
    
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            // Pengguna telah scroll ke bawah
            header.classList.add('scrolled');
        } else {
            // Pengguna ada di puncak halaman
            header.classList.remove('scrolled');
        }
    }

    // Panggil fungsi saat halaman digulir
    window.addEventListener('scroll', handleScroll);
    
    // Panggil sekali saat dimuat untuk menangani kasus refresh di tengah halaman
    handleScroll(); 
});