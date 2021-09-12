var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./app"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // the server file (start server)
    const app_1 = __importDefault(require("./app"));
    //for setting views, not messing with that for now
    // app.set("views",path.join(__dirname,"../src/views"));
    // app.get('/', (req: express.Request, res: express.Response) => {
    // 	res.sendFile(path.join(__dirname,"../src/views/index.html")); // how to do this better?
    // });
    const server = app_1.default.listen(app_1.default.get("port"), () => {
        console.log("The application is listening on port " + app_1.default.get("port") + "!");
        console.log("Press CTRL-C to shut me down");
    });
    exports.default = server;
});
