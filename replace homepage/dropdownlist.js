// lib/dropdownlist.js
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const dropdownList = toggle.nextElementSibling;
    toggle.classList.toggle('open');
    dropdownList.classList.toggle('open');
  });
});

document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    var menu = toggle.nextElementSibling;
    menu.classList.toggle('show');
  });
});