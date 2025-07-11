import _m0 from "protobufjs/minimal";
import { Template } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/template";
import { Lock } from "../../../../../yandex/cloud/marketplace/licensemanager/v1/lock";
export declare const protobufPackage = "yandex.cloud.marketplace.licensemanager.v1";
export interface Instance {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Instance";
    id: string;
    cloudId: string;
    folderId: string;
    templateId: string;
    templateVersionId: string;
    description: string;
    startTime?: Date;
    endTime?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    state: Instance_State;
    locks: Lock[];
    licenseTemplate?: Template;
}
export declare enum Instance_State {
    STATE_UNSPECIFIED = 0,
    PENDING = 1,
    ACTIVE = 2,
    CANCELLED = 3,
    EXPIRED = 4,
    DEPRECATED = 5,
    DELETED = 6,
    UNRECOGNIZED = -1
}
export declare function instance_StateFromJSON(object: any): Instance_State;
export declare function instance_StateToJSON(object: Instance_State): string;
export declare const Instance: {
    $type: "yandex.cloud.marketplace.licensemanager.v1.Instance";
    encode(message: Instance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance;
    fromJSON(object: any): Instance;
    toJSON(message: Instance): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        updatedAt?: Date | undefined;
        cloudId?: string | undefined;
        state?: Instance_State | undefined;
        templateId?: string | undefined;
        templateVersionId?: string | undefined;
        locks?: {
            id?: string | undefined;
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            instanceId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock").Lock_State | undefined;
        }[] | undefined;
        licenseTemplate?: {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            versionId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/template").Template_State | undefined;
            publisherId?: string | undefined;
            productId?: string | undefined;
            tariffId?: string | undefined;
            licenseSkuId?: string | undefined;
            period?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        updatedAt?: Date | undefined;
        cloudId?: string | undefined;
        state?: Instance_State | undefined;
        templateId?: string | undefined;
        templateVersionId?: string | undefined;
        locks?: ({
            id?: string | undefined;
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            instanceId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock").Lock_State | undefined;
        }[] & ({
            id?: string | undefined;
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            instanceId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock").Lock_State | undefined;
        } & {
            id?: string | undefined;
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            instanceId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock").Lock_State | undefined;
        } & Record<Exclude<keyof I["locks"][number], "$type" | "id" | "resourceId" | "createdAt" | "startTime" | "endTime" | "updatedAt" | "instanceId" | "state">, never>)[] & Record<Exclude<keyof I["locks"], "$type" | keyof {
            id?: string | undefined;
            resourceId?: string | undefined;
            createdAt?: Date | undefined;
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            updatedAt?: Date | undefined;
            instanceId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/lock").Lock_State | undefined;
        }[]>, never>) | undefined;
        licenseTemplate?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            versionId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/template").Template_State | undefined;
            publisherId?: string | undefined;
            productId?: string | undefined;
            tariffId?: string | undefined;
            licenseSkuId?: string | undefined;
            period?: string | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            versionId?: string | undefined;
            state?: import("../../../../../yandex/cloud/marketplace/licensemanager/v1/template").Template_State | undefined;
            publisherId?: string | undefined;
            productId?: string | undefined;
            tariffId?: string | undefined;
            licenseSkuId?: string | undefined;
            period?: string | undefined;
        } & Record<Exclude<keyof I["licenseTemplate"], "$type" | "id" | "name" | "createdAt" | "updatedAt" | "versionId" | "state" | "publisherId" | "productId" | "tariffId" | "licenseSkuId" | "period">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "startTime" | "endTime" | "updatedAt" | "cloudId" | "state" | "templateId" | "templateVersionId" | "locks" | "licenseTemplate">, never>>(object: I): Instance;
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
