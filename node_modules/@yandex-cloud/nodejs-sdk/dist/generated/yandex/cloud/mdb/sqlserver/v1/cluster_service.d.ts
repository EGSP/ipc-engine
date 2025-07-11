/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Resources, Access, ClusterConfig_SecondaryConnections, Cluster, Host } from "../../../../../yandex/cloud/mdb/sqlserver/v1/cluster";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { DatabaseSpec } from "../../../../../yandex/cloud/mdb/sqlserver/v1/database";
import { UserSpec } from "../../../../../yandex/cloud/mdb/sqlserver/v1/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/sqlserver/v1/backup";
import { SQLServerConfig2016sp2std, SQLServerConfig2016sp2ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2016sp2";
import { SQLServerConfig2017std, SQLServerConfig2017ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2017";
import { SQLServerConfig2019std, SQLServerConfig2019ent } from "../../../../../yandex/cloud/mdb/sqlserver/v1/config/sqlserver2019";
export declare const protobufPackage = "yandex.cloud.mdb.sqlserver.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetClusterRequest";
    /**
     * ID of the SQL Server cluster to return.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClustersRequest";
    /**
     * ID of the folder to list SQL Server clusters in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClustersResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name to filter by. Currently you can only use filtering with the [Cluster.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. A value. Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     *
     * Example of a filter expression: `name NOT IN 'test,beta'`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClustersResponse";
    /** List of SQL Server clusters. */
    clusters: Cluster[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use the `next_page_token` as the value for the [ListClustersRequest.page_token] parameter in the next list request. Each subsequent list request has its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterRequest";
    /**
     * ID of the folder to create the SQL Server cluster in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the SQL Server cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the SQL Server cluster. */
    description: string;
    /**
     * Custom labels for the SQL Server cluster as `key:value` pairs.
     * For example, "project":"mvp" or "source":"dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the SQL Server cluster. */
    environment: Cluster_Environment;
    /** Configurations of SQL Server and hosts of the cluster. */
    configSpec?: ConfigSpec;
    /** One or more configurations of databases to be created in the SQL Server cluster. */
    databaseSpecs: DatabaseSpec[];
    /** One or more configurations of database users to be created in the SQL Server cluster. */
    userSpecs: UserSpec[];
    /** One or more configurations of hosts to be created in the SQL Server cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the SQL Server cluster in. */
    networkId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Name of SQL Collation that cluster will be created with. */
    sqlcollation: string;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterMetadata";
    /** ID of the SQL Server cluster being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterRequest";
    /**
     * ID of the SQL Server cluster to update.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the SQL Server cluster should be updated. */
    updateMask?: FieldMask;
    /** New description of the SQL Server cluster. */
    description: string;
    /**
     * Custom labels for the SQL Server cluster as `key:value` pairs.
     *
     * For example, `"project":"mvp"` or `"source":"dictionary"`.
     *
     * The new set of labels completely replaces the old one.
     *
     * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /** New configuration and resources for hosts in the SQL Server cluster. */
    configSpec?: ConfigSpec;
    /** New name for the SQL Server cluster. */
    name: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterMetadata";
    /** ID of the SQL Server cluster being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteClusterRequest";
    /**
     * ID of the SQL Server cluster to delete.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteClusterMetadata";
    /** ID of the SQL Server cluster being deleted. */
    clusterId: string;
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.BackupClusterRequest";
    /**
     * ID of the SQL Server cluster to back up.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.BackupClusterMetadata";
    /** ID of the SQL Server cluster being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterRequest";
    /**
     * ID of the backup to create a new cluster from.
     *
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Timestamp of the moment to which the SQL Server cluster should be restored. */
    time?: Date;
    /** Name of the new SQL Server cluster to be created from the backup. The name must be unique within the folder. */
    name: string;
    /** Description of the new SQL Server cluster to be created from the backup. */
    description: string;
    /**
     * Custom labels for the new SQL Server cluster to be created from the backup as `key:value` pairs.
     *
     * For example, `"project":"mvp"` or `"source":"dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new SQL Server cluster to be created from the backup. */
    environment: Cluster_Environment;
    /** Configuration for the new SQL Server cluster to be created from the backup. */
    configSpec?: ConfigSpec;
    /** Configurations for SQL Server hosts that should be added to the cluster being created from the backup. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the SQL Server cluster in. */
    networkId: string;
    /**
     * ID of the folder to create the SQL Server cluster in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Host groups hosting VMs of the cluster. */
    hostGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterMetadata";
    /** ID of the new SQL Server cluster being created from a backup. */
    clusterId: string;
    /** ID of the backup being used for creating a cluster. */
    backupId: string;
}
export interface StartClusterFailoverRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterFailoverRequest";
    /** ID of SQL Server cluster. */
    clusterId: string;
    /**
     * Host name to switch master role to.
     *
     * To get this name, make a [ClusterService.ListHosts] request.
     */
    hostName: string;
}
export interface StartClusterFailoverMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterFailoverMetadata";
    /** ID of the SQL Server cluster being failovered. */
    clusterId: string;
}
export interface LogRecord {
    $type: "yandex.cloud.mdb.sqlserver.v1.LogRecord";
    /** Log record timestamp. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.sqlserver.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterLogsRequest";
    /**
     * ID of the SQL Server cluster to request logs for.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
     *
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
    /** Specifies a moment that the logs are requested from. */
    fromTime?: Date;
    /** Specifies a moment that the logs are requested till. */
    toTime?: Date;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
    /** The service returns [next_page_token] even if the current page is empty. */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name to filter by. Currently filtering can be applied to the [LogRecord.logs.message.hostname] field only.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. A value. Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
     *
     * Example of a filter: `message.hostname='node1.db.cloud.yandex.net'`.
     */
    filter: string;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** SQLSERVER_ERROR - SQL Server error log. */
    SQLSERVER_ERROR = 1,
    /** SQLSERVER_APPLICATION - SQL Server application log. */
    SQLSERVER_APPLICATION = 2,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterOperationsRequest";
    /**
     * ID of the SQL Server cluster to list operations for.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterOperationsResponse";
    /** List of operations for the specified SQL Server cluster. */
    operations: Operation[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the [next_page_token] as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterBackupsRequest";
    /**
     * ID of the SQL Server cluster.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterBackupsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterBackupsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterBackupsResponse";
    /** List of SQL Server backups. */
    backups: Backup[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterHostsRequest";
    /**
     * ID of the SQL Server cluster.
     *
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterHostsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterHostsResponse";
    /** List of SQL Server hosts. */
    hosts: Host[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterRequest";
    /**
     * ID of the SQL Server cluster to start.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterMetadata";
    /** ID of the SQL Server cluster being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.StopClusterRequest";
    /**
     * ID of the SQL Server cluster to stop.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.StopClusterMetadata";
    /** ID of the SQL Server cluster being stopped. */
    clusterId: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.MoveClusterRequest";
    /**
     * ID of the SQL Server cluster to move.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * ID of the destination folder.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.MoveClusterMetadata";
    /** ID of the SQL Server cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface UpdateClusterHostsMetadata {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterHostsMetadata";
    /** ID of the SQL Server cluster to update hosts in. */
    clusterId: string;
    /** Names of the hosts being updated. */
    hostNames: string[];
}
export interface HostSpec {
    $type: "yandex.cloud.mdb.sqlserver.v1.HostSpec";
    /**
     * ID of the availability zone where the host resides.
     *
     * To get the list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request.
     */
    zoneId: string;
    /**
     * ID of the subnet that the host should belong to. This subnet should be a part of the network that the cluster belongs to.
     *
     * The ID of the network is set in the field [Cluster.network_id].
     */
    subnetId: string;
    /**
     * Determines whether the host gets a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * `false` - do not assign a public IP to the host;
     * * `true` - assign a public IP to the host.
     */
    assignPublicIp: boolean;
}
export interface UpdateHostSpec {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateHostSpec";
    /**
     * Name of the host to update.
     *
     * To get the SQL Server host name, use a [ClusterService.ListHosts] request.
     */
    hostName: string;
    /** Field mask that specifies which fields of the SQL Server host should be updated. */
    updateMask?: FieldMask;
    /** Determines whether the host gets a public IP address on creation. */
    assignPublicIp: boolean;
}
export interface UpdateClusterHostsRequest {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterHostsRequest";
    /**
     * ID of the SQL Server cluster to update hosts in.
     * To get the SQL Server cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** New configurations to apply to hosts. */
    updateHostSpecs: UpdateHostSpec[];
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.sqlserver.v1.ConfigSpec";
    /**
     * Version of SQL Server used in the cluster.
     *
     * Possible values:
     * * 2016sp2std,
     * * 2016sp2ent,
     * * 2017std,
     * * 2017ent,
     * * 2019std,
     * * 2019ent.
     */
    version: string;
    /** Configuration for an SQL Server 2016 SP2 Standard edition cluster. */
    sqlserverConfig2016sp2std?: SQLServerConfig2016sp2std | undefined;
    /** Configuration for an SQL Server 2016 SP2 Enterprise edition cluster. */
    sqlserverConfig2016sp2ent?: SQLServerConfig2016sp2ent | undefined;
    /** Configuration for an SQL Server 2017 Standard edition cluster. */
    sqlserverConfig2017std?: SQLServerConfig2017std | undefined;
    /** Configuration for an SQL Server 2017 Enterprise edition cluster. */
    sqlserverConfig2017ent?: SQLServerConfig2017ent | undefined;
    /** Configuration for an SQL Server 2019 Standard edition cluster. */
    sqlserverConfig2019std?: SQLServerConfig2019std | undefined;
    /** Configuration for an SQL Server 2019 Enterprise edition cluster. */
    sqlserverConfig2019ent?: SQLServerConfig2019ent | undefined;
    /** Resources allocated to SQL Server hosts. */
    resources?: Resources;
    /** Start time for the daily backup in UTC timezone. */
    backupWindowStart?: TimeOfDay;
    /** Database access policy. */
    access?: Access;
    /** Secondary replicas connection mode */
    secondaryConnections: ClusterConfig_SecondaryConnections;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Status | undefined;
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
                } | undefined;
                sqlserverConfig2016sp2std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2016sp2ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
            sqlcollation?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Status | undefined;
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
                } | undefined;
                sqlserverConfig2016sp2std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2016sp2ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
            sqlcollation?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Status | undefined;
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
                } | undefined;
                sqlserverConfig2016sp2std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2016sp2ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
            sqlcollation?: string | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Status | undefined;
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
                } | undefined;
                sqlserverConfig2016sp2std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2016sp2ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
                } & {
                    dataLens?: boolean | undefined;
                    webSql?: boolean | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
                sqlserverConfig2016sp2std?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                sqlserverConfig2016sp2ent?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2016sp2ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                sqlserverConfig2017std?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                sqlserverConfig2017ent?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2017ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                sqlserverConfig2019std?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019std"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019std"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019std"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019std"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                sqlserverConfig2019ent?: ({
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019ent"]["effectiveConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    userConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019ent"]["userConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                    defaultConfig?: ({
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019ent"]["defaultConfig"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["sqlserverConfig2019ent"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>) | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Health | undefined;
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
            environment?: Cluster_Environment | undefined;
            sqlcollation?: string | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "hostGroupIds" | "monitoring" | "environment" | "sqlcollation">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Status | undefined;
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
                } | undefined;
                sqlserverConfig2016sp2std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2016sp2ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2017ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019std?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                sqlserverConfig2019ent?: {
                    effectiveConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxDegreeOfParallelism?: number | undefined;
                        costThresholdForParallelism?: number | undefined;
                        auditLevel?: number | undefined;
                        fillFactorPercent?: number | undefined;
                        optimizeForAdHocWorkloads?: boolean | undefined;
                    } | undefined;
                } | undefined;
                secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Cluster_Health | undefined;
            hostGroupIds?: string[] | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
            sqlcollation?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterRequest";
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        databaseSpecs?: {
            name?: string | undefined;
        }[] | undefined;
        userSpecs?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            serverRoles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] | undefined;
        }[] | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
        sqlcollation?: string | undefined;
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
            sqlserverConfig2016sp2std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2016sp2ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>) | undefined;
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
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            serverRoles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            serverRoles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] & import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
            serverRoles?: (import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] & import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] & Record<Exclude<keyof I["userSpecs"][number]["serverRoles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[]>, never>) | undefined;
        } & Record<Exclude<keyof I["userSpecs"][number], "$type" | "name" | "permissions" | "password" | "serverRoles">, never>)[] & Record<Exclude<keyof I["userSpecs"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").Permission_Role[] | undefined;
            }[] | undefined;
            password?: string | undefined;
            serverRoles?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/user").ServerRole[] | undefined;
        }[]>, never>) | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
        sqlcollation?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "hostGroupIds" | "configSpec" | "environment" | "databaseSpecs" | "userSpecs" | "hostSpecs" | "sqlcollation">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterRequest";
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
            sqlserverConfig2016sp2std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2016sp2ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "clusterId" | "configSpec">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.DeleteClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.BackupClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.BackupClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterRequest";
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
        serviceAccountId?: string | undefined;
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        serviceAccountId?: string | undefined;
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
            } | undefined;
            sqlserverConfig2016sp2std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2016sp2ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2017ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019std?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            sqlserverConfig2019ent?: {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
            sqlserverConfig2016sp2std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2016sp2ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2016sp2ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2017ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2017ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019std?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            sqlserverConfig2019ent?: ({
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & {
                maxDegreeOfParallelism?: number | undefined;
                costThresholdForParallelism?: number | undefined;
                auditLevel?: number | undefined;
                fillFactorPercent?: number | undefined;
                optimizeForAdHocWorkloads?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["sqlserverConfig2019ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
            secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "subnetId" | "zoneId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "time" | "backupId" | "deletionProtection" | "serviceAccountId" | "hostGroupIds" | "configSpec" | "environment" | "hostSpecs">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.RestoreClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterFailoverRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterFailoverMetadata";
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
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.sqlserver.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterLogsRequest";
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
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterLogsResponse";
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
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterBackupsRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterBackupsResponse";
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
            databases?: string[] | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            databases?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            databases?: string[] | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            databases?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["databases"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sourceClusterId" | "databases">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
            databases?: string[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Role | undefined;
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
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["hosts"][number]["services"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[]>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/sqlserver/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const StartClusterRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.StopClusterMetadata";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.MoveClusterRequest";
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
    $type: "yandex.cloud.mdb.sqlserver.v1.MoveClusterMetadata";
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
export declare const UpdateClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterHostsMetadata";
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
export declare const HostSpec: {
    $type: "yandex.cloud.mdb.sqlserver.v1.HostSpec";
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
    } & {
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "zoneId" | "assignPublicIp">, never>>(object: I): HostSpec;
};
export declare const UpdateHostSpec: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateHostSpec";
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
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        assignPublicIp?: boolean | undefined;
        hostName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "assignPublicIp" | "hostName">, never>>(object: I): UpdateHostSpec;
};
export declare const UpdateClusterHostsRequest: {
    $type: "yandex.cloud.mdb.sqlserver.v1.UpdateClusterHostsRequest";
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
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        updateHostSpecs?: ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
        }[] & ({
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
        } & {
            updateMask?: ({
                paths?: string[] | undefined;
            } & {
                paths?: (string[] & string[] & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["updateHostSpecs"][number]["updateMask"], "$type" | "paths">, never>) | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
        } & Record<Exclude<keyof I["updateHostSpecs"][number], "$type" | "updateMask" | "assignPublicIp" | "hostName">, never>)[] & Record<Exclude<keyof I["updateHostSpecs"], "$type" | keyof {
            updateMask?: {
                paths?: string[] | undefined;
            } | undefined;
            assignPublicIp?: boolean | undefined;
            hostName?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "updateHostSpecs">, never>>(object: I): UpdateClusterHostsRequest;
};
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.sqlserver.v1.ConfigSpec";
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
        } | undefined;
        sqlserverConfig2016sp2std?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        sqlserverConfig2016sp2ent?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        sqlserverConfig2017std?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        sqlserverConfig2017ent?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        sqlserverConfig2019std?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        sqlserverConfig2019ent?: {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } | undefined;
        secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
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
        } & {
            dataLens?: boolean | undefined;
            webSql?: boolean | undefined;
        } & Record<Exclude<keyof I["access"], "$type" | "dataLens" | "webSql">, never>) | undefined;
        sqlserverConfig2016sp2std?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2016sp2std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        sqlserverConfig2016sp2ent?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2016sp2ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        sqlserverConfig2017std?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2017std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        sqlserverConfig2017ent?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2017ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        sqlserverConfig2019std?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2019std"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        sqlserverConfig2019ent?: ({
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & {
            maxDegreeOfParallelism?: number | undefined;
            costThresholdForParallelism?: number | undefined;
            auditLevel?: number | undefined;
            fillFactorPercent?: number | undefined;
            optimizeForAdHocWorkloads?: boolean | undefined;
        } & Record<Exclude<keyof I["sqlserverConfig2019ent"], "$type" | "maxDegreeOfParallelism" | "costThresholdForParallelism" | "auditLevel" | "fillFactorPercent" | "optimizeForAdHocWorkloads">, never>) | undefined;
        secondaryConnections?: ClusterConfig_SecondaryConnections | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "access" | "sqlserverConfig2016sp2std" | "sqlserverConfig2016sp2ent" | "sqlserverConfig2017std" | "sqlserverConfig2017ent" | "sqlserverConfig2019std" | "sqlserverConfig2019ent" | "secondaryConnections">, never>>(object: I): ConfigSpec;
};
/** A set of methods for managing SQL Server clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified SQL Server cluster.
     *
     * To get the list of available SQL Server clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of SQL Server clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates an SQL Server cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified SQL Server cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified SQL Server cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified SQL Server cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified SQL Server cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves the specified SQL Server cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified SQL Server cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new SQL Server cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts a manual failover for a cluster. */
    readonly startFailover: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/StartFailover";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterFailoverRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterFailoverRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for the specified SQL Server cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-sqlserver/operations/cluster-logs) section in the documentation.
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Retrieves the list of operations for the specified SQL Server cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of available backups for the specified SQL Server cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves the list of hosts for the specified SQL Server cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Updates the specified hosts. */
    readonly updateHosts: {
        readonly path: "/yandex.cloud.mdb.sqlserver.v1.ClusterService/UpdateHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified SQL Server cluster.
     *
     * To get the list of available SQL Server clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of SQL Server clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates an SQL Server cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Modifies the specified SQL Server cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified SQL Server cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified SQL Server cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified SQL Server cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Moves the specified SQL Server cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Creates a backup for the specified SQL Server cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new SQL Server cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Starts a manual failover for a cluster. */
    startFailover: handleUnaryCall<StartClusterFailoverRequest, Operation>;
    /**
     * Retrieves logs for the specified SQL Server cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-sqlserver/operations/cluster-logs) section in the documentation.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Retrieves the list of operations for the specified SQL Server cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified SQL Server cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves the list of hosts for the specified SQL Server cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Updates the specified hosts. */
    updateHosts: handleUnaryCall<UpdateClusterHostsRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified SQL Server cluster.
     *
     * To get the list of available SQL Server clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of SQL Server clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates an SQL Server cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified SQL Server cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified SQL Server cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified SQL Server cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified SQL Server cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves the specified SQL Server cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified SQL Server cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new SQL Server cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts a manual failover for a cluster. */
    startFailover(request: StartClusterFailoverRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    startFailover(request: StartClusterFailoverRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for the specified SQL Server cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-sqlserver/operations/cluster-logs) section in the documentation.
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of operations for the specified SQL Server cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified SQL Server cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of hosts for the specified SQL Server cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Updates the specified hosts. */
    updateHosts(request: UpdateClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateHosts(request: UpdateClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
