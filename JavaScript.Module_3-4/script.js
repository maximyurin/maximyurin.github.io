var testPage = {
    head: document.createElement('h1'),
    tab2: document.createElement('br'),
    submitButton: document.createElement('INPUT'),
    fillCheckbox: function(number) {
        for (var i = 1; i <= number; i++) {
            var checkBox = document.createElement('INPUT');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('id', 'answer' + counter);
            checkBox.setAttribute('value', 'a');
            var answerLabel = document.createElement('label');
            answerLabel.setAttribute('for', 'answer' + counter);
            answerLabel.appendChild(checkBox);
            answerLabel.appendChild(document.createTextNode('Вариант ответа № ' + i));
            var tab = document.createElement('br');
            document.body.appendChild(answerLabel);
            document.body.appendChild(tab);
            counter++;
        }
    },
    question: function(number) {
        for(var i = 1; i <= number; i++) {
            var subHeading = document.createElement('p');
            subHeading.className = 'question';
            subHeading.innerHTML = 'Вопрос № ' + i;
            document.body.appendChild(subHeading);
            testPage.fillCheckbox(3);
        }
    }
};


testPage.head.className = 'head-title';
testPage.head.innerHTML = 'Тесты по программированию';
document.body.appendChild(testPage.head);


testPage.submitButton.className = 'button';
document.body.appendChild(testPage.submitButton);

var counter = 1;

testPage.question(3);


document.body.appendChild(testPage.tab2);
testPage.submitButton.setAttribute('type', 'submit');
testPage.submitButton.setAttribute('id', 'submitButton');
testPage.submitButton.setAttribute('value', 'Проверить мои результаты');
document.body.appendChild(testPage.submitButton);
