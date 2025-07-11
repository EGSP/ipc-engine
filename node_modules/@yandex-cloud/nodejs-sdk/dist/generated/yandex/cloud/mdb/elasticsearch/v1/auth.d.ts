/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface AuthProviders {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders";
    providers: AuthProvider[];
}
export interface AuthProvider {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider";
    type: AuthProvider_Type;
    name: string;
    order: number;
    enabled: boolean;
    /** selector ui settings */
    hidden: boolean;
    description: string;
    hint: string;
    icon: string;
    saml?: SamlSettings | undefined;
}
export declare enum AuthProvider_Type {
    TYPE_UNSPECIFIED = 0,
    NATIVE = 1,
    /**
     * SAML - OPENID = 3;
     * ANONYMOUS = 4;
     */
    SAML = 2,
    UNRECOGNIZED = -1
}
export declare function authProvider_TypeFromJSON(object: any): AuthProvider_Type;
export declare function authProvider_TypeToJSON(object: AuthProvider_Type): string;
export interface SamlSettings {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings";
    idpEntityId: string;
    idpMetadataFile: Buffer;
    spEntityId: string;
    kibanaUrl: string;
    attributePrincipal: string;
    attributeGroups: string;
    attributeName: string;
    attributeEmail: string;
    attributeDn: string;
}
export declare const AuthProviders: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProviders";
    encode(message: AuthProviders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthProviders;
    fromJSON(object: any): AuthProviders;
    toJSON(message: AuthProviders): unknown;
    fromPartial<I extends {
        providers?: {
            description?: string | undefined;
            type?: AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        providers?: ({
            description?: string | undefined;
            type?: AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            type?: AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            type?: AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: ({
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } & Record<Exclude<keyof I["providers"][number]["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
        } & Record<Exclude<keyof I["providers"][number], "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>)[] & Record<Exclude<keyof I["providers"], "$type" | keyof {
            description?: string | undefined;
            type?: AuthProvider_Type | undefined;
            name?: string | undefined;
            enabled?: boolean | undefined;
            order?: number | undefined;
            hidden?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            saml?: {
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                kibanaUrl?: string | undefined;
                attributePrincipal?: string | undefined;
                attributeGroups?: string | undefined;
                attributeName?: string | undefined;
                attributeEmail?: string | undefined;
                attributeDn?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "providers">, never>>(object: I): AuthProviders;
};
export declare const AuthProvider: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AuthProvider";
    encode(message: AuthProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthProvider;
    fromJSON(object: any): AuthProvider;
    toJSON(message: AuthProvider): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        type?: AuthProvider_Type | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        order?: number | undefined;
        hidden?: boolean | undefined;
        hint?: string | undefined;
        icon?: string | undefined;
        saml?: {
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            kibanaUrl?: string | undefined;
            attributePrincipal?: string | undefined;
            attributeGroups?: string | undefined;
            attributeName?: string | undefined;
            attributeEmail?: string | undefined;
            attributeDn?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        type?: AuthProvider_Type | undefined;
        name?: string | undefined;
        enabled?: boolean | undefined;
        order?: number | undefined;
        hidden?: boolean | undefined;
        hint?: string | undefined;
        icon?: string | undefined;
        saml?: ({
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            kibanaUrl?: string | undefined;
            attributePrincipal?: string | undefined;
            attributeGroups?: string | undefined;
            attributeName?: string | undefined;
            attributeEmail?: string | undefined;
            attributeDn?: string | undefined;
        } & {
            idpEntityId?: string | undefined;
            idpMetadataFile?: Buffer | undefined;
            spEntityId?: string | undefined;
            kibanaUrl?: string | undefined;
            attributePrincipal?: string | undefined;
            attributeGroups?: string | undefined;
            attributeName?: string | undefined;
            attributeEmail?: string | undefined;
            attributeDn?: string | undefined;
        } & Record<Exclude<keyof I["saml"], "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "type" | "name" | "enabled" | "order" | "hidden" | "hint" | "icon" | "saml">, never>>(object: I): AuthProvider;
};
export declare const SamlSettings: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.SamlSettings";
    encode(message: SamlSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlSettings;
    fromJSON(object: any): SamlSettings;
    toJSON(message: SamlSettings): unknown;
    fromPartial<I extends {
        idpEntityId?: string | undefined;
        idpMetadataFile?: Buffer | undefined;
        spEntityId?: string | undefined;
        kibanaUrl?: string | undefined;
        attributePrincipal?: string | undefined;
        attributeGroups?: string | undefined;
        attributeName?: string | undefined;
        attributeEmail?: string | undefined;
        attributeDn?: string | undefined;
    } & {
        idpEntityId?: string | undefined;
        idpMetadataFile?: Buffer | undefined;
        spEntityId?: string | undefined;
        kibanaUrl?: string | undefined;
        attributePrincipal?: string | undefined;
        attributeGroups?: string | undefined;
        attributeName?: string | undefined;
        attributeEmail?: string | undefined;
        attributeDn?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "kibanaUrl" | "attributePrincipal" | "attributeGroups" | "attributeName" | "attributeEmail" | "attributeDn">, never>>(object: I): SamlSettings;
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
