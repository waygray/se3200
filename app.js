console.log("Hello World")

document.querySelector("h1").innerHTML = "This is my new text"
let h = document.querySelector("h2")
h.innerHTML = "Something else new"

let button = document.querySelector('button')
button.onclick = function () {
    let h = document.querySelector("h1")
    h.innerHTML = "the button was clicked"
}

let button2 = document.querySelector('#thing1')
button2.onclick = function () {
    let b = document.querySelector("body")
    b.style.backgroundColor = "blue"
}

let button3 = document.querySelector('#thing2')
button3.onclick = function () {
    let b2 = document.querySelector('body')
    b2.style.backgroundColor = "red"
}

let button4 = document.querySelector('#thing3')
button4.onclick = function () {
    let b3 = document.querySelector('body')
    b3.style.backgroundColor = "green"
}
