var exponentNumberResult = pow();

function pow(a, b) {
  var baseNumber = prompt('baseNumber');
  var exponentNumber = prompt('exponentNumber');
  var a = parseInt(baseNumber);
  var b = parseInt(exponentNumber);
  var result = a;

   for(var j = 1; j < b; j++) {
     result *= a;
   }

  return result;
}

console.log('RESULT' , exponentNumberResult);
