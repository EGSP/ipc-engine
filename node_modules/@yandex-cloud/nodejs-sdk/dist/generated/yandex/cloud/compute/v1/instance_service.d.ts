/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { MetadataOptions, SchedulingPolicy, NetworkSettings, GpuSettings, PlacementPolicy, IpVersion, Instance } from "../../../../yandex/cloud/compute/v1/instance";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { DiskPlacementPolicy } from "../../../../yandex/cloud/compute/v1/disk";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum InstanceView {
    /** BASIC - Doesn't include the metadata of the instance in the server response. */
    BASIC = 0,
    /** FULL - Returns the metadata of the instance in the server response. */
    FULL = 1,
    UNRECOGNIZED = -1
}
export declare function instanceViewFromJSON(object: any): InstanceView;
export declare function instanceViewToJSON(object: InstanceView): string;
export interface GetInstanceRequest {
    $type: "yandex.cloud.compute.v1.GetInstanceRequest";
    /**
     * ID of the Instance resource to return.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Defines which information about the Instance resource should be returned in the server response. */
    view: InstanceView;
}
export interface ListInstancesRequest {
    $type: "yandex.cloud.compute.v1.ListInstancesRequest";
    /**
     * ID of the Folder to list instances in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListInstancesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListInstancesResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the limited number of fields.
     * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
     * 3. `<value>` represents a value.
     * String values should be written in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     */
    filter: string;
    /**
     * By which column the listing should be ordered and in which direction,
     * format is "createdAt desc". "id asc" if omitted.
     * The default sorting order is ascending
     */
    orderBy: string;
}
export interface ListInstancesResponse {
    $type: "yandex.cloud.compute.v1.ListInstancesResponse";
    /** List of Instance resources. */
    instances: Instance[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstancesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListInstancesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateInstanceRequest {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest";
    /**
     * ID of the folder to create an instance in.
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /** Name of the instance. */
    name: string;
    /** Description of the instance. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the availability zone where the instance resides.
     * To get a list of available zones, use the [yandex.cloud.compute.v1.ZoneService.List] request
     */
    zoneId: string;
    /**
     * ID of the hardware platform configuration for the instance.
     * This field affects the available values in [resources_spec] field.
     *
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /**
     * Computing resources of the instance, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec?: ResourcesSpec;
    /**
     * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
     * The total size of all keys and values must be less than 512 KB.
     *
     * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
     * The values must be 256 KB or less.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Options allow user to configure access to instance's metadata */
    metadataOptions?: MetadataOptions;
    /** Boot disk to attach to the instance. */
    bootDiskSpec?: AttachedDiskSpec;
    /** Array of secondary disks to attach to the instance. */
    secondaryDiskSpecs: AttachedDiskSpec[];
    /** Array of local disks to attach to the instance. */
    localDiskSpecs: AttachedLocalDiskSpec[];
    /**
     * Array of filesystems to attach to the instance.
     *
     * The filesystems must reside in the same availability zone as the instance.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    filesystemSpecs: AttachedFilesystemSpec[];
    /**
     * Network configuration for the instance. Specifies how the network interface is configured
     * to interact with other services on the internal network and on the internet.
     * Currently only one network interface is supported per instance.
     */
    networkInterfaceSpecs: NetworkInterfaceSpec[];
    /**
     * Host name for the instance.
     * This field is used to generate the [yandex.cloud.compute.v1.Instance.fqdn] value.
     * The host name must be unique within the network and region.
     * If not specified, the host name will be equal to [yandex.cloud.compute.v1.Instance.id] of the instance
     * and FQDN will be `<id>.auto.internal`. Otherwise FQDN will be `<hostname>.<region_id>.internal`.
     */
    hostname: string;
    /** Scheduling policy configuration. */
    schedulingPolicy?: SchedulingPolicy;
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network settings. */
    networkSettings?: NetworkSettings;
    /** GPU settings. */
    gpuSettings?: GpuSettings;
    /** Placement policy configuration. */
    placementPolicy?: PlacementPolicy;
}
export interface CreateInstanceRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateInstanceRequest_MetadataEntry {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry";
    key: string;
    value: string;
}
export interface CreateInstanceMetadata {
    $type: "yandex.cloud.compute.v1.CreateInstanceMetadata";
    /** ID of the instance that is being created. */
    instanceId: string;
}
export interface UpdateInstanceRequest {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest";
    /**
     * ID of the Instance resource to update.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Field mask that specifies which fields of the Instance resource are going to be updated. */
    updateMask?: FieldMask;
    /** Name of the instance. */
    name: string;
    /** Description of the instance. */
    description: string;
    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels: {
        [key: string]: string;
    };
    /**
     * ID of the hardware platform configuration for the instance.
     * This field affects the available values in [resources_spec] field.
     *
     * Platforms allows you to create various types of instances: with a large amount of memory,
     * with a large number of cores, with a burstable performance.
     * For more information, see [Platforms](/docs/compute/concepts/vm-platforms).
     */
    platformId: string;
    /**
     * Computing resources of the instance, such as the amount of memory and number of cores.
     * To get a list of available values, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    resourcesSpec?: ResourcesSpec;
    /**
     * The metadata `key:value` pairs that will be assigned to this instance. This includes custom metadata and predefined keys.
     * The total size of all keys and values must be less than 512 KB.
     *
     * Existing set of `metadata` is completely replaced by the provided set.
     *
     * Values are free-form strings, and only have meaning as interpreted by the programs which configure the instance.
     * The values must be 256 KB or less.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Options allow user to configure access to instance's metadata */
    metadataOptions?: MetadataOptions;
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network settings. */
    networkSettings?: NetworkSettings;
    /** Placement policy configuration. */
    placementPolicy?: PlacementPolicy;
    /** Scheduling policy configuration. */
    schedulingPolicy?: SchedulingPolicy;
}
export interface UpdateInstanceRequest_LabelsEntry {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateInstanceRequest_MetadataEntry {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry";
    key: string;
    value: string;
}
export interface UpdateInstanceMetadata {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata";
    /** ID of the Instance resource that is being updated. */
    instanceId: string;
}
export interface DeleteInstanceRequest {
    $type: "yandex.cloud.compute.v1.DeleteInstanceRequest";
    /**
     * ID of the instance to delete.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface DeleteInstanceMetadata {
    $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata";
    /** ID of the instance that is being deleted. */
    instanceId: string;
}
export interface UpdateInstanceMetadataRequest {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest";
    /** ID of the instance that is being updated. */
    instanceId: string;
    /** List of keys to be deleted. */
    delete: string[];
    /** The metadata `key:value` pairs that will be added or updated to this instance. */
    upsert: {
        [key: string]: string;
    };
}
export interface UpdateInstanceMetadataRequest_UpsertEntry {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry";
    key: string;
    value: string;
}
export interface UpdateInstanceMetadataMetadata {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata";
    /** ID of the instance that is being updated. */
    instanceId: string;
}
export interface GetInstanceSerialPortOutputRequest {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest";
    /** ID of the instance to return the serial port output for. */
    instanceId: string;
    /** Serial port to retrieve data from. The default is 1. */
    port: number;
}
export interface GetInstanceSerialPortOutputResponse {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse";
    /**
     * The contents of the serial port output, starting from the time when the instance
     * started to boot.
     */
    contents: string;
}
export interface StopInstanceRequest {
    $type: "yandex.cloud.compute.v1.StopInstanceRequest";
    /**
     * ID of the instance to stop.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface StopInstanceMetadata {
    $type: "yandex.cloud.compute.v1.StopInstanceMetadata";
    /** ID of the instance that is being deleted. */
    instanceId: string;
}
export interface StartInstanceRequest {
    $type: "yandex.cloud.compute.v1.StartInstanceRequest";
    /**
     * ID of the instance to start.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface StartInstanceMetadata {
    $type: "yandex.cloud.compute.v1.StartInstanceMetadata";
    /** ID of the instance. */
    instanceId: string;
}
export interface RestartInstanceRequest {
    $type: "yandex.cloud.compute.v1.RestartInstanceRequest";
    /**
     * ID of the instance to restart.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
}
export interface RestartInstanceMetadata {
    $type: "yandex.cloud.compute.v1.RestartInstanceMetadata";
    /** ID of the instance. */
    instanceId: string;
}
export interface AttachInstanceDiskRequest {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest";
    /**
     * ID of the instance to attach the disk to.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** Disk that should be attached. */
    attachedDiskSpec?: AttachedDiskSpec;
}
export interface AttachInstanceDiskMetadata {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata";
    /** ID of the instance. */
    instanceId: string;
    /** ID of the disk. */
    diskId: string;
}
export interface DetachInstanceDiskRequest {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest";
    /**
     * ID of the instance to detach the disk from.
     * To get the instance ID, use a [InstanceService.List] request.
     */
    instanceId: string;
    /** ID of the disk that should be detached. */
    diskId: string | undefined;
    /**
     * Serial number of the disk that should be detached. This value is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     */
    deviceName: string | undefined;
}
export interface DetachInstanceDiskMetadata {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata";
    /** ID of the instance. */
    instanceId: string;
    /** ID of the disk. */
    diskId: string;
}
export interface AttachInstanceFilesystemRequest {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest";
    /**
     * ID of the instance to attach the filesystem to.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /** Filesystem to attach to the instance. */
    attachedFilesystemSpec?: AttachedFilesystemSpec;
}
export interface AttachInstanceFilesystemMetadata {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata";
    /** ID of the instance that the filesystem is being attached to. */
    instanceId: string;
    /** ID of the filesystem that is being attached to the instance. */
    filesystemId: string;
}
export interface DetachInstanceFilesystemRequest {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest";
    /**
     * ID of the instance to detach the filesystem from.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /** ID of the filesystem that should be detached. */
    filesystemId: string | undefined;
    /** Name of the device used for mounting the filesystem that should be detached. */
    deviceName: string | undefined;
}
export interface DetachInstanceFilesystemMetadata {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata";
    /** ID of the instance that the filesystem is being detached from. */
    instanceId: string;
    /** ID of the filesystem that is being detached from the instance. */
    filesystemId: string;
}
/** Enables One-to-one NAT on the network interface. */
export interface AddInstanceOneToOneNatRequest {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest";
    /** ID of the instance to enable One-to-One NAT on. */
    instanceId: string;
    /** The index of the network interface to enable One-to-One NAT on. */
    networkInterfaceIndex: string;
    /** The network address that is assigned to the instance for this network interface. */
    internalAddress: string;
    /**
     * An external IP address configuration.
     * If not specified, then this instance will have no external internet access.
     */
    oneToOneNatSpec?: OneToOneNatSpec;
}
export interface AddInstanceOneToOneNatMetadata {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata";
    /** ID of the instance. */
    instanceId: string;
}
export interface RemoveInstanceOneToOneNatRequest {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest";
    /** ID of the instance to remove One-to-one NAT. */
    instanceId: string;
    /** The index of the network interface to remove One-to-One NAT from. */
    networkInterfaceIndex: string;
    /** The network address that is assigned to the instance for this network interface. */
    internalAddress: string;
}
export interface RemoveInstanceOneToOneNatMetadata {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata";
    /** ID of the instance. */
    instanceId: string;
}
export interface UpdateInstanceNetworkInterfaceRequest {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest";
    /** ID of the network interface that is being updated. */
    instanceId: string;
    /** The index of the network interface to be updated. */
    networkInterfaceIndex: string;
    /** Field mask that specifies which attributes of the instance should be updated. */
    updateMask?: FieldMask;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that will be assigned to the instance for this network interface. */
    primaryV4AddressSpec?: PrimaryAddressSpec;
    /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec?: PrimaryAddressSpec;
    /** ID's of security groups attached to the interface. */
    securityGroupIds: string[];
}
export interface UpdateInstanceNetworkInterfaceMetadata {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata";
    /** ID of the instant network interface that is being updated. */
    instanceId: string;
    /** The index of the network interface. */
    networkInterfaceIndex: string;
}
export interface ListInstanceOperationsRequest {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest";
    /** ID of the Instance resource to list operations for. */
    instanceId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListInstanceOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListInstanceOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListInstanceOperationsResponse {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse";
    /** List of operations for the specified instance. */
    operations: Operation[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListInstanceOperationsRequest.page_size], use the [next_page_token] as the value
     * for the [ListInstanceOperationsRequest.page_token] query parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ResourcesSpec {
    $type: "yandex.cloud.compute.v1.ResourcesSpec";
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     *
     * For example, if you need only 5% of the CPU performance, you can set core_fraction=5.
     * For more information, see [Levels of core performance](/docs/compute/concepts/performance-levels).
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}
export interface AttachedDiskSpec {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec";
    /** The mode in which to attach this disk. */
    mode: AttachedDiskSpec_Mode;
    /**
     * Specifies a unique serial number of your choice that is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     * If not specified, a random value will be generated.
     */
    deviceName: string;
    /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
    autoDelete: boolean;
    /** Disk specification. */
    diskSpec?: AttachedDiskSpec_DiskSpec | undefined;
    /** ID of the disk that should be attached. */
    diskId: string | undefined;
}
export declare enum AttachedDiskSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDiskSpec_ModeFromJSON(object: any): AttachedDiskSpec_Mode;
export declare function attachedDiskSpec_ModeToJSON(object: AttachedDiskSpec_Mode): string;
export interface AttachedDiskSpec_DiskSpec {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec";
    /** Name of the disk. */
    name: string;
    /** Description of the disk. */
    description: string;
    /**
     * ID of the disk type.
     * To get a list of available disk types, use the [yandex.cloud.compute.v1.DiskTypeService.List] request.
     */
    typeId: string;
    /** Size of the disk, specified in bytes. */
    size: number;
    /** Block size of the disk, specified in bytes. The default is 4096. */
    blockSize: number;
    /** Placement policy configuration. */
    diskPlacementPolicy?: DiskPlacementPolicy;
    /** ID of the image to create the disk from. */
    imageId: string | undefined;
    /** ID of the snapshot to restore the disk from. */
    snapshotId: string | undefined;
}
export interface AttachedLocalDiskSpec {
    $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec";
    /** Size of the disk, specified in bytes. */
    size: number;
}
export interface AttachedFilesystemSpec {
    $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec";
    /** Mode of access to the filesystem that should be attached. */
    mode: AttachedFilesystemSpec_Mode;
    /**
     * Name of the device representing the filesystem on the instance.
     *
     * The name should be used for referencing the filesystem from within the instance
     * when it's being mounted, resized etc.
     *
     * If not specified, a random value will be generated.
     */
    deviceName: string;
    /** ID of the filesystem that should be attached. */
    filesystemId: string;
}
export declare enum AttachedFilesystemSpec_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. Default value. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedFilesystemSpec_ModeFromJSON(object: any): AttachedFilesystemSpec_Mode;
export declare function attachedFilesystemSpec_ModeToJSON(object: AttachedFilesystemSpec_Mode): string;
export interface NetworkInterfaceSpec {
    $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec";
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that will be assigned to the instance for this network interface. */
    primaryV4AddressSpec?: PrimaryAddressSpec;
    /** Primary IPv6 address that will be assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6AddressSpec?: PrimaryAddressSpec;
    /** ID's of security groups attached to the interface */
    securityGroupIds: string[];
}
export interface PrimaryAddressSpec {
    $type: "yandex.cloud.compute.v1.PrimaryAddressSpec";
    /**
     * An IPv4 internal network address that is assigned to the instance for this network interface.
     * If not specified by the user, an unused internal IP is assigned by the system.
     */
    address: string;
    /**
     * An external IP address configuration.
     * If not specified, then this instance will have no external internet access.
     */
    oneToOneNatSpec?: OneToOneNatSpec;
    /** Internal DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface OneToOneNatSpec {
    $type: "yandex.cloud.compute.v1.OneToOneNatSpec";
    /** External IP address version. */
    ipVersion: IpVersion;
    /** set static IP by value */
    address: string;
    /** External DNS configuration */
    dnsRecordSpecs: DnsRecordSpec[];
}
export interface DnsRecordSpec {
    $type: "yandex.cloud.compute.v1.DnsRecordSpec";
    /** FQDN (required) */
    fqdn: string;
    /** DNS zone id (optional, if not set, private zone used) */
    dnsZoneId: string;
    /** DNS record ttl, values in 0-86400 (optional) */
    ttl: number;
    /** When set to true, also create PTR DNS record (optional) */
    ptr: boolean;
}
export interface MoveInstanceRequest {
    $type: "yandex.cloud.compute.v1.MoveInstanceRequest";
    /**
     * ID of the instance to move.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /**
     * ID of the folder to move the instance to.
     *
     * To get the folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    destinationFolderId: string;
}
export interface MoveInstanceMetadata {
    $type: "yandex.cloud.compute.v1.MoveInstanceMetadata";
    /** ID of the instance that is being moved. */
    instanceId: string;
    /** ID of the folder that the instance is being moved from. */
    sourceFolderId: string;
    /** ID of the folder that the instance is being moved to. */
    destinationFolderId: string;
}
export interface RelocateInstanceRequest {
    $type: "yandex.cloud.compute.v1.RelocateInstanceRequest";
    /**
     * ID of the instance to move.
     *
     * To get the instance ID, make a [InstanceService.List] request.
     */
    instanceId: string;
    /**
     * ID of the availability zone to move the instance to.
     *
     * To get the zone ID, make a [ZoneService.List] request.
     */
    destinationZoneId: string;
}
export interface RelocateInstanceMetadata {
    $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata";
    /** ID of the instance that is being moved. */
    instanceId: string;
    /** ID of the availability zone that the instance is being moved from. */
    sourceZoneId: string;
    /** ID of the availability zone that the instance is being moved to. */
    destinationZoneId: string;
}
export interface GuestStopInstanceMetadata {
    $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata";
    /** ID of the instance that was stopped from guest OS. */
    instanceId: string;
}
export interface PreemptInstanceMetadata {
    $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata";
    /** ID of the instance that is being preempted. */
    instanceId: string;
}
export interface CrashInstanceMetadata {
    $type: "yandex.cloud.compute.v1.CrashInstanceMetadata";
    /** ID of the instance that was crashed. */
    instanceId: string;
}
export declare const GetInstanceRequest: {
    $type: "yandex.cloud.compute.v1.GetInstanceRequest";
    encode(message: GetInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceRequest;
    fromJSON(object: any): GetInstanceRequest;
    toJSON(message: GetInstanceRequest): unknown;
    fromPartial<I extends {
        view?: InstanceView | undefined;
        instanceId?: string | undefined;
    } & {
        view?: InstanceView | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "view" | "instanceId">, never>>(object: I): GetInstanceRequest;
};
export declare const ListInstancesRequest: {
    $type: "yandex.cloud.compute.v1.ListInstancesRequest";
    encode(message: ListInstancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesRequest;
    fromJSON(object: any): ListInstancesRequest;
    toJSON(message: ListInstancesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        orderBy?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "orderBy">, never>>(object: I): ListInstancesRequest;
};
export declare const ListInstancesResponse: {
    $type: "yandex.cloud.compute.v1.ListInstancesResponse";
    encode(message: ListInstancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstancesResponse;
    fromJSON(object: any): ListInstancesResponse;
    toJSON(message: ListInstancesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        instances?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        instances?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["metadata"], string | number>, never>) | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["labels"], string | number>, never>) | undefined;
            zoneId?: string | undefined;
            resources?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } & Record<Exclude<keyof I["instances"][number]["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
            filesystems?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] & ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["filesystems"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["instances"][number]["filesystems"], "$type" | keyof {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: ({
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } & {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } & Record<Exclude<keyof I["instances"][number]["metadataOptions"], "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>) | undefined;
            bootDisk?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["bootDisk"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>) | undefined;
            secondaryDisks?: ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] & ({
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["secondaryDisks"][number], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>)[] & Record<Exclude<keyof I["instances"][number]["secondaryDisks"], "$type" | keyof {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[]>, never>) | undefined;
            localDisks?: ({
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] & ({
                size?: number | undefined;
                deviceName?: string | undefined;
            } & {
                size?: number | undefined;
                deviceName?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["localDisks"][number], "$type" | "size" | "deviceName">, never>)[] & Record<Exclude<keyof I["instances"][number]["localDisks"], "$type" | keyof {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[]>, never>) | undefined;
            networkInterfaces?: ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] & ({
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                subnetId?: string | undefined;
                securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
                primaryV6Address?: ({
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    oneToOneNat?: ({
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } & {
                        address?: string | undefined;
                        dnsRecords?: ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] & ({
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[]>, never>) | undefined;
                        ipVersion?: IpVersion | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
                    dnsRecords?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number]["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
            } & Record<Exclude<keyof I["instances"][number]["networkInterfaces"][number], "$type" | "subnetId" | "securityGroupIds" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>)[] & Record<Exclude<keyof I["instances"][number]["networkInterfaces"], "$type" | keyof {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            gpuSettings?: ({
                gpuClusterId?: string | undefined;
            } & {
                gpuClusterId?: string | undefined;
            } & Record<Exclude<keyof I["instances"][number]["gpuSettings"], "$type" | "gpuClusterId">, never>) | undefined;
            schedulingPolicy?: ({
                preemptible?: boolean | undefined;
            } & {
                preemptible?: boolean | undefined;
            } & Record<Exclude<keyof I["instances"][number]["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
            networkSettings?: ({
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } & {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } & Record<Exclude<keyof I["instances"][number]["networkSettings"], "$type" | "type">, never>) | undefined;
            placementPolicy?: ({
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } & {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] & ({
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & {
                    values?: (string[] & string[] & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                } & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["instances"][number]["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["instances"][number]["placementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>) | undefined;
        } & Record<Exclude<keyof I["instances"][number], "$type" | "description" | "id" | "name" | "createdAt" | "metadata" | "status" | "folderId" | "labels" | "zoneId" | "resources" | "filesystems" | "platformId" | "fqdn" | "serviceAccountId" | "hostGroupId" | "hostId" | "metadataOptions" | "bootDisk" | "secondaryDisks" | "localDisks" | "networkInterfaces" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy">, never>)[] & Record<Exclude<keyof I["instances"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            status?: import("../../../../yandex/cloud/compute/v1/instance").Instance_Status | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zoneId?: string | undefined;
            resources?: {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
                gpus?: number | undefined;
            } | undefined;
            filesystems?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedFilesystem_Mode | undefined;
                filesystemId?: string | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            platformId?: string | undefined;
            fqdn?: string | undefined;
            serviceAccountId?: string | undefined;
            hostGroupId?: string | undefined;
            hostId?: string | undefined;
            metadataOptions?: {
                gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
                awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            } | undefined;
            bootDisk?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            } | undefined;
            secondaryDisks?: {
                mode?: import("../../../../yandex/cloud/compute/v1/instance").AttachedDisk_Mode | undefined;
                diskId?: string | undefined;
                deviceName?: string | undefined;
                autoDelete?: boolean | undefined;
            }[] | undefined;
            localDisks?: {
                size?: number | undefined;
                deviceName?: string | undefined;
            }[] | undefined;
            networkInterfaces?: {
                subnetId?: string | undefined;
                securityGroupIds?: string[] | undefined;
                index?: string | undefined;
                macAddress?: string | undefined;
                primaryV4Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                primaryV6Address?: {
                    address?: string | undefined;
                    oneToOneNat?: {
                        address?: string | undefined;
                        dnsRecords?: {
                            ttl?: number | undefined;
                            fqdn?: string | undefined;
                            dnsZoneId?: string | undefined;
                            ptr?: boolean | undefined;
                        }[] | undefined;
                        ipVersion?: IpVersion | undefined;
                    } | undefined;
                    dnsRecords?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
            gpuSettings?: {
                gpuClusterId?: string | undefined;
            } | undefined;
            schedulingPolicy?: {
                preemptible?: boolean | undefined;
            } | undefined;
            networkSettings?: {
                type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
            } | undefined;
            placementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
                hostAffinityRules?: {
                    values?: string[] | undefined;
                    key?: string | undefined;
                    op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "instances">, never>>(object: I): ListInstancesResponse;
};
export declare const CreateInstanceRequest: {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest";
    encode(message: CreateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest;
    fromJSON(object: any): CreateInstanceRequest;
    toJSON(message: CreateInstanceRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        metadata?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zoneId?: string | undefined;
        platformId?: string | undefined;
        serviceAccountId?: string | undefined;
        metadataOptions?: {
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } | undefined;
        gpuSettings?: {
            gpuClusterId?: string | undefined;
        } | undefined;
        schedulingPolicy?: {
            preemptible?: boolean | undefined;
        } | undefined;
        networkSettings?: {
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } | undefined;
        placementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } | undefined;
        hostname?: string | undefined;
        resourcesSpec?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } | undefined;
        bootDiskSpec?: {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } | undefined;
        secondaryDiskSpecs?: {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        }[] | undefined;
        localDiskSpecs?: {
            size?: number | undefined;
        }[] | undefined;
        filesystemSpecs?: {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[] | undefined;
        networkInterfaceSpecs?: {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        metadata?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["metadata"], string | number>, never>) | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        zoneId?: string | undefined;
        platformId?: string | undefined;
        serviceAccountId?: string | undefined;
        metadataOptions?: ({
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } & {
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } & Record<Exclude<keyof I["metadataOptions"], "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>) | undefined;
        gpuSettings?: ({
            gpuClusterId?: string | undefined;
        } & {
            gpuClusterId?: string | undefined;
        } & Record<Exclude<keyof I["gpuSettings"], "$type" | "gpuClusterId">, never>) | undefined;
        schedulingPolicy?: ({
            preemptible?: boolean | undefined;
        } & {
            preemptible?: boolean | undefined;
        } & Record<Exclude<keyof I["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
        networkSettings?: ({
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } & {
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } & Record<Exclude<keyof I["networkSettings"], "$type" | "type">, never>) | undefined;
        placementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] & ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["placementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>) | undefined;
        hostname?: string | undefined;
        resourcesSpec?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & Record<Exclude<keyof I["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
        bootDiskSpec?: ({
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } & {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: ({
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & Record<Exclude<keyof I["bootDiskSpec"]["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & Record<Exclude<keyof I["bootDiskSpec"]["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
        } & Record<Exclude<keyof I["bootDiskSpec"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>) | undefined;
        secondaryDiskSpecs?: ({
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        }[] & ({
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } & {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: ({
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & Record<Exclude<keyof I["secondaryDiskSpecs"][number]["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & Record<Exclude<keyof I["secondaryDiskSpecs"][number]["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
        } & Record<Exclude<keyof I["secondaryDiskSpecs"][number], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>)[] & Record<Exclude<keyof I["secondaryDiskSpecs"], "$type" | keyof {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        localDiskSpecs?: ({
            size?: number | undefined;
        }[] & ({
            size?: number | undefined;
        } & {
            size?: number | undefined;
        } & Record<Exclude<keyof I["localDiskSpecs"][number], "$type" | "size">, never>)[] & Record<Exclude<keyof I["localDiskSpecs"], "$type" | keyof {
            size?: number | undefined;
        }[]>, never>) | undefined;
        filesystemSpecs?: ({
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[] & ({
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & Record<Exclude<keyof I["filesystemSpecs"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["filesystemSpecs"], "$type" | keyof {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[]>, never>) | undefined;
        networkInterfaceSpecs?: ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            subnetId?: string | undefined;
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
            primaryV4AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                oneToOneNatSpec?: ({
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
            primaryV6AddressSpec?: ({
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                oneToOneNatSpec?: ({
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } & {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] & ({
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaceSpecs"][number]["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaceSpecs"][number], "$type" | "subnetId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec">, never>)[] & Record<Exclude<keyof I["networkInterfaceSpecs"], "$type" | keyof {
            subnetId?: string | undefined;
            securityGroupIds?: string[] | undefined;
            primaryV4AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            primaryV6AddressSpec?: {
                address?: string | undefined;
                oneToOneNatSpec?: {
                    address?: string | undefined;
                    ipVersion?: IpVersion | undefined;
                    dnsRecordSpecs?: {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[] | undefined;
                } | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "metadata" | "folderId" | "labels" | "zoneId" | "platformId" | "serviceAccountId" | "metadataOptions" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "hostname" | "resourcesSpec" | "bootDiskSpec" | "secondaryDiskSpecs" | "localDiskSpecs" | "filesystemSpecs" | "networkInterfaceSpecs">, never>>(object: I): CreateInstanceRequest;
};
export declare const CreateInstanceRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.LabelsEntry";
    encode(message: CreateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest_LabelsEntry;
    fromJSON(object: any): CreateInstanceRequest_LabelsEntry;
    toJSON(message: CreateInstanceRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateInstanceRequest_LabelsEntry;
};
export declare const CreateInstanceRequest_MetadataEntry: {
    $type: "yandex.cloud.compute.v1.CreateInstanceRequest.MetadataEntry";
    encode(message: CreateInstanceRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceRequest_MetadataEntry;
    fromJSON(object: any): CreateInstanceRequest_MetadataEntry;
    toJSON(message: CreateInstanceRequest_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateInstanceRequest_MetadataEntry;
};
export declare const CreateInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.CreateInstanceMetadata";
    encode(message: CreateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateInstanceMetadata;
    fromJSON(object: any): CreateInstanceMetadata;
    toJSON(message: CreateInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): CreateInstanceMetadata;
};
export declare const UpdateInstanceRequest: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest";
    encode(message: UpdateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest;
    fromJSON(object: any): UpdateInstanceRequest;
    toJSON(message: UpdateInstanceRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        metadata?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        platformId?: string | undefined;
        serviceAccountId?: string | undefined;
        metadataOptions?: {
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } | undefined;
        schedulingPolicy?: {
            preemptible?: boolean | undefined;
        } | undefined;
        networkSettings?: {
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } | undefined;
        placementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } | undefined;
        instanceId?: string | undefined;
        resourcesSpec?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        metadata?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["metadata"], string | number>, never>) | undefined;
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
        platformId?: string | undefined;
        serviceAccountId?: string | undefined;
        metadataOptions?: ({
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } & {
            gceHttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpEndpoint?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            gceHttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
            awsV1HttpToken?: import("../../../../yandex/cloud/compute/v1/instance").MetadataOption | undefined;
        } & Record<Exclude<keyof I["metadataOptions"], "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>) | undefined;
        schedulingPolicy?: ({
            preemptible?: boolean | undefined;
        } & {
            preemptible?: boolean | undefined;
        } & Record<Exclude<keyof I["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
        networkSettings?: ({
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } & {
            type?: import("../../../../yandex/cloud/compute/v1/instance").NetworkSettings_Type | undefined;
        } & Record<Exclude<keyof I["networkSettings"], "$type" | "type">, never>) | undefined;
        placementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] & ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: import("../../../../yandex/cloud/compute/v1/instance").PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["placementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>) | undefined;
        instanceId?: string | undefined;
        resourcesSpec?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
            gpus?: number | undefined;
        } & Record<Exclude<keyof I["resourcesSpec"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "metadata" | "labels" | "updateMask" | "platformId" | "serviceAccountId" | "metadataOptions" | "schedulingPolicy" | "networkSettings" | "placementPolicy" | "instanceId" | "resourcesSpec">, never>>(object: I): UpdateInstanceRequest;
};
export declare const UpdateInstanceRequest_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.LabelsEntry";
    encode(message: UpdateInstanceRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest_LabelsEntry;
    fromJSON(object: any): UpdateInstanceRequest_LabelsEntry;
    toJSON(message: UpdateInstanceRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateInstanceRequest_LabelsEntry;
};
export declare const UpdateInstanceRequest_MetadataEntry: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceRequest.MetadataEntry";
    encode(message: UpdateInstanceRequest_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceRequest_MetadataEntry;
    fromJSON(object: any): UpdateInstanceRequest_MetadataEntry;
    toJSON(message: UpdateInstanceRequest_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateInstanceRequest_MetadataEntry;
};
export declare const UpdateInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadata";
    encode(message: UpdateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadata;
    fromJSON(object: any): UpdateInstanceMetadata;
    toJSON(message: UpdateInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): UpdateInstanceMetadata;
};
export declare const DeleteInstanceRequest: {
    $type: "yandex.cloud.compute.v1.DeleteInstanceRequest";
    encode(message: DeleteInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceRequest;
    fromJSON(object: any): DeleteInstanceRequest;
    toJSON(message: DeleteInstanceRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): DeleteInstanceRequest;
};
export declare const DeleteInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.DeleteInstanceMetadata";
    encode(message: DeleteInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteInstanceMetadata;
    fromJSON(object: any): DeleteInstanceMetadata;
    toJSON(message: DeleteInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): DeleteInstanceMetadata;
};
export declare const UpdateInstanceMetadataRequest: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest";
    encode(message: UpdateInstanceMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataRequest;
    fromJSON(object: any): UpdateInstanceMetadataRequest;
    toJSON(message: UpdateInstanceMetadataRequest): unknown;
    fromPartial<I extends {
        delete?: string[] | undefined;
        instanceId?: string | undefined;
        upsert?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        delete?: (string[] & string[] & Record<Exclude<keyof I["delete"], "$type" | keyof string[]>, never>) | undefined;
        instanceId?: string | undefined;
        upsert?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["upsert"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "delete" | "instanceId" | "upsert">, never>>(object: I): UpdateInstanceMetadataRequest;
};
export declare const UpdateInstanceMetadataRequest_UpsertEntry: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataRequest.UpsertEntry";
    encode(message: UpdateInstanceMetadataRequest_UpsertEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataRequest_UpsertEntry;
    fromJSON(object: any): UpdateInstanceMetadataRequest_UpsertEntry;
    toJSON(message: UpdateInstanceMetadataRequest_UpsertEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateInstanceMetadataRequest_UpsertEntry;
};
export declare const UpdateInstanceMetadataMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceMetadataMetadata";
    encode(message: UpdateInstanceMetadataMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceMetadataMetadata;
    fromJSON(object: any): UpdateInstanceMetadataMetadata;
    toJSON(message: UpdateInstanceMetadataMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): UpdateInstanceMetadataMetadata;
};
export declare const GetInstanceSerialPortOutputRequest: {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputRequest";
    encode(message: GetInstanceSerialPortOutputRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceSerialPortOutputRequest;
    fromJSON(object: any): GetInstanceSerialPortOutputRequest;
    toJSON(message: GetInstanceSerialPortOutputRequest): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        instanceId?: string | undefined;
    } & {
        port?: number | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "port" | "instanceId">, never>>(object: I): GetInstanceSerialPortOutputRequest;
};
export declare const GetInstanceSerialPortOutputResponse: {
    $type: "yandex.cloud.compute.v1.GetInstanceSerialPortOutputResponse";
    encode(message: GetInstanceSerialPortOutputResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetInstanceSerialPortOutputResponse;
    fromJSON(object: any): GetInstanceSerialPortOutputResponse;
    toJSON(message: GetInstanceSerialPortOutputResponse): unknown;
    fromPartial<I extends {
        contents?: string | undefined;
    } & {
        contents?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "contents">, never>>(object: I): GetInstanceSerialPortOutputResponse;
};
export declare const StopInstanceRequest: {
    $type: "yandex.cloud.compute.v1.StopInstanceRequest";
    encode(message: StopInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceRequest;
    fromJSON(object: any): StopInstanceRequest;
    toJSON(message: StopInstanceRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): StopInstanceRequest;
};
export declare const StopInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.StopInstanceMetadata";
    encode(message: StopInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopInstanceMetadata;
    fromJSON(object: any): StopInstanceMetadata;
    toJSON(message: StopInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): StopInstanceMetadata;
};
export declare const StartInstanceRequest: {
    $type: "yandex.cloud.compute.v1.StartInstanceRequest";
    encode(message: StartInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceRequest;
    fromJSON(object: any): StartInstanceRequest;
    toJSON(message: StartInstanceRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): StartInstanceRequest;
};
export declare const StartInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.StartInstanceMetadata";
    encode(message: StartInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartInstanceMetadata;
    fromJSON(object: any): StartInstanceMetadata;
    toJSON(message: StartInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): StartInstanceMetadata;
};
export declare const RestartInstanceRequest: {
    $type: "yandex.cloud.compute.v1.RestartInstanceRequest";
    encode(message: RestartInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartInstanceRequest;
    fromJSON(object: any): RestartInstanceRequest;
    toJSON(message: RestartInstanceRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): RestartInstanceRequest;
};
export declare const RestartInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.RestartInstanceMetadata";
    encode(message: RestartInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RestartInstanceMetadata;
    fromJSON(object: any): RestartInstanceMetadata;
    toJSON(message: RestartInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): RestartInstanceMetadata;
};
export declare const AttachInstanceDiskRequest: {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskRequest";
    encode(message: AttachInstanceDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceDiskRequest;
    fromJSON(object: any): AttachInstanceDiskRequest;
    toJSON(message: AttachInstanceDiskRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        attachedDiskSpec?: {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        instanceId?: string | undefined;
        attachedDiskSpec?: ({
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } | undefined;
        } & {
            mode?: AttachedDiskSpec_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
            diskSpec?: ({
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & {
                description?: string | undefined;
                name?: string | undefined;
                size?: number | undefined;
                typeId?: string | undefined;
                blockSize?: number | undefined;
                diskPlacementPolicy?: ({
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & {
                    placementGroupId?: string | undefined;
                    placementGroupPartition?: number | undefined;
                } & Record<Exclude<keyof I["attachedDiskSpec"]["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
                imageId?: string | undefined;
                snapshotId?: string | undefined;
            } & Record<Exclude<keyof I["attachedDiskSpec"]["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
        } & Record<Exclude<keyof I["attachedDiskSpec"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId" | "attachedDiskSpec">, never>>(object: I): AttachInstanceDiskRequest;
};
export declare const AttachInstanceDiskMetadata: {
    $type: "yandex.cloud.compute.v1.AttachInstanceDiskMetadata";
    encode(message: AttachInstanceDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceDiskMetadata;
    fromJSON(object: any): AttachInstanceDiskMetadata;
    toJSON(message: AttachInstanceDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        diskId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "instanceId">, never>>(object: I): AttachInstanceDiskMetadata;
};
export declare const DetachInstanceDiskRequest: {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskRequest";
    encode(message: DetachInstanceDiskRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceDiskRequest;
    fromJSON(object: any): DetachInstanceDiskRequest;
    toJSON(message: DetachInstanceDiskRequest): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        deviceName?: string | undefined;
        instanceId?: string | undefined;
    } & {
        diskId?: string | undefined;
        deviceName?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "deviceName" | "instanceId">, never>>(object: I): DetachInstanceDiskRequest;
};
export declare const DetachInstanceDiskMetadata: {
    $type: "yandex.cloud.compute.v1.DetachInstanceDiskMetadata";
    encode(message: DetachInstanceDiskMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceDiskMetadata;
    fromJSON(object: any): DetachInstanceDiskMetadata;
    toJSON(message: DetachInstanceDiskMetadata): unknown;
    fromPartial<I extends {
        diskId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        diskId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "diskId" | "instanceId">, never>>(object: I): DetachInstanceDiskMetadata;
};
export declare const AttachInstanceFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemRequest";
    encode(message: AttachInstanceFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceFilesystemRequest;
    fromJSON(object: any): AttachInstanceFilesystemRequest;
    toJSON(message: AttachInstanceFilesystemRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        attachedFilesystemSpec?: {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } | undefined;
    } & {
        instanceId?: string | undefined;
        attachedFilesystemSpec?: ({
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & {
            mode?: AttachedFilesystemSpec_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & Record<Exclude<keyof I["attachedFilesystemSpec"], "$type" | "mode" | "filesystemId" | "deviceName">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId" | "attachedFilesystemSpec">, never>>(object: I): AttachInstanceFilesystemRequest;
};
export declare const AttachInstanceFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.AttachInstanceFilesystemMetadata";
    encode(message: AttachInstanceFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachInstanceFilesystemMetadata;
    fromJSON(object: any): AttachInstanceFilesystemMetadata;
    toJSON(message: AttachInstanceFilesystemMetadata): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId" | "instanceId">, never>>(object: I): AttachInstanceFilesystemMetadata;
};
export declare const DetachInstanceFilesystemRequest: {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemRequest";
    encode(message: DetachInstanceFilesystemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceFilesystemRequest;
    fromJSON(object: any): DetachInstanceFilesystemRequest;
    toJSON(message: DetachInstanceFilesystemRequest): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
        instanceId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId" | "deviceName" | "instanceId">, never>>(object: I): DetachInstanceFilesystemRequest;
};
export declare const DetachInstanceFilesystemMetadata: {
    $type: "yandex.cloud.compute.v1.DetachInstanceFilesystemMetadata";
    encode(message: DetachInstanceFilesystemMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DetachInstanceFilesystemMetadata;
    fromJSON(object: any): DetachInstanceFilesystemMetadata;
    toJSON(message: DetachInstanceFilesystemMetadata): unknown;
    fromPartial<I extends {
        filesystemId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        filesystemId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "filesystemId" | "instanceId">, never>>(object: I): DetachInstanceFilesystemMetadata;
};
export declare const AddInstanceOneToOneNatRequest: {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatRequest";
    encode(message: AddInstanceOneToOneNatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddInstanceOneToOneNatRequest;
    fromJSON(object: any): AddInstanceOneToOneNatRequest;
    toJSON(message: AddInstanceOneToOneNatRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
        internalAddress?: string | undefined;
        oneToOneNatSpec?: {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
        internalAddress?: string | undefined;
        oneToOneNatSpec?: ({
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId" | "networkInterfaceIndex" | "internalAddress" | "oneToOneNatSpec">, never>>(object: I): AddInstanceOneToOneNatRequest;
};
export declare const AddInstanceOneToOneNatMetadata: {
    $type: "yandex.cloud.compute.v1.AddInstanceOneToOneNatMetadata";
    encode(message: AddInstanceOneToOneNatMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddInstanceOneToOneNatMetadata;
    fromJSON(object: any): AddInstanceOneToOneNatMetadata;
    toJSON(message: AddInstanceOneToOneNatMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): AddInstanceOneToOneNatMetadata;
};
export declare const RemoveInstanceOneToOneNatRequest: {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatRequest";
    encode(message: RemoveInstanceOneToOneNatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveInstanceOneToOneNatRequest;
    fromJSON(object: any): RemoveInstanceOneToOneNatRequest;
    toJSON(message: RemoveInstanceOneToOneNatRequest): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
        internalAddress?: string | undefined;
    } & {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
        internalAddress?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId" | "networkInterfaceIndex" | "internalAddress">, never>>(object: I): RemoveInstanceOneToOneNatRequest;
};
export declare const RemoveInstanceOneToOneNatMetadata: {
    $type: "yandex.cloud.compute.v1.RemoveInstanceOneToOneNatMetadata";
    encode(message: RemoveInstanceOneToOneNatMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveInstanceOneToOneNatMetadata;
    fromJSON(object: any): RemoveInstanceOneToOneNatMetadata;
    toJSON(message: RemoveInstanceOneToOneNatMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): RemoveInstanceOneToOneNatMetadata;
};
export declare const UpdateInstanceNetworkInterfaceRequest: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceRequest";
    encode(message: UpdateInstanceNetworkInterfaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceNetworkInterfaceRequest;
    fromJSON(object: any): UpdateInstanceNetworkInterfaceRequest;
    toJSON(message: UpdateInstanceNetworkInterfaceRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        subnetId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        instanceId?: string | undefined;
        primaryV4AddressSpec?: {
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        primaryV6AddressSpec?: {
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        networkInterfaceIndex?: string | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        subnetId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        instanceId?: string | undefined;
        primaryV4AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            oneToOneNatSpec?: ({
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        primaryV6AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            oneToOneNatSpec?: ({
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        networkInterfaceIndex?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "subnetId" | "securityGroupIds" | "instanceId" | "primaryV4AddressSpec" | "primaryV6AddressSpec" | "networkInterfaceIndex">, never>>(object: I): UpdateInstanceNetworkInterfaceRequest;
};
export declare const UpdateInstanceNetworkInterfaceMetadata: {
    $type: "yandex.cloud.compute.v1.UpdateInstanceNetworkInterfaceMetadata";
    encode(message: UpdateInstanceNetworkInterfaceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateInstanceNetworkInterfaceMetadata;
    fromJSON(object: any): UpdateInstanceNetworkInterfaceMetadata;
    toJSON(message: UpdateInstanceNetworkInterfaceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
    } & {
        instanceId?: string | undefined;
        networkInterfaceIndex?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId" | "networkInterfaceIndex">, never>>(object: I): UpdateInstanceNetworkInterfaceMetadata;
};
export declare const ListInstanceOperationsRequest: {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsRequest";
    encode(message: ListInstanceOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceOperationsRequest;
    fromJSON(object: any): ListInstanceOperationsRequest;
    toJSON(message: ListInstanceOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        instanceId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "instanceId">, never>>(object: I): ListInstanceOperationsRequest;
};
export declare const ListInstanceOperationsResponse: {
    $type: "yandex.cloud.compute.v1.ListInstanceOperationsResponse";
    encode(message: ListInstanceOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListInstanceOperationsResponse;
    fromJSON(object: any): ListInstanceOperationsResponse;
    toJSON(message: ListInstanceOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListInstanceOperationsResponse;
};
export declare const ResourcesSpec: {
    $type: "yandex.cloud.compute.v1.ResourcesSpec";
    encode(message: ResourcesSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResourcesSpec;
    fromJSON(object: any): ResourcesSpec;
    toJSON(message: ResourcesSpec): unknown;
    fromPartial<I extends {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
        gpus?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>>(object: I): ResourcesSpec;
};
export declare const AttachedDiskSpec: {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec";
    encode(message: AttachedDiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec;
    fromJSON(object: any): AttachedDiskSpec;
    toJSON(message: AttachedDiskSpec): unknown;
    fromPartial<I extends {
        mode?: AttachedDiskSpec_Mode | undefined;
        diskId?: string | undefined;
        deviceName?: string | undefined;
        autoDelete?: boolean | undefined;
        diskSpec?: {
            description?: string | undefined;
            name?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
            imageId?: string | undefined;
            snapshotId?: string | undefined;
        } | undefined;
    } & {
        mode?: AttachedDiskSpec_Mode | undefined;
        diskId?: string | undefined;
        deviceName?: string | undefined;
        autoDelete?: boolean | undefined;
        diskSpec?: ({
            description?: string | undefined;
            name?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            diskPlacementPolicy?: {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } | undefined;
            imageId?: string | undefined;
            snapshotId?: string | undefined;
        } & {
            description?: string | undefined;
            name?: string | undefined;
            size?: number | undefined;
            typeId?: string | undefined;
            blockSize?: number | undefined;
            diskPlacementPolicy?: ({
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } & {
                placementGroupId?: string | undefined;
                placementGroupPartition?: number | undefined;
            } & Record<Exclude<keyof I["diskSpec"]["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
            imageId?: string | undefined;
            snapshotId?: string | undefined;
        } & Record<Exclude<keyof I["diskSpec"], "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "diskId" | "deviceName" | "autoDelete" | "diskSpec">, never>>(object: I): AttachedDiskSpec;
};
export declare const AttachedDiskSpec_DiskSpec: {
    $type: "yandex.cloud.compute.v1.AttachedDiskSpec.DiskSpec";
    encode(message: AttachedDiskSpec_DiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDiskSpec_DiskSpec;
    fromJSON(object: any): AttachedDiskSpec_DiskSpec;
    toJSON(message: AttachedDiskSpec_DiskSpec): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
        diskPlacementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } | undefined;
        imageId?: string | undefined;
        snapshotId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        size?: number | undefined;
        typeId?: string | undefined;
        blockSize?: number | undefined;
        diskPlacementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
        } & Record<Exclude<keyof I["diskPlacementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition">, never>) | undefined;
        imageId?: string | undefined;
        snapshotId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "size" | "typeId" | "blockSize" | "diskPlacementPolicy" | "imageId" | "snapshotId">, never>>(object: I): AttachedDiskSpec_DiskSpec;
};
export declare const AttachedLocalDiskSpec: {
    $type: "yandex.cloud.compute.v1.AttachedLocalDiskSpec";
    encode(message: AttachedLocalDiskSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedLocalDiskSpec;
    fromJSON(object: any): AttachedLocalDiskSpec;
    toJSON(message: AttachedLocalDiskSpec): unknown;
    fromPartial<I extends {
        size?: number | undefined;
    } & {
        size?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "size">, never>>(object: I): AttachedLocalDiskSpec;
};
export declare const AttachedFilesystemSpec: {
    $type: "yandex.cloud.compute.v1.AttachedFilesystemSpec";
    encode(message: AttachedFilesystemSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedFilesystemSpec;
    fromJSON(object: any): AttachedFilesystemSpec;
    toJSON(message: AttachedFilesystemSpec): unknown;
    fromPartial<I extends {
        mode?: AttachedFilesystemSpec_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & {
        mode?: AttachedFilesystemSpec_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "filesystemId" | "deviceName">, never>>(object: I): AttachedFilesystemSpec;
};
export declare const NetworkInterfaceSpec: {
    $type: "yandex.cloud.compute.v1.NetworkInterfaceSpec";
    encode(message: NetworkInterfaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterfaceSpec;
    fromJSON(object: any): NetworkInterfaceSpec;
    toJSON(message: NetworkInterfaceSpec): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        securityGroupIds?: string[] | undefined;
        primaryV4AddressSpec?: {
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        primaryV6AddressSpec?: {
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        subnetId?: string | undefined;
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
        primaryV4AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            oneToOneNatSpec?: ({
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
        primaryV6AddressSpec?: ({
            address?: string | undefined;
            oneToOneNatSpec?: {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            oneToOneNatSpec?: ({
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] | undefined;
            } & {
                address?: string | undefined;
                ipVersion?: IpVersion | undefined;
                dnsRecordSpecs?: ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[] & ({
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6AddressSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6AddressSpec"], "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "securityGroupIds" | "primaryV4AddressSpec" | "primaryV6AddressSpec">, never>>(object: I): NetworkInterfaceSpec;
};
export declare const PrimaryAddressSpec: {
    $type: "yandex.cloud.compute.v1.PrimaryAddressSpec";
    encode(message: PrimaryAddressSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddressSpec;
    fromJSON(object: any): PrimaryAddressSpec;
    toJSON(message: PrimaryAddressSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        oneToOneNatSpec?: {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        dnsRecordSpecs?: {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        oneToOneNatSpec?: ({
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            ipVersion?: IpVersion | undefined;
            dnsRecordSpecs?: ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[] & ({
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            } & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["oneToOneNatSpec"]["dnsRecordSpecs"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["oneToOneNatSpec"], "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>) | undefined;
        dnsRecordSpecs?: ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] & ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & Record<Exclude<keyof I["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecordSpecs"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "oneToOneNatSpec" | "dnsRecordSpecs">, never>>(object: I): PrimaryAddressSpec;
};
export declare const OneToOneNatSpec: {
    $type: "yandex.cloud.compute.v1.OneToOneNatSpec";
    encode(message: OneToOneNatSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNatSpec;
    fromJSON(object: any): OneToOneNatSpec;
    toJSON(message: OneToOneNatSpec): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        dnsRecordSpecs?: {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        ipVersion?: IpVersion | undefined;
        dnsRecordSpecs?: ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[] & ({
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        } & Record<Exclude<keyof I["dnsRecordSpecs"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecordSpecs"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "ipVersion" | "dnsRecordSpecs">, never>>(object: I): OneToOneNatSpec;
};
export declare const DnsRecordSpec: {
    $type: "yandex.cloud.compute.v1.DnsRecordSpec";
    encode(message: DnsRecordSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecordSpec;
    fromJSON(object: any): DnsRecordSpec;
    toJSON(message: DnsRecordSpec): unknown;
    fromPartial<I extends {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & {
        ttl?: number | undefined;
        fqdn?: string | undefined;
        dnsZoneId?: string | undefined;
        ptr?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>>(object: I): DnsRecordSpec;
};
export declare const MoveInstanceRequest: {
    $type: "yandex.cloud.compute.v1.MoveInstanceRequest";
    encode(message: MoveInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveInstanceRequest;
    fromJSON(object: any): MoveInstanceRequest;
    toJSON(message: MoveInstanceRequest): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "instanceId">, never>>(object: I): MoveInstanceRequest;
};
export declare const MoveInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.MoveInstanceMetadata";
    encode(message: MoveInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MoveInstanceMetadata;
    fromJSON(object: any): MoveInstanceMetadata;
    toJSON(message: MoveInstanceMetadata): unknown;
    fromPartial<I extends {
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        destinationFolderId?: string | undefined;
        sourceFolderId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationFolderId" | "sourceFolderId" | "instanceId">, never>>(object: I): MoveInstanceMetadata;
};
export declare const RelocateInstanceRequest: {
    $type: "yandex.cloud.compute.v1.RelocateInstanceRequest";
    encode(message: RelocateInstanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RelocateInstanceRequest;
    fromJSON(object: any): RelocateInstanceRequest;
    toJSON(message: RelocateInstanceRequest): unknown;
    fromPartial<I extends {
        destinationZoneId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        destinationZoneId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationZoneId" | "instanceId">, never>>(object: I): RelocateInstanceRequest;
};
export declare const RelocateInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.RelocateInstanceMetadata";
    encode(message: RelocateInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RelocateInstanceMetadata;
    fromJSON(object: any): RelocateInstanceMetadata;
    toJSON(message: RelocateInstanceMetadata): unknown;
    fromPartial<I extends {
        destinationZoneId?: string | undefined;
        sourceZoneId?: string | undefined;
        instanceId?: string | undefined;
    } & {
        destinationZoneId?: string | undefined;
        sourceZoneId?: string | undefined;
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "destinationZoneId" | "sourceZoneId" | "instanceId">, never>>(object: I): RelocateInstanceMetadata;
};
export declare const GuestStopInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.GuestStopInstanceMetadata";
    encode(message: GuestStopInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GuestStopInstanceMetadata;
    fromJSON(object: any): GuestStopInstanceMetadata;
    toJSON(message: GuestStopInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): GuestStopInstanceMetadata;
};
export declare const PreemptInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.PreemptInstanceMetadata";
    encode(message: PreemptInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PreemptInstanceMetadata;
    fromJSON(object: any): PreemptInstanceMetadata;
    toJSON(message: PreemptInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): PreemptInstanceMetadata;
};
export declare const CrashInstanceMetadata: {
    $type: "yandex.cloud.compute.v1.CrashInstanceMetadata";
    encode(message: CrashInstanceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CrashInstanceMetadata;
    fromJSON(object: any): CrashInstanceMetadata;
    toJSON(message: CrashInstanceMetadata): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
    } & {
        instanceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "instanceId">, never>>(object: I): CrashInstanceMetadata;
};
/** A set of methods for managing Instance resources. */
export declare const InstanceServiceService: {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceRequest;
        readonly responseSerialize: (value: Instance) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Instance;
    };
    /** Retrieves the list of Instance resources in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstancesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstancesRequest;
        readonly responseSerialize: (value: ListInstancesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstancesResponse;
    };
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    readonly create: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified instance. */
    readonly update: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified instance. */
    readonly delete: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the metadata of the specified instance. */
    readonly updateMetadata: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateMetadata";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceMetadataRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceMetadataRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the serial port output of the specified Instance resource. */
    readonly getSerialPortOutput: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/GetSerialPortOutput";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetInstanceSerialPortOutputRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetInstanceSerialPortOutputRequest;
        readonly responseSerialize: (value: GetInstanceSerialPortOutputResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetInstanceSerialPortOutputResponse;
    };
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    readonly stop: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Stop";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Starts the stopped instance. */
    readonly start: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Start";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StartInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StartInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restarts the running instance. */
    readonly restart: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Restart";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RestartInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RestartInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Attaches the disk to the instance. */
    readonly attachDisk: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachDisk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttachInstanceDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttachInstanceDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Detaches the disk from the instance. */
    readonly detachDisk: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachDisk";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetachInstanceDiskRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetachInstanceDiskRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    readonly attachFilesystem: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AttachFilesystem";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttachInstanceFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttachInstanceFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    readonly detachFilesystem: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/DetachFilesystem";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DetachInstanceFilesystemRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DetachInstanceFilesystemRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Enables One-to-one NAT on the network interface. */
    readonly addOneToOneNat: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/AddOneToOneNat";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddInstanceOneToOneNatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddInstanceOneToOneNatRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Removes One-to-one NAT from the network interface. */
    readonly removeOneToOneNat: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/RemoveOneToOneNat";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveInstanceOneToOneNatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveInstanceOneToOneNatRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified instance network interface. */
    readonly updateNetworkInterface: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateNetworkInterface";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateInstanceNetworkInterfaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateInstanceNetworkInterfaceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified instance. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListInstanceOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListInstanceOperationsRequest;
        readonly responseSerialize: (value: ListInstanceOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListInstanceOperationsResponse;
    };
    /**
     * Moves the specified instance to another folder of the same cloud.
     *
     * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
     *
     * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
     * that have been recorded to the source folder prior to moving will be retained.
     */
    readonly move: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Move";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: MoveInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => MoveInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Moves the specified instance to another availability zone
     *
     * Running instance will be restarted during this operation.
     */
    readonly relocate: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/Relocate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RelocateInstanceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RelocateInstanceRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists access bindings for the instance. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the instance. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the instance. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.compute.v1.InstanceService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface InstanceServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get: handleUnaryCall<GetInstanceRequest, Instance>;
    /** Retrieves the list of Instance resources in the specified folder. */
    list: handleUnaryCall<ListInstancesRequest, ListInstancesResponse>;
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create: handleUnaryCall<CreateInstanceRequest, Operation>;
    /** Updates the specified instance. */
    update: handleUnaryCall<UpdateInstanceRequest, Operation>;
    /** Deletes the specified instance. */
    delete: handleUnaryCall<DeleteInstanceRequest, Operation>;
    /** Updates the metadata of the specified instance. */
    updateMetadata: handleUnaryCall<UpdateInstanceMetadataRequest, Operation>;
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput: handleUnaryCall<GetInstanceSerialPortOutputRequest, GetInstanceSerialPortOutputResponse>;
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop: handleUnaryCall<StopInstanceRequest, Operation>;
    /** Starts the stopped instance. */
    start: handleUnaryCall<StartInstanceRequest, Operation>;
    /** Restarts the running instance. */
    restart: handleUnaryCall<RestartInstanceRequest, Operation>;
    /** Attaches the disk to the instance. */
    attachDisk: handleUnaryCall<AttachInstanceDiskRequest, Operation>;
    /** Detaches the disk from the instance. */
    detachDisk: handleUnaryCall<DetachInstanceDiskRequest, Operation>;
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    attachFilesystem: handleUnaryCall<AttachInstanceFilesystemRequest, Operation>;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem: handleUnaryCall<DetachInstanceFilesystemRequest, Operation>;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat: handleUnaryCall<AddInstanceOneToOneNatRequest, Operation>;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat: handleUnaryCall<RemoveInstanceOneToOneNatRequest, Operation>;
    /** Updates the specified instance network interface. */
    updateNetworkInterface: handleUnaryCall<UpdateInstanceNetworkInterfaceRequest, Operation>;
    /** Lists operations for the specified instance. */
    listOperations: handleUnaryCall<ListInstanceOperationsRequest, ListInstanceOperationsResponse>;
    /**
     * Moves the specified instance to another folder of the same cloud.
     *
     * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
     *
     * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
     * that have been recorded to the source folder prior to moving will be retained.
     */
    move: handleUnaryCall<MoveInstanceRequest, Operation>;
    /**
     * Moves the specified instance to another availability zone
     *
     * Running instance will be restarted during this operation.
     */
    relocate: handleUnaryCall<RelocateInstanceRequest, Operation>;
    /** Lists access bindings for the instance. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the instance. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the instance. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface InstanceServiceClient extends Client {
    /**
     * Returns the specified Instance resource.
     *
     * To get the list of available Instance resources, make a [List] request.
     */
    get(request: GetInstanceRequest, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    get(request: GetInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Instance) => void): ClientUnaryCall;
    /** Retrieves the list of Instance resources in the specified folder. */
    list(request: ListInstancesRequest, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    list(request: ListInstancesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstancesResponse) => void): ClientUnaryCall;
    /**
     * Creates an instance in the specified folder.
     * Method starts an asynchronous operation that can be cancelled while it is in progress.
     */
    create(request: CreateInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified instance. */
    update(request: UpdateInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified instance. */
    delete(request: DeleteInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the metadata of the specified instance. */
    updateMetadata(request: UpdateInstanceMetadataRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMetadata(request: UpdateInstanceMetadataRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateMetadata(request: UpdateInstanceMetadataRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the serial port output of the specified Instance resource. */
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    getSerialPortOutput(request: GetInstanceSerialPortOutputRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetInstanceSerialPortOutputResponse) => void): ClientUnaryCall;
    /**
     * Stops the running instance.
     *
     * You can start the instance later using the [InstanceService.Start] method.
     */
    stop(request: StopInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    stop(request: StopInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Starts the stopped instance. */
    start(request: StartInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    start(request: StartInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restarts the running instance. */
    restart(request: RestartInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restart(request: RestartInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    restart(request: RestartInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Attaches the disk to the instance. */
    attachDisk(request: AttachInstanceDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachDisk(request: AttachInstanceDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachDisk(request: AttachInstanceDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Detaches the disk from the instance. */
    detachDisk(request: DetachInstanceDiskRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachDisk(request: DetachInstanceDiskRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachDisk(request: DetachInstanceDiskRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Attaches the filesystem to the instance.
     *
     * The instance and the filesystem must reside in the same availability zone.
     *
     * To attach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     *
     * To use the instance with an attached filesystem, the latter must be mounted.
     * For details, see [documentation](/docs/compute/operations/filesystem/attach-to-vm).
     */
    attachFilesystem(request: AttachInstanceFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachFilesystem(request: AttachInstanceFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    attachFilesystem(request: AttachInstanceFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Detaches the filesystem from the instance.
     *
     * To detach a filesystem, the instance must have a `STOPPED` status ([Instance.status]).
     * To check the instance status, make a [InstanceService.Get] request.
     * To stop the running instance, make a [InstanceService.Stop] request.
     */
    detachFilesystem(request: DetachInstanceFilesystemRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachFilesystem(request: DetachInstanceFilesystemRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    detachFilesystem(request: DetachInstanceFilesystemRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Enables One-to-one NAT on the network interface. */
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addOneToOneNat(request: AddInstanceOneToOneNatRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Removes One-to-one NAT from the network interface. */
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeOneToOneNat(request: RemoveInstanceOneToOneNatRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified instance network interface. */
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateNetworkInterface(request: UpdateInstanceNetworkInterfaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified instance. */
    listOperations(request: ListInstanceOperationsRequest, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListInstanceOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListInstanceOperationsResponse) => void): ClientUnaryCall;
    /**
     * Moves the specified instance to another folder of the same cloud.
     *
     * The instance must be stopped before moving. To stop the instance, make a [Stop] request.
     *
     * After moving, the instance will start recording its Monitoring default metrics to its new folder. Metrics
     * that have been recorded to the source folder prior to moving will be retained.
     */
    move(request: MoveInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    move(request: MoveInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Moves the specified instance to another availability zone
     *
     * Running instance will be restarted during this operation.
     */
    relocate(request: RelocateInstanceRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    relocate(request: RelocateInstanceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    relocate(request: RelocateInstanceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists access bindings for the instance. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the instance. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the instance. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const InstanceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): InstanceServiceClient;
    service: typeof InstanceServiceService;
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
