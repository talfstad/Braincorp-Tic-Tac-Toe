const OptionsScreen = (function() {
    'use strict';

    const _el = document.getElementById('options-screen');
    const _closeButton = _el.getElementsByClassName('button')[0];
    const _exitButton = _el.getElementsByClassName('button')[1];
    const _gameModeRadios = _el.querySelectorAll('input[type=radio][name="gameMode"]');

    // Initialize change listener for game mode radio buttons
    Array.prototype.forEach.call(_gameModeRadios, function(radio) {
       radio.addEventListener('change', function() {
         _gameOptions.gameMode = radio.value;
       });
    });

    function addOnCloseOptionsClick(onClick) {
      _closeButton.addEventListener('click', onClick);
    }

    function addOnExitGameClick(onClick) {
      _exitButton.addEventListener('click', onClick);
    }

    const _gameOptions = {
      gameMode: 'standard',
    };

    function getGameOptions() {
      return _gameOptions;
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
        addOnCloseOptionsClick: addOnCloseOptionsClick,
        addOnExitGameClick: addOnExitGameClick,
        getGameOptions: getGameOptions,
    };
}());
