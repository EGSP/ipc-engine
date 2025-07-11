import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export declare enum IpPermissionAction {
    IP_PERMISSION_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an ip permission. */
    ADD = 1,
    /** REMOVE - Removal of an ip permission. */
    REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare function ipPermissionActionFromJSON(object: any): IpPermissionAction;
export declare function ipPermissionActionToJSON(object: IpPermissionAction): string;
export interface IpPermission {
    $type: "yandex.cloud.containerregistry.v1.IpPermission";
    action: IpPermission_Action;
    ip: string;
}
export declare enum IpPermission_Action {
    ACTION_UNSPECIFIED = 0,
    PULL = 1,
    PUSH = 2,
    UNRECOGNIZED = -1
}
export declare function ipPermission_ActionFromJSON(object: any): IpPermission_Action;
export declare function ipPermission_ActionToJSON(object: IpPermission_Action): string;
export interface IpPermissionDelta {
    $type: "yandex.cloud.containerregistry.v1.IpPermissionDelta";
    /** The action that is being performed on an ip permission. */
    action: IpPermissionAction;
    /** Ip permission. */
    ipPermission?: IpPermission;
}
export declare const IpPermission: {
    $type: "yandex.cloud.containerregistry.v1.IpPermission";
    encode(message: IpPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IpPermission;
    fromJSON(object: any): IpPermission;
    toJSON(message: IpPermission): unknown;
    fromPartial<I extends {
        action?: IpPermission_Action | undefined;
        ip?: string | undefined;
    } & {
        action?: IpPermission_Action | undefined;
        ip?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "action" | "ip">, never>>(object: I): IpPermission;
};
export declare const IpPermissionDelta: {
    $type: "yandex.cloud.containerregistry.v1.IpPermissionDelta";
    encode(message: IpPermissionDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IpPermissionDelta;
    fromJSON(object: any): IpPermissionDelta;
    toJSON(message: IpPermissionDelta): unknown;
    fromPartial<I extends {
        action?: IpPermissionAction | undefined;
        ipPermission?: {
            action?: IpPermission_Action | undefined;
            ip?: string | undefined;
        } | undefined;
    } & {
        action?: IpPermissionAction | undefined;
        ipPermission?: ({
            action?: IpPermission_Action | undefined;
            ip?: string | undefined;
        } & {
            action?: IpPermission_Action | undefined;
            ip?: string | undefined;
        } & Record<Exclude<keyof I["ipPermission"], "$type" | "action" | "ip">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "action" | "ipPermission">, never>>(object: I): IpPermissionDelta;
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
