/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Access, Resources, Cluster, Host, OpenSearch_GroupRole } from "../../../../../yandex/cloud/mdb/opensearch/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/opensearch/v1/maintenance";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { AuthSettings } from "../../../../../yandex/cloud/mdb/opensearch/v1/auth";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { OpenSearchConfig2 } from "../../../../../yandex/cloud/mdb/opensearch/v1/config/opensearch";
import { Backup } from "../../../../../yandex/cloud/mdb/opensearch/v1/backup";
export declare const protobufPackage = "yandex.cloud.mdb.opensearch.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest";
    /**
     * ID of the OpenSearch cluster to return.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest";
    /**
     * ID of the folder to list OpenSearch clusters in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns
     * a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     *
     * 2. An `=` operator.
     *
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse";
    /** List of OpenSearch clusters. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest";
    /** ID of the folder to create the OpenSearch cluster in. */
    folderId: string;
    /** Name of the OpenSearch cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the OpenSearch cluster. */
    description: string;
    /**
     * Custom labels for the OpenSearch cluster as `key:value` pairs.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the OpenSearch cluster. */
    environment: Cluster_Environment;
    /** OpenSearch cluster configuration. */
    configSpec?: ConfigCreateSpec;
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** ID of the service account used to access Object Storage. */
    serviceAccountId: string;
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata";
    /** ID of the OpenSearch cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest";
    /**
     * ID of the OpenSearch cluster resource to update.
     * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the OpenSearch cluster resource should be updated. */
    updateMask?: FieldMask;
    /** New description of the OpenSearch cluster. */
    description: string;
    /**
     * Custom labels for the OpenSearch cluster as `key:value` pairs.
     * For example, `"project": "mvp"` or `"source": "dictionary"`.
     *
     * The new set of labels completely replaces the old one. To add a label, request the current
     * set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /** New cluster configuration */
    configSpec?: ConfigUpdateSpec;
    /** New name for the cluster. The name must be unique within the folder. */
    name: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used to access Object Storage. */
    serviceAccountId: string;
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata";
    /** ID of the OpenSearch cluster resource that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest";
    /**
     * ID of the OpenSearch cluster to delete.
     * To get the OpenSearch cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata";
    /** ID of the OpenSearch cluster that is being deleted. */
    clusterId: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest";
    /**
     * ID of the OpenSearch cluster to request logs for.
     *
     * To get the OpenSearch cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from log table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /** End timestamp for the logs request. */
    toTime?: Date;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListClusterLogsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
     *
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     *
     * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     *
     * Examples of a filter:
     * * `message.hostname='node1.db.cloud.yandex.net'`;
     * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
     */
    filter: string;
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
}
export declare enum ListClusterLogsRequest_ServiceType {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** OPENSEARCH - OpenSearch logs. */
    OPENSEARCH = 1,
    /** DASHBOARDS - Dashboards logs. */
    DASHBOARDS = 2,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface LogRecord {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord";
    /** Time when the log was recorded. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     *
     * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord";
    /** One of the requested log records. */
    record?: LogRecord;
    /**
     * This token allows you to continue streaming logs starting from the exact same record.
     *
     * To do that, specify value of [next_record_token] as the value for [StreamLogs.record_token] parameter in the next [StreamLogs] request.
     *
     * This value is interchangeable with [ListLogs.next_page_token] from [ListLogs] method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest";
    /** ID of the OpenSearch cluster. */
    clusterId: string;
    /**
     * Columns from log table to get in the response.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /**
     * End timestamp for the logs request.
     *
     * If this field is not set, all existing logs are sent as well as the new ones as they appear.
     *
     * In essence it has `tail -f` semantics.
     */
    toTime?: Date;
    /**
     * Record token. Set `record_token` to the `next_record_token` returned by the previous [StreamLogs]
     * request to start streaming from the next log record.
     */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field.
     *
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     *
     * 3. A value. Must be 1-63 characters long and match the regular expression `^[a-z0-9.-]{1,61}$`.
     *
     * Examples of a filter:
     * * `message.hostname='node1.db.cloud.yandex.net'`;
     * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
     */
    filter: string;
    /** Type of the service to request logs about. */
    serviceType: StreamClusterLogsRequest_ServiceType;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** OPENSEARCH - OpenSearch logs. */
    OPENSEARCH = 1,
    /** DASHBOARDS - Dashboards logs. */
    DASHBOARDS = 2,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest";
    /** ID of the OpenSearch cluster resource to list operations for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns
     * a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse";
    /** List of Operation resources for the specified OpenSearch cluster. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest";
    /**
     * ID of the OpenSearch cluster.
     * To get the OpenSearch cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns
     * a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse";
    /** Requested list of hosts for the cluster. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token]
     * as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest";
    /** ID of the OpenSearch cluster to move. */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata";
    /** ID of the OpenSearch cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destnation folder. */
    destinationFolderId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest";
    /**
     * ID of the OpenSearch cluster to start.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata";
    /** ID of the OpenSearch cluster being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest";
    /**
     * ID of the OpenSearch cluster to stop.
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata";
    /** ID of the OpenSearch cluster being stopped. */
    clusterId: string;
}
export interface ConfigCreateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec";
    /** OpenSearch version. */
    version: string;
    /** OpenSearch admin password. */
    adminPassword: string;
    /** OpenSearch configuration. */
    opensearchSpec?: OpenSearchCreateSpec;
    /** Dashboards configuration. */
    dashboardsSpec?: DashboardsCreateSpec;
    /** Access policy for external services. */
    access?: Access;
}
/** OpenSearch create-time configuration. */
export interface OpenSearchCreateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec";
    /** Names of the cluster plugins. */
    plugins: string[];
    /** OpenSearch type host groups of the cluster. */
    nodeGroups: OpenSearchCreateSpec_NodeGroup[];
    opensearchConfig2?: OpenSearchConfig2 | undefined;
}
/** Configuration of the host group. */
export interface OpenSearchCreateSpec_NodeGroup {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup";
    /** Name of the group. */
    name: string;
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
    /** IDs of the availability zones the hosts belong to. */
    zoneIds: string[];
    /** IDs of the subnets that the hosts belong to. */
    subnetIds: string[];
    /** Determines whether a public IP is assigned to the hosts in the group. */
    assignPublicIp: boolean;
    /** Roles of the hosts in the group. */
    roles: OpenSearch_GroupRole[];
}
/** Dashboards create-time configuration. */
export interface DashboardsCreateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec";
    /** Dashboards type host groups of the cluster. */
    nodeGroups: DashboardsCreateSpec_NodeGroup[];
}
export interface DashboardsCreateSpec_NodeGroup {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup";
    /** Name of the group. */
    name: string;
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
    /** IDs of the availability zones the hosts belong to. */
    zoneIds: string[];
    /** IDs of the subnets that the hosts belong to. */
    subnetIds: string[];
    /** Determines whether a public IP is assigned to the hosts in the group. */
    assignPublicIp: boolean;
}
export interface ConfigUpdateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec";
    /** OpenSearch version. */
    version: string;
    /** OpenSearch admin password. */
    adminPassword: string;
    /** OpenSearch configuration. */
    opensearchSpec?: OpenSearchClusterUpdateSpec;
    /** Dashboards configuration. */
    dashboardsSpec?: DashboardsClusterUpdateSpec;
    /** Access policy for external services. */
    access?: Access;
}
export interface OpenSearchClusterUpdateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec";
    /** Names of the cluster plugins. */
    plugins: string[];
    opensearchConfig2?: OpenSearchConfig2 | undefined;
}
/** Dashboards configuration. */
export interface DashboardsClusterUpdateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec";
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest";
    /**
     * ID of the OpenSearch cluster to back up.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata";
    /** ID of the OpenSearch cluster being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest";
    /**
     * ID of the backup to create a new cluster from.
     *
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Name of the new OpenSearch cluster to be created from the backup. The name must be unique within the folder. */
    name: string;
    /** Description of the new OpenSearch cluster to be created from the backup. */
    description: string;
    /**
     * Custom labels for the new OpenSearch cluster to be created from the backup as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new OpenSearch cluster to be created from the backup. */
    environment: Cluster_Environment;
    /** Configuration for the new OpenSearch cluster to be created from the backup. */
    configSpec?: ConfigCreateSpec;
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** ID of the service account used to access Object Storage. */
    serviceAccountId: string;
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /**
     * ID of the folder to create the OpenSearch cluster in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata";
    /** ID of the new OpenSearch cluster being created from a backup. */
    clusterId: string;
    /** ID of the backup being used for creating a cluster. */
    backupId: string;
}
export interface RescheduleMaintenanceRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest";
    /**
     * ID of the OpenSearch cluster to reschedule the maintenance operation for.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** The type of the reschedule request. */
    rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
    /**
     * The time until which this maintenance operation should be delayed.
     * The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks.
     * The value can also point to a moment in the past if [reschedule_type.IMMEDIATE] reschedule type is selected.
     */
    delayedUntil?: Date;
}
export declare enum RescheduleMaintenanceRequest_RescheduleType {
    /** RESCHEDULE_TYPE_UNSPECIFIED - Time of the maintenance is not specified.. */
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
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata";
    /** ID of the OpenSearch cluster where the reschedule is applied. */
    clusterId: string;
    /** The time until which this maintenance operation is to be delayed. */
    delayedUntil?: Date;
}
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest";
    /**
     * ID of the OpenSearch cluster.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListClusterBackupsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the [ListClusterBackupsResponse.next_page_token]
     * returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse";
    /** List of the OpenSearch cluster backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface DeleteOpenSearchNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest";
    /**
     * ID of the OpenSearch cluster to delete the OpenSearch type host group in.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the OpenSearch type host group to delete. */
    name: string;
}
export interface UpdateOpenSearchNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest";
    /**
     * ID of the OpenSearch cluster to update the OpenSearch type host group in.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the OpenSearch type host group to be updated. */
    name: string;
    /** Field mask that specifies which fields of the host group configuration should be updated. */
    updateMask?: FieldMask;
    /** New configuration for the host group. */
    nodeGroupSpec?: OpenSearchNodeGroupUpdateSpec;
}
export interface OpenSearchNodeGroupUpdateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec";
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
    /** Roles of the host group. */
    roles: OpenSearch_GroupRole[];
}
export interface AddOpenSearchNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest";
    /**
     * ID of the OpenSearch cluster to create the OpenSearch type host group in.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the new host group. */
    nodeGroupSpec?: OpenSearchCreateSpec_NodeGroup;
}
export interface DeleteDashboardsNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest";
    /**
     * ID of the OpenSearch cluster to delete the Dashboards type host group in.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the Dashboards type host group to delete. */
    name: string;
}
export interface UpdateDashboardsNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest";
    /** ID of the OpenSearch cluster to update the Dashboards type host group in. */
    clusterId: string;
    /** Name of the Dashboards type host group to be updated. */
    name: string;
    /** Field mask that specifies which fields of the host group configuration should be updated. */
    updateMask?: FieldMask;
    /** New configuration for the host group. */
    nodeGroupSpec?: DashboardsNodeGroupUpdateSpec;
}
export interface DashboardsNodeGroupUpdateSpec {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec";
    /** Resources allocated to the hosts. */
    resources?: Resources;
    /** Number of hosts in the group. */
    hostsCount: number;
}
export interface AddDashboardsNodeGroupRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest";
    /**
     * ID of the OpenSearch cluster to create the Dashboards type host group in.
     *
     * To get the ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the new host group. */
    nodeGroupSpec?: DashboardsCreateSpec_NodeGroup;
}
export interface AddNodeGroupMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata";
    /** ID of the OpenSearch cluster where the host group is being created. */
    clusterId: string;
    /** Name of the host group being created. */
    name: string;
}
export interface UpdateNodeGroupMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata";
    /** ID of the OpenSearch cluster where the host group is being updated. */
    clusterId: string;
    /** Name of the host group being updated. */
    name: string;
}
export interface DeleteNodeGroupMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata";
    /** ID of the OpenSearch cluster where the host group is being deleted. */
    clusterId: string;
    /** Name of the host group being deleted. */
    name: string;
}
export interface GetAuthSettingsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest";
    /** Required. ID of the OpenSearch cluster. */
    clusterId: string;
}
export interface UpdateAuthSettingsRequest {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest";
    /** Required. ID of the OpenSearch cluster. */
    clusterId: string;
    /** Required. Auth settings. */
    settings?: AuthSettings;
}
export interface UpdateAuthSettingsMetadata {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata";
    /** ID of the OpenSearch cluster. */
    clusterId: string;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                access?: {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                opensearch?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                dashboards?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
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
            serviceAccountId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                access?: {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                opensearch?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                dashboards?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
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
            serviceAccountId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                access?: {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                opensearch?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                dashboards?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
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
            serviceAccountId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Status | undefined;
            config?: ({
                version?: string | undefined;
                access?: {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                opensearch?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                dashboards?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                version?: string | undefined;
                access?: ({
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } & {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
                opensearch?: ({
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    nodeGroups?: ({
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] & ({
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    } & {
                        name?: string | undefined;
                        resources?: ({
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } & {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["nodeGroups"], "$type" | keyof {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[]>, never>) | undefined;
                    plugins?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                    opensearchConfigSet2?: ({
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } & {
                        effectiveConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["opensearchConfigSet2"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                        userConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["opensearchConfigSet2"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                        defaultConfig?: ({
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["opensearchConfigSet2"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"]["opensearchConfigSet2"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["opensearch"], "$type" | "nodeGroups" | "plugins" | "opensearchConfigSet2">, never>) | undefined;
                dashboards?: ({
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
                } & {
                    nodeGroups?: ({
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] & ({
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    } & {
                        name?: string | undefined;
                        resources?: ({
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } & {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"]["nodeGroups"], "$type" | keyof {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["dashboards"], "$type" | "nodeGroups">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "version" | "access" | "opensearch" | "dashboards">, never>) | undefined;
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
            serviceAccountId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: ({
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } & {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["plannedOperation"], "$type" | "info" | "delayedUntil" | "latestMaintenanceTime" | "nextMaintenanceWindowTime">, never>) | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                access?: {
                    serverless?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                opensearch?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                        roles?: OpenSearch_GroupRole[] | undefined;
                    }[] | undefined;
                    plugins?: string[] | undefined;
                    opensearchConfigSet2?: {
                        effectiveConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        userConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                        defaultConfig?: {
                            fielddataCacheSize?: string | undefined;
                            reindexRemoteWhitelist?: string | undefined;
                            maxClauseCount?: number | undefined;
                        } | undefined;
                    } | undefined;
                } | undefined;
                dashboards?: {
                    nodeGroups?: {
                        name?: string | undefined;
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        zoneIds?: string[] | undefined;
                        subnetIds?: string[] | undefined;
                        hostsCount?: number | undefined;
                        assignPublicIp?: boolean | undefined;
                    }[] | undefined;
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
            serviceAccountId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
                latestMaintenanceTime?: Date | undefined;
                nextMaintenanceWindowTime?: Date | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest";
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
        serviceAccountId?: string | undefined;
        configSpec?: {
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
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
        serviceAccountId?: string | undefined;
        configSpec?: ({
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            access?: ({
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[]>, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                opensearchConfig2?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"], "$type" | "nodeGroups" | "plugins" | "opensearchConfig2">, never>) | undefined;
            dashboardsSpec?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"], "$type" | "nodeGroups">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "access" | "adminPassword" | "opensearchSpec" | "dashboardsSpec">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "configSpec" | "maintenanceWindow" | "environment">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.opensearch.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest";
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
        serviceAccountId?: string | undefined;
        clusterId?: string | undefined;
        configSpec?: {
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {} | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
        serviceAccountId?: string | undefined;
        clusterId?: string | undefined;
        configSpec?: ({
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {} | undefined;
        } & {
            version?: string | undefined;
            access?: ({
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: ({
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } & {
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                opensearchConfig2?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"], "$type" | "plugins" | "opensearchConfig2">, never>) | undefined;
            dashboardsSpec?: ({} & {} & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "access" | "adminPassword" | "opensearchSpec" | "dashboardsSpec">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "clusterId" | "configSpec" | "maintenanceWindow">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsRequest";
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
        serviceType?: ListClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        alwaysNextPageToken?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        serviceType?: ListClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        alwaysNextPageToken?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId" | "columnFilter" | "serviceType" | "fromTime" | "toTime" | "alwaysNextPageToken">, never>>(object: I): ListClusterLogsRequest;
};
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.opensearch.v1.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterLogsResponse";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StreamClusterLogsRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            type?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
            nodeGroup?: string | undefined;
            system?: {
                memory?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                disk?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                cpu?: {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            type?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
            nodeGroup?: string | undefined;
            system?: {
                memory?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                disk?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                cpu?: {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            type?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
            nodeGroup?: string | undefined;
            system?: {
                memory?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                disk?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                cpu?: {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
            } | undefined;
        } & {
            type?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Type | undefined;
            name?: string | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["hosts"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
            nodeGroup?: string | undefined;
            system?: ({
                memory?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                disk?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                cpu?: {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
            } & {
                memory?: ({
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & Record<Exclude<keyof I["hosts"][number]["system"]["memory"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
                disk?: ({
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & Record<Exclude<keyof I["hosts"][number]["system"]["disk"], "$type" | "total" | "timestamp" | "used">, never>) | undefined;
                cpu?: ({
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } & Record<Exclude<keyof I["hosts"][number]["system"]["cpu"], "$type" | "timestamp" | "used">, never>) | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["system"], "$type" | "memory" | "disk" | "cpu">, never>) | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "type" | "name" | "subnetId" | "zoneId" | "resources" | "health" | "clusterId" | "assignPublicIp" | "roles" | "nodeGroup" | "system">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            type?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/opensearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
            nodeGroup?: string | undefined;
            system?: {
                memory?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                disk?: {
                    total?: number | undefined;
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
                cpu?: {
                    timestamp?: number | undefined;
                    used?: number | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const MoveClusterRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.MoveClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.StopClusterMetadata";
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
export declare const ConfigCreateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigCreateSpec";
    encode(message: ConfigCreateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigCreateSpec;
    fromJSON(object: any): ConfigCreateSpec;
    toJSON(message: ConfigCreateSpec): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        access?: {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
        adminPassword?: string | undefined;
        opensearchSpec?: {
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] | undefined;
            plugins?: string[] | undefined;
            opensearchConfig2?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } | undefined;
        dashboardsSpec?: {
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        access?: ({
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
        adminPassword?: string | undefined;
        opensearchSpec?: ({
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] | undefined;
            plugins?: string[] | undefined;
            opensearchConfig2?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } & {
            nodeGroups?: ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[] & ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            } & {
                name?: string | undefined;
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                zoneIds?: (string[] & string[] & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
            } & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["opensearchSpec"]["nodeGroups"], "$type" | keyof {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
                roles?: OpenSearch_GroupRole[] | undefined;
            }[]>, never>) | undefined;
            plugins?: (string[] & string[] & Record<Exclude<keyof I["opensearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            opensearchConfig2?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["opensearchSpec"]["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
        } & Record<Exclude<keyof I["opensearchSpec"], "$type" | "nodeGroups" | "plugins" | "opensearchConfig2">, never>) | undefined;
        dashboardsSpec?: ({
            nodeGroups?: {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] | undefined;
        } & {
            nodeGroups?: ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[] & ({
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            } & {
                name?: string | undefined;
                resources?: ({
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } & Record<Exclude<keyof I["dashboardsSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                zoneIds?: (string[] & string[] & Record<Exclude<keyof I["dashboardsSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["dashboardsSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            } & Record<Exclude<keyof I["dashboardsSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["dashboardsSpec"]["nodeGroups"], "$type" | keyof {
                name?: string | undefined;
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                zoneIds?: string[] | undefined;
                subnetIds?: string[] | undefined;
                hostsCount?: number | undefined;
                assignPublicIp?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["dashboardsSpec"], "$type" | "nodeGroups">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "access" | "adminPassword" | "opensearchSpec" | "dashboardsSpec">, never>>(object: I): ConfigCreateSpec;
};
export declare const OpenSearchCreateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec";
    encode(message: OpenSearchCreateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchCreateSpec;
    fromJSON(object: any): OpenSearchCreateSpec;
    toJSON(message: OpenSearchCreateSpec): unknown;
    fromPartial<I extends {
        nodeGroups?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[] | undefined;
        plugins?: string[] | undefined;
        opensearchConfig2?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
    } & {
        nodeGroups?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[] & ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["nodeGroups"], "$type" | keyof {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        }[]>, never>) | undefined;
        plugins?: (string[] & string[] & Record<Exclude<keyof I["plugins"], "$type" | keyof string[]>, never>) | undefined;
        opensearchConfig2?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroups" | "plugins" | "opensearchConfig2">, never>>(object: I): OpenSearchCreateSpec;
};
export declare const OpenSearchCreateSpec_NodeGroup: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchCreateSpec.NodeGroup";
    encode(message: OpenSearchCreateSpec_NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchCreateSpec_NodeGroup;
    fromJSON(object: any): OpenSearchCreateSpec_NodeGroup;
    toJSON(message: OpenSearchCreateSpec_NodeGroup): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        zoneIds?: string[] | undefined;
        subnetIds?: string[] | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: OpenSearch_GroupRole[] | undefined;
    } & {
        name?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
        roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>>(object: I): OpenSearchCreateSpec_NodeGroup;
};
export declare const DashboardsCreateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec";
    encode(message: DashboardsCreateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DashboardsCreateSpec;
    fromJSON(object: any): DashboardsCreateSpec;
    toJSON(message: DashboardsCreateSpec): unknown;
    fromPartial<I extends {
        nodeGroups?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nodeGroups?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["nodeGroups"], "$type" | keyof {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nodeGroups">, never>>(object: I): DashboardsCreateSpec;
};
export declare const DashboardsCreateSpec_NodeGroup: {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsCreateSpec.NodeGroup";
    encode(message: DashboardsCreateSpec_NodeGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DashboardsCreateSpec_NodeGroup;
    fromJSON(object: any): DashboardsCreateSpec_NodeGroup;
    toJSON(message: DashboardsCreateSpec_NodeGroup): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        zoneIds?: string[] | undefined;
        subnetIds?: string[] | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
    } & {
        name?: string | undefined;
        resources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        zoneIds?: (string[] & string[] & Record<Exclude<keyof I["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        hostsCount?: number | undefined;
        assignPublicIp?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>>(object: I): DashboardsCreateSpec_NodeGroup;
};
export declare const ConfigUpdateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.ConfigUpdateSpec";
    encode(message: ConfigUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigUpdateSpec;
    fromJSON(object: any): ConfigUpdateSpec;
    toJSON(message: ConfigUpdateSpec): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        access?: {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
        adminPassword?: string | undefined;
        opensearchSpec?: {
            plugins?: string[] | undefined;
            opensearchConfig2?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } | undefined;
        dashboardsSpec?: {} | undefined;
    } & {
        version?: string | undefined;
        access?: ({
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & {
            serverless?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
        adminPassword?: string | undefined;
        opensearchSpec?: ({
            plugins?: string[] | undefined;
            opensearchConfig2?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } & {
            plugins?: (string[] & string[] & Record<Exclude<keyof I["opensearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            opensearchConfig2?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["opensearchSpec"]["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
        } & Record<Exclude<keyof I["opensearchSpec"], "$type" | "plugins" | "opensearchConfig2">, never>) | undefined;
        dashboardsSpec?: ({} & {} & Record<Exclude<keyof I["dashboardsSpec"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "access" | "adminPassword" | "opensearchSpec" | "dashboardsSpec">, never>>(object: I): ConfigUpdateSpec;
};
export declare const OpenSearchClusterUpdateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchClusterUpdateSpec";
    encode(message: OpenSearchClusterUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchClusterUpdateSpec;
    fromJSON(object: any): OpenSearchClusterUpdateSpec;
    toJSON(message: OpenSearchClusterUpdateSpec): unknown;
    fromPartial<I extends {
        plugins?: string[] | undefined;
        opensearchConfig2?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } | undefined;
    } & {
        plugins?: (string[] & string[] & Record<Exclude<keyof I["plugins"], "$type" | keyof string[]>, never>) | undefined;
        opensearchConfig2?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "plugins" | "opensearchConfig2">, never>>(object: I): OpenSearchClusterUpdateSpec;
};
export declare const DashboardsClusterUpdateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsClusterUpdateSpec";
    encode(_: DashboardsClusterUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DashboardsClusterUpdateSpec;
    fromJSON(_: any): DashboardsClusterUpdateSpec;
    toJSON(_: DashboardsClusterUpdateSpec): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): DashboardsClusterUpdateSpec;
};
export declare const BackupClusterRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.BackupClusterMetadata";
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
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest";
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
        serviceAccountId?: string | undefined;
        configSpec?: {
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
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
        serviceAccountId?: string | undefined;
        configSpec?: ({
            version?: string | undefined;
            access?: {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            dashboardsSpec?: {
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            access?: ({
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                serverless?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "serverless" | "dataTransfer">, never>) | undefined;
            adminPassword?: string | undefined;
            opensearchSpec?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] | undefined;
                plugins?: string[] | undefined;
                opensearchConfig2?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>)[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                    roles?: OpenSearch_GroupRole[] | undefined;
                }[]>, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                opensearchConfig2?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"]["opensearchConfig2"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["opensearchSpec"], "$type" | "nodeGroups" | "plugins" | "opensearchConfig2">, never>) | undefined;
            dashboardsSpec?: ({
                nodeGroups?: {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] | undefined;
            } & {
                nodeGroups?: ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[] & ({
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & {
                    name?: string | undefined;
                    resources?: ({
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    zoneIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
                    subnetIds?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"][number], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"]["nodeGroups"], "$type" | keyof {
                    name?: string | undefined;
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    zoneIds?: string[] | undefined;
                    subnetIds?: string[] | undefined;
                    hostsCount?: number | undefined;
                    assignPublicIp?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["dashboardsSpec"], "$type" | "nodeGroups">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "access" | "adminPassword" | "opensearchSpec" | "dashboardsSpec">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/opensearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "backupId" | "deletionProtection" | "serviceAccountId" | "configSpec" | "maintenanceWindow" | "environment">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.opensearch.v1.RestoreClusterMetadata";
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
export declare const RescheduleMaintenanceRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.RescheduleMaintenanceMetadata";
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
export declare const ListClusterBackupsRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsRequest";
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
    $type: "yandex.cloud.mdb.opensearch.v1.ListClusterBackupsResponse";
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
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            indicesTotal?: number | undefined;
            opensearchVersion?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            indicesTotal?: number | undefined;
            opensearchVersion?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            indicesTotal?: number | undefined;
            opensearchVersion?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["indices"], "$type" | keyof string[]>, never>) | undefined;
            indicesTotal?: number | undefined;
            opensearchVersion?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sizeBytes" | "sourceClusterId" | "indices" | "indicesTotal" | "opensearchVersion">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            indicesTotal?: number | undefined;
            opensearchVersion?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const DeleteOpenSearchNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteOpenSearchNodeGroupRequest";
    encode(message: DeleteOpenSearchNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteOpenSearchNodeGroupRequest;
    fromJSON(object: any): DeleteOpenSearchNodeGroupRequest;
    toJSON(message: DeleteOpenSearchNodeGroupRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): DeleteOpenSearchNodeGroupRequest;
};
export declare const UpdateOpenSearchNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateOpenSearchNodeGroupRequest";
    encode(message: UpdateOpenSearchNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOpenSearchNodeGroupRequest;
    fromJSON(object: any): UpdateOpenSearchNodeGroupRequest;
    toJSON(message: UpdateOpenSearchNodeGroupRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        clusterId?: string | undefined;
        nodeGroupSpec?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            hostsCount?: number | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        clusterId?: string | undefined;
        nodeGroupSpec?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            hostsCount?: number | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } & {
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroupSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            hostsCount?: number | undefined;
            roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["nodeGroupSpec"]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nodeGroupSpec"], "$type" | "resources" | "hostsCount" | "roles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "updateMask" | "clusterId" | "nodeGroupSpec">, never>>(object: I): UpdateOpenSearchNodeGroupRequest;
};
export declare const OpenSearchNodeGroupUpdateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.OpenSearchNodeGroupUpdateSpec";
    encode(message: OpenSearchNodeGroupUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OpenSearchNodeGroupUpdateSpec;
    fromJSON(object: any): OpenSearchNodeGroupUpdateSpec;
    toJSON(message: OpenSearchNodeGroupUpdateSpec): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        hostsCount?: number | undefined;
        roles?: OpenSearch_GroupRole[] | undefined;
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
        hostsCount?: number | undefined;
        roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "hostsCount" | "roles">, never>>(object: I): OpenSearchNodeGroupUpdateSpec;
};
export declare const AddOpenSearchNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.AddOpenSearchNodeGroupRequest";
    encode(message: AddOpenSearchNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddOpenSearchNodeGroupRequest;
    fromJSON(object: any): AddOpenSearchNodeGroupRequest;
    toJSON(message: AddOpenSearchNodeGroupRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        nodeGroupSpec?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        nodeGroupSpec?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: OpenSearch_GroupRole[] | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroupSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroupSpec"]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroupSpec"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
            roles?: (OpenSearch_GroupRole[] & OpenSearch_GroupRole[] & Record<Exclude<keyof I["nodeGroupSpec"]["roles"], "$type" | keyof OpenSearch_GroupRole[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nodeGroupSpec"], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp" | "roles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "nodeGroupSpec">, never>>(object: I): AddOpenSearchNodeGroupRequest;
};
export declare const DeleteDashboardsNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteDashboardsNodeGroupRequest";
    encode(message: DeleteDashboardsNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDashboardsNodeGroupRequest;
    fromJSON(object: any): DeleteDashboardsNodeGroupRequest;
    toJSON(message: DeleteDashboardsNodeGroupRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): DeleteDashboardsNodeGroupRequest;
};
export declare const UpdateDashboardsNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateDashboardsNodeGroupRequest";
    encode(message: UpdateDashboardsNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDashboardsNodeGroupRequest;
    fromJSON(object: any): UpdateDashboardsNodeGroupRequest;
    toJSON(message: UpdateDashboardsNodeGroupRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        clusterId?: string | undefined;
        nodeGroupSpec?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            hostsCount?: number | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        clusterId?: string | undefined;
        nodeGroupSpec?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            hostsCount?: number | undefined;
        } & {
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroupSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            hostsCount?: number | undefined;
        } & Record<Exclude<keyof I["nodeGroupSpec"], "$type" | "resources" | "hostsCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "updateMask" | "clusterId" | "nodeGroupSpec">, never>>(object: I): UpdateDashboardsNodeGroupRequest;
};
export declare const DashboardsNodeGroupUpdateSpec: {
    $type: "yandex.cloud.mdb.opensearch.v1.DashboardsNodeGroupUpdateSpec";
    encode(message: DashboardsNodeGroupUpdateSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DashboardsNodeGroupUpdateSpec;
    fromJSON(object: any): DashboardsNodeGroupUpdateSpec;
    toJSON(message: DashboardsNodeGroupUpdateSpec): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        hostsCount?: number | undefined;
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
        hostsCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "hostsCount">, never>>(object: I): DashboardsNodeGroupUpdateSpec;
};
export declare const AddDashboardsNodeGroupRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.AddDashboardsNodeGroupRequest";
    encode(message: AddDashboardsNodeGroupRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDashboardsNodeGroupRequest;
    fromJSON(object: any): AddDashboardsNodeGroupRequest;
    toJSON(message: AddDashboardsNodeGroupRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        nodeGroupSpec?: {
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        nodeGroupSpec?: ({
            name?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            zoneIds?: string[] | undefined;
            subnetIds?: string[] | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            resources?: ({
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } & Record<Exclude<keyof I["nodeGroupSpec"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            zoneIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroupSpec"]["zoneIds"], "$type" | keyof string[]>, never>) | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["nodeGroupSpec"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            hostsCount?: number | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["nodeGroupSpec"], "$type" | "name" | "resources" | "zoneIds" | "subnetIds" | "hostsCount" | "assignPublicIp">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "nodeGroupSpec">, never>>(object: I): AddDashboardsNodeGroupRequest;
};
export declare const AddNodeGroupMetadata: {
    $type: "yandex.cloud.mdb.opensearch.v1.AddNodeGroupMetadata";
    encode(message: AddNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddNodeGroupMetadata;
    fromJSON(object: any): AddNodeGroupMetadata;
    toJSON(message: AddNodeGroupMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): AddNodeGroupMetadata;
};
export declare const UpdateNodeGroupMetadata: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateNodeGroupMetadata";
    encode(message: UpdateNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateNodeGroupMetadata;
    fromJSON(object: any): UpdateNodeGroupMetadata;
    toJSON(message: UpdateNodeGroupMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): UpdateNodeGroupMetadata;
};
export declare const DeleteNodeGroupMetadata: {
    $type: "yandex.cloud.mdb.opensearch.v1.DeleteNodeGroupMetadata";
    encode(message: DeleteNodeGroupMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteNodeGroupMetadata;
    fromJSON(object: any): DeleteNodeGroupMetadata;
    toJSON(message: DeleteNodeGroupMetadata): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId">, never>>(object: I): DeleteNodeGroupMetadata;
};
export declare const GetAuthSettingsRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.GetAuthSettingsRequest";
    encode(message: GetAuthSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthSettingsRequest;
    fromJSON(object: any): GetAuthSettingsRequest;
    toJSON(message: GetAuthSettingsRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): GetAuthSettingsRequest;
};
export declare const UpdateAuthSettingsRequest: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsRequest";
    encode(message: UpdateAuthSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthSettingsRequest;
    fromJSON(object: any): UpdateAuthSettingsRequest;
    toJSON(message: UpdateAuthSettingsRequest): unknown;
    fromPartial<I extends {
        settings?: {
            saml?: {
                enabled?: boolean | undefined;
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                dashboardsUrl?: string | undefined;
                rolesKey?: string | undefined;
                subjectKey?: string | undefined;
            } | undefined;
        } | undefined;
        clusterId?: string | undefined;
    } & {
        settings?: ({
            saml?: {
                enabled?: boolean | undefined;
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                dashboardsUrl?: string | undefined;
                rolesKey?: string | undefined;
                subjectKey?: string | undefined;
            } | undefined;
        } & {
            saml?: ({
                enabled?: boolean | undefined;
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                dashboardsUrl?: string | undefined;
                rolesKey?: string | undefined;
                subjectKey?: string | undefined;
            } & {
                enabled?: boolean | undefined;
                idpEntityId?: string | undefined;
                idpMetadataFile?: Buffer | undefined;
                spEntityId?: string | undefined;
                dashboardsUrl?: string | undefined;
                rolesKey?: string | undefined;
                subjectKey?: string | undefined;
            } & Record<Exclude<keyof I["settings"]["saml"], "$type" | "enabled" | "idpEntityId" | "idpMetadataFile" | "spEntityId" | "dashboardsUrl" | "rolesKey" | "subjectKey">, never>) | undefined;
        } & Record<Exclude<keyof I["settings"], "$type" | "saml">, never>) | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "settings" | "clusterId">, never>>(object: I): UpdateAuthSettingsRequest;
};
export declare const UpdateAuthSettingsMetadata: {
    $type: "yandex.cloud.mdb.opensearch.v1.UpdateAuthSettingsMetadata";
    encode(message: UpdateAuthSettingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAuthSettingsMetadata;
    fromJSON(object: any): UpdateAuthSettingsMetadata;
    toJSON(message: UpdateAuthSettingsMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): UpdateAuthSettingsMetadata;
};
/** A set of methods for managing OpenSearch clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified OpenSearch cluster.
     *
     * To get the list of all available OpenSearch clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates an OpenSearch cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified OpenSearch cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified OpenSearch cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified OpenSearch cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new OpenSearch cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedules a planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns a list of available backups for the specified OpenSearch cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Moves the specified OpenSearch cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified OpenSearch cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified OpenSearch cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for the specified OpenSearch cluster.
     * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of Operation resources for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves a list of hosts for the specified cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Creates an OpenSearch type host group. */
    readonly addOpenSearchNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddOpenSearchNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddOpenSearchNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddOpenSearchNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes an OpenSearch type host group. */
    readonly deleteOpenSearchNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteOpenSearchNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteOpenSearchNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteOpenSearchNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates an OpenSearch type host group. */
    readonly updateOpenSearchNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateOpenSearchNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOpenSearchNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOpenSearchNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a Dashboards type host group. */
    readonly addDashboardsNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/AddDashboardsNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddDashboardsNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddDashboardsNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes a Dashboards type host group. */
    readonly deleteDashboardsNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/DeleteDashboardsNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDashboardsNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDashboardsNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates a Dashboards type host group. */
    readonly updateDashboardsNodeGroup: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateDashboardsNodeGroup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDashboardsNodeGroupRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDashboardsNodeGroupRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves auth settings for specified cluster. */
    readonly getAuthSettings: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/GetAuthSettings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAuthSettingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAuthSettingsRequest;
        readonly responseSerialize: (value: AuthSettings) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AuthSettings;
    };
    /** Updates auth settings for specified cluster. */
    readonly updateAuthSettings: {
        readonly path: "/yandex.cloud.mdb.opensearch.v1.ClusterService/UpdateAuthSettings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAuthSettingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAuthSettingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified OpenSearch cluster.
     *
     * To get the list of all available OpenSearch clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates an OpenSearch cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified OpenSearch cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified OpenSearch cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Creates a backup for the specified OpenSearch cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new OpenSearch cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules a planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Returns a list of available backups for the specified OpenSearch cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Moves the specified OpenSearch cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Starts the specified OpenSearch cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified OpenSearch cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /**
     * Retrieves logs for the specified OpenSearch cluster.
     * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates an OpenSearch type host group. */
    addOpenSearchNodeGroup: handleUnaryCall<AddOpenSearchNodeGroupRequest, Operation>;
    /** Deletes an OpenSearch type host group. */
    deleteOpenSearchNodeGroup: handleUnaryCall<DeleteOpenSearchNodeGroupRequest, Operation>;
    /** Updates an OpenSearch type host group. */
    updateOpenSearchNodeGroup: handleUnaryCall<UpdateOpenSearchNodeGroupRequest, Operation>;
    /** Creates a Dashboards type host group. */
    addDashboardsNodeGroup: handleUnaryCall<AddDashboardsNodeGroupRequest, Operation>;
    /** Deletes a Dashboards type host group. */
    deleteDashboardsNodeGroup: handleUnaryCall<DeleteDashboardsNodeGroupRequest, Operation>;
    /** Updates a Dashboards type host group. */
    updateDashboardsNodeGroup: handleUnaryCall<UpdateDashboardsNodeGroupRequest, Operation>;
    /** Retrieves auth settings for specified cluster. */
    getAuthSettings: handleUnaryCall<GetAuthSettingsRequest, AuthSettings>;
    /** Updates auth settings for specified cluster. */
    updateAuthSettings: handleUnaryCall<UpdateAuthSettingsRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified OpenSearch cluster.
     *
     * To get the list of all available OpenSearch clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of OpenSearch clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates an OpenSearch cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified OpenSearch cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified OpenSearch cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified OpenSearch cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new OpenSearch cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedules a planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns a list of available backups for the specified OpenSearch cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Moves the specified OpenSearch cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified OpenSearch cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified OpenSearch cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for the specified OpenSearch cluster.
     * For detailed description, see the [Logs](/yandex-mdb-guide/concepts/logs.html) section in the developer's guide.
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as ListLogs but using server-side streaming. Also allows for 'tail -f' semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Creates an OpenSearch type host group. */
    addOpenSearchNodeGroup(request: AddOpenSearchNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOpenSearchNodeGroup(request: AddOpenSearchNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOpenSearchNodeGroup(request: AddOpenSearchNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes an OpenSearch type host group. */
    deleteOpenSearchNodeGroup(request: DeleteOpenSearchNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteOpenSearchNodeGroup(request: DeleteOpenSearchNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteOpenSearchNodeGroup(request: DeleteOpenSearchNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates an OpenSearch type host group. */
    updateOpenSearchNodeGroup(request: UpdateOpenSearchNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateOpenSearchNodeGroup(request: UpdateOpenSearchNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateOpenSearchNodeGroup(request: UpdateOpenSearchNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a Dashboards type host group. */
    addDashboardsNodeGroup(request: AddDashboardsNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addDashboardsNodeGroup(request: AddDashboardsNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addDashboardsNodeGroup(request: AddDashboardsNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes a Dashboards type host group. */
    deleteDashboardsNodeGroup(request: DeleteDashboardsNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteDashboardsNodeGroup(request: DeleteDashboardsNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteDashboardsNodeGroup(request: DeleteDashboardsNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates a Dashboards type host group. */
    updateDashboardsNodeGroup(request: UpdateDashboardsNodeGroupRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateDashboardsNodeGroup(request: UpdateDashboardsNodeGroupRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateDashboardsNodeGroup(request: UpdateDashboardsNodeGroupRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves auth settings for specified cluster. */
    getAuthSettings(request: GetAuthSettingsRequest, callback: (error: ServiceError | null, response: AuthSettings) => void): ClientUnaryCall;
    getAuthSettings(request: GetAuthSettingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AuthSettings) => void): ClientUnaryCall;
    getAuthSettings(request: GetAuthSettingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AuthSettings) => void): ClientUnaryCall;
    /** Updates auth settings for specified cluster. */
    updateAuthSettings(request: UpdateAuthSettingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAuthSettings(request: UpdateAuthSettingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAuthSettings(request: UpdateAuthSettingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
