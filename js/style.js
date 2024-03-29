
document.addEventListener('DOMContentLoaded', function () {

    // MODAIS DOS PROCEDIMENTOS    // MODAIS DOS PROCEDIMENTOS
    // MODAIS DOS PROCEDIMENTOS    // MODAIS DOS PROCEDIMENTOS

    modalContent = document.querySelector('.modal-content');
    // hof
    procHof = document.getElementById('proc-hof');
    modalProcHof = document.getElementById('modal-proc-hof');

    //hoc
    procHoc = document.getElementById('proc-hoc');
    modalProcHoc = document.getElementById('modal-proc-hoc');

    //capilar
    procCapilar = document.getElementById('proc-capilar');
    modalProcCapilar = document.getElementById('modal-proc-capilar');


    //HOF CODES

    procHof.addEventListener('click', function () {
        modalProcHof.style.display = 'flex';
    });

    modalProcHof.addEventListener('click', (event) => {
        // Verifique se o clique ocorreu fora do elemento novoModalWhite
        if (!modalContent.contains(event.target)) {
            modalProcHof.style.display = "none";
        }
    });

    // HOC CODES

    procHoc.addEventListener('click', function () {
        modalProcHoc.style.display = 'flex';
    });

    modalProcHoc.addEventListener('click', (event) => {
        // Verifique se o clique ocorreu fora do elemento novoModalWhite
        if (!modalContent.contains(event.target)) {
            modalProcHoc.style.display = "none";
        }
    });

    // CAPILAR CODES

    procCapilar.addEventListener('click', function () {
        modalProcCapilar.style.display = 'flex';
    });

    modalProcCapilar.addEventListener('click', (event) => {
        // Verifique se o clique ocorreu fora do elemento novoModalWhite
        if (!modalContent.contains(event.target)) {
            modalProcCapilar.style.display = "none";
        }
    });

    // MODAIS DOS PROCEDIMENTOS    // MODAIS DOS PROCEDIMENTOS
    // MODAIS DOS PROCEDIMENTOS    // MODAIS DOS PROCEDIMENTOS


    // MENU HAMBURGUER     // MENU HAMBURGUER     // MENU HAMBURGUER 
    // MENU HAMBURGUER     // MENU HAMBURGUER     // MENU HAMBURGUER 


    menuHamburguer = document.getElementById('menu-hamburguer');
    hambModal = document.getElementById('hamb-modal');


    menuHamburguer.addEventListener('click', function () {
        if (hambModal.style.display === "flex") {
            hambModal.style.display = "none";
        } else {
            hambModal.style.display = "flex";
        }
    });

    // MENU HAMBURGUER     // MENU HAMBURGUER     // MENU HAMBURGUER 
    // MENU HAMBURGUER     // MENU HAMBURGUER     // MENU HAMBURGUER 

    
});

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var footer = document.getElementById('footer');
    var footerCol = document.getElementById('footer-col');

    if (width <= 880) {
        footer.style.display = 'none';
        footerCol.style.display = 'flex';
    } else {
        footer.style.display = 'flex';
        footerCol.style.display = 'none';
    }
});

// Execute imediatamente a função para aplicar o estilo correto no carregamento da página
window.dispatchEvent(new Event('resize'));
