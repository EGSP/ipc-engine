/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { DeviceView, Device, DeviceCertificate, DevicePassword } from "../../../../../yandex/cloud/iot/devices/v1/device";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
export interface GetDeviceRequest {
    $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest";
    /**
     * ID of the device to return.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}
export interface GetByNameDeviceRequest {
    $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest";
    /**
     * ID of the registry to get device.
     *
     * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string;
    /**
     * Name of the device to return.
     *
     * To get a device name make a [DeviceService.List] request.
     */
    deviceName: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}
export interface ListDevicesRequest {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest";
    /**
     * ID of the registry to list devices in.
     *
     * To get a registry ID make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string | undefined;
    /**
     * ID of the folder to list devices in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDevicesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDevicesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * Specifies which parts of the device resource should be returned
     * in the response.
     */
    deviceView: DeviceView;
}
export interface ListDevicesResponse {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse";
    /** List of devices. */
    devices: Device[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDevicesRequest.page_size], use `next_page_token` as the value
     * for the [ListDevicesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDeviceRequest {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest";
    /**
     * ID of the registry to create a device in.
     *
     * To get a registry ID, make a [yandex.cloud.iot.devices.v1.RegistryService.List] request.
     */
    registryId: string;
    /** Name of the device. The name must be unique within the registry. */
    name: string;
    /** Description of the device. */
    description: string;
    /** Device certificate. */
    certificates: CreateDeviceRequest_Certificate[];
    /**
     * Alias of a device topic.
     *
     * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
     */
    topicAliases: {
        [key: string]: string;
    };
    /**
     * Device password.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}
export interface CreateDeviceRequest_TopicAliasesEntry {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry";
    key: string;
    value: string;
}
/** Specification of a device certificate. */
export interface CreateDeviceRequest_Certificate {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate";
    /** Public part of the device certificate. */
    certificateData: string;
}
export interface CreateDeviceMetadata {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata";
    /** ID of the device that is being created. */
    deviceId: string;
}
export interface UpdateDeviceRequest {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest";
    /**
     * ID of the device to update.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Field mask that specifies which fields of the device are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the device. The name must be unique within the registry. */
    name: string;
    /** Description of the device. */
    description: string;
    /**
     * Alias of a device topic.
     *
     * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/{id}/events`.
     */
    topicAliases: {
        [key: string]: string;
    };
}
export interface UpdateDeviceRequest_TopicAliasesEntry {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry";
    key: string;
    value: string;
}
export interface UpdateDeviceMetadata {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata";
    /** ID of the device that is being updated. */
    deviceId: string;
}
export interface DeleteDeviceRequest {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest";
    /**
     * ID of the device to delete.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
}
export interface DeleteDeviceMetadata {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata";
    /** ID of the device that is being deleted. */
    deviceId: string;
}
export interface ListDeviceCertificatesRequest {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest";
    /** ID of the device to list certificates for. */
    deviceId: string;
}
export interface ListDeviceCertificatesResponse {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse";
    /** List of certificates for the specified device. */
    certificates: DeviceCertificate[];
}
export interface AddDeviceCertificateRequest {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest";
    /**
     * ID of the device for which the certificate is being added.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Public part of the certificate. */
    certificateData: string;
}
export interface AddDeviceCertificateMetadata {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata";
    /** ID of the device certificate that is being added. */
    deviceId: string;
    /** Fingerprint of the certificate that is being added. */
    fingerprint: string;
}
export interface DeleteDeviceCertificateRequest {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest";
    /**
     * ID of the device to delete a certificate for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /** Fingerprint of the certificate to delete. */
    fingerprint: string;
}
export interface DeleteDeviceCertificateMetadata {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata";
    /** ID of the device certificate that is being deleted. */
    deviceId: string;
    /** Fingerprint of the certificate that is being deleted. */
    fingerprint: string;
}
export interface ListDevicePasswordsRequest {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest";
    /**
     * ID of the registry to list passwords in.
     *
     * To get a registry ID make a [RegistryService.List] request.
     */
    deviceId: string;
}
export interface ListDevicePasswordsResponse {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse";
    /** List of passwords for the specified device. */
    passwords: DevicePassword[];
}
export interface AddDevicePasswordRequest {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest";
    /**
     * ID of the device to add a password for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * Passwords for the device.
     *
     * The password must contain at least three character categories among the following: upper case latin, lower case latin, numbers and special symbols.
     */
    password: string;
}
export interface AddDevicePasswordMetadata {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata";
    /** ID of the device for which the password is being added. */
    deviceId: string;
    /** ID of the password that is being added. */
    passwordId: string;
}
export interface DeleteDevicePasswordRequest {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest";
    /**
     * ID of the device to delete a password for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * ID of the password to delete.
     *
     * To get a password ID make a [DeviceService.ListPasswords] request.
     */
    passwordId: string;
}
export interface DeleteDevicePasswordMetadata {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata";
    /** ID of the device for which the password is being deleted. */
    deviceId: string;
    /** ID of the password that is being deleted. */
    passwordId: string;
}
export interface ListDeviceOperationsRequest {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest";
    /**
     * ID of the device to list operations for.
     *
     * To get a device ID make a [DeviceService.List] request.
     */
    deviceId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a [ListDeviceOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDeviceOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * Currently you can use filtering only on [Device.name] field.
     */
    filter: string;
}
export interface ListDeviceOperationsResponse {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse";
    /** List of operations for the specified device certificate. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDeviceOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListDeviceOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetDeviceRequest: {
    $type: "yandex.cloud.iot.devices.v1.GetDeviceRequest";
    encode(message: GetDeviceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDeviceRequest;
    fromJSON(object: any): GetDeviceRequest;
    toJSON(message: GetDeviceRequest): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & {
        deviceId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId" | "deviceView">, never>>(object: I): GetDeviceRequest;
};
export declare const GetByNameDeviceRequest: {
    $type: "yandex.cloud.iot.devices.v1.GetByNameDeviceRequest";
    encode(message: GetByNameDeviceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetByNameDeviceRequest;
    fromJSON(object: any): GetByNameDeviceRequest;
    toJSON(message: GetByNameDeviceRequest): unknown;
    fromPartial<I extends {
        deviceName?: string | undefined;
        registryId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & {
        deviceName?: string | undefined;
        registryId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceName" | "registryId" | "deviceView">, never>>(object: I): GetByNameDeviceRequest;
};
export declare const ListDevicesRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesRequest";
    encode(message: ListDevicesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDevicesRequest;
    fromJSON(object: any): ListDevicesRequest;
    toJSON(message: ListDevicesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
        registryId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
        registryId?: string | undefined;
        deviceView?: DeviceView | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId" | "registryId" | "deviceView">, never>>(object: I): ListDevicesRequest;
};
export declare const ListDevicesResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListDevicesResponse";
    encode(message: ListDevicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDevicesResponse;
    fromJSON(object: any): ListDevicesResponse;
    toJSON(message: ListDevicesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        devices?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/devices/v1/device").Device_Status | undefined;
            registryId?: string | undefined;
            topicAliases?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            monitoringData?: {
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        devices?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/devices/v1/device").Device_Status | undefined;
            registryId?: string | undefined;
            topicAliases?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            monitoringData?: {
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/devices/v1/device").Device_Status | undefined;
            registryId?: string | undefined;
            topicAliases?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            monitoringData?: {
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/devices/v1/device").Device_Status | undefined;
            registryId?: string | undefined;
            topicAliases?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["devices"][number]["topicAliases"], string | number>, never>) | undefined;
            monitoringData?: ({
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } & {
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } & Record<Exclude<keyof I["devices"][number]["monitoringData"], "$type" | "lastAuthIp" | "lastAuthTime" | "lastPubActivityTime" | "lastSubActivityTime" | "lastOnlineTime">, never>) | undefined;
        } & Record<Exclude<keyof I["devices"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "registryId" | "topicAliases" | "monitoringData">, never>)[] & Record<Exclude<keyof I["devices"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/iot/devices/v1/device").Device_Status | undefined;
            registryId?: string | undefined;
            topicAliases?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            monitoringData?: {
                lastAuthIp?: string | undefined;
                lastAuthTime?: Date | undefined;
                lastPubActivityTime?: Date | undefined;
                lastSubActivityTime?: Date | undefined;
                lastOnlineTime?: Date | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "devices">, never>>(object: I): ListDevicesResponse;
};
export declare const CreateDeviceRequest: {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest";
    encode(message: CreateDeviceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeviceRequest;
    fromJSON(object: any): CreateDeviceRequest;
    toJSON(message: CreateDeviceRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        certificates?: {
            certificateData?: string | undefined;
        }[] | undefined;
        registryId?: string | undefined;
        password?: string | undefined;
        topicAliases?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        certificates?: ({
            certificateData?: string | undefined;
        }[] & ({
            certificateData?: string | undefined;
        } & {
            certificateData?: string | undefined;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "certificateData">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            certificateData?: string | undefined;
        }[]>, never>) | undefined;
        registryId?: string | undefined;
        password?: string | undefined;
        topicAliases?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["topicAliases"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "certificates" | "registryId" | "password" | "topicAliases">, never>>(object: I): CreateDeviceRequest;
};
export declare const CreateDeviceRequest_TopicAliasesEntry: {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.TopicAliasesEntry";
    encode(message: CreateDeviceRequest_TopicAliasesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeviceRequest_TopicAliasesEntry;
    fromJSON(object: any): CreateDeviceRequest_TopicAliasesEntry;
    toJSON(message: CreateDeviceRequest_TopicAliasesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDeviceRequest_TopicAliasesEntry;
};
export declare const CreateDeviceRequest_Certificate: {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceRequest.Certificate";
    encode(message: CreateDeviceRequest_Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeviceRequest_Certificate;
    fromJSON(object: any): CreateDeviceRequest_Certificate;
    toJSON(message: CreateDeviceRequest_Certificate): unknown;
    fromPartial<I extends {
        certificateData?: string | undefined;
    } & {
        certificateData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateData">, never>>(object: I): CreateDeviceRequest_Certificate;
};
export declare const CreateDeviceMetadata: {
    $type: "yandex.cloud.iot.devices.v1.CreateDeviceMetadata";
    encode(message: CreateDeviceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeviceMetadata;
    fromJSON(object: any): CreateDeviceMetadata;
    toJSON(message: CreateDeviceMetadata): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): CreateDeviceMetadata;
};
export declare const UpdateDeviceRequest: {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest";
    encode(message: UpdateDeviceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDeviceRequest;
    fromJSON(object: any): UpdateDeviceRequest;
    toJSON(message: UpdateDeviceRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        topicAliases?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        deviceId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        topicAliases?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["topicAliases"], string | number>, never>) | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "updateMask" | "topicAliases" | "deviceId">, never>>(object: I): UpdateDeviceRequest;
};
export declare const UpdateDeviceRequest_TopicAliasesEntry: {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceRequest.TopicAliasesEntry";
    encode(message: UpdateDeviceRequest_TopicAliasesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDeviceRequest_TopicAliasesEntry;
    fromJSON(object: any): UpdateDeviceRequest_TopicAliasesEntry;
    toJSON(message: UpdateDeviceRequest_TopicAliasesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDeviceRequest_TopicAliasesEntry;
};
export declare const UpdateDeviceMetadata: {
    $type: "yandex.cloud.iot.devices.v1.UpdateDeviceMetadata";
    encode(message: UpdateDeviceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDeviceMetadata;
    fromJSON(object: any): UpdateDeviceMetadata;
    toJSON(message: UpdateDeviceMetadata): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): UpdateDeviceMetadata;
};
export declare const DeleteDeviceRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceRequest";
    encode(message: DeleteDeviceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDeviceRequest;
    fromJSON(object: any): DeleteDeviceRequest;
    toJSON(message: DeleteDeviceRequest): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): DeleteDeviceRequest;
};
export declare const DeleteDeviceMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceMetadata";
    encode(message: DeleteDeviceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDeviceMetadata;
    fromJSON(object: any): DeleteDeviceMetadata;
    toJSON(message: DeleteDeviceMetadata): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): DeleteDeviceMetadata;
};
export declare const ListDeviceCertificatesRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesRequest";
    encode(message: ListDeviceCertificatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceCertificatesRequest;
    fromJSON(object: any): ListDeviceCertificatesRequest;
    toJSON(message: ListDeviceCertificatesRequest): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): ListDeviceCertificatesRequest;
};
export declare const ListDeviceCertificatesResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceCertificatesResponse";
    encode(message: ListDeviceCertificatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceCertificatesResponse;
    fromJSON(object: any): ListDeviceCertificatesResponse;
    toJSON(message: ListDeviceCertificatesResponse): unknown;
    fromPartial<I extends {
        certificates?: {
            createdAt?: Date | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
            deviceId?: string | undefined;
        }[] | undefined;
    } & {
        certificates?: ({
            createdAt?: Date | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
            deviceId?: string | undefined;
        }[] & ({
            createdAt?: Date | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
            deviceId?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
            deviceId?: string | undefined;
        } & Record<Exclude<keyof I["certificates"][number], "$type" | "createdAt" | "fingerprint" | "certificateData" | "deviceId">, never>)[] & Record<Exclude<keyof I["certificates"], "$type" | keyof {
            createdAt?: Date | undefined;
            fingerprint?: string | undefined;
            certificateData?: string | undefined;
            deviceId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificates">, never>>(object: I): ListDeviceCertificatesResponse;
};
export declare const AddDeviceCertificateRequest: {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateRequest";
    encode(message: AddDeviceCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDeviceCertificateRequest;
    fromJSON(object: any): AddDeviceCertificateRequest;
    toJSON(message: AddDeviceCertificateRequest): unknown;
    fromPartial<I extends {
        certificateData?: string | undefined;
        deviceId?: string | undefined;
    } & {
        certificateData?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateData" | "deviceId">, never>>(object: I): AddDeviceCertificateRequest;
};
export declare const AddDeviceCertificateMetadata: {
    $type: "yandex.cloud.iot.devices.v1.AddDeviceCertificateMetadata";
    encode(message: AddDeviceCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDeviceCertificateMetadata;
    fromJSON(object: any): AddDeviceCertificateMetadata;
    toJSON(message: AddDeviceCertificateMetadata): unknown;
    fromPartial<I extends {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fingerprint" | "deviceId">, never>>(object: I): AddDeviceCertificateMetadata;
};
export declare const DeleteDeviceCertificateRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateRequest";
    encode(message: DeleteDeviceCertificateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDeviceCertificateRequest;
    fromJSON(object: any): DeleteDeviceCertificateRequest;
    toJSON(message: DeleteDeviceCertificateRequest): unknown;
    fromPartial<I extends {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fingerprint" | "deviceId">, never>>(object: I): DeleteDeviceCertificateRequest;
};
export declare const DeleteDeviceCertificateMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDeviceCertificateMetadata";
    encode(message: DeleteDeviceCertificateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDeviceCertificateMetadata;
    fromJSON(object: any): DeleteDeviceCertificateMetadata;
    toJSON(message: DeleteDeviceCertificateMetadata): unknown;
    fromPartial<I extends {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & {
        fingerprint?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fingerprint" | "deviceId">, never>>(object: I): DeleteDeviceCertificateMetadata;
};
export declare const ListDevicePasswordsRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsRequest";
    encode(message: ListDevicePasswordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDevicePasswordsRequest;
    fromJSON(object: any): ListDevicePasswordsRequest;
    toJSON(message: ListDevicePasswordsRequest): unknown;
    fromPartial<I extends {
        deviceId?: string | undefined;
    } & {
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "deviceId">, never>>(object: I): ListDevicePasswordsRequest;
};
export declare const ListDevicePasswordsResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListDevicePasswordsResponse";
    encode(message: ListDevicePasswordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDevicePasswordsResponse;
    fromJSON(object: any): ListDevicePasswordsResponse;
    toJSON(message: ListDevicePasswordsResponse): unknown;
    fromPartial<I extends {
        passwords?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            deviceId?: string | undefined;
        }[] | undefined;
    } & {
        passwords?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            deviceId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            deviceId?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            deviceId?: string | undefined;
        } & Record<Exclude<keyof I["passwords"][number], "$type" | "id" | "createdAt" | "deviceId">, never>)[] & Record<Exclude<keyof I["passwords"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            deviceId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "passwords">, never>>(object: I): ListDevicePasswordsResponse;
};
export declare const AddDevicePasswordRequest: {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordRequest";
    encode(message: AddDevicePasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDevicePasswordRequest;
    fromJSON(object: any): AddDevicePasswordRequest;
    toJSON(message: AddDevicePasswordRequest): unknown;
    fromPartial<I extends {
        password?: string | undefined;
        deviceId?: string | undefined;
    } & {
        password?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "password" | "deviceId">, never>>(object: I): AddDevicePasswordRequest;
};
export declare const AddDevicePasswordMetadata: {
    $type: "yandex.cloud.iot.devices.v1.AddDevicePasswordMetadata";
    encode(message: AddDevicePasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDevicePasswordMetadata;
    fromJSON(object: any): AddDevicePasswordMetadata;
    toJSON(message: AddDevicePasswordMetadata): unknown;
    fromPartial<I extends {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "passwordId" | "deviceId">, never>>(object: I): AddDevicePasswordMetadata;
};
export declare const DeleteDevicePasswordRequest: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordRequest";
    encode(message: DeleteDevicePasswordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDevicePasswordRequest;
    fromJSON(object: any): DeleteDevicePasswordRequest;
    toJSON(message: DeleteDevicePasswordRequest): unknown;
    fromPartial<I extends {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "passwordId" | "deviceId">, never>>(object: I): DeleteDevicePasswordRequest;
};
export declare const DeleteDevicePasswordMetadata: {
    $type: "yandex.cloud.iot.devices.v1.DeleteDevicePasswordMetadata";
    encode(message: DeleteDevicePasswordMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDevicePasswordMetadata;
    fromJSON(object: any): DeleteDevicePasswordMetadata;
    toJSON(message: DeleteDevicePasswordMetadata): unknown;
    fromPartial<I extends {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & {
        passwordId?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "passwordId" | "deviceId">, never>>(object: I): DeleteDevicePasswordMetadata;
};
export declare const ListDeviceOperationsRequest: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsRequest";
    encode(message: ListDeviceOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceOperationsRequest;
    fromJSON(object: any): ListDeviceOperationsRequest;
    toJSON(message: ListDeviceOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        deviceId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        deviceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "deviceId">, never>>(object: I): ListDeviceOperationsRequest;
};
export declare const ListDeviceOperationsResponse: {
    $type: "yandex.cloud.iot.devices.v1.ListDeviceOperationsResponse";
    encode(message: ListDeviceOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDeviceOperationsResponse;
    fromJSON(object: any): ListDeviceOperationsResponse;
    toJSON(message: ListDeviceOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListDeviceOperationsResponse;
};
/** A set of methods for managing devices. */
export declare const DeviceServiceService: {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDeviceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDeviceRequest;
        readonly responseSerialize: (value: Device) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Device;
    };
    readonly getByName: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/GetByName";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetByNameDeviceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetByNameDeviceRequest;
        readonly responseSerialize: (value: Device) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Device;
    };
    /** Retrieves the list of devices in the specified registry. */
    readonly list: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDevicesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDevicesRequest;
        readonly responseSerialize: (value: ListDevicesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDevicesResponse;
    };
    /** Creates a device in the specified registry. */
    readonly create: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDeviceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDeviceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified device. */
    readonly update: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDeviceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDeviceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified device. */
    readonly delete: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDeviceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDeviceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of device certificates for the specified device. */
    readonly listCertificates: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListCertificates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDeviceCertificatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDeviceCertificatesRequest;
        readonly responseSerialize: (value: ListDeviceCertificatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDeviceCertificatesResponse;
    };
    /** Adds a certificate. */
    readonly addCertificate: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/AddCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddDeviceCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddDeviceCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified device certificate. */
    readonly deleteCertificate: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/DeleteCertificate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDeviceCertificateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDeviceCertificateRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of passwords for the specified device. */
    readonly listPasswords: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListPasswords";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDevicePasswordsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDevicePasswordsRequest;
        readonly responseSerialize: (value: ListDevicePasswordsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDevicePasswordsResponse;
    };
    /** Adds password for the specified device. */
    readonly addPassword: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/AddPassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddDevicePasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddDevicePasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified password. */
    readonly deletePassword: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/DeletePassword";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDevicePasswordRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDevicePasswordRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified device. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.iot.devices.v1.DeviceService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDeviceOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDeviceOperationsRequest;
        readonly responseSerialize: (value: ListDeviceOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDeviceOperationsResponse;
    };
};
export interface DeviceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get: handleUnaryCall<GetDeviceRequest, Device>;
    getByName: handleUnaryCall<GetByNameDeviceRequest, Device>;
    /** Retrieves the list of devices in the specified registry. */
    list: handleUnaryCall<ListDevicesRequest, ListDevicesResponse>;
    /** Creates a device in the specified registry. */
    create: handleUnaryCall<CreateDeviceRequest, Operation>;
    /** Updates the specified device. */
    update: handleUnaryCall<UpdateDeviceRequest, Operation>;
    /** Deletes the specified device. */
    delete: handleUnaryCall<DeleteDeviceRequest, Operation>;
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates: handleUnaryCall<ListDeviceCertificatesRequest, ListDeviceCertificatesResponse>;
    /** Adds a certificate. */
    addCertificate: handleUnaryCall<AddDeviceCertificateRequest, Operation>;
    /** Deletes the specified device certificate. */
    deleteCertificate: handleUnaryCall<DeleteDeviceCertificateRequest, Operation>;
    /** Retrieves the list of passwords for the specified device. */
    listPasswords: handleUnaryCall<ListDevicePasswordsRequest, ListDevicePasswordsResponse>;
    /** Adds password for the specified device. */
    addPassword: handleUnaryCall<AddDevicePasswordRequest, Operation>;
    /** Deletes the specified password. */
    deletePassword: handleUnaryCall<DeleteDevicePasswordRequest, Operation>;
    /** Lists operations for the specified device. */
    listOperations: handleUnaryCall<ListDeviceOperationsRequest, ListDeviceOperationsResponse>;
}
export interface DeviceServiceClient extends Client {
    /**
     * Returns the specified device.
     *
     * To get the list of available devices, make a [List] request.
     */
    get(request: GetDeviceRequest, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    get(request: GetDeviceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    get(request: GetDeviceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    getByName(request: GetByNameDeviceRequest, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    getByName(request: GetByNameDeviceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    getByName(request: GetByNameDeviceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Device) => void): ClientUnaryCall;
    /** Retrieves the list of devices in the specified registry. */
    list(request: ListDevicesRequest, callback: (error: ServiceError | null, response: ListDevicesResponse) => void): ClientUnaryCall;
    list(request: ListDevicesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDevicesResponse) => void): ClientUnaryCall;
    list(request: ListDevicesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDevicesResponse) => void): ClientUnaryCall;
    /** Creates a device in the specified registry. */
    create(request: CreateDeviceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDeviceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDeviceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified device. */
    update(request: UpdateDeviceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDeviceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDeviceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified device. */
    delete(request: DeleteDeviceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDeviceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDeviceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of device certificates for the specified device. */
    listCertificates(request: ListDeviceCertificatesRequest, callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListDeviceCertificatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void): ClientUnaryCall;
    listCertificates(request: ListDeviceCertificatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDeviceCertificatesResponse) => void): ClientUnaryCall;
    /** Adds a certificate. */
    addCertificate(request: AddDeviceCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddDeviceCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addCertificate(request: AddDeviceCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified device certificate. */
    deleteCertificate(request: DeleteDeviceCertificateRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteDeviceCertificateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteCertificate(request: DeleteDeviceCertificateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of passwords for the specified device. */
    listPasswords(request: ListDevicePasswordsRequest, callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListDevicePasswordsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void): ClientUnaryCall;
    listPasswords(request: ListDevicePasswordsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDevicePasswordsResponse) => void): ClientUnaryCall;
    /** Adds password for the specified device. */
    addPassword(request: AddDevicePasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddDevicePasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addPassword(request: AddDevicePasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified password. */
    deletePassword(request: DeleteDevicePasswordRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteDevicePasswordRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deletePassword(request: DeleteDevicePasswordRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified device. */
    listOperations(request: ListDeviceOperationsRequest, callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDeviceOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDeviceOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDeviceOperationsResponse) => void): ClientUnaryCall;
}
export declare const DeviceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DeviceServiceClient;
    service: typeof DeviceServiceService;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
