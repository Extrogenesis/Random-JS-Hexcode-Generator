let div = document.getElementsByClassName('container')
let p = document.getElementsByClassName('text')

function generateRandomNumber(){
    let number = Math.random() * 100

    if (number >= 48 && number <= 71){
        if (number >= 58 && number <= 65){
            return generateRandomNumber()
        }
        return number
    } else {
        return generateRandomNumber()
    }
    
}

function generateHex(){
    let arr = []
     
    for (let count = 0; count < 6; count++){
        let number = Math.floor(generateRandomNumber())
        let hexSlice = String.fromCharCode(number)
        arr.push(hexSlice)
    }
    
    return `#${arr.join('')}`
}

function spawnColors(){
    for (var i = 0; i < div.length; i++){
      let hexcode = generateHex()
      div[i].style.backgroundColor = hexcode
      p[i].innerHTML = hexcode
    }
  }

function getNewColor(event){
    let hexcode = generateHex()
    let element = event.target.previousElementSibling
    element.style.backgroundColor = hexcode
    element.previousElementSibling.innerHTML = hexcode
}

spawnColors()