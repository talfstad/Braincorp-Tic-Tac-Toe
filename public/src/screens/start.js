const StartScreen = (function(window) {
    'use strict';

    const _el = document.getElementById('start-screen');
    const startButton = _el.getElementsByClassName('button')[0];

    function addOnClick(onClick) {
      startButton.addEventListener('click', onClick);
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
        addOnClick: addOnClick,
    };
}(window));
