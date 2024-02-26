
document.addEventListener('DOMContentLoaded', function () {

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


});