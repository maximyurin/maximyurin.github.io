var userNames = [];
userNames.length = 5;

for (i = 0; i<userNames.length; i++){
	userNames[i] = prompt('Введите любое имя');
}

var userName = prompt('А теперь введите свое имя');

console.log(userNames);
console.log(userName);

for (i = 0; i<userNames.length; i++){
if(userNames[i] === userName){
  var correct = (userName);
}
}

if(correct) {
	alert('Поздравляем вы успешно вошли!');
}else{
	alert('Извините, но такого имени у нас нет');
}
