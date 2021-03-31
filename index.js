const hexDisplay = document.getElementById("hex-display")
const r = document.getElementById("r")
const g = document.getElementById("g")
const b = document.getElementById("b")
const submitBtn = document.getElementById("submit")
const preview = document.getElementById("preview")
const body = document.getElementsByTagName("body")[0]
let hexValue

submitBtn.addEventListener("click", () => {
    convertRGB(r.value, g.value, b.value)
})

function convertRGB(r, g, b){
    event.preventDefault()
    // set max number to 255 and min number to 0
    let first
    let second
    let third
    if (r > 255) { first = 255 } else if (r < 0) { 
      first = 0 
    } else { first = r }
    if (g > 255) { second = 255 } else if (g < 0) { 
      second = 0 
    } else { second = g }
    if (b > 255) { third = 255 } else if (b < 0) { 
      third = 0 
    } else { third = b }
    // convert first, second and third values to hex values
    const hexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let firstHexA = hexArr[Math.floor(first / 16)]
    let firstHexB = hexArr[(first / 16 - Math.floor(first / 16)) * 16]
    
    let secondHexA = hexArr[Math.floor(second / 16)]
    let secondHexB = hexArr[(second / 16 - Math.floor(second / 16)) * 16]
    
    let thirdHexA = hexArr[Math.floor(third / 16)]
    let thirdHexB = hexArr[(third / 16 - Math.floor(third / 16)) * 16]
    
    hexValue = `#${firstHexA + firstHexB + secondHexA + secondHexB + thirdHexA + thirdHexB}`

    preview.style.background = hexValue
    body.style.backgroundImage = `linear-gradient(to bottom, ${hexValue}, white)`

    return hexDisplay.innerHTML = hexValue 
  }