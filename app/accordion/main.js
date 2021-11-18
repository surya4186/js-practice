let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);


function print(button) {
    button.addEventListener('click', function () {
        // console.log('i am clicked');
        let currentElement = this, 
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionText = questionWrapperElement.querySelector('.question-text')
        console.log(questionText);
        questionText.style.display = 'block';

    });
}

buttons.forEach(print);
