import _m0 from "protobufjs/minimal";
import { MysqlSource, MysqlTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/mysql";
import { PostgresSource, PostgresTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/postgres";
import { YdbSource, YdbTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/ydb";
import { KafkaSource, KafkaTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/kafka";
import { MongoSource, MongoTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/mongo";
import { ClickhouseSource, ClickhouseTarget } from "../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1";
export interface Endpoint {
    $type: "yandex.cloud.datatransfer.v1.Endpoint";
    id: string;
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    settings?: EndpointSettings;
}
export interface Endpoint_LabelsEntry {
    $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry";
    key: string;
    value: string;
}
export interface EndpointSettings {
    $type: "yandex.cloud.datatransfer.v1.EndpointSettings";
    mysqlSource?: MysqlSource | undefined;
    postgresSource?: PostgresSource | undefined;
    ydbSource?: YdbSource | undefined;
    kafkaSource?: KafkaSource | undefined;
    mongoSource?: MongoSource | undefined;
    clickhouseSource?: ClickhouseSource | undefined;
    mysqlTarget?: MysqlTarget | undefined;
    postgresTarget?: PostgresTarget | undefined;
    clickhouseTarget?: ClickhouseTarget | undefined;
    ydbTarget?: YdbTarget | undefined;
    kafkaTarget?: KafkaTarget | undefined;
    mongoTarget?: MongoTarget | undefined;
}
export declare const Endpoint: {
    $type: "yandex.cloud.datatransfer.v1.Endpoint";
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Endpoint;
    fromJSON(object: any): Endpoint;
    toJSON(message: Endpoint): unknown;
    fromPartial<I extends {
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
                instance?: string | undefined;
                saKeyContent?: string | undefined;
            } & {
                path?: string | undefined;
                subnetId?: string | undefined;
                serviceAccountId?: string | undefined;
                securityGroups?: (string[] & string[] & Record<Exclude<keyof I["settings"]["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
                database?: string | undefined;
                cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                    } | undefined;
                    noAuth?: {} | undefined;
                } & {
                    sasl?: ({
                        user?: string | undefined;
                        password?: {
                            raw?: string | undefined;
                        } | undefined;
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                    } & {
                        user?: string | undefined;
                        password?: ({
                            raw?: string | undefined;
                        } & {
                            raw?: string | undefined;
                        } & Record<Exclude<keyof I["settings"]["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                        mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "folderId" | "labels" | "settings">, never>>(object: I): Endpoint;
};
export declare const Endpoint_LabelsEntry: {
    $type: "yandex.cloud.datatransfer.v1.Endpoint.LabelsEntry";
    encode(message: Endpoint_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Endpoint_LabelsEntry;
    fromJSON(object: any): Endpoint_LabelsEntry;
    toJSON(message: Endpoint_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Endpoint_LabelsEntry;
};
export declare const EndpointSettings: {
    $type: "yandex.cloud.datatransfer.v1.EndpointSettings";
    encode(message: EndpointSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndpointSettings;
    fromJSON(object: any): EndpointSettings;
    toJSON(message: EndpointSettings): unknown;
    fromPartial<I extends {
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
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
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
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["mysqlSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["mysqlSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["mysqlSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                } & Record<Exclude<keyof I["mysqlSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
            } & Record<Exclude<keyof I["mysqlSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["mysqlSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            serviceDatabase?: string | undefined;
            user?: string | undefined;
            includeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["mysqlSource"]["includeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
            excludeTablesRegex?: (string[] & string[] & Record<Exclude<keyof I["mysqlSource"]["excludeTablesRegex"], "$type" | keyof string[]>, never>) | undefined;
            timezone?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["mysqlSource"]["password"], "$type" | "raw">, never>) | undefined;
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
            } & Record<Exclude<keyof I["mysqlSource"]["objectTransferSettings"], "$type" | "view" | "routine" | "trigger" | "tables">, never>) | undefined;
        } & Record<Exclude<keyof I["mysqlSource"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "includeTablesRegex" | "excludeTablesRegex" | "timezone" | "password" | "objectTransferSettings">, never>) | undefined;
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
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["postgresSource"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["postgresSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["postgresSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["postgresSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                } & Record<Exclude<keyof I["postgresSource"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
            } & Record<Exclude<keyof I["postgresSource"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["postgresSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            user?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["postgresSource"]["password"], "$type" | "raw">, never>) | undefined;
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
            } & Record<Exclude<keyof I["postgresSource"]["objectTransferSettings"], "function" | "$type" | "type" | "view" | "index" | "trigger" | "sequence" | "sequenceOwnedBy" | "sequenceSet" | "table" | "primaryKey" | "fkConstraint" | "defaultValues" | "constraint" | "materializedView" | "rule" | "collation" | "policy" | "cast">, never>) | undefined;
            includeTables?: (string[] & string[] & Record<Exclude<keyof I["postgresSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
            excludeTables?: (string[] & string[] & Record<Exclude<keyof I["postgresSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
            slotByteLagLimit?: number | undefined;
            serviceSchema?: string | undefined;
        } & Record<Exclude<keyof I["postgresSource"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "objectTransferSettings" | "includeTables" | "excludeTables" | "slotByteLagLimit" | "serviceSchema">, never>) | undefined;
        ydbSource?: ({
            paths?: string[] | undefined;
            subnetId?: string | undefined;
            serviceAccountId?: string | undefined;
            securityGroups?: string[] | undefined;
            database?: string | undefined;
            instance?: string | undefined;
            saKeyContent?: string | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["ydbSource"]["paths"], "$type" | keyof string[]>, never>) | undefined;
            subnetId?: string | undefined;
            serviceAccountId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["ydbSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            instance?: string | undefined;
            saKeyContent?: string | undefined;
        } & Record<Exclude<keyof I["ydbSource"], "$type" | "paths" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "instance" | "saKeyContent">, never>) | undefined;
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
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        } & Record<Exclude<keyof I["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["kafkaSource"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["kafkaSource"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["kafkaSource"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["kafkaSource"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaSource"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["kafkaSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            topicName?: string | undefined;
            auth?: ({
                sasl?: {
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } | undefined;
                noAuth?: {} | undefined;
            } & {
                sasl?: ({
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } & {
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["kafkaSource"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } & Record<Exclude<keyof I["kafkaSource"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                noAuth?: ({} & {} & Record<Exclude<keyof I["kafkaSource"]["auth"]["noAuth"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaSource"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
            } & Record<Exclude<keyof I["kafkaSource"]["transformer"], "$type" | "serviceAccountId" | "cloudFunction" | "numberOfRetries" | "bufferSize" | "bufferFlushInterval" | "invocationTimeout">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                type?: import("./endpoint/common").ColumnType | undefined;
                                name?: string | undefined;
                                key?: boolean | undefined;
                                path?: string | undefined;
                                required?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["kafkaSource"]["parser"]["jsonParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                        jsonFields?: string | undefined;
                    } & Record<Exclude<keyof I["kafkaSource"]["parser"]["jsonParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                    nullKeysAllowed?: boolean | undefined;
                    addRestColumn?: boolean | undefined;
                } & Record<Exclude<keyof I["kafkaSource"]["parser"]["jsonParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
                auditTrailsV1Parser?: ({} & {} & Record<Exclude<keyof I["kafkaSource"]["parser"]["auditTrailsV1Parser"], "$type">, never>) | undefined;
                cloudLoggingParser?: ({} & {} & Record<Exclude<keyof I["kafkaSource"]["parser"]["cloudLoggingParser"], "$type">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"][number], "$type" | "type" | "name" | "key" | "path" | "required">, never>)[] & Record<Exclude<keyof I["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"]["fields"], "$type" | keyof {
                                type?: import("./endpoint/common").ColumnType | undefined;
                                name?: string | undefined;
                                key?: boolean | undefined;
                                path?: string | undefined;
                                required?: boolean | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["kafkaSource"]["parser"]["tskvParser"]["dataSchema"]["fields"], "$type" | "fields">, never>) | undefined;
                        jsonFields?: string | undefined;
                    } & Record<Exclude<keyof I["kafkaSource"]["parser"]["tskvParser"]["dataSchema"], "$type" | "fields" | "jsonFields">, never>) | undefined;
                    nullKeysAllowed?: boolean | undefined;
                    addRestColumn?: boolean | undefined;
                } & Record<Exclude<keyof I["kafkaSource"]["parser"]["tskvParser"], "$type" | "dataSchema" | "nullKeysAllowed" | "addRestColumn">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaSource"]["parser"], "$type" | "jsonParser" | "auditTrailsV1Parser" | "cloudLoggingParser" | "tskvParser">, never>) | undefined;
        } & Record<Exclude<keyof I["kafkaSource"], "$type" | "connection" | "securityGroups" | "topicName" | "auth" | "transformer" | "parser">, never>) | undefined;
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
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        replicaSet?: string | undefined;
                    } & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    authSource?: string | undefined;
                } & Record<Exclude<keyof I["mongoSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
            } & Record<Exclude<keyof I["mongoSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
            subnetId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["mongoSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
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
            } & Record<Exclude<keyof I["mongoSource"]["collections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["mongoSource"]["collections"], "$type" | keyof {
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
            } & Record<Exclude<keyof I["mongoSource"]["excludedCollections"][number], "$type" | "databaseName" | "collectionName">, never>)[] & Record<Exclude<keyof I["mongoSource"]["excludedCollections"], "$type" | keyof {
                databaseName?: string | undefined;
                collectionName?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["mongoSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "secondaryPreferredMode" | "collections" | "excludedCollections">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                            name?: string | undefined;
                            hosts?: string[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                } & Record<Exclude<keyof I["clickhouseSource"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
            } & Record<Exclude<keyof I["clickhouseSource"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
            subnetId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["clickhouseSource"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            includeTables?: (string[] & string[] & Record<Exclude<keyof I["clickhouseSource"]["includeTables"], "$type" | keyof string[]>, never>) | undefined;
            excludeTables?: (string[] & string[] & Record<Exclude<keyof I["clickhouseSource"]["excludeTables"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["clickhouseSource"], "$type" | "connection" | "subnetId" | "securityGroups" | "includeTables" | "excludeTables">, never>) | undefined;
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
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["mysqlTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["mysqlTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["mysqlTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                } & Record<Exclude<keyof I["mysqlTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
            } & Record<Exclude<keyof I["mysqlTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["mysqlTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            serviceDatabase?: string | undefined;
            user?: string | undefined;
            timezone?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["mysqlTarget"]["password"], "$type" | "raw">, never>) | undefined;
            sqlMode?: string | undefined;
            skipConstraintChecks?: boolean | undefined;
            cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
        } & Record<Exclude<keyof I["mysqlTarget"], "$type" | "connection" | "securityGroups" | "database" | "serviceDatabase" | "user" | "timezone" | "password" | "sqlMode" | "skipConstraintChecks" | "cleanupPolicy">, never>) | undefined;
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
                    hosts?: (string[] & string[] & Record<Exclude<keyof I["postgresTarget"]["connection"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["postgresTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["postgresTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                } & Record<Exclude<keyof I["postgresTarget"]["connection"]["onPremise"], "$type" | "port" | "subnetId" | "hosts" | "tlsMode">, never>) | undefined;
            } & Record<Exclude<keyof I["postgresTarget"]["connection"], "$type" | "mdbClusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["postgresTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            user?: string | undefined;
            password?: ({
                raw?: string | undefined;
            } & {
                raw?: string | undefined;
            } & Record<Exclude<keyof I["postgresTarget"]["password"], "$type" | "raw">, never>) | undefined;
            cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
        } & Record<Exclude<keyof I["postgresTarget"], "$type" | "connection" | "securityGroups" | "database" | "user" | "password" | "cleanupPolicy">, never>) | undefined;
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
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
                            } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
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
                            hosts?: (string[] & string[] & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number]["hosts"], "$type" | keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"][number], "$type" | "name" | "hosts">, never>)[] & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"]["shards"], "$type" | keyof {
                            name?: string | undefined;
                            hosts?: string[] | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "tlsMode" | "httpPort" | "nativePort" | "shards">, never>) | undefined;
                    database?: string | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                } & Record<Exclude<keyof I["clickhouseTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "database" | "user" | "password">, never>) | undefined;
            } & Record<Exclude<keyof I["clickhouseTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
            subnetId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["clickhouseTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/clickhouse").ClickhouseCleanupPolicy | undefined;
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
            } & Record<Exclude<keyof I["clickhouseTarget"]["altNames"][number], "$type" | "fromName" | "toName">, never>)[] & Record<Exclude<keyof I["clickhouseTarget"]["altNames"], "$type" | keyof {
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
                } & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["columnValueHash"], "$type" | "columnName">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number]["columnValue"], "$type" | "stringValue">, never>) | undefined;
                        shardName?: string | undefined;
                    } & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["customMapping"]["mapping"][number], "$type" | "columnValue" | "shardName">, never>)[] & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["customMapping"]["mapping"], "$type" | keyof {
                        columnValue?: {
                            stringValue?: string | undefined;
                        } | undefined;
                        shardName?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["customMapping"], "$type" | "columnName" | "mapping">, never>) | undefined;
                transferId?: ({} & {} & Record<Exclude<keyof I["clickhouseTarget"]["sharding"]["transferId"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["clickhouseTarget"]["sharding"], "$type" | "columnValueHash" | "customMapping" | "transferId">, never>) | undefined;
        } & Record<Exclude<keyof I["clickhouseTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "cleanupPolicy" | "clickhouseClusterName" | "altNames" | "sharding">, never>) | undefined;
        ydbTarget?: ({
            path?: string | undefined;
            subnetId?: string | undefined;
            serviceAccountId?: string | undefined;
            securityGroups?: string[] | undefined;
            database?: string | undefined;
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
            instance?: string | undefined;
            saKeyContent?: string | undefined;
        } & {
            path?: string | undefined;
            subnetId?: string | undefined;
            serviceAccountId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["ydbTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            cleanupPolicy?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/ydb").YdbCleanupPolicy | undefined;
            instance?: string | undefined;
            saKeyContent?: string | undefined;
        } & Record<Exclude<keyof I["ydbTarget"], "$type" | "path" | "subnetId" | "serviceAccountId" | "securityGroups" | "database" | "cleanupPolicy" | "instance" | "saKeyContent">, never>) | undefined;
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
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
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
                        } & Record<Exclude<keyof I["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                        disabled?: ({} & {} & Record<Exclude<keyof I["kafkaTarget"]["connection"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                    } & Record<Exclude<keyof I["kafkaTarget"]["connection"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                    brokerUrls?: (string[] & string[] & Record<Exclude<keyof I["kafkaTarget"]["connection"]["onPremise"]["brokerUrls"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["kafkaTarget"]["connection"]["onPremise"], "$type" | "subnetId" | "tlsMode" | "brokerUrls">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaTarget"]["connection"], "$type" | "clusterId" | "onPremise">, never>) | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["kafkaTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            auth?: ({
                sasl?: {
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } | undefined;
                noAuth?: {} | undefined;
            } & {
                sasl?: ({
                    user?: string | undefined;
                    password?: {
                        raw?: string | undefined;
                    } | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } & {
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["kafkaTarget"]["auth"]["sasl"]["password"], "$type" | "raw">, never>) | undefined;
                    mechanism?: import("../../../../yandex/cloud/datatransfer/v1/endpoint/kafka").KafkaMechanism | undefined;
                } & Record<Exclude<keyof I["kafkaTarget"]["auth"]["sasl"], "$type" | "user" | "password" | "mechanism">, never>) | undefined;
                noAuth?: ({} & {} & Record<Exclude<keyof I["kafkaTarget"]["auth"]["noAuth"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaTarget"]["auth"], "$type" | "sasl" | "noAuth">, never>) | undefined;
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
                } & Record<Exclude<keyof I["kafkaTarget"]["topicSettings"]["topic"], "$type" | "topicName" | "saveTxOrder">, never>) | undefined;
                topicPrefix?: string | undefined;
            } & Record<Exclude<keyof I["kafkaTarget"]["topicSettings"], "$type" | "topic" | "topicPrefix">, never>) | undefined;
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
                serializerAuto?: ({} & {} & Record<Exclude<keyof I["kafkaTarget"]["serializer"]["serializerAuto"], "$type">, never>) | undefined;
                serializerJson?: ({} & {} & Record<Exclude<keyof I["kafkaTarget"]["serializer"]["serializerJson"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"][number], "$type" | "value" | "key">, never>)[] & Record<Exclude<keyof I["kafkaTarget"]["serializer"]["serializerDebezium"]["serializerParameters"], "$type" | keyof {
                        value?: string | undefined;
                        key?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["kafkaTarget"]["serializer"]["serializerDebezium"], "$type" | "serializerParameters">, never>) | undefined;
            } & Record<Exclude<keyof I["kafkaTarget"]["serializer"], "$type" | "serializerAuto" | "serializerJson" | "serializerDebezium">, never>) | undefined;
        } & Record<Exclude<keyof I["kafkaTarget"], "$type" | "connection" | "securityGroups" | "auth" | "topicSettings" | "serializer">, never>) | undefined;
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
                        hosts?: (string[] & string[] & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["hosts"], "$type" | keyof string[]>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["enabled"], "$type" | "caCertificate">, never>) | undefined;
                            disabled?: ({} & {} & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"]["disabled"], "$type">, never>) | undefined;
                        } & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["onPremise"]["tlsMode"], "$type" | "enabled" | "disabled">, never>) | undefined;
                        replicaSet?: string | undefined;
                    } & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["onPremise"], "$type" | "port" | "hosts" | "tlsMode" | "replicaSet">, never>) | undefined;
                    user?: string | undefined;
                    password?: ({
                        raw?: string | undefined;
                    } & {
                        raw?: string | undefined;
                    } & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"]["password"], "$type" | "raw">, never>) | undefined;
                    authSource?: string | undefined;
                } & Record<Exclude<keyof I["mongoTarget"]["connection"]["connectionOptions"], "$type" | "mdbClusterId" | "onPremise" | "user" | "password" | "authSource">, never>) | undefined;
            } & Record<Exclude<keyof I["mongoTarget"]["connection"], "$type" | "connectionOptions">, never>) | undefined;
            subnetId?: string | undefined;
            securityGroups?: (string[] & string[] & Record<Exclude<keyof I["mongoTarget"]["securityGroups"], "$type" | keyof string[]>, never>) | undefined;
            database?: string | undefined;
            cleanupPolicy?: import("./endpoint/common").CleanupPolicy | undefined;
        } & Record<Exclude<keyof I["mongoTarget"], "$type" | "connection" | "subnetId" | "securityGroups" | "database" | "cleanupPolicy">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "mysqlSource" | "postgresSource" | "ydbSource" | "kafkaSource" | "mongoSource" | "clickhouseSource" | "mysqlTarget" | "postgresTarget" | "clickhouseTarget" | "ydbTarget" | "kafkaTarget" | "mongoTarget">, never>>(object: I): EndpointSettings;
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
