import _m0 from "protobufjs/minimal";
import { Status } from "../../../../../../yandex/cloud/loadtesting/api/v1/agent/status";
export declare const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
export interface Agent {
    $type: "yandex.cloud.loadtesting.api.v1.agent.Agent";
    id: string;
    folderId: string;
    name: string;
    description: string;
    computeInstanceId: string;
    status: Status;
    errors: string[];
    currentJobId: string;
}
export declare const Agent: {
    $type: "yandex.cloud.loadtesting.api.v1.agent.Agent";
    encode(message: Agent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Agent;
    fromJSON(object: any): Agent;
    toJSON(message: Agent): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: Status | undefined;
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
        errors?: string[] | undefined;
        currentJobId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        status?: Status | undefined;
        folderId?: string | undefined;
        computeInstanceId?: string | undefined;
        errors?: (string[] & string[] & Record<Exclude<keyof I["errors"], "$type" | keyof string[]>, never>) | undefined;
        currentJobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "status" | "folderId" | "computeInstanceId" | "errors" | "currentJobId">, never>>(object: I): Agent;
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
