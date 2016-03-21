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
    else if (b < 0) {
    result = 1 / Math.pow(a, b);

    return 1 / result;
  }
    else {

     for(var j = 1; j < b; j++) {
     result *= a;
    }

    return result;
  }
}

console.log('RESULT' , exponentNumberResult);
