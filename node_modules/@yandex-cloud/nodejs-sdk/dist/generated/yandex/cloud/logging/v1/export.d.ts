import _m0 from "protobufjs/minimal";
import { LogLevel_Level } from "../../../../yandex/cloud/logging/v1/log_entry";
export declare const protobufPackage = "yandex.cloud.logging.v1";
export interface ExportParams {
    $type: "yandex.cloud.logging.v1.ExportParams";
    resourceTypes: string[];
    resourceIds: string[];
    streamNames: string[];
    levels: LogLevel_Level[];
    filter: string;
}
export declare const ExportParams: {
    $type: "yandex.cloud.logging.v1.ExportParams";
    encode(message: ExportParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExportParams;
    fromJSON(object: any): ExportParams;
    toJSON(message: ExportParams): unknown;
    fromPartial<I extends {
        filter?: string | undefined;
        resourceTypes?: string[] | undefined;
        resourceIds?: string[] | undefined;
        streamNames?: string[] | undefined;
        levels?: LogLevel_Level[] | undefined;
    } & {
        filter?: string | undefined;
        resourceTypes?: (string[] & string[] & Record<Exclude<keyof I["resourceTypes"], "$type" | keyof string[]>, never>) | undefined;
        resourceIds?: (string[] & string[] & Record<Exclude<keyof I["resourceIds"], "$type" | keyof string[]>, never>) | undefined;
        streamNames?: (string[] & string[] & Record<Exclude<keyof I["streamNames"], "$type" | keyof string[]>, never>) | undefined;
        levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "resourceTypes" | "resourceIds" | "streamNames" | "levels">, never>>(object: I): ExportParams;
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
