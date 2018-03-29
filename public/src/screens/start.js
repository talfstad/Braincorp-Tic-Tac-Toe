const StartScreen = (function() {
    'use strict';

    const _el = document.getElementById('start-screen');
    const _startButton = _el.getElementsByClassName('button')[0];

    function addOnStartGameClick(onClick) {
      _startButton.addEventListener('click', onClick);
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
        addOnStartGameClick: addOnStartGameClick,
    };
}());
