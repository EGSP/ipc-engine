import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** A Network resource. For more information, see [Networks](/docs/vpc/concepts/network). */
export interface Network {
    $type: "yandex.cloud.vpc.v1.Network";
    /** ID of the network. */
    id: string;
    /** ID of the folder that the network belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the network.
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** Optional description of the network. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of default security group for network. */
    defaultSecurityGroupId: string;
}
export interface Network_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.Network.LabelsEntry";
    key: string;
    value: string;
}
export declare const Network: {
    $type: "yandex.cloud.vpc.v1.Network";
    encode(message: Network, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Network;
    fromJSON(object: any): Network;
    toJSON(message: Network): unknown;
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
        defaultSecurityGroupId?: string | undefined;
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
        defaultSecurityGroupId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "defaultSecurityGroupId">, never>>(object: I): Network;
};
export declare const Network_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Network.LabelsEntry";
    encode(message: Network_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Network_LabelsEntry;
    fromJSON(object: any): Network_LabelsEntry;
    toJSON(message: Network_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Network_LabelsEntry;
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
