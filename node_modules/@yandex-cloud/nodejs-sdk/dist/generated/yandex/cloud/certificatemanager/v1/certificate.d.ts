import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.certificatemanager.v1";
/** Supported certificate types. */
export declare enum CertificateType {
    CERTIFICATE_TYPE_UNSPECIFIED = 0,
    /** IMPORTED - The certificate is imported by user. */
    IMPORTED = 1,
    /** MANAGED - The certificate is created by service. */
    MANAGED = 2,
    UNRECOGNIZED = -1
}
export declare function certificateTypeFromJSON(object: any): CertificateType;
export declare function certificateTypeToJSON(object: CertificateType): string;
/** Supported domain validation types. */
export declare enum ChallengeType {
    CHALLENGE_TYPE_UNSPECIFIED = 0,
    /** DNS - Domain validation type that using DNS-records. */
    DNS = 1,
    /** HTTP - Domain validation type that using HTTP-files. */
    HTTP = 2,
    UNRECOGNIZED = -1
}
export declare function challengeTypeFromJSON(object: any): ChallengeType;
export declare function challengeTypeToJSON(object: ChallengeType): string;
/** A certificate. For details about the concept, see [documentation](/docs/certificate-manager/concepts/). */
export interface Certificate {
    $type: "yandex.cloud.certificatemanager.v1.Certificate";
    /** ID of the certificate. Generated at creation time. */
    id: string;
    /** ID of the folder that the certificate belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the certificate.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the certificate. */
    description: string;
    /** Certificate labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Type of the certificate. */
    type: CertificateType;
    /** Fully qualified domain names of the certificate. */
    domains: string[];
    /** Status of the certificate. */
    status: Certificate_Status;
    /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the certificate authority that issued the certificate. */
    issuer: string;
    /** [Distinguished Name](https://tools.ietf.org/html/rfc1779) of the entity that is associated with the public key contained in the certificate. */
    subject: string;
    /** Serial number of the certificate. */
    serial: string;
    /** Time when the certificate is updated. */
    updatedAt?: Date;
    /** Time when the certificate is issued. */
    issuedAt?: Date;
    /** Time after which the certificate is not valid. */
    notAfter?: Date;
    /** Time before which the certificate is not valid. */
    notBefore?: Date;
    /** Domains validation challenges of the certificate. Used only for managed certificates. */
    challenges: Challenge[];
    /** Flag that protects deletion of the certificate */
    deletionProtection: boolean;
    /** Mark imported certificates without uploaded chain or with chain which not lead to root certificate */
    incompleteChain: boolean;
}
export declare enum Certificate_Status {
    STATUS_UNSPECIFIED = 0,
    /** VALIDATING - The certificate domains validation are required. Used only for managed certificates. */
    VALIDATING = 1,
    /** INVALID - The certificate issuance is failed. Used only for managed certificates. */
    INVALID = 2,
    /** ISSUED - The certificate is issued. */
    ISSUED = 3,
    /** REVOKED - The certificate is revoked. */
    REVOKED = 4,
    /** RENEWING - The certificate renewal is started. Used only for managed certificates. */
    RENEWING = 5,
    /** RENEWAL_FAILED - The certificate renewal is failed. Used only for managed certificates. */
    RENEWAL_FAILED = 6,
    UNRECOGNIZED = -1
}
export declare function certificate_StatusFromJSON(object: any): Certificate_Status;
export declare function certificate_StatusToJSON(object: Certificate_Status): string;
export interface Certificate_LabelsEntry {
    $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry";
    key: string;
    value: string;
}
/** Domain validation challenge. */
export interface Challenge {
    $type: "yandex.cloud.certificatemanager.v1.Challenge";
    /** Domain of the challenge. */
    domain: string;
    /** Type of the challenge. */
    type: ChallengeType;
    /** Time when the challenge is created. */
    createdAt?: Date;
    /** Time when the challenge is updated. */
    updatedAt?: Date;
    /** Status of the challenge. */
    status: Challenge_Status;
    /** Description of the challenge. */
    message: string;
    /** Error of the challenge. */
    error: string;
    /** DNS-record. */
    dnsChallenge?: Challenge_DnsRecord | undefined;
    /** HTTP-file. */
    httpChallenge?: Challenge_HttpFile | undefined;
}
export declare enum Challenge_Status {
    STATUS_UNSPECIFIED = 0,
    /** PENDING - The challenge is waiting to be completed. */
    PENDING = 1,
    /** PROCESSING - The challenge is awaiting approval from Let's Encrypt. */
    PROCESSING = 2,
    /** VALID - The challenge is complete. */
    VALID = 3,
    /** INVALID - The rights check for a specific domain failed or the one-week period allocated for the check expired. */
    INVALID = 4,
    UNRECOGNIZED = -1
}
export declare function challenge_StatusFromJSON(object: any): Challenge_Status;
export declare function challenge_StatusToJSON(object: Challenge_Status): string;
export interface Challenge_DnsRecord {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord";
    /** Name of the DNS record. */
    name: string;
    /** Type of the DNS-record. */
    type: string;
    /** Value of the DNS-record. */
    value: string;
}
export interface Challenge_HttpFile {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile";
    /** Location of the HTTP file. */
    url: string;
    /** Content of the HTTP file. */
    content: string;
}
/** A certificate version */
export interface Version {
    $type: "yandex.cloud.certificatemanager.v1.Version";
    /** ID of the version. */
    id: string;
    /** ID of the certificate that the version belongs to. */
    certificateId: string;
    /** Time when the version was created. */
    createdAt?: Date;
}
export declare const Certificate: {
    $type: "yandex.cloud.certificatemanager.v1.Certificate";
    encode(message: Certificate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate;
    fromJSON(object: any): Certificate;
    toJSON(message: Certificate): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        type?: CertificateType | undefined;
        subject?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Certificate_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        domains?: string[] | undefined;
        issuer?: string | undefined;
        serial?: string | undefined;
        deletionProtection?: boolean | undefined;
        incompleteChain?: boolean | undefined;
        issuedAt?: Date | undefined;
        notAfter?: Date | undefined;
        notBefore?: Date | undefined;
        challenges?: {
            type?: ChallengeType | undefined;
            message?: string | undefined;
            createdAt?: Date | undefined;
            error?: string | undefined;
            status?: Challenge_Status | undefined;
            updatedAt?: Date | undefined;
            domain?: string | undefined;
            dnsChallenge?: {
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            httpChallenge?: {
                content?: string | undefined;
                url?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        type?: CertificateType | undefined;
        subject?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Certificate_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updatedAt?: Date | undefined;
        domains?: (string[] & string[] & Record<Exclude<keyof I["domains"], "$type" | keyof string[]>, never>) | undefined;
        issuer?: string | undefined;
        serial?: string | undefined;
        deletionProtection?: boolean | undefined;
        incompleteChain?: boolean | undefined;
        issuedAt?: Date | undefined;
        notAfter?: Date | undefined;
        notBefore?: Date | undefined;
        challenges?: ({
            type?: ChallengeType | undefined;
            message?: string | undefined;
            createdAt?: Date | undefined;
            error?: string | undefined;
            status?: Challenge_Status | undefined;
            updatedAt?: Date | undefined;
            domain?: string | undefined;
            dnsChallenge?: {
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            httpChallenge?: {
                content?: string | undefined;
                url?: string | undefined;
            } | undefined;
        }[] & ({
            type?: ChallengeType | undefined;
            message?: string | undefined;
            createdAt?: Date | undefined;
            error?: string | undefined;
            status?: Challenge_Status | undefined;
            updatedAt?: Date | undefined;
            domain?: string | undefined;
            dnsChallenge?: {
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            httpChallenge?: {
                content?: string | undefined;
                url?: string | undefined;
            } | undefined;
        } & {
            type?: ChallengeType | undefined;
            message?: string | undefined;
            createdAt?: Date | undefined;
            error?: string | undefined;
            status?: Challenge_Status | undefined;
            updatedAt?: Date | undefined;
            domain?: string | undefined;
            dnsChallenge?: ({
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } & {
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["challenges"][number]["dnsChallenge"], "$type" | "type" | "name" | "value">, never>) | undefined;
            httpChallenge?: ({
                content?: string | undefined;
                url?: string | undefined;
            } & {
                content?: string | undefined;
                url?: string | undefined;
            } & Record<Exclude<keyof I["challenges"][number]["httpChallenge"], "$type" | "content" | "url">, never>) | undefined;
        } & Record<Exclude<keyof I["challenges"][number], "$type" | "type" | "message" | "createdAt" | "error" | "status" | "updatedAt" | "domain" | "dnsChallenge" | "httpChallenge">, never>)[] & Record<Exclude<keyof I["challenges"], "$type" | keyof {
            type?: ChallengeType | undefined;
            message?: string | undefined;
            createdAt?: Date | undefined;
            error?: string | undefined;
            status?: Challenge_Status | undefined;
            updatedAt?: Date | undefined;
            domain?: string | undefined;
            dnsChallenge?: {
                type?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
            } | undefined;
            httpChallenge?: {
                content?: string | undefined;
                url?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "type" | "subject" | "name" | "createdAt" | "status" | "folderId" | "labels" | "updatedAt" | "domains" | "issuer" | "serial" | "deletionProtection" | "incompleteChain" | "issuedAt" | "notAfter" | "notBefore" | "challenges">, never>>(object: I): Certificate;
};
export declare const Certificate_LabelsEntry: {
    $type: "yandex.cloud.certificatemanager.v1.Certificate.LabelsEntry";
    encode(message: Certificate_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Certificate_LabelsEntry;
    fromJSON(object: any): Certificate_LabelsEntry;
    toJSON(message: Certificate_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Certificate_LabelsEntry;
};
export declare const Challenge: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge";
    encode(message: Challenge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge;
    fromJSON(object: any): Challenge;
    toJSON(message: Challenge): unknown;
    fromPartial<I extends {
        type?: ChallengeType | undefined;
        message?: string | undefined;
        createdAt?: Date | undefined;
        error?: string | undefined;
        status?: Challenge_Status | undefined;
        updatedAt?: Date | undefined;
        domain?: string | undefined;
        dnsChallenge?: {
            type?: string | undefined;
            name?: string | undefined;
            value?: string | undefined;
        } | undefined;
        httpChallenge?: {
            content?: string | undefined;
            url?: string | undefined;
        } | undefined;
    } & {
        type?: ChallengeType | undefined;
        message?: string | undefined;
        createdAt?: Date | undefined;
        error?: string | undefined;
        status?: Challenge_Status | undefined;
        updatedAt?: Date | undefined;
        domain?: string | undefined;
        dnsChallenge?: ({
            type?: string | undefined;
            name?: string | undefined;
            value?: string | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["dnsChallenge"], "$type" | "type" | "name" | "value">, never>) | undefined;
        httpChallenge?: ({
            content?: string | undefined;
            url?: string | undefined;
        } & {
            content?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["httpChallenge"], "$type" | "content" | "url">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "message" | "createdAt" | "error" | "status" | "updatedAt" | "domain" | "dnsChallenge" | "httpChallenge">, never>>(object: I): Challenge;
};
export declare const Challenge_DnsRecord: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.DnsRecord";
    encode(message: Challenge_DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge_DnsRecord;
    fromJSON(object: any): Challenge_DnsRecord;
    toJSON(message: Challenge_DnsRecord): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        name?: string | undefined;
        value?: string | undefined;
    } & {
        type?: string | undefined;
        name?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "value">, never>>(object: I): Challenge_DnsRecord;
};
export declare const Challenge_HttpFile: {
    $type: "yandex.cloud.certificatemanager.v1.Challenge.HttpFile";
    encode(message: Challenge_HttpFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Challenge_HttpFile;
    fromJSON(object: any): Challenge_HttpFile;
    toJSON(message: Challenge_HttpFile): unknown;
    fromPartial<I extends {
        content?: string | undefined;
        url?: string | undefined;
    } & {
        content?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "content" | "url">, never>>(object: I): Challenge_HttpFile;
};
export declare const Version: {
    $type: "yandex.cloud.certificatemanager.v1.Version";
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        createdAt?: Date | undefined;
        certificateId?: string | undefined;
    } & {
        id?: string | undefined;
        createdAt?: Date | undefined;
        certificateId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "createdAt" | "certificateId">, never>>(object: I): Version;
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
