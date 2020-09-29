function processInput(){
  if (validateInput(document.getElementById("exampleInputfirstName1"))){
    var firstName = validateInput(document.getElementById("exampleInputfirstName1"))
  }
  if (validateInput(document.getElementById("exampleInputlastName1"))){
    var lastName = validateInput(document.getElementById("exampleInputlastName1"))
  }
  if (validateEmail(document.getElementById("exampleInputEmail1"))){
    var email = validateInput(document.getElementById("exampleInputEmail1"))
  }
  if(firstName && lastName && email){
    document.getElementsByClassName("exampleInputLotoNumber1")
    lotoNumbers = Array.from(document.getElementsByClassName("exampleInputLotoNumber1")).map(function(element){return element.value})
    checkLoto(firstName, lastName, email, lotoNumbers)
  }
}

function validateEmail(element) {
  Array.from(element.parentNode.getElementsByClassName('alert')).forEach(element => element.remove())
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(element.value).toLowerCase())){
    return element.value
  }else{
    element.parentNode.insertAdjacentHTML("afterbegin", `<div class='alert alert-danger'>${element.parentNode.getElementsByTagName("label")[0].innerHTML} must be valide</div>`)
  }
}

function validateInput(element) {
  Array.from(element.parentNode.getElementsByClassName('alert')).forEach(element => element.remove())
  if (element.value) {
    return element.value
  }else{
    element.parentNode.insertAdjacentHTML("afterbegin", `<div class='alert alert-danger'>${element.parentNode.getElementsByTagName("label")[0].innerHTML}can't be blank</div>`)
  }
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  winingRow = lotoNumbers.map(function(number){return Math.floor(Math.random()*9)})    
  if(666000 == lotoNumbers){
    alert("YOU WON 1MILLION DOLARS $$$$$$$$$$")
  }else{
    alert(`Mister ${firstname} ${lastname} you loose, winning number was ${winingRow}`)
  }
}

document.getElementsByClassName('btn')[0].addEventListener("click", processInput)