"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = function (req, res) {
    console.log("Entered...!");
    var payload = { "msg": "Hello World..!" };
    res.status(200);
    res.send(payload).end();
};
//# sourceMappingURL=index.js.map