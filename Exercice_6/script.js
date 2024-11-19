const images = document.querySelectorAll("#container > img");

console.log(images);

images.forEach((image) => {
    image.addEventListener("mouseenter", handleMouseEnter);
    image.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseEnter(event){
    const imgTag = event.target;

    imgTag.src = imgTag.src.replace('.jpg', '_2.jpg');
}

function handleMouseLeave(event){
    const imgTag = event.target;

    imgTag.src = imgTag.src.replace('_2.jpg', '.jpg');
}