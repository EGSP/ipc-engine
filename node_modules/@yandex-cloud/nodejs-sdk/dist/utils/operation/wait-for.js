"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForOperation = void 0;
const __1 = require("../..");
const { operation: { operation_service: { GetOperationRequest } } } = __1.cloudApi;
const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes
const waitForOperation = (op, session, timeoutMs = DEFAULT_TIMEOUT_MS, operationServiceEndpoint) => {
    const client = session.client(__1.serviceClients.OperationServiceClient, operationServiceEndpoint);
    const maxChecksCount = Math.ceil(timeoutMs / session.pollInterval);
    let checksCount = 0;
    return new Promise((resolve, reject) => {
        const checkOperation = () => __awaiter(void 0, void 0, void 0, function* () {
            const operation = yield client.get(GetOperationRequest.fromPartial({
                operationId: op.id,
            }), {
                retry: true,
                retryMaxAttempts: 3,
            });
            checksCount++;
            if (operation.error) {
                reject(operation);
            }
            else if (operation.done) {
                resolve(operation);
            }
            else if (checksCount > maxChecksCount) {
                reject(new Error('Timeout reached'));
            }
            else {
                setTimeout(checkOperation, session.pollInterval);
            }
        });
        checkOperation();
    });
};
exports.waitForOperation = waitForOperation;
