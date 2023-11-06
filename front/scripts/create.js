const form = document.getElementById("form")
form.addEventListener("submit", create)

const token = localStorage.getItem("token");

if(!token) {
    alert("To create project you need to login");
    window.location.href = 'login.html'
}

async function create(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const coverImage = document.getElementById("coverImage").value
    const description = document.getElementById("description").value
    
    const response = await fetch("http://localhost:3333/projects", {
        method:"post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name, coverImage, description
        })
    })

    if(response.status === 200) {
        window.location.href = "index.html"
    }
}