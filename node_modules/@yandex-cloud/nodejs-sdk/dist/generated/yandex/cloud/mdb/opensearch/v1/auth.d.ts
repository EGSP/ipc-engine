/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1";
export interface AuthSettings {
    $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings";
    /** SAML settings */
    saml?: SAMLSettings;
}
export interface SAMLSettings {
    $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings";
    enabled: boolean;
    /** Required. The entity ID of your IdP. */
    idpEntityId: string;
    /** Required. The SAML 2.0 metadata file of your IdP. */
    idpMetadataFile: Buffer;
    /** Required. The entity ID of the service provider. */
    spEntityId: string;
    /** Required. The OpenSearch Dashboards base URL. */
    dashboardsUrl: string;
    /** Optional. The attribute in the SAML response where the roles are stored. If not configured, no roles are used. */
    rolesKey: string;
    /** Optional. The attribute in the SAML response where the subject is stored. If not configured, the NameID attribute is used. */
    subjectKey: string;
}
export declare const AuthSettings: {
    $type: "yandex.cloud.mdb.opensearch.v1.AuthSettings";
    encode(message: AuthSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthSettings;
    fromJSON(object: any): AuthSettings;
    toJSON(message: AuthSettings): unknown;
    fromPartial<I extends {
        saml?: {
            enabled?: boolean | undefined;
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            dashboardsUrl?: string | undefined;
            rolesKey?: string | undefined;
            subjectKey?: string | undefined;
        } | undefined;
    } & {
        saml?: ({
            enabled?: boolean | undefined;
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            dashboardsUrl?: string | undefined;
            rolesKey?: string | undefined;
            subjectKey?: string | undefined;
        } & {
            enabled?: boolean | undefined;
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            dashboardsUrl?: string | undefined;
            rolesKey?: string | undefined;
            subjectKey?: string | undefined;
        } & Record<Exclude<keyof I["saml"], "$type" | "enabled" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "dashboardsUrl" | "rolesKey" | "subjectKey">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "saml">, never>>(object: I): AuthSettings;
};
export declare const SAMLSettings: {
    $type: "yandex.cloud.mdb.opensearch.v1.SAMLSettings";
    encode(message: SAMLSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SAMLSettings;
    fromJSON(object: any): SAMLSettings;
    toJSON(message: SAMLSettings): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        idpEntityId?: string | undefined;
        idpMetadataFile?: Buffer | undefined;
        spEntityId?: string | undefined;
        dashboardsUrl?: string | undefined;
        rolesKey?: string | undefined;
        subjectKey?: string | undefined;
    } & {
        enabled?: boolean | undefined;
        idpEntityId?: string | undefined;
        idpMetadataFile?: Buffer | undefined;
        spEntityId?: string | undefined;
        dashboardsUrl?: string | undefined;
        rolesKey?: string | undefined;
        subjectKey?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "dashboardsUrl" | "rolesKey" | "subjectKey">, never>>(object: I): SAMLSettings;
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
