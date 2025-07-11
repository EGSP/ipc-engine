import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export interface Predicate {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate";
    andPredicate?: AndPredicate | undefined;
    fieldValuePredicate?: FieldValuePredicate | undefined;
}
export interface AndPredicate {
    $type: "yandex.cloud.serverless.triggers.v1.AndPredicate";
    predicate: Predicate[];
}
export interface FieldValuePredicate {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate";
    fieldPath: string;
    /** string representation of the value matches exactly to the given string */
    exact: string | undefined;
    /** value has given prefix */
    prefix: string | undefined;
    /** value has given suffix */
    suffix: string | undefined;
}
export declare const Predicate: {
    $type: "yandex.cloud.serverless.triggers.v1.Predicate";
    encode(message: Predicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Predicate;
    fromJSON(object: any): Predicate;
    toJSON(message: Predicate): unknown;
    fromPartial<I extends {
        andPredicate?: {
            predicate?: any[] | undefined;
        } | undefined;
        fieldValuePredicate?: {
            exact?: string | undefined;
            prefix?: string | undefined;
            fieldPath?: string | undefined;
            suffix?: string | undefined;
        } | undefined;
    } & {
        andPredicate?: ({
            predicate?: any[] | undefined;
        } & {
            predicate?: (any[] & ({
                andPredicate?: {
                    predicate?: any[] | undefined;
                } | undefined;
                fieldValuePredicate?: {
                    exact?: string | undefined;
                    prefix?: string | undefined;
                    fieldPath?: string | undefined;
                    suffix?: string | undefined;
                } | undefined;
            } & {
                andPredicate?: ({
                    predicate?: any[] | undefined;
                } & {
                    predicate?: (any[] & ({
                        andPredicate?: {
                            predicate?: any[] | undefined;
                        } | undefined;
                        fieldValuePredicate?: {
                            exact?: string | undefined;
                            prefix?: string | undefined;
                            fieldPath?: string | undefined;
                            suffix?: string | undefined;
                        } | undefined;
                    } & {
                        andPredicate?: ({
                            predicate?: any[] | undefined;
                        } & {
                            predicate?: (any[] & ({
                                andPredicate?: {
                                    predicate?: any[] | undefined;
                                } | undefined;
                                fieldValuePredicate?: {
                                    exact?: string | undefined;
                                    prefix?: string | undefined;
                                    fieldPath?: string | undefined;
                                    suffix?: string | undefined;
                                } | undefined;
                            } & {
                                andPredicate?: ({
                                    predicate?: any[] | undefined;
                                } & {
                                    predicate?: (any[] & ({
                                        andPredicate?: {
                                            predicate?: any[] | undefined;
                                        } | undefined;
                                        fieldValuePredicate?: {
                                            exact?: string | undefined;
                                            prefix?: string | undefined;
                                            fieldPath?: string | undefined;
                                            suffix?: string | undefined;
                                        } | undefined;
                                    } & {
                                        andPredicate?: ({
                                            predicate?: any[] | undefined;
                                        } & {
                                            predicate?: (any[] & ({
                                                andPredicate?: {
                                                    predicate?: any[] | undefined;
                                                } | undefined;
                                                fieldValuePredicate?: {
                                                    exact?: string | undefined;
                                                    prefix?: string | undefined;
                                                    fieldPath?: string | undefined;
                                                    suffix?: string | undefined;
                                                } | undefined;
                                            } & {
                                                andPredicate?: ({
                                                    predicate?: any[] | undefined;
                                                } & any & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                                                fieldValuePredicate?: ({
                                                    exact?: string | undefined;
                                                    prefix?: string | undefined;
                                                    fieldPath?: string | undefined;
                                                    suffix?: string | undefined;
                                                } & any & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                                            } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                                        } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                                        fieldValuePredicate?: ({
                                            exact?: string | undefined;
                                            prefix?: string | undefined;
                                            fieldPath?: string | undefined;
                                            suffix?: string | undefined;
                                        } & {
                                            exact?: string | undefined;
                                            prefix?: string | undefined;
                                            fieldPath?: string | undefined;
                                            suffix?: string | undefined;
                                        } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                                    } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                                fieldValuePredicate?: ({
                                    exact?: string | undefined;
                                    prefix?: string | undefined;
                                    fieldPath?: string | undefined;
                                    suffix?: string | undefined;
                                } & {
                                    exact?: string | undefined;
                                    prefix?: string | undefined;
                                    fieldPath?: string | undefined;
                                    suffix?: string | undefined;
                                } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                            } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                        fieldValuePredicate?: ({
                            exact?: string | undefined;
                            prefix?: string | undefined;
                            fieldPath?: string | undefined;
                            suffix?: string | undefined;
                        } & {
                            exact?: string | undefined;
                            prefix?: string | undefined;
                            fieldPath?: string | undefined;
                            suffix?: string | undefined;
                        } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                    } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                fieldValuePredicate?: ({
                    exact?: string | undefined;
                    prefix?: string | undefined;
                    fieldPath?: string | undefined;
                    suffix?: string | undefined;
                } & {
                    exact?: string | undefined;
                    prefix?: string | undefined;
                    fieldPath?: string | undefined;
                    suffix?: string | undefined;
                } & Record<Exclude<keyof I["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
            } & Record<Exclude<keyof I["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
        } & Record<Exclude<keyof I["andPredicate"], "$type" | "predicate">, never>) | undefined;
        fieldValuePredicate?: ({
            exact?: string | undefined;
            prefix?: string | undefined;
            fieldPath?: string | undefined;
            suffix?: string | undefined;
        } & {
            exact?: string | undefined;
            prefix?: string | undefined;
            fieldPath?: string | undefined;
            suffix?: string | undefined;
        } & Record<Exclude<keyof I["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "andPredicate" | "fieldValuePredicate">, never>>(object: I): Predicate;
};
export declare const AndPredicate: {
    $type: "yandex.cloud.serverless.triggers.v1.AndPredicate";
    encode(message: AndPredicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AndPredicate;
    fromJSON(object: any): AndPredicate;
    toJSON(message: AndPredicate): unknown;
    fromPartial<I extends {
        predicate?: any[] | undefined;
    } & {
        predicate?: (any[] & ({
            andPredicate?: {
                predicate?: any[] | undefined;
            } | undefined;
            fieldValuePredicate?: {
                exact?: string | undefined;
                prefix?: string | undefined;
                fieldPath?: string | undefined;
                suffix?: string | undefined;
            } | undefined;
        } & {
            andPredicate?: ({
                predicate?: any[] | undefined;
            } & {
                predicate?: (any[] & ({
                    andPredicate?: {
                        predicate?: any[] | undefined;
                    } | undefined;
                    fieldValuePredicate?: {
                        exact?: string | undefined;
                        prefix?: string | undefined;
                        fieldPath?: string | undefined;
                        suffix?: string | undefined;
                    } | undefined;
                } & {
                    andPredicate?: ({
                        predicate?: any[] | undefined;
                    } & {
                        predicate?: (any[] & ({
                            andPredicate?: {
                                predicate?: any[] | undefined;
                            } | undefined;
                            fieldValuePredicate?: {
                                exact?: string | undefined;
                                prefix?: string | undefined;
                                fieldPath?: string | undefined;
                                suffix?: string | undefined;
                            } | undefined;
                        } & {
                            andPredicate?: ({
                                predicate?: any[] | undefined;
                            } & {
                                predicate?: (any[] & ({
                                    andPredicate?: {
                                        predicate?: any[] | undefined;
                                    } | undefined;
                                    fieldValuePredicate?: {
                                        exact?: string | undefined;
                                        prefix?: string | undefined;
                                        fieldPath?: string | undefined;
                                        suffix?: string | undefined;
                                    } | undefined;
                                } & {
                                    andPredicate?: ({
                                        predicate?: any[] | undefined;
                                    } & {
                                        predicate?: (any[] & ({
                                            andPredicate?: {
                                                predicate?: any[] | undefined;
                                            } | undefined;
                                            fieldValuePredicate?: {
                                                exact?: string | undefined;
                                                prefix?: string | undefined;
                                                fieldPath?: string | undefined;
                                                suffix?: string | undefined;
                                            } | undefined;
                                        } & {
                                            andPredicate?: ({
                                                predicate?: any[] | undefined;
                                            } & {
                                                predicate?: (any[] & ({
                                                    andPredicate?: {
                                                        predicate?: any[] | undefined;
                                                    } | undefined;
                                                    fieldValuePredicate?: {
                                                        exact?: string | undefined;
                                                        prefix?: string | undefined;
                                                        fieldPath?: string | undefined;
                                                        suffix?: string | undefined;
                                                    } | undefined;
                                                } & any & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                                            } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                                            fieldValuePredicate?: ({
                                                exact?: string | undefined;
                                                prefix?: string | undefined;
                                                fieldPath?: string | undefined;
                                                suffix?: string | undefined;
                                            } & {
                                                exact?: string | undefined;
                                                prefix?: string | undefined;
                                                fieldPath?: string | undefined;
                                                suffix?: string | undefined;
                                            } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                                        } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                                    fieldValuePredicate?: ({
                                        exact?: string | undefined;
                                        prefix?: string | undefined;
                                        fieldPath?: string | undefined;
                                        suffix?: string | undefined;
                                    } & {
                                        exact?: string | undefined;
                                        prefix?: string | undefined;
                                        fieldPath?: string | undefined;
                                        suffix?: string | undefined;
                                    } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                                } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                            fieldValuePredicate?: ({
                                exact?: string | undefined;
                                prefix?: string | undefined;
                                fieldPath?: string | undefined;
                                suffix?: string | undefined;
                            } & {
                                exact?: string | undefined;
                                prefix?: string | undefined;
                                fieldPath?: string | undefined;
                                suffix?: string | undefined;
                            } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                        } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
                    fieldValuePredicate?: ({
                        exact?: string | undefined;
                        prefix?: string | undefined;
                        fieldPath?: string | undefined;
                        suffix?: string | undefined;
                    } & {
                        exact?: string | undefined;
                        prefix?: string | undefined;
                        fieldPath?: string | undefined;
                        suffix?: string | undefined;
                    } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
                } & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"][number]["andPredicate"]["predicate"], "$type" | keyof any[]>, never>) | undefined;
            } & Record<Exclude<keyof I["predicate"][number]["andPredicate"], "$type" | "predicate">, never>) | undefined;
            fieldValuePredicate?: ({
                exact?: string | undefined;
                prefix?: string | undefined;
                fieldPath?: string | undefined;
                suffix?: string | undefined;
            } & {
                exact?: string | undefined;
                prefix?: string | undefined;
                fieldPath?: string | undefined;
                suffix?: string | undefined;
            } & Record<Exclude<keyof I["predicate"][number]["fieldValuePredicate"], "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>) | undefined;
        } & Record<Exclude<keyof I["predicate"][number], "$type" | "andPredicate" | "fieldValuePredicate">, never>)[] & Record<Exclude<keyof I["predicate"], "$type" | keyof any[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "predicate">, never>>(object: I): AndPredicate;
};
export declare const FieldValuePredicate: {
    $type: "yandex.cloud.serverless.triggers.v1.FieldValuePredicate";
    encode(message: FieldValuePredicate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FieldValuePredicate;
    fromJSON(object: any): FieldValuePredicate;
    toJSON(message: FieldValuePredicate): unknown;
    fromPartial<I extends {
        exact?: string | undefined;
        prefix?: string | undefined;
        fieldPath?: string | undefined;
        suffix?: string | undefined;
    } & {
        exact?: string | undefined;
        prefix?: string | undefined;
        fieldPath?: string | undefined;
        suffix?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "exact" | "prefix" | "fieldPath" | "suffix">, never>>(object: I): FieldValuePredicate;
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
