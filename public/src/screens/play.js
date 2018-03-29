const PlayScreen = (function() {
    'use strict';

    const _el = document.getElementById('play-screen');
    const _optionsButton = _el.getElementsByClassName('button')[1];
    let _gameIsInitialized = false;

    function addShowOptionsClick(onClick) {
      _optionsButton.addEventListener('click', onClick);
    }

    // so on click run a function to get the resource to draw then attach that. depending on options
    // when we change game mode call redraw from the gamestate.
    // on redraw, options changes so the resource will change in the class as well.
    //
    // loop through & create a new class for each game tile and pass in the correct dom element to it.
    // when its clicked it can be assigned a player, and location, and then go get the resource to draw
    // on redraw gets called on gamestate which then goes through each class and calls draw

    // on new move, validate turn is not in gamestate already, add it to the gamestate, and draw it (relies on options)
    // test it for a win. if it is a win trigger controller to show winner which uses options to get correct
    // resource to draw

    function initializeIfNewGame() {
      // init new game if we don't currently have one going. else just resume.
      if (!_gameIsInitialized) {
        // create the board classes and attach listeners to each
        // of the game tiles

        _gameIsInitialized = true;
      }
      // TODO: draw the game state!
      const options = OptionsScreen.getGameOptions();

      // TODO: Draw the images for the players
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
