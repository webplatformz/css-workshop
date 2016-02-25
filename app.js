'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var playerElements = document.querySelectorAll('div.player');
    playerElements.forEach(function(player) {
        player.addEventListener('click', function() {
            playerElements.forEach(function(element) {
                if (element === player && !element.classList.contains('selected')) {
                    element.classList.add('selected')
                } else {
                    element.classList.remove('selected')
                }
            });
        });
    });
});