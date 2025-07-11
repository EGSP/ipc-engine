import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.cdn.v1";
/** An origin. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface Origin {
    $type: "yandex.cloud.cdn.v1.Origin";
    /** ID of the origin. */
    id: number;
    /** ID of the parent origin group. */
    originGroupId: number;
    /**
     * IP address or Domain name of your origin and the port (if custom).
     * Used if [meta] variant is `common`.
     */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origin.
     * False - The origin is disabled and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * Specifies whether the origin is used in its origin group as backup.
     * A backup origin is used when one of active origins becomes unavailable.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta?: OriginMeta;
}
/** Origin parameters. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginParams {
    $type: "yandex.cloud.cdn.v1.OriginParams";
    /** Source: IP address or Domain name of your origin and the port (if custom). */
    source: string;
    /**
     * The setting allows to enable or disable an Origin source in the Origins group.
     *
     * It has two possible values:
     *
     * True - The origin is enabled and used as a source for the CDN. An origins
     * group must contain at least one enabled origins. False - The origin is disabled
     * and the CDN is not using it to pull content.
     */
    enabled: boolean;
    /**
     * backup option has two possible values:
     *
     *   True - The option is active. The origin will not be used until one of
     *          active origins become unavailable.
     *   False - The option is disabled.
     */
    backup: boolean;
    /** Set up origin of the content. */
    meta?: OriginMeta;
}
/** Origin type. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginMeta {
    $type: "yandex.cloud.cdn.v1.OriginMeta";
    /** A server with a domain name linked to it */
    common?: OriginNamedMeta | undefined;
    /** An Object Storage bucket not configured as a static site hosting. */
    bucket?: OriginNamedMeta | undefined;
    /** An Object Storage bucket configured as a static site hosting. */
    website?: OriginNamedMeta | undefined;
    /**
     * An L7 load balancer from Application Load Balancer.
     * CDN servers will access the load balancer at one of its IP addresses that must be selected in the origin settings.
     */
    balancer?: OriginBalancerMeta | undefined;
}
/** Origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginNamedMeta {
    $type: "yandex.cloud.cdn.v1.OriginNamedMeta";
    /** Name of the origin. */
    name: string;
}
/** Application Load Balancer origin info. For details about the concept, see [documentation](/docs/cdn/concepts/origins). */
export interface OriginBalancerMeta {
    $type: "yandex.cloud.cdn.v1.OriginBalancerMeta";
    /** ID of the origin. */
    id: string;
}
export declare const Origin: {
    $type: "yandex.cloud.cdn.v1.Origin";
    encode(message: Origin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Origin;
    fromJSON(object: any): Origin;
    toJSON(message: Origin): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["meta"]["bucket"], "$type" | "name">, never>) | undefined;
            common?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["common"], "$type" | "name">, never>) | undefined;
            website?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["website"], "$type" | "name">, never>) | undefined;
            balancer?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["balancer"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "enabled" | "originGroupId" | "source" | "backup" | "meta">, never>>(object: I): Origin;
};
export declare const OriginParams: {
    $type: "yandex.cloud.cdn.v1.OriginParams";
    encode(message: OriginParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginParams;
    fromJSON(object: any): OriginParams;
    toJSON(message: OriginParams): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
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
        enabled?: boolean | undefined;
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
            } & Record<Exclude<keyof I["meta"]["bucket"], "$type" | "name">, never>) | undefined;
            common?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["common"], "$type" | "name">, never>) | undefined;
            website?: ({
                name?: string | undefined;
            } & {
                name?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["website"], "$type" | "name">, never>) | undefined;
            balancer?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & Record<Exclude<keyof I["meta"]["balancer"], "$type" | "id">, never>) | undefined;
        } & Record<Exclude<keyof I["meta"], "$type" | "bucket" | "common" | "website" | "balancer">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "source" | "backup" | "meta">, never>>(object: I): OriginParams;
};
export declare const OriginMeta: {
    $type: "yandex.cloud.cdn.v1.OriginMeta";
    encode(message: OriginMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginMeta;
    fromJSON(object: any): OriginMeta;
    toJSON(message: OriginMeta): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["bucket"], "$type" | "name">, never>) | undefined;
        common?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["common"], "$type" | "name">, never>) | undefined;
        website?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["website"], "$type" | "name">, never>) | undefined;
        balancer?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & Record<Exclude<keyof I["balancer"], "$type" | "id">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "bucket" | "common" | "website" | "balancer">, never>>(object: I): OriginMeta;
};
export declare const OriginNamedMeta: {
    $type: "yandex.cloud.cdn.v1.OriginNamedMeta";
    encode(message: OriginNamedMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginNamedMeta;
    fromJSON(object: any): OriginNamedMeta;
    toJSON(message: OriginNamedMeta): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name">, never>>(object: I): OriginNamedMeta;
};
export declare const OriginBalancerMeta: {
    $type: "yandex.cloud.cdn.v1.OriginBalancerMeta";
    encode(message: OriginBalancerMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OriginBalancerMeta;
    fromJSON(object: any): OriginBalancerMeta;
    toJSON(message: OriginBalancerMeta): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): OriginBalancerMeta;
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
