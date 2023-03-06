document.querySelectorAll('.option').forEach((element, index, arr) => {
    element.addEventListener('click', () => {
        let elem = event.target.closest('.option'); 
        if(elem.classList[1] != 'active'){
            document.querySelector('.option.active').classList.remove('active');
            elem.classList.add('active');
        }
    });
});