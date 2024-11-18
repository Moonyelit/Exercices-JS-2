let image = document.getElementById('image1');

image.addEventListener('mouseover' , function initialImage  () {
    image.src = "images/image1_2.jpg"; 
});

image.addEventListener('mouseout', function remplaceImage () {
    image.src = "images/image1.jpg"; 
});


