let btn = document.createElement("button")

btn.addEventListener("click", function () {
    alert("This button has been clicked!")
});

let submitButton = document.querySelector("#submitBtn")

submitButton.addEventListener("click", function () {
    let textValue = document.querySelector("#txt")
    alert(textValue.value)

});

let div = document.getElementById("div")

div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "blue"


    div.addEventListener("mouseout", function () {
        div.style.backgroundColor = "white"


    })
})

let paragraph = document.createElement("p");
document.body.appendChild(paragraph)
paragraph.textContent = "This is some text for testing purposes"


paragraph.addEventListener("click", function () {
    paragraph.style.color = getRandomColor()
})


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
div2 = document.createElement("div")
btn2 = document.createElement("button")
btn2.textContent = "Name Button"
document.body.appendChild(btn2);
document.body.appendChild(div2);

btn2.addEventListener("click", function () {
    span = document.createElement("span");
    span.textContent = "Amara Stephens"
    document.body.appendChild(span)

})

let friends = ["Ryan", "Autumn", "Ella", "Meghan", "Zac", "TJ", "Will", "Jenna", "Blake", "Avery"]

friendsButton = document.querySelector("#friend-button")
let counter = 0
friendsButton.addEventListener("click", function () {
    
    if (counter< friends.length) {
    let li = document.createElement("li")
    let ul = document.querySelector("#ul")
    ul.appendChild(li)

        li.textContent = friends[counter]
        counter++
      

    }

})