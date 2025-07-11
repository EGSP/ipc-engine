import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
export interface Secret {
    $type: "yandex.cloud.datasphere.v2.Secret";
    /** ID of the secret. */
    id: string;
    /** ID of the project. */
    projectId: string;
    /** Time when secret was created. */
    createdAt?: Date;
    /** Name of the secret. 1-63 characters long. */
    name: string;
    /** Description of the secret. 0-256 characters long. */
    description: string;
    /** Labels of the secret. */
    labels: {
        [key: string]: string;
    };
    /** ID of the user who created secret. */
    createdById: string;
    /** Time of last secret update. */
    updatedAt?: Date;
}
export interface Secret_LabelsEntry {
    $type: "yandex.cloud.datasphere.v2.Secret.LabelsEntry";
    key: string;
    value: string;
}
export interface DecryptedSecret {
    $type: "yandex.cloud.datasphere.v2.DecryptedSecret";
    secret?: Secret;
    /** Content of the secret. */
    content: string;
}
export declare const Secret: {
    $type: "yandex.cloud.datasphere.v2.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        projectId?: string | undefined;
        createdById?: string | undefined;
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
        updatedAt?: Date | undefined;
        projectId?: string | undefined;
        createdById?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "updatedAt" | "projectId" | "createdById">, never>>(object: I): Secret;
};
export declare const Secret_LabelsEntry: {
    $type: "yandex.cloud.datasphere.v2.Secret.LabelsEntry";
    encode(message: Secret_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret_LabelsEntry;
    fromJSON(object: any): Secret_LabelsEntry;
    toJSON(message: Secret_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Secret_LabelsEntry;
};
export declare const DecryptedSecret: {
    $type: "yandex.cloud.datasphere.v2.DecryptedSecret";
    encode(message: DecryptedSecret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DecryptedSecret;
    fromJSON(object: any): DecryptedSecret;
    toJSON(message: DecryptedSecret): unknown;
    fromPartial<I extends {
        content?: string | undefined;
        secret?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            projectId?: string | undefined;
            createdById?: string | undefined;
        } | undefined;
    } & {
        content?: string | undefined;
        secret?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            projectId?: string | undefined;
            createdById?: string | undefined;
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
            } & Record<Exclude<keyof I["secret"]["labels"], string | number>, never>) | undefined;
            updatedAt?: Date | undefined;
            projectId?: string | undefined;
            createdById?: string | undefined;
        } & Record<Exclude<keyof I["secret"], "$type" | "description" | "id" | "name" | "createdAt" | "labels" | "updatedAt" | "projectId" | "createdById">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "secret">, never>>(object: I): DecryptedSecret;
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
