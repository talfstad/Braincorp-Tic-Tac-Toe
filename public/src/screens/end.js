const EndScreen = (function() {
    'use strict';

    const _el = document.getElementById('end-screen');
    const _playAgainButton = _el.getElementsByClassName('button')[0];

    function addOnPlayAgainClick(onClick) {
      _playAgainButton.addEventListener('click', onClick);
    }

    function _drawWinner() {
        const [playerDivEl] = _el.getElementsByClassName('player-image');
        const currentPlayerTurn = GameState.getCurrentPlayerTurn();
        playerDivEl.appendChild(PlayScreen.getPlayerResourceDomElementForGameMode(currentPlayerTurn));
    }

    function show() {
      _el.classList.remove('hide');
      _drawWinner();
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
