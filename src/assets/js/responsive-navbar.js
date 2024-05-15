document.addEventListener('DOMContentLoaded', function() {
    var navTrigger = document.querySelector('.navTrigger');
    var mainListDiv = document.getElementById('mainListDiv');

    if (navTrigger && mainListDiv) {
        navTrigger.addEventListener('click', function(event) {
            event.preventDefault();

            // Toggle la classe 'active' sur l'élément navTrigger
            navTrigger.classList.toggle('active');

            console.log("Clicked menu");
            
            // Toggle la classe 'main_list' sur l'élément mainListDiv
            mainListDiv.classList.toggle('main_list');
            

            // Afficher mainListDiv en utilisant un effet de fadeIn
            if (mainListDiv.classList.contains('main_list')) {
                mainListDiv.style.opacity = '1';
            } else {
                mainListDiv.style.opacity = '1';
            }
            
        });
    }

    window.addEventListener('scroll', function() {
        var nav = document.querySelector('.nav');
        if (nav) {
            if (window.pageYOffset > 30) {
                nav.classList.add('affix');
            } else {
                nav.classList.remove('affix');
            }
        }
    });

});