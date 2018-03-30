const GameState = (function() {
    'use strict';

    let _currentPlayer = 'x';

    // Tracks gamestate
    const _gameState = [];

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
        _currentPlayer = 'y';
      } else {
        _currentPlayer = 'x'
      }
    }

    function undoLastMove() {
      _gameState.pop();
    }

    function pushNewMoveToGameState(move) {
      _gameState.push(move);
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

    function validateMove(move) {
      // move is valid if there is no row/col currently
      // in the gamestate (aka: if move hasn't been played yet we're good!)
      if (_gameState.length > 0) {
        Array.prototype.forEach.call(_gameState, function(playedMove) {
           if (move.row === playedMove.row && move.col === playedMove.col) {
             return false;
           }
        });
      }
      return true;
    }

    function getCurrentPlayerTurn() {
      return _currentPlayer;
    }

    return {
      getCurrentPlayerTurn: getCurrentPlayerTurn,
      switchTurns: switchTurns,
      undoLastMove: undoLastMove,
      currentPlayerIsInWinState: currentPlayerIsInWinState,
      validateMove: validateMove,
      pushNewMoveToGameState: pushNewMoveToGameState,
    };
}());
