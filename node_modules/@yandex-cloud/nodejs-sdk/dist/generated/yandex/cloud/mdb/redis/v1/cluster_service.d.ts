/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Cluster_PersistenceMode, Resources, Access, Cluster, Host, Shard } from "../../../../../yandex/cloud/mdb/redis/v1/cluster";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/redis/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { RedisConfig } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/redis/v1/backup";
import { Redisconfig50 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0";
import { Redisconfig60 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0";
import { Redisconfig62 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2";
import { Redisconfig70 } from "../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0";
export declare const protobufPackage = "yandex.cloud.mdb.redis.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.GetClusterRequest";
    /**
     * ID of the Redis cluster to return.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClustersRequest";
    /**
     * ID of the folder to list Redis clusters in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters clusters listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{,61}[a-z0-9])?`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClustersResponse";
    /** List of Redis clusters. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent
     * list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest";
    /** ID of the folder to create the Redis cluster in. */
    folderId: string;
    /** Name of the Redis cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Redis cluster. */
    description: string;
    /**
     * Custom labels for the Redis cluster as `key:value` pairs. Maximum 64 per cluster.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Redis cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the Redis cluster. */
    configSpec?: ConfigSpec;
    /** Individual configurations for hosts that should be created for the Redis cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** Redis cluster mode on/off. */
    sharded: boolean;
    /** User security groups */
    securityGroupIds: string[];
    /** TLS port and functionality on\off */
    tlsEnabled?: boolean;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Persistence mode */
    persistenceMode: Cluster_PersistenceMode;
    /** Enable FQDN instead of ip */
    announceHostnames: boolean;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterMetadata";
    /** ID of the Redis cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest";
    /**
     * ID of the Redis cluster to update.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the Redis cluster should be updated. */
    updateMask?: FieldMask;
    /** New description of the Redis cluster. */
    description: string;
    /**
     * Custom labels for the Redis cluster as `` key:value `` pairs. Maximum 64 per cluster.
     * For example, "project": "mvp" or "source": "dictionary".
     *
     * The new set of labels will completely replace the old ones. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /** New configuration and resources for hosts in the cluster. */
    configSpec?: ConfigSpec;
    /** New name for the cluster. */
    name: string;
    /** New maintenance window settings for the cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** User security groups */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Persistence mode */
    persistenceMode: Cluster_PersistenceMode;
    /** Enable FQDN instead of ip */
    announceHostnames: boolean;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterMetadata";
    /** ID of the Redis cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterRequest";
    /**
     * ID of the Redis cluster to delete.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterMetadata";
    /** ID of the Redis cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterRequest";
    /** ID of the Redis cluster to start. */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterMetadata";
    /** ID of the Redis cluster. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.StopClusterRequest";
    /** ID of the Redis cluster to stop. */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.StopClusterMetadata";
    /** ID of the Redis cluster. */
    clusterId: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.MoveClusterRequest";
    /** ID of the Redis cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.MoveClusterMetadata";
    /** ID of the Redis cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface UpdateClusterHostsRequest {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsRequest";
    /**
     * ID of the Redis cluster to update hosts in.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New configurations to apply to hosts. */
    updateHostSpecs: UpdateHostSpec[];
}
export interface UpdateClusterHostsMetadata {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsMetadata";
    /** ID of the Redis cluster to update hosts in. */
    clusterId: string;
    /** Names of hosts that are being updated. */
    hostNames: string[];
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.BackupClusterRequest";
    /**
     * ID of the Redis cluster to back up.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.BackupClusterMetadata";
    /** ID of the Redis cluster that is being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest";
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Name of the new Redis cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the new Redis cluster. */
    description: string;
    /**
     * Custom labels for the Redis cluster as `` key:value `` pairs. Maximum 64 per cluster.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new Redis cluster. */
    environment: Cluster_Environment;
    /** Configuration for the Redis cluster to be created. */
    configSpec?: ConfigSpec;
    /**
     * Configurations for Redis hosts that should be created for
     * the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the Redis cluster in. */
    networkId: string;
    /** ID of the folder to create the Redis cluster in. */
    folderId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** TLS port and functionality on\off */
    tlsEnabled?: boolean;
    /** Persistence mode */
    persistenceMode: Cluster_PersistenceMode;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Enable FQDN instead of ip */
    announceHostnames: boolean;
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterMetadata";
    /** ID of the new Redis cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export interface StartClusterFailoverRequest {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest";
    /** ID of the Redis cluster to start failover on. */
    clusterId: string;
    /** List of hostnames which should not be masters. Can be empty for sentinel clusters or can contain multiple hosts for sharded clusters. */
    hostNames: string[];
}
export interface StartClusterFailoverMetadata {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverMetadata";
    /** ID of the Redis cluster on which failover will be initiated. */
    clusterId: string;
    /** List of hostnames which should not be masters. Can be empty for sentinel clusters or can contain multiple hosts for sharded clusters. */
    hostNames: string[];
}
export interface RescheduleMaintenanceRequest {
    $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest";
    /** ID of the Redis cluster to reschedule the maintenance operation for. */
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
    $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceMetadata";
    /** Required. ID of the Redis cluster. */
    clusterId: string;
    /** Required. The time until which this maintenance operation is to be delayed. */
    delayedUntil?: Date;
}
export interface LogRecord {
    $type: "yandex.cloud.mdb.redis.v1.LogRecord";
    /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsRequest";
    /**
     * ID of the Redis cluster to request logs for.
     * To get the Redis cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    serviceType: ListClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    fromTime?: Date;
    /** End timestamp for the logs request, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    toTime?: Date;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** REDIS - Logs of Redis activity. */
    REDIS = 1,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     * This value is interchangeable with `next_record_token` from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.redis.v1.StreamLogRecord";
    /** One of the requested log records. */
    record?: LogRecord;
    /**
     * This token allows you to continue streaming logs starting from the exact
     * same record. To continue streaming, specify value of `next_record_token`
     * as value for `record_token` parameter in the next StreamLogs request.
     * This value is interchangeable with `next_page_token` from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: "yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest";
    /** Required. ID of the Redis cluster. */
    clusterId: string;
    /** Columns from logs table to get in the response. */
    columnFilter: string[];
    serviceType: StreamClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /**
     * End timestamp for the logs request.
     * If this field is not set, all existing logs will be sent and then the new ones as
     * they appear. In essence it has 'tail -f' semantics.
     */
    toTime?: Date;
    /**
     * Record token. Set `record_token` to the `next_record_token` returned by a previous StreamLogs
     * request to start streaming from next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.hostname] field
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter `message.hostname='node1.db.cloud.yandex.net'`.
     */
    filter: string;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** REDIS - Logs of Redis activity. */
    REDIS = 1,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest";
    /** ID of the Redis cluster to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse";
    /** List of operations for the specified Redis cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest";
    /**
     * ID of the Redis cluster.
     * To get the Redis cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse";
    /** List of Redis backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsRequest";
    /**
     * ID of the Redis cluster.
     * To get the Redis cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.  To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsResponse";
    /** List of hosts for the cluster. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface AddClusterHostsRequest {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsRequest";
    /**
     * ID of the Redis cluster to add hosts to.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for Redis hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}
export interface AddClusterHostsMetadata {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsMetadata";
    /** ID of the Redis cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest";
    /**
     * ID of the Redis cluster to remove hosts from.
     * To get the Redis cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsMetadata";
    /** ID of the Redis cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}
export interface GetClusterShardRequest {
    $type: "yandex.cloud.mdb.redis.v1.GetClusterShardRequest";
    /**
     * ID of the Redis cluster the shard belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of Redis shard to return.
     * To get the shard name use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface ListClusterShardsRequest {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsRequest";
    /**
     * ID of the Redis cluster to list shards in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListClusterShardsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterShardsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterShardsResponse {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsResponse";
    /** List of Redis shards. */
    shards: Shard[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterShardsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListClusterShardsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface AddClusterShardRequest {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterShardRequest";
    /**
     * ID of the Redis cluster to create a shard in.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the shard.
     * The name must be unique within the cluster.
     */
    shardName: string;
    /**
     * Configurations for Redis hosts that should be created with the shard.
     * Must contain at least one element.
     */
    hostSpecs: HostSpec[];
}
export interface AddClusterShardMetadata {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterShardMetadata";
    /** ID of the Redis cluster that a shard is being added to. */
    clusterId: string;
    /** Name of the Redis shard that is being created. */
    shardName: string;
}
export interface DeleteClusterShardRequest {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest";
    /**
     * ID of the Redis cluster the shard belongs to.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Redis shard to delete.
     * To get the shard name use a [ClusterService.ListShards] request.
     */
    shardName: string;
}
export interface DeleteClusterShardMetadata {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardMetadata";
    /** ID of the Redis cluster the shard belongs to. */
    clusterId: string;
    /** Name of the Redis shard that is being deleted. */
    shardName: string;
}
export interface RebalanceClusterRequest {
    $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterRequest";
    /**
     * ID of the Redis cluster to rebalance.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface RebalanceClusterMetadata {
    $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterMetadata";
    /** ID of the Redis cluster that is being rebalancing. */
    clusterId: string;
}
export interface UpdateHostSpec {
    $type: "yandex.cloud.mdb.redis.v1.UpdateHostSpec";
    /**
     * Name of the host to update.
     * To get the Redis host name, use a [ClusterService.ListHosts] request.
     */
    hostName: string;
    /**
     * A replica with a low priority number is considered better for promotion.
     * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
     * Works only for non-sharded clusters. Default value is 100.
     */
    replicaPriority?: number;
    /** Whether the host should get a public IP address on update. */
    assignPublicIp: boolean;
    /** Field mask that specifies which fields of the Redis host should be updated. */
    updateMask?: FieldMask;
}
export interface HostSpec {
    $type: "yandex.cloud.mdb.redis.v1.HostSpec";
    /**
     * ID of the availability zone where the host resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part
     * of the network that the cluster belongs to.
     * The ID of the network is set in the field [Cluster.network_id].
     */
    subnetId: string;
    /**
     * ID of the Redis shard the host belongs to.
     * To get the shard ID use a [ClusterService.ListShards] request.
     */
    shardName: string;
    /**
     * A replica with a low priority number is considered better for promotion.
     * A replica with priority of 0 will never be selected by Redis Sentinel for promotion.
     * Works only for non-sharded clusters. Default value is 100.
     */
    replicaPriority?: number;
    /**
     * Whether the host should get a public IP address on creation.
     *
     * Possible values:
     * * false - don't assign a public IP to the host.
     * * true - the host should have a public IP address.
     */
    assignPublicIp: boolean;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.redis.v1.ConfigSpec";
    /** Version of Redis used in the cluster. */
    version: string;
    redisConfig50?: Redisconfig50 | undefined;
    redisConfig60?: Redisconfig60 | undefined;
    redisConfig62?: Redisconfig62 | undefined;
    redisConfig70?: Redisconfig70 | undefined;
    /** Resources allocated to Redis hosts. */
    resources?: Resources;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Access policy to DB */
    access?: Access;
    /** Unified configuration of a Redis cluster */
    redis?: RedisConfig;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Status | undefined;
            config?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                version?: string | undefined;
                backupWindowStart?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                access?: {
                    dataLens?: boolean | undefined;
                } | undefined;
                redisConfig50?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig60?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig62?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redisConfig70?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redis?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            sharded?: boolean | undefined;
            tlsEnabled?: boolean | undefined;
            persistenceMode?: Cluster_PersistenceMode | undefined;
            announceHostnames?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Status | undefined;
            config?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                version?: string | undefined;
                backupWindowStart?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                access?: {
                    dataLens?: boolean | undefined;
                } | undefined;
                redisConfig50?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig60?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig62?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redisConfig70?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redis?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            sharded?: boolean | undefined;
            tlsEnabled?: boolean | undefined;
            persistenceMode?: Cluster_PersistenceMode | undefined;
            announceHostnames?: boolean | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Status | undefined;
            config?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                version?: string | undefined;
                backupWindowStart?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                access?: {
                    dataLens?: boolean | undefined;
                } | undefined;
                redisConfig50?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig60?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig62?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redisConfig70?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redis?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            sharded?: boolean | undefined;
            tlsEnabled?: boolean | undefined;
            persistenceMode?: Cluster_PersistenceMode | undefined;
            announceHostnames?: boolean | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Status | undefined;
            config?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                version?: string | undefined;
                backupWindowStart?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                access?: {
                    dataLens?: boolean | undefined;
                } | undefined;
                redisConfig50?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig60?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig62?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redisConfig70?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redis?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
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
                } & Record<Exclude<keyof I["clusters"][number]["config"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                version?: string | undefined;
                backupWindowStart?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
                access?: ({
                    dataLens?: boolean | undefined;
                } & {
                    dataLens?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["access"], "$type" | "dataLens">, never>) | undefined;
                redisConfig50?: ({
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                    userConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                    defaultConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig50"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                redisConfig60?: ({
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                    userConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                    defaultConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig60"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                redisConfig62?: ({
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    userConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    defaultConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig62"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                redisConfig70?: ({
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    userConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    defaultConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["redisConfig70"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                redis?: ({
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["effectiveConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["effectiveConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["effectiveConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    userConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["userConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["userConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["userConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                    defaultConfig?: ({
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["defaultConfig"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        clientOutputBufferLimitNormal?: ({
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["defaultConfig"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                        maxmemoryPercent?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"]["defaultConfig"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["redis"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>) | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            sharded?: boolean | undefined;
            tlsEnabled?: boolean | undefined;
            persistenceMode?: Cluster_PersistenceMode | undefined;
            announceHostnames?: boolean | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation" | "sharded" | "tlsEnabled" | "persistenceMode" | "announceHostnames">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Status | undefined;
            config?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                version?: string | undefined;
                backupWindowStart?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                access?: {
                    dataLens?: boolean | undefined;
                } | undefined;
                redisConfig50?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig60?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                redisConfig62?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redisConfig70?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                } | undefined;
                redis?: {
                    effectiveConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        timeout?: number | undefined;
                        password?: string | undefined;
                        databases?: number | undefined;
                        maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                        notifyKeyspaceEvents?: string | undefined;
                        slowlogLogSlowerThan?: number | undefined;
                        slowlogMaxLen?: number | undefined;
                        clientOutputBufferLimitPubsub?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        clientOutputBufferLimitNormal?: {
                            hardLimit?: number | undefined;
                            softLimit?: number | undefined;
                            softSeconds?: number | undefined;
                        } | undefined;
                        maxmemoryPercent?: number | undefined;
                    } | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            sharded?: boolean | undefined;
            tlsEnabled?: boolean | undefined;
            persistenceMode?: Cluster_PersistenceMode | undefined;
            announceHostnames?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest";
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
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        deletionProtection?: boolean | undefined;
        configSpec?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
        sharded?: boolean | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
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
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        configSpec?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
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
            } & Record<Exclude<keyof I["configSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            version?: string | undefined;
            backupWindowStart?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens">, never>) | undefined;
            redisConfig50?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig50"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig60?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig60"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig62?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig62"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redisConfig70?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig70"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redis?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redis"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
        sharded?: boolean | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "configSpec" | "environment" | "hostSpecs" | "sharded" | "tlsEnabled" | "persistenceMode" | "announceHostnames">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.redis.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest";
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
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
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
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
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
            } & Record<Exclude<keyof I["configSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            version?: string | undefined;
            backupWindowStart?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens">, never>) | undefined;
            redisConfig50?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig50"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig60?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig60"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig62?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig62"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redisConfig70?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig70"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redis?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redis"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/redis/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "clusterId" | "configSpec" | "maintenanceWindow" | "persistenceMode" | "announceHostnames">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterMetadata";
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
export declare const StartClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.redis.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.StopClusterMetadata";
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
export declare const MoveClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.MoveClusterRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.MoveClusterMetadata";
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
export declare const UpdateClusterHostsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsRequest";
    encode(message: UpdateClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterHostsRequest;
    fromJSON(object: any): UpdateClusterHostsRequest;
    toJSON(message: UpdateClusterHostsRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        updateHostSpecs?: {
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        updateHostSpecs?: ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            updateMask?: ({
                paths?: string[] | undefined;
            } & {
                paths?: (string[] & string[] & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"], "$type" | "paths">, never>) | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["updateHostSpecs"][number], "$type" | "updateMask" | "assignPublicIp" | "hostName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["updateHostSpecs"], "$type" | keyof {
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "updateHostSpecs">, never>>(object: I): UpdateClusterHostsRequest;
};
export declare const UpdateClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.UpdateClusterHostsMetadata";
    encode(message: UpdateClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterHostsMetadata;
    fromJSON(object: any): UpdateClusterHostsMetadata;
    toJSON(message: UpdateClusterHostsMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): UpdateClusterHostsMetadata;
};
export declare const BackupClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.BackupClusterRequest";
    encode(message: BackupClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupClusterRequest;
    fromJSON(object: any): BackupClusterRequest;
    toJSON(message: BackupClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): BackupClusterRequest;
};
export declare const BackupClusterMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.BackupClusterMetadata";
    encode(message: BackupClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupClusterMetadata;
    fromJSON(object: any): BackupClusterMetadata;
    toJSON(message: BackupClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): BackupClusterMetadata;
};
export declare const RestoreClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest";
    encode(message: RestoreClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest;
    fromJSON(object: any): RestoreClusterRequest;
    toJSON(message: RestoreClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        backupId?: string | undefined;
        deletionProtection?: boolean | undefined;
        configSpec?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
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
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        backupId?: string | undefined;
        deletionProtection?: boolean | undefined;
        configSpec?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            version?: string | undefined;
            backupWindowStart?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } | undefined;
            access?: {
                dataLens?: boolean | undefined;
            } | undefined;
            redisConfig50?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig60?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } | undefined;
            redisConfig62?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redisConfig70?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } | undefined;
            redis?: {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
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
            } & Record<Exclude<keyof I["configSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            version?: string | undefined;
            backupWindowStart?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens">, never>) | undefined;
            redisConfig50?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig50"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig50"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig60?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig60"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig60"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
            redisConfig62?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig62"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig62"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redisConfig70?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redisConfig70"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redisConfig70"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
            redis?: ({
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                clientOutputBufferLimitNormal?: {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } | undefined;
                maxmemoryPercent?: number | undefined;
            } & {
                timeout?: number | undefined;
                password?: string | undefined;
                databases?: number | undefined;
                maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
                notifyKeyspaceEvents?: string | undefined;
                slowlogLogSlowerThan?: number | undefined;
                slowlogMaxLen?: number | undefined;
                clientOutputBufferLimitPubsub?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                clientOutputBufferLimitNormal?: ({
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & {
                    hardLimit?: number | undefined;
                    softLimit?: number | undefined;
                    softSeconds?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["redis"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
                maxmemoryPercent?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["redis"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
        tlsEnabled?: boolean | undefined;
        persistenceMode?: Cluster_PersistenceMode | undefined;
        announceHostnames?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "backupId" | "deletionProtection" | "configSpec" | "environment" | "hostSpecs" | "tlsEnabled" | "persistenceMode" | "announceHostnames">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterRequest.LabelsEntry";
    encode(message: RestoreClusterRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest_LabelsEntry;
    fromJSON(object: any): RestoreClusterRequest_LabelsEntry;
    toJSON(message: RestoreClusterRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): RestoreClusterRequest_LabelsEntry;
};
export declare const RestoreClusterMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.RestoreClusterMetadata";
    encode(message: RestoreClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterMetadata;
    fromJSON(object: any): RestoreClusterMetadata;
    toJSON(message: RestoreClusterMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "clusterId">, never>>(object: I): RestoreClusterMetadata;
};
export declare const StartClusterFailoverRequest: {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverRequest";
    encode(message: StartClusterFailoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterFailoverRequest;
    fromJSON(object: any): StartClusterFailoverRequest;
    toJSON(message: StartClusterFailoverRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): StartClusterFailoverRequest;
};
export declare const StartClusterFailoverMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.StartClusterFailoverMetadata";
    encode(message: StartClusterFailoverMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterFailoverMetadata;
    fromJSON(object: any): StartClusterFailoverMetadata;
    toJSON(message: StartClusterFailoverMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): StartClusterFailoverMetadata;
};
export declare const RescheduleMaintenanceRequest: {
    $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.RescheduleMaintenanceMetadata";
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
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.redis.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.redis.v1.LogRecord.MessageEntry";
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
export declare const ListClusterLogsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsRequest";
    encode(message: ListClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterLogsRequest;
    fromJSON(object: any): ListClusterLogsRequest;
    toJSON(message: ListClusterLogsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: string[] | undefined;
        serviceType?: ListClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        serviceType?: ListClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId" | "columnFilter" | "serviceType" | "fromTime" | "toTime">, never>>(object: I): ListClusterLogsRequest;
};
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterLogsResponse";
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
    $type: "yandex.cloud.mdb.redis.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.redis.v1.StreamClusterLogsRequest";
    encode(message: StreamClusterLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamClusterLogsRequest;
    fromJSON(object: any): StreamClusterLogsRequest;
    toJSON(message: StreamClusterLogsRequest): unknown;
    fromPartial<I extends {
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: string[] | undefined;
        serviceType?: StreamClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        recordToken?: string | undefined;
    } & {
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        serviceType?: StreamClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        recordToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filter" | "clusterId" | "columnFilter" | "serviceType" | "fromTime" | "toTime" | "recordToken">, never>>(object: I): StreamClusterLogsRequest;
};
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.ListClusterOperationsResponse";
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
export declare const ListClusterBackupsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsRequest";
    encode(message: ListClusterBackupsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterBackupsRequest;
    fromJSON(object: any): ListClusterBackupsRequest;
    toJSON(message: ListClusterBackupsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterBackupsRequest;
};
export declare const ListClusterBackupsResponse: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterBackupsResponse";
    encode(message: ListClusterBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterBackupsResponse;
    fromJSON(object: any): ListClusterBackupsResponse;
    toJSON(message: ListClusterBackupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backups?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["sourceShardNames"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sourceClusterId" | "sourceShardNames">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            sourceShardNames?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.redis.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Role | undefined;
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
            services?: ({
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["hosts"][number]["services"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[]>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/redis/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const AddClusterHostsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsRequest";
    encode(message: AddClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsRequest;
    fromJSON(object: any): AddClusterHostsRequest;
    toJSON(message: AddClusterHostsRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostSpecs">, never>>(object: I): AddClusterHostsRequest;
};
export declare const AddClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterHostsMetadata";
    encode(message: AddClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsMetadata;
    fromJSON(object: any): AddClusterHostsMetadata;
    toJSON(message: AddClusterHostsMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): AddClusterHostsMetadata;
};
export declare const DeleteClusterHostsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsRequest";
    encode(message: DeleteClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterHostsRequest;
    fromJSON(object: any): DeleteClusterHostsRequest;
    toJSON(message: DeleteClusterHostsRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): DeleteClusterHostsRequest;
};
export declare const DeleteClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterHostsMetadata";
    encode(message: DeleteClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterHostsMetadata;
    fromJSON(object: any): DeleteClusterHostsMetadata;
    toJSON(message: DeleteClusterHostsMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostNames?: string[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostNames?: (string[] & string[] & Record<Exclude<keyof I["hostNames"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostNames">, never>>(object: I): DeleteClusterHostsMetadata;
};
export declare const GetClusterShardRequest: {
    $type: "yandex.cloud.mdb.redis.v1.GetClusterShardRequest";
    encode(message: GetClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClusterShardRequest;
    fromJSON(object: any): GetClusterShardRequest;
    toJSON(message: GetClusterShardRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "shardName">, never>>(object: I): GetClusterShardRequest;
};
export declare const ListClusterShardsRequest: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsRequest";
    encode(message: ListClusterShardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardsRequest;
    fromJSON(object: any): ListClusterShardsRequest;
    toJSON(message: ListClusterShardsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListClusterShardsRequest;
};
export declare const ListClusterShardsResponse: {
    $type: "yandex.cloud.mdb.redis.v1.ListClusterShardsResponse";
    encode(message: ListClusterShardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterShardsResponse;
    fromJSON(object: any): ListClusterShardsResponse;
    toJSON(message: ListClusterShardsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        shards?: {
            name?: string | undefined;
            clusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        shards?: ({
            name?: string | undefined;
            clusterId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            clusterId?: string | undefined;
        } & {
            name?: string | undefined;
            clusterId?: string | undefined;
        } & Record<Exclude<keyof I["shards"][number], "$type" | "name" | "clusterId">, never>)[] & Record<Exclude<keyof I["shards"], "$type" | keyof {
            name?: string | undefined;
            clusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "shards">, never>>(object: I): ListClusterShardsResponse;
};
export declare const AddClusterShardRequest: {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterShardRequest";
    encode(message: AddClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterShardRequest;
    fromJSON(object: any): AddClusterShardRequest;
    toJSON(message: AddClusterShardRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        shardName?: string | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        shardName?: string | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
            replicaPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "shardName" | "hostSpecs">, never>>(object: I): AddClusterShardRequest;
};
export declare const AddClusterShardMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.AddClusterShardMetadata";
    encode(message: AddClusterShardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterShardMetadata;
    fromJSON(object: any): AddClusterShardMetadata;
    toJSON(message: AddClusterShardMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "shardName">, never>>(object: I): AddClusterShardMetadata;
};
export declare const DeleteClusterShardRequest: {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardRequest";
    encode(message: DeleteClusterShardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardRequest;
    fromJSON(object: any): DeleteClusterShardRequest;
    toJSON(message: DeleteClusterShardRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "shardName">, never>>(object: I): DeleteClusterShardRequest;
};
export declare const DeleteClusterShardMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.DeleteClusterShardMetadata";
    encode(message: DeleteClusterShardMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClusterShardMetadata;
    fromJSON(object: any): DeleteClusterShardMetadata;
    toJSON(message: DeleteClusterShardMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "shardName">, never>>(object: I): DeleteClusterShardMetadata;
};
export declare const RebalanceClusterRequest: {
    $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterRequest";
    encode(message: RebalanceClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RebalanceClusterRequest;
    fromJSON(object: any): RebalanceClusterRequest;
    toJSON(message: RebalanceClusterRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): RebalanceClusterRequest;
};
export declare const RebalanceClusterMetadata: {
    $type: "yandex.cloud.mdb.redis.v1.RebalanceClusterMetadata";
    encode(message: RebalanceClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RebalanceClusterMetadata;
    fromJSON(object: any): RebalanceClusterMetadata;
    toJSON(message: RebalanceClusterMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): RebalanceClusterMetadata;
};
export declare const UpdateHostSpec: {
    $type: "yandex.cloud.mdb.redis.v1.UpdateHostSpec";
    encode(message: UpdateHostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostSpec;
    fromJSON(object: any): UpdateHostSpec;
    toJSON(message: UpdateHostSpec): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        assignPublicIp?: boolean | undefined;
        hostName?: string | undefined;
        replicaPriority?: number | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        assignPublicIp?: boolean | undefined;
        hostName?: string | undefined;
        replicaPriority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "assignPublicIp" | "hostName" | "replicaPriority">, never>>(object: I): UpdateHostSpec;
};
export declare const HostSpec: {
    $type: "yandex.cloud.mdb.redis.v1.HostSpec";
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        shardName?: string | undefined;
        replicaPriority?: number | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        shardName?: string | undefined;
        replicaPriority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName" | "replicaPriority">, never>>(object: I): HostSpec;
};
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.redis.v1.ConfigSpec";
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        version?: string | undefined;
        backupWindowStart?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } | undefined;
        access?: {
            dataLens?: boolean | undefined;
        } | undefined;
        redisConfig50?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
        } | undefined;
        redisConfig60?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
        } | undefined;
        redisConfig62?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } | undefined;
        redisConfig70?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } | undefined;
        redis?: {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
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
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        version?: string | undefined;
        backupWindowStart?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
        } & Record<Exclude<keyof I["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
        access?: ({
            dataLens?: boolean | undefined;
        } & {
            dataLens?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens">, never>) | undefined;
        redisConfig50?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis5_0").Redisconfig50_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig50"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig50"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig50"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
        redisConfig60?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_0").Redisconfig60_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig60"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig60"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
        } & Record<Exclude<keyof I["redisConfig60"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal">, never>) | undefined;
        redisConfig62?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis6_2").Redisconfig62_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig62"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig62"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["redisConfig62"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        redisConfig70?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis7_0").Redisconfig70_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig70"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redisConfig70"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["redisConfig70"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
        redis?: ({
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            clientOutputBufferLimitNormal?: {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } | undefined;
            maxmemoryPercent?: number | undefined;
        } & {
            timeout?: number | undefined;
            password?: string | undefined;
            databases?: number | undefined;
            maxmemoryPolicy?: import("../../../../../yandex/cloud/mdb/redis/v1/config/redis").RedisConfig_MaxmemoryPolicy | undefined;
            notifyKeyspaceEvents?: string | undefined;
            slowlogLogSlowerThan?: number | undefined;
            slowlogMaxLen?: number | undefined;
            clientOutputBufferLimitPubsub?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redis"]["clientOutputBufferLimitPubsub"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            clientOutputBufferLimitNormal?: ({
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & {
                hardLimit?: number | undefined;
                softLimit?: number | undefined;
                softSeconds?: number | undefined;
            } & Record<Exclude<keyof I["redis"]["clientOutputBufferLimitNormal"], "$type" | "hardLimit" | "softLimit" | "softSeconds">, never>) | undefined;
            maxmemoryPercent?: number | undefined;
        } & Record<Exclude<keyof I["redis"], "$type" | "timeout" | "password" | "databases" | "maxmemoryPolicy" | "notifyKeyspaceEvents" | "slowlogLogSlowerThan" | "slowlogMaxLen" | "clientOutputBufferLimitPubsub" | "clientOutputBufferLimitNormal" | "maxmemoryPercent">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "access" | "redisConfig50" | "redisConfig60" | "redisConfig62" | "redisConfig70" | "redis">, never>>(object: I): ConfigSpec;
};
/** A set of methods for managing Redis clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Redis cluster.
     *
     * To get the list of available Redis clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /**
     * Retrieves the list of Redis clusters that belong
     * to the specified folder.
     */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a Redis cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Redis cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Redis cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Start the specified Redis cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stop the specified Redis cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves a Redis cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified Redis cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new Redis cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedules planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Start a manual failover on the specified Redis cluster. */
    readonly startFailover: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/StartFailover";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterFailoverRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterFailoverRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves logs for the specified Redis cluster. */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of operations for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of available backups for the specified Redis cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves a list of hosts for the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Creates new hosts for a cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified hosts for a cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified hosts. */
    readonly updateHosts: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/UpdateHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified shard. */
    readonly getShard: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/GetShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterShardRequest;
        readonly responseSerialize: (value: Shard) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Shard;
    };
    /** Retrieves a list of shards. */
    readonly listShards: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/ListShards";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterShardsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterShardsRequest;
        readonly responseSerialize: (value: ListClusterShardsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterShardsResponse;
    };
    /** Creates a new shard. */
    readonly addShard: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/AddShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified shard. */
    readonly deleteShard: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/DeleteShard";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterShardRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterShardRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
    readonly rebalance: {
        readonly path: "/yandex.cloud.mdb.redis.v1.ClusterService/Rebalance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RebalanceClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RebalanceClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Redis cluster.
     *
     * To get the list of available Redis clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /**
     * Retrieves the list of Redis clusters that belong
     * to the specified folder.
     */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a Redis cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Redis cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Redis cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Start the specified Redis cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stop the specified Redis cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves a Redis cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Creates a backup for the specified Redis cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new Redis cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Start a manual failover on the specified Redis cluster. */
    startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
    /** Retrieves logs for the specified Redis cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of operations for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified Redis cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /** Updates the specified hosts. */
    updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
    /** Returns the specified shard. */
    getShard: handleUnaryCall<GetClusterShardRequest, Shard>;
    /** Retrieves a list of shards. */
    listShards: handleUnaryCall<ListClusterShardsRequest, ListClusterShardsResponse>;
    /** Creates a new shard. */
    addShard: handleUnaryCall<AddClusterShardRequest, Operation>;
    /** Deletes the specified shard. */
    deleteShard: handleUnaryCall<DeleteClusterShardRequest, Operation>;
    /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
    rebalance: handleUnaryCall<RebalanceClusterRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Redis cluster.
     *
     * To get the list of available Redis clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /**
     * Retrieves the list of Redis clusters that belong
     * to the specified folder.
     */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a Redis cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Redis cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Redis cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Start the specified Redis cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stop the specified Redis cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves a Redis cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified Redis cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new Redis cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Start a manual failover on the specified Redis cluster. */
    startFailover(request: StartClusterFailoverRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves logs for the specified Redis cluster. */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of operations for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified Redis cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Creates new hosts for a cluster. */
    addHosts(request: AddClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts(request: DeleteClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified hosts. */
    updateHosts(request: UpdateClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified shard. */
    getShard(request: GetClusterShardRequest, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    getShard(request: GetClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Shard) => void): ClientUnaryCall;
    /** Retrieves a list of shards. */
    listShards(request: ListClusterShardsRequest, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    listShards(request: ListClusterShardsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterShardsResponse) => void): ClientUnaryCall;
    /** Creates a new shard. */
    addShard(request: AddClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addShard(request: AddClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified shard. */
    deleteShard(request: DeleteClusterShardRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteShard(request: DeleteClusterShardRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Rebalances the cluster. Evenly distributes all the hash slots between the shards. */
    rebalance(request: RebalanceClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rebalance(request: RebalanceClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rebalance(request: RebalanceClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
