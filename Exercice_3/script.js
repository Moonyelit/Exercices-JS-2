let formKeyboard = document.querySelector('form');

formKeyboard.addEventListener('keydown' , function keyboardPress  (event) {
    alert("Vous avez appuyé sur la touche " + event.key)
});

console.log(formKeyboard);

