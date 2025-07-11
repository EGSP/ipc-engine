import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** Provider side statuses of Raw logs processing. */
export declare enum RawLogsStatus {
    RAW_LOGS_STATUS_UNSPECIFIED = 0,
    /** RAW_LOGS_STATUS_NOT_ACTIVATED - Raw logs wasn't activated. */
    RAW_LOGS_STATUS_NOT_ACTIVATED = 1,
    /** RAW_LOGS_STATUS_OK - Raw logs was activated, and logs storing process works as expected. */
    RAW_LOGS_STATUS_OK = 2,
    /** RAW_LOGS_STATUS_FAILED - Raw logs was activated, but CDN provider has been failed to store logs. */
    RAW_LOGS_STATUS_FAILED = 3,
    /** RAW_LOGS_STATUS_PENDING - Raw logs was activated, but logs storing process is expected. */
    RAW_LOGS_STATUS_PENDING = 4,
    UNRECOGNIZED = -1
}
export declare function rawLogsStatusFromJSON(object: any): RawLogsStatus;
export declare function rawLogsStatusToJSON(object: RawLogsStatus): string;
/** User settings for Raw logs. */
export interface RawLogsSettings {
    $type: "yandex.cloud.cdn.v1.RawLogsSettings";
    /** Destination S3 bucket name, note that the suer should be owner of the bucket. */
    bucketName: string;
    /** Bucket region, unused for now, could be blank. */
    bucketRegion: string;
    /**
     * file_prefix: prefix each log object name with specified prefix.
     *
     * The prefix makes it simpler for you to locate the log objects.
     * For example, if you specify the prefix value logs/, each log object that
     * S3 creates begins with the logs/ prefix in its key, so pseudo S3 folders
     * could be setup.
     */
    filePrefix: string;
}
export declare const RawLogsSettings: {
    $type: "yandex.cloud.cdn.v1.RawLogsSettings";
    encode(message: RawLogsSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RawLogsSettings;
    fromJSON(object: any): RawLogsSettings;
    toJSON(message: RawLogsSettings): unknown;
    fromPartial<I extends {
        bucketName?: string | undefined;
        bucketRegion?: string | undefined;
        filePrefix?: string | undefined;
    } & {
        bucketName?: string | undefined;
        bucketRegion?: string | undefined;
        filePrefix?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "bucketName" | "bucketRegion" | "filePrefix">, never>>(object: I): RawLogsSettings;
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
