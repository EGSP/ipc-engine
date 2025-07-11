import _m0 from "protobufjs/minimal";
import { Endpoint } from "../../../../yandex/cloud/datatransfer/v1/endpoint";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1";
export declare enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    /** SNAPSHOT_AND_INCREMENT - Snapshot and increment */
    SNAPSHOT_AND_INCREMENT = 1,
    /** SNAPSHOT_ONLY - Snapshot */
    SNAPSHOT_ONLY = 2,
    /** INCREMENT_ONLY - Increment */
    INCREMENT_ONLY = 3,
    UNRECOGNIZED = -1
}
export declare function transferTypeFromJSON(object: any): TransferType;
export declare function transferTypeToJSON(object: TransferType): string;
export declare enum TransferStatus {
    TRANSFER_STATUS_UNSPECIFIED = 0,
    /** CREATING - Transfer does some work before running */
    CREATING = 1,
    /** CREATED - Transfer created but not started by user */
    CREATED = 2,
    /** RUNNING - Transfer currently doing replication work */
    RUNNING = 3,
    /** STOPPING - Transfer shutdown */
    STOPPING = 4,
    /** STOPPED - Transfer stopped by user */
    STOPPED = 5,
    /** ERROR - Transfer stopped by system */
    ERROR = 6,
    /** SNAPSHOTTING - Transfer copy snapshot */
    SNAPSHOTTING = 7,
    /** DONE - Transfer reach terminal phase */
    DONE = 8,
    UNRECOGNIZED = -1
}
export declare function transferStatusFromJSON(object: any): TransferStatus;
export declare function transferStatusToJSON(object: TransferStatus): string;
/** Transfer core entity */
export interface Transfer {
    $type: "yandex.cloud.datatransfer.v1.Transfer";
    id: string;
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    source?: Endpoint;
    target?: Endpoint;
    status: TransferStatus;
    type: TransferType;
    warning: string;
}
export interface Transfer_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry";
    key: string;
    value: string;
}
export declare const Transfer: {
    $type: "yandex.cloud.datatransfer.v1.Transfer";
    encode(message: Transfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Transfer;
    fromJSON(object: any): Transfer;
    toJSON(message: Transfer): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        type?: TransferType | undefined;
        name?: string | undefined;
        status?: TransferStatus | undefined;
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
        status?: TransferStatus | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
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
            } & Record<Exclude<keyof I["target"]["labels"], string | number>, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
                ydbSource?: ({
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & {
                    paths?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                        auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                        cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["collections"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                                shardName?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                        transferId?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
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
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                        topicPrefix?: string | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                        serializerAuto?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                        serializerJson?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                                value?: string | undefined;
                                key?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["target"]["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
            } & Record<Exclude<keyof I["target"]["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
        } & Record<Exclude<keyof I["target"], "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>) | undefined;
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
            } & Record<Exclude<keyof I["source"]["labels"], string | number>, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                    slotByteLagLimit?: number | undefined;
                    serviceSchema?: string | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
                ydbSource?: ({
                    paths?: string[] | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: string[] | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & {
                    paths?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
                    subnetId?: string | undefined;
                    serviceAccountId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                        auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                        cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                        type?: import("./endpoint/common").ColumnType | undefined;
                                        name?: string | undefined;
                                        key?: boolean | undefined;
                                        path?: string | undefined;
                                        required?: boolean | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                                jsonFields?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                            nullKeysAllowed?: boolean | undefined;
                            addRestColumn?: boolean | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["collections"], "$type" | keyof {
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
                    } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["mongoSource"]["excludedCollections"], "$type" | keyof {
                        databaseName?: string | undefined;
                        collectionName?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    includeTables?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
                    excludeTables?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    serviceDatabase?: string | undefined;
                    user?: string | undefined;
                    timezone?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    sqlMode?: string | undefined;
                    skipConstraintChecks?: boolean | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                                    hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                                    name?: string | undefined;
                                    hosts?: string[] | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                            database?: string | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["altNames"], "$type" | keyof {
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
                        } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                                shardName?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                                columnValue?: {
                                    stringValue?: string | undefined;
                                } | undefined;
                                shardName?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                        transferId?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
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
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/ydb").YdbCleanupPolicy | undefined;
                    instance?: string | undefined;
                    saKeyContent?: string | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
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
                                } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                            brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                            mechanism?: import("./endpoint/kafka").KafkaMechanism | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                        noAuth?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                        topicPrefix?: string | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                        serializerAuto?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                        serializerJson?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                                value?: string | undefined;
                                key?: string | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
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
                                hosts?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                                    disabled?: ({} & {} & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                                } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                                replicaSet?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                            user?: string | undefined;
                            password?: ({
                                raw?: string | undefined;
                            } & {
                                raw?: string | undefined;
                            } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                            authSource?: string | undefined;
                        } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
                    } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
                    subnetId?: string | undefined;
                    securityGroups?: (string[] & string[] & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                    database?: string | undefined;
                    cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
                } & Record<Exclude<keyof I["source"]["settings"]["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
            } & Record<Exclude<keyof I["source"]["settings"], "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>) | undefined;
        } & Record<Exclude<keyof I["source"], "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>) | undefined;
        warning?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "type" | "name" | "status" | "folderId" | "labels" | "target" | "source" | "warning">, never>>(object: I): Transfer;
};
export declare const Transfer_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.Transfer.LabelsEntry";
    encode(message: Transfer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Transfer_LabelsEntry;
    fromJSON(object: any): Transfer_LabelsEntry;
    toJSON(message: Transfer_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Transfer_LabelsEntry;
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
