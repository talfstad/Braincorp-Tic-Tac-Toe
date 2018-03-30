// controls which game screen is showing
const ScreenController = (function() {
    'use strict';

    StartScreen.addOnStartGameClick(function() {
      showPlayScreen();
    });

    PlayScreen.addShowOptionsClick(function() {
      showOptionsScreen();
    });

    OptionsScreen.addOnCloseOptionsClick(function() {
      showPlayScreen();
    });

    OptionsScreen.addOnExitGameClick(function() {
      location.reload();
    });

    CatsGameScreen.addOnMainMenuClick(() => {
      location.reload();
    });

    EndScreen.addOnMainMenuClick(() => {
      location.reload();
    });

    function _hideAllScreens() {
      StartScreen.hide();
      PlayScreen.hide();
      OptionsScreen.hide();
      EndScreen.hide();
      CatsGameScreen.hide();
    }

    function showOptionsScreen() {
      _hideAllScreens();
      OptionsScreen.show();
    }

    function showEndScreen() {
      _hideAllScreens();
      EndScreen.show();
    }

  	function showStartScreen() {
      _hideAllScreens();
    	StartScreen.show();
  	}

    function showCatsGameScreen() {
      _hideAllScreens();
    	CatsGameScreen.show();
  	}

    function showPlayScreen() {
      _hideAllScreens();
      PlayScreen.show();
    }

    return {
        showStartScreen,
        showEndScreen,
        showCatsGameScreen,
    };
}());
