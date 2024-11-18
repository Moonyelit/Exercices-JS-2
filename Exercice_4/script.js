let resetForm = document.querySelector('button');

resetForm.addEventListener('click', function resetInputForm() {
    let inputs = document.querySelectorAll('input'); 
    inputs.forEach(input => {
        input.value = ''; 
    });
});

console.log(resetForm);
