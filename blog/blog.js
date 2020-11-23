function BlogPost(title, date, tags) {
    this.date = date;
    this.title = title;
    this.tags = tags;
    this.display = function() {
        if (!document.getElementById("blog-post-template")) {
            return;
        }
        let blogDiv = document.getElementById("blog-post-template").cloneNode(true);
        blogDiv.removeAttribute("id");
        blogDiv.removeAttribute("style");
        blogDiv.querySelector(".blog-post-header").setAttribute("href", "/blog/" + this.id + "/");
        blogDiv.querySelector(".blog-post-header").textContent = this.title;
        blogDiv.querySelector(".blog-post-date").innerHTML += " " + this.date;
        blogDiv.querySelector(".blog-post-tags").innerHTML += " " + this.tags.join(", ");
        document.querySelector(".blog-posts").appendChild(blogDiv);
    }
}

let blogPosts = [
    new BlogPost("Euclid Contest 2020 Solutions", "April 29, 2020", ["math", "problem solving"]),
    new BlogPost("A Triangular Data Structure", "June 20, 2020", ["computer science", "divide and conquer", "dynamic programming"]),
    //new BlogPost("How to Win and Lose an Election", "November 23, 2020", ["U.S. politics", "statistics"]),
];

blogPosts.sort(function(a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
});

for (let i = 0; i < blogPosts.length; i++)
    blogPosts[i].id = i;