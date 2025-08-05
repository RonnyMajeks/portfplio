// Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.id = 'dark-toggle';
toggleBtn.innerHTML = '🌓';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Save preference in localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Load dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
});
// Dark mode toggle button
const toggleBtn = document.createElement('button');
toggleBtn.id = 'dark-toggle';
toggleBtn.innerHTML = '🌓';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
});
