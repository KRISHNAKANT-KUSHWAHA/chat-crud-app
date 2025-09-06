// public/script.js
document.addEventListener("DOMContentLoaded", () => {
  const deleteForms = document.querySelectorAll(".delete-form");

  deleteForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const confirmDelete = confirm("Are you sure you want to delete this chat?");
      if (!confirmDelete) {
        e.preventDefault(); // stop form from submitting
      }
    });
  });
});
