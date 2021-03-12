
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnSubmit.onclick=function(){
  let name = inptName.value
  if (members.includes(name) == true){
    lblMessage.textContent = `Hello ${name}, you are a member`
  } else {
    lblMessage.textContent = `Hello ${name}, you are not a member`
    member.push(name)
    }
}
