import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
/** Group mapping represents which external (federated) groups should match which internal (cloud) groups */
export interface GroupMappingItem {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem";
    /** External group id (received from identity provider) */
    externalGroupId: string;
    /** Internal cloud group id */
    internalGroupId: string;
}
/**
 * Group synchronization status for a specific federation
 * Absence of this object for a federation means that there is no group synchronization set of for the federation.
 */
export interface GroupMapping {
    $type: "yandex.cloud.organizationmanager.v1.GroupMapping";
    /** Federation id */
    federationId: string;
    /** Flag to show whether group synchronization should be enabled for this federation. */
    enabled: boolean;
}
export declare const GroupMappingItem: {
    $type: "yandex.cloud.organizationmanager.v1.GroupMappingItem";
    encode(message: GroupMappingItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupMappingItem;
    fromJSON(object: any): GroupMappingItem;
    toJSON(message: GroupMappingItem): unknown;
    fromPartial<I extends {
        externalGroupId?: string | undefined;
        internalGroupId?: string | undefined;
    } & {
        externalGroupId?: string | undefined;
        internalGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "externalGroupId" | "internalGroupId">, never>>(object: I): GroupMappingItem;
};
export declare const GroupMapping: {
    $type: "yandex.cloud.organizationmanager.v1.GroupMapping";
    encode(message: GroupMapping, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GroupMapping;
    fromJSON(object: any): GroupMapping;
    toJSON(message: GroupMapping): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & {
        enabled?: boolean | undefined;
        federationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "federationId">, never>>(object: I): GroupMapping;
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
