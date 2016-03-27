var baseNumber = prompt('baseNumber');
var exponentNumber = prompt('exponentNumber');
var a = baseNumber;
var b = exponentNumber;

var exponentNumberResult = pow(baseNumber, exponentNumber);

function pow(baseNumber, exponentNumber) {

  var result = a;

  if (b == 0) {
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
