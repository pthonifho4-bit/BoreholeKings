const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('#service');
    const serviceName = link.getAttribute('data-service');
    [...serviceSelect.options].forEach(option => {
      if (option.text.toLowerCase() === serviceName.toLowerCase()) serviceSelect.value = option.value || option.text;
    });
  });
});

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const value = key => (data.get(key) || '').toString().trim();
  const message = [
    'Hello Borehole Kings Pty Ltd, I would like to make an enquiry.',
    '',
    `Name: ${value('name')}`,
    `Phone: ${value('phone')}`,
    `Service: ${value('service')}`,
    `Location: ${value('location') || 'Not provided'}`,
    `Details: ${value('message') || 'I would like to discuss the job.'}`
  ].join('\n');
  window.open(`https://wa.me/27795465748?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

document.querySelector('#year').textContent = new Date().getFullYear();
