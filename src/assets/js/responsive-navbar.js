document.addEventListener('DOMContentLoaded', function() {
    var navTrigger = document.querySelector('.navTrigger');
    var mainListDiv = document.getElementById('mainListDiv');

    if (navTrigger && mainListDiv) {
        navTrigger.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien si navTrigger est un lien

            // Toggle la classe 'active' sur l'élément navTrigger
            navTrigger.classList.toggle('active');

            console.log("Clicked menu");

            // Toggle la classe 'show_list' sur l'élément mainListDiv
            mainListDiv.classList.toggle('show_list');

            // Afficher mainListDiv en utilisant un effet de transition
            mainListDiv.style.transition = 'opacity 0.3s ease';
            mainListDiv.style.opacity = mainListDiv.classList.contains('show_list') ? 1 : 0;
        });
    }

    window.addEventListener('scroll', function() {
        var nav = document.querySelector('.nav');
        if (nav) {
            if (window.pageYOffset > 50) {
                nav.classList.add('affix');
                console.log("OK");
            } else {
                nav.classList.remove('affix');
            }
        }
    });
});