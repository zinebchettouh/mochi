let currentProduct = '';

function openModal(name, price, emoji) {
  currentProduct = name;
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalPrice').textContent = price + ' DA';
  document.getElementById('modalEmoji').textContent = emoji;
  document.getElementById('formScreen').style.display = 'block';
  document.getElementById('successScreen').classList.remove('active');
  document.getElementById('fieldName').value = '';
  document.getElementById('fieldPhone').value = '';
  document.getElementById('fieldAddress').value = '';
  document.getElementById('fieldWilaya').value = '';
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function submitOrder() {
  const name = document.getElementById('fieldName').value.trim();
  const phone = document.getElementById('fieldPhone').value.trim();
  const wilaya = document.getElementById('fieldWilaya').value;
  const address = document.getElementById('fieldAddress').value.trim();

  if (!name || !phone || !wilaya || !address) {
    alert('Veuillez remplir tous les champs 🌸');
    return;
  }

  document.getElementById('successName').textContent = name;
  document.getElementById('successProduct').textContent = currentProduct;
  document.getElementById('formScreen').style.display = 'none';
  document.getElementById('successScreen').classList.add('active');
}