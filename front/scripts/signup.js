const form = document.getElementById("form");
form.addEventListener("submit", login);

async function login(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3333/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, email, password
    })
  });
  console.log(response)
  if(response.status === 201) {
    const data = await response.json()

    localStorage.setItem("token", data.token)
    window.location.href = "index.html"
  } else {
    const data = await response.json()
    const errorText = document.getElementById("errorText")
    errorText.innerText = data.message;
    errorText.style.display = "block"
  }
}