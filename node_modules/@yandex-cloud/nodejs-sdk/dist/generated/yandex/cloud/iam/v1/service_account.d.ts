import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.iam.v1";
/** A ServiceAccount resource. For more information, see [Service accounts](/docs/iam/concepts/users/service-accounts). */
export interface ServiceAccount {
    $type: "yandex.cloud.iam.v1.ServiceAccount";
    /** ID of the service account. */
    id: string;
    /** ID of the folder that the service account belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the service account.
     * The name is unique within the cloud. 3-63 characters long.
     */
    name: string;
    /** Description of the service account. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface ServiceAccount_LabelsEntry {
    $type: "yandex.cloud.iam.v1.ServiceAccount.LabelsEntry";
    key: string;
    value: string;
}
export declare const ServiceAccount: {
    $type: "yandex.cloud.iam.v1.ServiceAccount";
    encode(message: ServiceAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServiceAccount;
    fromJSON(object: any): ServiceAccount;
    toJSON(message: ServiceAccount): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels">, never>>(object: I): ServiceAccount;
};
export declare const ServiceAccount_LabelsEntry: {
    $type: "yandex.cloud.iam.v1.ServiceAccount.LabelsEntry";
    encode(message: ServiceAccount_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServiceAccount_LabelsEntry;
    fromJSON(object: any): ServiceAccount_LabelsEntry;
    toJSON(message: ServiceAccount_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ServiceAccount_LabelsEntry;
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
