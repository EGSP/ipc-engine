import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.organizationmanager.v1";
/** Currently represents only [Yandex account](/docs/iam/concepts/#passport). */
export interface UserAccount {
    $type: "yandex.cloud.organizationmanager.v1.UserAccount";
    /** ID of the user account. */
    id: string;
    /** A YandexPassportUserAccount resource. */
    yandexPassportUserAccount?: YandexPassportUserAccount | undefined;
    /** A SAML federated user. */
    samlUserAccount?: SamlUserAccount | undefined;
}
/**
 * A YandexPassportUserAccount resource.
 * For more information, see [Yandex account](/docs/iam/concepts/#passport).
 */
export interface YandexPassportUserAccount {
    $type: "yandex.cloud.organizationmanager.v1.YandexPassportUserAccount";
    /** Login of the Yandex user account. */
    login: string;
    /** Default email of the Yandex user account. */
    defaultEmail: string;
}
/**
 * A SAML federated user.
 * For more information, see [federations](/docs/iam/concepts/users/saml-federations).
 */
export interface SamlUserAccount {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount";
    /** ID of the federation that the federation belongs to. */
    federationId: string;
    /**
     * Name Id of the SAML federated user.
     * The name is unique within the federation. 1-256 characters long.
     */
    nameId: string;
    /** Additional attributes of the SAML federated user. */
    attributes: {
        [key: string]: SamlUserAccount_Attribute;
    };
}
export interface SamlUserAccount_Attribute {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute";
    value: string[];
}
export interface SamlUserAccount_AttributesEntry {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry";
    key: string;
    value?: SamlUserAccount_Attribute;
}
export declare const UserAccount: {
    $type: "yandex.cloud.organizationmanager.v1.UserAccount";
    encode(message: UserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserAccount;
    fromJSON(object: any): UserAccount;
    toJSON(message: UserAccount): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        yandexPassportUserAccount?: {
            login?: string | undefined;
            defaultEmail?: string | undefined;
        } | undefined;
        samlUserAccount?: {
            attributes?: {
                [x: string]: {
                    value?: string[] | undefined;
                } | undefined;
                [x: number]: {
                    value?: string[] | undefined;
                } | undefined;
            } | undefined;
            federationId?: string | undefined;
            nameId?: string | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        yandexPassportUserAccount?: ({
            login?: string | undefined;
            defaultEmail?: string | undefined;
        } & {
            login?: string | undefined;
            defaultEmail?: string | undefined;
        } & Record<Exclude<keyof I["yandexPassportUserAccount"], "$type" | "login" | "defaultEmail">, never>) | undefined;
        samlUserAccount?: ({
            attributes?: {
                [x: string]: {
                    value?: string[] | undefined;
                } | undefined;
                [x: number]: {
                    value?: string[] | undefined;
                } | undefined;
            } | undefined;
            federationId?: string | undefined;
            nameId?: string | undefined;
        } & {
            attributes?: ({
                [x: string]: {
                    value?: string[] | undefined;
                } | undefined;
                [x: number]: {
                    value?: string[] | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    value?: string[] | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["samlUserAccount"]["attributes"][string]["value"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["samlUserAccount"]["attributes"][string], "$type" | "value">, never>) | undefined;
                [x: number]: ({
                    value?: string[] | undefined;
                } & {
                    value?: (string[] & string[] & Record<Exclude<keyof I["samlUserAccount"]["attributes"][number]["value"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["samlUserAccount"]["attributes"][number], "$type" | "value">, never>) | undefined;
            } & Record<Exclude<keyof I["samlUserAccount"]["attributes"], string | number>, never>) | undefined;
            federationId?: string | undefined;
            nameId?: string | undefined;
        } & Record<Exclude<keyof I["samlUserAccount"], "$type" | "attributes" | "federationId" | "nameId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "yandexPassportUserAccount" | "samlUserAccount">, never>>(object: I): UserAccount;
};
export declare const YandexPassportUserAccount: {
    $type: "yandex.cloud.organizationmanager.v1.YandexPassportUserAccount";
    encode(message: YandexPassportUserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): YandexPassportUserAccount;
    fromJSON(object: any): YandexPassportUserAccount;
    toJSON(message: YandexPassportUserAccount): unknown;
    fromPartial<I extends {
        login?: string | undefined;
        defaultEmail?: string | undefined;
    } & {
        login?: string | undefined;
        defaultEmail?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "login" | "defaultEmail">, never>>(object: I): YandexPassportUserAccount;
};
export declare const SamlUserAccount: {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount";
    encode(message: SamlUserAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount;
    fromJSON(object: any): SamlUserAccount;
    toJSON(message: SamlUserAccount): unknown;
    fromPartial<I extends {
        attributes?: {
            [x: string]: {
                value?: string[] | undefined;
            } | undefined;
            [x: number]: {
                value?: string[] | undefined;
            } | undefined;
        } | undefined;
        federationId?: string | undefined;
        nameId?: string | undefined;
    } & {
        attributes?: ({
            [x: string]: {
                value?: string[] | undefined;
            } | undefined;
            [x: number]: {
                value?: string[] | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                value?: string[] | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["attributes"][string]["value"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["attributes"][string], "$type" | "value">, never>) | undefined;
            [x: number]: ({
                value?: string[] | undefined;
            } & {
                value?: (string[] & string[] & Record<Exclude<keyof I["attributes"][number]["value"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["attributes"][number], "$type" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["attributes"], string | number>, never>) | undefined;
        federationId?: string | undefined;
        nameId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "attributes" | "federationId" | "nameId">, never>>(object: I): SamlUserAccount;
};
export declare const SamlUserAccount_Attribute: {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.Attribute";
    encode(message: SamlUserAccount_Attribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount_Attribute;
    fromJSON(object: any): SamlUserAccount_Attribute;
    toJSON(message: SamlUserAccount_Attribute): unknown;
    fromPartial<I extends {
        value?: string[] | undefined;
    } & {
        value?: (string[] & string[] & Record<Exclude<keyof I["value"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "value">, never>>(object: I): SamlUserAccount_Attribute;
};
export declare const SamlUserAccount_AttributesEntry: {
    $type: "yandex.cloud.organizationmanager.v1.SamlUserAccount.AttributesEntry";
    encode(message: SamlUserAccount_AttributesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SamlUserAccount_AttributesEntry;
    fromJSON(object: any): SamlUserAccount_AttributesEntry;
    toJSON(message: SamlUserAccount_AttributesEntry): unknown;
    fromPartial<I extends {
        value?: {
            value?: string[] | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            value?: string[] | undefined;
        } & {
            value?: (string[] & string[] & Record<Exclude<keyof I["value"]["value"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "value">, never>) | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SamlUserAccount_AttributesEntry;
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
