import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
export interface Community {
    $type: "yandex.cloud.datasphere.v2.Community";
    /** ID of the community. */
    id: string;
    /** Time when community was created. */
    createdAt?: Date;
    /** Name of the community. */
    name: string;
    /** Description of the comminuty. */
    description: string;
    /** Labels of the community. */
    labels: {
        [key: string]: string;
    };
    /** ID of the user who created the community. */
    createdById: string;
    /** ID of the organization to which community belongs. */
    organizationId: string;
}
export interface Community_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry";
    key: string;
    value: string;
}
export declare const Community: {
    $type: "yandex.cloud.datasphere.v2.Community";
    encode(message: Community, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Community;
    fromJSON(object: any): Community;
    toJSON(message: Community): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        createdById?: string | undefined;
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
        createdById?: string | undefined;
        organizationId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "createdById" | "organizationId">, never>>(object: I): Community;
};
export declare const Community_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.Community.LabelsEntry";
    encode(message: Community_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Community_LabelsEntry;
    fromJSON(object: any): Community_LabelsEntry;
    toJSON(message: Community_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Community_LabelsEntry;
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
