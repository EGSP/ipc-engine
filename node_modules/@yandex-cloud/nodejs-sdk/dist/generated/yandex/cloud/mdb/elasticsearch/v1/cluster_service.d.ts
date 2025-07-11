/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, handleServerStreamingCall, Client, ClientUnaryCall, Metadata, CallOptions, ClientReadableStream, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Host_Type, Resources, Cluster, Host } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster";
import { MaintenanceWindow } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { UserSpec } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/user";
import { ExtensionSpec } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/extension";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ElasticsearchConfig7 } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/config/elasticsearch";
import { Backup } from "../../../../../yandex/cloud/mdb/elasticsearch/v1/backup";
export declare const protobufPackage = "yandex.cloud.mdb.elasticsearch.v1";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest";
    /**
     * ID of the Elasticsearch cluster to return.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest";
    /**
     * ID of the folder to list Elasticsearch clusters in.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return.
     * If the number of available results is larger than `page_size`, the service returns a [ListClustersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     * To get the next page of results, set `page_token` to the [ListClustersResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name to filter by. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     *
     * Example of a filter: `name NOT IN 'test,beta'`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse";
    /** List of Elasticsearch clusters. */
    clusters: Cluster[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClustersRequest.page_size], use `next_page_token` as the value
     * for the [ListClustersRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest";
    /** ID of the folder to create the Elasticsearch cluster in. */
    folderId: string;
    /** Name of the Elasticsearch cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the Elasticsearch cluster. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
     *
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the Elasticsearch cluster. */
    environment: Cluster_Environment;
    /** Elasticsearch and hosts configuration for the cluster. */
    configSpec?: ConfigSpec;
    /** One or more descriptions of users to be created in Elasticsearch cluster. */
    userSpecs: UserSpec[];
    /** One or more configurations of hosts to be created in the Elasticsearch cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the Elasticsearch cluster in. */
    networkId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
    /** optional */
    extensionSpecs: ExtensionSpec[];
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata";
    /** ID of the Elasticsearch cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest";
    /**
     * ID of the Elasticsearch cluster to update.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    updateMask?: FieldMask;
    /** New description of the Elasticsearch cluster. */
    description: string;
    /**
     * Custom labels for the Elasticsearch cluster as `key:value` pairs.
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
     * New configuration and resources for hosts in the Elasticsearch cluster.
     *
     * Use [update_mask] to prevent reverting all cluster settings that are not listed in `config_spec` to their default values.
     */
    configSpec?: ConfigSpecUpdate;
    /** New name for the Elasticsearch cluster. */
    name: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** Window of maintenance operations. */
    maintenanceWindow?: MaintenanceWindow;
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata";
    /** ID of the Elasticsearch cluster that is being updated. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest";
    /**
     * ID of the Elasticsearch cluster to delete.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata";
    /** ID of the Elasticsearch cluster that is being deleted. */
    clusterId: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest";
    /**
     * ID of the Elasticsearch cluster to request logs for.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
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
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterLogsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterLogsResponse.next_page_token] returned by the previous list request.
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
    /** Type of the service to request logs about. */
    serviceType: ListClusterLogsRequest_ServiceType;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    ELASTICSEARCH = 1,
    KIBANA = 2,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
/** A single log record. */
export interface LogRecord {
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord";
    /** Log record timestamp. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterLogsRequest.page_size], use `next_page_token` as the value for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     *
     * This value is interchangeable with [StreamLogRecord.next_record_token] from StreamLogs method.
     */
    nextPageToken: string;
}
export interface StreamLogRecord {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord";
    /** One of the requested log records. */
    record?: LogRecord;
    /**
     * This token allows you to continue streaming logs starting from the exact same record.
     *
     * To continue streaming, specify value of `next_record_token` as value for [StreamClusterLogsRequest.record_token] parameter in the next StreamLogs request.
     *
     * This value is interchangeable with [ListClusterLogsResponse.next_page_token] from ListLogs method.
     */
    nextRecordToken: string;
}
export interface StreamClusterLogsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest";
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
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
     * If this field is not set, all existing logs will be sent and then the new ones asthey appear.
     * In essence it has `tail -f` semantics.
     */
    toTime?: Date;
    /**
     * Record token.
     *
     * Set `record_token` to the [StreamLogRecord.next_record_token] returned by a previous [ClusterService.StreamLogs] request to start streaming from next log record.
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
    /** Type of the service to request logs about. */
    serviceType: StreamClusterLogsRequest_ServiceType;
}
export declare enum StreamClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    ELASTICSEARCH = 1,
    KIBANA = 2,
    UNRECOGNIZED = -1
}
export declare function streamClusterLogsRequest_ServiceTypeFromJSON(object: any): StreamClusterLogsRequest_ServiceType;
export declare function streamClusterLogsRequest_ServiceTypeToJSON(object: StreamClusterLogsRequest_ServiceType): string;
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest";
    /**
     * ID of the Elasticsearch cluster to list operations for.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterOperationsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterOperationsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterOperationsResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse";
    /** List of operations for the specified Elasticsearch cluster. */
    operations: Operation[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterOperationsRequest.page_size], use the `next_page_token` as the value for the [ListClusterOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterHostsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest";
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than `page_size`, the service returns a [ListClusterHostsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set `page_token` to the [ListClusterHostsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListClusterHostsResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse";
    /** List of hosts. */
    hosts: Host[];
    /**
     * Token that allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListClusterHostsRequest.page_size], use the `next_page_token` as the value for the [ListClusterHostsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface MoveClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest";
    /**
     * ID of the Elasticsearch cluster to move.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface MoveClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata";
    /** ID of the Elasticsearch cluster being moved. */
    clusterId: string;
    /** ID of the source folder. */
    sourceFolderId: string;
    /** ID of the destination folder. */
    destinationFolderId: string;
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest";
    /**
     * ID of the Elasticsearch cluster to start.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata";
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest";
    /**
     * ID of the Elasticsearch cluster to stop.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata";
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
}
export interface HostSpec {
    $type: "yandex.cloud.mdb.elasticsearch.v1.HostSpec";
    /** ID of the availability zone where the host resides. */
    zoneId: string;
    /** ID of the subnet the host resides in. */
    subnetId: string;
    /**
     * The flag that defines whether a public IP address is assigned to the host.
     *
     * If the value is `true`, then this host is available on the Internet via it's public IP address.
     */
    assignPublicIp: boolean;
    /** Host type. */
    type: Host_Type;
    /** The shard name to create on the host. */
    shardName: string;
}
export interface ElasticsearchSpec {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec";
    /** Configuration and resource allocation for Elasticsearch data nodes. */
    dataNode?: ElasticsearchSpec_DataNode;
    /** Configuration and resource allocation for Elasticsearch master nodes. */
    masterNode?: ElasticsearchSpec_MasterNode;
    /** Cluster wide plugins */
    plugins: string[];
}
export interface ElasticsearchSpec_DataNode {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode";
    elasticsearchConfig7?: ElasticsearchConfig7 | undefined;
    /** Resources allocated to Elasticsearch data nodes. */
    resources?: Resources;
}
export interface ElasticsearchSpec_MasterNode {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode";
    /** Resources allocated to Elasticsearch master nodes. */
    resources?: Resources;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpec";
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearchSpec?: ElasticsearchSpec;
    /** ElasticSearch edition. */
    edition: string;
    /** ElasticSearch admin password. */
    adminPassword: string;
}
export interface ConfigSpecUpdate {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate";
    /** Elasticsearch version. */
    version: string;
    /** Configuration and resource allocation for Elasticsearch nodes. */
    elasticsearchSpec?: ElasticsearchSpec;
    /** ElasticSearch edition. */
    edition: string;
    /** ElasticSearch admin password. */
    adminPassword: string;
}
export interface AddClusterHostsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest";
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** One or more configurations of hosts to be added to the Elasticsearch cluster. */
    hostSpecs: HostSpec[];
}
export interface AddClusterHostsMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata";
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** Names of the host that are being added. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest";
    /**
     * ID of the Elasticsearch cluster.
     *
     * To get the Elasticsearch cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of the hosts to delete. */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata";
    /** ID of the Elasticsearch cluster. */
    clusterId: string;
    /** Names of the hosts that are being deleted. */
    hostNames: string[];
}
export interface RescheduleMaintenanceRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest";
    /** Required. ID of the Elasticsearch cluster to maintenance reschedule. */
    clusterId: string;
    /** Required. The type of reschedule request. */
    rescheduleType: RescheduleMaintenanceRequest_RescheduleType;
    /** The time for SPECIFIC_TIME reschedule. Limited by two weeks since first time scheduled. */
    delayedUntil?: Date;
}
export declare enum RescheduleMaintenanceRequest_RescheduleType {
    RESCHEDULE_TYPE_UNSPECIFIED = 0,
    IMMEDIATE = 1,
    NEXT_AVAILABLE_WINDOW = 2,
    SPECIFIC_TIME = 3,
    UNRECOGNIZED = -1
}
export declare function rescheduleMaintenanceRequest_RescheduleTypeFromJSON(object: any): RescheduleMaintenanceRequest_RescheduleType;
export declare function rescheduleMaintenanceRequest_RescheduleTypeToJSON(object: RescheduleMaintenanceRequest_RescheduleType): string;
export interface RescheduleMaintenanceMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata";
    /** Required. ID of the Elasticsearch cluster. */
    clusterId: string;
    /** Required. New time of the planned maintenance. Can be in the past for rescheduled to "IMMEDIATE". */
    delayedUntil?: Date;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest";
    /** Required. ID of the backup to restore from. */
    backupId: string;
    /** Name of the ElasticSearch cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the ElasticSearch cluster. */
    description: string;
    /**
     * Custom labels for the ElasticSearch cluster as `` key:value `` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the ElasticSearch cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the ElasticSearch cluster. */
    configSpec?: ConfigSpec;
    /** Required. Configuration of ElasticSearch hosts. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
    /** User security groups */
    securityGroupIds: string[];
    /** ID of the service account used for access to Object Storage. */
    serviceAccountId: string;
    /** Deletion Protection inhibits deletion of the cluster */
    deletionProtection: boolean;
    /** ID of the folder to create the ElasticSearch cluster in. */
    folderId: string;
    /** optional */
    extensionSpecs: ExtensionSpec[];
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata";
    /** Required. ID of the new ElasticSearch cluster. */
    clusterId: string;
    /** Required. ID of the backup used for recovery. */
    backupId: string;
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest";
    /** Required. ID of the ElasticSearch cluster to back up. */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata";
    /** ID of the ElasticSearch cluster. */
    clusterId: string;
}
export interface ListClusterBackupsRequest {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest";
    /** Required. ID of the Elasticsearch cluster. */
    clusterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListClusterBackups requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListClusterBackups
     * request to get the next page of results.
     */
    pageToken: string;
}
export interface ListClusterBackupsResponse {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse";
    /** Requested list of backups. */
    backups: Backup[];
    /**
     * This token allows you to get the next page of results for ListClusterBackups requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListClusterBackups request. Subsequent ListClusterBackups
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                elasticsearch?: {
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } | undefined;
                edition?: string | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                elasticsearch?: {
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } | undefined;
                edition?: string | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                elasticsearch?: {
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } | undefined;
                edition?: string | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Status | undefined;
            config?: ({
                version?: string | undefined;
                elasticsearch?: {
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } | undefined;
                edition?: string | undefined;
            } & {
                version?: string | undefined;
                elasticsearch?: ({
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } & {
                    dataNode?: ({
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
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
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                        elasticsearchConfigSet7?: ({
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } & {
                            effectiveConfig?: ({
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["effectiveConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                            userConfig?: ({
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["userConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                            defaultConfig?: ({
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"]["defaultConfig"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"]["elasticsearchConfigSet7"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["dataNode"], "$type" | "resources" | "elasticsearchConfigSet7">, never>) | undefined;
                    masterNode?: ({
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
                        } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["masterNode"], "$type" | "resources">, never>) | undefined;
                    plugins?: (string[] & string[] & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["elasticsearch"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
                edition?: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "version" | "elasticsearch" | "edition">, never>) | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Health | undefined;
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
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } | undefined;
            } & {
                anytime?: ({} & {} & Record<Exclude<keyof I["clusters"][number]["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
                weeklyMaintenanceWindow?: ({
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
                } & {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "health" | "monitoring" | "maintenanceWindow" | "environment" | "plannedOperation">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Status | undefined;
            config?: {
                version?: string | undefined;
                elasticsearch?: {
                    dataNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                        elasticsearchConfigSet7?: {
                            effectiveConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            userConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                            defaultConfig?: {
                                fielddataCacheSize?: string | undefined;
                                reindexRemoteWhitelist?: string | undefined;
                                reindexSslCaPath?: string | undefined;
                                maxClauseCount?: number | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    masterNode?: {
                        resources?: {
                            diskTypeId?: string | undefined;
                            diskSize?: number | undefined;
                            resourcePresetId?: string | undefined;
                        } | undefined;
                    } | undefined;
                    plugins?: string[] | undefined;
                } | undefined;
                edition?: string | undefined;
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
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            maintenanceWindow?: {
                anytime?: {} | undefined;
                weeklyMaintenanceWindow?: {
                    hour?: number | undefined;
                    day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest";
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
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        userSpecs?: {
            name?: string | undefined;
            password?: string | undefined;
        }[] | undefined;
        hostSpecs?: {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] | undefined;
        extensionSpecs?: {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
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
        serviceAccountId?: string | undefined;
        configSpec?: ({
            version?: string | undefined;
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: ({
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } & {
                dataNode?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    elasticsearchConfig7?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
                masterNode?: ({
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"], "$type" | "resources">, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "adminPassword" | "edition" | "elasticsearchSpec">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        userSpecs?: ({
            name?: string | undefined;
            password?: string | undefined;
        }[] & ({
            name?: string | undefined;
            password?: string | undefined;
        } & {
            name?: string | undefined;
            password?: string | undefined;
        } & Record<Exclude<keyof I["userSpecs"][number], "$type" | "name" | "password">, never>)[] & Record<Exclude<keyof I["userSpecs"], "$type" | keyof {
            name?: string | undefined;
            password?: string | undefined;
        }[]>, never>) | undefined;
        hostSpecs?: ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] & ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[]>, never>) | undefined;
        extensionSpecs?: ({
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        } & {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        } & Record<Exclude<keyof I["extensionSpecs"][number], "$type" | "name" | "uri" | "disabled">, never>)[] & Record<Exclude<keyof I["extensionSpecs"], "$type" | keyof {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "configSpec" | "maintenanceWindow" | "environment" | "userSpecs" | "hostSpecs" | "extensionSpecs">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest";
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
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        maintenanceWindow?: {
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
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
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: ({
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } & {
                dataNode?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    elasticsearchConfig7?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
                masterNode?: ({
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"], "$type" | "resources">, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "adminPassword" | "edition" | "elasticsearchSpec">, never>) | undefined;
        maintenanceWindow?: ({
            anytime?: {} | undefined;
            weeklyMaintenanceWindow?: {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } | undefined;
        } & {
            anytime?: ({} & {} & Record<Exclude<keyof I["maintenanceWindow"]["anytime"], "$type">, never>) | undefined;
            weeklyMaintenanceWindow?: ({
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & {
                hour?: number | undefined;
                day?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/maintenance").WeeklyMaintenanceWindow_WeekDay | undefined;
            } & Record<Exclude<keyof I["maintenanceWindow"]["weeklyMaintenanceWindow"], "$type" | "hour" | "day">, never>) | undefined;
        } & Record<Exclude<keyof I["maintenanceWindow"], "$type" | "anytime" | "weeklyMaintenanceWindow">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "securityGroupIds" | "deletionProtection" | "serviceAccountId" | "clusterId" | "configSpec" | "maintenanceWindow">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterLogsResponse";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamLogRecord";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StreamClusterLogsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            type?: Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            type?: Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            type?: Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            type?: Host_Type | undefined;
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
            services?: ({
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["hosts"][number]["services"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[]>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "type" | "name" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            type?: Host_Type | undefined;
            name?: string | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/elasticsearch/v1/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const MoveClusterRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.MoveClusterMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.StopClusterMetadata";
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
export declare const HostSpec: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.HostSpec";
    encode(message: HostSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostSpec;
    fromJSON(object: any): HostSpec;
    toJSON(message: HostSpec): unknown;
    fromPartial<I extends {
        type?: Host_Type | undefined;
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        shardName?: string | undefined;
    } & {
        type?: Host_Type | undefined;
        subnetId?: string | undefined;
        zoneId?: string | undefined;
        assignPublicIp?: boolean | undefined;
        shardName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName">, never>>(object: I): HostSpec;
};
export declare const ElasticsearchSpec: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec";
    encode(message: ElasticsearchSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchSpec;
    fromJSON(object: any): ElasticsearchSpec;
    toJSON(message: ElasticsearchSpec): unknown;
    fromPartial<I extends {
        dataNode?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            elasticsearchConfig7?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } | undefined;
        } | undefined;
        masterNode?: {
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
        } | undefined;
        plugins?: string[] | undefined;
    } & {
        dataNode?: ({
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            elasticsearchConfig7?: {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
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
            } & Record<Exclude<keyof I["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            elasticsearchConfig7?: ({
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & {
                fielddataCacheSize?: string | undefined;
                reindexRemoteWhitelist?: string | undefined;
                reindexSslCaPath?: string | undefined;
                maxClauseCount?: number | undefined;
            } & Record<Exclude<keyof I["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
        } & Record<Exclude<keyof I["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
        masterNode?: ({
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
            } & Record<Exclude<keyof I["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
        } & Record<Exclude<keyof I["masterNode"], "$type" | "resources">, never>) | undefined;
        plugins?: (string[] & string[] & Record<Exclude<keyof I["plugins"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataNode" | "masterNode" | "plugins">, never>>(object: I): ElasticsearchSpec;
};
export declare const ElasticsearchSpec_DataNode: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.DataNode";
    encode(message: ElasticsearchSpec_DataNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchSpec_DataNode;
    fromJSON(object: any): ElasticsearchSpec_DataNode;
    toJSON(message: ElasticsearchSpec_DataNode): unknown;
    fromPartial<I extends {
        resources?: {
            diskTypeId?: string | undefined;
            diskSize?: number | undefined;
            resourcePresetId?: string | undefined;
        } | undefined;
        elasticsearchConfig7?: {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
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
        elasticsearchConfig7?: ({
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & {
            fielddataCacheSize?: string | undefined;
            reindexRemoteWhitelist?: string | undefined;
            reindexSslCaPath?: string | undefined;
            maxClauseCount?: number | undefined;
        } & Record<Exclude<keyof I["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "elasticsearchConfig7">, never>>(object: I): ElasticsearchSpec_DataNode;
};
export declare const ElasticsearchSpec_MasterNode: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ElasticsearchSpec.MasterNode";
    encode(message: ElasticsearchSpec_MasterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ElasticsearchSpec_MasterNode;
    fromJSON(object: any): ElasticsearchSpec_MasterNode;
    toJSON(message: ElasticsearchSpec_MasterNode): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "resources">, never>>(object: I): ElasticsearchSpec_MasterNode;
};
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpec";
    encode(message: ConfigSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpec;
    fromJSON(object: any): ConfigSpec;
    toJSON(message: ConfigSpec): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        adminPassword?: string | undefined;
        edition?: string | undefined;
        elasticsearchSpec?: {
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        adminPassword?: string | undefined;
        edition?: string | undefined;
        elasticsearchSpec?: ({
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } & {
            dataNode?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
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
                } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                elasticsearchConfig7?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
            masterNode?: ({
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
                } & Record<Exclude<keyof I["elasticsearchSpec"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearchSpec"]["masterNode"], "$type" | "resources">, never>) | undefined;
            plugins?: (string[] & string[] & Record<Exclude<keyof I["elasticsearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["elasticsearchSpec"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "adminPassword" | "edition" | "elasticsearchSpec">, never>>(object: I): ConfigSpec;
};
export declare const ConfigSpecUpdate: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ConfigSpecUpdate";
    encode(message: ConfigSpecUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigSpecUpdate;
    fromJSON(object: any): ConfigSpecUpdate;
    toJSON(message: ConfigSpecUpdate): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        adminPassword?: string | undefined;
        edition?: string | undefined;
        elasticsearchSpec?: {
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        adminPassword?: string | undefined;
        edition?: string | undefined;
        elasticsearchSpec?: ({
            dataNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } | undefined;
            } | undefined;
            masterNode?: {
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
            } | undefined;
            plugins?: string[] | undefined;
        } & {
            dataNode?: ({
                resources?: {
                    diskTypeId?: string | undefined;
                    diskSize?: number | undefined;
                    resourcePresetId?: string | undefined;
                } | undefined;
                elasticsearchConfig7?: {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
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
                } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                elasticsearchConfig7?: ({
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & {
                    fielddataCacheSize?: string | undefined;
                    reindexRemoteWhitelist?: string | undefined;
                    reindexSslCaPath?: string | undefined;
                    maxClauseCount?: number | undefined;
                } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearchSpec"]["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
            masterNode?: ({
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
                } & Record<Exclude<keyof I["elasticsearchSpec"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
            } & Record<Exclude<keyof I["elasticsearchSpec"]["masterNode"], "$type" | "resources">, never>) | undefined;
            plugins?: (string[] & string[] & Record<Exclude<keyof I["elasticsearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["elasticsearchSpec"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "version" | "adminPassword" | "edition" | "elasticsearchSpec">, never>>(object: I): ConfigSpecUpdate;
};
export declare const AddClusterHostsRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsRequest";
    encode(message: AddClusterHostsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddClusterHostsRequest;
    fromJSON(object: any): AddClusterHostsRequest;
    toJSON(message: AddClusterHostsRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        hostSpecs?: {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
        hostSpecs?: ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] & ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostSpecs">, never>>(object: I): AddClusterHostsRequest;
};
export declare const AddClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.AddClusterHostsMetadata";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.DeleteClusterHostsMetadata";
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
export declare const RescheduleMaintenanceRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.RescheduleMaintenanceMetadata";
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
export declare const RestoreClusterRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest";
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
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] | undefined;
        extensionSpecs?: {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
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
        backupId?: string | undefined;
        deletionProtection?: boolean | undefined;
        serviceAccountId?: string | undefined;
        configSpec?: ({
            version?: string | undefined;
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: {
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } | undefined;
        } & {
            version?: string | undefined;
            adminPassword?: string | undefined;
            edition?: string | undefined;
            elasticsearchSpec?: ({
                dataNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } | undefined;
                } | undefined;
                masterNode?: {
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                } | undefined;
                plugins?: string[] | undefined;
            } & {
                dataNode?: ({
                    resources?: {
                        diskTypeId?: string | undefined;
                        diskSize?: number | undefined;
                        resourcePresetId?: string | undefined;
                    } | undefined;
                    elasticsearchConfig7?: {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                    elasticsearchConfig7?: ({
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & {
                        fielddataCacheSize?: string | undefined;
                        reindexRemoteWhitelist?: string | undefined;
                        reindexSslCaPath?: string | undefined;
                        maxClauseCount?: number | undefined;
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"]["elasticsearchConfig7"], "$type" | "fielddataCacheSize" | "reindexRemoteWhitelist" | "reindexSslCaPath" | "maxClauseCount">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["dataNode"], "$type" | "resources" | "elasticsearchConfig7">, never>) | undefined;
                masterNode?: ({
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
                    } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"]["resources"], "$type" | "diskTypeId" | "diskSize" | "resourcePresetId">, never>) | undefined;
                } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["masterNode"], "$type" | "resources">, never>) | undefined;
                plugins?: (string[] & string[] & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"]["plugins"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["configSpec"]["elasticsearchSpec"], "$type" | "dataNode" | "masterNode" | "plugins">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "version" | "adminPassword" | "edition" | "elasticsearchSpec">, never>) | undefined;
        environment?: Cluster_Environment | undefined;
        hostSpecs?: ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[] & ({
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        } & Record<Exclude<keyof I["hostSpecs"][number], "$type" | "type" | "subnetId" | "zoneId" | "assignPublicIp" | "shardName">, never>)[] & Record<Exclude<keyof I["hostSpecs"], "$type" | keyof {
            type?: Host_Type | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            assignPublicIp?: boolean | undefined;
            shardName?: string | undefined;
        }[]>, never>) | undefined;
        extensionSpecs?: ({
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        } & {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        } & Record<Exclude<keyof I["extensionSpecs"][number], "$type" | "name" | "uri" | "disabled">, never>)[] & Record<Exclude<keyof I["extensionSpecs"], "$type" | keyof {
            name?: string | undefined;
            uri?: string | undefined;
            disabled?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "securityGroupIds" | "backupId" | "deletionProtection" | "serviceAccountId" | "configSpec" | "environment" | "hostSpecs" | "extensionSpecs">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.RestoreClusterMetadata";
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
export declare const BackupClusterRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.BackupClusterMetadata";
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
export declare const ListClusterBackupsRequest: {
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsRequest";
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
    $type: "yandex.cloud.mdb.elasticsearch.v1.ListClusterBackupsResponse";
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
            elasticsearchVersion?: string | undefined;
            indicesTotal?: number | undefined;
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
            elasticsearchVersion?: string | undefined;
            indicesTotal?: number | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            elasticsearchVersion?: string | undefined;
            indicesTotal?: number | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: (string[] & string[] & Record<Exclude<keyof I["backups"][number]["indices"], "$type" | keyof string[]>, never>) | undefined;
            elasticsearchVersion?: string | undefined;
            indicesTotal?: number | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sizeBytes" | "sourceClusterId" | "indices" | "elasticsearchVersion" | "indicesTotal">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sizeBytes?: number | undefined;
            sourceClusterId?: string | undefined;
            indices?: string[] | undefined;
            elasticsearchVersion?: string | undefined;
            indicesTotal?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
/** A set of methods for managing Elasticsearch clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a new Elasticsearch cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Elasticsearch cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Elasticsearch cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    readonly move: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified Elasticsearch cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified Elasticsearch cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Create a backup for the specified ElasticSearch cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the list of available backups for the specified Elasticsearch cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Creates a new ElasticSearch cluster from the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    readonly streamLogs: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/StreamLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamClusterLogsRequest;
        readonly responseSerialize: (value: StreamLogRecord) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamLogRecord;
    };
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Adds new hosts to the specified Elasticsearch cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Reschedule planned maintenance operation. */
    readonly rescheduleMaintenance: {
        readonly path: "/yandex.cloud.mdb.elasticsearch.v1.ClusterService/RescheduleMaintenance";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RescheduleMaintenanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RescheduleMaintenanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a new Elasticsearch cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Updates the specified Elasticsearch cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified Elasticsearch cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move: handleUnaryCall<MoveClusterRequest, Operation>;
    /** Starts the specified Elasticsearch cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified Elasticsearch cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Create a backup for the specified ElasticSearch cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Returns the list of available backups for the specified Elasticsearch cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Creates a new ElasticSearch cluster from the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs: handleServerStreamingCall<StreamClusterLogsRequest, StreamLogRecord>;
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
    /** Reschedule planned maintenance operation. */
    rescheduleMaintenance: handleUnaryCall<RescheduleMaintenanceRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified Elasticsearch cluster.
     *
     * To get the list of available Elasticsearch clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of Elasticsearch clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a new Elasticsearch cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Elasticsearch cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Elasticsearch cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Moves the specified Elasticsearch cluster to the specified folder. */
    move(request: MoveClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified Elasticsearch cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified Elasticsearch cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Create a backup for the specified ElasticSearch cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the list of available backups for the specified Elasticsearch cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Creates a new ElasticSearch cluster from the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Retrieves logs for the specified Elasticsearch cluster.
     *
     * For more information about logs, see the [Logs](/docs/managed-elasticsearch/operations/cluster-logs) section in the documentation.
     */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Same as [ListLogs] but using server-side streaming. Also supports `tail -f` semantics. */
    streamLogs(request: StreamClusterLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    streamLogs(request: StreamClusterLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamLogRecord>;
    /** Retrieves the list of operations for the specified Elasticsearch cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified Elasticsearch cluster. */
    listHosts(request: ListClusterHostsRequest, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    listHosts(request: ListClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterHostsResponse) => void): ClientUnaryCall;
    /** Adds new hosts to the specified Elasticsearch cluster. */
    addHosts(request: AddClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addHosts(request: AddClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes specified hosts from the specified Elasticsearch cluster. */
    deleteHosts(request: DeleteClusterHostsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deleteHosts(request: DeleteClusterHostsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Reschedule planned maintenance operation. */
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rescheduleMaintenance(request: RescheduleMaintenanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
