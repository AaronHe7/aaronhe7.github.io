function addBlogPost(url, title, date, tags) {
    if (!document.getElementById("blog-post-template")) {
        return;
    }
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

let blogPosts = [
    new BlogPost("Euclid Contest 2020 Solutions", "April 29, 2020", ["math", "problem solving"]),
//    new BlogPost("A Begin to Competitive Programming", "TBD", ["computer science", "algorithms"])
];

for (let i = blogPosts.length - 1; i >= 0; i--) {
    addBlogPost(i, blogPosts[i].title, blogPosts[i].date, blogPosts[i].tags);
}
