import _m0 from "protobufjs/minimal";
import { Origin } from "../../../../yandex/cloud/cdn/v1/origin";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** Origin group parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins#groups). */
export interface OriginGroup {
    $type: "yandex.cloud.cdn.v1.OriginGroup";
    /** ID of the origin group. Generated at creation time. */
    id: number;
    /** ID of the folder that the origin group belongs to. */
    folderId: string;
    /** Name of the origin group. */
    name: string;
    /**
     * This option have two possible conditions:
     * true - the option is active. In case the origin responds with 4XX or 5XX codes,
     *        use the next origin from the list.
     * false - the option is disabled.
     */
    useNext: boolean;
    /** List of origins. */
    origins: Origin[];
}
export declare const OriginGroup: {
    $type: "yandex.cloud.cdn.v1.OriginGroup";
    encode(message: OriginGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginGroup;
    fromJSON(object: any): OriginGroup;
    toJSON(message: OriginGroup): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        useNext?: boolean | undefined;
        origins?: {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        useNext?: boolean | undefined;
        origins?: ({
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: ({
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } & {
                bucket?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["bucket"], "$type" | "name">, never>) | undefined;
                common?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["common"], "$type" | "name">, never>) | undefined;
                website?: ({
                    name?: string | undefined;
                } & {
                    name?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["website"], "$type" | "name">, never>) | undefined;
                balancer?: ({
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I["origins"][number]["meta"]["balancer"], "$type" | "id">, never>) | undefined;
            } & Record<Exclude<keyof I["origins"][number]["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
        } & Record<Exclude<keyof I["origins"][number], "$type" | "id" | "enabled" | "originGroupId" | "source" | "backup" | "meta">, never>)[] & Record<Exclude<keyof I["origins"], "$type" | keyof {
            id?: number | undefined;
            enabled?: boolean | undefined;
            originGroupId?: number | undefined;
            source?: string | undefined;
            backup?: boolean | undefined;
            meta?: {
                bucket?: {
                    name?: string | undefined;
                } | undefined;
                common?: {
                    name?: string | undefined;
                } | undefined;
                website?: {
                    name?: string | undefined;
                } | undefined;
                balancer?: {
                    id?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "folderId" | "useNext" | "origins">, never>>(object: I): OriginGroup;
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
