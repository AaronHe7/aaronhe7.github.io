class Triangle {
    constructor(selector, type) {
        this.type = type;
        this.selector = selector;
        this.c = document.querySelector(selector);
        this.ctx = this.c.getContext("2d");
        this.c.width = this.c.height = 500;
        this.textSize = 12;
        this.gap = 30;
    }
    draw(size) {
        let c = this.c;
        let ctx = this.ctx;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "black";
        ctx.font = this.textSize + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let gap = this.gap;
        let tx = c.width/2, ty = 2/3 * Math.sin(Math.PI/3) * (c.width - gap * (size - 1));
        if (ty < 0) {
            console.log("too big");
        }
        ctx.translate(tx, ty); // translate centroid to center of square
        for (let i = 0; i < size; i++) {
            for (let j = 0; j <= i; j++) {
                let dx = gap * (j - i/2), dy = i * gap * Math.sin(Math.PI/3);
                ctx.fillText(Math.floor(Math.random() * 10), dx, dy);
            }
        }
        if (this.type == "efficient") {
            this.drawSubTriangles(size, size == 2 ? 1 : Math.ceil(2/3 * size));
        } else if (this.type = "inefficient") {
            this.drawSubTriangles(size, size - 1);
        }
        ctx.translate(-tx, -ty);
    }
    line(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    drawSubTriangles(size, subSize) {
        if (size <= 1) return;
        subSize--;
        let c = this.c;
        let ctx = this.ctx;
        let gap = this.gap;
        for (let i = 0; i <= size - subSize - 1; i += size - subSize - 1) {
            for (let j = 0; j <= i; j += size - subSize - 1) {
                if (i == 0 && j == 0) {
                    ctx.strokeStyle = "red";
                } else if (j == size - subSize - 1) {
                    ctx.strokeStyle = "blue";
                } else {
                    ctx.strokeStyle = "green";
                }
                let ts = this.textSize, alt = ts * Math.sin(Math.PI/3);
                ts *= 2;
                let x1 = gap * (j - i/2), y1 = i * gap * Math.sin(Math.PI/3) - ts; // top
                let x2 = gap * ((j + subSize) - (i + subSize)/2) + ts, y2 = (i + subSize) * gap * Math.sin(Math.PI/3) + alt; // right
                let x3 = gap * (j - (i + subSize)/2) - ts, y3 = (i + subSize) * gap * Math.sin(Math.PI/3) + alt; // left
                this.line(x1, y1, x2, y2);
                this.line(x2, y2, x3, y3);
                this.line(x3, y3, x1, y1);
            }
        }
        ctx.strokeStyle = "black";
    }
}

let t1 = new Triangle(".triangle-canvas-1", "inefficient"), t2 = new Triangle(".triangle-canvas-2", "efficient");
t1.draw(12);
t2.draw(12);
document.querySelector(".triangle-button-1").addEventListener("click", function(e) {
    let ok = false;
    while (!ok) {
        let response = window.prompt("Enter size (positive integer):");
        if (response === null)
            break;
        let resInt = parseInt(response);
        if (resInt >= 50) {
            window.alert("Number is too large; triangle won't fit.");
            break;
        }
        if (!isNaN(resInt) && parseInt(response) >= 1) {
            ok = true;
            t1.draw(parseInt(response));
        }
    }
});
document.querySelector(".triangle-button-2").addEventListener("click", function(e) {
    let ok = false;
    while (!ok) {
        let response = window.prompt("Enter size (positive integer):");
        if (response === null)
            break;
        let resInt = parseInt(response);
        if (resInt >= 50) {
            window.alert("Number is too large; triangle won't fit.");
            break;
        }
        if (!isNaN(resInt) && parseInt(response) >= 1) {
            ok = true;
            t2.draw(parseInt(response));
        }
    }
});