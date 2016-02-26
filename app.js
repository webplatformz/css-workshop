'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var playerElements = document.querySelectorAll('div.player');

    for(var i = 0; i < playerElements.length; i++) {
        var player = playerElements[i];
        player.addEventListener('click', function(player) {
            for(var j = 0; j < playerElements.length; j++) {
                var actPlayer = playerElements[j];
                if (actPlayer === player && !actPlayer.classList.contains('selected')) {
                    actPlayer.classList.add('selected');
                } else {
                    actPlayer.classList.remove('selected');
                }
            }

            if (document.querySelectorAll('.player.selected').length) {
                document.body.classList.add('selected');
            } else {
                document.body.classList.remove('selected');
            }
        }.bind(null, player));
    }
});