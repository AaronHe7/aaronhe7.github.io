function setPost() {
    let id = parseInt(document.getElementById("post-id").textContent);
    document.querySelector(".content > h1").textContent = blogPosts[id].title;
    let detailsDiv = document.querySelector(".content .details");
    let authorDiv = document.createElement("div");
    let seperatorDiv = document.createElement("div");
    let dateDiv = document.createElement("div");
    authorDiv.textContent = "Aaron He";
    seperatorDiv.textContent = "♦";
    dateDiv.textContent = blogPosts[id].date;
    detailsDiv.appendChild(authorDiv);
    detailsDiv.appendChild(seperatorDiv);
    detailsDiv.appendChild(dateDiv);
}

setPost();