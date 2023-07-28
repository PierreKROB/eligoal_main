let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {

            setTimeout(() => {
                span.classList.add('active')
            }, (idx + 1) * 400);

        });

        setTimeout(() => {

            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)

            })
        }, 2000);
        
        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300);
    })
})




$(document).ready(function () {
    // Tableau contenant les noms des icônes FontAwesome
    var iconNames = [
        "fa-user-circle",
        "fa-battery-half",
        "fa-bolt",
        "fa-bookmark",
        "fa-cog",
        "fas fa-tshirt",
        "fa-envelope",
        "fa-gift",
        "fas fa-tint",
        "fas fa-thumbs-up",
        "fas fa-space-shuttle",
        "fa-globe",
        "fa-graduation-cap",
        "fas fa-server",
        "fas fa-mouse",
        "fa-heart",
        "fa-info-circle",
        "fa-life-ring",
        "fa-paper-plane",
        "fa-file"
    ];

    // Sélectionnez le conteneur des icônes par sa classe
    var iconsContainer = $('.icons-container');

    // Parcours du tableau d'icônes pour générer les balises <i> et les ajouter au conteneur
    iconNames.forEach(function (iconName) {
        var iconElement = $('<i>').addClass('fa ' + iconName).attr('aria-hidden', 'true');
        iconsContainer.append(iconElement);
    });
});