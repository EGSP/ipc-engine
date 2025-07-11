import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iot.devices.v1";
/** A registry. For more information, see [Registry](/docs/iot-core/concepts/index#registry). */
export interface Registry {
    $type: "yandex.cloud.iot.devices.v1.Registry";
    /** ID of the registry. */
    id: string;
    /** ID of the folder that the registry belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the registry. The name is unique within the folder. */
    name: string;
    /** Description of the registry. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the registry. */
    status: Registry_Status;
    /** ID of the logs group for the specified registry. */
    logGroupId: string;
}
export declare enum Registry_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Registry is being created. */
    CREATING = 1,
    /** ACTIVE - Registry is ready to use. */
    ACTIVE = 2,
    /** DELETING - Registry is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1
}
export declare function registry_StatusFromJSON(object: any): Registry_Status;
export declare function registry_StatusToJSON(object: Registry_Status): string;
export interface Registry_LabelsEntry {
    $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry";
    key: string;
    value: string;
}
/** A registry certificate. For more information, see [Managing registry certificates](/docs/iot-core/operations/certificates/registry-certificates). */
export interface RegistryCertificate {
    $type: "yandex.cloud.iot.devices.v1.RegistryCertificate";
    /** ID of the registry that the certificate belongs to. */
    registryId: string;
    /** SHA256 hash of the certificates. */
    fingerprint: string;
    /** Public part of the certificate. */
    certificateData: string;
    /** Creation timestamp. */
    createdAt?: Date;
}
/**
 * A device topic alias.
 *
 * Alias is an alternate name of a device topic assigned by the user. Map alias to canonical topic name prefix, e.g. `my/custom/alias` match to `$device/abcdef/events`. For more information, see [Using topic aliases](/docs/iot-core/concepts/topic#aliases).
 */
export interface DeviceAlias {
    $type: "yandex.cloud.iot.devices.v1.DeviceAlias";
    /** ID of the device that the alias belongs to. */
    deviceId: string;
    /** Prefix of a canonical topic name to be aliased, e.g. `$devices/abcdef`. */
    topicPrefix: string;
    /** Alias of a device topic. */
    alias: string;
}
/** A registry password. */
export interface RegistryPassword {
    $type: "yandex.cloud.iot.devices.v1.RegistryPassword";
    /** ID of the registry that the password belongs to. */
    registryId: string;
    /** ID of the password. */
    id: string;
    /** Creation timestamp. */
    createdAt?: Date;
}
/** A Yandex Data Streams export. */
export interface DataStreamExport {
    $type: "yandex.cloud.iot.devices.v1.DataStreamExport";
    /** ID of the YDS export. */
    id: string;
    /** Name of the YDS export. */
    name: string;
    /** ID of the registry that the YDS export belongs to. */
    registryId: string;
    /** MQTT topic whose messages export to YDS. */
    mqttTopicFilter: string;
    /** YDS database. */
    database: string;
    /** YDS stream name. */
    stream: string;
    /** ID of the service account which has permission to write to data stream. */
    serviceAccountId: string;
    /** Creation timestamp. */
    createdAt?: Date;
}
export declare const Registry: {
    $type: "yandex.cloud.iot.devices.v1.Registry";
    encode(message: Registry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Registry;
    fromJSON(object: any): Registry;
    toJSON(message: Registry): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Registry_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        logGroupId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Registry_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        logGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "logGroupId">, never>>(object: I): Registry;
};
export declare const Registry_LabelsEntry: {
    $type: "yandex.cloud.iot.devices.v1.Registry.LabelsEntry";
    encode(message: Registry_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Registry_LabelsEntry;
    fromJSON(object: any): Registry_LabelsEntry;
    toJSON(message: Registry_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Registry_LabelsEntry;
};
export declare const RegistryCertificate: {
    $type: "yandex.cloud.iot.devices.v1.RegistryCertificate";
    encode(message: RegistryCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegistryCertificate;
    fromJSON(object: any): RegistryCertificate;
    toJSON(message: RegistryCertificate): unknown;
    fromPartial<I extends {
        createdAt?: Date | undefined;
        registryId?: string | undefined;
        fingerprint?: string | undefined;
        certificateData?: string | undefined;
    } & {
        createdAt?: Date | undefined;
        registryId?: string | undefined;
        fingerprint?: string | undefined;
        certificateData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "createdAt" | "registryId" | "fingerprint" | "certificateData">, never>>(object: I): RegistryCertificate;
};
export declare const DeviceAlias: {
    $type: "yandex.cloud.iot.devices.v1.DeviceAlias";
    encode(message: DeviceAlias, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeviceAlias;
    fromJSON(object: any): DeviceAlias;
    toJSON(message: DeviceAlias): unknown;
    fromPartial<I extends {
        topicPrefix?: string | undefined;
        deviceId?: string | undefined;
        alias?: string | undefined;
    } & {
        topicPrefix?: string | undefined;
        deviceId?: string | undefined;
        alias?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "topicPrefix" | "deviceId" | "alias">, never>>(object: I): DeviceAlias;
};
export declare const RegistryPassword: {
    $type: "yandex.cloud.iot.devices.v1.RegistryPassword";
    encode(message: RegistryPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegistryPassword;
    fromJSON(object: any): RegistryPassword;
    toJSON(message: RegistryPassword): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        registryId?: string | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        registryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "registryId">, never>>(object: I): RegistryPassword;
};
export declare const DataStreamExport: {
    $type: "yandex.cloud.iot.devices.v1.DataStreamExport";
    encode(message: DataStreamExport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataStreamExport;
    fromJSON(object: any): DataStreamExport;
    toJSON(message: DataStreamExport): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        stream?: string | undefined;
        serviceAccountId?: string | undefined;
        registryId?: string | undefined;
        database?: string | undefined;
        mqttTopicFilter?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        stream?: string | undefined;
        serviceAccountId?: string | undefined;
        registryId?: string | undefined;
        database?: string | undefined;
        mqttTopicFilter?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "stream" | "serviceAccountId" | "registryId" | "database" | "mqttTopicFilter">, never>>(object: I): DataStreamExport;
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
