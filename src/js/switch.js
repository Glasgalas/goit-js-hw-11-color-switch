// массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// функция определения рандомного числа в промежутке от min до max
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ссылки на элементы страницы
const btnStart = document.getElementById('js-start');
const btnStop = document.getElementById('js-stop');
const bodyRef = document.querySelector('body');

// функция смены фонового цвета
function changeBody() {
  const randomItem = randomIntegerFromInterval(0, colors.length - 1);
  bodyRef.style.backgroundColor = colors[randomItem];
}

// переменная для ID интервала
let intervalID = null;

// функция запуска интервала
function startChangeBody() {
  console.log('START');
  intervalID = setInterval(changeBody, 1000);
  btnStart.disabled = true;
}

// функция остановки интервала
function stopChangeBody() {
  console.log('STOP');
  clearInterval(intervalID);
  btnStart.disabled = false;
}

// слушатели на кнопки старт и стоп
btnStart.addEventListener('click', startChangeBody);
btnStop.addEventListener('click', stopChangeBody);
