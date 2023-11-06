const token = localStorage.getItem("token");
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const form = document.getElementById("form")
form.addEventListener("submit", createRating)

if(!token) {
  form.style.display = "none";

  const createRating = document.getElementById("create-rating");
  const text = document.createElement('p');
  text.innerText = "To rating a project you need to login";
  createRating.appendChild(text)
}

fetch(`http://localhost:3333/projects/${id}`).then(async (response) => {
    if(response.ok){
        const data = await response.json()
        projectdetail(data)
    } else {
        window.location.href = '404.html'
    }
})

function projectdetail(data) {
    const title = document.getElementById('project-name')
    title.innerHTML = data.name

    if(data.coverImage){
        const image = document.getElementById('image')
        image.src = data.coverImage
    }

    const description = document.getElementById('description')
    description.innerHTML = data.description

    const rate = document.getElementById("rate")
    rate.innerHTML = `${data.rating || 0} Stars`

    const projectRating = document.getElementById("project-ratings");
    for (const rating of data.ratings) {
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating")
        const user = document.createElement("p");
        user.innerText = `User: ${rating.user.name}`;
        ratingDiv.appendChild(user);

        const stars = document.createElement("p");
        stars.innerText = `${rating.star} Stars`;
        ratingDiv.appendChild(stars);

        const message = document.createElement("p");
        message.innerText = `Message: ${rating.message}`;
        ratingDiv.appendChild(message)

        projectRating.appendChild(ratingDiv)
    }
}

function deletproject() {
    const confirmdelete = confirm('tem certeza que deseja deletar o projeto ?')
    if(confirmdelete) {
        fetch(`http://localhost:3333/projects/${id}`, { method: 'DELETE'}).then(async (response) => {
            if(response.ok){
                window.location.href = 'index.html'
            }
        })
    }
}

async function createRating(event) {
    event.preventDefault();
    const stars = document.getElementById("stars").value;
    const message = document.getElementById("message").value;

    await fetch(`http://localhost:3333/projects/${id}/rate`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            message, star: Number(stars)
        })
    })

    location.reload()
}