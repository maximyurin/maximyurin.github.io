var body = document.querySelector('BODY');
body.style.backgroundColor = '#aaaaaa';

var wrapper = document.createElement('div');
wrapper.classList.add('page-wrapper');
wrapper.style.width = '70%';
wrapper.style.height = '800px';
wrapper.style.marginLeft = 'auto';
wrapper.style.marginRight = 'auto';
wrapper.style.paddingTop = '10px';
wrapper.style.marginTop = '50px';
wrapper.style.backgroundColor = '#eeeeee';
body.appendChild(wrapper);

var h1 = document.createElement('h1');
h1.classList.add('head-title');
h1.innerHTML = 'Тест по программированию';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arial';
h1.style.fontSize = '40px';
h1.style.color = '#745083';
wrapper.appendChild(h1);

var h1 = document.createElement('h1');
h1.classList.add('question1-title');
h1.innerHTML = '1.Вопрос №1';
h1.style.marginTop = '50px';
h1.style.marginBottom = '20px';
h1.style.textAlign = 'left';
h1.style.marginLeft = '150px';
h1.style.fontFamily = 'Arial';
h1.style.color = '#745083';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
checkbox1.style.textAlign = 'left';
checkbox1.style.marginLeft = '170px';
checkbox1.style.marginBottom = '10px';
checkbox1.style.fontFamily = 'Arial';
checkbox1.style.fontSize = '20px';
checkbox1.style.color = '#745083';
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
checkbox2.style.textAlign = 'left';
checkbox2.style.marginLeft = '170px';
checkbox2.style.fontFamily = 'Arial';
checkbox2.style.fontSize = '20px';
checkbox2.style.color = '#745083';
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
checkbox3.style.textAlign = 'left';
checkbox3.style.marginLeft = '170px';
checkbox3.style.fontFamily = 'Arial';
checkbox3.style.fontSize = '20px';
checkbox3.style.color = '#745083';
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var h1 = document.createElement('h1');
h1.classList.add('question2-title');
h1.innerHTML = '2.Вопрос №2';
h1.style.marginTop = '50px';
h1.style.marginBottom = '20px';
h1.style.textAlign = 'left';
h1.style.marginLeft = '150px';
h1.style.fontFamily = 'Arial';
h1.style.color = '#745083';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
checkbox1.style.textAlign = 'left';
checkbox1.style.marginLeft = '170px';
checkbox1.style.marginBottom = '10px';
checkbox1.style.fontFamily = 'Arial';
checkbox1.style.fontSize = '20px';
checkbox1.style.color = '#745083';
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
checkbox2.style.textAlign = 'left';
checkbox2.style.marginLeft = '170px';
checkbox2.style.fontFamily = 'Arial';
checkbox2.style.fontSize = '20px';
checkbox2.style.color = '#745083';
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
checkbox3.style.textAlign = 'left';
checkbox3.style.marginLeft = '170px';
checkbox3.style.fontFamily = 'Arial';
checkbox3.style.fontSize = '20px';
checkbox3.style.color = '#745083';
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var h1 = document.createElement('h1');
h1.classList.add('question3-title');
h1.innerHTML = '3.Вопрос №3';
h1.style.marginTop = '50px';
h1.style.marginBottom = '20px';
h1.style.textAlign = 'left';
h1.style.marginLeft = '150px';
h1.style.fontFamily = 'Arial';
h1.style.color = '#745083';
wrapper.appendChild(h1);

var checkbox1 = document.createElement('label');
checkbox1.classList.add('checkbox1');
checkbox1.style.textAlign = 'left';
checkbox1.style.marginLeft = '170px';
checkbox1.style.marginBottom = '10px';
checkbox1.style.fontFamily = 'Arial';
checkbox1.style.fontSize = '20px';
checkbox1.style.color = '#745083';
wrapper.appendChild(checkbox1);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox1.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №1');
checkbox1.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox1.appendChild(tab);

var checkbox2 = document.createElement('label');
checkbox2.classList.add('checkbox2');
checkbox2.style.textAlign = 'left';
checkbox2.style.marginLeft = '170px';
checkbox2.style.fontFamily = 'Arial';
checkbox2.style.fontSize = '20px';
checkbox2.style.color = '#745083';
wrapper.appendChild(checkbox2);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox2.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №2');
checkbox2.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox2.appendChild(tab);

var checkbox3 = document.createElement('label');
checkbox3.classList.add('checkbox3');
checkbox3.style.textAlign = 'left';
checkbox3.style.marginLeft = '170px';
checkbox3.style.fontFamily = 'Arial';
checkbox3.style.fontSize = '20px';
checkbox3.style.color = '#745083';
wrapper.appendChild(checkbox3);

var checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('value', 'text');
checkboxInput.style.marginRight = '10px';
checkboxInput.style.marginBottom = '15px';
checkbox3.appendChild(checkboxInput);

var textAnswerOne = document.createTextNode('Вариант ответа №3');
checkbox3.appendChild(textAnswerOne);

var tab = document.createElement('div');
checkbox3.appendChild(tab);

var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Проверить мои результаты';
button.style.width = '25%';
button.style.height = '40px';
button.style.marginLeft = '510px';
button.style.marginTop = '50px';
wrapper.appendChild(button);
