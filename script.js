document.getElementById('filter-btn').addEventListener('click', () => {
  const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
  const plantCards = document.querySelectorAll('.plant-card');

  plantCards.forEach(card => {
    const tags = card.dataset.tags.split(" ");
    const match = checkedValues.every(tag => tags.includes(tag));
    card.style.display = match || checkedValues.length === 0 ? "block" : "none";
  });
});
document.getElementById('filter-btn').addEventListener('click', () => {
  const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
  const plantCards = document.querySelectorAll('.plant-card');

  plantCards.forEach(card => {
    const tags = card.dataset.tags.split(" ");
    const match = checkedValues.every(tag => tags.includes(tag));
    card.style.display = match || checkedValues.length === 0 ? "block" : "none";
  });
  document.getElementById('filter-btn').addEventListener('click', () => {
      const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
      const plantCards = document.querySelectorAll('.plant-card');
    
      plantCards.forEach(card => {
        const tags = card.dataset.tags.split(" ");
        const match = checkedValues.every(tag => tags.includes(tag));
        card.style.display = match || checkedValues.length === 0 ? "block" : "none";
      });
    });
  
document.getElementById('filter-btn').addEventListener('click', () => {
  const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
  const plantCards = document.querySelectorAll('.plant-card');

  plantCards.forEach(card => {
    const tags = card.dataset.tags.split(" ");
    const match = checkedValues.every(tag => tags.includes(tag));
    card.style.display = match || checkedValues.length === 0 ? "block" : "none";
  });
});
  
// New image toggle logic
document.querySelectorAll('.toggle-img').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.nextElementSibling;
    if (img.style.display === 'none') {
      img.style.display = 'block';
      button.textContent = 'Hide Image';
    } else {
      img.style.display = 'none';
      button.textContent = 'See Image';
    }
  }
  );
});
})