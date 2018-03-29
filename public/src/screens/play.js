const PlayScreen = (function() {
    'use strict';

    const _el = document.getElementById('play-screen');
    const _gameTiles = _el.getElementsByClassName('game-tile')
    const _optionsButton = _el.getElementsByClassName('button')[1];
    let _gameIsInitialized = false;

    function addShowOptionsClick(onClick) {
      _optionsButton.addEventListener('click', onClick);
    }

    function _drawGameState() {
      // get the gamestate
      // loop through and draw each tile
      // draw the players on the bottom
    }

    function initializeIfNewGame() {
      // init new game if we don't currently have one going. else just resume.
      if (!_gameIsInitialized) {
        function tileClickedCallback() {
          const row = this.getAttribute('data-row');
          const col = this.getAttribute('data-col');
          const player = GameState.getCurrentPlayerTurn();
          const move = {
            row: row,
            col: col,
            player: player,
          };
          const isValidMove = GameState.validateMove(move);

          if (isValidMove) {
            GameState.pushNewMoveToGameState(move);

            if (GameState.currentPlayerIsInWinState()) {
              // go to end game menu!
              console.log('in win state');
            } else {
              GameState.switchTurns();
            }
            _drawGameState();
          }
        }

        // Initialize click listener for all game tiles
        Array.prototype.forEach.call(_gameTiles, function(tile) {
          tile.addEventListener('click', tileClickedCallback);
        });
        _gameIsInitialized = true;
      }
      _drawGameState();
    }

    function show() {
      _el.classList.remove('hide');
      initializeIfNewGame();
  	}

    function hide() {
      _el.classList.add('hide');
  	}


    return {
        show: show,
        hide: hide,
        addShowOptionsClick: addShowOptionsClick,
    };
}());
