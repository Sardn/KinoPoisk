//массивы с месяцами
const months = ['Januaru', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

//склонение числительных
const declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

//глобальные константы для API, определения года и месяца
const API_KEY = "8c8e1a50-6322-4235-8875-5d40a5420d86";
//получаем текущий год.Вообще это лучше делать чз Пхп запрос к серверу, чтобы получать реальные данные
const currentYear = new Date().getFullYear();
//получаем текущий день месяца
const currentMonth = new Date().getMonth();
const currentMonthText = months[currentMonth].toUpperCase();
const currentMonthRu = monthsRu[currentMonth];

//определение query-параметра. Он нужен для того чтобы при вставлении в url адрес перейти на нужную страницу
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let queryParam = params.page;



//переменные для элементов страницы
const appListEl = document.querySelector('.app__list');
const yearEl = document.querySelector('.year');
const monthEl = document.querySelector('.month');
const paginationsEl = document.querySelectorAll('.app__pagination');

//устанавливаем текущий месяц и год
yearEl.textContent = currentYear;
monthEl.textContent = currentMonthRu;

const url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2022&month=NOVEMBER&page=1
`;

