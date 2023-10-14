const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

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