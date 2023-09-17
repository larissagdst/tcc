const baseUrl = 'http://localhost:3333';

const projectList = document.querySelector('.project-list');

fetch(`${baseUrl}/projects`).then(async (response) => {
  const data = await response.json();
  for (const project of data) {
    addProject(project);
  }
})

function addProject(project) {
  const defaultCoverImage = 'https://img.freepik.com/free-vector/software-developers-programming-computer-with-script_74855-6661.jpg?w=996&t=st=1694404019~exp=1694404619~hmac=88a864c805321faeb739015edb9416d8e834aa24413259f6bbf1802012b3ae0e';
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const image = document.createElement('img');
  image.classList.add('project-image');
  image.src = project.coverImage || defaultCoverImage;
  projectCard.appendChild(image);

  const title = document.createElement('div');
  title.classList.add('project-title');
  title.textContent = project.name;
  projectCard.appendChild(title);

  const description = document.createElement('div');
  description.classList.add('project-description');
  description.textContent = project.description;
  projectCard.appendChild(description);

  const rating = document.createElement('div');
  rating.classList.add('project-rating');
  rating.textContent = `Rating: ${project.rating || 0} stars`;
  projectCard.appendChild(rating);

  projectList.appendChild(projectCard);
}