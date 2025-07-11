/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { TransferType, Transfer } from "../../../../yandex/cloud/datatransfer/v1/transfer";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1";
export interface CreateTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest";
    sourceId: string;
    targetId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    folderId: string;
    type: TransferType;
}
export interface CreateTransferRequest_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateTransferMetadata {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata";
    transferId: string;
}
export interface UpdateTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest";
    /** Identifier of the transfer to be updated. */
    transferId: string;
    /** The new description for the transfer. */
    description: string;
    labels: {
        [key: string]: string;
    };
    /** The new transfer name. Must be unique within the folder. */
    name: string;
    /**
     * Field mask specifying transfer fields to be updated. Semantics for this field is
     * described here:
     * <https://pkg.go.dev/google.golang.org/protobuf/types/known/fieldmaskpb#FieldMask>
     * The only exception: if the repeated field is specified in the mask, then
     * the new value replaces the old one instead of being appended to the old one.
     */
    updateMask?: FieldMask;
}
export interface UpdateTransferRequest_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateTransferMetadata {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata";
    transferId: string;
}
export interface DeleteTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest";
    transferId: string;
}
export interface DeleteTransferMetadata {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata";
    transferId: string;
}
export interface ListTransfersRequest {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest";
    /** Identifier of the folder containing the transfers to be listed. */
    folderId: string;
    /**
     * The maximum number of transfers to be sent in the response message. If the
     * folder contains more transfers than `page_size`, `next_page_token` will be
     * included
     * in the response message. Include it into the subsequent `ListTransfersRequest`
     * to
     * fetch the next page. Defaults to `100` if not specified. The maximum allowed
     * value
     * for this field is `500`.
     */
    pageSize: number;
    /**
     * Opaque value identifying the transfers page to be fetched. Should be empty in
     * the first `ListTransfersRequest`. Subsequent requests should have this field
     * filled
     * with the `next_page_token` from the previous `ListTransfersResponse`.
     */
    pageToken: string;
}
export interface ListTransfersResponse {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse";
    /**
     * The list of transfers. If there are more transfers in the folder, then
     * `next_page_token` is a non-empty string to be included into the subsequent
     * `ListTransfersRequest` to fetch the next transfers page.
     */
    transfers: Transfer[];
    /**
     * Opaque value identifying the next transfers page. This field is empty if there
     * are no more transfers in the folder. Otherwise it is non-empty and should be
     * included in the subsequent `ListTransfersRequest` to fetch the next transfers
     * page.
     */
    nextPageToken: string;
}
export interface GetTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.GetTransferRequest";
    transferId: string;
}
export interface DeactivateTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest";
    transferId: string;
}
export interface DeactivateTransferMetadata {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata";
    transferId: string;
}
export interface ActivateTransferRequest {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest";
    transferId: string;
}
export interface ActivateTransferMetadata {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata";
    transferId: string;
}
export declare const CreateTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest";
    encode(message: CreateTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferRequest;
    fromJSON(object: any): CreateTransferRequest;
    toJSON(message: CreateTransferRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        type?: TransferType | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        sourceId?: string | undefined;
        targetId?: string | undefined;
    } & {
        description?: string | undefined;
        type?: TransferType | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        sourceId?: string | undefined;
        targetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "type" | "name" | "folderId" | "labels" | "sourceId" | "targetId">, never>>(object: I): CreateTransferRequest;
};
export declare const CreateTransferRequest_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferRequest.LabelsEntry";
    encode(message: CreateTransferRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferRequest_LabelsEntry;
    fromJSON(object: any): CreateTransferRequest_LabelsEntry;
    toJSON(message: CreateTransferRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateTransferRequest_LabelsEntry;
};
export declare const CreateTransferMetadata: {
    $type: "yandex.cloud.datatransfer.v1.CreateTransferMetadata";
    encode(message: CreateTransferMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferMetadata;
    fromJSON(object: any): CreateTransferMetadata;
    toJSON(message: CreateTransferMetadata): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): CreateTransferMetadata;
};
export declare const UpdateTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest";
    encode(message: UpdateTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTransferRequest;
    fromJSON(object: any): UpdateTransferRequest;
    toJSON(message: UpdateTransferRequest): unknown;
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
        transferId?: string | undefined;
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
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "transferId">, never>>(object: I): UpdateTransferRequest;
};
export declare const UpdateTransferRequest_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferRequest.LabelsEntry";
    encode(message: UpdateTransferRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTransferRequest_LabelsEntry;
    fromJSON(object: any): UpdateTransferRequest_LabelsEntry;
    toJSON(message: UpdateTransferRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateTransferRequest_LabelsEntry;
};
export declare const UpdateTransferMetadata: {
    $type: "yandex.cloud.datatransfer.v1.UpdateTransferMetadata";
    encode(message: UpdateTransferMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTransferMetadata;
    fromJSON(object: any): UpdateTransferMetadata;
    toJSON(message: UpdateTransferMetadata): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): UpdateTransferMetadata;
};
export declare const DeleteTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferRequest";
    encode(message: DeleteTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTransferRequest;
    fromJSON(object: any): DeleteTransferRequest;
    toJSON(message: DeleteTransferRequest): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): DeleteTransferRequest;
};
export declare const DeleteTransferMetadata: {
    $type: "yandex.cloud.datatransfer.v1.DeleteTransferMetadata";
    encode(message: DeleteTransferMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTransferMetadata;
    fromJSON(object: any): DeleteTransferMetadata;
    toJSON(message: DeleteTransferMetadata): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): DeleteTransferMetadata;
};
export declare const ListTransfersRequest: {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersRequest";
    encode(message: ListTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTransfersRequest;
    fromJSON(object: any): ListTransfersRequest;
    toJSON(message: ListTransfersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "folderId">, never>>(object: I): ListTransfersRequest;
};
export declare const ListTransfersResponse: {
    $type: "yandex.cloud.datatransfer.v1.ListTransfersResponse";
    encode(message: ListTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTransfersResponse;
    fromJSON(object: any): ListTransfersResponse;
    toJSON(message: ListTransfersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        transfers?: {
            description?: string | undefined;
            id?: string | undefined;
            type?: TransferType | undefined;
            name?: string | undefined;
            status?: import("../../../../yandex/cloud/datatransfer/v1/transfer").TransferStatus | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
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
            } | undefined;
            source?: {
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
            } | undefined;
            warning?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        transfers?: ({
            description?: string | undefined;
            id?: string | undefined;
            type?: TransferType | undefined;
            name?: string | undefined;
            status?: import("../../../../yandex/cloud/datatransfer/v1/transfer").TransferStatus | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
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
            } | undefined;
            source?: {
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
            } | undefined;
            warning?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            type?: TransferType | undefined;
            name?: string | undefined;
            status?: import("../../../../yandex/cloud/datatransfer/v1/transfer").TransferStatus | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
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
            } | undefined;
            source?: {
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
            } | undefined;
            warning?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            type?: TransferType | undefined;
            name?: string | undefined;
            status?: import("../../../../yandex/cloud/datatransfer/v1/transfer").TransferStatus | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["labels"], string | number>, never>) | undefined;
            target?: ({
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
                } & Record<Exclude<keyof I["transfers"][number]["target"]["labels"], string | number>, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        serviceDatabase?: string | undefined;
                        user?: string | undefined;
                        includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                        timezone?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                        includeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                        slotByteLagLimit?: number | undefined;
                        serviceSchema?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
                    ydbSource?: ({
                        paths?: string[] | undefined;
                        subnetId?: string | undefined;
                        serviceAccountId?: string | undefined;
                        securityGroups?: string[] | undefined;
                        database?: string | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & {
                        paths?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                        subnetId?: string | undefined;
                        serviceAccountId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                                mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                            noAuth?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                            type?: import("./endpoint/common").ColumnType | undefined;
                                            name?: string | undefined;
                                            key?: boolean | undefined;
                                            path?: string | undefined;
                                            required?: boolean | undefined;
                                        }[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                    jsonFields?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                                nullKeysAllowed?: boolean | undefined;
                                addRestColumn?: boolean | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                            auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                            cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                            type?: import("./endpoint/common").ColumnType | undefined;
                                            name?: string | undefined;
                                            key?: boolean | undefined;
                                            path?: string | undefined;
                                            required?: boolean | undefined;
                                        }[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                    jsonFields?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                                nullKeysAllowed?: boolean | undefined;
                                addRestColumn?: boolean | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                    replicaSet?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                                authSource?: string | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["collections"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                            databaseName?: string | undefined;
                            collectionName?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                        hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                        name?: string | undefined;
                                        hosts?: string[] | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                                database?: string | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        includeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        serviceDatabase?: string | undefined;
                        user?: string | undefined;
                        timezone?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                        sqlMode?: string | undefined;
                        skipConstraintChecks?: boolean | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                        hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                        name?: string | undefined;
                                        hosts?: string[] | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                                database?: string | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
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
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                                    shardName?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                                    columnValue?: {
                                        stringValue?: string | undefined;
                                    } | undefined;
                                    shardName?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                            transferId?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
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
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                                mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                            noAuth?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                            topicPrefix?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                            serializerAuto?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                            serializerJson?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                                    value?: string | undefined;
                                    key?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                    replicaSet?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                                authSource?: string | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
                } & Record<Exclude<keyof I["transfers"][number]["target"]["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["target"], "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>) | undefined;
            source?: ({
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
                } & Record<Exclude<keyof I["transfers"][number]["source"]["labels"], string | number>, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        serviceDatabase?: string | undefined;
                        user?: string | undefined;
                        includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                        timezone?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                        includeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                        slotByteLagLimit?: number | undefined;
                        serviceSchema?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
                    ydbSource?: ({
                        paths?: string[] | undefined;
                        subnetId?: string | undefined;
                        serviceAccountId?: string | undefined;
                        securityGroups?: string[] | undefined;
                        database?: string | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & {
                        paths?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                        subnetId?: string | undefined;
                        serviceAccountId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                                mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                            noAuth?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                            type?: import("./endpoint/common").ColumnType | undefined;
                                            name?: string | undefined;
                                            key?: boolean | undefined;
                                            path?: string | undefined;
                                            required?: boolean | undefined;
                                        }[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                    jsonFields?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                                nullKeysAllowed?: boolean | undefined;
                                addRestColumn?: boolean | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                            auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                            cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                            type?: import("./endpoint/common").ColumnType | undefined;
                                            name?: string | undefined;
                                            key?: boolean | undefined;
                                            path?: string | undefined;
                                            required?: boolean | undefined;
                                        }[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                    jsonFields?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                                nullKeysAllowed?: boolean | undefined;
                                addRestColumn?: boolean | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                    replicaSet?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                                authSource?: string | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["collections"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                            databaseName?: string | undefined;
                            collectionName?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                        hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                        name?: string | undefined;
                                        hosts?: string[] | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                                database?: string | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        includeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                        excludeTables?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        serviceDatabase?: string | undefined;
                        user?: string | undefined;
                        timezone?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                        sqlMode?: string | undefined;
                        skipConstraintChecks?: boolean | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                        hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                        name?: string | undefined;
                                        hosts?: string[] | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                                database?: string | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
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
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                                    shardName?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                                    columnValue?: {
                                        stringValue?: string | undefined;
                                    } | undefined;
                                    shardName?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                            transferId?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
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
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                        instance?: string | undefined;
                        saKeyContent?: string | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                                mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                            noAuth?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                            topicPrefix?: string | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                            serializerAuto?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                            serializerJson?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                                    value?: string | undefined;
                                    key?: string | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                        disabled?: ({} & {} & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                    replicaSet?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                                user?: string | undefined;
                                password?: ({
                                    raw?: string | undefined;
                                } & {
                                    raw?: string | undefined;
                                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                                authSource?: string | undefined;
                            } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                        } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                        subnetId?: string | undefined;
                        securityGroups?: (string[] & string[] & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                        database?: string | undefined;
                        cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                    } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
                } & Record<Exclude<keyof I["transfers"][number]["source"]["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
            } & Record<Exclude<keyof I["transfers"][number]["source"], "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>) | undefined;
            warning?: string | undefined;
        } & Record<Exclude<keyof I["transfers"][number], "$type" | "description" | "id" | "type" | "name" | "status" | "folderId" | "labels" | "target" | "source" | "warning">, never>)[] & Record<Exclude<keyof I["transfers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            type?: TransferType | undefined;
            name?: string | undefined;
            status?: import("../../../../yandex/cloud/datatransfer/v1/transfer").TransferStatus | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            target?: {
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
            } | undefined;
            source?: {
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
            } | undefined;
            warning?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "transfers">, never>>(object: I): ListTransfersResponse;
};
export declare const GetTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.GetTransferRequest";
    encode(message: GetTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTransferRequest;
    fromJSON(object: any): GetTransferRequest;
    toJSON(message: GetTransferRequest): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): GetTransferRequest;
};
export declare const DeactivateTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferRequest";
    encode(message: DeactivateTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateTransferRequest;
    fromJSON(object: any): DeactivateTransferRequest;
    toJSON(message: DeactivateTransferRequest): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): DeactivateTransferRequest;
};
export declare const DeactivateTransferMetadata: {
    $type: "yandex.cloud.datatransfer.v1.DeactivateTransferMetadata";
    encode(message: DeactivateTransferMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateTransferMetadata;
    fromJSON(object: any): DeactivateTransferMetadata;
    toJSON(message: DeactivateTransferMetadata): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): DeactivateTransferMetadata;
};
export declare const ActivateTransferRequest: {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferRequest";
    encode(message: ActivateTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateTransferRequest;
    fromJSON(object: any): ActivateTransferRequest;
    toJSON(message: ActivateTransferRequest): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): ActivateTransferRequest;
};
export declare const ActivateTransferMetadata: {
    $type: "yandex.cloud.datatransfer.v1.ActivateTransferMetadata";
    encode(message: ActivateTransferMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateTransferMetadata;
    fromJSON(object: any): ActivateTransferMetadata;
    toJSON(message: ActivateTransferMetadata): unknown;
    fromPartial<I extends {
        transferId?: string | undefined;
    } & {
        transferId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "transferId">, never>>(object: I): ActivateTransferMetadata;
};
export declare const TransferServiceService: {
    readonly create: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTransferRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTransferRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTransferRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly list: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTransfersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTransfersRequest;
        readonly responseSerialize: (value: ListTransfersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTransfersResponse;
    };
    readonly get: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTransferRequest;
        readonly responseSerialize: (value: Transfer) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Transfer;
    };
    readonly deactivate: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Deactivate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeactivateTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeactivateTransferRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly activate: {
        readonly path: "/yandex.cloud.datatransfer.v1.TransferService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateTransferRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateTransferRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface TransferServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<CreateTransferRequest, Operation>;
    update: handleUnaryCall<UpdateTransferRequest, Operation>;
    delete: handleUnaryCall<DeleteTransferRequest, Operation>;
    list: handleUnaryCall<ListTransfersRequest, ListTransfersResponse>;
    get: handleUnaryCall<GetTransferRequest, Transfer>;
    deactivate: handleUnaryCall<DeactivateTransferRequest, Operation>;
    activate: handleUnaryCall<ActivateTransferRequest, Operation>;
}
export interface TransferServiceClient extends Client {
    create(request: CreateTransferRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTransferRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTransferRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    list(request: ListTransfersRequest, callback: (error: ServiceError | null, response: ListTransfersResponse) => void): ClientUnaryCall;
    list(request: ListTransfersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTransfersResponse) => void): ClientUnaryCall;
    list(request: ListTransfersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTransfersResponse) => void): ClientUnaryCall;
    get(request: GetTransferRequest, callback: (error: ServiceError | null, response: Transfer) => void): ClientUnaryCall;
    get(request: GetTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Transfer) => void): ClientUnaryCall;
    get(request: GetTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Transfer) => void): ClientUnaryCall;
    deactivate(request: DeactivateTransferRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deactivate(request: DeactivateTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateTransferRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateTransferRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateTransferRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const TransferServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TransferServiceClient;
    service: typeof TransferServiceService;
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
