import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.datasphere.v2";
export interface User {
    $type: "yandex.cloud.datasphere.v2.User";
    /** ID of the user. */
    id: string;
    /** Name of the user. */
    name: string;
    /** Email of the user. */
    email: string;
    /** URL to the user's profile picture. */
    picture: string;
    /** An image content of the user's profile picture. */
    pictureData: string;
}
export declare const User: {
    $type: "yandex.cloud.datasphere.v2.User";
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        picture?: string | undefined;
        pictureData?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        picture?: string | undefined;
        pictureData?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "email" | "picture" | "pictureData">, never>>(object: I): User;
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
