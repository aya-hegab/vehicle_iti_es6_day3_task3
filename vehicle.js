class Vehicle {
  constructor(speed, color) {
    if (typeof speed == "number" && typeof color == "number") {
      this.speed = speed;
      this.color = color;
    } else {
      throw "proberities must be numbers";
    }
  }
  turnLeft() {
    console.log("turn left");
  }
  turnLeft() {
    console.log("turn right");
  }
  start() {
    return true;
  }
  stop() {
    return false;
  }
  goBackward(speed, accel) {
    console.log(`go backward: speed is ${speed} so accel will be ${accel} `);
  }
  goForward(speed, accel) {
    console.log(`go forward: speed is ${speed} so accel will be ${accel} `);
  }
  toString() {
    console.log(this.constructor.name);
  }
}

class Bicycle extends Vehicle {
  constructor(speed, color) {
    super(speed, color);
  }
  ringBell() {
    console.log("ring bell");
  }
}

class MotorVehicle extends Vehicle {
  #sizeOfEngine;
  #licencePlate;
  constructor(speed, color) {
    super(speed, color);
  }

  get SizeOfEngine() {
    return this.#sizeOfEngine;
  }
  set SizeOfEngine(val) {
    if (typeof val == "number") {
      this.#sizeOfEngine = val;
    } else {
      throw "size of engine need to be a number ";
    }
  }
  get LicencePlate() {
    return this.#licencePlate;
  }
  set LicencePlate(val) {
    if (typeof val == "string") {
      this.#licencePlate = val;
    } else {
      throw "licence plate need to be a string ";
    }
  }
}

class DumpTruck extends MotorVehicle {
  constructor(speed, color, loadCapacity, numWheels, weight) {
    super(speed, color);
    if (
      typeof loadCapacity == "number" &&
      typeof numWheels == "number" &&
      typeof weight == "number"
    ) {
      this.loadCapacity = loadCapacity;
      this.numWheels = numWheels;
      this.weight = weight;
    } else {
      throw "proberities must be numbers";
    }
  }
  lowerLoad() {
    console.log("lower load");
  }
  raiseLoad() {
    console.log("raise load");
  }
}

class Car extends MotorVehicle {
  #numOfDoors;
  constructor(speed, color, numOfWheels, weight) {
    super(speed, color);
    if (typeof numOfWheels == "number" && typeof weight == "number") {
      this.numOfWheels = numOfWheels;
      this.weight = weight;
    } else {
      throw "proberities must be numbers";
    }
  }
  switchOnAirCon() {
    console.log("switch On Air Con");
  }
  get NumOfDoors() {
    return this.#numOfDoors;
  }
  set NumOfDoors(val) {
    if (typeof val == "number") {
      this.#numOfDoors = val;
    } else {
      throw "num of doors need to be a number ";
    }
  }
}

// var v = new Vehicle(5, "no");
var v = new Vehicle(5, 2);
console.log(v.start());
v.goBackward(2, 5);
v.goForward(9, 56);
v.toString();

var b = new Bicycle(5, 6);
b.ringBell();
b.toString();

var mv = new MotorVehicle(5, 6);
// var mv2 = new MotorVehicle(5, 6, "5", "5564");
mv.SizeOfEngine = 5;
console.log(mv.SizeOfEngine);

mv.LicencePlate = "6545665";
console.log(mv.LicencePlate);

var dt = new DumpTruck(56, 65, 788, 5665, 656);
