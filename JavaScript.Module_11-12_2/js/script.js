$(document).ready(function(){

  var user = {
    name: 'Максим Юрин',
    calling: 'Студент железнодорожного университета',
    reasons: ['Я мечтаю стать frontend разработчиком;', "Потому что это моё призвание;", "Хочу кодить, кодить и кодить)"],
    phone: '+380666362028',
    social: {
      'Вконтакте': 'http://vk.com/maxim_yurin',
      'Facebook': 'https://www.facebook.com/maxim.yurin.71',
      },
    feedback: 'Если нужно могу построить вам тепловоз)'
  };

  var template = document.querySelector('#user').innerHTML;
  var bodyElement = document.body;

  var content = tmpl(template, user);

  bodyElement.insertAdjacentHTML('afterBegin', content);

});
