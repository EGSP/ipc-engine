import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    IPV4 = 1,
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
/** A Subnet resource. For more information, see [Subnets](/docs/vpc/concepts/network#subnet). */
export interface Subnet {
    $type: "yandex.cloud.vpc.v1.Subnet";
    /** ID of the subnet. */
    id: string;
    /** ID of the folder that the subnet belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Name of the subnet. The name is unique within the project. 3-63 characters long. */
    name: string;
    /** Optional description of the subnet. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the subnet belongs to. */
    networkId: string;
    /** ID of the availability zone where the subnet resides. */
    zoneId: string;
    /**
     * CIDR block.
     * The range of internal addresses that are defined for this subnet.
     * This field can be set only at Subnet resource creation time and cannot be changed.
     * For example, 10.0.0.0/22 or 192.168.0.0/24.
     * Minimum subnet size is /28, maximum subnet size is /16.
     */
    v4CidrBlocks: string[];
    /** IPv6 not available yet. */
    v6CidrBlocks: string[];
    /** ID of route table the subnet is linked to. */
    routeTableId: string;
    dhcpOptions?: DhcpOptions;
}
export interface Subnet_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry";
    key: string;
    value: string;
}
export interface DhcpOptions {
    $type: "yandex.cloud.vpc.v1.DhcpOptions";
    domainNameServers: string[];
    domainName: string;
    ntpServers: string[];
}
export declare const Subnet: {
    $type: "yandex.cloud.vpc.v1.Subnet";
    encode(message: Subnet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subnet;
    fromJSON(object: any): Subnet;
    toJSON(message: Subnet): unknown;
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
        networkId?: string | undefined;
        zoneId?: string | undefined;
        v4CidrBlocks?: string[] | undefined;
        v6CidrBlocks?: string[] | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: {
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } | undefined;
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
        networkId?: string | undefined;
        zoneId?: string | undefined;
        v4CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["v4CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
        v6CidrBlocks?: (string[] & string[] & Record<Exclude<keyof I["v6CidrBlocks"], "$type" | keyof string[]>, never>) | undefined;
        routeTableId?: string | undefined;
        dhcpOptions?: ({
            domainName?: string | undefined;
            domainNameServers?: string[] | undefined;
            ntpServers?: string[] | undefined;
        } & {
            domainName?: string | undefined;
            domainNameServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["domainNameServers"], "$type" | keyof string[]>, never>) | undefined;
            ntpServers?: (string[] & string[] & Record<Exclude<keyof I["dhcpOptions"]["ntpServers"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["dhcpOptions"], "$type" | "domainName" | "domainNameServers" | "ntpServers">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "networkId" | "zoneId" | "v4CidrBlocks" | "v6CidrBlocks" | "routeTableId" | "dhcpOptions">, never>>(object: I): Subnet;
};
export declare const Subnet_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.Subnet.LabelsEntry";
    encode(message: Subnet_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subnet_LabelsEntry;
    fromJSON(object: any): Subnet_LabelsEntry;
    toJSON(message: Subnet_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Subnet_LabelsEntry;
};
export declare const DhcpOptions: {
    $type: "yandex.cloud.vpc.v1.DhcpOptions";
    encode(message: DhcpOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DhcpOptions;
    fromJSON(object: any): DhcpOptions;
    toJSON(message: DhcpOptions): unknown;
    fromPartial<I extends {
        domainName?: string | undefined;
        domainNameServers?: string[] | undefined;
        ntpServers?: string[] | undefined;
    } & {
        domainName?: string | undefined;
        domainNameServers?: (string[] & string[] & Record<Exclude<keyof I["domainNameServers"], "$type" | keyof string[]>, never>) | undefined;
        ntpServers?: (string[] & string[] & Record<Exclude<keyof I["ntpServers"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "domainName" | "domainNameServers" | "ntpServers">, never>>(object: I): DhcpOptions;
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
