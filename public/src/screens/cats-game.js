const CatsGameScreen = (function() {
    'use strict';

    const _el = document.getElementById('cats-game-screen');
    const [_mainMenuButton] = _el.getElementsByClassName('button');

    function addOnMainMenuClick(onClick) {
      _mainMenuButton.addEventListener('click', onClick);
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
        addOnMainMenuClick,
    };
}());
