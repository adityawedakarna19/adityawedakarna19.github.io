document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('popup').classList.remove('hidden');
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isHidden = section.style.display === 'none' || section.style.display === '';

    section.style.display = isHidden ? 'block' : 'none';
}