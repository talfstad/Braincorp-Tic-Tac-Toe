const PlayScreen = (function() {
    'use strict';

    const _el = document.getElementById('play-screen');
    const _gameTiles = _el.getElementsByClassName('game-tile')
    const _optionsButton = _el.getElementsByClassName('button')[1];
    let _gameIsInitialized = false;

    function _getPlayerResourceDomElementForGameMode(player) {
      const { gameMode } = OptionsScreen.getGameOptions();

      const createImageElForPlayer = (resource) => {
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', resource);
        return imgEl;
      };

      if (gameMode === 'standard') {
        if (player === 'x') {
          const xPlayerImagePathForStandardMode = 'images/x-standard.png';
          return createImageElForPlayer(xPlayerImagePathForStandardMode);
        } else {
          const oPlayerImagePathForStandardMode = 'images/o-standard.png';
          return createImageElForPlayer(oPlayerImagePathForStandardMode);
        }
      } else {
        if (player === 'x') {
          const xPlayerImagePathForChampionshipMode = 'images/x-championship.svg';
          return createImageElForPlayer(xPlayerImagePathForChampionshipMode);
        } else {
          const oPlayerImagePathForChampionshipMode = 'images/o-championship.png';
          return createImageElForPlayer(oPlayerImagePathForChampionshipMode);
        }
      }
    }

    function _getGameTileEl({ row, col }) {
      // // Translation from row col to a useable index into our gameTiles array
      const gameTileIndex = (row -1) * 3 + (col - 1);
      return _gameTiles[gameTileIndex];
    };

    function _drawGameState() {
      const drawGameBoard = () => {
        const drawEmptyGameTile = (gameTileEl) => {
          gameTileEl.innerHTML = '';
        };

        const drawMoveGameTile = (gameTileEl, player) => {
          // get resource to draw based on options
          const resourceEl = _getPlayerResourceDomElementForGameMode(player);
          gameTileEl.appendChild(resourceEl);
        };

        for (let i=1 ; i<4 ; i++) {
          for (let j=1 ; j<4 ; j++) {
            const tileToDraw = {
              row: `${i}`,
              col: `${j}`,
            };

            const gameTileEl = _getGameTileEl(tileToDraw);

            if (GameState.moveIsNotInGameState(tileToDraw)) {
              drawEmptyGameTile(gameTileEl);
            } else {
              drawEmptyGameTile(gameTileEl);
              const { player } = GameState.getMoveFromGameState(tileToDraw);
              drawMoveGameTile(gameTileEl, player);
            }
          }
        }
      }
      drawGameBoard();
    }

    function addShowOptionsClick(onClick) {
      _optionsButton.addEventListener('click', onClick);
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
          const isValidMove = GameState.moveIsNotInGameState(move);

          if (isValidMove) {
            GameState.pushNewMoveToGameState(move);

            if (GameState.currentPlayerIsInWinState()) {
              ScreenController.showEndScreen();
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
