function addBlogPost(url, title, date, tags) {
    let blogDiv = document.getElementById("blog-post-template").cloneNode(true);
    blogDiv.removeAttribute("id");
    blogDiv.removeAttribute("style");
    blogDiv.querySelector(".blog-post-header").setAttribute("href", "/blog/" + url + "/");
    blogDiv.querySelector(".blog-post-header").textContent = title;
    blogDiv.querySelector(".blog-post-date").innerHTML += " " + date;
    blogDiv.querySelector(".blog-post-tags").innerHTML += " " + tags.join(", ");
    document.querySelector(".blog-posts").appendChild(blogDiv);
}

function BlogPost(title, date, tags) {
    this.date = date;
    this.title = title;
    this.tags = tags;
}

let blogPosts = [new BlogPost("Euclid Contest 2020 Solutions", "April 29, 2020", ["Math", "Problem solving"])];

for (let i = 0; i < blogPosts.length; i++) {
    addBlogPost(i, blogPosts[i].title, blogPosts[i].date, blogPosts[i].tags);
}