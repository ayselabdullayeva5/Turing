// Task 1

const largestNumber = () => {
    const num1 = parseFloat(prompt("Birinci ədədi daxil edin: "));
    const num2 = parseFloat(prompt("İkinci ədədi daxil edin: "));
    const num3 = parseFloat(prompt("Üçüncü ədədi daxil edin: "));
    const largest = Math.max(num1, num2, num3);
    console.log("Ən böyük ədəd:", largest);
 };

largestNumber();  

// Task 2

const CheckYear = () => {
    const year = parseInt(prompt("İli daxil edin: "));
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log(`${year} artıq ildir.`);
    } 
    else {
        console.log(`${year} artıq il deyil.`);
    }
 };

CheckYear();

// Task 3

const result = () => {
    const score = parseInt(prompt("Balınızı daxil edin: "));
    if (score >= 90 && score <= 100) {
        console.log("Qiymət: A");
    } 
    else if (score >= 80 && score <= 89) {
        console.log("Qiymət: B");
    } 
    else if (score >= 70 && score <= 79) {
        console.log("Qiymət: C");
    } 
    else if (score >= 60 && score <= 69) {
        console.log("Qiymət: D");
    } 
    else  if (score < 60){
        console.log("Qiymət: F");
    }
    else{
        console.log("Balınızı düzgün daxil edin!");
    }
  };

result();

// Task 4

const OddOrEven = () => {
    const number = parseInt(prompt("Bir ədəd daxil edin: "));
    if (number % 2 === 0) {
        console.log(`${number} cüt ədəddir.`);
    } 
    else {
        console.log(`${number} tək ədəddir.`);
    }
  };

OddOrEven(); 
 
// Task 5

const FizzBuzz =() => {
    for(let i = 1;i <= 50;i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

FizzBuzz();

// Task 6

const multiplication = () => {
    const number = parseInt(prompt("Bir ədəd daxil edin: "));
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  };
  
multiplication();

// Task 7

const sumOfnumbers = () => {
    const number = parseInt(prompt("Bir ədəd daxil edin: "));
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    console.log(`1-dən ${number}-ə qədər olan ədədlərin cəmi: ${sum}`);
  };
  
sumOfnumbers();

// Task 8

const calculator = () => {
    const num1 = parseFloat(prompt("Birinci ədədi daxil edin: "));
    const operator = prompt("Əməliyyatı seçin (+, -, *, /): ");
    const num2 = parseFloat(prompt("İkinci ədədi daxil edin: "));
  
    switch (operator) {
      case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      case "/":
        if (num2 !== 0) {
          console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
          console.log("0-a bölmə əməliyyatı mümkün deyil!");
        }
        break;
      default:
        console.log("Yanlış operator daxil etdiniz!");
    }
  };
  
calculator();