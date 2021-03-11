
var answer = 0


btnAdd.onclick=function(){
  let num1 = parsInt(inptNumber1.value)
  let num2 = parsInt(inptNumber2.value)
  let answer = num1 + num2
  lblAnswer = answer
}

btnClear.onclick=function(){
  lblAnswer.value = ""
}
