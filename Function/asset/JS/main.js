// 3. Cüt və ya tək ədəd
// Bir ədədin cüt və ya tək olduğunu yoxlayan isEven funksiyası yazın. Əgər ədəd cütdürsə true, təkdirsə false qaytarsın.
// sEven(4);    Çıxış: true      isEven(7);   //      Çıxış: false

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7)); 

// 4. Ən böyük ədədi tapın
// Üç ədəd qəbul edən və ən böyüyünü qaytaran findLargest funksiyası yazın.
// findLargest(10, 20, 15); // Çıxış: 20

function findLargest(a,b,c){
    let largest = a;
    if(b > largest){
        largest = b;
    }
    if(c > largest){
        largest = c;
    }
    return largest;
}

console.log(findLargest(10, 20, 15));

// 5. Saitləri sayın
// Verilmiş sətirdəki saitlərin sayını qaytaran countVowels funksiyası yazın.
// countVowels("salam"); // Çıxış: 2

function countVowels(word) {
    let count = 0;
    let vowels = "aıoueəiöüAIOUEƏİÖÜ";

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(countVowels("salam"));
console.log(countVowels("JavaScript"));
console.log(countVowels("jklpytb"));

// 6. Sətiri tərsinə çevirin
// Sətiri tərsinə çevirən reverseString funksiyası yazın.
// reverseString("JavaScript"); // Çıxış: tpircSavaJ

function reverseString(word){
    let reversed = "";
    for (i = word.length - 1;i >= 0;i--){
        reversed += word[i];
    }
    return reversed;
}

console.log(reverseString("JavaScript"));

// 7. Çoxaltma cədvəli yaradın
// Verilmiş ədədin 1-dən 10-a qədər çoxaltma cədvəlini yazdıran multiplicationTable funksiyası yaradın.
// multiplicationTable(5);
// // Çıxış:
// // 5 x 1 = 5
// // 5 x 2 = 10
// // ...
// // 5 x 10 = 50

function multiplicationTable(number){
    for (i = 1; i <= 10; i++){
        console.log(number + "x" + i + "=" + (number * i));
    }
}

multiplicationTable(5);

// 8. Faktorial hesablayın
// Rekursiya istifadə edərək ədədin faktorialını hesablayan factorial funksiyası yaradın.
// factorial(5);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));