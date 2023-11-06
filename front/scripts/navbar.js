const token = localStorage.getItem("token")

if(!token) {
  const userLogin = document.getElementById("user-login");
  userLogin.style.display = "block"
} else {
  const tokenDecoded = jwtDecode(token);
  const userNameSpan = document.getElementById("user-name-span");
  const userContent = document.getElementById("user-content");

  userNameSpan.innerText = tokenDecoded.name;

  userContent.style.display = 'block';
}

const navLoading = document.getElementById("nav-loading");
navLoading.style.display = 'none';

function Logout() {
  localStorage.clear();
  location.reload();
}

