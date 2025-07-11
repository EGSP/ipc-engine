"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSpentOperation = void 0;
const timeSpentOperation = (op) => { var _a, _b; return Date.now() - ((_b = (_a = op.createdAt) === null || _a === void 0 ? void 0 : _a.getTime()) !== null && _b !== void 0 ? _b : 0); };
exports.timeSpentOperation = timeSpentOperation;
