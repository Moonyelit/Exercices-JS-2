let images = document.querySelectorAll('img');


images.forEach(image => {
    image.addEventListener('mouseover', function changeImage () {
    images[1].src = "images/image1_2.jpg"; 
    images[2].src = "images/image2_2.jpg"; 
    images[3].src = "images/image3_2.jpg"; 
    images[4].src = "images/image4_2.jpg"; 
    images[5].src = "images/image5_2.jpg"; 
});
});

console.log(images);



// images.addEventListener('mouseover' , function initialImage () {
//     image.src = "images/image1_2.jpg"; 
// });

// image.addEventListener('mouseout', function remplaceImage () {
//     images.src = "images/image1.jpg"; 
// });


