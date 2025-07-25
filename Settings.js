function goBack() {
  window.location.href = "dashboard.html";
}

document.getElementById("profile-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  alert(`✅ Profile updated for ${username} (${email})`);
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

function logout() {
  alert("You have been logged out.");
  window.location.href = "index.html";
}￼Enter
