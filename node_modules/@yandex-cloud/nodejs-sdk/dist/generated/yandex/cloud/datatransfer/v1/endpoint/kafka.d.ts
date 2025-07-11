import _m0 from "protobufjs/minimal";
import { TLSMode, Secret, DataTransformationOptions, NoAuth } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/common";
import { Parser } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/parsers";
import { Serializer } from "../../../../../yandex/cloud/datatransfer/v1/endpoint/serializers";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export declare enum KafkaMechanism {
    KAFKA_MECHANISM_UNSPECIFIED = 0,
    KAFKA_MECHANISM_SHA256 = 1,
    KAFKA_MECHANISM_SHA512 = 2,
    UNRECOGNIZED = -1
}
export declare function kafkaMechanismFromJSON(object: any): KafkaMechanism;
export declare function kafkaMechanismToJSON(object: KafkaMechanism): string;
export interface KafkaConnectionOptions {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions";
    /** Managed Service for Kafka cluster ID */
    clusterId: string | undefined;
    /** Connection options for on-premise Kafka */
    onPremise?: OnPremiseKafka | undefined;
}
export interface OnPremiseKafka {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka";
    /** Kafka broker URLs */
    brokerUrls: string[];
    /** TLS settings for broker connection. Disabled by default. */
    tlsMode?: TLSMode;
    /** Network interface for endpoint. If none will assume public ipv4 */
    subnetId: string;
}
export interface KafkaAuth {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth";
    /** Authentication with SASL */
    sasl?: KafkaSaslSecurity | undefined;
    /** No authentication */
    noAuth?: NoAuth | undefined;
}
export interface KafkaSaslSecurity {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity";
    /** User name */
    user: string;
    /** Password for user */
    password?: Secret;
    /** SASL mechanism for authentication */
    mechanism: KafkaMechanism;
}
export interface KafkaSource {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource";
    /** Connection settings */
    connection?: KafkaConnectionOptions;
    /** Authentication settings */
    auth?: KafkaAuth;
    /** Security groups */
    securityGroups: string[];
    /** Full source topic name */
    topicName: string;
    /** Data transformation rules */
    transformer?: DataTransformationOptions;
    /** Data parsing rules */
    parser?: Parser;
}
export interface KafkaTarget {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget";
    /** Connection settings */
    connection?: KafkaConnectionOptions;
    /** Authentication settings */
    auth?: KafkaAuth;
    /** Security groups */
    securityGroups: string[];
    /** Target topic settings */
    topicSettings?: KafkaTargetTopicSettings;
    /** Data serialization format settings */
    serializer?: Serializer;
}
export interface KafkaTargetTopicSettings {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings";
    /** Full topic name */
    topic?: KafkaTargetTopic | undefined;
    /**
     * Topic prefix
     *
     * Analogue of the Debezium setting database.server.name.
     * Messages will be sent to topic with name <topic_prefix>.<schema>.<table_name>.
     */
    topicPrefix: string | undefined;
}
export interface KafkaTargetTopic {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic";
    /** Topic name */
    topicName: string;
    /**
     * Save transactions order
     * Not to split events queue into separate per-table queues.
     */
    saveTxOrder: boolean;
}
export declare const KafkaConnectionOptions: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaConnectionOptions";
    encode(message: KafkaConnectionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaConnectionOptions;
    fromJSON(object: any): KafkaConnectionOptions;
    toJSON(message: KafkaConnectionOptions): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        onPremise?: {
            subnetId?: string | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            brokerUrls?: string[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        onPremise?: ({
            subnetId?: string | undefined;
            tlsMode?: {
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } | undefined;
            brokerUrls?: string[] | undefined;
        } & {
            subnetId?: string | undefined;
            tlsMode?: ({
                enabled?: {
                    caCertificate?: string | undefined;
                } | undefined;
                disabled?: {} | undefined;
            } & {
                enabled?: ({
                    caCertificate?: string | undefined;
                } & {
                    caCertificate?: string | undefined;
                } & Record<Exclude<keyof I["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                disabled?: ({} & {} & Record<Exclude<keyof I["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "onPremise">, never>>(object: I): KafkaConnectionOptions;
};
export declare const OnPremiseKafka: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.OnPremiseKafka";
    encode(message: OnPremiseKafka, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OnPremiseKafka;
    fromJSON(object: any): OnPremiseKafka;
    toJSON(message: OnPremiseKafka): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        tlsMode?: {
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } | undefined;
        brokerUrls?: string[] | undefined;
    } & {
        subnetId?: string | undefined;
        tlsMode?: ({
            enabled?: {
                caCertificate?: string | undefined;
            } | undefined;
            disabled?: {} | undefined;
        } & {
            enabled?: ({
                caCertificate?: string | undefined;
            } & {
                caCertificate?: string | undefined;
            } & Record<Exclude<keyof I["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
            disabled?: ({} & {} & Record<Exclude<keyof I["tlsMode"]["disabled"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
        brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>>(object: I): OnPremiseKafka;
};
export declare const KafkaAuth: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaAuth";
    encode(message: KafkaAuth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaAuth;
    fromJSON(object: any): KafkaAuth;
    toJSON(message: KafkaAuth): unknown;
    fromPartial<I extends {
        sasl?: {
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
            mechanism?: KafkaMechanism | undefined;
        } | undefined;
        noAuth?: {} | undefined;
    } & {
        sasl?: ({
            user?: string | undefined;
            password?: {
                raw?: string | undefined;
            } | undefined;
            mechanism?: KafkaMechanism | undefined;
        } & {
            user?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["sasl"]["password"], "$type" | "raw">, never>) | undefined;
            mechanism?: KafkaMechanism | undefined;
        } & Record<Exclude<keyof I["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
        noAuth?: ({} & {} & Record<Exclude<keyof I["noAuth"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "sasl" | "noAuth">, never>>(object: I): KafkaAuth;
};
export declare const KafkaSaslSecurity: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSaslSecurity";
    encode(message: KafkaSaslSecurity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaSaslSecurity;
    fromJSON(object: any): KafkaSaslSecurity;
    toJSON(message: KafkaSaslSecurity): unknown;
    fromPartial<I extends {
        user?: string | undefined;
        password?: {
            raw?: string | undefined;
        } | undefined;
        mechanism?: KafkaMechanism | undefined;
    } & {
        user?: string | undefined;
        password?: ({
            raw?: string | undefined;
        } & {
            raw?: string | undefined;
        } & Record<Exclude<keyof I["password"], "$type" | "raw">, never>) | undefined;
        mechanism?: KafkaMechanism | undefined;
    } & Record<Exclude<keyof I, "$type" | "user" | "password" | "mechanism">, never>>(object: I): KafkaSaslSecurity;
};
export declare const KafkaSource: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaSource";
    encode(message: KafkaSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaSource;
    fromJSON(object: any): KafkaSource;
    toJSON(message: KafkaSource): unknown;
    fromPartial<I extends {
        connection?: {
            clusterId?: string | undefined;
            onPremise?: {
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } | undefined;
        } | undefined;
        securityGroups?: string[] | undefined;
        topicName?: string | undefined;
        auth?: {
            sasl?: {
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } | undefined;
            noAuth?: {} | undefined;
        } | undefined;
        transformer?: {
            serviceAccountId?: string | undefined;
            cloudFunction?: string | undefined;
            numberOfRetries?: number | undefined;
            bufferSize?: string | undefined;
            bufferFlushInterval?: string | undefined;
            invocationTimeout?: string | undefined;
        } | undefined;
        parser?: {
            jsonParser?: {
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } | undefined;
            auditTrailsV1Parser?: {} | undefined;
            cloudLoggingParser?: {} | undefined;
            tskvParser?: {
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } | undefined;
        } | undefined;
    } & {
        connection?: ({
            clusterId?: string | undefined;
            onPremise?: {
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } | undefined;
        } & {
            clusterId?: string | undefined;
            onPremise?: ({
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } & {
                subnetId?: string | undefined;
                tlsMode?: ({
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } & {
                    enabled?: ({
                        caCertificate?: string | undefined;
                    } & {
                        caCertificate?: string | undefined;
                    } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                    disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        topicName?: string | undefined;
        auth?: ({
            sasl?: {
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } | undefined;
            noAuth?: {} | undefined;
        } & {
            sasl?: ({
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } & {
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                mechanism?: KafkaMechanism | undefined;
            } & Record<Exclude<keyof I["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
            noAuth?: ({} & {} & Record<Exclude<keyof I["auth"]["noAuth"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
        transformer?: ({
            serviceAccountId?: string | undefined;
            cloudFunction?: string | undefined;
            numberOfRetries?: number | undefined;
            bufferSize?: string | undefined;
            bufferFlushInterval?: string | undefined;
            invocationTimeout?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            cloudFunction?: string | undefined;
            numberOfRetries?: number | undefined;
            bufferSize?: string | undefined;
            bufferFlushInterval?: string | undefined;
            invocationTimeout?: string | undefined;
        } & Record<Exclude<keyof I["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
        parser?: ({
            jsonParser?: {
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } | undefined;
            auditTrailsV1Parser?: {} | undefined;
            cloudLoggingParser?: {} | undefined;
            tskvParser?: {
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } | undefined;
        } & {
            jsonParser?: ({
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } & {
                dataSchema?: ({
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } & {
                    fields?: ({
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        fields?: ({
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] & ({
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        } & {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        } & Record<Exclude<keyof I["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                    jsonFields?: string | undefined;
                } & Record<Exclude<keyof I["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } & Record<Exclude<keyof I["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
            auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
            cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
            tskvParser?: ({
                dataSchema?: {
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } & {
                dataSchema?: ({
                    fields?: {
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } | undefined;
                    jsonFields?: string | undefined;
                } & {
                    fields?: ({
                        fields?: {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] | undefined;
                    } & {
                        fields?: ({
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[] & ({
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        } & {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        } & Record<Exclude<keyof I["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                            type?: import("../../../../../yandex/cloud/datatransfer/v1/endpoint/common").ColumnType | undefined;
                            name?: string | undefined;
                            key?: boolean | undefined;
                            path?: string | undefined;
                            required?: boolean | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                    jsonFields?: string | undefined;
                } & Record<Exclude<keyof I["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                nullKeysAllowed?: boolean | undefined;
                addRestColumn?: boolean | undefined;
            } & Record<Exclude<keyof I["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
        } & Record<Exclude<keyof I["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>>(object: I): KafkaSource;
};
export declare const KafkaTarget: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTarget";
    encode(message: KafkaTarget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaTarget;
    fromJSON(object: any): KafkaTarget;
    toJSON(message: KafkaTarget): unknown;
    fromPartial<I extends {
        connection?: {
            clusterId?: string | undefined;
            onPremise?: {
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } | undefined;
        } | undefined;
        securityGroups?: string[] | undefined;
        auth?: {
            sasl?: {
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } | undefined;
            noAuth?: {} | undefined;
        } | undefined;
        topicSettings?: {
            topic?: {
                topicName?: string | undefined;
                saveTxOrder?: boolean | undefined;
            } | undefined;
            topicPrefix?: string | undefined;
        } | undefined;
        serializer?: {
            serializerAuto?: {} | undefined;
            serializerJson?: {} | undefined;
            serializerDebezium?: {
                serializerParameters?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        connection?: ({
            clusterId?: string | undefined;
            onPremise?: {
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } | undefined;
        } & {
            clusterId?: string | undefined;
            onPremise?: ({
                subnetId?: string | undefined;
                tlsMode?: {
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } | undefined;
                brokerUrls?: string[] | undefined;
            } & {
                subnetId?: string | undefined;
                tlsMode?: ({
                    enabled?: {
                        caCertificate?: string | undefined;
                    } | undefined;
                    disabled?: {} | undefined;
                } & {
                    enabled?: ({
                        caCertificate?: string | undefined;
                    } & {
                        caCertificate?: string | undefined;
                    } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                    disabled?: ({} & {} & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
        } & Record<Exclude<keyof I["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
        auth?: ({
            sasl?: {
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } | undefined;
            noAuth?: {} | undefined;
        } & {
            sasl?: ({
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                mechanism?: KafkaMechanism | undefined;
            } & {
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                mechanism?: KafkaMechanism | undefined;
            } & Record<Exclude<keyof I["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
            noAuth?: ({} & {} & Record<Exclude<keyof I["auth"]["noAuth"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
        topicSettings?: ({
            topic?: {
                topicName?: string | undefined;
                saveTxOrder?: boolean | undefined;
            } | undefined;
            topicPrefix?: string | undefined;
        } & {
            topic?: ({
                topicName?: string | undefined;
                saveTxOrder?: boolean | undefined;
            } & {
                topicName?: string | undefined;
                saveTxOrder?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
            topicPrefix?: string | undefined;
        } & Record<Exclude<keyof I["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
        serializer?: ({
            serializerAuto?: {} | undefined;
            serializerJson?: {} | undefined;
            serializerDebezium?: {
                serializerParameters?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            serializerAuto?: ({} & {} & Record<Exclude<keyof I["serializer"]["serializerAuto"], "$type">, never>) | undefined;
            serializerJson?: ({} & {} & Record<Exclude<keyof I["serializer"]["serializerJson"], "$type">, never>) | undefined;
            serializerDebezium?: ({
                serializerParameters?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
            } & {
                serializerParameters?: ({
                    value?: string | undefined;
                    key?: string | undefined;
                }[] & ({
                    value?: string | undefined;
                    key?: string | undefined;
                } & {
                    value?: string | undefined;
                    key?: string | undefined;
                } & Record<Exclude<keyof I["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
        } & Record<Exclude<keyof I["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>>(object: I): KafkaTarget;
};
export declare const KafkaTargetTopicSettings: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopicSettings";
    encode(message: KafkaTargetTopicSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaTargetTopicSettings;
    fromJSON(object: any): KafkaTargetTopicSettings;
    toJSON(message: KafkaTargetTopicSettings): unknown;
    fromPartial<I extends {
        topic?: {
            topicName?: string | undefined;
            saveTxOrder?: boolean | undefined;
        } | undefined;
        topicPrefix?: string | undefined;
    } & {
        topic?: ({
            topicName?: string | undefined;
            saveTxOrder?: boolean | undefined;
        } & {
            topicName?: string | undefined;
            saveTxOrder?: boolean | undefined;
        } & Record<Exclude<keyof I["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
        topicPrefix?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "topic" | "topicPrefix">, never>>(object: I): KafkaTargetTopicSettings;
};
export declare const KafkaTargetTopic: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.KafkaTargetTopic";
    encode(message: KafkaTargetTopic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): KafkaTargetTopic;
    fromJSON(object: any): KafkaTargetTopic;
    toJSON(message: KafkaTargetTopic): unknown;
    fromPartial<I extends {
        topicName?: string | undefined;
        saveTxOrder?: boolean | undefined;
    } & {
        topicName?: string | undefined;
        saveTxOrder?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "topicName" | "saveTxOrder">, never>>(object: I): KafkaTargetTopic;
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
