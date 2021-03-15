
var answer = 0


btnAdd.onclick=function(){
  let num1 = parseInt(inptNumber1.value)
  let num2 = parseInt(inptNumber2.value)
  let answer = num1 + num2
  lblAnswer.value = answer
}

btnClear.onclick=function(){
  lblAnswer.value = ""
}
