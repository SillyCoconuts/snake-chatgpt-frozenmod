// ==UserScript==
// @name         Google Snake No-Move Mod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mod to set snake speed to 0 in Google Snake game
// @author       YourName
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Load the mod template
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeModLoader/main/src/mod-template.js';
    document.head.appendChild(script);

    // Wait for the mod template to load
    script.onload = function() {
        // Define your custom mod
        window.snake.speedMod = function() {
            window.snake.speed = 0; // Set speed to 0
        };

        // Load the mod
        var customModScript = document.createElement('script');
        customModScript.src = 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeCustomMenuStuff/main/custom.js';
        document.head.appendChild(customModScript);

        customModScript.onload = function() {
            // Apply the custom mod
            window.snake.speedMod();
        };
    };
})();
