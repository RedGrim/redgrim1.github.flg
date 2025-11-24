// Main site JS: registration storage/export and small nav helper
document.addEventListener('DOMContentLoaded', function () {
  // Highlight current nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(a => {
    try {
      const href = new URL(a.href, location.href).pathname.split('/').pop();
      const current = location.pathname.split('/').pop() || 'index.html';
      if (href === current || (href === '' && current === 'index.html')) {
        a.classList.add('active');
      }
    } catch (e) {
      // ignore
    }
  });

  // Registration handling (store to localStorage)
  const form = document.getElementById('registrationForm');
  const exportBtn = document.getElementById('exportBtn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      data.timestamp = new Date().toISOString();
      const key = 'registrations';
      const regs = JSON.parse(localStorage.getItem(key) || '[]');
      regs.push(data);
      localStorage.setItem(key, JSON.stringify(regs));
      alert('Thank you for registering! Your submission was saved locally.');
      form.reset();
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      const key = 'registrations';
      const regs = JSON.parse(localStorage.getItem(key) || '[]');
      const blob = new Blob([JSON.stringify(regs, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'registrations.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
});
