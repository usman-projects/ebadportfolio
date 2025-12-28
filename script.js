// 1. Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Change icon to X
    navbar.classList.toggle('open');
};

// 2. Typing Effect (Only for Home Page)
// Check if element exists to avoid errors on other pages
const textElement = document.querySelector(".typing-text");
if (textElement) {
    const words = ["Web Developer", "Freelancer", "Creative Designer"];
    let i = 0, j = 0;
    let isDeleting = false;

    function type() {
        let currentWord = words[i];
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, j-1);
            j--;
            if (j == 0) { isDeleting = false; i++; if (i == words.length) i = 0; }
        } else {
            textElement.textContent = currentWord.substring(0, j+1);
            j++;
            if (j == currentWord.length) { isDeleting = true; }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }
    type();
}

// 3. Active Link Highlighter (Best Logic)
// Ye code check karega URL aur Navbar ko match karega
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});