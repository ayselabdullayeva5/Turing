// Aşağıdakı tələblərə uyğun adlı obyekt yaradın və this açar sözünün istifadəsini izah edən bir kod nümunəsi hazırlayın: obyektində aşağıdakı xüsusiyyətlər olsun:
// brand (string)
// model (string)
// year (number)
const car = {
    brand: "Porsche",
    model: " 718 Boxster",
    year: 2016,
    // getCarInfo() metodu – bu metod this istifadə edərək maşının markasını və modelini qaytarsın.
    getCarInfo: function () {
        return `${this.brand} ${this.model}`;
    },
    // updateYear(newYear) metodu – bu metod this istifadə edərək year dəyərini yeniləsin.
    updateYear: function (newYear) {
        this.year = newYear;
        console.log(car);
    },
    // displayInfo() metodu setTimeout içərisində this istifadəsini göstərsin.
    displayInfo: function () {
        setTimeout(() => {
            console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
        }, 1000);
    }
};
console.log(car.getCarInfo());
car.updateYear(2025);
car.displayInfo();