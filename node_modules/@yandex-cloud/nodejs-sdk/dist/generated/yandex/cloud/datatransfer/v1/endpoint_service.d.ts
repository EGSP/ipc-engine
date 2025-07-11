/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { EndpointSettings, Endpoint } from "../../../../yandex/cloud/datatransfer/v1/endpoint";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1";
export interface GetEndpointRequest {
    $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest";
    endpointId: string;
}
export interface ListEndpointsRequest {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest";
    /** Identifier of the folder containing the endpoints to be listed. */
    folderId: string;
    /**
     * The maximum number of endpoints to be sent in the response message. If the
     * folder contains more endpoints than `page_size`, `next_page_token` will be
     * included
     * in the response message. Include it into the subsequent `ListEndpointRequest` to
     * fetch the next page. Defaults to `100` if not specified. The maximum allowed
     * value
     * for this field is `500`.
     */
    pageSize: number;
    /**
     * Opaque value identifying the endpoints page to be fetched. Should be empty in
     * the first `ListEndpointsRequest`. Subsequent requests should have this field
     * filled
     * with the `next_page_token` from the previous `ListEndpointsResponse`.
     */
    pageToken: string;
}
export interface ListEndpointsResponse {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse";
    /**
     * The list of endpoints. If there are more endpoints in the folder, then
     * `next_page_token` is a non-empty string to be included into the subsequent
     * `ListEndpointsRequest` to fetch the next endpoints page.
     */
    endpoints: Endpoint[];
    /**
     * Opaque value identifying the next endpoints page. This field is empty if there
     * are no more endpoints in the folder. Otherwise, it is non-empty and should be
     * included in the subsequent `ListEndpointsRequest` to fetch the next endpoints
     * page.
     */
    nextPageToken: string;
}
export interface CreateEndpointRequest {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest";
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    settings?: EndpointSettings;
}
export interface CreateEndpointRequest_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateEndpointMetadata {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata";
    endpointId: string;
}
export interface UpdateEndpointRequest {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest";
    /** Identifier of the endpoint to be updated. */
    endpointId: string;
    /** The new endpoint name. Must be unique within the folder. */
    name: string;
    /** The new description for the endpoint. */
    description: string;
    labels: {
        [key: string]: string;
    };
    /** The new endpoint name. Must be unique within the folder. */
    settings?: EndpointSettings;
    /**
     * Field mask specifying endpoint fields to be updated. Semantics for this field is
     * described here:
     * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
     * The only exception: if the repeated field is specified in the mask, then
     * the new value replaces the old one instead of being appended to the old one.
     */
    updateMask?: FieldMask;
}
export interface UpdateEndpointRequest_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateEndpointMetadata {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata";
    endpointId: string;
}
export interface DeleteEndpointRequest {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest";
    endpointId: string;
}
export interface DeleteEndpointMetadata {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata";
    endpointId: string;
}
export declare const GetEndpointRequest: {
    $type: "yandex.cloud.datatransfer.v1.GetEndpointRequest";
    encode(message: GetEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetEndpointRequest;
    fromJSON(object: any): GetEndpointRequest;
    toJSON(message: GetEndpointRequest): unknown;
    fromPartial<I extends {
        endpointId?: string | undefined;
    } & {
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "endpointId">, never>>(object: I): GetEndpointRequest;
};
export declare const ListEndpointsRequest: {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsRequest";
    encode(message: ListEndpointsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEndpointsRequest;
    fromJSON(object: any): ListEndpointsRequest;
    toJSON(message: ListEndpointsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListEndpointsRequest;
};
export declare const ListEndpointsResponse: {
    $type: "yandex.cloud.datatransfer.v1.ListEndpointsResponse";
    encode(message: ListEndpointsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEndpointsResponse;
    fromJSON(object: any): ListEndpointsResponse;
    toJSON(message: ListEndpointsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        endpoints?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            settings?: {
                mysqlSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } | undefined;
                postgresSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } | undefined;
                ydbSource?: {
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaSource?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                } | undefined;
                mongoSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clickhouseSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } | undefined;
                mysqlTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                postgresTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                clickhouseTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } | undefined;
                ydbTarget?: {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaTarget?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                } | undefined;
                mongoTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        endpoints?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            settings?: {
                mysqlSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } | undefined;
                postgresSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } | undefined;
                ydbSource?: {
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaSource?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                } | undefined;
                mongoSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clickhouseSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } | undefined;
                mysqlTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                postgresTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                clickhouseTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } | undefined;
                ydbTarget?: {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaTarget?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                } | undefined;
                mongoTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            settings?: {
                mysqlSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } | undefined;
                postgresSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } | undefined;
                ydbSource?: {
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaSource?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                } | undefined;
                mongoSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clickhouseSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } | undefined;
                mysqlTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                postgresTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                clickhouseTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } | undefined;
                ydbTarget?: {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaTarget?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                } | undefined;
                mongoTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["endpoints"][number]["labels"], string | number>, never>) | undefined;
            settings?: ({
                mysqlSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } | undefined;
                postgresSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } | undefined;
                ydbSource?: {
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaSource?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                } | undefined;
                mongoSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clickhouseSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } | undefined;
                mysqlTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                postgresTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                clickhouseTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } | undefined;
                ydbTarget?: {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaTarget?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                } | undefined;
                mongoTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
            } & {
                mysqlSource?: ({
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } & {
                    connection?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } & {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
                    objectTransferSettings?: ({
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } & {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
                postgresSource?: ({
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } & {
                    connection?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } & {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
                    objectTransferSettings?: ({
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } & {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
                ydbSource?: ({
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & {
                    paths?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
                kafkaSource?: ({
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    topicName?: string | undefined;
                    auth?: ({
                        sasl?: {
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } | undefined;
                        noAuth?: {} | undefined;
                    } & {
                        sasl?: ({
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & {
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
                    parser?: ({
                        jsonParser?: {
                            dataSchema?: {
                                fields?: {
                                    fields?: {
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[] | undefined;
                                } & {
                                    fields?: ({
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[] & ({
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    } & {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                        auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                        cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
                        tskvParser?: ({
                            dataSchema?: {
                                fields?: {
                                    fields?: {
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[] | undefined;
                                } & {
                                    fields?: ({
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[] & ({
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    } & {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
                mongoSource?: ({
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } & {
                    connection?: ({
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } & {
                        connectionOptions?: ({
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } & {
                            mdbClusterId?: string | undefined;
                            onPremise?: ({
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } & {
                                port?: number | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: ({
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] & ({
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    } & {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["collections"], "$type" | keyof {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[]>, never>) | undefined;
                    excludedCollections?: ({
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] & ({
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    } & {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
                clickhouseSource?: ({
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } & {
                    connection?: ({
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        connectionOptions?: ({
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } & {
                            mdbClusterId?: string | undefined;
                            onPremise?: ({
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } & {
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
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: ({
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] & ({
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                } & {
                                    name?: string | undefined;
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
                mysqlTarget?: ({
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & {
                    connection?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } & {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
                postgresTarget?: ({
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & {
                    connection?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } & {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
                clickhouseTarget?: ({
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } & {
                    connection?: ({
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        connectionOptions?: ({
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } & {
                            mdbClusterId?: string | undefined;
                            onPremise?: ({
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } & {
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
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: ({
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] & ({
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                } & {
                                    name?: string | undefined;
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: ({
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] & ({
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    } & {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[]>, never>) | undefined;
                    sharding?: ({
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } & {
                        columnValueHash?: ({
                            columnName?: string | undefined;
                        } & {
                            columnName?: string | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
                        customMapping?: ({
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } & {
                            columnName?: string | undefined;
                            mapping?: ({
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] & ({
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            } & {
                                columnValue?: ({
                                    stringValue?: string | undefined;
                                } & {
                                    stringValue?: string | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                                shardName?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                        transferId?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
                ydbTarget?: ({
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
                kafkaTarget?: ({
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    auth?: ({
                        sasl?: {
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } | undefined;
                        noAuth?: {} | undefined;
                    } & {
                        sasl?: ({
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & {
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                        topicPrefix?: string | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                        serializerAuto?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                        serializerJson?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                                value?: string | undefined;
                                key?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
                mongoTarget?: ({
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & {
                    connection?: ({
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } & {
                        connectionOptions?: ({
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } & {
                            mdbClusterId?: string | undefined;
                            onPremise?: ({
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } & {
                                port?: number | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["endpoints"][number]["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
            } & Record<Exclude<keyof I["endpoints"][number]["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
        } & Record<Exclude<keyof I["endpoints"][number], "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>)[] & Record<Exclude<keyof I["endpoints"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            settings?: {
                mysqlSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: string[] | undefined;
                    excludeTablesRegex?: string[] | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                } | undefined;
                postgresSource?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    objectTransferSettings?: {
                        function?: import("./endpoint/common").ObjectTransferStage | undefined;
                        type?: import("./endpoint/common").ObjectTransferStage | undefined;
                        view?: import("./endpoint/common").ObjectTransferStage | undefined;
                        index?: import("./endpoint/common").ObjectTransferStage | undefined;
                        trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                        table?: import("./endpoint/common").ObjectTransferStage | undefined;
                        primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                        fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                        constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                        materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                        rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                        collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                        policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                        cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                    } | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } | undefined;
                ydbSource?: {
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaSource?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                                        type?: import("./endpoint/common").ColumnType | undefined;
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
                } | undefined;
                mongoSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    secondaryPreferredMode?: boolean | undefined;
                    collections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                    excludedCollections?: {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clickhouseSource?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    includeTables?: string[] | undefined;
                    excludeTables?: string[] | undefined;
                } | undefined;
                mysqlTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                postgresTarget?: {
                    connection?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            subnetId?: string | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
                clickhouseTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                httpPort?: number | undefined;
                                nativePort?: number | undefined;
                                shards?: {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[] | undefined;
                            } | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                    clickhouseClusterName?: string | undefined;
                    altNames?: {
                        fromName?: string | undefined;
                        toName?: string | undefined;
                    }[] | undefined;
                    sharding?: {
                        columnValueHash?: {
                            columnName?: string | undefined;
                        } | undefined;
                        customMapping?: {
                            columnName?: string | undefined;
                            mapping?: {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        transferId?: {} | undefined;
                    } | undefined;
                } | undefined;
                ydbTarget?: {
                    path?: string | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } | undefined;
                kafkaTarget?: {
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
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                } | undefined;
                mongoTarget?: {
                    connection?: {
                        connectionOptions?: {
                            mdbClusterId?: string | undefined;
                            onPremise?: {
                                port?: number | undefined;
                                hosts?: string[] | undefined;
                                tlsMode?: {
                                    enabled?: {
                                        caCertificate?: string | undefined;
                                    } | undefined;
                                    disabled?: {} | undefined;
                                } | undefined;
                                replicaSet?: string | undefined;
                            } | undefined;
                            user?: string | undefined;
                            password?: {
                                raw?: string | undefined;
                            } | undefined;
                            authSource?: string | undefined;
                        } | undefined;
                    } | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "endpoints">, never>>(object: I): ListEndpointsResponse;
};
export declare const CreateEndpointRequest: {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest";
    encode(message: CreateEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateEndpointRequest;
    fromJSON(object: any): CreateEndpointRequest;
    toJSON(message: CreateEndpointRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        settings?: {
            mysqlSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } | undefined;
            postgresSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } | undefined;
            ydbSource?: {
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaSource?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
            } | undefined;
            mongoSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } | undefined;
            clickhouseSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } | undefined;
            mysqlTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            postgresTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            clickhouseTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } | undefined;
            ydbTarget?: {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaTarget?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
            } | undefined;
            mongoTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        settings?: ({
            mysqlSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } | undefined;
            postgresSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } | undefined;
            ydbSource?: {
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaSource?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
            } | undefined;
            mongoSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } | undefined;
            clickhouseSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } | undefined;
            mysqlTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            postgresTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            clickhouseTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } | undefined;
            ydbTarget?: {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaTarget?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
            } | undefined;
            mongoTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
        } & {
            mysqlSource?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                timezone?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
                objectTransferSettings?: ({
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
            postgresSource?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
                objectTransferSettings?: ({
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                includeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                excludeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
            ydbSource?: ({
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & {
                paths?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
            kafkaSource?: ({
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                topicName?: string | undefined;
                auth?: ({
                    sasl?: {
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                    noAuth?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
                parser?: ({
                    jsonParser?: {
                        dataSchema?: {
                            fields?: {
                                fields?: {
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] | undefined;
                            } & {
                                fields?: ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] & ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                            jsonFields?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                        nullKeysAllowed?: boolean | undefined;
                        addRestColumn?: boolean | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                    auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                    cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
                    tskvParser?: ({
                        dataSchema?: {
                            fields?: {
                                fields?: {
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] | undefined;
                            } & {
                                fields?: ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] & ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                            jsonFields?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                        nullKeysAllowed?: boolean | undefined;
                        addRestColumn?: boolean | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
            mongoSource?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } & {
                            port?: number | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            replicaSet?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        authSource?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] & ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["settings"]["mongoSource"]["collections"], "$type" | keyof {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[]>, never>) | undefined;
                excludedCollections?: ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] & ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
            clickhouseSource?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } & {
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
                                } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] & ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            } & {
                                name?: string | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                includeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                excludeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
            mysqlTarget?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
            postgresTarget?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
            clickhouseTarget?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } & {
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
                                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] & ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            } & {
                                name?: string | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: ({
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] & ({
                    fromName?: string | undefined;
                    toName?: string | undefined;
                } & {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[]>, never>) | undefined;
                sharding?: ({
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } & {
                    columnValueHash?: ({
                        columnName?: string | undefined;
                    } & {
                        columnName?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
                    customMapping?: ({
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } & {
                        columnName?: string | undefined;
                        mapping?: ({
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] & ({
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        } & {
                            columnValue?: ({
                                stringValue?: string | undefined;
                            } & {
                                stringValue?: string | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                            shardName?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                    transferId?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
            ydbTarget?: ({
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
            kafkaTarget?: ({
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                auth?: ({
                    sasl?: {
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                    noAuth?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                    topicPrefix?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                    serializerAuto?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                    serializerJson?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                            value?: string | undefined;
                            key?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
            mongoTarget?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } & {
                            port?: number | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            replicaSet?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        authSource?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "settings">, never>>(object: I): CreateEndpointRequest;
};
export declare const CreateEndpointRequest_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointRequest.LabelsEntry";
    encode(message: CreateEndpointRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateEndpointRequest_LabelsEntry;
    fromJSON(object: any): CreateEndpointRequest_LabelsEntry;
    toJSON(message: CreateEndpointRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateEndpointRequest_LabelsEntry;
};
export declare const CreateEndpointMetadata: {
    $type: "yandex.cloud.datatransfer.v1.CreateEndpointMetadata";
    encode(message: CreateEndpointMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateEndpointMetadata;
    fromJSON(object: any): CreateEndpointMetadata;
    toJSON(message: CreateEndpointMetadata): unknown;
    fromPartial<I extends {
        endpointId?: string | undefined;
    } & {
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "endpointId">, never>>(object: I): CreateEndpointMetadata;
};
export declare const UpdateEndpointRequest: {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest";
    encode(message: UpdateEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateEndpointRequest;
    fromJSON(object: any): UpdateEndpointRequest;
    toJSON(message: UpdateEndpointRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        settings?: {
            mysqlSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } | undefined;
            postgresSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } | undefined;
            ydbSource?: {
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaSource?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
            } | undefined;
            mongoSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } | undefined;
            clickhouseSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } | undefined;
            mysqlTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            postgresTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            clickhouseTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } | undefined;
            ydbTarget?: {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaTarget?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
            } | undefined;
            mongoTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
        } | undefined;
        endpointId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        settings?: ({
            mysqlSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } | undefined;
            postgresSource?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } | undefined;
            ydbSource?: {
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaSource?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
            } | undefined;
            mongoSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } | undefined;
            clickhouseSource?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } | undefined;
            mysqlTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            postgresTarget?: {
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
            clickhouseTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } | undefined;
            ydbTarget?: {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } | undefined;
            kafkaTarget?: {
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
            } | undefined;
            mongoTarget?: {
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } | undefined;
        } & {
            mysqlSource?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: string[] | undefined;
                excludeTablesRegex?: string[] | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                timezone?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
                objectTransferSettings?: ({
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & {
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    routine?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    tables?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
            postgresSource?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                objectTransferSettings?: {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
                objectTransferSettings?: ({
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & {
                    function?: import("./endpoint/common").ObjectTransferStage | undefined;
                    type?: import("./endpoint/common").ObjectTransferStage | undefined;
                    view?: import("./endpoint/common").ObjectTransferStage | undefined;
                    index?: import("./endpoint/common").ObjectTransferStage | undefined;
                    trigger?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequence?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceOwnedBy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    sequenceSet?: import("./endpoint/common").ObjectTransferStage | undefined;
                    table?: import("./endpoint/common").ObjectTransferStage | undefined;
                    primaryKey?: import("./endpoint/common").ObjectTransferStage | undefined;
                    fkConstraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    defaultValues?: import("./endpoint/common").ObjectTransferStage | undefined;
                    constraint?: import("./endpoint/common").ObjectTransferStage | undefined;
                    materializedView?: import("./endpoint/common").ObjectTransferStage | undefined;
                    rule?: import("./endpoint/common").ObjectTransferStage | undefined;
                    collation?: import("./endpoint/common").ObjectTransferStage | undefined;
                    policy?: import("./endpoint/common").ObjectTransferStage | undefined;
                    cast?: import("./endpoint/common").ObjectTransferStage | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                includeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                excludeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                slotByteLagLimit?: number | undefined;
                serviceSchema?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
            ydbSource?: ({
                paths?: string[] | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & {
                paths?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
            kafkaSource?: ({
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                topicName?: string | undefined;
                auth?: ({
                    sasl?: {
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                    noAuth?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
                parser?: ({
                    jsonParser?: {
                        dataSchema?: {
                            fields?: {
                                fields?: {
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] | undefined;
                            } & {
                                fields?: ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] & ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                            jsonFields?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                        nullKeysAllowed?: boolean | undefined;
                        addRestColumn?: boolean | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                    auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                    cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
                    tskvParser?: ({
                        dataSchema?: {
                            fields?: {
                                fields?: {
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
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
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] | undefined;
                            } & {
                                fields?: ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[] & ({
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                    type?: import("./endpoint/common").ColumnType | undefined;
                                    name?: string | undefined;
                                    key?: boolean | undefined;
                                    path?: string | undefined;
                                    required?: boolean | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                            jsonFields?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                        nullKeysAllowed?: boolean | undefined;
                        addRestColumn?: boolean | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
            mongoSource?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
                excludedCollections?: {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } & {
                            port?: number | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            replicaSet?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        authSource?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                secondaryPreferredMode?: boolean | undefined;
                collections?: ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] & ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["settings"]["mongoSource"]["collections"], "$type" | keyof {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[]>, never>) | undefined;
                excludedCollections?: ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[] & ({
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                    databaseName?: string | undefined;
                    collectionName?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
            clickhouseSource?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                includeTables?: string[] | undefined;
                excludeTables?: string[] | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } & {
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
                                } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] & ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            } & {
                                name?: string | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                includeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                excludeTables?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
            mysqlTarget?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                serviceDatabase?: string | undefined;
                user?: string | undefined;
                timezone?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                sqlMode?: string | undefined;
                skipConstraintChecks?: boolean | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
            postgresTarget?: ({
                connection?: {
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: {
                    raw?: string | undefined;
                } | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    mdbClusterId?: string | undefined;
                    onPremise?: {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    mdbClusterId?: string | undefined;
                    onPremise?: ({
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: string[] | undefined;
                        tlsMode?: {
                            enabled?: {
                                caCertificate?: string | undefined;
                            } | undefined;
                            disabled?: {} | undefined;
                        } | undefined;
                    } & {
                        port?: number | undefined;
                        subnetId?: string | undefined;
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                user?: string | undefined;
                password?: ({
                    raw?: string | undefined;
                } & {
                    raw?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
            clickhouseTarget?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] | undefined;
                sharding?: {
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] | undefined;
                        } & {
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
                                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            httpPort?: number | undefined;
                            nativePort?: number | undefined;
                            shards?: ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[] & ({
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            } & {
                                name?: string | undefined;
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                name?: string | undefined;
                                hosts?: string[] | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                cleanupPolicy?: import("./endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
                clickhouseClusterName?: string | undefined;
                altNames?: ({
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[] & ({
                    fromName?: string | undefined;
                    toName?: string | undefined;
                } & {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
                    fromName?: string | undefined;
                    toName?: string | undefined;
                }[]>, never>) | undefined;
                sharding?: ({
                    columnValueHash?: {
                        columnName?: string | undefined;
                    } | undefined;
                    customMapping?: {
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    transferId?: {} | undefined;
                } & {
                    columnValueHash?: ({
                        columnName?: string | undefined;
                    } & {
                        columnName?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
                    customMapping?: ({
                        columnName?: string | undefined;
                        mapping?: {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] | undefined;
                    } & {
                        columnName?: string | undefined;
                        mapping?: ({
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[] & ({
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        } & {
                            columnValue?: ({
                                stringValue?: string | undefined;
                            } & {
                                stringValue?: string | undefined;
                            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                            shardName?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                            columnValue?: {
                                stringValue?: string | undefined;
                            } | undefined;
                            shardName?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                    transferId?: ({} & {} & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
            ydbTarget?: ({
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
            kafkaTarget?: ({
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
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
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
                            } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                auth?: ({
                    sasl?: {
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                    noAuth?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                    topicPrefix?: string | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                    serializerAuto?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                    serializerJson?: ({} & {} & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                            value?: string | undefined;
                            key?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
            } & Record<Exclude<keyof I["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
            mongoTarget?: ({
                connection?: {
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } | undefined;
                subnetId?: string | undefined;
                securityGroups?: string[] | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & {
                connection?: ({
                    connectionOptions?: {
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } | undefined;
                } & {
                    connectionOptions?: ({
                        mdbClusterId?: string | undefined;
                        onPremise?: {
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } | undefined;
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        authSource?: string | undefined;
                    } & {
                        mdbClusterId?: string | undefined;
                        onPremise?: ({
                            port?: number | undefined;
                            hosts?: string[] | undefined;
                            tlsMode?: {
                                enabled?: {
                                    caCertificate?: string | undefined;
                                } | undefined;
                                disabled?: {} | undefined;
                            } | undefined;
                            replicaSet?: string | undefined;
                        } & {
                            port?: number | undefined;
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            replicaSet?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        authSource?: string | undefined;
                    } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                } & Record<Exclude<keyof I["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                subnetId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
            } & Record<Exclude<keyof I["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "settings" | "endpointId">, never>>(object: I): UpdateEndpointRequest;
};
export declare const UpdateEndpointRequest_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointRequest.LabelsEntry";
    encode(message: UpdateEndpointRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateEndpointRequest_LabelsEntry;
    fromJSON(object: any): UpdateEndpointRequest_LabelsEntry;
    toJSON(message: UpdateEndpointRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateEndpointRequest_LabelsEntry;
};
export declare const UpdateEndpointMetadata: {
    $type: "yandex.cloud.datatransfer.v1.UpdateEndpointMetadata";
    encode(message: UpdateEndpointMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateEndpointMetadata;
    fromJSON(object: any): UpdateEndpointMetadata;
    toJSON(message: UpdateEndpointMetadata): unknown;
    fromPartial<I extends {
        endpointId?: string | undefined;
    } & {
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "endpointId">, never>>(object: I): UpdateEndpointMetadata;
};
export declare const DeleteEndpointRequest: {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointRequest";
    encode(message: DeleteEndpointRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteEndpointRequest;
    fromJSON(object: any): DeleteEndpointRequest;
    toJSON(message: DeleteEndpointRequest): unknown;
    fromPartial<I extends {
        endpointId?: string | undefined;
    } & {
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "endpointId">, never>>(object: I): DeleteEndpointRequest;
};
export declare const DeleteEndpointMetadata: {
    $type: "yandex.cloud.datatransfer.v1.DeleteEndpointMetadata";
    encode(message: DeleteEndpointMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteEndpointMetadata;
    fromJSON(object: any): DeleteEndpointMetadata;
    toJSON(message: DeleteEndpointMetadata): unknown;
    fromPartial<I extends {
        endpointId?: string | undefined;
    } & {
        endpointId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "endpointId">, never>>(object: I): DeleteEndpointMetadata;
};
export declare const EndpointServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEndpointRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEndpointRequest;
        readonly responseSerialize: (value: Endpoint) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Endpoint;
    };
    readonly list: {
        readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListEndpointsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListEndpointsRequest;
        readonly responseSerialize: (value: ListEndpointsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListEndpointsResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEndpointRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEndpointRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEndpointRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEndpointRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.datatransfer.v1.EndpointService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEndpointRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEndpointRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface EndpointServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetEndpointRequest, Endpoint>;
    list: handleUnaryCall<ListEndpointsRequest, ListEndpointsResponse>;
    create: handleUnaryCall<CreateEndpointRequest, Operation>;
    update: handleUnaryCall<UpdateEndpointRequest, Operation>;
    delete: handleUnaryCall<DeleteEndpointRequest, Operation>;
}
export interface EndpointServiceClient extends Client {
    get(request: GetEndpointRequest, callback: (error: ServiceError | null, response: Endpoint) => void): ClientUnaryCall;
    get(request: GetEndpointRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Endpoint) => void): ClientUnaryCall;
    get(request: GetEndpointRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Endpoint) => void): ClientUnaryCall;
    list(request: ListEndpointsRequest, callback: (error: ServiceError | null, response: ListEndpointsResponse) => void): ClientUnaryCall;
    list(request: ListEndpointsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListEndpointsResponse) => void): ClientUnaryCall;
    list(request: ListEndpointsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListEndpointsResponse) => void): ClientUnaryCall;
    create(request: CreateEndpointRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateEndpointRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateEndpointRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateEndpointRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateEndpointRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateEndpointRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteEndpointRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteEndpointRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteEndpointRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const EndpointServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): EndpointServiceClient;
    service: typeof EndpointServiceService;
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
