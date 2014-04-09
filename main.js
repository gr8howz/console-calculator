var whatOperation = "Press '+', '-', '*', '/', 'exp', 'sqrt', '!' to perform your calculation, '?' for help, or (q)uit";
var operation = prompt(whatOperation);
var num1, num2, result;
var output;

while(operation !== 'q') {

  switch(operation){
  case '+':
    console.log('you hit +');
    num1 = prompt("Enter number");
    output = "The sum of " + num1 + " and " + num2 + " = " + add(num1,num2);
    break;

  case '-':
    console.log('you hit -');
    break;

  case '*':
    console.log('you hit *');
    break;

  case '/':
    console.log('you hit /');
    break;

  case 'exp':
    console.log('you hit exp');
    break;

  case 'sqrt':
    console.log('you hit sqrt');
    num1 = prompt("Enter square root number");
    output = "The sqrt of " + num1 + " is " + sqrt(num1);
    break;

  case '!':
    console.log('you hit !');
    num1 = prompt("Enter factorial number");
    num1 = num1 * 1;
    output = "The factorial of " + num1 + " is " + factorial(num1);
    break;

  case '?':
    console.log('Google it!');
    break;

  default:
    console.log("huh?");
  }

  console.log(output);
  operation = prompt(whatOperation);
}


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
    return result;
}
