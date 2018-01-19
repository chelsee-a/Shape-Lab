class Shape {
    constructor(height, width) {
        console.log(height, width);
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.height = height;
        this.width = width;
        //this.perimeter = ;
        this.div.style.left = `${randomVal(600 - width)}px`;
        console.log(this.div.style.left);
        this.div.style.top = `${randomVal(600 - height)}px`;
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        let box = document.getElementById('box');
        box.appendChild(this.div);
        //Adds information into the side panel
        this.div.addEventListener("click", () => {
            this.describe();

        })
        this.div.addEventListener("dblclick", () => {
            this.div.remove();
        })
    }
    //document.body.removeChild(oddone);


    //This method adds information into the side panel
    describe() {
        document.getElementById("spanName").innerHTML = this.constructor.name;
        document.getElementById("width").innerHTML = this.width;
        document.getElementById("height").innerHTML = this.height;
        document.getElementById("radius").innerHTML = this.radius;
        document.getElementById("area").innerHTML = this.area();
        document.getElementById("perimeter").innerHTML = this.perimeter();
        //alert("I have been clicked");
    }

    // remove(){
    //     document.getElementById(this).remove
    // }

}

class Square extends Shape {
    constructor(width) {
        super(width, width);
        this.div.classList.add('square');
        this.radius = null;
        this.width = width;
    }
    area() {
        return `${this.width}` * `${this.width}`;
    }
    perimeter() {
        return 4 * `${this.width}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.classList.add('circle');
        this.radius = radius;
        this.height = null;
        this.width = null;
        this.div.style.mozBorderRadius = `${radius}px`;
        this.div.style.webkitBorder = `${radius}px`;
        this.div.style.borderRadius = `${radius}px`;
        
    }
    //Method to recall the area from click event listener to add info to spans
    area() {
        return 3.14 * (`${this.radius}` * `${this.radius}`);
    }
    //Method to recall the perimeter from click event listener to add info to spans
    perimeter() {
        return 2 * 3.14 * `${this.radius}`;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.classList.add('triangle');
        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderBottom = `${height}px solid yellow`;
        this.div.style.borderRight = `${height}px solid transparent`;
        this.radius = null;
        this.height = height;
        this.width - width;
    }
    area() {
        return 0.5 * `${this.height}` * `${this.height}`;
    }
    perimeter() {
        return Number(this.height) + Number(this.height) + (Math.sqrt((Number(this.height) * Number(this.height)) + (Number(this.height) * Number(this.height)))) ;
    }
}
 
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.classList.add('rectangle')
        this.radius = null;
        this.height = height;
        this.width - width;
    }
    area() {
        console.log('in area');
        console.log(typeof this.height);
        return `${this.height}` * `${this.width}`;
    }

    perimeter() {
        //return 2 * (`${this.height + this.width}`)
        console.log(typeof this.width);
        return (2 * (Number(this.width) + Number(this.height)));
    }
}

function randomVal(max) {
    return Math.floor(Math.random() * (max));
}


//Inserts the Square with Value from inputs
let insertSq = document.getElementById('btnSq');
insertSq.addEventListener('click', insertSquare);

function insertSquare() {
    let sqSL = document.getElementById('sqSL');
    new Square(sqSL.value);
}

//Inserts the Circle with Value from inputs
let insertCir = document.getElementById('btnCir');
insertCir.addEventListener('click', insertCircle);

function insertCircle() {
    let cirRad = document.getElementById('cirRad');
    new Circle(cirRad.value);
}

//Inserts the Rectangle with Value from inputs
let insertRec = document.getElementById('btnRec');
insertRec.addEventListener('click', insertRectangle);

function insertRectangle() {
    let recWidth = document.getElementById('recWidth');
    let recHeight = document.getElementById('recHeight');
    new Rectangle(recWidth.value, recHeight.value);
}

//Inserts the triangle with Value from inputs
let insertTri = document.getElementById('btnTri');
insertTri.addEventListener('click', insertTriangle);

function insertTriangle() {
    let triHeight = document.getElementById('triHeight')
    new Triangle(triHeight.value);
}




