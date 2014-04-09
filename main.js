function add(x,y){
  var result = x + y;
  return result;
}

function subtract(x,y){
  var result = x - y;
  return result;
}

function multiply(x,y){
  var result = x * y;
  return result;
}

function divide(x,y){
  var result = x / y;
  return result;
}

function exponent(base,exp){
  var result = Math.pow(base,exp);
  return result;
}

function sqrt(n){
  var result = Math.pow(n,0.5);
  return result;
}

function factorial(n){
  var result = n;
    while (n > 1){
      result = result * (n-1);
      n = (n-1);
    }
}
