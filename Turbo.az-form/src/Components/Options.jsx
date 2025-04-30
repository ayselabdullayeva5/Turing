export const ban = [
    "Avtobus",
    "Dartqı",
    "Fastbek",
    "Fayton",
    "Furqon",
    "Hetçbek, 3 qapı",
    "Hetçbek, 4 qapı",
    "Hetçbek, 5 qapı",
    "Kabriolet",
    "Karvan",
    "Kompakt-Van",
    "Kupe",
    "Kvadrosikl",
    "Liftbek",
    "Limuzin",
    "Mikroavtobus",
    "Mikrovan",
    "Minivan",
    "Moped",
    "Motosiklet",
    "Offroader / SUV, 3 qapı",
    "Offroader / SUV, 5 qapı",
    "Offroader / SUV, açıq",
    "Pikap, bir yarım kabin",
    "Pikap, ikiqat kabin",
    "Pikap, tək kabin",
    "Qolfkar",
    "Rodster",
    "Sedan",
    "Skuter",
    "Spidster",
    "SUV Kupe",
    "Tarqa",
    "Universal, 3 qapı",
    "Universal, 5 qapı",
    "Van",
    "Yük maşını"
];

export const speed = [
    "Avtomat",
    "Variator",
    "Mexaniki",
    "Robot",
    "Reduktor"
];

export const fuel = [
    "Benzin",
    "Dizel",
    "Qaz",
    "Elektro",
    "Hibrid",
    "Plug-in Hibrid",
    "Hidrogen"
];

export const year = [...Array.from({ length: 2025 - 1904 }, (_, i) => (2025 - i).toString())];

export const color = [
    "Qara",
    "Yaş Asfalt",
    "Boz",
    "Gümüşü",
    "Ağ",
    "Bej",
    "Tünd qırmızı",
    "Qırmızı",
    "Çəhrayı",
    "Narıncı",
    "Qızılı",
    "Sarı",
    "Yaşıl",
    "Açıq yaşıl",
    "Mavi",
    "Göy",
    "Bənövşəyi",
    "Qəhvəyi"
];

export const powerOptions = [
    ...Array.from({ length: 16000 / 50 }, (_, i) => (i + 1) * 50).map(val => val.toString())
];

export const countries = [
    "Amerika",
    "Avropa",
    "Çin",
    "Digər",
    "Dubay",
    "Koreya",
    "Rəsmi diler",
    "Rusiya",
    "Yaponiya"
];

export const owner = ["Birinci", "İkinci", "Üçüncü", "Dördüncü və ya daha çox"];

export const cities = [
    "Ağcabədi",
    "Ağdam",
    "Ağdaş",
    "Ağdərə",
    "Ağstafa",
    "Ağsu",
    "Astara",
    "Babək",
    "Bakı",
    "Balakən",
    "Beyləqan",
    "Bərdə",
    "Biləsuvar",
    "Cəbrayıl",
    "Cəlilabad",
    "Culfa",
    "Daşkəsən",
    "Dəliməmmədli",
    "Füzuli",
    "Gədəbəy",
    "Gəncə",
    "Goranboy",
    "Göyçay",
    "Göygöl",
    "Göytəpə",
    "Hacıqabul",
    "Horadiz",
    "İmişli",
    "İsmayıllı",
    "Kəlbəcər",
    "Kürdəmir",
    "Laçın",
    "Lerik",
    "Lənkəran",
    "Liman",
    "Masallı",
    "Mingəçevir",
    "Naftalan",
    "Naxçıvan",
    "Neftçala",
    "Oğuz",
    "Ordubad",
    "Qax",
    "Qazax",
    "Qəbələ",
    "Qobustan",
    "Quba",
    "Qubadlı",
    "Qusar",
    "Saatlı",
    "Sabirabad",
    "Şabran",
    "Şahbuz",
    "Salyan",
    "Şamaxı",
    "Samux",
    "Şəki",
    "Şəmkir",
    "Şərur",
    "Şirvan",
    "Siyəzən",
    "Sumqayıt",
    "Şuşa",
    "Tərtər",
    "Tovuz",
    "Ucar",
    "Xaçmaz",
    "Xankəndi",
    "Xırdalan",
    "Xızı",
    "Xocalı",
    "Xocavənd",
    "Xudat",
    "Yardımlı",
    "Yevlax",
    "Zaqatala",
    "Zəngilan",
    "Zərdab"
];

export const equipment = [
    "Yüngül lehimli disklər",
    "ABS",
    "Lyuk",
    "Yağış sensoru",
    "Mərkəzi qapanma",
    "Park radarı",
    "Kondisioner",
    "Oturacaqların isidilməsi",
    "Dəri salon",
    "Ksenon lampalar",
    "Arxa görüntü kamerası",
    "Yan pərdələr",
    "Oturacaqların ventilyasiyası"
];

export const place = ["1", "2", "3", "4", "5", "6", "7", "8+", "Qeyd olunmasın"];

export const condition = ["Vuruğu var", "Rənglənib", "Qəzalı və ya ehtiyat hissələr üçün"];

export const brands = [
    "Audi", "BMW", "Mercedes-Benz", "Toyota", "Hyundai",
    "Kia", "Ford", "Chevrolet", "Honda", "Volkswagen",
    "Nissan", "Lexus", "Mazda", "Subaru", "Peugeot"
];

export const models = {
    "Audi": ["A3", "A4", "A6", "Q5", "Q7", "TT"],
    "BMW": ["1 Series", "3 Series", "5 Series", "X3", "X5", "Z4"],
    "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLC", "GLE"],
    "Toyota": ["Corolla", "Camry", "RAV4", "Hilux", "Land Cruiser", "Yaris"],
    "Hyundai": ["Elantra", "Tucson", "Santa Fe", "Accent", "Kona", "i20"],
    "Kia": ["Rio", "Sportage", "Sorento", "Cerato", "Stinger", "Picanto"],
    "Ford": ["Focus", "Fiesta", "Mustang", "Explorer", "F-150", "Edge"],
    "Chevrolet": ["Spark", "Aveo", "Cruze", "Malibu", "Tahoe", "Camaro"],
    "Honda": ["Civic", "Accord", "CR-V", "HR-V", "Jazz", "Pilot"],
    "Volkswagen": ["Golf", "Passat", "Tiguan", "Jetta", "Touareg", "Polo"],
    "Nissan": ["Micra", "Juke", "Qashqai", "X-Trail", "Altima", "Navara"],
    "Lexus": ["IS", "ES", "RX", "NX", "LS", "UX"],
    "Mazda": ["Mazda 2", "Mazda 3", "Mazda 6", "CX-3", "CX-5", "MX-5"],
    "Subaru": ["Impreza", "Legacy", "Forester", "Outback", "BRZ", "XV"],
    "Peugeot": ["208", "308", "3008", "5008", "2008", "508"]
};