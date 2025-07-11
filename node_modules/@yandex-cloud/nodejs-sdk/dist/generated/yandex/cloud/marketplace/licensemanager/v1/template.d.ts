import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
export interface Template {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Template";
    id: string;
    versionId: string;
    name: string;
    publisherId: string;
    productId: string;
    tariffId: string;
    licenseSkuId: string;
    period: string;
    createdAt?: Date;
    updatedAt?: Date;
    state: Template_State;
}
export declare enum Template_State {
    STATE_UNSPECIFIED = 0,
    PENDING = 1,
    ACTIVE = 2,
    DEPRECATED = 3,
    DELETED = 4,
    UNRECOGNIZED = -1
}
export declare function template_StateFromJSON(object: any): Template_State;
export declare function template_StateToJSON(object: Template_State): string;
export declare const Template: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Template";
    encode(message: Template, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Template;
    fromJSON(object: any): Template;
    toJSON(message: Template): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        versionId?: string | undefined;
        state?: Template_State | undefined;
        publisherId?: string | undefined;
        productId?: string | undefined;
        tariffId?: string | undefined;
        licenseSkuId?: string | undefined;
        period?: string | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        versionId?: string | undefined;
        state?: Template_State | undefined;
        publisherId?: string | undefined;
        productId?: string | undefined;
        tariffId?: string | undefined;
        licenseSkuId?: string | undefined;
        period?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdAt" | "updatedAt" | "versionId" | "state" | "publisherId" | "productId" | "tariffId" | "licenseSkuId" | "period">, never>>(object: I): Template;
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
