// Web hecha con AlexCG Design, si te sirvió la plantilla por favor entra a AlexCG Design
// esta plantilla es libre para usar, así como otras plantillas más que tenemos en el canal...
// ->>>> https://www.youtube.com/alexcgdesign <<<<-
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});


let currentImageIndex = 0;
const images = [
    { src: './fotos/Ignacio1.jpg', alt: 'Imagen 1' },
    { src: './fotos/Ignacio2.jpg', alt: 'Imagen 2' },
    { src: './fotos/Ignacio3.jpg', alt: 'Imagen 3' },
    { src: './fotos/Ignacio4.jpg', alt: 'Imagen 4' },
    { src: './fotos/Ignacio6.jpg', alt: 'Imagen 5' },
    { src: './fotos/Ignacio7.jpeg', alt: 'Imagen 6' },
    { src: './fotos/Ignacio8.jpg', alt: 'Imagen 7' },
    { src: './fotos/Ignacio9.jpeg', alt: 'Imagen 8' },
    { src: './fotos/Ignacio10.jpg', alt: 'Imagen 9' },
    { src: './fotos/Ignacio11.jpg', alt: 'Imagen 10' },
    { src: './fotos/Ignacio12.jpeg', alt: 'Imagen 11' },
    { src: './fotos/Ignacio13.jpg', alt: 'Imagen 12' },

    // Añade más imágenes según sea necesario
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
}

function closeModal() {
    const modal = document.getElementById('imageModal');

    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    openModal(currentImageIndex);
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}
