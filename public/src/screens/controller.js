// controls which game screen is showing
const ScreenController = (function() {
    'use strict';
    
    StartScreen.addOnClick(function() {
      showPlayScreen();
    });

    function _hideAllScreens() {
      StartScreen.hide();
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
        showPlayScreen: showPlayScreen,
    };
}());
