function forLoop(array){
  for (var cv = 1; cv <= 25; cv++){
    if(cv === 1){
      var string = "I am 1 strange loop."
    }else{
      var string = `I am ${cv} strange loops.`
    }
    array.push(string)
  }
  return array
}

function whileLoop(num){
  while(num > 0){
    console.log(num)
    num -= 1
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
} while (maybeTrue() && array.length > 0)
return array
}
