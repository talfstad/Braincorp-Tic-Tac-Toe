const EndScreen = (function() {
    'use strict';

    const _el = document.getElementById('end-screen');
    const _playAgainButton = _el.getElementsByClassName('button')[0];

    function addOnPlayAgainClick(onClick) {
      _playAgainButton.addEventListener('click', onClick);
    }

    function show() {
      _el.classList.remove('hide');
  	}

    function hide() {
      _el.classList.add('hide');
  	}

    return {
        show: show,
        hide: hide,
        addOnPlayAgainClick: addOnPlayAgainClick,
    };
}());
