// Navbar scroll effect
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backTop.classList.toggle('visible', window.scrollY > 400);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Menu tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        menuCards.forEach(card => {
            const category = card.dataset.category;
            card.classList.toggle('hidden', tab !== 'all' && category !== tab);
        });
    });
});

// Toast helper
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// Reservation form
document.getElementById('reservationForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast("Reservation confirmed! We'll see you soon.");
    e.target.reset();
});

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    showToast('Thanks for subscribing! Check your inbox for exclusive offers.');
    e.target.reset();
});

// Back to top
backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add to cart buttons
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
        const itemName = btn.closest('.menu-card').querySelector('h3').textContent;
        showToast(`${itemName} added to your order!`);
    });
});
