//массивы с месяцами
const months = ['Januaru', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

//склонение числительных
const declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]];
}

//глобальные константы для API, определения года и месяца
const API_KEY = "8c8e1a50-6322-4235-8875-5d40a5420d86";

const yrl = `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2022&month=NOVEMBER&page=1
`;

