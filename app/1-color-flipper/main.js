let myButton = document.getElementById('color-generator');
// console.log(myButton);
myButton.addEventListener('click', function () {
    let bodyTag = document.getElementById('body-tag');

    console.log(generateRandomColor())
    bodyTag.style.backgroundColor = generateRandomColor();

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {

    let red, green, blue, style;
    head = 'rgb(',
        seperator = ' ',
        last = ')';
    red = getRandomInt(0, 255);
    green = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);

    console.log(red, green, blue);
    style = head + red + seperator + green + seperator + blue + last;
    // console.log(style);
    return style;
}
