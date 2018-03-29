const GameState = (function() {
    'use strict';

    let _currentPlayer = 'x';

    // Tracks gamestate
    const _gameState = [];

    const _winStates = [
      // Diagnal left to right
      [{
        row: 1,
        col: 1,
      }, {
        row: 2,
        col: 2,
      }, {
        row: 3,
        col: 3,
      }],
      // Diagnal right to left
      [{
        row: 1,
        col: 3,
      }, {
        row: 2,
        col: 2,
      }, {
        row: 3,
        col: 1,
      }],
      // Horizontal row 1
      [{
        row: 1,
        col: 1,
      }, {
        row: 1,
        col: 2,
      }, {
        row: 1,
        col: 3,
      }],
      // Horizontal row 2
      [{
        row: 2,
        col: 1,
      }, {
        row: 2,
        col: 2,
      }, {
        row: 2,
        col: 3,
      }],
      // Horizontal row 3
      [{
        row: 3,
        col: 1,
      }, {
        row: 3,
        col: 2,
      }, {
        row: 3,
        col: 3,
      }],
      // Vertical col 1
      [{
        row: 1,
        col: 1,
      }, {
        row: 2,
        col: 1,
      }, {
        row: 3,
        col: 1,
      }],
      // Vertical col 2
      [{
        row: 1,
        col: 2,
      }, {
        row: 2,
        col: 2,
      }, {
        row: 3,
        col: 2,
      }],
      // Vertical col 3
      [{
        row: 1,
        col: 3,
      }, {
        row: 2,
        col: 3,
      }, {
        row: 3,
        col: 3,
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
      // let isInWinState = false;
      // if (_gameState.length > 0) {
      //   for (var i=0 ; i<_winStates.length ; i++) {
      //     const winState = _winStates[i];
      //
      //     const filteredGameStateKeepingWinStateMoves = _gameState.filter((gameStateMove) => {
      //       // is this game state move in the win state array ?
      //       const filteredWinStateRemovedIfInGameState = winState.filter((winStateMove) => {
      //         // is gameStateMove in winState ?
      //         const moveWithPlayer = {
      //           ...winStateMove,
      //           player: _currentPlayer,
      //         };
      //         console.log(moveWithPlayer);
      //       });
      //       return filteredWinStateRemovedIfInGameState.length > 1;
      //     });
      //
      //     // Detect a win state
      //     if (filteredGameStateKeepingWinStateMoves === 3) {
      //       isInWinState = true;
      //       break;
      //     }
      //   }
      // }
      // return isInWinState;
      return true;
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
