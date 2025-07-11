import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface ScanPolicy {
    $type: "yandex.cloud.containerregistry.v1.ScanPolicy";
    /** Output only. ID of the scan policy. */
    id: string;
    /**
     * ID of the registry that the scan policy belongs to.
     * Required. The maximum string length in characters is 50.
     */
    registryId: string;
    /** Name of the scan policy. */
    name: string;
    /**
     * Description of the scan policy.
     * The maximum string length in characters is 256.
     */
    description: string;
    /** The rules of scan policy. */
    rules?: ScanRules;
    /** Output only. Creation timestamp. */
    createdAt?: Date;
    /** Turns off scan policy. */
    disabled: boolean;
}
export interface ScanRules {
    $type: "yandex.cloud.containerregistry.v1.ScanRules";
    /** Description of on-push scan rule. */
    pushRule?: PushRule;
    /** Description of time based rescan rule. */
    scheduleRules: ScheduledRule[];
}
export interface PushRule {
    $type: "yandex.cloud.containerregistry.v1.PushRule";
    /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
    repositoryPrefixes: string[];
    /** Turns off scan rule. */
    disabled: boolean;
}
export interface ScheduledRule {
    $type: "yandex.cloud.containerregistry.v1.ScheduledRule";
    /** List of repositories that are scanned with rule. Child repositories are included into parent node. "*" - means all repositories in registry */
    repositoryPrefixes: string[];
    /** Period of time since last scan to trigger automatic rescan. */
    rescanPeriod?: Duration;
    /** Turns off scan rule. */
    disabled: boolean;
}
export declare const ScanPolicy: {
    $type: "yandex.cloud.containerregistry.v1.ScanPolicy";
    encode(message: ScanPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScanPolicy;
    fromJSON(object: any): ScanPolicy;
    toJSON(message: ScanPolicy): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        rules?: {
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        registryId?: string | undefined;
        disabled?: boolean | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        rules?: ({
            pushRule?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } | undefined;
            scheduleRules?: {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            pushRule?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["pushRule"]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["pushRule"], "$type" | "disabled" | "repositoryPrefixes">, never>) | undefined;
            scheduleRules?: ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] & ({
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                disabled?: boolean | undefined;
                repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
                rescanPeriod?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["rules"]["scheduleRules"][number]["rescanPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["rules"]["scheduleRules"][number], "$type" | "disabled" | "repositoryPrefixes" | "rescanPeriod">, never>)[] & Record<Exclude<keyof I["rules"]["scheduleRules"], "$type" | keyof {
                disabled?: boolean | undefined;
                repositoryPrefixes?: string[] | undefined;
                rescanPeriod?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["rules"], "$type" | "pushRule" | "scheduleRules">, never>) | undefined;
        registryId?: string | undefined;
        disabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "rules" | "registryId" | "disabled">, never>>(object: I): ScanPolicy;
};
export declare const ScanRules: {
    $type: "yandex.cloud.containerregistry.v1.ScanRules";
    encode(message: ScanRules, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScanRules;
    fromJSON(object: any): ScanRules;
    toJSON(message: ScanRules): unknown;
    fromPartial<I extends {
        pushRule?: {
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
        } | undefined;
        scheduleRules?: {
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
            rescanPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        pushRule?: ({
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
        } & {
            disabled?: boolean | undefined;
            repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["pushRule"]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pushRule"], "$type" | "disabled" | "repositoryPrefixes">, never>) | undefined;
        scheduleRules?: ({
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
            rescanPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
            rescanPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            disabled?: boolean | undefined;
            repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["scheduleRules"][number]["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
            rescanPeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["scheduleRules"][number]["rescanPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["scheduleRules"][number], "$type" | "disabled" | "repositoryPrefixes" | "rescanPeriod">, never>)[] & Record<Exclude<keyof I["scheduleRules"], "$type" | keyof {
            disabled?: boolean | undefined;
            repositoryPrefixes?: string[] | undefined;
            rescanPeriod?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "pushRule" | "scheduleRules">, never>>(object: I): ScanRules;
};
export declare const PushRule: {
    $type: "yandex.cloud.containerregistry.v1.PushRule";
    encode(message: PushRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PushRule;
    fromJSON(object: any): PushRule;
    toJSON(message: PushRule): unknown;
    fromPartial<I extends {
        disabled?: boolean | undefined;
        repositoryPrefixes?: string[] | undefined;
    } & {
        disabled?: boolean | undefined;
        repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "disabled" | "repositoryPrefixes">, never>>(object: I): PushRule;
};
export declare const ScheduledRule: {
    $type: "yandex.cloud.containerregistry.v1.ScheduledRule";
    encode(message: ScheduledRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScheduledRule;
    fromJSON(object: any): ScheduledRule;
    toJSON(message: ScheduledRule): unknown;
    fromPartial<I extends {
        disabled?: boolean | undefined;
        repositoryPrefixes?: string[] | undefined;
        rescanPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        disabled?: boolean | undefined;
        repositoryPrefixes?: (string[] & string[] & Record<Exclude<keyof I["repositoryPrefixes"], "$type" | keyof string[]>, never>) | undefined;
        rescanPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["rescanPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "disabled" | "repositoryPrefixes" | "rescanPeriod">, never>>(object: I): ScheduledRule;
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
