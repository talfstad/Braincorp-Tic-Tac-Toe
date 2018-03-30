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

    EndScreen.addOnPlayAgainClick(() => {
      location.reload();
    });

    function _hideAllScreens() {
      StartScreen.hide();
      PlayScreen.hide();
      OptionsScreen.hide();
      EndScreen.hide();
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

    function showPlayScreen() {
      _hideAllScreens();
      PlayScreen.show();
    }

    return {
        showStartScreen: showStartScreen,
        showEndScreen: showEndScreen,
    };
}());
