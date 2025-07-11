import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.vpc.v1";
/** A RouteTable resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface RouteTable {
    $type: "yandex.cloud.vpc.v1.RouteTable";
    /** ID of the route table. */
    id: string;
    /** ID of the folder that the route table belongs to. */
    folderId: string;
    /** Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /** Name of the route table. The name is unique within the project. 3-63 characters long. */
    name: string;
    /** Optional description of the route table. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the network the route table belongs to. */
    networkId: string;
    /** List of static routes. */
    staticRoutes: StaticRoute[];
}
export interface RouteTable_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry";
    key: string;
    value: string;
}
/** A StaticRoute resource. For more information, see [Static Routes](/docs/vpc/concepts/static-routes). */
export interface StaticRoute {
    $type: "yandex.cloud.vpc.v1.StaticRoute";
    /** Destination subnet in CIDR notation */
    destinationPrefix: string | undefined;
    /** Next hop IP address */
    nextHopAddress: string | undefined;
    /** Next hop gateway id */
    gatewayId: string | undefined;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
}
export interface StaticRoute_LabelsEntry {
    $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry";
    key: string;
    value: string;
}
export declare const RouteTable: {
    $type: "yandex.cloud.vpc.v1.RouteTable";
    encode(message: RouteTable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteTable;
    fromJSON(object: any): RouteTable;
    toJSON(message: RouteTable): unknown;
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
        staticRoutes?: {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
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
        networkId?: string | undefined;
        staticRoutes?: ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[] & ({
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & {
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["staticRoutes"][number]["labels"], string | number>, never>) | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        } & Record<Exclude<keyof I["staticRoutes"][number], "$type" | "labels" | "gatewayId" | "destinationPrefix" | "nextHopAddress">, never>)[] & Record<Exclude<keyof I["staticRoutes"], "$type" | keyof {
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            gatewayId?: string | undefined;
            destinationPrefix?: string | undefined;
            nextHopAddress?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "networkId" | "staticRoutes">, never>>(object: I): RouteTable;
};
export declare const RouteTable_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.RouteTable.LabelsEntry";
    encode(message: RouteTable_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteTable_LabelsEntry;
    fromJSON(object: any): RouteTable_LabelsEntry;
    toJSON(message: RouteTable_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): RouteTable_LabelsEntry;
};
export declare const StaticRoute: {
    $type: "yandex.cloud.vpc.v1.StaticRoute";
    encode(message: StaticRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StaticRoute;
    fromJSON(object: any): StaticRoute;
    toJSON(message: StaticRoute): unknown;
    fromPartial<I extends {
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        gatewayId?: string | undefined;
        destinationPrefix?: string | undefined;
        nextHopAddress?: string | undefined;
    } & {
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        gatewayId?: string | undefined;
        destinationPrefix?: string | undefined;
        nextHopAddress?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "labels" | "gatewayId" | "destinationPrefix" | "nextHopAddress">, never>>(object: I): StaticRoute;
};
export declare const StaticRoute_LabelsEntry: {
    $type: "yandex.cloud.vpc.v1.StaticRoute.LabelsEntry";
    encode(message: StaticRoute_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StaticRoute_LabelsEntry;
    fromJSON(object: any): StaticRoute_LabelsEntry;
    toJSON(message: StaticRoute_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): StaticRoute_LabelsEntry;
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
