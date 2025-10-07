// DOM Elements
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
}

// Modal functions
function showModal() {
    if (successModal) {
        successModal.classList.remove('hidden');
    }
}

function hideModal() {
    if (successModal) {
        successModal.classList.add('hidden');
    }
}

// Close modal event listeners
if (closeModal) {
    closeModal.addEventListener('click', hideModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideModal);
}

// Close modal on backdrop click
if (successModal) {
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            hideModal();
        }
    });
}

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showModal();
        contactForm.reset();
    });
}

// Add service icons dynamically
const serviceCards = document.querySelectorAll('.service-card');
const imageUrls = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1643503640904-75c1a2093570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmtldGluZyUyMGRlcyUyMG0lQzMlQTlkaWFzJTIwc29jaWF1eHxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JlYXRpb24lMjBkZXMlMjBjb250ZW51fGVufDB8fDB8fHww',
    'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg'
];

serviceCards.forEach((card, index) => {
    const img = card.querySelector('img');
    if (img && imageUrls[index]) {
        img.src = imageUrls[index];
        img.alt = img.alt || 'Service image';
        console.log('Image added for preview:', img.alt);
    }
});

console.log('Preview images loaded - temporary changes not saved');

// Apply black text color to form fields for preview
document.querySelectorAll('input, textarea, select').forEach(el => {
  el.style.color = '#000';
  el.style.caretColor = '#000';
  const bg = window.getComputedStyle(el).backgroundColor;
  if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') {
    el.style.backgroundColor = '#fff';
  }
});
console.log('✅ Texte des champs défini en noir (aperçu seulement, aucune sauvegarde).');