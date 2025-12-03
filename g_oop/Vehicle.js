modeule.exports = Vehicle;

// Create a class called Vehicle
class Vehicle {


    // constructor
    // this {keyword)}
    // a constructor is called when a new instance of the class is created
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.distanceTraveled = distanceTraveled ? this.distanceTraveled : 0;    // default value for all new instance
    }


    travel(distance) {
        this.distanceTraveled += distance; // cumulatively add distances passed in
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    }

    // method to get the total distance travelled
    getTotalDistance() {
        return this.distanceTraveled;

    }

}

//const myTransport = new Vehicle("Yoyota", "Raize", "2022");
const myTransport2 = new Vehicle("Honda", "Super4", "1994");

const myTransport = new Vehicle("Toyota", "Raize", "2022");
myTransport.travel(100);
myTransport.travel(50);

console.log(`My transport has travelled a total of $(myTransport.getTotalDistance()} km.`);

//modeule.exports = Vehicle;  // class vehicle is exported

export default Vehicle;     // Modern (ES6+)