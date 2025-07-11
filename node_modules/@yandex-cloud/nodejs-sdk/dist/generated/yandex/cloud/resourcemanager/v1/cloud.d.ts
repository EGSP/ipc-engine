import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.resourcemanager.v1";
/** A Cloud resource. For more information, see [Cloud](/docs/resource-manager/concepts/resources-hierarchy#cloud). */
export interface Cloud {
    $type: "yandex.cloud.resourcemanager.v1.Cloud";
    /** ID of the cloud. */
    id: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the cloud. 3-63 characters long. */
    name: string;
    /** Description of the cloud. 0-256 characters long. */
    description: string;
    /** ID of the organization that the cloud belongs to. */
    organizationId: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface Cloud_LabelsEntry {
    $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry";
    key: string;
    value: string;
}
export declare const Cloud: {
    $type: "yandex.cloud.resourcemanager.v1.Cloud";
    encode(message: Cloud, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cloud;
    fromJSON(object: any): Cloud;
    toJSON(message: Cloud): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        organizationId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "organizationId">, never>>(object: I): Cloud;
};
export declare const Cloud_LabelsEntry: {
    $type: "yandex.cloud.resourcemanager.v1.Cloud.LabelsEntry";
    encode(message: Cloud_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Cloud_LabelsEntry;
    fromJSON(object: any): Cloud_LabelsEntry;
    toJSON(message: Cloud_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Cloud_LabelsEntry;
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
