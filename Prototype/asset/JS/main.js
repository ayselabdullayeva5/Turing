// 1. Vehicle konstruktor funksiyasını yaradın
function Vehicle(brand, year) {
    this.brand = brand;
    this.year = year;
}

// 2. Vehicle.prototype-ə getInfo() metodunu əlavə edin
Vehicle.prototype.getInfo = function() {
    return `Brand: ${this.brand}, Year: ${this.year}`;
};

// 3. Car konstruktor funksiyasını yaradın və Vehicle-dən miras alın
function Car(brand, year, fuelType) {
    Vehicle.call(this, brand, year); // Vehicle-in constructorunu çağırır
    this.fuelType = fuelType;
}

// 4. Car-in prototipini Vehicle-dən irs almaq üçün düzəldin
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 5. Car.prototype-də getInfo() metodunu üstələyin
Car.prototype.getInfo = function() {
    return `${Vehicle.prototype.getInfo.call(this)}, Fuel Type: ${this.fuelType}`;
};

// 6. Vehicle və Car üçün obyekt yaradaraq funksionallığı test edin
const vehicle1 = new Vehicle("Porsche", 2021);
console.log(vehicle1.getInfo());

const car1 = new Car("BMW", 2022, "Petrol");
console.log(car1.getInfo());
