/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UserAccount } from "../../../../yandex/cloud/iam/v1/user_account";
export declare const protobufPackage = "yandex.cloud.iam.v1";
export interface GetUserAccountRequest {
    $type: "yandex.cloud.iam.v1.GetUserAccountRequest";
    /** ID of the UserAccount resource to return. */
    userAccountId: string;
}
export declare const GetUserAccountRequest: {
    $type: "yandex.cloud.iam.v1.GetUserAccountRequest";
    encode(message: GetUserAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserAccountRequest;
    fromJSON(object: any): GetUserAccountRequest;
    toJSON(message: GetUserAccountRequest): unknown;
    fromPartial<I extends {
        userAccountId?: string | undefined;
    } & {
        userAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "userAccountId">, never>>(object: I): GetUserAccountRequest;
};
/** A set of methods for managing user accounts. Currently applicable only for [Yandex accounts](/docs/iam/concepts/#passport). */
export declare const UserAccountServiceService: {
    /** Returns the specified UserAccount resource. */
    readonly get: {
        readonly path: "/yandex.cloud.iam.v1.UserAccountService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserAccountRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserAccountRequest;
        readonly responseSerialize: (value: UserAccount) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserAccount;
    };
};
export interface UserAccountServiceServer extends UntypedServiceImplementation {
    /** Returns the specified UserAccount resource. */
    get: handleUnaryCall<GetUserAccountRequest, UserAccount>;
}
export interface UserAccountServiceClient extends Client {
    /** Returns the specified UserAccount resource. */
    get(request: GetUserAccountRequest, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    get(request: GetUserAccountRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
    get(request: GetUserAccountRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserAccount) => void): ClientUnaryCall;
}
export declare const UserAccountServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): UserAccountServiceClient;
    service: typeof UserAccountServiceService;
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
