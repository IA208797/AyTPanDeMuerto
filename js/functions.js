document.addEventListener('DOMContentLoaded', function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//MENU DE NAVEGACION
console.clear();

const menuEl = document.querySelector(".menu");
const mostrarButton = menuEl.querySelector(".menu--button");

mostrarButton.addEventListener("click", mostrarMenu);

function mostrarMenu() {
    if (menuEl.classList.contains("mostrar")) {
        menuEl.classList.remove("mostrar");
    } else {
        menuEl.classList.add("mostrar");
    }
}

//TABS Y CONTENT
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const content = tab.nextElementSibling;
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            tab.classList.add('active');
        } else {
            content.style.display = 'none';
            tab.classList.remove('active');
        }
    });
});
//MAPA
function mostrarOcultarInformacionEstado(estado, infoId) {
    const info = document.getElementById(infoId);
    const infos = document.querySelectorAll('.estado-info');

    infos.forEach((info) => {
        info.style.display = 'none';
    });

    if (info.style.display === 'none') {
        info.style.display = 'block';
    }
}

const estados = document.querySelectorAll('path[name]');
estados.forEach((estado) => {
    estado.addEventListener('click', () => {
        const estadoName = estado.getAttribute('name');
        const infoId = estadoName + 'Info';
        mostrarOcultarInformacionEstado(estado, infoId);
    });
});

const cuadrosTexto = document.querySelectorAll('.estado-info');
cuadrosTexto.forEach((cuadroTexto) => {
    cuadroTexto.addEventListener('click', () => {
        cuadroTexto.style.display = 'none';
    });
});

});


