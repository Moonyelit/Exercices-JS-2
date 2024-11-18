let images = document.querySelectorAll('img');

function changeImage () {
images.forEach(image => {
const originalSrc = image.src;
const hoverSrc = originalSrc.replace('.jpg' , '_2.jpg');

    image.addEventListener('mouseover', 

});
)};

console.log(images);




// images.addEventListener('mouseover' , function initialImage () {
//     image.src = "images/image1_2.jpg"; 
// });

// image.addEventListener('mouseout', function remplaceImage () {
//     images.src = "images/image1.jpg"; 
// });


