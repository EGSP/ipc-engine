import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
/**
 * A Group resource.
 * For more information, see [Groups](/docs/organization/manage-groups).
 */
export interface Group {
    $type: "yandex.cloud.organizationmanager.v1.Group";
    /** ID of the group. */
    id: string;
    /** ID of the organization that the group belongs to. */
    organizationId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** Name of the group. */
    name: string;
    /** Description of the group. */
    description: string;
}
export declare const Group: {
    $type: "yandex.cloud.organizationmanager.v1.Group";
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Group;
    fromJSON(object: any): Group;
    toJSON(message: Group): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        organizationId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "organizationId">, never>>(object: I): Group;
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
