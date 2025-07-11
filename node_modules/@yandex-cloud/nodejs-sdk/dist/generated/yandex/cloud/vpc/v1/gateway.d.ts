import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** A Gateway resource. For more information, see [Gateway](/docs/vpc/concepts/gateways). */
export interface Gateway {
    $type: "yandex.cloud.vpc.v1.Gateway";
    /** ID of the gateway. Generated at creation time. */
    id: string;
    /** ID of the folder that the gateway belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the gateway.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the gateway. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    sharedEgressGateway?: SharedEgressGateway | undefined;
}
export interface Gateway_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry";
    key: string;
    value: string;
}
/** Shared Egress Gateway configuration */
export interface SharedEgressGateway {
    $type: "yandex.cloud.vpc.v1.SharedEgressGateway";
}
export declare const Gateway: {
    $type: "yandex.cloud.vpc.v1.Gateway";
    encode(message: Gateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Gateway;
    fromJSON(object: any): Gateway;
    toJSON(message: Gateway): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        sharedEgressGateway?: {} | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        sharedEgressGateway?: ({} & {} & Record<Exclude<keyof I["sharedEgressGateway"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "sharedEgressGateway">, never>>(object: I): Gateway;
};
export declare const Gateway_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Gateway.LabelsEntry";
    encode(message: Gateway_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Gateway_LabelsEntry;
    fromJSON(object: any): Gateway_LabelsEntry;
    toJSON(message: Gateway_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Gateway_LabelsEntry;
};
export declare const SharedEgressGateway: {
    $type: "yandex.cloud.vpc.v1.SharedEgressGateway";
    encode(_: SharedEgressGateway, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SharedEgressGateway;
    fromJSON(_: any): SharedEgressGateway;
    toJSON(_: SharedEgressGateway): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SharedEgressGateway;
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
