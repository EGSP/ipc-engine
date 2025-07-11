/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Cluster_Environment, Resources, Cluster, Host } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { TimeOfDay } from "../../../../../google/type/timeofday";
import { DatabaseSpec } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/database";
import { UserSpec } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/user";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { Backup } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/backup";
import { Mysqlconfig57 } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/config/mysql5_7";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";
export interface GetClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GetClusterRequest";
    /**
     * ID of the MySQL cluster to return.
     * To get the cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface ListClustersRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClustersRequest";
    /**
     * ID of the folder to list MySQL clusters in.
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
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can only use filtering with the [Cluster.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 1-63 characters long and match the regular expression `[a-zA-Z0-9_-]+`.
     */
    filter: string;
}
export interface ListClustersResponse {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClustersResponse";
    /** List of MySQL clusters. */
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterRequest";
    /** ID of the folder to create the MySQL cluster in. */
    folderId: string;
    /** Name of the MySQL cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the MySQL cluster. */
    environment: Cluster_Environment;
    /** Configuration and resources for hosts that should be created for the MySQL cluster. */
    configSpec?: ConfigSpec;
    /** Descriptions of databases to be created in the MySQL cluster. */
    databaseSpecs: DatabaseSpec[];
    /** Descriptions of database users to be created in the MySQL cluster. */
    userSpecs: UserSpec[];
    /** Individual configurations for hosts that should be created for the MySQL cluster. */
    hostSpecs: HostSpec[];
    /** ID of the network to create the cluster in. */
    networkId: string;
}
export interface CreateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterMetadata";
    /** ID of the MySQL cluster that is being created. */
    clusterId: string;
}
export interface UpdateClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterRequest";
    /**
     * ID of the MySQL cluster to update.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Field mask that specifies which settings of the MySQL cluster should be updated. */
    updateMask?: FieldMask;
    /** New description of the MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
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
}
export interface UpdateClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterMetadata";
    /** ID of the MySQL cluster that is being modified. */
    clusterId: string;
}
export interface DeleteClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterRequest";
    /**
     * ID of the MySQL cluster to delete.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface DeleteClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterMetadata";
    /** ID of the MySQL cluster that is being deleted. */
    clusterId: string;
}
export interface BackupClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.BackupClusterRequest";
    /**
     * ID of the MySQL cluster to back up.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
}
export interface BackupClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.BackupClusterMetadata";
    /** ID of the MySQL cluster that is being backed up. */
    clusterId: string;
}
export interface RestoreClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterRequest";
    /**
     * ID of the backup to create a cluster from.
     * To get the backup ID, use a [ClusterService.ListBackups] request.
     */
    backupId: string;
    /** Timestamp of the moment to which the MySQL cluster should be restored. */
    time?: Date;
    /** Name of the new MySQL cluster. The name must be unique within the folder. */
    name: string;
    /** Description of the new MySQL cluster. */
    description: string;
    /**
     * Custom labels for the MySQL cluster as `key:value` pairs. Maximum 64 per resource.
     * For example, "project": "mvp" or "source": "dictionary".
     */
    labels: {
        [key: string]: string;
    };
    /** Deployment environment of the new MySQL cluster. */
    environment: Cluster_Environment;
    /** Configuration for the MySQL cluster to be created. */
    configSpec?: ConfigSpec;
    /**
     * Configurations for MySQL hosts that should be added
     * to the cluster that is being created from the backup.
     */
    hostSpecs: HostSpec[];
    /** ID of the network to create the MySQL cluster in. */
    networkId: string;
}
export interface RestoreClusterRequest_LabelsEntry {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface RestoreClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterMetadata";
    /** ID of the new MySQL cluster that is being created from a backup. */
    clusterId: string;
    /** ID of the backup that is being used for creating a cluster. */
    backupId: string;
}
export interface LogRecord {
    $type: "yandex.cloud.mdb.mysql.v1alpha.LogRecord";
    /** Log record timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    timestamp?: Date;
    /** Contents of the log record. */
    message: {
        [key: string]: string;
    };
}
export interface LogRecord_MessageEntry {
    $type: "yandex.cloud.mdb.mysql.v1alpha.LogRecord.MessageEntry";
    key: string;
    value: string;
}
export interface ListClusterLogsRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsRequest";
    /**
     * ID of the MySQL cluster to request logs for.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Columns from the logs table to request.
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
    /** Always return `next_page_token`, even if current page is empty. */
    alwaysNextPageToken: boolean;
}
export declare enum ListClusterLogsRequest_ServiceType {
    SERVICE_TYPE_UNSPECIFIED = 0,
    /** MYSQL - Logs of MySQL activity. */
    MYSQL = 1,
    UNRECOGNIZED = -1
}
export declare function listClusterLogsRequest_ServiceTypeFromJSON(object: any): ListClusterLogsRequest_ServiceType;
export declare function listClusterLogsRequest_ServiceTypeToJSON(object: ListClusterLogsRequest_ServiceType): string;
export interface ListClusterLogsResponse {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsResponse";
    /** Requested log records. */
    logs: LogRecord[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListClusterLogsRequest.page_size], use the [next_page_token] as the value
     * for the [ListClusterLogsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListClusterOperationsRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsRequest";
    /** ID of the MySQL cluster to list operations for. */
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsResponse";
    /** List of operations for the specified MySQL cluster. */
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsRequest";
    /**
     * ID of the MySQL cluster.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsResponse";
    /** List of MySQL backups. */
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsRequest";
    /**
     * ID of the MySQL cluster.
     * To get the MySQL cluster ID use a [ClusterService.List] request.
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsResponse";
    /** List of MySQL hosts. */
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.AddClusterHostsRequest";
    /**
     * ID of the MySQL cluster to add hosts to.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configurations for MySQL hosts that should be added to the cluster. */
    hostSpecs: HostSpec[];
}
export interface AddClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.AddClusterHostsMetadata";
    /** ID of the MySQL cluster to which the hosts are being added. */
    clusterId: string;
    /** Names of hosts that are being added to the cluster. */
    hostNames: string[];
}
export interface DeleteClusterHostsRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterHostsRequest";
    /**
     * ID of the MySQL cluster to remove hosts from.
     * To get the MySQL cluster ID, use a [ClusterService.List] request.
     */
    clusterId: string;
    /** Names of hosts to delete. */
    hostNames: string[];
}
export interface DeleteClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterHostsMetadata";
    /** ID of the MySQL cluster to remove hosts from. */
    clusterId: string;
    /** Names of hosts that are being deleted. */
    hostNames: string[];
}
export interface StartClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.StartClusterRequest";
    /** ID of the MySQL cluster to start. */
    clusterId: string;
}
export interface StartClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.StartClusterMetadata";
    /** ID of the MySQL cluster being started. */
    clusterId: string;
}
export interface StopClusterRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.StopClusterRequest";
    /** ID of the MySQL cluster to stop. */
    clusterId: string;
}
export interface StopClusterMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.StopClusterMetadata";
    /** ID of the MySQL cluster being stopped. */
    clusterId: string;
}
export interface UpdateClusterHostsMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterHostsMetadata";
    /** ID of the MySQL cluster to modify hosts in. */
    clusterId: string;
    /** Names of hosts that are being modified. */
    hostNames: string[];
}
export interface HostSpec {
    $type: "yandex.cloud.mdb.mysql.v1alpha.HostSpec";
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
     * Whether the host should get a public IP address on creation.
     *
     * After a host has been created, this setting cannot be changed. To remove an assigned public IP, or to assign
     * a public IP to a host without one, recreate the host with [assign_public_ip] set as needed.
     *
     * Possible values:
     * * false - don't assign a public IP to the host.
     * * true - the host should have a public IP address.
     */
    assignPublicIp: boolean;
}
export interface ConfigSpec {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ConfigSpec";
    /**
     * Version of MySQL used in the cluster.
     * Possible values:
     * * 5.7
     */
    version: string;
    /** Configuration for a MySQL 5.7 cluster. */
    mysqlConfig57?: Mysqlconfig57 | undefined;
    /** Resources allocated to MySQL hosts. */
    resources?: Resources;
    /** Time to start the daily backup, in the UTC timezone. */
    backupWindowStart?: TimeOfDay;
}
export declare const GetClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GetClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClustersRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClustersResponse";
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
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Status | undefined;
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
                mysqlConfig57?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        clusters?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Status | undefined;
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
                mysqlConfig57?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Status | undefined;
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
                mysqlConfig57?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Status | undefined;
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
                mysqlConfig57?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
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
                mysqlConfig57?: ({
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                } & {
                    effectiveConfig?: ({
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["effectiveConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
                    userConfig?: ({
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["userConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
                    defaultConfig?: ({
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"]["defaultConfig"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
                } & Record<Exclude<keyof I["clusters"][number]["config"]["mysqlConfig57"], "$type" | "effectiveConfig" | "userConfig" | "defaultConfig">, never>) | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["config"], "$type" | "resources" | "version" | "backupWindowStart" | "mysqlConfig57">, never>) | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["clusters"][number]["labels"], string | number>, never>) | undefined;
            networkId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Health | undefined;
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
        } & Record<Exclude<keyof I["clusters"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "config" | "folderId" | "labels" | "networkId" | "health" | "monitoring" | "environment">, never>)[] & Record<Exclude<keyof I["clusters"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Status | undefined;
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
                mysqlConfig57?: {
                    effectiveConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    userConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                    defaultConfig?: {
                        maxConnections?: number | undefined;
                        innodbBufferPoolSize?: number | undefined;
                        longQueryTime?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            networkId?: string | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Cluster_Health | undefined;
            monitoring?: {
                link?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
            }[] | undefined;
            environment?: Cluster_Environment | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "clusters">, never>>(object: I): ListClustersResponse;
};
export declare const CreateClusterRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterRequest";
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
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
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        }[] | undefined;
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
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
            mysqlConfig57?: ({
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "mysqlConfig57">, never>) | undefined;
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
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpecs"][number]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["userSpecs"][number]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
        } & Record<Exclude<keyof I["userSpecs"][number], "$type" | "name" | "permissions" | "password">, never>)[] & Record<Exclude<keyof I["userSpecs"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "networkId" | "configSpec" | "environment" | "databaseSpecs" | "userSpecs" | "hostSpecs">, never>>(object: I): CreateClusterRequest;
};
export declare const CreateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterRequest";
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
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
            mysqlConfig57?: ({
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "mysqlConfig57">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "clusterId" | "configSpec">, never>>(object: I): UpdateClusterRequest;
};
export declare const UpdateClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.BackupClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.BackupClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterRequest";
    encode(message: RestoreClusterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestoreClusterRequest;
    fromJSON(object: any): RestoreClusterRequest;
    toJSON(message: RestoreClusterRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        networkId?: string | undefined;
        time?: Date | undefined;
        backupId?: string | undefined;
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } | undefined;
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
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        networkId?: string | undefined;
        time?: Date | undefined;
        backupId?: string | undefined;
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
            mysqlConfig57?: {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
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
            mysqlConfig57?: ({
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & {
                maxConnections?: number | undefined;
                innodbBufferPoolSize?: number | undefined;
                longQueryTime?: number | undefined;
            } & Record<Exclude<keyof I["configSpec"]["mysqlConfig57"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
        } & Record<Exclude<keyof I["configSpec"], "$type" | "resources" | "version" | "backupWindowStart" | "mysqlConfig57">, never>) | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "networkId" | "time" | "backupId" | "configSpec" | "environment" | "hostSpecs">, never>>(object: I): RestoreClusterRequest;
};
export declare const RestoreClusterRequest_LabelsEntry: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterRequest.LabelsEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.RestoreClusterMetadata";
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
export declare const LogRecord: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.LogRecord";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.LogRecord.MessageEntry";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterLogsResponse";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterOperationsResponse";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterBackupsResponse";
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        backups?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        } & Record<Exclude<keyof I["backups"][number], "$type" | "id" | "createdAt" | "folderId" | "startedAt" | "sourceClusterId">, never>)[] & Record<Exclude<keyof I["backups"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            startedAt?: Date | undefined;
            sourceClusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "backups">, never>>(object: I): ListClusterBackupsResponse;
};
export declare const ListClusterHostsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListClusterHostsResponse";
    encode(message: ListClusterHostsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClusterHostsResponse;
    fromJSON(object: any): ListClusterHostsResponse;
    toJSON(message: ListClusterHostsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        hosts?: {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        hosts?: ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[] & ({
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Role | undefined;
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
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[] & ({
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            } & {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            } & Record<Exclude<keyof I["hosts"][number]["services"][number], "$type" | "type" | "health">, never>)[] & Record<Exclude<keyof I["hosts"][number]["services"], "$type" | keyof {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[]>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        } & Record<Exclude<keyof I["hosts"][number], "$type" | "name" | "role" | "subnetId" | "zoneId" | "resources" | "services" | "health" | "clusterId" | "assignPublicIp">, never>)[] & Record<Exclude<keyof I["hosts"], "$type" | keyof {
            name?: string | undefined;
            role?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Role | undefined;
            subnetId?: string | undefined;
            zoneId?: string | undefined;
            resources?: {
                diskTypeId?: string | undefined;
                diskSize?: number | undefined;
                resourcePresetId?: string | undefined;
            } | undefined;
            services?: {
                type?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Type | undefined;
                health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Service_Health | undefined;
            }[] | undefined;
            health?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/cluster").Host_Health | undefined;
            clusterId?: string | undefined;
            assignPublicIp?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "hosts">, never>>(object: I): ListClusterHostsResponse;
};
export declare const AddClusterHostsRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.AddClusterHostsRequest";
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
        }[] | undefined;
    } & {
        clusterId?: string | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "hostSpecs">, never>>(object: I): AddClusterHostsRequest;
};
export declare const AddClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.AddClusterHostsMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterHostsRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteClusterHostsMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.StartClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.StartClusterMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.StopClusterRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.StopClusterMetadata";
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
export declare const UpdateClusterHostsMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateClusterHostsMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.HostSpec";
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
export declare const ConfigSpec: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ConfigSpec";
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
        mysqlConfig57?: {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
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
        mysqlConfig57?: ({
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & {
            maxConnections?: number | undefined;
            innodbBufferPoolSize?: number | undefined;
            longQueryTime?: number | undefined;
        } & Record<Exclude<keyof I["mysqlConfig57"], "$type" | "maxConnections" | "innodbBufferPoolSize" | "longQueryTime">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resources" | "version" | "backupWindowStart" | "mysqlConfig57">, never>>(object: I): ConfigSpec;
};
/** A set of methods for managing MySQL clusters. */
export declare const ClusterServiceService: {
    /**
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClusterRequest;
        readonly responseSerialize: (value: Cluster) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Cluster;
    };
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClustersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClustersRequest;
        readonly responseSerialize: (value: ListClustersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClustersResponse;
    };
    /** Creates a MySQL cluster in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified MySQL cluster. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified MySQL cluster. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the specified MySQL cluster. */
    readonly start: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Stops the specified MySQL cluster. */
    readonly stop: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a backup for the specified MySQL cluster. */
    readonly backup: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Backup";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BackupClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BackupClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates a new MySQL cluster using the specified backup. */
    readonly restore: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/Restore";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestoreClusterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestoreClusterRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Retrieves logs for the specified MySQL cluster. */
    readonly listLogs: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterLogsRequest;
        readonly responseSerialize: (value: ListClusterLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterLogsResponse;
    };
    /** Retrieves the list of operations for the specified MySQL cluster. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterOperationsRequest;
        readonly responseSerialize: (value: ListClusterOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterOperationsResponse;
    };
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    readonly listBackups: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListBackups";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterBackupsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterBackupsRequest;
        readonly responseSerialize: (value: ListClusterBackupsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterBackupsResponse;
    };
    /** Retrieves a list of hosts for the specified MySQL cluster. */
    readonly listHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/ListHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClusterHostsRequest;
        readonly responseSerialize: (value: ListClusterHostsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClusterHostsResponse;
    };
    /** Creates new hosts for a cluster. */
    readonly addHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/AddHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified hosts for a cluster. */
    readonly deleteHosts: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.ClusterService/DeleteHosts";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClusterHostsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClusterHostsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ClusterServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
     */
    get: handleUnaryCall<GetClusterRequest, Cluster>;
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
    list: handleUnaryCall<ListClustersRequest, ListClustersResponse>;
    /** Creates a MySQL cluster in the specified folder. */
    create: handleUnaryCall<CreateClusterRequest, Operation>;
    /** Modifies the specified MySQL cluster. */
    update: handleUnaryCall<UpdateClusterRequest, Operation>;
    /** Deletes the specified MySQL cluster. */
    delete: handleUnaryCall<DeleteClusterRequest, Operation>;
    /** Starts the specified MySQL cluster. */
    start: handleUnaryCall<StartClusterRequest, Operation>;
    /** Stops the specified MySQL cluster. */
    stop: handleUnaryCall<StopClusterRequest, Operation>;
    /** Creates a backup for the specified MySQL cluster. */
    backup: handleUnaryCall<BackupClusterRequest, Operation>;
    /** Creates a new MySQL cluster using the specified backup. */
    restore: handleUnaryCall<RestoreClusterRequest, Operation>;
    /** Retrieves logs for the specified MySQL cluster. */
    listLogs: handleUnaryCall<ListClusterLogsRequest, ListClusterLogsResponse>;
    /** Retrieves the list of operations for the specified MySQL cluster. */
    listOperations: handleUnaryCall<ListClusterOperationsRequest, ListClusterOperationsResponse>;
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    listBackups: handleUnaryCall<ListClusterBackupsRequest, ListClusterBackupsResponse>;
    /** Retrieves a list of hosts for the specified MySQL cluster. */
    listHosts: handleUnaryCall<ListClusterHostsRequest, ListClusterHostsResponse>;
    /** Creates new hosts for a cluster. */
    addHosts: handleUnaryCall<AddClusterHostsRequest, Operation>;
    /** Deletes the specified hosts for a cluster. */
    deleteHosts: handleUnaryCall<DeleteClusterHostsRequest, Operation>;
}
export interface ClusterServiceClient extends Client {
    /**
     * Returns the specified MySQL cluster.
     *
     * To get the list of available MySQL clusters, make a [List] request.
     */
    get(request: GetClusterRequest, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    get(request: GetClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Cluster) => void): ClientUnaryCall;
    /** Retrieves the list of MySQL clusters that belong to the specified folder. */
    list(request: ListClustersRequest, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    list(request: ListClustersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClustersResponse) => void): ClientUnaryCall;
    /** Creates a MySQL cluster in the specified folder. */
    create(request: CreateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified MySQL cluster. */
    update(request: UpdateClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified MySQL cluster. */
    delete(request: DeleteClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the specified MySQL cluster. */
    start(request: StartClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Stops the specified MySQL cluster. */
    stop(request: StopClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a backup for the specified MySQL cluster. */
    backup(request: BackupClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    backup(request: BackupClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates a new MySQL cluster using the specified backup. */
    restore(request: RestoreClusterRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restore(request: RestoreClusterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Retrieves logs for the specified MySQL cluster. */
    listLogs(request: ListClusterLogsRequest, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    listLogs(request: ListClusterLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterLogsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of operations for the specified MySQL cluster. */
    listOperations(request: ListClusterOperationsRequest, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListClusterOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterOperationsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of available backups for the specified MySQL cluster. */
    listBackups(request: ListClusterBackupsRequest, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    listBackups(request: ListClusterBackupsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClusterBackupsResponse) => void): ClientUnaryCall;
    /** Retrieves a list of hosts for the specified MySQL cluster. */
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
