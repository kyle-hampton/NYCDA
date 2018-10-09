function stringInput(arg) {
  counter = 0;
    console.log(arg.length)

    let result = arg.split('')
    if(result.length % 2 == 0){
      result.replace(result.indexOf(), "#")
    }
    if (result.length % 2 == 0){
      result.replace('-')
    }
    console.log(result)
}

function capital(arg){
  arg = "Boston is the capital of the US"

  let boston = arg.split(' ')

  boston.splice(0, 1, 'Washington')
  console.log(boston.join(' '))
}
