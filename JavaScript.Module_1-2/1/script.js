var exponentNumberResult = pow();

function pow(a, b) {
  var baseNumber = prompt('baseNumber');
  var exponentNumber = prompt('exponentNumber');
  var a = parseInt(baseNumber);
  var b = parseInt(exponentNumber);
  var result = a;
  if (b === 0) {
    result = a / a;

    return result;
  }
  
  if (b < 0) {

     for (var i = 1; i <= -b; i++) {
    result *= a;

    }

    result = 1 / result;
    }
    else {

     for(var i = 1; i < b; i++) {
     result *= a;
    }

    return result;
  }
}

console.log('RESULT' , exponentNumberResult);
