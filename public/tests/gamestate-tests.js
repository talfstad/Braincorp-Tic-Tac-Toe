QUnit.test( "Gamestate switches turns", function( assert ) {
  const currentPlayer = GameState.getCurrentPlayerTurn();
  GameState.switchTurns();

  assert.ok(currentPlayer !== GameState.getCurrentPlayerTurn(), "Passed!" );
  assert.ok(currentPlayer !== GameState.getCurrentPlayerTurn(), "Passed!" );
});

QUnit.test( "Player is in win state", function( assert ) {
  const player = GameState.getCurrentPlayerTurn();

  const gameState = [{
      row: '1',
      col: '1',
      player,
    }, {
      row: '2',
      col: '2',
      player,
    }, {
      row: '3',
      col: '3',
      player,
    }];
  GameState.setGameState(gameState);
  const inWinState = GameState.currentPlayerIsInWinState();
  assert.ok(inWinState, "Passed!" );
});

QUnit.test( "Player is not in win state", function( assert ) {
  const player = GameState.getCurrentPlayerTurn();

  const gameState = [{
      row: '1',
      col: '1',
      player,
    }, {
      row: '2',
      col: '3',
      player,
    }, {
      row: '3',
      col: '3',
      player,
    }];
  GameState.setGameState(gameState);
  const inWinState = GameState.currentPlayerIsInWinState();
  assert.ok(!inWinState, "Passed!" );
});

QUnit.test( "Test move is valid", function( assert ) {
  const currentPlayer = GameState.getCurrentPlayerTurn();

  const testMove = {
    row: '1',
    col: '1',
  };

  // Empty game state
  GameState.setGameState([]);

  const moveIsValid = GameState.moveIsNotInGameState(testMove);
  assert.ok(moveIsValid, "Passed!" );
});

QUnit.test( "Test move is not valid", function( assert ) {
  const player = GameState.getCurrentPlayerTurn();

  const gameState = [{
      row: '1',
      col: '1',
      player,
    }, {
      row: '2',
      col: '3',
      player,
    }, {
      row: '3',
      col: '3',
      player,
    }];

  const testMove = {
    row: '1',
    col: '1',
  };

  GameState.setGameState(gameState);

  const moveIsValid = GameState.moveIsNotInGameState(testMove);
  assert.ok(!moveIsValid, "Passed!" );
});
