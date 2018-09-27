var number = prompt('give me a number');


if (number < 100){
  alert("variable is less than 100")
}
else{
  alert('variable greater than 100')
}


namingGame()

function namingGame(){
  var variable = prompt('give me a string')
  var variable2 = prompt('give me another')
  console.log(variable)
  console.log(variable2)

  if(variable == variable2){
    alert('these are the same')
  }
  else{
    alert('these are not the same')
  }
}
