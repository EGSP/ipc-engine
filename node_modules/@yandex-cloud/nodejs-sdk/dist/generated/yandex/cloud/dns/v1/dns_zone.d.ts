import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.dns.v1";
/** A DNS zone. For details about the concept, see [DNS zones](/docs/dns/concepts/dns-zone). */
export interface DnsZone {
    $type: "yandex.cloud.dns.v1.DnsZone";
    /** ID of the DNS zone. Generated at creation time. */
    id: string;
    /** ID of the folder that the DNS zone belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the DNS zone.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the DNS zone. */
    description: string;
    /** DNS zone labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** DNS zone suffix. */
    zone: string;
    /**
     * Privately visible zone settings.
     * Specifies whether records within the zone are visible from a VPC networks only.
     */
    privateVisibility?: PrivateVisibility;
    /**
     * Publicly visible zone settings.
     * Indicates whether records within the zone are publicly visible.
     */
    publicVisibility?: PublicVisibility;
}
export interface DnsZone_LabelsEntry {
    $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry";
    key: string;
    value: string;
}
/** A record set. For details about the concept, see [Resource record](/docs/dns/concepts/resource-record). */
export interface RecordSet {
    $type: "yandex.cloud.dns.v1.RecordSet";
    /** Domain name. */
    name: string;
    /** Record type. */
    type: string;
    /** Time to live in seconds. */
    ttl: number;
    /** Data of the record set. */
    data: string[];
}
/** Configuration for privately visible zones. */
export interface PrivateVisibility {
    $type: "yandex.cloud.dns.v1.PrivateVisibility";
    /** Network IDs. */
    networkIds: string[];
}
/** Configuration for publicly visible zones. */
export interface PublicVisibility {
    $type: "yandex.cloud.dns.v1.PublicVisibility";
}
export declare const DnsZone: {
    $type: "yandex.cloud.dns.v1.DnsZone";
    encode(message: DnsZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsZone;
    fromJSON(object: any): DnsZone;
    toJSON(message: DnsZone): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zone?: string | undefined;
        privateVisibility?: {
            networkIds?: string[] | undefined;
        } | undefined;
        publicVisibility?: {} | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        zone?: string | undefined;
        privateVisibility?: ({
            networkIds?: string[] | undefined;
        } & {
            networkIds?: (string[] & string[] & Record<Exclude<keyof I["privateVisibility"]["networkIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["privateVisibility"], "$type" | "networkIds">, never>) | undefined;
        publicVisibility?: ({} & {} & Record<Exclude<keyof I["publicVisibility"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "zone" | "privateVisibility" | "publicVisibility">, never>>(object: I): DnsZone;
};
export declare const DnsZone_LabelsEntry: {
    $type: "yandex.cloud.dns.v1.DnsZone.LabelsEntry";
    encode(message: DnsZone_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsZone_LabelsEntry;
    fromJSON(object: any): DnsZone_LabelsEntry;
    toJSON(message: DnsZone_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): DnsZone_LabelsEntry;
};
export declare const RecordSet: {
    $type: "yandex.cloud.dns.v1.RecordSet";
    encode(message: RecordSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecordSet;
    fromJSON(object: any): RecordSet;
    toJSON(message: RecordSet): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        name?: string | undefined;
        data?: string[] | undefined;
        ttl?: number | undefined;
    } & {
        type?: string | undefined;
        name?: string | undefined;
        data?: (string[] & string[] & Record<Exclude<keyof I["data"], "$type" | keyof string[]>, never>) | undefined;
        ttl?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "data" | "ttl">, never>>(object: I): RecordSet;
};
export declare const PrivateVisibility: {
    $type: "yandex.cloud.dns.v1.PrivateVisibility";
    encode(message: PrivateVisibility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrivateVisibility;
    fromJSON(object: any): PrivateVisibility;
    toJSON(message: PrivateVisibility): unknown;
    fromPartial<I extends {
        networkIds?: string[] | undefined;
    } & {
        networkIds?: (string[] & string[] & Record<Exclude<keyof I["networkIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "networkIds">, never>>(object: I): PrivateVisibility;
};
export declare const PublicVisibility: {
    $type: "yandex.cloud.dns.v1.PublicVisibility";
    encode(_: PublicVisibility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PublicVisibility;
    fromJSON(_: any): PublicVisibility;
    toJSON(_: PublicVisibility): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): PublicVisibility;
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
