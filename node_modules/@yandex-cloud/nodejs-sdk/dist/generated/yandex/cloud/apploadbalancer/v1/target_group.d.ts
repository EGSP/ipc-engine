import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.apploadbalancer.v1";
/**
 * A target group resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface TargetGroup {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup";
    /** ID of the target group. Generated at creation time. */
    id: string;
    /** Name of the target group. The name is unique within the folder. */
    name: string;
    /** Description of the target group. */
    description: string;
    /** ID of the folder that the target group belongs to. */
    folderId: string;
    /**
     * Target group labels as `key:value` pairs.
     * For details about the concept, see [documentation](/docs/overview/concepts/services#labels).
     */
    labels: {
        [key: string]: string;
    };
    /** List of targets in the target group. */
    targets: Target[];
    /** Creation timestamp. */
    createdAt?: Date;
}
export interface TargetGroup_LabelsEntry {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry";
    key: string;
    value: string;
}
/**
 * A target resource.
 * For details about the concept, see [documentation](/docs/application-load-balancer/concepts/target-group).
 */
export interface Target {
    $type: "yandex.cloud.apploadbalancer.v1.Target";
    /** IP address of the target. */
    ipAddress: string | undefined;
    /** ID of the subnet that the target is connected to. */
    subnetId: string;
    /**
     * If set, will not require `subnet_id` to validate the target.
     * Instead, the address should belong to one of the following ranges:
     * 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
     * Only one of `subnet_id` or `private_ipv4_address` should be set.
     */
    privateIpv4Address: boolean;
}
export declare const TargetGroup: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup";
    encode(message: TargetGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup;
    fromJSON(object: any): TargetGroup;
    toJSON(message: TargetGroup): unknown;
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
        targets?: {
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        }[] | undefined;
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
        targets?: ({
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        }[] & ({
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        } & {
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        } & Record<Exclude<keyof I["targets"][number], "$type" | "ipAddress" | "subnetId" | "privateIpv4Address">, never>)[] & Record<Exclude<keyof I["targets"], "$type" | keyof {
            ipAddress?: string | undefined;
            subnetId?: string | undefined;
            privateIpv4Address?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "targets">, never>>(object: I): TargetGroup;
};
export declare const TargetGroup_LabelsEntry: {
    $type: "yandex.cloud.apploadbalancer.v1.TargetGroup.LabelsEntry";
    encode(message: TargetGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup_LabelsEntry;
    fromJSON(object: any): TargetGroup_LabelsEntry;
    toJSON(message: TargetGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): TargetGroup_LabelsEntry;
};
export declare const Target: {
    $type: "yandex.cloud.apploadbalancer.v1.Target";
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial<I extends {
        ipAddress?: string | undefined;
        subnetId?: string | undefined;
        privateIpv4Address?: boolean | undefined;
    } & {
        ipAddress?: string | undefined;
        subnetId?: string | undefined;
        privateIpv4Address?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "ipAddress" | "subnetId" | "privateIpv4Address">, never>>(object: I): Target;
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
