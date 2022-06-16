const linkDivs = document.getElementsByClassName("header-link")
const links = ["about", "projects"]

for (const linkDiv of linkDivs) {
    linkDiv.onclick = (_event) => {
        for (const link of links) {
            document.getElementById(link).style.display = "none";
        }
        console.log("triggered")
        document.getElementById(linkDiv.innerHTML).style.display = "block";
    };
}