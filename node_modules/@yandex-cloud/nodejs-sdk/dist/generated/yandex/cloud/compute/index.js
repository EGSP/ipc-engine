"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance_group_service = exports.instance_group = exports.zone_service = exports.zone = exports.snapshot_service = exports.snapshot_schedule_service = exports.snapshot_schedule = exports.snapshot = exports.placement_group_service = exports.placement_group = exports.instance_service = exports.instance = exports.image_service = exports.image = exports.host_type_service = exports.host_type = exports.host_group_service = exports.host_group = exports.gpu_cluster_service = exports.gpu_cluster = exports.filesystem_service = exports.filesystem = exports.disk_type_service = exports.disk_type = exports.disk_service = exports.disk_placement_group_service = exports.disk_placement_group = exports.disk = void 0;
exports.disk = __importStar(require("./v1/disk"));
exports.disk_placement_group = __importStar(require("./v1/disk_placement_group"));
exports.disk_placement_group_service = __importStar(require("./v1/disk_placement_group_service"));
exports.disk_service = __importStar(require("./v1/disk_service"));
exports.disk_type = __importStar(require("./v1/disk_type"));
exports.disk_type_service = __importStar(require("./v1/disk_type_service"));
exports.filesystem = __importStar(require("./v1/filesystem"));
exports.filesystem_service = __importStar(require("./v1/filesystem_service"));
exports.gpu_cluster = __importStar(require("./v1/gpu_cluster"));
exports.gpu_cluster_service = __importStar(require("./v1/gpu_cluster_service"));
exports.host_group = __importStar(require("./v1/host_group"));
exports.host_group_service = __importStar(require("./v1/host_group_service"));
exports.host_type = __importStar(require("./v1/host_type"));
exports.host_type_service = __importStar(require("./v1/host_type_service"));
exports.image = __importStar(require("./v1/image"));
exports.image_service = __importStar(require("./v1/image_service"));
exports.instance = __importStar(require("./v1/instance"));
exports.instance_service = __importStar(require("./v1/instance_service"));
exports.placement_group = __importStar(require("./v1/placement_group"));
exports.placement_group_service = __importStar(require("./v1/placement_group_service"));
exports.snapshot = __importStar(require("./v1/snapshot"));
exports.snapshot_schedule = __importStar(require("./v1/snapshot_schedule"));
exports.snapshot_schedule_service = __importStar(require("./v1/snapshot_schedule_service"));
exports.snapshot_service = __importStar(require("./v1/snapshot_service"));
exports.zone = __importStar(require("./v1/zone"));
exports.zone_service = __importStar(require("./v1/zone_service"));
exports.instance_group = __importStar(require("./v1/instancegroup/instance_group"));
exports.instance_group_service = __importStar(require("./v1/instancegroup/instance_group_service"));
