"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryMiddleware = void 0;
const abort_controller_x_1 = require("abort-controller-x");
const nice_grpc_1 = require("nice-grpc");
const node_abort_controller_1 = require("node-abort-controller");
const defaultRetryableStatuses = [
    nice_grpc_1.Status.UNKNOWN,
    nice_grpc_1.Status.RESOURCE_EXHAUSTED,
    nice_grpc_1.Status.INTERNAL,
    nice_grpc_1.Status.UNAVAILABLE,
];
/**
 * Client middleware that adds automatic retries to unary calls.
 */
const retryMiddleware = function retryMiddleware(call, options) {
    var _a, _b;
    return __asyncGenerator(this, arguments, function* retryMiddleware_1() {
        const { idempotencyLevel } = (_a = call.method.options) !== null && _a !== void 0 ? _a : {};
        const isIdempotent = idempotencyLevel === 'IDEMPOTENT'
            || idempotencyLevel === 'NO_SIDE_EFFECTS';
        const { retry = isIdempotent, retryBaseDelayMs = 1000, retryMaxDelayMs = 15000, retryMaxAttempts = 1, onRetryableError, retryableStatuses = defaultRetryableStatuses } = options, restOptions = __rest(options, ["retry", "retryBaseDelayMs", "retryMaxDelayMs", "retryMaxAttempts", "onRetryableError", "retryableStatuses"]);
        if (call.requestStream || call.responseStream || !retry) {
            return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(call.next(call.request, restOptions)))));
        }
        const signal = (_b = options.signal) !== null && _b !== void 0 ? _b : new node_abort_controller_1.AbortController().signal;
        for (let attempt = 0;; attempt++) {
            try {
                return yield __await(yield __await(yield* __asyncDelegator(__asyncValues(call.next(call.request, restOptions)))));
            }
            catch (error) {
                (0, abort_controller_x_1.rethrowAbortError)(error);
                if (attempt >= retryMaxAttempts
                    || !(error instanceof nice_grpc_1.ClientError)
                    || !retryableStatuses.includes(error.code)) {
                    throw error;
                }
                // https://aws.amazon.com/ru/blogs/architecture/exponential-backoff-and-jitter/
                const backoff = Math.min(retryMaxDelayMs, Math.pow(2, attempt) * retryBaseDelayMs);
                const delayMs = Math.round((backoff * (1 + Math.random())) / 2);
                onRetryableError === null || onRetryableError === void 0 ? void 0 : onRetryableError(error, attempt, delayMs);
                // eslint-disable-next-line no-await-in-loop
                yield __await((0, abort_controller_x_1.delay)(signal, delayMs));
            }
        }
    });
};
exports.retryMiddleware = retryMiddleware;
