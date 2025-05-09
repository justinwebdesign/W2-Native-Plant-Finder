// Run after the page has loaded
document.addEventListener("DOMContentLoaded", () => {
  // FILTER LOGIC
  document.getElementById('filter-btn').addEventListener('click', () => {
    const checkedValues = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.value);
    const plantCards = document.querySelectorAll('.plant-card');
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dropdownToggle');
    const dropdown = document.getElementById('dropdownContent');

    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent event bubbling
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !toggleButton.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  });
</script>
    plantCards.forEach(card => {
      const tags = card.dataset.tags.split(" ");
      const match = checkedValues.every(tag => tags.includes(tag));
      card.style.display = match || checkedValues.length === 0 ? "block" : "none";
    });
  });

  // IMAGE TOGGLE LOGIC
  document.querySelectorAll(".toggle-img").forEach(button => {
    button.addEventListener("click", () => {
      const img = button.nextElementSibling;
      img.style.display = (img.style.display === "none" || img.style.display === "") 
        ? "block" 
        : "none";
    });
  });
});
   
  
