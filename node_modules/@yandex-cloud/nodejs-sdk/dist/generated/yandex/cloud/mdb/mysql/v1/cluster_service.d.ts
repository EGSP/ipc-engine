/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Resources, Access, PerformanceDiagnostics, Cluster, Host } from "../../../../../yandex/cloud/mdb/mysql/v1/cluster";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/mysql/v1/maintenance";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { DatabaseSpec } from "../../../../../yandex/cloud/mdb/mysql/v1/database";
import { UserSpec } from "../../../../../yandex/cloud/mdb/mysql/v1/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/mysql/v1/backup";
import { Mysqlconfig57 } from "../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7";
import { Mysqlconfig80 } from "../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.GetClusterRequest";
    /**
     * ID of the cluster to return information about.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListClustersRequest";
    /**
     * ID of the folder to list clusters in.
     *
     * To get this ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in the subsequent [ClusterService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by the previous [ClusterService.List] request.
     */
    pageToken: string;
    /**
     * A filter expression that selects clusters listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListClustersResponse";
    /** List of clusters. */
    clusters: Cluster[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value for the [ListClustersRequest.page_token] in the subsequent [ClusterService.List] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ClusterService.List] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterRequest";
    /**
     * ID of the folder to create the cluster in.
     *
     * To get this ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the cluster. */
    description: string;
    /** Custom labels for the cluster as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the cluster. */
    environment: Cluster_Environment;
    /** Configuration of the cluster. */
    configSpec?: ConfigSpec;
    /** Configuration of databases in the cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Configuration of database users in the cluster. */
    userSpecs: UserSpec[];
    /** Configuration of hosts in the cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** List of security group IDs to apply to the cluster. */
    securityGroupIds: string[];
    /** This option prevents unintended deletion of the cluster. */
    deletionProtection: boolean;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterMetadata";
    /** ID of the cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterRequest";
    /**
     * ID of the cluster to update.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which settings of the cluster should be updated. */
    updateMask?: FieldMask;
    /** New description of the cluster. */
    description: string;
    /**
     * New set of custom labels for the cluster as `key:value` pairs.
     *
     * This set will completely replace the current one.
     * To add a label, request the current label set with the [ClusterService.Get] request, then send an [ClusterService.Update] request with the new label added to the current set.
     */
    labels: {
        [key: string]: string;
    };
    /** New configuration of the cluster. */
    configSpec?: ConfigSpec;
    /** New name of the cluster. */
    name: string;
    /** Configuration of a maintenance window in an MySQL cluster. */
    maintenanceWindow?: MaintenanceWindow;
    /** New list of security group IDs to apply to the cluster. */
    securityGroupIds: string[];
    /** This option prevents unintended deletion of the cluster. */
    deletionProtection: boolean;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterMetadata";
    /** ID of the cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterRequest";
    /**
     * ID of the cluster to delete.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterMetadata";
    /** ID of the cluster that is being deleted. */
    clusterId: string;
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.BackupClusterRequest";
    /**
     * ID of the cluster to back up.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.BackupClusterMetadata";
    /** ID of the cluster that is being backed up. */
    clusterId: string;
    /** ID of the MySQL backup that is created. */
    backupId: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterRequest";
    /**
     * ID of the backup to restore from.
     *
     * To get this ID, make a [BackupService.List] request (lists all backups in a folder) or a [ClusterService.ListBackups] request (lists all backups for an existing cluster).
     */
    backupId: string;
    /** Timestamp of the moment to which the MySQL cluster should be restored. */
    time?: Date;
    /** Name of the new MySQL cluster the backup will be restored to. The name must be unique within the folder. */
    name: string;
    /** Description of the new cluster. */
    description: string;
    /** Custom labels for the new cluster as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment for the new cluster. */
    environment: Cluster_Environment;
    /** Configuration of the new cluster. */
    configSpec?: ConfigSpec;
    /** Configuration of hosts in the new cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the new cluster in. */
    networkId: string;
    /** ID of the folder to create the new cluster in. */
    folderId: string;
    /** List of security group IDs to apply to the new cluster. */
    securityGroupIds: string[];
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterMetadata";
    /** ID of the new cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export interface StartClusterFailoverRequest {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterFailoverRequest";
    /**
     * ID of the cluster to start failover for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Host name to switch master role to.
     * If not provided, then the master role is switched to the most up-to-date replica host.
     *
     * To get this name, make a [ClusterService.ListHosts] request.
     */
    hostName: string;
}
export interface StartClusterFailoverMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterFailoverMetadata";
    /** ID of the cluster that is being failovered. */
    clusterId: string;
}
export interface RescheduleMaintenanceRequest {
    $type: "yandex.cloud.mdb.mysql.v1.RescheduleMaintenanceRequest";
    /**
     * ID of the cluster to reschedule the maintenance operation for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** The type of reschedule request. */
    rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
    /**
     * The time until which this maintenance operation should be delayed.
     * The value should be ahead of the first time when the maintenance operation has been scheduled for no more than two weeks.
     * The value can also point to the past moment of time if `IMMEDIATE` reschedule type is chosen.
     */
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
    $type: "yandex.cloud.mdb.mysql.v1.RescheduleMaintenanceMetadata";
    /** ID of the cluster the maintenance operation is being rescheduled for. */
    clusterId: string;
    /** The time until which this maintenance operation is to be delayed. */
    delayedUntil?: Date;
}
/** A single log record. */
export interface LogRecord {
    $type: "yandex.cloud.mdb.mysql.v1.LogRecord";
    /** Timestamp of the log record. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.mysql.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterLogsRequest";
    /**
     * ID of the cluster to request logs for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     * If no columns are specified, complete log records are returned.
     */
    columnFilter: string[];
    /** The log type. */
    serviceType: ListClusterLogsRequest_ServiceType;
    /**
     * Start timestamp for the logs request.
     * The logs in the response will be within [from_time] to [to_time] range.
     */
    fromTime?: Date;
    /**
     * End timestamp for the logs request.
     * The logs in the response will be within [from_time] to [to_time] range.
     */
    toTime?: Date;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ClusterService.ListLogs] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous [ClusterService.ListLogs] request.
     */
    pageToken: string;
    /**
     * Option that controls the behavior of result pagination.
     * If it is set to `true`, then [ListClusterLogsResponse.next_page_token] will always be returned, even if the current page is empty.
     */
    alwaysNextPageToken: boolean;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MYSQL_ERROR - MySQL error log. */
    MYSQL_ERROR = 1,
    /** MYSQL_GENERAL - MySQL general query log. */
    MYSQL_GENERAL = 2,
    /** MYSQL_SLOW_QUERY - MySQL slow query log. */
    MYSQL_SLOW_QUERY = 3,
    /** MYSQL_AUDIT - MySQL audit log. */
    MYSQL_AUDIT = 4,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value for the [ListClusterLogsRequest.page_token] in the subsequent [ClusterService.ListLogs] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ClusterService.ListLogs] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     *
     * This value is interchangeable with [StreamLogRecord.next_record_token] from [ClusterService.StreamLogs] method.
     */
    nextPageToken: string;
}
/** A single log record in the logs stream. */
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.mysql.v1.StreamLogRecord";
    /** One of the requested log records. */
    record?: LogRecord;
    /**
     * The token that can be used to continue streaming logs starting from the exact same record.
     * To continue streaming, specify value of [next_record_token] as the [StreamClusterLogsRequest.record_token] value in the next [ClusterService.StreamLogs] request.
     *
     * This value is interchangeable with [ListClusterLogsResponse.next_page_token] from [ClusterService.ListLogs] method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.StreamClusterLogsRequest";
    /**
     * ID of the cluster to stream logs for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     * If no columns are specified, complete log records are returned.
     */
    columnFilter: string[];
    /** The log type. */
    serviceType: StreamClusterLogsRequest_ServiceType;
    /** Start timestamp for the logs request. */
    fromTime?: Date;
    /**
     * End timestamp for the logs request.
     * If this field is not set, all existing log records beginning from [from_time] will be returned first, and then the new records will be returned as they appear.
     *
     * In essence it has `tail -f` command semantics.
     */
    toTime?: Date;
    /**
     * Record token that can be used to control logs streaming.
     *
     * Set [record_token] to the [StreamLogRecord.next_record_token], returned by the previous [ClusterService.StreamLogs] request to start streaming from the next log record.
     */
    recordToken: string;
    /**
     * A filter expression that selects clusters logs listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [LogRecord.logs.hostname] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `message.hostname='node1.db.cloud.yandex.net'`
     */
    filter: string;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MYSQL_ERROR - MySQL error log. */
    MYSQL_ERROR = 1,
    /** MYSQL_GENERAL - MySQL general query log. */
    MYSQL_GENERAL = 2,
    /** MYSQL_SLOW_QUERY - MySQL slow query log. */
    MYSQL_SLOW_QUERY = 3,
    /** MYSQL_AUDIT - MySQL audit log. */
    MYSQL_AUDIT = 4,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterOperationsRequest";
    /**
     * ID of the cluster to list operations for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ClusterService.ListOperations] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous [ClusterService.ListOperations] request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterOperationsResponse";
    /** List of operations in the cluster. */
    operations: Operation[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] in the subsequent [ClusterService.ListOperations] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ClusterService.ListOperations] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterBackupsRequest";
    /**
     * ID of the cluster to list backups for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListClusterBackupsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ClusterService.ListBackups] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token] returned by the previous [ClusterService.ListBackups] request.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterBackupsResponse";
    /** List of the cluster backups. */
    backups: Backup[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterBackupsRequest.page_token] in the subsequent [ClusterService.ListBackups] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ClusterService.ListBackups] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterHostsRequest";
    /**
     * ID of the cluster to list hosts for.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ClusterService.ListHosts] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by the previous [ClusterService.ListHosts] request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterHostsResponse";
    /** List of hosts in the cluster. */
    hosts: Host[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] in the subsequent [ClusterService.ListHosts] request to iterate through multiple pages of results.
     *
     * Each of the subsequent [ClusterService.ListHosts] requests should use the [next_page_token] value returned by the previous request to continue paging through the results.
     */
    nextPageToken: string;
}
export interface AddClusterHostsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.AddClusterHostsRequest";
    /**
     * ID of the cluster to add hosts to.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the newly added hosts. */
    hostSpecs: HostSpec[];
}
export interface AddClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.AddClusterHostsMetadata";
    /** ID of the cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterHostsRequest";
    /**
     * ID of the cluster to delete hosts from.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Names of hosts to delete.
     *
     * To get these names, make a [ClusterService.ListHosts] request.
     */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterHostsMetadata";
    /** ID of the cluster from which the hosts are being deleted. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterRequest";
    /**
     * ID of the cluster to start.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterMetadata";
    /** ID of the cluster that is being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.StopClusterRequest";
    /**
     * ID of the cluster to stop.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.StopClusterMetadata";
    /** ID of the cluster that is being stopped. */
    clusterId: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1.MoveClusterRequest";
    /**
     * ID of the cluster to move.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * ID of the destination folder.
     *
     * To get this ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.MoveClusterMetadata";
    /** ID of the cluster that is being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface UpdateClusterHostsRequest {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterHostsRequest";
    /**
     * ID of the MySQL cluster to update hosts in.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New configurations to apply to hosts. */
    updateHostSpecs: UpdateHostSpec[];
}
export interface UpdateClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterHostsMetadata";
    /** ID of the cluster in which the hosts are being updated. */
    clusterId: string;
    /** Names of hosts that are being updated. */
    hostNames: string[];
}
export interface UpdateHostSpec {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateHostSpec";
    /**
     * Name of the host to update.
     * To get a MySQL host name, use a [ClusterService.ListHosts] request.
     */
    hostName: string;
    /**
     * [Host.name] of the host to be used as the replication source (for cascading replication).
     * To get a MySQL host name, use a [ClusterService.ListHosts] request.
     */
    replicationSource: string;
    /** Field mask that specifies which settings of the MySQL host should be updated. */
    updateMask?: FieldMask;
    /** Host backup priority. */
    backupPriority: number;
    /** Whether the host should get a public IP address on creation. */
    assignPublicIp: boolean;
    /** Host master promotion priority. */
    priority: number;
}
export interface HostSpec {
    $type: "yandex.cloud.mdb.mysql.v1.HostSpec";
    /**
     * ID of the availability zone where the host resides.
     *
     * To get a list of available zones, make the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet to assign to the host.
     *
     * This subnet should be a part of the cluster network (the network ID is specified in the [ClusterService.CreateClusterRequest.network_id]).
     */
    subnetId: string;
    /**
     * Option that enables public IP address for the host so that the host can be accessed from the internet.
     *
     * After a host has been created, this setting cannot be changed.
     * To remove an assigned public IP address, or to assign a public IP address to a host without one, recreate the host with the appropriate [assign_public_ip] value set.
     *
     * Possible values:
     * * `false` - don't assign a public IP address to the host.
     * * `true` - assign a public IP address to the host.
     */
    assignPublicIp: boolean;
    /** [Host.name] of the host to be used as the replication source (for cascading replication). */
    replicationSource: string;
    /** Host backup priority */
    backupPriority: number;
    /** Host master promotion priority */
    priority: number;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.mysql.v1.ConfigSpec";
    /**
     * Version of MySQL used in the cluster.
     *
     * Possible values: `5.7`, `8.0`.
     */
    version: string;
    /** Configuration for a MySQL 5.7 cluster. */
    mysqlConfig57?: Mysqlconfig57 | undefined;
    /** Configuration for a MySQL 8.0 cluster. */
    mysqlConfig80?: Mysqlconfig80 | undefined;
    /** Resource preset for the cluster hosts. */
    resources?: Resources;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /**
     * Access policy for external services.
     *
     * If the specific services need to access the cluster, then set the necessary values in this policy.
     */
    access?: Access;
    /** Configuration of the performance diagnostics service. */
    performanceDiagnostics?: PerformanceDiagnostics;
    /** Retention policy of automated backups. */
    backupRetainPeriodDays?: number;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Status | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } | undefined;
                mysqlConfig57?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } | undefined;
                mysqlConfig80?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Status | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } | undefined;
                mysqlConfig57?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } | undefined;
                mysqlConfig80?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Status | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } | undefined;
                mysqlConfig57?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } | undefined;
                mysqlConfig80?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Status | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } | undefined;
                mysqlConfig57?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } | undefined;
                mysqlConfig80?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } & {
                    dataLens?: boolean | undefined;
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: ({
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } & {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["performanceDiagnostics"], "$type" | "enabled" | "sessionsSamplingInterval" | "statementsSamplingInterval">, never>) | undefined;
                mysqlConfig57?: ({
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["effectiveConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["effectiveConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["effectiveConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
                    userConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["userConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["userConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["userConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
                    defaultConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["defaultConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["defaultConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["defaultConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                mysqlConfig80?: ({
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["effectiveConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["effectiveConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["effectiveConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
                    userConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["userConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["userConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["userConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
                    defaultConfig?: ({
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & {
                        sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["defaultConfig"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["defaultConfig"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"]["defaultConfig"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig80"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "backupRetainPeriodDays" | "performanceDiagnostics" | "mysqlConfig57" | "mysqlConfig80">, never>) | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Status | undefined;
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
                    webSql?: boolean | undefined;
                    dataTransfer?: boolean | undefined;
                } | undefined;
                backupRetainPeriodDays?: number | undefined;
                performanceDiagnostics?: {
                    enabled?: boolean | undefined;
                    sessionsSamplingInterval?: number | undefined;
                    statementsSamplingInterval?: number | undefined;
                } | undefined;
                mysqlConfig57?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        showCompatibility56?: boolean | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        queryCacheLimit?: number | undefined;
                        queryCacheSize?: number | undefined;
                        queryCacheType?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        queryResponseTimeStats?: boolean | undefined;
                    } | undefined;
                } | undefined;
                mysqlConfig80?: {
                    effectiveConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                        maxConnections?: number | undefined;
                        auditLog?: boolean | undefined;
                        defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                        transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                        defaultTimeZone?: string | undefined;
                        characterSetServer?: string | undefined;
                        collationServer?: string | undefined;
                        binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                        slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                        logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                        logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                        binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                        optimizerSwitch?: string | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                        generalLog?: boolean | undefined;
                        maxAllowedPacket?: number | undefined;
                        innodbFlushLogAtTrxCommit?: number | undefined;
                        innodbLockWaitTimeout?: number | undefined;
                        innodbPrintAllDeadlocks?: boolean | undefined;
                        netReadTimeout?: number | undefined;
                        netWriteTimeout?: number | undefined;
                        groupConcatMaxLen?: number | undefined;
                        tmpTableSize?: number | undefined;
                        maxHeapTableSize?: number | undefined;
                        innodbAdaptiveHashIndex?: boolean | undefined;
                        innodbNumaInterleave?: boolean | undefined;
                        innodbLogBufferSize?: number | undefined;
                        innodbLogFileSize?: number | undefined;
                        innodbIoCapacity?: number | undefined;
                        innodbIoCapacityMax?: number | undefined;
                        innodbReadIoThreads?: number | undefined;
                        innodbWriteIoThreads?: number | undefined;
                        innodbPurgeThreads?: number | undefined;
                        innodbThreadConcurrency?: number | undefined;
                        innodbTempDataFileMaxSize?: number | undefined;
                        threadCacheSize?: number | undefined;
                        threadStack?: number | undefined;
                        joinBufferSize?: number | undefined;
                        sortBufferSize?: number | undefined;
                        tableDefinitionCache?: number | undefined;
                        tableOpenCache?: number | undefined;
                        tableOpenCacheInstances?: number | undefined;
                        explicitDefaultsForTimestamp?: boolean | undefined;
                        autoIncrementIncrement?: number | undefined;
                        autoIncrementOffset?: number | undefined;
                        syncBinlog?: number | undefined;
                        binlogCacheSize?: number | undefined;
                        binlogGroupCommitSyncDelay?: number | undefined;
                        binlogRowsQueryLogEvents?: boolean | undefined;
                        rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                        slaveParallelWorkers?: number | undefined;
                        mdbPreserveBinlogBytes?: number | undefined;
                        interactiveTimeout?: number | undefined;
                        waitTimeout?: number | undefined;
                        mdbOfflineModeEnableLag?: number | undefined;
                        mdbOfflineModeDisableLag?: number | undefined;
                        rangeOptimizerMaxMemSize?: number | undefined;
                        slowQueryLog?: boolean | undefined;
                        slowQueryLogAlwaysWriteTime?: number | undefined;
                        logSlowRateLimit?: number | undefined;
                        logSlowSpStatements?: boolean | undefined;
                        mdbPriorityChoiceMaxLag?: number | undefined;
                        innodbPageSize?: number | undefined;
                        innodbOnlineAlterLogMaxSize?: number | undefined;
                        innodbFtMinTokenSize?: number | undefined;
                        innodbFtMaxTokenSize?: number | undefined;
                        lowerCaseTableNames?: number | undefined;
                        maxSpRecursionDepth?: number | undefined;
                        innodbCompressionLevel?: number | undefined;
                        autocommit?: boolean | undefined;
                        innodbStatusOutput?: boolean | undefined;
                        innodbStrictMode?: boolean | undefined;
                        innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                        logErrorVerbosity?: number | undefined;
                        maxDigestLength?: number | undefined;
                        lockWaitTimeout?: number | undefined;
                        maxPreparedStmtCount?: number | undefined;
                        optimizerSearchDepth?: number | undefined;
                        regexpTimeLimit?: number | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterRequest";
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
        hostGroupIds?: string[] | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        databaseSpecs?: {
            name?: string | undefined;
        }[] | undefined;
        userSpecs?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] | undefined;
            authenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[] | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
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
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        deletionProtection?: boolean | undefined;
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: ({
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["performanceDiagnostics"], "$type" | "enabled" | "sessionsSamplingInterval" | "statementsSamplingInterval">, never>) | undefined;
            mysqlConfig57?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
            mysqlConfig80?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "backupRetainPeriodDays" | "performanceDiagnostics" | "mysqlConfig57" | "mysqlConfig80">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        databaseSpecs?: ({
            name?: string | undefined;
        }[] & ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["databaseSpecs"][number], "$type" | "name">, never>)[] & Record<Exclude<keyof I["databaseSpecs"], "$type" | keyof {
            name?: string | undefined;
        }[]>, never>) | undefined;
        userSpecs?: ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] | undefined;
            authenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] | undefined;
            authenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
            globalPermissions?: (import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] & import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] & Record<Exclude<keyof I["userSpecs"][number]["globalPermissions"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[]>, never>) | undefined;
            authenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").AuthPlugin | undefined;
            connectionLimits?: ({
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } & Record<Exclude<keyof I["userSpecs"][number]["connectionLimits"], "$type" | "maxQuestionsPerHour" | "maxUpdatesPerHour" | "maxConnectionsPerHour" | "maxUserConnections">, never>) | undefined;
        } & Record<Exclude<keyof I["userSpecs"][number], "$type" | "name" | "permissions" | "password" | "globalPermissions" | "authenticationPlugin" | "connectionLimits">, never>)[] & Record<Exclude<keyof I["userSpecs"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            globalPermissions?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").GlobalPermission[] | undefined;
            authenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/user").AuthPlugin | undefined;
            connectionLimits?: {
                maxQuestionsPerHour?: number | undefined;
                maxUpdatesPerHour?: number | undefined;
                maxConnectionsPerHour?: number | undefined;
                maxUserConnections?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "priority" | "replicationSource" | "backupPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "hostGroupIds" | "configSpec" | "environment" | "databaseSpecs" | "userSpecs" | "hostSpecs">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterRequest";
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: ({
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["performanceDiagnostics"], "$type" | "enabled" | "sessionsSamplingInterval" | "statementsSamplingInterval">, never>) | undefined;
            mysqlConfig57?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
            mysqlConfig80?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "backupRetainPeriodDays" | "performanceDiagnostics" | "mysqlConfig57" | "mysqlConfig80">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/mysql/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "clusterId" | "configSpec" | "maintenanceWindow">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterMetadata";
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
export declare const BackupClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.BackupClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.BackupClusterMetadata";
    encode(message: BackupClusterMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BackupClusterMetadata;
    fromJSON(object: any): BackupClusterMetadata;
    toJSON(message: BackupClusterMetadata): unknown;
    fromPartial<I extends {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & {
        backupId?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "backupId" | "clusterId">, never>>(object: I): BackupClusterMetadata;
};
export declare const RestoreClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterRequest";
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
        time?: Date | undefined;
        backupId?: string | undefined;
        deletionProtection?: boolean | undefined;
        hostGroupIds?: string[] | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
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
        networkId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        time?: Date | undefined;
        backupId?: string | undefined;
        deletionProtection?: boolean | undefined;
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } | undefined;
            mysqlConfig57?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } | undefined;
            mysqlConfig80?: {
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
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
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
            backupRetainPeriodDays?: number | undefined;
            performanceDiagnostics?: ({
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & {
                enabled?: boolean | undefined;
                sessionsSamplingInterval?: number | undefined;
                statementsSamplingInterval?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["performanceDiagnostics"], "$type" | "enabled" | "sessionsSamplingInterval" | "statementsSamplingInterval">, never>) | undefined;
            mysqlConfig57?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                showCompatibility56?: boolean | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                queryCacheLimit?: number | undefined;
                queryCacheSize?: number | undefined;
                queryCacheType?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                queryResponseTimeStats?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
            mysqlConfig80?: ({
                sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & {
                sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
                maxConnections?: number | undefined;
                auditLog?: boolean | undefined;
                defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
                transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
                defaultTimeZone?: string | undefined;
                characterSetServer?: string | undefined;
                collationServer?: string | undefined;
                binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
                slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
                logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
                logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
                binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
                optimizerSwitch?: string | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
                generalLog?: boolean | undefined;
                maxAllowedPacket?: number | undefined;
                innodbFlushLogAtTrxCommit?: number | undefined;
                innodbLockWaitTimeout?: number | undefined;
                innodbPrintAllDeadlocks?: boolean | undefined;
                netReadTimeout?: number | undefined;
                netWriteTimeout?: number | undefined;
                groupConcatMaxLen?: number | undefined;
                tmpTableSize?: number | undefined;
                maxHeapTableSize?: number | undefined;
                innodbAdaptiveHashIndex?: boolean | undefined;
                innodbNumaInterleave?: boolean | undefined;
                innodbLogBufferSize?: number | undefined;
                innodbLogFileSize?: number | undefined;
                innodbIoCapacity?: number | undefined;
                innodbIoCapacityMax?: number | undefined;
                innodbReadIoThreads?: number | undefined;
                innodbWriteIoThreads?: number | undefined;
                innodbPurgeThreads?: number | undefined;
                innodbThreadConcurrency?: number | undefined;
                innodbTempDataFileMaxSize?: number | undefined;
                threadCacheSize?: number | undefined;
                threadStack?: number | undefined;
                joinBufferSize?: number | undefined;
                sortBufferSize?: number | undefined;
                tableDefinitionCache?: number | undefined;
                tableOpenCache?: number | undefined;
                tableOpenCacheInstances?: number | undefined;
                explicitDefaultsForTimestamp?: boolean | undefined;
                autoIncrementIncrement?: number | undefined;
                autoIncrementOffset?: number | undefined;
                syncBinlog?: number | undefined;
                binlogCacheSize?: number | undefined;
                binlogGroupCommitSyncDelay?: number | undefined;
                binlogRowsQueryLogEvents?: boolean | undefined;
                rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
                slaveParallelWorkers?: number | undefined;
                mdbPreserveBinlogBytes?: number | undefined;
                interactiveTimeout?: number | undefined;
                waitTimeout?: number | undefined;
                mdbOfflineModeEnableLag?: number | undefined;
                mdbOfflineModeDisableLag?: number | undefined;
                rangeOptimizerMaxMemSize?: number | undefined;
                slowQueryLog?: boolean | undefined;
                slowQueryLogAlwaysWriteTime?: number | undefined;
                logSlowRateLimit?: number | undefined;
                logSlowSpStatements?: boolean | undefined;
                mdbPriorityChoiceMaxLag?: number | undefined;
                innodbPageSize?: number | undefined;
                innodbOnlineAlterLogMaxSize?: number | undefined;
                innodbFtMinTokenSize?: number | undefined;
                innodbFtMaxTokenSize?: number | undefined;
                lowerCaseTableNames?: number | undefined;
                maxSpRecursionDepth?: number | undefined;
                innodbCompressionLevel?: number | undefined;
                autocommit?: boolean | undefined;
                innodbStatusOutput?: boolean | undefined;
                innodbStrictMode?: boolean | undefined;
                innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
                logErrorVerbosity?: number | undefined;
                maxDigestLength?: number | undefined;
                lockWaitTimeout?: number | undefined;
                maxPreparedStmtCount?: number | undefined;
                optimizerSearchDepth?: number | undefined;
                regexpTimeLimit?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig80"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "backupRetainPeriodDays" | "performanceDiagnostics" | "mysqlConfig57" | "mysqlConfig80">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "priority" | "replicationSource" | "backupPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "time" | "backupId" | "deletionProtection" | "hostGroupIds" | "configSpec" | "environment" | "hostSpecs">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1.RestoreClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterFailoverRequest";
    encode(message: StartClusterFailoverRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterFailoverRequest;
    fromJSON(object: any): StartClusterFailoverRequest;
    toJSON(message: StartClusterFailoverRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        hostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostName">, never>>(object: I): StartClusterFailoverRequest;
};
export declare const StartClusterFailoverMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterFailoverMetadata";
    encode(message: StartClusterFailoverMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartClusterFailoverMetadata;
    fromJSON(object: any): StartClusterFailoverMetadata;
    toJSON(message: StartClusterFailoverMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): StartClusterFailoverMetadata;
};
export declare const RescheduleMaintenanceRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.RescheduleMaintenanceRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.RescheduleMaintenanceMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.mysql.v1.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterLogsRequest";
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
        alwaysNextPageToken?: boolean | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        columnFilter?: (string[] & string[] & Record<Exclude<keyof I["columnFilter"], "$type" | keyof string[]>, never>) | undefined;
        serviceType?: ListClusterLogsRequest_ServiceType | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
        alwaysNextPageToken?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId" | "columnFilter" | "serviceType" | "fromTime" | "toTime" | "alwaysNextPageToken">, never>>(object: I): ListClusterLogsRequest;
};
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterLogsResponse";
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
    $type: "yandex.cloud.mdb.mysql.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.mysql.v1.StreamClusterLogsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterBackupsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterBackupsResponse";
    encode(message: ListClusterBackupsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterBackupsResponse;
    fromJSON(object: any): ListClusterBackupsResponse;
    toJSON(message: ListClusterBackupsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        backups?: {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "type" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            type?: import("../../../../../yandex/cloud/mdb/mysql/v1/backup").Backup_BackupCreationType | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] & ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Role | undefined;
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
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["hosts"][number]["services"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[]>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp" | "priority" | "replicationSource" | "backupPriority">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const AddClusterHostsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.AddClusterHostsRequest";
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
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "priority" | "replicationSource" | "backupPriority">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostSpecs">, never>>(object: I): AddClusterHostsRequest;
};
export declare const AddClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.AddClusterHostsMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.DeleteClusterHostsMetadata";
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
export declare const StartClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.StopClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.MoveClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1.MoveClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterHostsRequest";
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
            priority?: number | undefined;
            hostName?: string | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        updateHostSpecs?: ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            hostName?: string | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[] & ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            hostName?: string | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & {
            updateMask?: ({
                paths?: string[] | undefined;
            } & {
                paths?: (string[] & string[] & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"], "$type" | "paths">, never>) | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            hostName?: string | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        } & Record<Exclude<keyof I["updateHostSpecs"][number], "$type" | "updateMask" | "assignPublicIp" | "priority" | "hostName" | "replicationSource" | "backupPriority">, never>)[] & Record<Exclude<keyof I["updateHostSpecs"], "$type" | keyof {
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            priority?: number | undefined;
            hostName?: string | undefined;
            replicationSource?: string | undefined;
            backupPriority?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "updateHostSpecs">, never>>(object: I): UpdateClusterHostsRequest;
};
export declare const UpdateClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateClusterHostsMetadata";
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
export declare const UpdateHostSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.UpdateHostSpec";
    encode(message: UpdateHostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateHostSpec;
    fromJSON(object: any): UpdateHostSpec;
    toJSON(message: UpdateHostSpec): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        assignPublicIp?: boolean | undefined;
        priority?: number | undefined;
        hostName?: string | undefined;
        replicationSource?: string | undefined;
        backupPriority?: number | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        assignPublicIp?: boolean | undefined;
        priority?: number | undefined;
        hostName?: string | undefined;
        replicationSource?: string | undefined;
        backupPriority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "assignPublicIp" | "priority" | "hostName" | "replicationSource" | "backupPriority">, never>>(object: I): UpdateHostSpec;
};
export declare const HostSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.HostSpec";
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        priority?: number | undefined;
        replicationSource?: string | undefined;
        backupPriority?: number | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        priority?: number | undefined;
        replicationSource?: string | undefined;
        backupPriority?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "priority" | "replicationSource" | "backupPriority">, never>>(object: I): HostSpec;
};
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.mysql.v1.ConfigSpec";
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
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } | undefined;
        backupRetainPeriodDays?: number | undefined;
        performanceDiagnostics?: {
            enabled?: boolean | undefined;
            sessionsSamplingInterval?: number | undefined;
            statementsSamplingInterval?: number | undefined;
        } | undefined;
        mysqlConfig57?: {
            sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } | undefined;
        mysqlConfig80?: {
            sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
            logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            regexpTimeLimit?: number | undefined;
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
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
            dataTransfer?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
        backupRetainPeriodDays?: number | undefined;
        performanceDiagnostics?: ({
            enabled?: boolean | undefined;
            sessionsSamplingInterval?: number | undefined;
            statementsSamplingInterval?: number | undefined;
        } & {
            enabled?: boolean | undefined;
            sessionsSamplingInterval?: number | undefined;
            statementsSamplingInterval?: number | undefined;
        } & Record<Exclude<keyof I["performanceDiagnostics"], "$type" | "enabled" | "sessionsSamplingInterval" | "statementsSamplingInterval">, never>) | undefined;
        mysqlConfig57?: ({
            sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & {
            sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[] & Record<Exclude<keyof I["mysqlConfig57"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SQLMode[]>, never>) | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowRateType | undefined;
            logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[] & Record<Exclude<keyof I["mysqlConfig57"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_LogSlowFilterType[]>, never>) | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql5_7").Mysqlconfig57_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            showCompatibility56?: boolean | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            queryCacheLimit?: number | undefined;
            queryCacheSize?: number | undefined;
            queryCacheType?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            queryResponseTimeStats?: boolean | undefined;
        } & Record<Exclude<keyof I["mysqlConfig57"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "showCompatibility56" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "queryCacheLimit" | "queryCacheSize" | "queryCacheType" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "queryResponseTimeStats">, never>) | undefined;
        mysqlConfig80?: ({
            sqlMode?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
            logSlowFilter?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            regexpTimeLimit?: number | undefined;
        } & {
            sqlMode?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[] & Record<Exclude<keyof I["mysqlConfig80"]["sqlMode"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SQLMode[]>, never>) | undefined;
            maxConnections?: number | undefined;
            auditLog?: boolean | undefined;
            defaultAuthenticationPlugin?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_AuthPlugin | undefined;
            transactionIsolation?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_TransactionIsolation | undefined;
            defaultTimeZone?: string | undefined;
            characterSetServer?: string | undefined;
            collationServer?: string | undefined;
            binlogRowImage?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogRowImage | undefined;
            slaveParallelType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_SlaveParallelType | undefined;
            logSlowRateType?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowRateType | undefined;
            logSlowFilter?: (import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[] & Record<Exclude<keyof I["mysqlConfig80"]["logSlowFilter"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_LogSlowFilterType[]>, never>) | undefined;
            binlogTransactionDependencyTracking?: import("../../../../../yandex/cloud/mdb/mysql/v1/config/mysql8_0").Mysqlconfig80_BinlogTransactionDependencyTracking | undefined;
            optimizerSwitch?: string | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
            generalLog?: boolean | undefined;
            maxAllowedPacket?: number | undefined;
            innodbFlushLogAtTrxCommit?: number | undefined;
            innodbLockWaitTimeout?: number | undefined;
            innodbPrintAllDeadlocks?: boolean | undefined;
            netReadTimeout?: number | undefined;
            netWriteTimeout?: number | undefined;
            groupConcatMaxLen?: number | undefined;
            tmpTableSize?: number | undefined;
            maxHeapTableSize?: number | undefined;
            innodbAdaptiveHashIndex?: boolean | undefined;
            innodbNumaInterleave?: boolean | undefined;
            innodbLogBufferSize?: number | undefined;
            innodbLogFileSize?: number | undefined;
            innodbIoCapacity?: number | undefined;
            innodbIoCapacityMax?: number | undefined;
            innodbReadIoThreads?: number | undefined;
            innodbWriteIoThreads?: number | undefined;
            innodbPurgeThreads?: number | undefined;
            innodbThreadConcurrency?: number | undefined;
            innodbTempDataFileMaxSize?: number | undefined;
            threadCacheSize?: number | undefined;
            threadStack?: number | undefined;
            joinBufferSize?: number | undefined;
            sortBufferSize?: number | undefined;
            tableDefinitionCache?: number | undefined;
            tableOpenCache?: number | undefined;
            tableOpenCacheInstances?: number | undefined;
            explicitDefaultsForTimestamp?: boolean | undefined;
            autoIncrementIncrement?: number | undefined;
            autoIncrementOffset?: number | undefined;
            syncBinlog?: number | undefined;
            binlogCacheSize?: number | undefined;
            binlogGroupCommitSyncDelay?: number | undefined;
            binlogRowsQueryLogEvents?: boolean | undefined;
            rplSemiSyncMasterWaitForSlaveCount?: number | undefined;
            slaveParallelWorkers?: number | undefined;
            mdbPreserveBinlogBytes?: number | undefined;
            interactiveTimeout?: number | undefined;
            waitTimeout?: number | undefined;
            mdbOfflineModeEnableLag?: number | undefined;
            mdbOfflineModeDisableLag?: number | undefined;
            rangeOptimizerMaxMemSize?: number | undefined;
            slowQueryLog?: boolean | undefined;
            slowQueryLogAlwaysWriteTime?: number | undefined;
            logSlowRateLimit?: number | undefined;
            logSlowSpStatements?: boolean | undefined;
            mdbPriorityChoiceMaxLag?: number | undefined;
            innodbPageSize?: number | undefined;
            innodbOnlineAlterLogMaxSize?: number | undefined;
            innodbFtMinTokenSize?: number | undefined;
            innodbFtMaxTokenSize?: number | undefined;
            lowerCaseTableNames?: number | undefined;
            maxSpRecursionDepth?: number | undefined;
            innodbCompressionLevel?: number | undefined;
            autocommit?: boolean | undefined;
            innodbStatusOutput?: boolean | undefined;
            innodbStrictMode?: boolean | undefined;
            innodbPrintLockWaitTimeoutInfo?: boolean | undefined;
            logErrorVerbosity?: number | undefined;
            maxDigestLength?: number | undefined;
            lockWaitTimeout?: number | undefined;
            maxPreparedStmtCount?: number | undefined;
            optimizerSearchDepth?: number | undefined;
            regexpTimeLimit?: number | undefined;
        } & Record<Exclude<keyof I["mysqlConfig80"], "$type" | "sqlMode" | "maxConnections" | "auditLog" | "defaultAuthenticationPlugin" | "transactionIsolation" | "defaultTimeZone" | "characterSetServer" | "collationServer" | "binlogRowImage" | "slaveParallelType" | "logSlowRateType" | "logSlowFilter" | "binlogTransactionDependencyTracking" | "optimizerSwitch" | "innodbBufferPoolSize" | "longQueryTime" | "generalLog" | "maxAllowedPacket" | "innodbFlushLogAtTrxCommit" | "innodbLockWaitTimeout" | "innodbPrintAllDeadlocks" | "netReadTimeout" | "netWriteTimeout" | "groupConcatMaxLen" | "tmpTableSize" | "maxHeapTableSize" | "innodbAdaptiveHashIndex" | "innodbNumaInterleave" | "innodbLogBufferSize" | "innodbLogFileSize" | "innodbIoCapacity" | "innodbIoCapacityMax" | "innodbReadIoThreads" | "innodbWriteIoThreads" | "innodbPurgeThreads" | "innodbThreadConcurrency" | "innodbTempDataFileMaxSize" | "threadCacheSize" | "threadStack" | "joinBufferSize" | "sortBufferSize" | "tableDefinitionCache" | "tableOpenCache" | "tableOpenCacheInstances" | "explicitDefaultsForTimestamp" | "autoIncrementIncrement" | "autoIncrementOffset" | "syncBinlog" | "binlogCacheSize" | "binlogGroupCommitSyncDelay" | "binlogRowsQueryLogEvents" | "rplSemiSyncMasterWaitForSlaveCount" | "slaveParallelWorkers" | "mdbPreserveBinlogBytes" | "interactiveTimeout" | "waitTimeout" | "mdbOfflineModeEnableLag" | "mdbOfflineModeDisableLag" | "rangeOptimizerMaxMemSize" | "slowQueryLog" | "slowQueryLogAlwaysWriteTime" | "logSlowRateLimit" | "logSlowSpStatements" | "mdbPriorityChoiceMaxLag" | "innodbPageSize" | "innodbOnlineAlterLogMaxSize" | "innodbFtMinTokenSize" | "innodbFtMaxTokenSize" | "lowerCaseTableNames" | "maxSpRecursionDepth" | "innodbCompressionLevel" | "autocommit" | "innodbStatusOutput" | "innodbStrictMode" | "innodbPrintLockWaitTimeoutInfo" | "logErrorVerbosity" | "maxDigestLength" | "lockWaitTimeout" | "maxPreparedStmtCount" | "optimizerSearchDepth" | "regexpTimeLimit">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "access" | "backupRetainPeriodDays" | "performanceDiagnostics" | "mysqlConfig57" | "mysqlConfig80">, never>>(object: I): ConfigSpec;
};
/** A set of methods for managing MySQL clusters. */
export declare const ClusterServiceService: {
    /** Retrieves information about a cluster. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of clusters in a folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a cluster in a folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates a cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes a cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts a cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops a cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves a cluster to a folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Creates a backup for a cluster.
     *
     * To get information about a backup, make a [BackupService.Get] request.
     */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Restores a backup to a new cluster.
     *
     * See [the documentation](/docs/managed-mysql/concepts/backup) for details.
     */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedules planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts a manual failover for a cluster. */
    readonly startFailover: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/StartFailover";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterFailoverRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterFailoverRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for a cluster.
     *
     * Alternatively, logs can be streamed using [StreamLogs].
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /**
     * Retrieves a log stream for a cluster.
     *
     * This method is similar to [ListLogs], but uses server-side streaming, which allows for the `tail -f` command semantics.
     */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves a list of operations for a cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /**
     * Retrieves a list of backups for a cluster.
     *
     * To list all backups in a folder, make a [BackupService.List] request.
     */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves a list of hosts for a cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Adds new hosts in a cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified hosts. */
    readonly updateHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/UpdateHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified hosts for a cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /** Retrieves information about a cluster. */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of clusters in a folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a cluster in a folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates a cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes a cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts a cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops a cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves a cluster to a folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /**
     * Creates a backup for a cluster.
     *
     * To get information about a backup, make a [BackupService.Get] request.
     */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /**
     * Restores a backup to a new cluster.
     *
     * See [the documentation](/docs/managed-mysql/concepts/backup) for details.
     */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
    /** Starts a manual failover for a cluster. */
    startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
    /**
     * Retrieves logs for a cluster.
     *
     * Alternatively, logs can be streamed using [StreamLogs].
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /**
     * Retrieves a log stream for a cluster.
     *
     * This method is similar to [ListLogs], but uses server-side streaming, which allows for the `tail -f` command semantics.
     */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves a list of operations for a cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /**
     * Retrieves a list of backups for a cluster.
     *
     * To list all backups in a folder, make a [BackupService.List] request.
     */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for a cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Adds new hosts in a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Updates the specified hosts. */
    updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /** Retrieves information about a cluster. */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of clusters in a folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a cluster in a folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates a cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes a cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts a cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops a cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves a cluster to a folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Creates a backup for a cluster.
     *
     * To get information about a backup, make a [BackupService.Get] request.
     */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Restores a backup to a new cluster.
     *
     * See [the documentation](/docs/managed-mysql/concepts/backup) for details.
     */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedules planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts a manual failover for a cluster. */
    startFailover(request: StartClusterFailoverRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for a cluster.
     *
     * Alternatively, logs can be streamed using [StreamLogs].
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /**
     * Retrieves a log stream for a cluster.
     *
     * This method is similar to [ListLogs], but uses server-side streaming, which allows for the `tail -f` command semantics.
     */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves a list of operations for a cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /**
     * Retrieves a list of backups for a cluster.
     *
     * To list all backups in a folder, make a [BackupService.List] request.
     */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for a cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Adds new hosts in a cluster. */
    addHosts(request: AddClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified hosts. */
    updateHosts(request: UpdateClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts(request: DeleteClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
