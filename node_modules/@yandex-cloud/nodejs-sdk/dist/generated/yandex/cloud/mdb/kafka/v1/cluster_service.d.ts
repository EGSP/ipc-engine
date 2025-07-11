/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, ConfigSpec, Cluster, Host } from "../../../../../yandex/cloud/mdb/kafka/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/kafka/v1/maintenance";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { TopicSpec } from "../../../../../yandex/cloud/mdb/kafka/v1/topic";
import { UserSpec } from "../../../../../yandex/cloud/mdb/kafka/v1/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.GetClusterRequest";
    /**
     * ID of the Apache Kafka® Cluster resource to return.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersRequest";
    /**
     * ID of the folder to list Apache Kafka® clusters in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /** Filter support is not currently implemented. Any filters are ignored. */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersResponse";
    /** List of Apache Kafka® clusters. */
    clusters: Cluster[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use [next_page_token] as the value for the [ListClustersRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest";
    /**
     * ID of the folder to create the Apache Kafka® cluster in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the Apache Kafka® cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Apache Kafka® cluster. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Apache Kafka® cluster. */
    environment: Cluster_Environment;
    /** Kafka and hosts configuration the Apache Kafka® cluster. */
    configSpec?: ConfigSpec;
    /** One or more configurations of topics to be created in the Apache Kafka® cluster. */
    topicSpecs: TopicSpec[];
    /** Configurations of accounts to be created in the Apache Kafka® cluster. */
    userSpecs: UserSpec[];
    /** ID of the network to create the Apache Kafka® cluster in. */
    networkId: string;
    /** IDs of subnets to create brokers in. */
    subnetId: string[];
    /** User security groups */
    securityGroupIds: string[];
    /** Host groups to place VMs of cluster on. */
    hostGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterMetadata";
    /** ID of the Apache Kafka® cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest";
    /**
     * ID of the Apache Kafka® cluster to update.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask?: FieldMask;
    /** New description of the Apache Kafka® cluster. */
    description: string;
    /**
     * Custom labels for the Apache Kafka® cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones.
     * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * New configuration and resources for hosts in the Apache Kafka® cluster.
     *
     * Use [update_mask] to prevent reverting all cluster settings that are not listed in [config_spec] to their default values.
     */
    configSpec?: ConfigSpec;
    /** New name for the Apache Kafka® cluster. */
    name: string;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** New maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterMetadata";
    /** ID of the Apache Kafka® cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterRequest";
    /**
     * ID of the Apache Kafka® cluster to delete.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterMetadata";
    /** ID of the Apache Kafka® cluster that is being deleted. */
    clusterId: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsRequest";
    /**
     * ID of the Apache Kafka® cluster to request logs for.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     *
     * If no columns are specified, full log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /** End timestamp for the logs request. */
    toTime?: Date;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /**
     * The flag that defines behavior of providing the next page token.
     *
     * If this flag is set to `true`, this API method will always return [ListClusterLogsResponse.next_page_token], even if current page is empty.
     */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently filtering can be applied to the `hostname` field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
     *
     * Example of a filter: `message.hostname='node1.db.cloud.yandex.net'`
     */
    filter: string;
}
/** A single log record. */
export interface LogRecord {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord";
    /** Log record timestamp. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     * This value is interchangeable with [StreamLogRecord.next_record_token] from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.kafka.v1.StreamLogRecord";
    /** One of the requested log records. */
    record?: LogRecord;
    /**
     * This token allows you to continue streaming logs starting from the exact same record.
     *
     * To continue streaming, specify value of [next_record_token] as value for [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
     *
     * This value is interchangeable with [ListClusterLogsResponse.next_page_token] from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.StreamClusterLogsRequest";
    /**
     * ID of the Apache Kafka® cluster.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from logs table to get in the response.
     *
     * If no columns are specified, full log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /**
     * End timestamp for the logs request.
     *
     * If this field is not set, all existing logs will be sent and then the new ones as they appear.
     * In essence it has `tail -f` semantics.
     */
    toTime?: Date;
    /**
     * Record token.
     *
     * Set [record_token] to the [StreamLogRecord.next_record_token] returned by a previous [ClusterService.StreamLogs] request to start streaming from next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently filtering can be applied to the `hostname` field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     *
     * Example of a filter: `message.hostname='node1.db.cloud.yandex.net'`
     */
    filter: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsRequest";
    /** ID of the Apache Kafka® cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsResponse";
    /** List of operations for the specified Apache Kafka® cluster. */
    operations: Operation[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsRequest";
    /**
     * ID of the Apache Kafka® cluster.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsResponse";
    /** List of hosts. */
    hosts: Host[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterRequest";
    /**
     * ID of the Apache Kafka® cluster to move.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterMetadata";
    /** ID of the Apache Kafka® cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterRequest";
    /**
     * ID of the Apache Kafka® cluster to start.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterMetadata";
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterRequest";
    /**
     * ID of the Apache Kafka® cluster to stop.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterMetadata";
    /** ID of the Apache Kafka® cluster. */
    clusterId: string;
}
export interface RescheduleMaintenanceRequest {
    $type: "yandex.cloud.mdb.kafka.v1.RescheduleMaintenanceRequest";
    /** ID of the Kafka cluster to reschedule the maintenance operation for. */
    clusterId: string;
    /** The type of reschedule request. */
    rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
    /** The time until which this maintenance operation should be delayed. The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks. The value can also point to the past moment of time if [reschedule_type.IMMEDIATE] reschedule type is chosen. */
    delayedUntil?: Date;
}
export declare enum RescheduleMaintenanceRequest_RescheduleType {
    RESCHEDULE_TYPE_UNSPECIFIED = 0,
    /** IMMEDIATE - Start the maintenance operation immediately. */
    IMMEDIATE = 1,
    /** NEXT_AVAILABLE_WINDOW - Start the maintenance operation within the next available maintenance window. */
    NEXT_AVAILABLE_WINDOW = 2,
    /** SPECIFIC_TIME - Start the maintenance operation at the specific time. */
    SPECIFIC_TIME = 3,
    UNRECOGNIZED = -1
}
export declare function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object: any): RescheduleMaintenanceRequest_RescheduleType;
export declare function rescheduleMaintenanceRequest_RescheduleTypeToJSON(object: RescheduleMaintenanceRequest_RescheduleType): string;
export interface RescheduleMaintenanceMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.RescheduleMaintenanceMetadata";
    /** ID of the Kafka cluster. */
    clusterId: string;
    /** The time until which this maintenance operation is to be delayed. */
    delayedUntil?: Date;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GetClusterRequest";
    encode(message: GetClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterRequest;
    fromJSON(object: any): GetClusterRequest;
    toJSON(message: GetClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): GetClusterRequest;
};
export declare const ListClustersRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersRequest";
    encode(message: ListClustersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersRequest;
    fromJSON(object: any): ListClustersRequest;
    toJSON(message: ListClustersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListClustersRequest;
};
export declare const ListClustersResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClustersResponse";
    encode(message: ListClustersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClustersResponse;
    fromJSON(object: any): ListClustersResponse;
    toJSON(message: ListClustersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        clusters?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Status | undefined;
            config?: {
                zoneId?: string[] | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                kafka?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } | undefined;
                access?: {
                    dataTransfer?: boolean | undefined;
                } | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: {
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Status | undefined;
            config?: {
                zoneId?: string[] | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                kafka?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } | undefined;
                access?: {
                    dataTransfer?: boolean | undefined;
                } | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: {
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Status | undefined;
            config?: {
                zoneId?: string[] | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                kafka?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } | undefined;
                access?: {
                    dataTransfer?: boolean | undefined;
                } | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: {
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Status | undefined;
            config?: ({
                zoneId?: string[] | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                kafka?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } | undefined;
                access?: {
                    dataTransfer?: boolean | undefined;
                } | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: {
                    enabled?: boolean | undefined;
                } | undefined;
            } & {
                zoneId?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["zoneId"], "$type" | keyof string[]>, never>) | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["zookeeper"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["zookeeper"], "$type" | "resources">, never>) | undefined;
                kafka?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } & {
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    kafkaConfig28?: ({
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } & {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
                    kafkaConfig3?: ({
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } & {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"]["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["kafka"], "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>) | undefined;
                access?: ({
                    dataTransfer?: boolean | undefined;
                } & {
                    dataTransfer?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["access"], "$type" | "dataTransfer">, never>) | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: ({
                    enabled?: boolean | undefined;
                } & {
                    enabled?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["restApiConfig"], "$type" | "enabled">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "zoneId" | "version" | "assignPublicIp" | "zookeeper" | "kafka" | "access" | "brokersCount" | "unmanagedTopics" | "schemaRegistry" | "restApiConfig">, never>) | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["labels"], string | number>, never>) | undefined;
            networkId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            monitoring?: ({
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] & ({
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            } & {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["monitoring"][number], "$type" | "link" | "description" | "name">, never>)[] & Record<Exclude<keyof I["clusters"][number]["monitoring"], "$type" | keyof {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[]>, never>) | undefined;
            maintenanceWindow?: ({
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: ({
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } & {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["plannedOperation"], "$type" | "info" | "delayedUntil">, never>) | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "hostGroupIds" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Status | undefined;
            config?: {
                zoneId?: string[] | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
                zookeeper?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                kafka?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    kafkaConfig28?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                    kafkaConfig3?: {
                        compressionType?: import("./common").CompressionType | undefined;
                        logFlushIntervalMessages?: number | undefined;
                        logFlushIntervalMs?: number | undefined;
                        logFlushSchedulerIntervalMs?: number | undefined;
                        logRetentionBytes?: number | undefined;
                        logRetentionHours?: number | undefined;
                        logRetentionMinutes?: number | undefined;
                        logRetentionMs?: number | undefined;
                        logSegmentBytes?: number | undefined;
                        logPreallocate?: boolean | undefined;
                        socketSendBufferBytes?: number | undefined;
                        socketReceiveBufferBytes?: number | undefined;
                        autoCreateTopicsEnable?: boolean | undefined;
                        numPartitions?: number | undefined;
                        defaultReplicationFactor?: number | undefined;
                        messageMaxBytes?: number | undefined;
                        replicaFetchMaxBytes?: number | undefined;
                        sslCipherSuites?: string[] | undefined;
                        offsetsRetentionMinutes?: number | undefined;
                        saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                    } | undefined;
                } | undefined;
                access?: {
                    dataTransfer?: boolean | undefined;
                } | undefined;
                brokersCount?: number | undefined;
                unmanagedTopics?: boolean | undefined;
                schemaRegistry?: boolean | undefined;
                restApiConfig?: {
                    enabled?: boolean | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest";
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        subnetId?: string[] | undefined;
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        hostGroupIds?: string[] | undefined;
        configSpec?: {
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        userSpecs?: {
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        }[] | undefined;
        topicSpecs?: {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[] | undefined;
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
        subnetId?: (string[] & string[] & Record<Exclude<keyof I["subnetId"], "$type" | keyof string[]>, never>) | undefined;
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        configSpec?: ({
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            zoneId?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["zoneId"], "$type" | keyof string[]>, never>) | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["zookeeper"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["zookeeper"], "$type" | "resources">, never>) | undefined;
            kafka?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                kafkaConfig28?: ({
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } & {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
                kafkaConfig3?: ({
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } & {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["kafka"], "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>) | undefined;
            access?: ({
                dataTransfer?: boolean | undefined;
            } & {
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataTransfer">, never>) | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["restApiConfig"], "$type" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "zoneId" | "version" | "assignPublicIp" | "zookeeper" | "kafka" | "access" | "brokersCount" | "unmanagedTopics" | "schemaRegistry" | "restApiConfig">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        userSpecs?: ({
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] & ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            } & {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: (string[] & string[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"], "$type" | keyof {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
        } & Record<Exclude<keyof I["userSpecs"][number], "$type" | "name" | "permissions" | "password">, never>)[] & Record<Exclude<keyof I["userSpecs"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        }[]>, never>) | undefined;
        topicSpecs?: ({
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpecs"][number]["topicConfig21"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig26?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpecs"][number]["topicConfig26"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig28?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpecs"][number]["topicConfig28"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig3?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpecs"][number]["topicConfig3"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
        } & Record<Exclude<keyof I["topicSpecs"][number], "$type" | "name" | "partitions" | "replicationFactor" | "topicConfig21" | "topicConfig26" | "topicConfig28" | "topicConfig3">, never>)[] & Record<Exclude<keyof I["topicSpecs"], "$type" | keyof {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "subnetId" | "networkId" | "securityGroupIds" | "deletionProtection" | "hostGroupIds" | "configSpec" | "maintenanceWindow" | "environment" | "userSpecs" | "topicSpecs">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterRequest.LabelsEntry";
    encode(message: CreateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest_LabelsEntry;
    fromJSON(object: any): CreateClusterRequest_LabelsEntry;
    toJSON(message: CreateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateClusterRequest_LabelsEntry;
};
export declare const CreateClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateClusterMetadata";
    encode(message: CreateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterMetadata;
    fromJSON(object: any): CreateClusterMetadata;
    toJSON(message: CreateClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): CreateClusterMetadata;
};
export declare const UpdateClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest";
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
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
        securityGroupIds?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        configSpec?: {
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
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
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        clusterId?: string | undefined;
        configSpec?: ({
            zoneId?: string[] | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            kafka?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } | undefined;
            access?: {
                dataTransfer?: boolean | undefined;
            } | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: {
                enabled?: boolean | undefined;
            } | undefined;
        } & {
            zoneId?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["zoneId"], "$type" | keyof string[]>, never>) | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
            zookeeper?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["zookeeper"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["zookeeper"], "$type" | "resources">, never>) | undefined;
            kafka?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                kafkaConfig28?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
                kafkaConfig3?: {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } | undefined;
            } & {
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                kafkaConfig28?: ({
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } & {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig28"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
                kafkaConfig3?: ({
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: string[] | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: import("./common").SaslMechanism[] | undefined;
                } & {
                    compressionType?: import("./common").CompressionType | undefined;
                    logFlushIntervalMessages?: number | undefined;
                    logFlushIntervalMs?: number | undefined;
                    logFlushSchedulerIntervalMs?: number | undefined;
                    logRetentionBytes?: number | undefined;
                    logRetentionHours?: number | undefined;
                    logRetentionMinutes?: number | undefined;
                    logRetentionMs?: number | undefined;
                    logSegmentBytes?: number | undefined;
                    logPreallocate?: boolean | undefined;
                    socketSendBufferBytes?: number | undefined;
                    socketReceiveBufferBytes?: number | undefined;
                    autoCreateTopicsEnable?: boolean | undefined;
                    numPartitions?: number | undefined;
                    defaultReplicationFactor?: number | undefined;
                    messageMaxBytes?: number | undefined;
                    replicaFetchMaxBytes?: number | undefined;
                    sslCipherSuites?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"]["sslCipherSuites"], "$type" | keyof string[]>, never>) | undefined;
                    offsetsRetentionMinutes?: number | undefined;
                    saslEnabledMechanisms?: (import("./common").SaslMechanism[] & import("./common").SaslMechanism[] & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"]["saslEnabledMechanisms"], "$type" | keyof import("./common").SaslMechanism[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["kafka"]["kafkaConfig3"], "$type" | "compressionType" | "logFlushIntervalMessages" | "logFlushIntervalMs" | "logFlushSchedulerIntervalMs" | "logRetentionBytes" | "logRetentionHours" | "logRetentionMinutes" | "logRetentionMs" | "logSegmentBytes" | "logPreallocate" | "socketSendBufferBytes" | "socketReceiveBufferBytes" | "autoCreateTopicsEnable" | "numPartitions" | "defaultReplicationFactor" | "messageMaxBytes" | "replicaFetchMaxBytes" | "sslCipherSuites" | "offsetsRetentionMinutes" | "saslEnabledMechanisms">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["kafka"], "$type" | "resources" | "kafkaConfig28" | "kafkaConfig3">, never>) | undefined;
            access?: ({
                dataTransfer?: boolean | undefined;
            } & {
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataTransfer">, never>) | undefined;
            brokersCount?: number | undefined;
            unmanagedTopics?: boolean | undefined;
            schemaRegistry?: boolean | undefined;
            restApiConfig?: ({
                enabled?: boolean | undefined;
            } & {
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["restApiConfig"], "$type" | "enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "zoneId" | "version" | "assignPublicIp" | "zookeeper" | "kafka" | "access" | "brokersCount" | "unmanagedTopics" | "schemaRegistry" | "restApiConfig">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/kafka/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "clusterId" | "configSpec" | "maintenanceWindow">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterRequest.LabelsEntry";
    encode(message: UpdateClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest_LabelsEntry;
    fromJSON(object: any): UpdateClusterRequest_LabelsEntry;
    toJSON(message: UpdateClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateClusterRequest_LabelsEntry;
};
export declare const UpdateClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateClusterMetadata";
    encode(message: UpdateClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterMetadata;
    fromJSON(object: any): UpdateClusterMetadata;
    toJSON(message: UpdateClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): UpdateClusterMetadata;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterRequest";
    encode(message: DeleteClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterRequest;
    fromJSON(object: any): DeleteClusterRequest;
    toJSON(message: DeleteClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): DeleteClusterRequest;
};
export declare const DeleteClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteClusterMetadata";
    encode(message: DeleteClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterMetadata;
    fromJSON(object: any): DeleteClusterMetadata;
    toJSON(message: DeleteClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): DeleteClusterMetadata;
};
export declare const ListClusterLogsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsRequest";
    encode(message: ListClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsRequest;
    fromJSON(object: any): ListClusterLogsRequest;
    toJSON(message: ListClusterLogsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: string[] | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        alwaysNextPageToken?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        alwaysNextPageToken?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId" | "columnFilter" | "fromTime" | "toTime" | "alwaysNextPageToken">, never>>(object: I): ListClusterLogsRequest;
};
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord";
    encode(message: LogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord;
    fromJSON(object: any): LogRecord;
    toJSON(message: LogRecord): unknown;
    fromPartial<I extends {
        message?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        timestamp?: Date | undefined;
    } & {
        message?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["message"], string | number>, never>) | undefined;
        timestamp?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "timestamp">, never>>(object: I): LogRecord;
};
export declare const LogRecord_MessageEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.LogRecord.MessageEntry";
    encode(message: LogRecord_MessageEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LogRecord_MessageEntry;
    fromJSON(object: any): LogRecord_MessageEntry;
    toJSON(message: LogRecord_MessageEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): LogRecord_MessageEntry;
};
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterLogsResponse";
    encode(message: ListClusterLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsResponse;
    fromJSON(object: any): ListClusterLogsResponse;
    toJSON(message: ListClusterLogsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        logs?: {
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        logs?: ({
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        }[] & ({
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        } & {
            message?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["logs"][number]["message"], string | number>, never>) | undefined;
            timestamp?: Date | undefined;
        } & Record<Exclude<keyof I["logs"][number], "$type" | "message" | "timestamp">, never>)[] & Record<Exclude<keyof I["logs"], "$type" | keyof {
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "logs">, never>>(object: I): ListClusterLogsResponse;
};
export declare const StreamLogRecord: {
    $type: "yandex.cloud.mdb.kafka.v1.StreamLogRecord";
    encode(message: StreamLogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamLogRecord;
    fromJSON(object: any): StreamLogRecord;
    toJSON(message: StreamLogRecord): unknown;
    fromPartial<I extends {
        nextRecordToken?: string | undefined;
        record?: {
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        } | undefined;
    } & {
        nextRecordToken?: string | undefined;
        record?: ({
            message?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            timestamp?: Date | undefined;
        } & {
            message?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["record"]["message"], string | number>, never>) | undefined;
            timestamp?: Date | undefined;
        } & Record<Exclude<keyof I["record"], "$type" | "message" | "timestamp">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextRecordToken" | "record">, never>>(object: I): StreamLogRecord;
};
export declare const StreamClusterLogsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StreamClusterLogsRequest";
    encode(message: StreamClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamClusterLogsRequest;
    fromJSON(object: any): StreamClusterLogsRequest;
    toJSON(message: StreamClusterLogsRequest): unknown;
    fromPartial<I extends {
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: string[] | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        recordToken?: string | undefined;
    } & {
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        recordToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "clusterId" | "columnFilter" | "fromTime" | "toTime" | "recordToken">, never>>(object: I): StreamClusterLogsRequest;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsRequest";
    encode(message: ListClusterOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsRequest;
    fromJSON(object: any): ListClusterOperationsRequest;
    toJSON(message: ListClusterOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterOperationsRequest;
};
export declare const ListClusterOperationsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterOperationsResponse";
    encode(message: ListClusterOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterOperationsResponse;
    fromJSON(object: any): ListClusterOperationsResponse;
    toJSON(message: ListClusterOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListClusterOperationsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsRequest";
    encode(message: ListClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsRequest;
    fromJSON(object: any): ListClusterHostsRequest;
    toJSON(message: ListClusterHostsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterHostsRequest;
};
export declare const ListClusterHostsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "health" | "clusterId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const MoveClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterRequest";
    encode(message: MoveClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterRequest;
    fromJSON(object: any): MoveClusterRequest;
    toJSON(message: MoveClusterRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        clusterId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "clusterId">, never>>(object: I): MoveClusterRequest;
};
export declare const MoveClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.MoveClusterMetadata";
    encode(message: MoveClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveClusterMetadata;
    fromJSON(object: any): MoveClusterMetadata;
    toJSON(message: MoveClusterMetadata): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
        clusterId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "sourceFolderId" | "clusterId">, never>>(object: I): MoveClusterMetadata;
};
export declare const StartClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterRequest";
    encode(message: StartClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterRequest;
    fromJSON(object: any): StartClusterRequest;
    toJSON(message: StartClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StartClusterRequest;
};
export declare const StartClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.StartClusterMetadata";
    encode(message: StartClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterMetadata;
    fromJSON(object: any): StartClusterMetadata;
    toJSON(message: StartClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StartClusterMetadata;
};
export declare const StopClusterRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterRequest";
    encode(message: StopClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterRequest;
    fromJSON(object: any): StopClusterRequest;
    toJSON(message: StopClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StopClusterRequest;
};
export declare const StopClusterMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.StopClusterMetadata";
    encode(message: StopClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopClusterMetadata;
    fromJSON(object: any): StopClusterMetadata;
    toJSON(message: StopClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StopClusterMetadata;
};
export declare const RescheduleMaintenanceRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.RescheduleMaintenanceRequest";
    encode(message: RescheduleMaintenanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RescheduleMaintenanceRequest;
    fromJSON(object: any): RescheduleMaintenanceRequest;
    toJSON(message: RescheduleMaintenanceRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        delayedUntil?: Date | undefined;
        rescheduleType?: RescheduleMaintenanceRequest_RescheduleType | undefined;
    } & {
        clusterId?: string | undefined;
        delayedUntil?: Date | undefined;
        rescheduleType?: RescheduleMaintenanceRequest_RescheduleType | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "delayedUntil" | "rescheduleType">, never>>(object: I): RescheduleMaintenanceRequest;
};
export declare const RescheduleMaintenanceMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.RescheduleMaintenanceMetadata";
    encode(message: RescheduleMaintenanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RescheduleMaintenanceMetadata;
    fromJSON(object: any): RescheduleMaintenanceMetadata;
    toJSON(message: RescheduleMaintenanceMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        delayedUntil?: Date | undefined;
    } & {
        clusterId?: string | undefined;
        delayedUntil?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "delayedUntil">, never>>(object: I): RescheduleMaintenanceMetadata;
};
/** A set of methods for managing Apache Kafka® clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Apache Kafka® cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Apache Kafka® cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Apache Kafka® cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Apache Kafka® cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedule planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Apache Kafka® cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Apache Kafka® cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Starts the specified Apache Kafka® cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Apache Kafka® cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Reschedule planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Apache Kafka® cluster.
     *
     * To get the list of available Apache Kafka® clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka® clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a new Apache Kafka® cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Apache Kafka® cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Apache Kafka® cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves the specified Apache Kafka® cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Apache Kafka® cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Apache Kafka® cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedule planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for the specified Apache Kafka® cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-kafka/operations/cluster-logs) section in the documentation.
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of operations for the specified Apache Kafka® cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified Apache Kafka® cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
}
export declare const ClusterServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ClusterServiceClient;
    service: typeof ClusterServiceService;
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
