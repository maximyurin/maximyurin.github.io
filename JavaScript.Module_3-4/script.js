var body = document.querySelector('BODY');

var wrapper = document.createElement('div');
wrapper.classList.add('page-wrapper');
body.appendChild(wrapper);

var h1 = document.createElement('h1');
h1.classList.add('head-title');
h1.innerHTML = 'Тест по программированию';
wrapper.appendChild(h1);

var h1 = document.createElement('h1');
h1.classList.add('question1-title');
h1.innerHTML = '1.Вопрос №1';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var h1 = document.createElement('h1');
h1.classList.add('question2-title');
h1.innerHTML = '2.Вопрос №2';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var h1 = document.createElement('h1');
h1.classList.add('question3-title');
h1.innerHTML = '3.Вопрос №3';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox3.appendChild(tab);

var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Проверить мои результаты';
wrapper.appendChild(button);
