class Car{
    constructor(maker, model, color){
        this.maker = maker;
        this.model = model;
        this.color = color
    }
    getCarDetails(){
       return "This is a " + this.maker + " " + this.model + " in "+ this.color +" colour"
    }
}

var myCar1 = new Car('Tata', 'tiago', 'Blue')
console.log(myCar1)
console.log(myCar1.model)
console.log(myCar1.color)
console.log(myCar1.getCarDetails())

