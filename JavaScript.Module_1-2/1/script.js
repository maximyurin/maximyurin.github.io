var baseNumber = prompt('baseNumber');
var exponentNumber = prompt('exponentNumber');

var exponentNumberResult = pow();

function pow(a, b) {
  var a = parseInt(baseNumber);
  var b = parseInt(exponentNumber);
  var result = a;

  if (b === 0) {
    result = 1;

    return result;
  }

  if (b < 0) {

     for (var i = 1; i < -b; i++) {
    result *= a;
    }

    return 1 / result;
    }

    else {

     for(var i = 1; i < b; i++) {
     result *= a;
    }

    return result;
  }
}

console.log('RESULT' , exponentNumberResult);
