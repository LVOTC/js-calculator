var result = '0';
var action = '';
var number = '';
var operation = '';
window.onload = function(){

document.getElementById('result').innerHTML = result;
};

function clearResult(){
  result = '0';
  action = result
    dots = 0;
  document.getElementById('result').innerHTML = result;
}
function numberInput(number){
  if (action == 0 || action == '') {  // jei veiksmas 0
    action = number;
    document.getElementById("result").innerHTML = number;
  } else{  // jei veiksmas daugiau > 0
  action = action + '' + number;
  document.getElementById("result").innerHTML = action;
  }
}

function plusNumbers(){
  result = action;
  action = '';
  operation = 'plus';
    dots = 0;
  document.getElementById("result").innerHTML = "+";

}
function minusNumbers(){
  result = action;
  action = '';
  operation = 'minus';
  dots = 0;
  document.getElementById("result").innerHTML = '-';
}
function timesNumber(){
  result = action;
  action = '';
  operation = 'times';
    dots = 0;
  document.getElementById("result").innerHTML = '*';
}
function divideNumber(){
  result = action;
  action = '';
  operation = 'divide';
    dots = 0;
  document.getElementById("result").innerHTML = '/';
}
function backSpace(){
  //action.length
  var numberLength = action.length - 1;
  if(action.length > -1){
    action = action.substring(0, numberLength);
  }
  if(action == ''){
    action = 0;
  }
  document.getElementById("result").innerHTML = action;
}
var dots = 0;
function addDot(){

  if(dots == 0){
        dots += 1;
    action = action + '.';
    document.getElementById("result").innerHTML = action;
  }

}

function showResult(){
  if(operation == 'plus'){
    result = parseFloat(result) + parseFloat(action); // tekstini formata keicia i realuji skaiciu
  } else if(operation == 'minus'){
    result -= parseFloat(action);
  } else if(operation == 'times'){
    result *= parseFloat(action);
  } else if(operation == 'divide'){
    result /= parseFloat(action);
  } else{
    result = '0';
  }

  document.getElementById("result").innerHTML = result;
  result = action = operation = ''
  //isvalome visus duomenis skaiciuotuve
}
// function zero(){
//   var zero = 0;
//   notZero(zero);
//
// }
// function one(){
//   var one = 1;
//   notZero(one);
// }
// function two(){
//   var two = 2;
//   notZero(two);
// }
// function tree(){
//   var tree = 3;
//   notZero(tree);
// }
// function four(){
//   var four = 4;
//   notZero(four);
// }
// function five(){
//   var five = 5;
//   notZero(five);
// }
// function six(){
//   var six = 6;
//   notZero(six);
// }
// function seven(){
//   var seven = 7;
//   notZero(seven);
// }
// function eight(){
//   var eight = 8;
//   notZero(eight);
// }
// function nine(){
//   var nine = 9;
//   notZero(nine);
// }
