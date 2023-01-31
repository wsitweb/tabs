// $(".option").click(function(){
//     $(".option").removeClass("active");
//     $(this).addClass("active");
    
//  });

document.querySelectorAll('.option').forEach((element, index, arr) => {
    element.addEventListener('click', (event) => {
        document.querySelector('.option.active').classList.remove('active');
        console.log(event.target.classList.add('active'));
    });
});