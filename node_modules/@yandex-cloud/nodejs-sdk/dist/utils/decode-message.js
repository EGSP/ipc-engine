"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMessage = void 0;
const typeRegistry_1 = require("../generated/typeRegistry");
const decodeMessage = (data) => {
    const fqn = data.typeUrl.slice(Math.max(0, data.typeUrl.lastIndexOf('/') + 1));
    const cls = typeRegistry_1.messageTypeRegistry.get(fqn);
    if (!cls) {
        throw new Error(`Message contains unknown type ${fqn}`);
    }
    return cls.decode(data.value);
};
exports.decodeMessage = decodeMessage;
