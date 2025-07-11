import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.serverless.apigateway.websocket.v1";
export interface Connection {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection";
    /** ID of the connection. */
    id: string;
    /** ID of the API Gateway. */
    gatewayId: string;
    /** The information about the caller making the request to API Gateway. */
    identity?: Identity;
    /** The timestamp at which connection was established. */
    connectedAt?: Date;
    /** The timestamp at which connection was last accessed. */
    lastActiveAt?: Date;
}
export interface Identity {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity";
    /** The source IP address of the caller making the request to API Gateway. */
    sourceIp: string;
    /** The User Agent of the caller making the request to API Gateway. */
    userAgent: string;
}
export declare const Connection: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Connection";
    encode(message: Connection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connection;
    fromJSON(object: any): Connection;
    toJSON(message: Connection): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        gatewayId?: string | undefined;
        identity?: {
            sourceIp?: string | undefined;
            userAgent?: string | undefined;
        } | undefined;
        connectedAt?: Date | undefined;
        lastActiveAt?: Date | undefined;
    } & {
        id?: string | undefined;
        gatewayId?: string | undefined;
        identity?: ({
            sourceIp?: string | undefined;
            userAgent?: string | undefined;
        } & {
            sourceIp?: string | undefined;
            userAgent?: string | undefined;
        } & Record<Exclude<keyof I["identity"], "$type" | "sourceIp" | "userAgent">, never>) | undefined;
        connectedAt?: Date | undefined;
        lastActiveAt?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "gatewayId" | "identity" | "connectedAt" | "lastActiveAt">, never>>(object: I): Connection;
};
export declare const Identity: {
    $type: "yandex.cloud.serverless.apigateway.websocket.v1.Identity";
    encode(message: Identity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Identity;
    fromJSON(object: any): Identity;
    toJSON(message: Identity): unknown;
    fromPartial<I extends {
        sourceIp?: string | undefined;
        userAgent?: string | undefined;
    } & {
        sourceIp?: string | undefined;
        userAgent?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "sourceIp" | "userAgent">, never>>(object: I): Identity;
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
