const PlayScreen = (function(window) {
    'use strict';

    const _el = document.getElementById('play-screen');

    function show() {
      _el.classList.remove('hide');
  	}

    function hide() {
      _el.classList.add('hide');
  	}

    return {
        show: show,
        hide: hide,
    };
}(window));
