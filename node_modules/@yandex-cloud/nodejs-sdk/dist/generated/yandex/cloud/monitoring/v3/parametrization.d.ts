import _m0 from "protobufjs/minimal";
import { UnitFormat } from "../../../../yandex/cloud/monitoring/v3/unit_format";
export declare const protobufPackage = "yandex.cloud.monitoring.v3";
/** Label values parameter. */
export interface LabelValuesParameter {
    $type: "yandex.cloud.monitoring.v3.LabelValuesParameter";
    /** Required. Folder ID. */
    folderId: string | undefined;
    /** Required. Selectors to select metric label values. */
    selectors: string;
    /** Required. Label key to list label values. */
    labelKey: string;
    /** Specifies the multiselectable values of parameter. */
    multiselectable: boolean;
    /** Default values. */
    defaultValues: string[];
}
/** Custom parameter. */
export interface CustomParameter {
    $type: "yandex.cloud.monitoring.v3.CustomParameter";
    /** Required. List of parameter values. */
    values: string[];
    /** Specifies the multiselectable values of parameter. */
    multiselectable: boolean;
    /** Default values. */
    defaultValues: string[];
}
/** Text parameter. */
export interface TextParameter {
    $type: "yandex.cloud.monitoring.v3.TextParameter";
    /** Default value. */
    defaultValue: string;
}
/** Double parameter. */
export interface DoubleParameter {
    $type: "yandex.cloud.monitoring.v3.DoubleParameter";
    /** Default value. */
    defaultValue: number;
    /** Parameter unit. */
    unitFormat: UnitFormat;
}
/** Integer parameter. */
export interface IntegerParameter {
    $type: "yandex.cloud.monitoring.v3.IntegerParameter";
    /** Default value. */
    defaultValue: number;
    /** Parameter unit. */
    unitFormat: UnitFormat;
}
/** Text multiple values parameter. */
export interface TextValuesParameter {
    $type: "yandex.cloud.monitoring.v3.TextValuesParameter";
    /** Default value. */
    defaultValues: string[];
}
/** Parameter. */
export interface Parameter {
    $type: "yandex.cloud.monitoring.v3.Parameter";
    /** Parameter identifier. */
    name: string;
    /** UI-visible title of the parameter. */
    title: string;
    /** Label values parameter. */
    labelValues?: LabelValuesParameter | undefined;
    /** Custom parameter. */
    custom?: CustomParameter | undefined;
    /** Text parameter. */
    text?: TextParameter | undefined;
    /** Integer parameter. */
    integerParameter?: IntegerParameter | undefined;
    /** Double parameter. */
    doubleParameter?: DoubleParameter | undefined;
    /** Integer parameter. */
    textValues?: TextValuesParameter | undefined;
    /** UI-visibility. */
    hidden: boolean;
    /** Parameter description. */
    description: string;
}
/** Parametrization. */
export interface Parametrization {
    $type: "yandex.cloud.monitoring.v3.Parametrization";
    /** Parameters. */
    parameters: Parameter[];
    /** Predefined selectors. */
    selectors: string;
}
export declare const LabelValuesParameter: {
    $type: "yandex.cloud.monitoring.v3.LabelValuesParameter";
    encode(message: LabelValuesParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LabelValuesParameter;
    fromJSON(object: any): LabelValuesParameter;
    toJSON(message: LabelValuesParameter): unknown;
    fromPartial<I extends {
        folderId?: string | undefined;
        defaultValues?: string[] | undefined;
        selectors?: string | undefined;
        labelKey?: string | undefined;
        multiselectable?: boolean | undefined;
    } & {
        folderId?: string | undefined;
        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
        selectors?: string | undefined;
        labelKey?: string | undefined;
        multiselectable?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "folderId" | "defaultValues" | "selectors" | "labelKey" | "multiselectable">, never>>(object: I): LabelValuesParameter;
};
export declare const CustomParameter: {
    $type: "yandex.cloud.monitoring.v3.CustomParameter";
    encode(message: CustomParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomParameter;
    fromJSON(object: any): CustomParameter;
    toJSON(message: CustomParameter): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
        defaultValues?: string[] | undefined;
        multiselectable?: boolean | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
        multiselectable?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "defaultValues" | "multiselectable">, never>>(object: I): CustomParameter;
};
export declare const TextParameter: {
    $type: "yandex.cloud.monitoring.v3.TextParameter";
    encode(message: TextParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextParameter;
    fromJSON(object: any): TextParameter;
    toJSON(message: TextParameter): unknown;
    fromPartial<I extends {
        defaultValue?: string | undefined;
    } & {
        defaultValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultValue">, never>>(object: I): TextParameter;
};
export declare const DoubleParameter: {
    $type: "yandex.cloud.monitoring.v3.DoubleParameter";
    encode(message: DoubleParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DoubleParameter;
    fromJSON(object: any): DoubleParameter;
    toJSON(message: DoubleParameter): unknown;
    fromPartial<I extends {
        defaultValue?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & {
        defaultValue?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultValue" | "unitFormat">, never>>(object: I): DoubleParameter;
};
export declare const IntegerParameter: {
    $type: "yandex.cloud.monitoring.v3.IntegerParameter";
    encode(message: IntegerParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IntegerParameter;
    fromJSON(object: any): IntegerParameter;
    toJSON(message: IntegerParameter): unknown;
    fromPartial<I extends {
        defaultValue?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & {
        defaultValue?: number | undefined;
        unitFormat?: UnitFormat | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultValue" | "unitFormat">, never>>(object: I): IntegerParameter;
};
export declare const TextValuesParameter: {
    $type: "yandex.cloud.monitoring.v3.TextValuesParameter";
    encode(message: TextValuesParameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextValuesParameter;
    fromJSON(object: any): TextValuesParameter;
    toJSON(message: TextValuesParameter): unknown;
    fromPartial<I extends {
        defaultValues?: string[] | undefined;
    } & {
        defaultValues?: (string[] & string[] & Record<Exclude<keyof I["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultValues">, never>>(object: I): TextValuesParameter;
};
export declare const Parameter: {
    $type: "yandex.cloud.monitoring.v3.Parameter";
    encode(message: Parameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Parameter;
    fromJSON(object: any): Parameter;
    toJSON(message: Parameter): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        text?: {
            defaultValue?: string | undefined;
        } | undefined;
        title?: string | undefined;
        custom?: {
            values?: string[] | undefined;
            defaultValues?: string[] | undefined;
            multiselectable?: boolean | undefined;
        } | undefined;
        hidden?: boolean | undefined;
        labelValues?: {
            folderId?: string | undefined;
            defaultValues?: string[] | undefined;
            selectors?: string | undefined;
            labelKey?: string | undefined;
            multiselectable?: boolean | undefined;
        } | undefined;
        integerParameter?: {
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } | undefined;
        doubleParameter?: {
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } | undefined;
        textValues?: {
            defaultValues?: string[] | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        text?: ({
            defaultValue?: string | undefined;
        } & {
            defaultValue?: string | undefined;
        } & Record<Exclude<keyof I["text"], "$type" | "defaultValue">, never>) | undefined;
        title?: string | undefined;
        custom?: ({
            values?: string[] | undefined;
            defaultValues?: string[] | undefined;
            multiselectable?: boolean | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["custom"]["values"], "$type" | keyof string[]>, never>) | undefined;
            defaultValues?: (string[] & string[] & Record<Exclude<keyof I["custom"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
            multiselectable?: boolean | undefined;
        } & Record<Exclude<keyof I["custom"], "$type" | "values" | "defaultValues" | "multiselectable">, never>) | undefined;
        hidden?: boolean | undefined;
        labelValues?: ({
            folderId?: string | undefined;
            defaultValues?: string[] | undefined;
            selectors?: string | undefined;
            labelKey?: string | undefined;
            multiselectable?: boolean | undefined;
        } & {
            folderId?: string | undefined;
            defaultValues?: (string[] & string[] & Record<Exclude<keyof I["labelValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
            selectors?: string | undefined;
            labelKey?: string | undefined;
            multiselectable?: boolean | undefined;
        } & Record<Exclude<keyof I["labelValues"], "$type" | "folderId" | "defaultValues" | "selectors" | "labelKey" | "multiselectable">, never>) | undefined;
        integerParameter?: ({
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & {
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & Record<Exclude<keyof I["integerParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
        doubleParameter?: ({
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & {
            defaultValue?: number | undefined;
            unitFormat?: UnitFormat | undefined;
        } & Record<Exclude<keyof I["doubleParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
        textValues?: ({
            defaultValues?: string[] | undefined;
        } & {
            defaultValues?: (string[] & string[] & Record<Exclude<keyof I["textValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["textValues"], "$type" | "defaultValues">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "text" | "title" | "custom" | "hidden" | "labelValues" | "integerParameter" | "doubleParameter" | "textValues">, never>>(object: I): Parameter;
};
export declare const Parametrization: {
    $type: "yandex.cloud.monitoring.v3.Parametrization";
    encode(message: Parametrization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Parametrization;
    fromJSON(object: any): Parametrization;
    toJSON(message: Parametrization): unknown;
    fromPartial<I extends {
        selectors?: string | undefined;
        parameters?: {
            description?: string | undefined;
            name?: string | undefined;
            text?: {
                defaultValue?: string | undefined;
            } | undefined;
            title?: string | undefined;
            custom?: {
                values?: string[] | undefined;
                defaultValues?: string[] | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            labelValues?: {
                folderId?: string | undefined;
                defaultValues?: string[] | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            integerParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            doubleParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            textValues?: {
                defaultValues?: string[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        selectors?: string | undefined;
        parameters?: ({
            description?: string | undefined;
            name?: string | undefined;
            text?: {
                defaultValue?: string | undefined;
            } | undefined;
            title?: string | undefined;
            custom?: {
                values?: string[] | undefined;
                defaultValues?: string[] | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            labelValues?: {
                folderId?: string | undefined;
                defaultValues?: string[] | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            integerParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            doubleParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            textValues?: {
                defaultValues?: string[] | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            name?: string | undefined;
            text?: {
                defaultValue?: string | undefined;
            } | undefined;
            title?: string | undefined;
            custom?: {
                values?: string[] | undefined;
                defaultValues?: string[] | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            labelValues?: {
                folderId?: string | undefined;
                defaultValues?: string[] | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            integerParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            doubleParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            textValues?: {
                defaultValues?: string[] | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
            text?: ({
                defaultValue?: string | undefined;
            } & {
                defaultValue?: string | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["text"], "$type" | "defaultValue">, never>) | undefined;
            title?: string | undefined;
            custom?: ({
                values?: string[] | undefined;
                defaultValues?: string[] | undefined;
                multiselectable?: boolean | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["parameters"][number]["custom"]["values"], "$type" | keyof string[]>, never>) | undefined;
                defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parameters"][number]["custom"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                multiselectable?: boolean | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["custom"], "$type" | "values" | "defaultValues" | "multiselectable">, never>) | undefined;
            hidden?: boolean | undefined;
            labelValues?: ({
                folderId?: string | undefined;
                defaultValues?: string[] | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } & {
                folderId?: string | undefined;
                defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parameters"][number]["labelValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["labelValues"], "$type" | "folderId" | "defaultValues" | "selectors" | "labelKey" | "multiselectable">, never>) | undefined;
            integerParameter?: ({
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["integerParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
            doubleParameter?: ({
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["doubleParameter"], "$type" | "defaultValue" | "unitFormat">, never>) | undefined;
            textValues?: ({
                defaultValues?: string[] | undefined;
            } & {
                defaultValues?: (string[] & string[] & Record<Exclude<keyof I["parameters"][number]["textValues"]["defaultValues"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["parameters"][number]["textValues"], "$type" | "defaultValues">, never>) | undefined;
        } & Record<Exclude<keyof I["parameters"][number], "$type" | "description" | "name" | "text" | "title" | "custom" | "hidden" | "labelValues" | "integerParameter" | "doubleParameter" | "textValues">, never>)[] & Record<Exclude<keyof I["parameters"], "$type" | keyof {
            description?: string | undefined;
            name?: string | undefined;
            text?: {
                defaultValue?: string | undefined;
            } | undefined;
            title?: string | undefined;
            custom?: {
                values?: string[] | undefined;
                defaultValues?: string[] | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            labelValues?: {
                folderId?: string | undefined;
                defaultValues?: string[] | undefined;
                selectors?: string | undefined;
                labelKey?: string | undefined;
                multiselectable?: boolean | undefined;
            } | undefined;
            integerParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            doubleParameter?: {
                defaultValue?: number | undefined;
                unitFormat?: UnitFormat | undefined;
            } | undefined;
            textValues?: {
                defaultValues?: string[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "selectors" | "parameters">, never>>(object: I): Parametrization;
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
