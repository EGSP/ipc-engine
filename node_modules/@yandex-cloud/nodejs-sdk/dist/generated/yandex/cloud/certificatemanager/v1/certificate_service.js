"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateServiceClient = exports.CertificateServiceService = exports.ListCertificateOperationsResponse = exports.ListCertificateOperationsRequest = exports.RequestNewCertificateMetadata = exports.RequestNewCertificateRequest_LabelsEntry = exports.RequestNewCertificateRequest = exports.DeleteCertificateMetadata = exports.DeleteCertificateRequest = exports.UpdateCertificateMetadata = exports.UpdateCertificateRequest_LabelsEntry = exports.UpdateCertificateRequest = exports.CreateCertificateMetadata = exports.CreateCertificateRequest_LabelsEntry = exports.CreateCertificateRequest = exports.ListVersionsResponse = exports.ListVersionsRequest = exports.ListCertificatesResponse = exports.ListCertificatesRequest = exports.GetCertificateRequest = exports.certificateViewToJSON = exports.certificateViewFromJSON = exports.CertificateView = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const field_mask_1 = require("../../../../google/protobuf/field_mask");
const certificate_1 = require("../../../../yandex/cloud/certificatemanager/v1/certificate");
const operation_1 = require("../../../../yandex/cloud/operation/operation");
const access_1 = require("../../../../yandex/cloud/access/access");
exports.protobufPackage = "yandex.cloud.certificatemanager.v1";
var CertificateView;
(function (CertificateView) {
    /** BASIC - Output basic information about the certificate. */
    CertificateView[CertificateView["BASIC"] = 0] = "BASIC";
    /** FULL - Output full information about the certificate including domain challenges. */
    CertificateView[CertificateView["FULL"] = 1] = "FULL";
    CertificateView[CertificateView["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CertificateView = exports.CertificateView || (exports.CertificateView = {}));
function certificateViewFromJSON(object) {
    switch (object) {
        case 0:
        case "BASIC":
            return CertificateView.BASIC;
        case 1:
        case "FULL":
            return CertificateView.FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CertificateView.UNRECOGNIZED;
    }
}
exports.certificateViewFromJSON = certificateViewFromJSON;
function certificateViewToJSON(object) {
    switch (object) {
        case CertificateView.BASIC:
            return "BASIC";
        case CertificateView.FULL:
            return "FULL";
        default:
            return "UNKNOWN";
    }
}
exports.certificateViewToJSON = certificateViewToJSON;
const baseGetCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest",
    certificateId: "",
    view: 0,
};
exports.GetCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.GetCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.view !== 0) {
            writer.uint32(16).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGetCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseGetCertificateRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.view =
            object.view !== undefined && object.view !== null
                ? certificateViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.view !== undefined &&
            (obj.view = certificateViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseGetCertificateRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.view = (_b = object.view) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GetCertificateRequest.$type, exports.GetCertificateRequest);
const baseListCertificatesRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest",
    folderId: "",
    pageSize: 0,
    pageToken: "",
    view: 0,
};
exports.ListCertificatesRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        if (message.view !== 0) {
            writer.uint32(48).int32(message.view);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCertificatesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                case 6:
                    message.view = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListCertificatesRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        message.view =
            object.view !== undefined && object.view !== null
                ? certificateViewFromJSON(object.view)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        message.view !== undefined &&
            (obj.view = certificateViewToJSON(message.view));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseListCertificatesRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        message.view = (_d = object.view) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCertificatesRequest.$type, exports.ListCertificatesRequest);
const baseListCertificatesResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse",
    nextPageToken: "",
};
exports.ListCertificatesResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificatesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.certificates) {
            certificate_1.Certificate.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCertificatesResponse);
        message.certificates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificates.push(certificate_1.Certificate.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseListCertificatesResponse);
        message.certificates = ((_a = object.certificates) !== null && _a !== void 0 ? _a : []).map((e) => certificate_1.Certificate.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => e ? certificate_1.Certificate.toJSON(e) : undefined);
        }
        else {
            obj.certificates = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListCertificatesResponse);
        message.certificates =
            ((_a = object.certificates) === null || _a === void 0 ? void 0 : _a.map((e) => certificate_1.Certificate.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCertificatesResponse.$type, exports.ListCertificatesResponse);
const baseListVersionsRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest",
    certificateId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListVersionsRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVersionsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListVersionsRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListVersionsRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsRequest.$type, exports.ListVersionsRequest);
const baseListVersionsResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse",
    nextPageToken: "",
};
exports.ListVersionsResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            certificate_1.Version.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(certificate_1.Version.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions = ((_a = object.versions) !== null && _a !== void 0 ? _a : []).map((e) => certificate_1.Version.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? certificate_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListVersionsResponse);
        message.versions =
            ((_a = object.versions) === null || _a === void 0 ? void 0 : _a.map((e) => certificate_1.Version.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListVersionsResponse.$type, exports.ListVersionsResponse);
const baseCreateCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest",
    folderId: "",
    name: "",
    description: "",
    certificate: "",
    chain: "",
    privateKey: "",
    deletionProtection: false,
};
exports.CreateCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.CreateCertificateRequest_LabelsEntry.encode({
                $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        if (message.certificate !== "") {
            writer.uint32(42).string(message.certificate);
        }
        if (message.chain !== "") {
            writer.uint32(50).string(message.chain);
        }
        if (message.privateKey !== "") {
            writer.uint32(58).string(message.privateKey);
        }
        if (message.deletionProtection === true) {
            writer.uint32(64).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCertificateRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.CreateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.certificate = reader.string();
                    break;
                case 6:
                    message.chain = reader.string();
                    break;
                case 7:
                    message.privateKey = reader.string();
                    break;
                case 8:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseCreateCertificateRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? String(object.certificate)
                : "";
        message.chain =
            object.chain !== undefined && object.chain !== null
                ? String(object.chain)
                : "";
        message.privateKey =
            object.privateKey !== undefined && object.privateKey !== null
                ? String(object.privateKey)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.certificate !== undefined &&
            (obj.certificate = message.certificate);
        message.chain !== undefined && (obj.chain = message.chain);
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseCreateCertificateRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.certificate = (_e = object.certificate) !== null && _e !== void 0 ? _e : "";
        message.chain = (_f = object.chain) !== null && _f !== void 0 ? _f : "";
        message.privateKey = (_g = object.privateKey) !== null && _g !== void 0 ? _g : "";
        message.deletionProtection = (_h = object.deletionProtection) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCertificateRequest.$type, exports.CreateCertificateRequest);
const baseCreateCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.CreateCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateRequest.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCertificateRequest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateCertificateRequest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseCreateCertificateRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCertificateRequest_LabelsEntry.$type, exports.CreateCertificateRequest_LabelsEntry);
const baseCreateCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata",
    certificateId: "",
};
exports.CreateCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.CreateCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCreateCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCreateCertificateMetadata);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseCreateCertificateMetadata);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.CreateCertificateMetadata.$type, exports.CreateCertificateMetadata);
const baseUpdateCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest",
    certificateId: "",
    name: "",
    description: "",
    certificate: "",
    chain: "",
    privateKey: "",
    deletionProtection: false,
};
exports.UpdateCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.updateMask !== undefined) {
            field_mask_1.FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.UpdateCertificateRequest_LabelsEntry.encode({
                $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(42).fork()).ldelim();
        });
        if (message.certificate !== "") {
            writer.uint32(50).string(message.certificate);
        }
        if (message.chain !== "") {
            writer.uint32(58).string(message.chain);
        }
        if (message.privateKey !== "") {
            writer.uint32(66).string(message.privateKey);
        }
        if (message.deletionProtection === true) {
            writer.uint32(72).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCertificateRequest);
        message.labels = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.updateMask = field_mask_1.FieldMask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    const entry5 = exports.UpdateCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.labels[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.certificate = reader.string();
                    break;
                case 7:
                    message.chain = reader.string();
                    break;
                case 8:
                    message.privateKey = reader.string();
                    break;
                case 9:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseUpdateCertificateRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromJSON(object.updateMask)
                : undefined;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.certificate =
            object.certificate !== undefined && object.certificate !== null
                ? String(object.certificate)
                : "";
        message.chain =
            object.chain !== undefined && object.chain !== null
                ? String(object.chain)
                : "";
        message.privateKey =
            object.privateKey !== undefined && object.privateKey !== null
                ? String(object.privateKey)
                : "";
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.updateMask !== undefined &&
            (obj.updateMask = message.updateMask
                ? field_mask_1.FieldMask.toJSON(message.updateMask)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        message.certificate !== undefined &&
            (obj.certificate = message.certificate);
        message.chain !== undefined && (obj.chain = message.chain);
        message.privateKey !== undefined && (obj.privateKey = message.privateKey);
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseUpdateCertificateRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.updateMask =
            object.updateMask !== undefined && object.updateMask !== null
                ? field_mask_1.FieldMask.fromPartial(object.updateMask)
                : undefined;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.certificate = (_e = object.certificate) !== null && _e !== void 0 ? _e : "";
        message.chain = (_f = object.chain) !== null && _f !== void 0 ? _f : "";
        message.privateKey = (_g = object.privateKey) !== null && _g !== void 0 ? _g : "";
        message.deletionProtection = (_h = object.deletionProtection) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCertificateRequest.$type, exports.UpdateCertificateRequest);
const baseUpdateCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.UpdateCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateRequest.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCertificateRequest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateCertificateRequest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseUpdateCertificateRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCertificateRequest_LabelsEntry.$type, exports.UpdateCertificateRequest_LabelsEntry);
const baseUpdateCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata",
    certificateId: "",
};
exports.UpdateCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.UpdateCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUpdateCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUpdateCertificateMetadata);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseUpdateCertificateMetadata);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.UpdateCertificateMetadata.$type, exports.UpdateCertificateMetadata);
const baseDeleteCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest",
    certificateId: "",
};
exports.DeleteCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCertificateRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCertificateRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteCertificateRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCertificateRequest.$type, exports.DeleteCertificateRequest);
const baseDeleteCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata",
    certificateId: "",
};
exports.DeleteCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.DeleteCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDeleteCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDeleteCertificateMetadata);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseDeleteCertificateMetadata);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DeleteCertificateMetadata.$type, exports.DeleteCertificateMetadata);
const baseRequestNewCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest",
    folderId: "",
    name: "",
    description: "",
    domains: "",
    challengeType: 0,
    deletionProtection: false,
};
exports.RequestNewCertificateRequest = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.folderId !== "") {
            writer.uint32(10).string(message.folderId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        Object.entries(message.labels).forEach(([key, value]) => {
            exports.RequestNewCertificateRequest_LabelsEntry.encode({
                $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
                key: key,
                value,
            }, writer.uint32(34).fork()).ldelim();
        });
        for (const v of message.domains) {
            writer.uint32(42).string(v);
        }
        if (message.challengeType !== 0) {
            writer.uint32(48).int32(message.challengeType);
        }
        if (message.deletionProtection === true) {
            writer.uint32(56).bool(message.deletionProtection);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestNewCertificateRequest);
        message.labels = {};
        message.domains = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.folderId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    const entry4 = exports.RequestNewCertificateRequest_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.labels[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.domains.push(reader.string());
                    break;
                case 6:
                    message.challengeType = reader.int32();
                    break;
                case 7:
                    message.deletionProtection = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseRequestNewCertificateRequest);
        message.folderId =
            object.folderId !== undefined && object.folderId !== null
                ? String(object.folderId)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.labels = Object.entries((_a = object.labels) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.domains = ((_b = object.domains) !== null && _b !== void 0 ? _b : []).map((e) => String(e));
        message.challengeType =
            object.challengeType !== undefined && object.challengeType !== null
                ? (0, certificate_1.challengeTypeFromJSON)(object.challengeType)
                : 0;
        message.deletionProtection =
            object.deletionProtection !== undefined &&
                object.deletionProtection !== null
                ? Boolean(object.deletionProtection)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.folderId !== undefined && (obj.folderId = message.folderId);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        obj.labels = {};
        if (message.labels) {
            Object.entries(message.labels).forEach(([k, v]) => {
                obj.labels[k] = v;
            });
        }
        if (message.domains) {
            obj.domains = message.domains.map((e) => e);
        }
        else {
            obj.domains = [];
        }
        message.challengeType !== undefined &&
            (obj.challengeType = (0, certificate_1.challengeTypeToJSON)(message.challengeType));
        message.deletionProtection !== undefined &&
            (obj.deletionProtection = message.deletionProtection);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseRequestNewCertificateRequest);
        message.folderId = (_a = object.folderId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.labels = Object.entries((_d = object.labels) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.domains = ((_e = object.domains) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.challengeType = (_f = object.challengeType) !== null && _f !== void 0 ? _f : 0;
        message.deletionProtection = (_g = object.deletionProtection) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RequestNewCertificateRequest.$type, exports.RequestNewCertificateRequest);
const baseRequestNewCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
    key: "",
    value: "",
};
exports.RequestNewCertificateRequest_LabelsEntry = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateRequest.LabelsEntry",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestNewCertificateRequest_LabelsEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestNewCertificateRequest_LabelsEntry);
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRequestNewCertificateRequest_LabelsEntry);
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RequestNewCertificateRequest_LabelsEntry.$type, exports.RequestNewCertificateRequest_LabelsEntry);
const baseRequestNewCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata",
    certificateId: "",
};
exports.RequestNewCertificateMetadata = {
    $type: "yandex.cloud.certificatemanager.v1.RequestNewCertificateMetadata",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestNewCertificateMetadata);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestNewCertificateMetadata);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseRequestNewCertificateMetadata);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RequestNewCertificateMetadata.$type, exports.RequestNewCertificateMetadata);
const baseListCertificateOperationsRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest",
    certificateId: "",
    pageSize: 0,
    pageToken: "",
};
exports.ListCertificateOperationsRequest = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.certificateId !== "") {
            writer.uint32(10).string(message.certificateId);
        }
        if (message.pageSize !== 0) {
            writer.uint32(16).int64(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(26).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCertificateOperationsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificateId = reader.string();
                    break;
                case 2:
                    message.pageSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseListCertificateOperationsRequest);
        message.certificateId =
            object.certificateId !== undefined && object.certificateId !== null
                ? String(object.certificateId)
                : "";
        message.pageSize =
            object.pageSize !== undefined && object.pageSize !== null
                ? Number(object.pageSize)
                : 0;
        message.pageToken =
            object.pageToken !== undefined && object.pageToken !== null
                ? String(object.pageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.certificateId !== undefined &&
            (obj.certificateId = message.certificateId);
        message.pageSize !== undefined &&
            (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseListCertificateOperationsRequest);
        message.certificateId = (_a = object.certificateId) !== null && _a !== void 0 ? _a : "";
        message.pageSize = (_b = object.pageSize) !== null && _b !== void 0 ? _b : 0;
        message.pageToken = (_c = object.pageToken) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCertificateOperationsRequest.$type, exports.ListCertificateOperationsRequest);
const baseListCertificateOperationsResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse",
    nextPageToken: "",
};
exports.ListCertificateOperationsResponse = {
    $type: "yandex.cloud.certificatemanager.v1.ListCertificateOperationsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.operations) {
            operation_1.Operation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextPageToken !== "") {
            writer.uint32(18).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseListCertificateOperationsResponse);
        message.operations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operations.push(operation_1.Operation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseListCertificateOperationsResponse);
        message.operations = ((_a = object.operations) !== null && _a !== void 0 ? _a : []).map((e) => operation_1.Operation.fromJSON(e));
        message.nextPageToken =
            object.nextPageToken !== undefined && object.nextPageToken !== null
                ? String(object.nextPageToken)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.operations) {
            obj.operations = message.operations.map((e) => e ? operation_1.Operation.toJSON(e) : undefined);
        }
        else {
            obj.operations = [];
        }
        message.nextPageToken !== undefined &&
            (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseListCertificateOperationsResponse);
        message.operations =
            ((_a = object.operations) === null || _a === void 0 ? void 0 : _a.map((e) => operation_1.Operation.fromPartial(e))) || [];
        message.nextPageToken = (_b = object.nextPageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ListCertificateOperationsResponse.$type, exports.ListCertificateOperationsResponse);
/** A set of methods for managing certificates. */
exports.CertificateServiceService = {
    /**
     * Returns the specified certificate.
     *
     * To get the list of available certificates, make a [List] request.
     */
    get: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/Get",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(certificate_1.Certificate.encode(value).finish()),
        responseDeserialize: (value) => certificate_1.Certificate.decode(value),
    },
    /** Returns the list of certificates in the specified folder. */
    list: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/List",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCertificatesRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCertificatesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCertificatesResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCertificatesResponse.decode(value),
    },
    listVersions: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListVersions",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListVersionsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListVersionsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListVersionsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListVersionsResponse.decode(value),
    },
    /** Creates a certificate in the specified folder. */
    create: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/Create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates the specified certificate. */
    update: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/Update",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Deletes the specified certificate. */
    delete: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/Delete",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Request a certificate in the specified folder. */
    requestNew: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/RequestNew",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.RequestNewCertificateRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.RequestNewCertificateRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Lists operations for the specified certificate. */
    listOperations: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListOperations",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListCertificateOperationsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListCertificateOperationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListCertificateOperationsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListCertificateOperationsResponse.decode(value),
    },
    /** Lists existing access bindings for the specified certificate. */
    listAccessBindings: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/ListAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.ListAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.ListAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(access_1.ListAccessBindingsResponse.encode(value).finish()),
        responseDeserialize: (value) => access_1.ListAccessBindingsResponse.decode(value),
    },
    /** Sets access bindings for the certificate. */
    setAccessBindings: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/SetAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.SetAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.SetAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
    /** Updates access bindings for the specified certificate. */
    updateAccessBindings: {
        path: "/yandex.cloud.certificatemanager.v1.CertificateService/UpdateAccessBindings",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(access_1.UpdateAccessBindingsRequest.encode(value).finish()),
        requestDeserialize: (value) => access_1.UpdateAccessBindingsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(operation_1.Operation.encode(value).finish()),
        responseDeserialize: (value) => operation_1.Operation.decode(value),
    },
};
exports.CertificateServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.CertificateServiceService, "yandex.cloud.certificatemanager.v1.CertificateService");
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
