(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    setupGame();
    function setupGame() {
        //create chessboard
        drawBoard();
        //setup pieces on the board acording to the mode used
        // standard: normal way
        // ches960: random setup -- mirrored
        setupPieces();
    }
    function drawBoard() {
        console.log("drawing...");
    }
    function setupPieces() {
        console.log("setting up pieces...");
    }
});
