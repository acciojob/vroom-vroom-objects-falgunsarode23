// Complete the js code
function Car(make, model) {
	this.make = make;
	this.make = model;
}

Car.prototype.getMakeModel = function() {
	return this.make + " " + this.model;
}
function SportCar(make, model , topSpeed){
	car.call(this, make , model);
	this.topSpeed = topspeed;
}

SportCar.Prototype = Object.create(Car.prototype);

SportCar.Prototype.getTopSpeed = function(){
	return this.topSpeed;
}


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
