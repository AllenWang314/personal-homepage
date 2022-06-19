const aboutDiv = document.getElementById("about")
const projectDiv = document.getElementById("projects")
const aboutLinkDiv = document.getElementById("about-link")
const projectLinkDiv = document.getElementById("projects-link")

aboutLinkDiv.onclick = (_event) => {
    projectDiv.style.display = "none";
    aboutDiv.style.display = "block";
};

projectLinkDiv.onclick = (_event) => {
    aboutDiv.style.display = "none";
    projectDiv.style.display = "flex";
};