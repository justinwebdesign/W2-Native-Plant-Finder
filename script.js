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
  
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-img").forEach(button => {
    button.addEventListener("click", () => {
      const img = button.nextElementSibling;
      if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});
