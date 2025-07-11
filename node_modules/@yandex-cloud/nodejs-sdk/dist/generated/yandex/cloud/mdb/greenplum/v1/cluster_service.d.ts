/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, GreenplumConfig, CloudStorage, GreenplumRestoreConfig, Cluster } from "../../../../../yandex/cloud/mdb/greenplum/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/greenplum/v1/maintenance";
import { ConnectionPoolerConfig, BackgroundActivitiesConfig, Resources, Greenplumconfig617, Greenplumconfig619, Greenplumconfig621, Greenplumconfig622, GreenplumConfig6 } from "../../../../../yandex/cloud/mdb/greenplum/v1/config";
import { PXFConfig } from "../../../../../yandex/cloud/mdb/greenplum/v1/pxf";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Host } from "../../../../../yandex/cloud/mdb/greenplum/v1/host";
import { Backup } from "../../../../../yandex/cloud/mdb/greenplum/v1/backup";
export declare const protobufPackage = "yandex.cloud.mdb.greenplum.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest";
    /**
     * ID of the Greenplum® cluster resource to return.
     *
     * To get the cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest";
    /**
     * ID of the folder to list Greenplum® clusters in.
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
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     *
     * 2. An `=` operator.
     *
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse";
    /** List of Greenplum® cluster resources. */
    clusters: Cluster[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use the [next_page_token] as the value for the [ListClustersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest";
    /** ID of the folder to create the Greenplum® cluster in. */
    folderId: string;
    /** Name of the Greenplum® cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Greenplum® cluster. */
    description: string;
    /**
     * Custom labels for the Greenplum® cluster as `key:value` pairs.
     * For example, `"project":"mvp"` or `"source":"dictionary"`.
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Greenplum® cluster. */
    environment: Cluster_Environment;
    /** Greenplum® cluster configuration. */
    config?: GreenplumConfig;
    /** Configuration of the Greenplum® master subcluster. */
    masterConfig?: MasterSubclusterConfigSpec;
    /** Configuration of the Greenplum® segment subcluster. */
    segmentConfig?: SegmentSubclusterConfigSpec;
    /** Number of hosts in the master subcluster. */
    masterHostCount: number;
    /** Number of segments per host. */
    segmentInHost: number;
    /** Number of hosts in the segment subcluster. */
    segmentHostCount: number;
    /** Owner user name. */
    userName: string;
    /** Owner user password. */
    userPassword: string;
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Host groups to place VMs of the cluster in. */
    hostGroupIds: string[];
    /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
    /** Configuration of Greenplum® and Odyssey®. */
    configSpec?: ConfigSpec;
    /** Cloud storage settings */
    cloudStorage?: CloudStorage;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec";
    greenplumConfig617?: Greenplumconfig617 | undefined;
    greenplumConfig619?: Greenplumconfig619 | undefined;
    greenplumConfig621?: Greenplumconfig621 | undefined;
    greenplumConfig622?: Greenplumconfig622 | undefined;
    greenplumConfig6?: GreenplumConfig6 | undefined;
    /** Odyssey® pool settings. */
    pool?: ConnectionPoolerConfig;
    backgroundActivities?: BackgroundActivitiesConfig;
    pxfConfig?: PXFConfig;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata";
    /** ID of the Greenplum® cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest";
    /**
     * ID of the Greenplum® cluster resource to update.
     * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which fields of the Greenplum® cluster resource should be updated. */
    updateMask?: FieldMask;
    /** New description of the Greenplum® cluster. */
    description: string;
    /**
     * Custom labels for the Greenplum® cluster as `key:value` pairs.
     * For example, `"project":"mvp"` or `"source":"dictionary"`.
     *
     * The new set of labels completely replaces the old one.
     * To add a label, request the current set with the [ClusterService.Get] method, then send an [ClusterService.Update] request with the new label added to the set.
     */
    labels: {
        [key: string]: string;
    };
    /** New name for the cluster. */
    name: string;
    /** The Greenplum® cluster configuration. */
    config?: GreenplumConfig;
    /** Configuration of the Greenplum® master subcluster. */
    masterConfig?: MasterSubclusterConfigSpec;
    /** Configuration of the Greenplum® segment subcluster. */
    segmentConfig?: SegmentSubclusterConfigSpec;
    /** Owner user password. */
    userPassword: string;
    /** The Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Settings of the Greenplum® cluster. */
    configSpec?: ConfigSpec;
    /** Cloud storage settings */
    cloudStorage?: CloudStorage;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata";
    /** ID of the Greenplum® cluster resource that is being updated. */
    clusterId: string;
}
export interface AddClusterHostsMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata";
    /** ID of the Greenplum Cluster resource that is being updated. */
    clusterId: string;
}
export interface ExpandRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest";
    /**
     * ID of the Greenplum Cluster resource to update.
     * To get the Greenplum cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Number of hosts for add to the segment subcluster */
    segmentHostCount: number;
    /** Number of segments per host to add */
    addSegmentsPerHostCount: number;
    /** Redistribute duration, in seconds */
    duration: number;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest";
    /**
     * ID of the Greenplum® cluster to delete.
     * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata";
    /** ID of the Greenplum® cluster that is being deleted. */
    clusterId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest";
    /**
     * ID of the Greenplum® cluster to start.
     * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata";
    /** ID of the Greenplum® cluster being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest";
    /**
     * ID of the Greenplum® cluster to stop.
     * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata";
    /** ID of the Greenplum® cluster being stopped. */
    clusterId: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest";
    /** ID of the Greenplum® cluster resource to list operations for. */
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse";
    /** List of Operation resources for the specified Greenplum® cluster. */
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest";
    /**
     * ID of the Greenplum® cluster.
     *
     * To get the Greenplum® cluster ID use a [ClusterService.List] request.
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse";
    /** Requested list of hosts for the cluster. */
    hosts: Host[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the [next_page_token] as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MasterSubclusterConfigSpec {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec";
    /** Resources allocated to Greenplum® master subcluster hosts. */
    resources?: Resources;
}
export interface SegmentSubclusterConfigSpec {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec";
    /** Resources allocated to Greenplum® segment subcluster hosts. */
    resources?: Resources;
}
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     *
     * This value is interchangeable with the [StreamLogRecord.next_record_token] from [StreamLogs] method.
     */
    nextPageToken: string;
}
export interface LogRecord {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord";
    /** Time when the log was recorded. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest";
    /**
     * ID of the Greenplum® cluster to request logs for.
     *
     * To get the Greenplum® cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from log table to request.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
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
    /** Page token. To get the next page of results, set [page_token] to the [ListClusterLogsResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
    /** The service always returns a [ListClusterLogsResponse.next_page_token], even if the current page is empty. */
    alwaysNextPageToken: boolean;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for `GREENPLUM` service) and [LogRecord.logs.message.level] (for `GREENPLUM_POOLER` service) fields.
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
}
export declare enum ListClusterLogsRequest_ServiceType {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** GREENPLUM - Greenplum® activity logs. */
    GREENPLUM = 1,
    /** GREENPLUM_POOLER - Greenplum® pooler logs. */
    GREENPLUM_POOLER = 2,
    /** GREENPLUM_PXF - Greenplum® PXF service logs. */
    GREENPLUM_PXF = 3,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest";
    /**
     * ID of the Greenplum® cluster.
     *
     * To get the Greenplum® cluster ID use a [ClusterService.List] request.
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
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest";
    /** ID of the Greenplum® cluster. */
    clusterId: string;
    /**
     * Columns from log table to get in the response.
     * If no columns are specified, entire log records are returned.
     */
    columnFilter: string[];
    /** Type of the service to request logs about. */
    serviceType: StreamClusterLogsRequest_ServiceType;
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
    /** Record token. Set [record_token] to the [StreamLogs.next_record_token] returned by the previous [StreamLogs] request to start streaming from the next log record. */
    recordToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     *
     * 1. A field name. Currently filtering can be applied to the [LogRecord.logs.message.hostname], [LogRecord.logs.message.error_severity] (for GREENPLUM service), [LogRecord.logs.message.level] (for POOLER service) fields.
     *
     * 2. An `=` operator.
     *
     * 3. A value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-z0-9.-]{1,61}`.
     *
     * Examples of a filter:
     *
     * * `message.hostname='node1.db.cloud.yandex.net'`;
     * * `message.error_severity IN ("ERROR", "FATAL", "PANIC") AND message.hostname = "node1.db.cloud.yandex.net"`.
     */
    filter: string;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    /** SERVICE_TYPE_UNSPECIFIED - Type is not specified. */
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** GREENPLUM - Greenplum® activity logs. */
    GREENPLUM = 1,
    /** GREENPLUM_POOLER - Greenplum® pooler logs. */
    GREENPLUM_POOLER = 2,
    /** GREENPLUM_PXF - Greenplum® PXF service logs. */
    GREENPLUM_PXF = 3,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse";
    /** List of Greenplum® backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterBackupsRequest.page_size], use the [next_page_token] as the value for the [ListClusterBackupsRequest.page_token] query parameter in the next list request.
     *
     * Each subsequent list request has its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest";
    /**
     * ID of the backup to create a cluster from.
     *
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Timestamp of the moment to which the Greenplum cluster should be restored. */
    time?: Date;
    /** ID of the folder to create the Greenplum® cluster in. */
    folderId: string;
    /** Name of the Greenplum® cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Greenplum® cluster. */
    description: string;
    /**
     * Custom labels for the Greenplum® cluster as `key:value` pairs.
     * For example, "project":"mvp" or "source":"dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Greenplum® cluster. */
    environment: Cluster_Environment;
    /** Greenplum® cluster config. */
    config?: GreenplumRestoreConfig;
    /** Resources of the Greenplum® master subcluster. */
    masterResources?: Resources;
    /** Resources of the Greenplum® segment subcluster. */
    segmentResources?: Resources;
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups. */
    securityGroupIds: string[];
    /** Determines whether the cluster is protected from being deleted. */
    deletionProtection: boolean;
    /** Host groups to place VMs of cluster on. */
    hostGroupIds: string[];
    /** ID of the placement group. */
    placementGroupId: string;
    /** A Greenplum® cluster maintenance window. Should be defined by either one of the two options. */
    maintenanceWindow?: MaintenanceWindow;
    /** Number of segment hosts */
    segmentHostCount: number;
    /** Number of segments on each host */
    segmentInHost: number;
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata";
    /** ID of the new Greenplum® cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Status | undefined;
            config?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            cloudStorage?: {
                enable?: boolean | undefined;
            } | undefined;
            userName?: string | undefined;
            masterHostCount?: number | undefined;
            segmentHostCount?: number | undefined;
            segmentInHost?: number | undefined;
            masterConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            segmentConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            clusterConfig?: {
                greenplumConfigSet617?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet619?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet621?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet622?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet6?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                pool?: {
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                backgroundActivities?: {
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                pxfConfig?: {
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Status | undefined;
            config?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            cloudStorage?: {
                enable?: boolean | undefined;
            } | undefined;
            userName?: string | undefined;
            masterHostCount?: number | undefined;
            segmentHostCount?: number | undefined;
            segmentInHost?: number | undefined;
            masterConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            segmentConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            clusterConfig?: {
                greenplumConfigSet617?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet619?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet621?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet622?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet6?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                pool?: {
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                backgroundActivities?: {
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                pxfConfig?: {
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Status | undefined;
            config?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            cloudStorage?: {
                enable?: boolean | undefined;
            } | undefined;
            userName?: string | undefined;
            masterHostCount?: number | undefined;
            segmentHostCount?: number | undefined;
            segmentInHost?: number | undefined;
            masterConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            segmentConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            clusterConfig?: {
                greenplumConfigSet617?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet619?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet621?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet622?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet6?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                pool?: {
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                backgroundActivities?: {
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                pxfConfig?: {
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Status | undefined;
            config?: ({
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } & {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "subnetId" | "zoneId" | "version" | "assignPublicIp" | "backupWindowStart" | "access">, never>) | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            cloudStorage?: ({
                enable?: boolean | undefined;
            } & {
                enable?: boolean | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["cloudStorage"], "$type" | "enable">, never>) | undefined;
            userName?: string | undefined;
            masterHostCount?: number | undefined;
            segmentHostCount?: number | undefined;
            segmentInHost?: number | undefined;
            masterConfig?: ({
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
                } & Record<Exclude<keyof I["clusters"][number]["masterConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["masterConfig"], "$type" | "resources">, never>) | undefined;
            segmentConfig?: ({
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
                } & Record<Exclude<keyof I["clusters"][number]["segmentConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["segmentConfig"], "$type" | "resources">, never>) | undefined;
            clusterConfig?: ({
                greenplumConfigSet617?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet619?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet621?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet622?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet6?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                pool?: {
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                backgroundActivities?: {
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                pxfConfig?: {
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                greenplumConfigSet617?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet617"]["effectiveConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet617"]["userConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet617"]["defaultConfig"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet617"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                greenplumConfigSet619?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet619"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet619"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet619"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet619"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                greenplumConfigSet621?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet621"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet621"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet621"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet621"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                greenplumConfigSet622?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet622"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet622"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet622"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet622"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                greenplumConfigSet6?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet6"]["effectiveConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet6"]["userConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet6"]["defaultConfig"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["greenplumConfigSet6"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                pool?: ({
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pool"]["effectiveConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
                    userConfig?: ({
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pool"]["userConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
                    defaultConfig?: ({
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pool"]["defaultConfig"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pool"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                backgroundActivities?: ({
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } & {
                    tableSizes?: ({
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } & {
                        starts?: ({
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] & ({
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
                    analyzeAndVacuum?: ({
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } & {
                        start?: ({
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
                pxfConfig?: ({
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pxfConfig"]["effectiveConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
                    userConfig?: ({
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pxfConfig"]["userConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
                    defaultConfig?: ({
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pxfConfig"]["defaultConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"]["pxfConfig"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["clusterConfig"], "$type" | "greenplumConfigSet617" | "greenplumConfigSet619" | "greenplumConfigSet621" | "greenplumConfigSet622" | "greenplumConfigSet6" | "pool" | "backgroundActivities" | "pxfConfig">, never>) | undefined;
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "health" | "hostGroupIds" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation" | "cloudStorage" | "userName" | "masterHostCount" | "segmentHostCount" | "segmentInHost" | "masterConfig" | "segmentConfig" | "clusterConfig">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Status | undefined;
            config?: {
                subnetId?: string | undefined;
                zoneId?: string | undefined;
                version?: string | undefined;
                assignPublicIp?: boolean | undefined;
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
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            deletionProtection?: boolean | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } | undefined;
            environment?: Cluster_Environment | undefined;
            plannedOperation?: {
                info?: string | undefined;
                delayedUntil?: Date | undefined;
            } | undefined;
            cloudStorage?: {
                enable?: boolean | undefined;
            } | undefined;
            userName?: string | undefined;
            masterHostCount?: number | undefined;
            segmentHostCount?: number | undefined;
            segmentInHost?: number | undefined;
            masterConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            segmentConfig?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            clusterConfig?: {
                greenplumConfigSet617?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet619?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet621?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet622?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                greenplumConfigSet6?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                        maxSlotWalKeepSize?: number | undefined;
                        gpWorkfileLimitPerSegment?: number | undefined;
                        gpWorkfileLimitPerQuery?: number | undefined;
                        gpWorkfileLimitFilesPerQuery?: number | undefined;
                        maxPreparedTransactions?: number | undefined;
                        gpWorkfileCompression?: boolean | undefined;
                        maxStatementMem?: number | undefined;
                        gpAddColumnInheritsTableSetting?: boolean | undefined;
                    } | undefined;
                } | undefined;
                pool?: {
                    effectiveConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                        size?: number | undefined;
                        clientIdleTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                backgroundActivities?: {
                    tableSizes?: {
                        starts?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        }[] | undefined;
                    } | undefined;
                    analyzeAndVacuum?: {
                        start?: {
                            hours?: number | undefined;
                            minutes?: number | undefined;
                        } | undefined;
                        analyzeTimeout?: number | undefined;
                        vacuumTimeout?: number | undefined;
                    } | undefined;
                } | undefined;
                pxfConfig?: {
                    effectiveConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxThreads?: number | undefined;
                        connectionTimeout?: number | undefined;
                        uploadTimeout?: number | undefined;
                        poolAllowCoreThreadTimeout?: boolean | undefined;
                        poolCoreSize?: number | undefined;
                        poolQueueCapacity?: number | undefined;
                        poolMaxSize?: number | undefined;
                        xmx?: number | undefined;
                        xms?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest";
    encode(message: CreateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClusterRequest;
    fromJSON(object: any): CreateClusterRequest;
    toJSON(message: CreateClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        config?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } | undefined;
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
            pool?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            greenplumConfig617?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            greenplumConfig619?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            greenplumConfig621?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig622?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig6?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        cloudStorage?: {
            enable?: boolean | undefined;
        } | undefined;
        userName?: string | undefined;
        masterHostCount?: number | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        segmentConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        userPassword?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        config?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
            } & Record<Exclude<keyof I["config"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "subnetId" | "zoneId" | "version" | "assignPublicIp" | "backupWindowStart" | "access">, never>) | undefined;
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
            pool?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            greenplumConfig617?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            greenplumConfig619?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            greenplumConfig621?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig622?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig6?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } & {
            pool?: ({
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["pool"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
            backgroundActivities?: ({
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } & {
                tableSizes?: ({
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } & {
                    starts?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] & ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
                analyzeAndVacuum?: ({
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & {
                    start?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
            pxfConfig?: ({
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["pxfConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
            greenplumConfig617?: ({
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig617"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
            greenplumConfig619?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig619"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
            greenplumConfig621?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig621"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            greenplumConfig622?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig622"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            greenplumConfig6?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig6"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "pool" | "backgroundActivities" | "pxfConfig" | "greenplumConfig617" | "greenplumConfig619" | "greenplumConfig621" | "greenplumConfig622" | "greenplumConfig6">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        cloudStorage?: ({
            enable?: boolean | undefined;
        } & {
            enable?: boolean | undefined;
        } & Record<Exclude<keyof I["cloudStorage"], "$type" | "enable">, never>) | undefined;
        userName?: string | undefined;
        masterHostCount?: number | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterConfig?: ({
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
            } & Record<Exclude<keyof I["masterConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["masterConfig"], "$type" | "resources">, never>) | undefined;
        segmentConfig?: ({
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
            } & Record<Exclude<keyof I["segmentConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["segmentConfig"], "$type" | "resources">, never>) | undefined;
        userPassword?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "hostGroupIds" | "configSpec" | "maintenanceWindow" | "environment" | "cloudStorage" | "userName" | "masterHostCount" | "segmentHostCount" | "segmentInHost" | "masterConfig" | "segmentConfig" | "userPassword">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterRequest.LabelsEntry";
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
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.greenplum.v1.ConfigSpec";
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial<I extends {
        pool?: {
            mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } | undefined;
        backgroundActivities?: {
            tableSizes?: {
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } | undefined;
            analyzeAndVacuum?: {
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } | undefined;
        } | undefined;
        pxfConfig?: {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } | undefined;
        greenplumConfig617?: {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } | undefined;
        greenplumConfig619?: {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } | undefined;
        greenplumConfig621?: {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        greenplumConfig622?: {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
        greenplumConfig6?: {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } | undefined;
    } & {
        pool?: ({
            mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & {
            mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
            size?: number | undefined;
            clientIdleTimeout?: number | undefined;
        } & Record<Exclude<keyof I["pool"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
        backgroundActivities?: ({
            tableSizes?: {
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } | undefined;
            analyzeAndVacuum?: {
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } | undefined;
        } & {
            tableSizes?: ({
                starts?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] | undefined;
            } & {
                starts?: ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[] & ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
            analyzeAndVacuum?: ({
                start?: {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } & {
                start?: ({
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & {
                    hours?: number | undefined;
                    minutes?: number | undefined;
                } & Record<Exclude<keyof I["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                analyzeTimeout?: number | undefined;
                vacuumTimeout?: number | undefined;
            } & Record<Exclude<keyof I["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
        } & Record<Exclude<keyof I["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
        pxfConfig?: ({
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & {
            maxThreads?: number | undefined;
            connectionTimeout?: number | undefined;
            uploadTimeout?: number | undefined;
            poolAllowCoreThreadTimeout?: boolean | undefined;
            poolCoreSize?: number | undefined;
            poolQueueCapacity?: number | undefined;
            poolMaxSize?: number | undefined;
            xmx?: number | undefined;
            xms?: number | undefined;
        } & Record<Exclude<keyof I["pxfConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
        greenplumConfig617?: ({
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
        } & Record<Exclude<keyof I["greenplumConfig617"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
        greenplumConfig619?: ({
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
        } & Record<Exclude<keyof I["greenplumConfig619"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
        greenplumConfig621?: ({
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["greenplumConfig621"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        greenplumConfig622?: ({
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["greenplumConfig622"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        greenplumConfig6?: ({
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & {
            maxConnections?: number | undefined;
            logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
            maxSlotWalKeepSize?: number | undefined;
            gpWorkfileLimitPerSegment?: number | undefined;
            gpWorkfileLimitPerQuery?: number | undefined;
            gpWorkfileLimitFilesPerQuery?: number | undefined;
            maxPreparedTransactions?: number | undefined;
            gpWorkfileCompression?: boolean | undefined;
            maxStatementMem?: number | undefined;
            gpAddColumnInheritsTableSetting?: boolean | undefined;
        } & Record<Exclude<keyof I["greenplumConfig6"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "pool" | "backgroundActivities" | "pxfConfig" | "greenplumConfig617" | "greenplumConfig619" | "greenplumConfig621" | "greenplumConfig622" | "greenplumConfig6">, never>>(object: I): ConfigSpec;
};
export declare const CreateClusterMetadata: {
    $type: "yandex.cloud.mdb.greenplum.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest";
    encode(message: UpdateClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClusterRequest;
    fromJSON(object: any): UpdateClusterRequest;
    toJSON(message: UpdateClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        config?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } | undefined;
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
            pool?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            greenplumConfig617?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            greenplumConfig619?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            greenplumConfig621?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig622?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig6?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        cloudStorage?: {
            enable?: boolean | undefined;
        } | undefined;
        masterConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        segmentConfig?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        userPassword?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        config?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            version?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
            } & Record<Exclude<keyof I["config"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "subnetId" | "zoneId" | "version" | "assignPublicIp" | "backupWindowStart" | "access">, never>) | undefined;
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
            pool?: {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } | undefined;
            backgroundActivities?: {
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } | undefined;
            pxfConfig?: {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } | undefined;
            greenplumConfig617?: {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } | undefined;
            greenplumConfig619?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } | undefined;
            greenplumConfig621?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig622?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
            greenplumConfig6?: {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } | undefined;
        } & {
            pool?: ({
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & {
                mode?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").ConnectionPoolerConfig_PoolMode | undefined;
                size?: number | undefined;
                clientIdleTimeout?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["pool"], "$type" | "mode" | "size" | "clientIdleTimeout">, never>) | undefined;
            backgroundActivities?: ({
                tableSizes?: {
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } | undefined;
                analyzeAndVacuum?: {
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } | undefined;
            } & {
                tableSizes?: ({
                    starts?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] | undefined;
                } & {
                    starts?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[] & ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"]["starts"][number], "$type" | "hours" | "minutes">, never>)[] & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"]["starts"], "$type" | keyof {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["tableSizes"], "$type" | "starts">, never>) | undefined;
                analyzeAndVacuum?: ({
                    start?: {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & {
                    start?: ({
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & {
                        hours?: number | undefined;
                        minutes?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["analyzeAndVacuum"]["start"], "$type" | "hours" | "minutes">, never>) | undefined;
                    analyzeTimeout?: number | undefined;
                    vacuumTimeout?: number | undefined;
                } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"]["analyzeAndVacuum"], "$type" | "start" | "analyzeTimeout" | "vacuumTimeout">, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["backgroundActivities"], "$type" | "tableSizes" | "analyzeAndVacuum">, never>) | undefined;
            pxfConfig?: ({
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & {
                maxThreads?: number | undefined;
                connectionTimeout?: number | undefined;
                uploadTimeout?: number | undefined;
                poolAllowCoreThreadTimeout?: boolean | undefined;
                poolCoreSize?: number | undefined;
                poolQueueCapacity?: number | undefined;
                poolMaxSize?: number | undefined;
                xmx?: number | undefined;
                xms?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["pxfConfig"], "$type" | "maxThreads" | "connectionTimeout" | "uploadTimeout" | "poolAllowCoreThreadTimeout" | "poolCoreSize" | "poolQueueCapacity" | "poolMaxSize" | "xmx" | "xms">, never>) | undefined;
            greenplumConfig617?: ({
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig617"], "$type" | "maxConnections" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression">, never>) | undefined;
            greenplumConfig619?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig619"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem">, never>) | undefined;
            greenplumConfig621?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig621"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            greenplumConfig622?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig622"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
            greenplumConfig6?: ({
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & {
                maxConnections?: number | undefined;
                logStatement?: import("../../../../../yandex/cloud/mdb/greenplum/v1/config").LogStatement | undefined;
                maxSlotWalKeepSize?: number | undefined;
                gpWorkfileLimitPerSegment?: number | undefined;
                gpWorkfileLimitPerQuery?: number | undefined;
                gpWorkfileLimitFilesPerQuery?: number | undefined;
                maxPreparedTransactions?: number | undefined;
                gpWorkfileCompression?: boolean | undefined;
                maxStatementMem?: number | undefined;
                gpAddColumnInheritsTableSetting?: boolean | undefined;
            } & Record<Exclude<keyof I["configSpec"]["greenplumConfig6"], "$type" | "maxConnections" | "logStatement" | "maxSlotWalKeepSize" | "gpWorkfileLimitPerSegment" | "gpWorkfileLimitPerQuery" | "gpWorkfileLimitFilesPerQuery" | "maxPreparedTransactions" | "gpWorkfileCompression" | "maxStatementMem" | "gpAddColumnInheritsTableSetting">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "pool" | "backgroundActivities" | "pxfConfig" | "greenplumConfig617" | "greenplumConfig619" | "greenplumConfig621" | "greenplumConfig622" | "greenplumConfig6">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        cloudStorage?: ({
            enable?: boolean | undefined;
        } & {
            enable?: boolean | undefined;
        } & Record<Exclude<keyof I["cloudStorage"], "$type" | "enable">, never>) | undefined;
        masterConfig?: ({
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
            } & Record<Exclude<keyof I["masterConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["masterConfig"], "$type" | "resources">, never>) | undefined;
        segmentConfig?: ({
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
            } & Record<Exclude<keyof I["segmentConfig"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["segmentConfig"], "$type" | "resources">, never>) | undefined;
        userPassword?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "config" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "clusterId" | "configSpec" | "maintenanceWindow" | "cloudStorage" | "masterConfig" | "segmentConfig" | "userPassword">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.greenplum.v1.UpdateClusterMetadata";
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
export declare const AddClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.greenplum.v1.AddClusterHostsMetadata";
    encode(message: AddClusterHostsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsMetadata;
    fromJSON(object: any): AddClusterHostsMetadata;
    toJSON(message: AddClusterHostsMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
    } & {
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId">, never>>(object: I): AddClusterHostsMetadata;
};
export declare const ExpandRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.ExpandRequest";
    encode(message: ExpandRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExpandRequest;
    fromJSON(object: any): ExpandRequest;
    toJSON(message: ExpandRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        duration?: number | undefined;
        segmentHostCount?: number | undefined;
        addSegmentsPerHostCount?: number | undefined;
    } & {
        clusterId?: string | undefined;
        duration?: number | undefined;
        segmentHostCount?: number | undefined;
        addSegmentsPerHostCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "duration" | "segmentHostCount" | "addSegmentsPerHostCount">, never>>(object: I): ExpandRequest;
};
export declare const DeleteClusterRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.DeleteClusterMetadata";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StopClusterMetadata";
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
export declare const ListClusterOperationsRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            type?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            type?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            type?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            type?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Type | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "type" | "name" | "subnetId" | "zoneId" | "resources" | "health" | "clusterId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            type?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/greenplum/v1/host").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const MasterSubclusterConfigSpec: {
    $type: "yandex.cloud.mdb.greenplum.v1.MasterSubclusterConfigSpec";
    encode(message: MasterSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterSubclusterConfigSpec;
    fromJSON(object: any): MasterSubclusterConfigSpec;
    toJSON(message: MasterSubclusterConfigSpec): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): MasterSubclusterConfigSpec;
};
export declare const SegmentSubclusterConfigSpec: {
    $type: "yandex.cloud.mdb.greenplum.v1.SegmentSubclusterConfigSpec";
    encode(message: SegmentSubclusterConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentSubclusterConfigSpec;
    fromJSON(object: any): SegmentSubclusterConfigSpec;
    toJSON(message: SegmentSubclusterConfigSpec): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): SegmentSubclusterConfigSpec;
};
export declare const ListClusterLogsResponse: {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsResponse";
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
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.greenplum.v1.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterLogsRequest";
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
export declare const ListClusterBackupsRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsRequest";
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
export declare const StreamLogRecord: {
    $type: "yandex.cloud.mdb.greenplum.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.greenplum.v1.StreamClusterLogsRequest";
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
export declare const ListClusterBackupsResponse: {
    $type: "yandex.cloud.mdb.greenplum.v1.ListClusterBackupsResponse";
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
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "size" | "startedAt" | "sourceClusterId">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            size?: number | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const RestoreClusterRequest: {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest";
    encode(message: RestoreClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest;
    fromJSON(object: any): RestoreClusterRequest;
    toJSON(message: RestoreClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        config?: {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } | undefined;
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
        placementGroupId?: string | undefined;
        hostGroupIds?: string[] | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterResources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        segmentResources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        config?: ({
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
        } & {
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
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
            } & Record<Exclude<keyof I["config"]["backupWindowStart"], "$type" | "seconds" | "nanos" | "hours" | "minutes">, never>) | undefined;
            access?: ({
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & {
                dataLens?: boolean | undefined;
                webSql?: boolean | undefined;
                dataTransfer?: boolean | undefined;
            } & Record<Exclude<keyof I["config"]["access"], "$type" | "dataLens" | "webSql" | "dataTransfer">, never>) | undefined;
        } & Record<Exclude<keyof I["config"], "$type" | "subnetId" | "zoneId" | "assignPublicIp" | "backupWindowStart" | "access">, never>) | undefined;
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
        placementGroupId?: string | undefined;
        hostGroupIds?: (string[] & string[] & Record<Exclude<keyof I["hostGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/greenplum/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        segmentHostCount?: number | undefined;
        segmentInHost?: number | undefined;
        masterResources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["masterResources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        segmentResources?: ({
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } & Record<Exclude<keyof I["segmentResources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "time" | "backupId" | "deletionProtection" | "placementGroupId" | "hostGroupIds" | "maintenanceWindow" | "environment" | "segmentHostCount" | "segmentInHost" | "masterResources" | "segmentResources">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.greenplum.v1.RestoreClusterMetadata";
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
/** A set of methods for managing Greenplum® clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Greenplum® cluster.
     *
     * To get the list of all available Greenplum® clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a Greenplum® cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Greenplum® cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Expands the specified Greenplum® cluster. */
    readonly expand: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Expand";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExpandRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExpandRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Greenplum® cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Greenplum® cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Greenplum® cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves the list of Operation resources for the specified cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves a list of master hosts for the specified cluster. */
    readonly listMasterHosts: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListMasterHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Retrieves a list of segment hosts for the specified cluster. */
    readonly listSegmentHosts: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListSegmentHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Retrieves logs for the specified Greenplum® cluster. */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves a list of available backups for the specified Greenplum® cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Creates a new Greenplum® cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.greenplum.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Greenplum® cluster.
     *
     * To get the list of all available Greenplum® clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a Greenplum® cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Greenplum® cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Expands the specified Greenplum® cluster. */
    expand: handleUnaryCall<ExpandRequest, Operation>;
    /** Deletes the specified Greenplum® cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified Greenplum® cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Greenplum® cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of master hosts for the specified cluster. */
    listMasterHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Retrieves a list of segment hosts for the specified cluster. */
    listSegmentHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Retrieves logs for the specified Greenplum® cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves a list of available backups for the specified Greenplum® cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Creates a new Greenplum® cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Greenplum® cluster.
     *
     * To get the list of all available Greenplum® clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves a list of Greenplum® clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a Greenplum® cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Greenplum® cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Expands the specified Greenplum® cluster. */
    expand(request: ExpandRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    expand(request: ExpandRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    expand(request: ExpandRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Greenplum® cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Greenplum® cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Greenplum® cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves the list of Operation resources for the specified cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of master hosts for the specified cluster. */
    listMasterHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listMasterHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listMasterHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of segment hosts for the specified cluster. */
    listSegmentHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listSegmentHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listSegmentHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Retrieves logs for the specified Greenplum® cluster. */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as [ListLogs] but using server-side streaming. Also allows for `tail -f` semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves a list of available backups for the specified Greenplum® cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Creates a new Greenplum® cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
