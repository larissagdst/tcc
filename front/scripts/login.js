const form = document.getElementById("form");
form.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3333/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email, password
    })
  });

  if(response.status === 200) {
    const data = await response.json()

    localStorage.setItem("token", data.token)
    window.location.href = "index.html"
  }

  if(response.status === 401) {
    const data = await response.json()
    const errorText = document.getElementById("errorText")
    errorText.innerText = data.message;
    errorText.style.display = "block"
  }
}