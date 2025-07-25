const authForm = document.getElementById("auth-form");

const authTitle = document.getElementById("auth-title");

const nameGroup = document.getElementById("name-group");

const switchAuth = document.getElementById("switch-auth");



let isSignUp = false;



function toggleAuth() {

  isSignUp = !isSignUp;

  if (isSignUp) {

    authTitle.textContent = "Sign Up";

    nameGroup.style.display = "block";

    switchAuth.innerHTML = 'Already have an account? <a href="#" onclick="toggleAuth()">Sign In</a>';

  } else {

    authTitle.textContent = "Sign In";

    nameGroup.style.display = "none";

    switchAuth.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleAuth()">Sign Up</a>';

  }

}



authForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;



  if (isSignUp) {

    alert(`Welcome, ${name}! You have signed up successfully.`);

  } else {

    alert(`Welcome back! You have signed in successfully.`);

  }

  window.location.href = "dashboard.html";

});￼Enter
