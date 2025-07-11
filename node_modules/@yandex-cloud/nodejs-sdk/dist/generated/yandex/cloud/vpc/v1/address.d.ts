import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** An Address resource. For more information, see [Address](/docs/vpc/concepts/address). */
export interface Address {
    $type: "yandex.cloud.vpc.v1.Address";
    /** ID of the address. Generated at creation time. */
    id: string;
    /** ID of the folder that the address belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the address.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the address. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    externalIpv4Address?: ExternalIpv4Address | undefined;
    /** Specifies if address is reserved or not. */
    reserved: boolean;
    /** Specifies if address is used or not. */
    used: boolean;
    /** Type of the IP address. */
    type: Address_Type;
    /** Vervion of the IP address. */
    ipVersion: Address_IpVersion;
    /** Specifies if address protected from deletion. */
    deletionProtection: boolean;
}
export declare enum Address_Type {
    TYPE_UNSPECIFIED = 0,
    /** INTERNAL - Internal IP address. */
    INTERNAL = 1,
    /** EXTERNAL - Public IP address. */
    EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare function address_TypeFromJSON(object: any): Address_Type;
export declare function address_TypeToJSON(object: Address_Type): string;
export declare enum Address_IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function address_IpVersionFromJSON(object: any): Address_IpVersion;
export declare function address_IpVersionToJSON(object: Address_IpVersion): string;
export interface Address_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.Address.LabelsEntry";
    key: string;
    value: string;
}
export interface ExternalIpv4Address {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4Address";
    /** Value of address. */
    address: string;
    /** Availability zone from which the address will be allocated. */
    zoneId: string;
    /** Parameters of the allocated address, for example DDoS Protection. */
    requirements?: AddressRequirements;
}
export interface AddressRequirements {
    $type: "yandex.cloud.vpc.v1.AddressRequirements";
    /** DDoS protection provider ID. */
    ddosProtectionProvider: string;
    /** Capability to send SMTP traffic. */
    outgoingSmtpCapability: string;
}
export declare const Address: {
    $type: "yandex.cloud.vpc.v1.Address";
    encode(message: Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address;
    fromJSON(object: any): Address;
    toJSON(message: Address): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        type?: Address_Type | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        externalIpv4Address?: {
            zoneId?: string | undefined;
            address?: string | undefined;
            requirements?: {
                ddosProtectionProvider?: string | undefined;
                outgoingSmtpCapability?: string | undefined;
            } | undefined;
        } | undefined;
        deletionProtection?: boolean | undefined;
        ipVersion?: Address_IpVersion | undefined;
        used?: boolean | undefined;
        reserved?: boolean | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        type?: Address_Type | undefined;
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
        externalIpv4Address?: ({
            zoneId?: string | undefined;
            address?: string | undefined;
            requirements?: {
                ddosProtectionProvider?: string | undefined;
                outgoingSmtpCapability?: string | undefined;
            } | undefined;
        } & {
            zoneId?: string | undefined;
            address?: string | undefined;
            requirements?: ({
                ddosProtectionProvider?: string | undefined;
                outgoingSmtpCapability?: string | undefined;
            } & {
                ddosProtectionProvider?: string | undefined;
                outgoingSmtpCapability?: string | undefined;
            } & Record<Exclude<keyof I["externalIpv4Address"]["requirements"], "$type" | "ddosProtectionProvider" | "outgoingSmtpCapability">, never>) | undefined;
        } & Record<Exclude<keyof I["externalIpv4Address"], "$type" | "zoneId" | "address" | "requirements">, never>) | undefined;
        deletionProtection?: boolean | undefined;
        ipVersion?: Address_IpVersion | undefined;
        used?: boolean | undefined;
        reserved?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "type" | "name" | "createdAt" | "folderId" | "labels" | "externalIpv4Address" | "deletionProtection" | "ipVersion" | "used" | "reserved">, never>>(object: I): Address;
};
export declare const Address_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Address.LabelsEntry";
    encode(message: Address_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Address_LabelsEntry;
    fromJSON(object: any): Address_LabelsEntry;
    toJSON(message: Address_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Address_LabelsEntry;
};
export declare const ExternalIpv4Address: {
    $type: "yandex.cloud.vpc.v1.ExternalIpv4Address";
    encode(message: ExternalIpv4Address, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalIpv4Address;
    fromJSON(object: any): ExternalIpv4Address;
    toJSON(message: ExternalIpv4Address): unknown;
    fromPartial<I extends {
        zoneId?: string | undefined;
        address?: string | undefined;
        requirements?: {
            ddosProtectionProvider?: string | undefined;
            outgoingSmtpCapability?: string | undefined;
        } | undefined;
    } & {
        zoneId?: string | undefined;
        address?: string | undefined;
        requirements?: ({
            ddosProtectionProvider?: string | undefined;
            outgoingSmtpCapability?: string | undefined;
        } & {
            ddosProtectionProvider?: string | undefined;
            outgoingSmtpCapability?: string | undefined;
        } & Record<Exclude<keyof I["requirements"], "$type" | "ddosProtectionProvider" | "outgoingSmtpCapability">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneId" | "address" | "requirements">, never>>(object: I): ExternalIpv4Address;
};
export declare const AddressRequirements: {
    $type: "yandex.cloud.vpc.v1.AddressRequirements";
    encode(message: AddressRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddressRequirements;
    fromJSON(object: any): AddressRequirements;
    toJSON(message: AddressRequirements): unknown;
    fromPartial<I extends {
        ddosProtectionProvider?: string | undefined;
        outgoingSmtpCapability?: string | undefined;
    } & {
        ddosProtectionProvider?: string | undefined;
        outgoingSmtpCapability?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "ddosProtectionProvider" | "outgoingSmtpCapability">, never>>(object: I): AddressRequirements;
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
