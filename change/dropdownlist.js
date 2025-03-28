const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const dropdownList = toggle.nextElementSibling;
    const arrow = toggle.querySelector('.arrow');

    dropdownList.classList.toggle('open');
    arrow.classList.toggle('open');
  });
});

const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

dropdownLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('active');
  });
  link.addEventListener('blur', () => {
    link.classList.remove('active');
  });
});