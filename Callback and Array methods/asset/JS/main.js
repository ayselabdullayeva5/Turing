// 1️⃣
// modifyText(text, callback) funksiyasını yaradın.
// Bu funksiya daxil edilən text string-in üzərində callback funksiyası vasitəsilə dəyişiklik etməlidir.
// – mətnin bütün hərflərini kiçik edin.
// – mətnin bütün boşluqlarını silin.
// – hər sözün ilk hərfini böyük edin.
// – mətni nida işarəsi (!) ilə bitirin.

function modifyText(text, callback) {
    return callback(text);
}

// Kiçik hərfə çevirmək funksiyası
function toLowerCase(text) {
    return text.toLowerCase();
}

// Boşluqları silmək funksiyası
function removeSpaces(text) {
    return text.split(" ").join("");
}

// Hər sözün ilk hərfini böyütmək funksiyası
function capitalizeWords(text) {
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// Nida işarəsi əlavə edən funksiya
function addExclamation(text) {
    return text + "!";
}

console.log(modifyText("Hello World", toLowerCase));
console.log(modifyText("black berry", removeSpaces));
console.log(modifyText("hello world", capitalizeWords));
console.log(modifyText("Excellent", addExclamation));

// 2️⃣
// modifyNumber(num, callback) funksiyasını yaradın.
// Bu funksiya daxil edilən num üzərində callback funksiyasını işlədib nəticəni qaytarmalıdır.
// – ədədi 2 dəfə artırın.
// – ədədi yarıya bölün.
// – ədədin kvadrat kökünü tapın.
// – ədədin mütləq dəyərini tapın.

function modifyNumber(num, callback) {
    return callback(num);
}

// Ədədi 2 dəfə artırmaq
function doubleNumber(num) {
    return num * 2;
}

// Ədədi yarıya bölmək
function halfNumber(num) {
    return num / 2;
}

// Kvadrat kökünü tapmaq
function squareRoot(num) {
    return Math.sqrt(num);
}

// Mütləq dəyəri tapmaq
function absoluteValue(num) {
    return Math.abs(num);
}

console.log(modifyNumber(10, doubleNumber));
console.log(modifyNumber(10, halfNumber)); 
console.log(modifyNumber(25, squareRoot));  
console.log(modifyNumber(-5, absoluteValue)); 

// 3️⃣
// transformArray(arr, callback) funksiyasını yaradın.
// Bu funksiya arr array-inin hər bir elementinə callback funksiyasını tətbiq etməlidir.
// – bütün rəqəmləri 1 artırın.
// – bütün ədədləri mənfi edin.
// – bütün ədədləri 3-ə bölüb qalıqları qaytarın.

function transformArray(arr, callback) {
    return arr.map(callback);
}

// ve ya bele
// function transformArray(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = callback(arr[i]);
//     }
//     return result;
// }


// Bütün rəqəmləri 1 artırmaq
function increment(num) {
    return num + 1;
}

// Bütün ədədləri mənfi etmək
function makeNegative(num) {
    return -Math.abs(num);
}

// 3-ə bölüb qalıqları qaytarmaq
function remainderByThree(num) {
    return num % 3;
}

console.log(transformArray([1, 2, 3, 4], increment));
console.log(transformArray([5, -10, 15], makeNegative));
console.log(transformArray([5, 10, 15], remainderByThree));

// 4️⃣
// findInArray(arr, callback) funksiyasını yaradın.
// Bu funksiya arr array-ində callback funksiyasına uyğun gələn ilk elementi qaytarmalıdır.
// – ilk cüt ədədi qaytarın.
// – 10-dan böyük ilk ədədi qaytarın.
// – "A" hərfi ilə başlayan ilk sözü qaytarın.

function findInArray(arr, callback) {
    return arr.find(callback);
}

// ve ya bele
// function findInArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return arr[i];
//         }
//     }
//     return undefined;
// }


// İlk cüt ədədi tapmaq
function findEvenNumber(num) {
    return num % 2 === 0;
}

// İlk 10-dan böyük ədədi tapmaq
function findGreaterThanTen(num) {
    return num > 10;
}

// İlk "A" hərfi ilə başlayan sözü tapmaq
function findWordStartingWithA(word) {
    return word.charAt(0).toUpperCase() === "A";
}

console.log(findInArray([1, 3, 5, 8, 10], findEvenNumber));
console.log(findInArray([2, 5, 12, 11], findGreaterThanTen));
console.log(findInArray(["Salam", "Aysel", "Javascript"], findWordStartingWithA));

// 5️⃣
// processUserData(user, callback) funksiyasını yaradın.
// Bu funksiya user obyektinin üzərində callback funksiyasını işlətməlidir.
// – firstName və lastName birləşdirib tam ad qaytarın.
// – age dəyəri 18 və ya daha böyükdürsə true, yoxsa false qaytarın.
// – istifadəçinin e-mail ünvanının @ işarəsinə qədər olan hissəsini ***** ilə əvəz edin.

function processUserData(user, callback) {
    return callback(user);
}

// Tam adı qaytarmaq
function getFullName(user) {
    return user.firstName + " " + user.lastName;
}

// Yaşı 18-dən böyükdürsə true, yoxsa false qaytarmaq
function isAdult(user) {
    return user.age >= 18;
}

// E-mail ünvanını gizlətmək
function hideEmail(user) {
    let atIndex = user.email.indexOf("@"); // @ işarəsinin yerini tapırıq
    if (atIndex !== -1) {
        return "*****" + user.email.slice(atIndex); // @-dən sonrasını saxlayırıq
    }
    return "Invalid email";
}

let user = { firstName: "Aysel", lastName: "Abdullayeva", age: 21, email: "aysel21@example.com" };

console.log(processUserData(user, getFullName));
console.log(processUserData(user, isAdult));
console.log(processUserData(user, hideEmail));
