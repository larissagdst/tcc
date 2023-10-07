const form = document.getElementById("form")
form.addEventListener("submit", create)

async function create(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const coverImage = document.getElementById("coverImage").value
    const description = document.getElementById("description").value
    
    const response = await fetch("http://localhost:3333/projects", {
        method:"post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, coverImage, description
        })
    })

    if(response.status === 200) {
        window.location.href = "index.html"
    }
}