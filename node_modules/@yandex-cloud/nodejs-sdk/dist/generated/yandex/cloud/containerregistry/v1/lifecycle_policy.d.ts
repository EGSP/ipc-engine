import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface LifecyclePolicy {
    $type: "yandex.cloud.containerregistry.v1.LifecyclePolicy";
    /** ID of the lifecycle policy. */
    id: string;
    /** Name of the lifecycle policy. */
    name: string;
    /**
     * ID of the repository that the lifecycle policy belongs to.
     * Required. The maximum string length in characters is 50.
     */
    repositoryId: string;
    /**
     * Description of the lifecycle policy.
     * The maximum string length in characters is 256.
     */
    description: string;
    /** Status of lifecycle policy. */
    status: LifecyclePolicy_Status;
    /** Creation timestamp. */
    createdAt?: Date;
    /** The rules of lifecycle policy. */
    rules: LifecycleRule[];
}
export declare enum LifecyclePolicy_Status {
    STATUS_UNSPECIFIED = 0,
    /** ACTIVE - Policy is active and regularly deletes Docker images according to the established rules. */
    ACTIVE = 1,
    /**
     * DISABLED - Policy is disabled and does not delete Docker images in the repository.
     * Policies in this status can be used for preparing and testing rules.
     */
    DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function lifecyclePolicy_StatusFromJSON(object: any): LifecyclePolicy_Status;
export declare function lifecyclePolicy_StatusToJSON(object: LifecyclePolicy_Status): string;
export interface LifecycleRule {
    $type: "yandex.cloud.containerregistry.v1.LifecycleRule";
    /** Description of the lifecycle policy rule. */
    description: string;
    /**
     * Period of time for automatic deletion.
     * Period must be a multiple of 24 hours.
     */
    expirePeriod?: Duration;
    /** Tag for specifying a filter in the form of a regular expression. */
    tagRegexp: string;
    /** Tag for applying the rule to Docker images without tags. */
    untagged: boolean;
    /** Number of Docker images (falling under the specified filter by tags) that must be left, even if the expire_period has already expired. */
    retainedTop: number;
}
export declare const LifecyclePolicy: {
    $type: "yandex.cloud.containerregistry.v1.LifecyclePolicy";
    encode(message: LifecyclePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecyclePolicy;
    fromJSON(object: any): LifecyclePolicy;
    toJSON(message: LifecyclePolicy): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LifecyclePolicy_Status | undefined;
        rules?: {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] | undefined;
        repositoryId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: LifecyclePolicy_Status | undefined;
        rules?: ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[] & ({
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & {
            description?: string | undefined;
            expirePeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["rules"][number]["expirePeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        } & Record<Exclude<keyof I["rules"][number], "$type" | "description" | "expirePeriod" | "tagRegexp" | "untagged" | "retainedTop">, never>)[] & Record<Exclude<keyof I["rules"], "$type" | keyof {
            description?: string | undefined;
            expirePeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            tagRegexp?: string | undefined;
            untagged?: boolean | undefined;
            retainedTop?: number | undefined;
        }[]>, never>) | undefined;
        repositoryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "rules" | "repositoryId">, never>>(object: I): LifecyclePolicy;
};
export declare const LifecycleRule: {
    $type: "yandex.cloud.containerregistry.v1.LifecycleRule";
    encode(message: LifecycleRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LifecycleRule;
    fromJSON(object: any): LifecycleRule;
    toJSON(message: LifecycleRule): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        expirePeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        tagRegexp?: string | undefined;
        untagged?: boolean | undefined;
        retainedTop?: number | undefined;
    } & {
        description?: string | undefined;
        expirePeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expirePeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        tagRegexp?: string | undefined;
        untagged?: boolean | undefined;
        retainedTop?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "expirePeriod" | "tagRegexp" | "untagged" | "retainedTop">, never>>(object: I): LifecycleRule;
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
