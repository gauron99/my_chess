var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // main file
    const express_1 = __importDefault(require("express"));
    const path_1 = __importDefault(require("path"));
    const app = (0, express_1.default)();
    // configure port
    if (process.argv.length === 3) {
        console.log("3 arguments!", process.argv);
        var port = process.argv[2];
        //set port to listen on if given by cml parameter
        if (port.length === 4 && /^[0-9]{4}$/.test(port)) {
            app.set('port', +port);
        }
    }
    else { //default
        app.set('port', 3333);
    }
    //__dirname is where this gets run from, which is the .js in /build
    // ---------- static files ---------- \\
    app.use('/css', express_1.default.static(path_1.default.join(__dirname, "../src/public/css")));
    app.use('/js', express_1.default.static(__dirname)); // ./build for js
    // ---------- views for ejs ---------- \\
    app.set('views', path_1.default.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    // console.log("Views:",path.join( __dirname,'../views'))
    // ---------- render ---------- \\
    app.get('/', (req, res) => {
        res.render('index');
    });
    // for callback of root(/) by others
    app.get('/index', (req, res) => {
        res.render('index');
    });
    app.get('/singleplayer', (req, res) => {
        res.render('singleplayer');
    });
    app.get('/game', (req, res) => {
        res.render('game');
    });
    exports.default = app;
});
