$("body").append("<button id='buttonSubmit'>Alert Button</Submit>")
$("#buttonSubmit").click(function () {
    alert("This button has been clicked!")
})


let formText = $("input[type='text']")
$("#submitButton").click(function () {
    alert(formText.val())
})

$("#div").on("mouseover", function () {

    $("#div").css("background-color", "blue")
})

$("#div").on("mouseout", function () {

    $("#div").css("background-color", "white")
})

$("body").append("<p id='paragraph'> This is some text for testing purposes</p>")
$("#paragraph").click(function () {
    $("#paragraph").css("color", getRandomColor)
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$("body").append("<button id='anotherbutton'> Name Button </button>")
$("body").append("<div id='div2'></div")

$("#anotherbutton").click(function () {
    $("body").append("<span> Amara Stephens </span>")
})
let friends = ["Ryan", "Autumn", "Ella", "Meghan", "Zac", "TJ", "Will", "Jenna", "Blake", "Avery"]
let counter=0
$("#friend-button").click(function () {
    if (counter< friends.length) {
    $("#ul").append(`<li id="list">${friends[counter]}</li>`) }
counter++


});
         

    


