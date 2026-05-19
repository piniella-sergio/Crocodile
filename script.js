console.log("Привет, Сергей! Сегодня чудесный день");
const a = 2;
const b = 7;

function summer(a, b) {
  return a + b;
}
console.log(summer(a, b));




var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top + 150 < windowPosition.bottom  // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
  ) {
    // Если элемент полностью видно, то запускаем следующий код
    console.clear();
    console.log('Вы видите элемент :)');
    if (!target.classList.contains('element-show')) {
      target.classList.add('element-show');
    }
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};
window.addEventListener('DOMContentLoaded', function domLoadedHandler(e) {
  var elements = document.querySelectorAll(".element-animation");
  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function () {
    elements.forEach(element => {
      Visible(element);
    });

  });

  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  elements.forEach(element => {
    Visible(element);
  });

  document.querySelector(".header__logo").addEventListener('click', () => {
    document.querySelector(".menu_block").classList.toggle('active');
  });
}, false);