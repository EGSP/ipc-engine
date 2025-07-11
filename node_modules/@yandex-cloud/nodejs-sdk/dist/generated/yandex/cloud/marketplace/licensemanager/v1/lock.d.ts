import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
export interface Lock {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Lock";
    id: string;
    instanceId: string;
    resourceId: string;
    startTime?: Date;
    endTime?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    state: Lock_State;
}
export declare enum Lock_State {
    STATE_UNSPECIFIED = 0,
    UNLOCKED = 1,
    LOCKED = 2,
    DELETED = 3,
    UNRECOGNIZED = -1
}
export declare function lock_StateFromJSON(object: any): Lock_State;
export declare function lock_StateToJSON(object: Lock_State): string;
export declare const Lock: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Lock";
    encode(message: Lock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Lock;
    fromJSON(object: any): Lock;
    toJSON(message: Lock): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        updatedAt?: Date | undefined;
        instanceId?: string | undefined;
        state?: Lock_State | undefined;
    } & {
        id?: string | undefined;
        resourceId?: string | undefined;
        createdAt?: Date | undefined;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        updatedAt?: Date | undefined;
        instanceId?: string | undefined;
        state?: Lock_State | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "resourceId" | "createdAt" | "startTime" | "endTime" | "updatedAt" | "instanceId" | "state">, never>>(object: I): Lock;
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
