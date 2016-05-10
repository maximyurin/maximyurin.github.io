'use strict';

//объявляем массив объектов с вопросами и ответами
var testData = [
{
    question: 'Что обозначает директива ‘use strict’?',
    answer: ['Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5', 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6', 'Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.'],
    check: ['true', 'false', 'false'],
    name: 'first'
},
{
    question: 'Для чего используется конструкция try-catch в javascript?',
    answer: ['Для генерирования ошибок.', 'Для обработки возможных ошибок', 'Для замены условного оператора if'],
    check: ['false', 'true', 'false'],
    name: 'second'
},
{
    question: 'Для чего необходим блок finally?',
    answer: ['Код внутри этого блока будет выполнен, если внутри блока try возникли ошибки', 'Код внутри этого блока будет выполнен, если код внутри блока try выполнен без ошибок', 'Код внутри этого блока будет в любом случае выполнен'],
    check: ['false', 'false', 'true'],
    name: 'third'
},
{
    question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
    answer: ['Любая переменная должна объявляться с использованием ключевого слова var', 'Название переменных должно быть camel-case с маленькой буквы.', 'Переменные функций должны объявляться с использованием ключевого слова var'],
    check: ['true', 'false', 'false'],
    name: 'fourth'
},
{
    question: 'Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)?',
    answer: ['null', 'undefined', 'window'],
    check: ['false', 'true', 'false'],
    name: 'fifth'
}
];

//записываем массив объектов с вопросами и ответами в localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

var test = $('#test').html();

var content = localStorage.getItem('questionAnswer');
content = JSON.parse(content);

var page = tmpl(test, { //формируем тест с помощью шаблонизатора
	data: content
});

$('.show_test').click(function() { // выводим тест на экран по клику на кнопку
	$('.show_test').hide();
	$('.check').css("display", "block");
    $('.check').before(page);
});

$('.check').on('click', function() { //проверяем результаты по клику на кнопку
    var $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
    console.log($result);

$('.modal_text')[0].innerHTML = $result ? 'Поздравляем, вы прошли тест!!!' : 'К сожалению вы не прошли тест. Обновите страницу и попробуйте ещё раз!!!'; // записываем результат теста в модальное окно
$('.modal_window').css("display", "block").animate({opacity: 1}, 500); //показываем модальное окно
$('.overlay').show('slow'); //показываем фон

});

$('.modal_button').on('click', function(){
    $('.modal_window').animate({opacity: 0}, 500, function() {
        $(this).css("display", "none"); //убираем модальное окно
        $('.overlay').hide('slow'); //убираем фон
        $('.container').css("display", "none"); // скрываем тест
        $('.check')[0].innerHTML = '>> Обновить страницу <<';
        $('.check').click(function() {
              location.reload();    //функция перегрузки страницы
            });
    })
    $('.checkbox').each(function() { //очищаем чекбоксы
        $(this).prop('checked', false);
    });
  });

})
