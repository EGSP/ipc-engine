import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { LogLevel_Level } from "../../../../../yandex/cloud/logging/v1/log_entry";
export declare const protobufPackage = "yandex.cloud.serverless.containers.v1";
export interface Container {
    $type: "yandex.cloud.serverless.containers.v1.Container";
    /** ID of the container. Generated at creation time. */
    id: string;
    /** ID of the folder that the container belongs to. */
    folderId: string;
    /** Creation timestamp for the container. */
    createdAt?: Date;
    /** Name of the container. The name is unique within the folder. */
    name: string;
    /** Description of the container. */
    description: string;
    /** Container labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** URL that needs to be requested to call the container. */
    url: string;
    /** Status of the container. */
    status: Container_Status;
}
export declare enum Container_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Container is being created. */
    CREATING = 1,
    /** ACTIVE - Container is ready for use. */
    ACTIVE = 2,
    /** DELETING - Container is being deleted. */
    DELETING = 3,
    /** ERROR - Container failed. The only allowed action is delete. */
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function container_StatusFromJSON(object: any): Container_Status;
export declare function container_StatusToJSON(object: Container_Status): string;
export interface Container_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
    key: string;
    value: string;
}
export interface Revision {
    $type: "yandex.cloud.serverless.containers.v1.Revision";
    /** ID of the revision. */
    id: string;
    /** ID of the container that the revision belongs to. */
    containerId: string;
    /** Description of the revision. */
    description: string;
    /** Creation timestamp for the revision. */
    createdAt?: Date;
    /** Image configuration for the revision. */
    image?: Image;
    /** Resources allocated to the revision. */
    resources?: Resources;
    /**
     * Timeout for the execution of the revision.
     *
     * If the timeout is exceeded, Serverless Containers responds with a 504 HTTP code.
     */
    executionTimeout?: Duration;
    /** The number of concurrent requests allowed per container instance. */
    concurrency: number;
    /** ID of the service account associated with the revision. */
    serviceAccountId: string;
    /** Status of the revision. */
    status: Revision_Status;
    /** Yandex Lockbox secrets to be used by the revision. */
    secrets: Secret[];
    /** Network access. If specified the revision will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
    /**
     * Policy for provisioning instances of the revision.
     *
     * The policy is only applied when the revision is ACTIVE.
     */
    provisionPolicy?: ProvisionPolicy;
    /** Policy for scaling instances of the revision. */
    scalingPolicy?: ScalingPolicy;
    /** Options for logging from the container. */
    logOptions?: LogOptions;
    /** S3 mounts to be used by the version. */
    storageMounts: StorageMount[];
}
export declare enum Revision_Status {
    STATUS_UNSPECIFIED = 0,
    /** CREATING - Revision is being created. */
    CREATING = 1,
    /** ACTIVE - Revision is currently used by the container. */
    ACTIVE = 2,
    /** OBSOLETE - Revision is not used by the container. May be deleted later. */
    OBSOLETE = 3,
    UNRECOGNIZED = -1
}
export declare function revision_StatusFromJSON(object: any): Revision_Status;
export declare function revision_StatusToJSON(object: Revision_Status): string;
/** Revision image specification. */
export interface Image {
    $type: "yandex.cloud.serverless.containers.v1.Image";
    /** Image URL, that is used by the revision. */
    imageUrl: string;
    /** Digest of the image. Calculated at creation time. */
    imageDigest: string;
    /** Override for the image's ENTRYPOINT. */
    command?: Command;
    /** Override for the image's CMD. */
    args?: Args;
    /** Additional environment for the container. */
    environment: {
        [key: string]: string;
    };
    /** Override for the image's WORKDIR. */
    workingDir: string;
}
export interface Image_EnvironmentEntry {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
    key: string;
    value: string;
}
export interface Command {
    $type: "yandex.cloud.serverless.containers.v1.Command";
    /**
     * Command that will override ENTRYPOINT of an image.
     *
     * Commands will be executed as is. The runtime will not substitute environment
     * variables or execute shell commands. If one wants to do that, they should
     * invoke shell interpreter with an appropriate shell script.
     */
    command: string[];
}
export interface Args {
    $type: "yandex.cloud.serverless.containers.v1.Args";
    /**
     * Arguments that will override CMD of an image.
     *
     * Arguments will be passed as is. The runtime will not substitute environment
     * variables or execute shell commands. If one wants to do that, they should
     * invoke shell interpreter with an appropriate shell script.
     */
    args: string[];
}
/** Resources allocated to a revision. */
export interface Resources {
    $type: "yandex.cloud.serverless.containers.v1.Resources";
    /** Amount of memory available to the revision, specified in bytes, multiple of 128MB. */
    memory: number;
    /** Number of cores available to the revision. */
    cores: number;
    /**
     * Specifies baseline performance for a core in percent, multiple of 5%.
     * Should be 100% for cores > 1.
     */
    coreFraction: number;
}
export interface ProvisionPolicy {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy";
    /**
     * Minimum number of guaranteed provisioned container instances for all zones
     * in total.
     */
    minInstances: number;
}
/** Secret that is available to the container at run time. */
export interface Secret {
    $type: "yandex.cloud.serverless.containers.v1.Secret";
    /** ID of Yandex Lockbox secret. */
    id: string;
    /** ID of Yandex Lockbox secret. */
    versionId: string;
    /** Key in secret's payload, which value to be delivered into container environment. */
    key: string;
    /** Environment variable in which secret's value is delivered. */
    environmentVariable: string | undefined;
}
/** Revision connectivity specification. */
export interface Connectivity {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity";
    /** Network the revision will have access to. */
    networkId: string;
    /**
     * The list of subnets (from the same network) the revision can be attached to.
     *
     * Deprecated, it is sufficient to specify only network_id, without the list of subnet_ids.
     */
    subnetIds: string[];
}
export interface LogOptions {
    $type: "yandex.cloud.serverless.containers.v1.LogOptions";
    /** Is logging from container disabled. */
    disabled: boolean;
    /** Entry should be written to log group resolved by ID. */
    logGroupId: string | undefined;
    /** Entry should be written to default log group for specified folder. */
    folderId: string | undefined;
    /**
     * Minimum log entry level.
     *
     * See [LogLevel.Level] for details.
     */
    minLevel: LogLevel_Level;
}
export interface ScalingPolicy {
    $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy";
    /**
     * Upper limit for instance count in each zone.
     * 0 means no limit.
     */
    zoneInstancesLimit: number;
    /**
     * Upper limit of requests count in each zone.
     * 0 means no limit.
     */
    zoneRequestsLimit: number;
}
export interface StorageMount {
    $type: "yandex.cloud.serverless.containers.v1.StorageMount";
    /** S3 bucket name for mounting. */
    bucketId: string;
    /** S3 bucket prefix for mounting. */
    prefix: string;
    /** Is mount read only. */
    readOnly: boolean;
    /** Mount point path inside the container for mounting. */
    mountPointPath: string;
}
export declare const Container: {
    $type: "yandex.cloud.serverless.containers.v1.Container";
    encode(message: Container, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container;
    fromJSON(object: any): Container;
    toJSON(message: Container): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Container_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        url?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Container_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "url">, never>>(object: I): Container;
};
export declare const Container_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
    encode(message: Container_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container_LabelsEntry;
    fromJSON(object: any): Container_LabelsEntry;
    toJSON(message: Container_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Container_LabelsEntry;
};
export declare const Revision: {
    $type: "yandex.cloud.serverless.containers.v1.Revision";
    encode(message: Revision, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Revision;
    fromJSON(object: any): Revision;
    toJSON(message: Revision): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Revision_Status | undefined;
        image?: {
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            imageDigest?: string | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } | undefined;
        logOptions?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: LogLevel_Level | undefined;
        } | undefined;
        resources?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } | undefined;
        serviceAccountId?: string | undefined;
        secrets?: {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] | undefined;
        connectivity?: {
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        provisionPolicy?: {
            minInstances?: number | undefined;
        } | undefined;
        scalingPolicy?: {
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } | undefined;
        storageMounts?: {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Revision_Status | undefined;
        image?: ({
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            imageDigest?: string | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } & {
            imageUrl?: string | undefined;
            args?: ({
                args?: string[] | undefined;
            } & {
                args?: (string[] & string[] & Record<Exclude<keyof I["image"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["image"]["args"], "$type" | "args">, never>) | undefined;
            environment?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["image"]["environment"], string | number>, never>) | undefined;
            imageDigest?: string | undefined;
            command?: ({
                command?: string[] | undefined;
            } & {
                command?: (string[] & string[] & Record<Exclude<keyof I["image"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["image"]["command"], "$type" | "command">, never>) | undefined;
            workingDir?: string | undefined;
        } & Record<Exclude<keyof I["image"], "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>) | undefined;
        logOptions?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: LogLevel_Level | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: LogLevel_Level | undefined;
        } & Record<Exclude<keyof I["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
        resources?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "memory" | "cores" | "coreFraction">, never>) | undefined;
        serviceAccountId?: string | undefined;
        secrets?: ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] & ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & Record<Exclude<keyof I["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["secrets"], "$type" | keyof {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[]>, never>) | undefined;
        connectivity?: ({
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } & {
            networkId?: string | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "networkId" | "subnetIds">, never>) | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        provisionPolicy?: ({
            minInstances?: number | undefined;
        } & {
            minInstances?: number | undefined;
        } & Record<Exclude<keyof I["provisionPolicy"], "$type" | "minInstances">, never>) | undefined;
        scalingPolicy?: ({
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } & {
            zoneInstancesLimit?: number | undefined;
            zoneRequestsLimit?: number | undefined;
        } & Record<Exclude<keyof I["scalingPolicy"], "$type" | "zoneInstancesLimit" | "zoneRequestsLimit">, never>) | undefined;
        storageMounts?: ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[] & ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        } & {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        } & Record<Exclude<keyof I["storageMounts"][number], "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointPath">, never>)[] & Record<Exclude<keyof I["storageMounts"], "$type" | keyof {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            readOnly?: boolean | undefined;
            mountPointPath?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "status" | "image" | "logOptions" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy" | "scalingPolicy" | "storageMounts">, never>>(object: I): Revision;
};
export declare const Image: {
    $type: "yandex.cloud.serverless.containers.v1.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial<I extends {
        imageUrl?: string | undefined;
        args?: {
            args?: string[] | undefined;
        } | undefined;
        environment?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        imageDigest?: string | undefined;
        command?: {
            command?: string[] | undefined;
        } | undefined;
        workingDir?: string | undefined;
    } & {
        imageUrl?: string | undefined;
        args?: ({
            args?: string[] | undefined;
        } & {
            args?: (string[] & string[] & Record<Exclude<keyof I["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["args"], "$type" | "args">, never>) | undefined;
        environment?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["environment"], string | number>, never>) | undefined;
        imageDigest?: string | undefined;
        command?: ({
            command?: string[] | undefined;
        } & {
            command?: (string[] & string[] & Record<Exclude<keyof I["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["command"], "$type" | "command">, never>) | undefined;
        workingDir?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>>(object: I): Image;
};
export declare const Image_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
    encode(message: Image_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image_EnvironmentEntry;
    fromJSON(object: any): Image_EnvironmentEntry;
    toJSON(message: Image_EnvironmentEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Image_EnvironmentEntry;
};
export declare const Command: {
    $type: "yandex.cloud.serverless.containers.v1.Command";
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    fromPartial<I extends {
        command?: string[] | undefined;
    } & {
        command?: (string[] & string[] & Record<Exclude<keyof I["command"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "command">, never>>(object: I): Command;
};
export declare const Args: {
    $type: "yandex.cloud.serverless.containers.v1.Args";
    encode(message: Args, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Args;
    fromJSON(object: any): Args;
    toJSON(message: Args): unknown;
    fromPartial<I extends {
        args?: string[] | undefined;
    } & {
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "args">, never>>(object: I): Args;
};
export declare const Resources: {
    $type: "yandex.cloud.serverless.containers.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
    } & {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction">, never>>(object: I): Resources;
};
export declare const ProvisionPolicy: {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy";
    encode(message: ProvisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProvisionPolicy;
    fromJSON(object: any): ProvisionPolicy;
    toJSON(message: ProvisionPolicy): unknown;
    fromPartial<I extends {
        minInstances?: number | undefined;
    } & {
        minInstances?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "minInstances">, never>>(object: I): ProvisionPolicy;
};
export declare const Secret: {
    $type: "yandex.cloud.serverless.containers.v1.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        key?: string | undefined;
        versionId?: string | undefined;
        environmentVariable?: string | undefined;
    } & {
        id?: string | undefined;
        key?: string | undefined;
        versionId?: string | undefined;
        environmentVariable?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>>(object: I): Secret;
};
export declare const Connectivity: {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity";
    encode(message: Connectivity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connectivity;
    fromJSON(object: any): Connectivity;
    toJSON(message: Connectivity): unknown;
    fromPartial<I extends {
        networkId?: string | undefined;
        subnetIds?: string[] | undefined;
    } & {
        networkId?: string | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "networkId" | "subnetIds">, never>>(object: I): Connectivity;
};
export declare const LogOptions: {
    $type: "yandex.cloud.serverless.containers.v1.LogOptions";
    encode(message: LogOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogOptions;
    fromJSON(object: any): LogOptions;
    toJSON(message: LogOptions): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        logGroupId?: string | undefined;
        disabled?: boolean | undefined;
        minLevel?: LogLevel_Level | undefined;
    } & {
        folderId?: string | undefined;
        logGroupId?: string | undefined;
        disabled?: boolean | undefined;
        minLevel?: LogLevel_Level | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>>(object: I): LogOptions;
};
export declare const ScalingPolicy: {
    $type: "yandex.cloud.serverless.containers.v1.ScalingPolicy";
    encode(message: ScalingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScalingPolicy;
    fromJSON(object: any): ScalingPolicy;
    toJSON(message: ScalingPolicy): unknown;
    fromPartial<I extends {
        zoneInstancesLimit?: number | undefined;
        zoneRequestsLimit?: number | undefined;
    } & {
        zoneInstancesLimit?: number | undefined;
        zoneRequestsLimit?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "zoneInstancesLimit" | "zoneRequestsLimit">, never>>(object: I): ScalingPolicy;
};
export declare const StorageMount: {
    $type: "yandex.cloud.serverless.containers.v1.StorageMount";
    encode(message: StorageMount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StorageMount;
    fromJSON(object: any): StorageMount;
    toJSON(message: StorageMount): unknown;
    fromPartial<I extends {
        prefix?: string | undefined;
        bucketId?: string | undefined;
        readOnly?: boolean | undefined;
        mountPointPath?: string | undefined;
    } & {
        prefix?: string | undefined;
        bucketId?: string | undefined;
        readOnly?: boolean | undefined;
        mountPointPath?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "prefix" | "bucketId" | "readOnly" | "mountPointPath">, never>>(object: I): StorageMount;
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
