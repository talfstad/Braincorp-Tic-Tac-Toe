const GameState = (function() {
    'use strict';

    let _currentPlayer = 'x';

    // Tracks gamestate
    let _gameState = [];

    const _winStates = [
      // Diagnal left to right
      [{
        row: '1',
        col: '1',
      }, {
        row: '2',
        col: '2',
      }, {
        row: '3',
        col: '3',
      }],
      // Diagnal right to left
      [{
        row: '1',
        col: '3',
      }, {
        row: '2',
        col: '2',
      }, {
        row: '3',
        col: '1',
      }],
      // Horizontal row 1
      [{
        row: '1',
        col: '1',
      }, {
        row: '1',
        col: '2',
      }, {
        row: '1',
        col: '3',
      }],
      // Horizontal row 2
      [{
        row: '2',
        col: '1',
      }, {
        row: '2',
        col: '2',
      }, {
        row: '2',
        col: '3',
      }],
      // Horizontal row 3
      [{
        row: '3',
        col: '1',
      }, {
        row: '3',
        col: '2',
      }, {
        row: '3',
        col: '3',
      }],
      // Vertical col 1
      [{
        row: '1',
        col: '1',
      }, {
        row: '2',
        col: '1',
      }, {
        row: '3',
        col: '1',
      }],
      // Vertical col 2
      [{
        row: '1',
        col: '2',
      }, {
        row: '2',
        col: '2',
      }, {
        row: '3',
        col: '2',
      }],
      // Vertical col 3
      [{
        row: '1',
        col: '3',
      }, {
        row: '2',
        col: '3',
      }, {
        row: '3',
        col: '3',
      }],
    ];

    function switchTurns() {
      if (_currentPlayer === 'x') {
        _currentPlayer = 'o';
      } else {
        _currentPlayer = 'x'
      }
    }

    function undoLastMove() {
      _gameState.pop();
      switchTurns();
    }

    function pushNewMoveToGameState(move) {
      _gameState.push(move);
    }

    function setGameState(gameState) {
      _gameState = gameState;
    }

    function currentPlayerIsInWinState() {
      // Check to see if any win states are part of the game state for the current player
      for (let i=0 ; i<_winStates.length ; i++) {
        const winStateToTest = _winStates[i];
        const filteredWinState = winStateToTest.filter((winMove) => {
          const winMoveToTest = {
            ...winMove,
            player: _currentPlayer,
          };

          const filteredGamestate = _gameState.filter((gameMove) => {
            const movesAreEqual = (move1, move2) => {
              return move1.row === move2.row && move1.col === move2.col && move1.player === move2.player;
            };
            return movesAreEqual(gameMove, winMoveToTest);
          });

          return filteredGamestate.length === 1;
        });
        // If the gamestate does not include a win state move it
        // is filtered out above, so if we have a filteredWinState
        // that is still length 3 after we test it it is a win state
        if (filteredWinState.length === 3) {
          return true;
        }
      }
      return false;
    }

    function getMoveFromGameState({ row, col }) {
      const [move] = _gameState.filter((move) => {
        return move.row === row && move.col === col;
      });
      return move;
    }

    function moveIsNotInGameState(move) {
      // move is valid if there is no row/col currently
      // in the gamestate (aka: if move hasn't been played yet we're good!)
      if (_gameState.length > 0) {
        for (let i=0 ; i<_gameState.length ; i++) {
          const playedMove = _gameState[i];
          if (move.row === playedMove.row && move.col === playedMove.col) {
            return false;
          }
        }
      }
      return true;
    }

    function getIsCatsGame() {
      // If gamestate length is 9 and we haven'temp
      // triggered a win state then it's a cat's game!
      return _gameState.length === 9;
    }

    function getCurrentPlayerTurn() {
      return _currentPlayer;
    }

    return {
      getCurrentPlayerTurn,
      switchTurns,
      undoLastMove,
      setGameState,
      getIsCatsGame,
      currentPlayerIsInWinState,
      moveIsNotInGameState,
      pushNewMoveToGameState,
      getMoveFromGameState,
    };
}());
