"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.ServerMessage = exports.ServerStatus = void 0;
var ServerStatus;
(function (ServerStatus) {
    ServerStatus[ServerStatus["OK"] = 200] = "OK";
    ServerStatus[ServerStatus["ERROR"] = 404] = "ERROR";
})(ServerStatus || (exports.ServerStatus = ServerStatus = {}));
;
var ServerMessage;
(function (ServerMessage) {
    ServerMessage["OK"] = "Server Response Success!";
    ServerMessage["ERROR"] = "Server Internal Error!";
})(ServerMessage || (exports.ServerMessage = ServerMessage = {}));
;
var Role;
(function (Role) {
    Role["User"] = "ROLE_USER";
    Role["Admin"] = "ROLE_ADMIN";
})(Role || (exports.Role = Role = {}));
//# sourceMappingURL=enum.js.map