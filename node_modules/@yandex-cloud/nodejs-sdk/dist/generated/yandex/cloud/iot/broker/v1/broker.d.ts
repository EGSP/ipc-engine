import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iot.broker.v1";
/** A broker. */
export interface Broker {
    $type: "yandex.cloud.iot.broker.v1.Broker";
    /** ID of the broker. */
    id: string;
    /** ID of the folder that the broker belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the broker. The name is unique within the folder. */
    name: string;
    /** Description of the broker. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** Status of the broker. */
    status: Broker_Status;
}
export declare enum Broker_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Broker is being created. */
    CREATING = 1,
    /** ACTIVE - Broker is ready to use. */
    ACTIVE = 2,
    /** DELETING - Broker is being deleted. */
    DELETING = 3,
    UNRECOGNIZED = -1
}
export declare function broker_StatusFromJSON(object: any): Broker_Status;
export declare function broker_StatusToJSON(object: Broker_Status): string;
export interface Broker_LabelsEntry {
    $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry";
    key: string;
    value: string;
}
/** A broker certificate. */
export interface BrokerCertificate {
    $type: "yandex.cloud.iot.broker.v1.BrokerCertificate";
    /** ID of the broker that the certificate belongs to. */
    brokerId: string;
    /** SHA256 hash of the certificates. */
    fingerprint: string;
    /** Public part of the certificate. */
    certificateData: string;
    /** Creation timestamp. */
    createdAt?: Date;
}
/** A broker password. */
export interface BrokerPassword {
    $type: "yandex.cloud.iot.broker.v1.BrokerPassword";
    /** ID of the broker that the password belongs to. */
    brokerId: string;
    /** ID of the password. */
    id: string;
    /** Creation timestamp. */
    createdAt?: Date;
}
export declare const Broker: {
    $type: "yandex.cloud.iot.broker.v1.Broker";
    encode(message: Broker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Broker;
    fromJSON(object: any): Broker;
    toJSON(message: Broker): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Broker_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Broker_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels">, never>>(object: I): Broker;
};
export declare const Broker_LabelsEntry: {
    $type: "yandex.cloud.iot.broker.v1.Broker.LabelsEntry";
    encode(message: Broker_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Broker_LabelsEntry;
    fromJSON(object: any): Broker_LabelsEntry;
    toJSON(message: Broker_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Broker_LabelsEntry;
};
export declare const BrokerCertificate: {
    $type: "yandex.cloud.iot.broker.v1.BrokerCertificate";
    encode(message: BrokerCertificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerCertificate;
    fromJSON(object: any): BrokerCertificate;
    toJSON(message: BrokerCertificate): unknown;
    fromPartial<I extends {
        createdAt?: Date | undefined;
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
        certificateData?: string | undefined;
    } & {
        createdAt?: Date | undefined;
        brokerId?: string | undefined;
        fingerprint?: string | undefined;
        certificateData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "createdAt" | "brokerId" | "fingerprint" | "certificateData">, never>>(object: I): BrokerCertificate;
};
export declare const BrokerPassword: {
    $type: "yandex.cloud.iot.broker.v1.BrokerPassword";
    encode(message: BrokerPassword, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BrokerPassword;
    fromJSON(object: any): BrokerPassword;
    toJSON(message: BrokerPassword): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        brokerId?: string | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        brokerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "brokerId">, never>>(object: I): BrokerPassword;
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
