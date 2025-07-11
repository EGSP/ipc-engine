"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusToJSON = exports.statusFromJSON = exports.Status = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
var Status;
(function (Status) {
    Status[Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Status[Status["PREPARING_TEST"] = 1] = "PREPARING_TEST";
    Status[Status["READY_FOR_TEST"] = 2] = "READY_FOR_TEST";
    Status[Status["TESTING"] = 3] = "TESTING";
    Status[Status["TANK_FAILED"] = 4] = "TANK_FAILED";
    Status[Status["PROVISIONING"] = 5] = "PROVISIONING";
    Status[Status["STOPPING"] = 6] = "STOPPING";
    Status[Status["STOPPED"] = 7] = "STOPPED";
    Status[Status["STARTING"] = 8] = "STARTING";
    Status[Status["RESTARTING"] = 9] = "RESTARTING";
    Status[Status["UPDATING"] = 10] = "UPDATING";
    Status[Status["ERROR"] = 11] = "ERROR";
    Status[Status["CRASHED"] = 12] = "CRASHED";
    Status[Status["DELETING"] = 13] = "DELETING";
    Status[Status["INITIALIZING_CONNECTION"] = 15] = "INITIALIZING_CONNECTION";
    Status[Status["LOST_CONNECTION_WITH_AGENT"] = 16] = "LOST_CONNECTION_WITH_AGENT";
    Status[Status["UPLOADING_ARTIFACTS"] = 17] = "UPLOADING_ARTIFACTS";
    Status[Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Status = exports.Status || (exports.Status = {}));
function statusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case "PREPARING_TEST":
            return Status.PREPARING_TEST;
        case 2:
        case "READY_FOR_TEST":
            return Status.READY_FOR_TEST;
        case 3:
        case "TESTING":
            return Status.TESTING;
        case 4:
        case "TANK_FAILED":
            return Status.TANK_FAILED;
        case 5:
        case "PROVISIONING":
            return Status.PROVISIONING;
        case 6:
        case "STOPPING":
            return Status.STOPPING;
        case 7:
        case "STOPPED":
            return Status.STOPPED;
        case 8:
        case "STARTING":
            return Status.STARTING;
        case 9:
        case "RESTARTING":
            return Status.RESTARTING;
        case 10:
        case "UPDATING":
            return Status.UPDATING;
        case 11:
        case "ERROR":
            return Status.ERROR;
        case 12:
        case "CRASHED":
            return Status.CRASHED;
        case 13:
        case "DELETING":
            return Status.DELETING;
        case 15:
        case "INITIALIZING_CONNECTION":
            return Status.INITIALIZING_CONNECTION;
        case 16:
        case "LOST_CONNECTION_WITH_AGENT":
            return Status.LOST_CONNECTION_WITH_AGENT;
        case 17:
        case "UPLOADING_ARTIFACTS":
            return Status.UPLOADING_ARTIFACTS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Status.UNRECOGNIZED;
    }
}
exports.statusFromJSON = statusFromJSON;
function statusToJSON(object) {
    switch (object) {
        case Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Status.PREPARING_TEST:
            return "PREPARING_TEST";
        case Status.READY_FOR_TEST:
            return "READY_FOR_TEST";
        case Status.TESTING:
            return "TESTING";
        case Status.TANK_FAILED:
            return "TANK_FAILED";
        case Status.PROVISIONING:
            return "PROVISIONING";
        case Status.STOPPING:
            return "STOPPING";
        case Status.STOPPED:
            return "STOPPED";
        case Status.STARTING:
            return "STARTING";
        case Status.RESTARTING:
            return "RESTARTING";
        case Status.UPDATING:
            return "UPDATING";
        case Status.ERROR:
            return "ERROR";
        case Status.CRASHED:
            return "CRASHED";
        case Status.DELETING:
            return "DELETING";
        case Status.INITIALIZING_CONNECTION:
            return "INITIALIZING_CONNECTION";
        case Status.LOST_CONNECTION_WITH_AGENT:
            return "LOST_CONNECTION_WITH_AGENT";
        case Status.UPLOADING_ARTIFACTS:
            return "UPLOADING_ARTIFACTS";
        default:
            return "UNKNOWN";
    }
}
exports.statusToJSON = statusToJSON;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
