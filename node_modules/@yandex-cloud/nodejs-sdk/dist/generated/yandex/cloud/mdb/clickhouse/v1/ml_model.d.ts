import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.clickhouse.v1";
export declare enum MlModelType {
    ML_MODEL_TYPE_UNSPECIFIED = 0,
    /** ML_MODEL_TYPE_CATBOOST - CatBoost model. */
    ML_MODEL_TYPE_CATBOOST = 1,
    UNRECOGNIZED = -1
}
export declare function mlModelTypeFromJSON(object: any): MlModelType;
export declare function mlModelTypeToJSON(object: MlModelType): string;
export interface MlModel {
    $type: "yandex.cloud.mdb.clickhouse.v1.MlModel";
    /** Name of the the model. */
    name: string;
    /** ID of the ClickHouse cluster that the model belongs to. */
    clusterId: string;
    /** Type of the model. */
    type: MlModelType;
    /** Model file URL. You can only use models stored in Object Storage. */
    uri: string;
}
export declare const MlModel: {
    $type: "yandex.cloud.mdb.clickhouse.v1.MlModel";
    encode(message: MlModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MlModel;
    fromJSON(object: any): MlModel;
    toJSON(message: MlModel): unknown;
    fromPartial<I extends {
        type?: MlModelType | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clusterId?: string | undefined;
    } & {
        type?: MlModelType | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "uri" | "clusterId">, never>>(object: I): MlModel;
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
