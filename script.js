const images=document.querySelectorAll(".grid img");

images.forEach(image=>{

image.addEventListener("mousemove",()=>{

image.style.transform="scale(1.04)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});