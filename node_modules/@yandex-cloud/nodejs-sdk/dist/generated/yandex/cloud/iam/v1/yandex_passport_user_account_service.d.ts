/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UserAccount } from "../../../../yandex/cloud/iam/v1/user_account";
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetUserAccountByLoginRequest {
    $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest";
    /** Login of the YandexPassportUserAccount resource to return. */
    login: string;
}
export declare const GetUserAccountByLoginRequest: {
    $type: "yandex.cloud.iam.v1.GetUserAccountByLoginRequest";
    encode(message: GetUserAccountByLoginRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserAccountByLoginRequest;
    fromJSON(object: any): GetUserAccountByLoginRequest;
    toJSON(message: GetUserAccountByLoginRequest): unknown;
    fromPartial<I extends {
        login?: string | undefined;
    } & {
        login?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "login">, never>>(object: I): GetUserAccountByLoginRequest;
};
/** A set of methods for managing YandexPassportUserAccount resources. */
export declare const YandexPassportUserAccountServiceService: {
    /** Returns the specified YandexPassportUserAccount resource. */
    readonly getByLogin: {
        readonly path: "/yandex.cloud.iam.v1.YandexPassportUserAccountService/GetByLogin";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserAccountByLoginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserAccountByLoginRequest;
        readonly responseSerialize: (value: UserAccount) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAccount;
    };
};
export interface YandexPassportUserAccountServiceServer extends UntypedServiceImplementation {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin: handleUnaryCall<GetUserAccountByLoginRequest, UserAccount>;
}
export interface YandexPassportUserAccountServiceClient extends Client {
    /** Returns the specified YandexPassportUserAccount resource. */
    getByLogin(request: GetUserAccountByLoginRequest, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    getByLogin(request: GetUserAccountByLoginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    getByLogin(request: GetUserAccountByLoginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
}
export declare const YandexPassportUserAccountServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): YandexPassportUserAccountServiceClient;
    service: typeof YandexPassportUserAccountServiceService;
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
