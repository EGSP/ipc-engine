import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export declare enum IpVersion {
    IP_VERSION_UNSPECIFIED = 0,
    /** IPV4 - IPv4 address, for example 192.0.2.235. */
    IPV4 = 1,
    /** IPV6 - IPv6 address. Not available yet. */
    IPV6 = 2,
    UNRECOGNIZED = -1
}
export declare function ipVersionFromJSON(object: any): IpVersion;
export declare function ipVersionToJSON(object: IpVersion): string;
export declare enum MetadataOption {
    METADATA_OPTION_UNSPECIFIED = 0,
    /** ENABLED - Option is enabled */
    ENABLED = 1,
    /** DISABLED - Option is disabled */
    DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function metadataOptionFromJSON(object: any): MetadataOption;
export declare function metadataOptionToJSON(object: MetadataOption): string;
/** An Instance resource. For more information, see [Instances](/docs/compute/concepts/vm). */
export interface Instance {
    $type: "yandex.cloud.compute.v1.Instance";
    /** ID of the instance. */
    id: string;
    /** ID of the folder that the instance belongs to. */
    folderId: string;
    createdAt?: Date;
    /** Name of the instance. 1-63 characters long. */
    name: string;
    /** Description of the instance. 0-256 characters long. */
    description: string;
    /** Resource labels as `key:value` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the availability zone where the instance resides. */
    zoneId: string;
    /** ID of the hardware platform configuration for the instance. */
    platformId: string;
    /** Computing resources of the instance such as the amount of memory and number of cores. */
    resources?: Resources;
    /** Status of the instance. */
    status: Instance_Status;
    /**
     * The metadata `key:value` pairs assigned to this instance. This includes custom metadata and predefined keys.
     *
     * For example, you may use the metadata in order to provide your public SSH key to the instance.
     * For more information, see [Metadata](/docs/compute/concepts/vm-metadata).
     */
    metadata: {
        [key: string]: string;
    };
    /** Options allow user to configure access to instance's metadata */
    metadataOptions?: MetadataOptions;
    /** Boot disk that is attached to the instance. */
    bootDisk?: AttachedDisk;
    /** Array of secondary disks that are attached to the instance. */
    secondaryDisks: AttachedDisk[];
    /** Array of local disks that are attached to the instance. */
    localDisks: AttachedLocalDisk[];
    /** Array of filesystems that are attached to the instance. */
    filesystems: AttachedFilesystem[];
    /** Array of network interfaces that are attached to the instance. */
    networkInterfaces: NetworkInterface[];
    /** GPU settings */
    gpuSettings?: GpuSettings;
    /**
     * A domain name of the instance. FQDN is defined by the server
     * in the format `<hostname>.<region_id>.internal` when the instance is created.
     * If the hostname were not specified when the instance was created, FQDN would be `<id>.auto.internal`.
     */
    fqdn: string;
    /** Scheduling policy configuration. */
    schedulingPolicy?: SchedulingPolicy;
    /**
     * ID of the service account to use for [authentication inside the instance](/docs/compute/operations/vm-connect/auth-inside-vm).
     * To get the service account ID, use a [yandex.cloud.iam.v1.ServiceAccountService.List] request.
     */
    serviceAccountId: string;
    /** Network Settings */
    networkSettings?: NetworkSettings;
    /** Placement policy configuration. */
    placementPolicy?: PlacementPolicy;
    /** ID of the dedicated host group that the instance belongs to. */
    hostGroupId: string;
    /** ID of the dedicated host that the instance belongs to. */
    hostId: string;
}
export declare enum Instance_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Instance is waiting for resources to be allocated. */
    PROVISIONING = 1,
    /** RUNNING - Instance is running normally. */
    RUNNING = 2,
    /** STOPPING - Instance is being stopped. */
    STOPPING = 3,
    /** STOPPED - Instance stopped. */
    STOPPED = 4,
    /** STARTING - Instance is being started. */
    STARTING = 5,
    /** RESTARTING - Instance is being restarted. */
    RESTARTING = 6,
    /** UPDATING - Instance is being updated. */
    UPDATING = 7,
    /** ERROR - Instance encountered a problem and cannot operate. */
    ERROR = 8,
    /** CRASHED - Instance crashed and will be restarted automatically. */
    CRASHED = 9,
    /** DELETING - Instance is being deleted. */
    DELETING = 10,
    UNRECOGNIZED = -1
}
export declare function instance_StatusFromJSON(object: any): Instance_Status;
export declare function instance_StatusToJSON(object: Instance_Status): string;
export interface Instance_LabelsEntry {
    $type: "yandex.cloud.compute.v1.Instance.LabelsEntry";
    key: string;
    value: string;
}
export interface Instance_MetadataEntry {
    $type: "yandex.cloud.compute.v1.Instance.MetadataEntry";
    key: string;
    value: string;
}
export interface Resources {
    $type: "yandex.cloud.compute.v1.Resources";
    /** The amount of memory available to the instance, specified in bytes. */
    memory: number;
    /** The number of cores available to the instance. */
    cores: number;
    /**
     * Baseline level of CPU performance with the ability to burst performance above that baseline level.
     * This field sets baseline performance for each core.
     */
    coreFraction: number;
    /** The number of GPUs available to the instance. */
    gpus: number;
}
export interface AttachedDisk {
    $type: "yandex.cloud.compute.v1.AttachedDisk";
    /** Access mode to the Disk resource. */
    mode: AttachedDisk_Mode;
    /**
     * Serial number that is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     */
    deviceName: string;
    /** Specifies whether the disk will be auto-deleted when the instance is deleted. */
    autoDelete: boolean;
    /** ID of the disk that is attached to the instance. */
    diskId: string;
}
export declare enum AttachedDisk_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedDisk_ModeFromJSON(object: any): AttachedDisk_Mode;
export declare function attachedDisk_ModeToJSON(object: AttachedDisk_Mode): string;
export interface AttachedLocalDisk {
    $type: "yandex.cloud.compute.v1.AttachedLocalDisk";
    /** Size of the disk, specified in bytes. */
    size: number;
    /**
     * Serial number that is reflected into the /dev/disk/by-id/ tree
     * of a Linux operating system running within the instance.
     *
     * This value can be used to reference the device for mounting, resizing, and so on, from within the instance.
     */
    deviceName: string;
}
export interface AttachedFilesystem {
    $type: "yandex.cloud.compute.v1.AttachedFilesystem";
    /** Access mode to the filesystem. */
    mode: AttachedFilesystem_Mode;
    /**
     * Name of the device representing the filesystem on the instance.
     *
     * The name should be used for referencing the filesystem from within the instance
     * when it's being mounted, resized etc.
     */
    deviceName: string;
    /** ID of the filesystem that is attached to the instance. */
    filesystemId: string;
}
export declare enum AttachedFilesystem_Mode {
    MODE_UNSPECIFIED = 0,
    /** READ_ONLY - Read-only access. */
    READ_ONLY = 1,
    /** READ_WRITE - Read/Write access. */
    READ_WRITE = 2,
    UNRECOGNIZED = -1
}
export declare function attachedFilesystem_ModeFromJSON(object: any): AttachedFilesystem_Mode;
export declare function attachedFilesystem_ModeToJSON(object: AttachedFilesystem_Mode): string;
export interface NetworkInterface {
    $type: "yandex.cloud.compute.v1.NetworkInterface";
    /**
     * The index of the network interface, generated by the server, 0,1,2... etc.
     * Currently only one network interface is supported per instance.
     */
    index: string;
    /** MAC address that is assigned to the network interface. */
    macAddress: string;
    /** ID of the subnet. */
    subnetId: string;
    /** Primary IPv4 address that is assigned to the instance for this network interface. */
    primaryV4Address?: PrimaryAddress;
    /** Primary IPv6 address that is assigned to the instance for this network interface. IPv6 not available yet. */
    primaryV6Address?: PrimaryAddress;
    /** ID's of security groups attached to the interface */
    securityGroupIds: string[];
}
export interface PrimaryAddress {
    $type: "yandex.cloud.compute.v1.PrimaryAddress";
    /** An IPv4 internal network address that is assigned to the instance for this network interface. */
    address: string;
    /** One-to-one NAT configuration. If missing, NAT has not been set up. */
    oneToOneNat?: OneToOneNat;
    /** Internal DNS configuration */
    dnsRecords: DnsRecord[];
}
export interface OneToOneNat {
    $type: "yandex.cloud.compute.v1.OneToOneNat";
    /** An external IP address associated with this instance. */
    address: string;
    /** IP version for the external IP address. */
    ipVersion: IpVersion;
    /** External DNS configuration */
    dnsRecords: DnsRecord[];
}
export interface DnsRecord {
    $type: "yandex.cloud.compute.v1.DnsRecord";
    /**
     * Name of the A/AAAA record as specified when creating the instance.
     * Note that if `fqdn' has no trailing '.', it is specified relative to the zone (@see dns_zone_id).
     */
    fqdn: string;
    /** DNS zone id for the record (optional, if not set, some private zone is used). */
    dnsZoneId: string;
    /** DNS record ttl (optional, if not set, a reasonable default is used.) */
    ttl: number;
    /** When true, indicates there is a corresponding auto-created PTR DNS record. */
    ptr: boolean;
}
export interface SchedulingPolicy {
    $type: "yandex.cloud.compute.v1.SchedulingPolicy";
    /** True for short-lived compute instances. For more information, see [Preemptible VMs](/docs/compute/concepts/preemptible-vm). */
    preemptible: boolean;
}
export interface NetworkSettings {
    $type: "yandex.cloud.compute.v1.NetworkSettings";
    /** Network Type */
    type: NetworkSettings_Type;
}
export declare enum NetworkSettings_Type {
    TYPE_UNSPECIFIED = 0,
    /** STANDARD - Standard network. */
    STANDARD = 1,
    /** SOFTWARE_ACCELERATED - Software accelerated network. */
    SOFTWARE_ACCELERATED = 2,
    /** HARDWARE_ACCELERATED - Hardware accelerated network (not available yet, reserved for future use). */
    HARDWARE_ACCELERATED = 3,
    UNRECOGNIZED = -1
}
export declare function networkSettings_TypeFromJSON(object: any): NetworkSettings_Type;
export declare function networkSettings_TypeToJSON(object: NetworkSettings_Type): string;
export interface GpuSettings {
    $type: "yandex.cloud.compute.v1.GpuSettings";
    /** Attach instance to specified GPU cluster. */
    gpuClusterId: string;
}
export interface PlacementPolicy {
    $type: "yandex.cloud.compute.v1.PlacementPolicy";
    /** Placement group ID. */
    placementGroupId: string;
    /** List of affinity rules. Scheduler will attempt to allocate instances according to order of rules. */
    hostAffinityRules: PlacementPolicy_HostAffinityRule[];
    /** Placement group partition */
    placementGroupPartition: number;
}
/** Affinity definition */
export interface PlacementPolicy_HostAffinityRule {
    $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule";
    /** Affinity label or one of reserved values - 'yc.hostId', 'yc.hostGroupId' */
    key: string;
    /** Include or exclude action */
    op: PlacementPolicy_HostAffinityRule_Operator;
    /** Affinity value or host ID or host group ID */
    values: string[];
}
export declare enum PlacementPolicy_HostAffinityRule_Operator {
    OPERATOR_UNSPECIFIED = 0,
    IN = 1,
    NOT_IN = 2,
    UNRECOGNIZED = -1
}
export declare function placementPolicy_HostAffinityRule_OperatorFromJSON(object: any): PlacementPolicy_HostAffinityRule_Operator;
export declare function placementPolicy_HostAffinityRule_OperatorToJSON(object: PlacementPolicy_HostAffinityRule_Operator): string;
export interface MetadataOptions {
    $type: "yandex.cloud.compute.v1.MetadataOptions";
    /** Enabled access to GCE flavored metadata */
    gceHttpEndpoint: MetadataOption;
    /** Enabled access to AWS flavored metadata (IMDSv1) */
    awsV1HttpEndpoint: MetadataOption;
    /** Enabled access to IAM credentials with GCE flavored metadata */
    gceHttpToken: MetadataOption;
    /** Enabled access to IAM credentials with AWS flavored metadata (IMDSv1) */
    awsV1HttpToken: MetadataOption;
}
export declare const Instance: {
    $type: "yandex.cloud.compute.v1.Instance";
    encode(message: Instance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance;
    fromJSON(object: any): Instance;
    toJSON(message: Instance): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        metadata?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        status?: Instance_Status | undefined;
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
            mode?: AttachedFilesystem_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[] | undefined;
        platformId?: string | undefined;
        fqdn?: string | undefined;
        serviceAccountId?: string | undefined;
        hostGroupId?: string | undefined;
        hostId?: string | undefined;
        metadataOptions?: {
            gceHttpEndpoint?: MetadataOption | undefined;
            awsV1HttpEndpoint?: MetadataOption | undefined;
            gceHttpToken?: MetadataOption | undefined;
            awsV1HttpToken?: MetadataOption | undefined;
        } | undefined;
        bootDisk?: {
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        } | undefined;
        secondaryDisks?: {
            mode?: AttachedDisk_Mode | undefined;
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
            type?: NetworkSettings_Type | undefined;
        } | undefined;
        placementPolicy?: {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
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
        } & Record<Exclude<keyof I["metadata"], string | number>, never>) | undefined;
        status?: Instance_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
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
        } & Record<Exclude<keyof I["resources"], "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>) | undefined;
        filesystems?: ({
            mode?: AttachedFilesystem_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[] & ({
            mode?: AttachedFilesystem_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & {
            mode?: AttachedFilesystem_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        } & Record<Exclude<keyof I["filesystems"][number], "$type" | "mode" | "filesystemId" | "deviceName">, never>)[] & Record<Exclude<keyof I["filesystems"], "$type" | keyof {
            mode?: AttachedFilesystem_Mode | undefined;
            filesystemId?: string | undefined;
            deviceName?: string | undefined;
        }[]>, never>) | undefined;
        platformId?: string | undefined;
        fqdn?: string | undefined;
        serviceAccountId?: string | undefined;
        hostGroupId?: string | undefined;
        hostId?: string | undefined;
        metadataOptions?: ({
            gceHttpEndpoint?: MetadataOption | undefined;
            awsV1HttpEndpoint?: MetadataOption | undefined;
            gceHttpToken?: MetadataOption | undefined;
            awsV1HttpToken?: MetadataOption | undefined;
        } & {
            gceHttpEndpoint?: MetadataOption | undefined;
            awsV1HttpEndpoint?: MetadataOption | undefined;
            gceHttpToken?: MetadataOption | undefined;
            awsV1HttpToken?: MetadataOption | undefined;
        } & Record<Exclude<keyof I["metadataOptions"], "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>) | undefined;
        bootDisk?: ({
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        } & {
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        } & Record<Exclude<keyof I["bootDisk"], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>) | undefined;
        secondaryDisks?: ({
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        }[] & ({
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        } & {
            mode?: AttachedDisk_Mode | undefined;
            diskId?: string | undefined;
            deviceName?: string | undefined;
            autoDelete?: boolean | undefined;
        } & Record<Exclude<keyof I["secondaryDisks"][number], "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>)[] & Record<Exclude<keyof I["secondaryDisks"], "$type" | keyof {
            mode?: AttachedDisk_Mode | undefined;
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
        } & Record<Exclude<keyof I["localDisks"][number], "$type" | "size" | "deviceName">, never>)[] & Record<Exclude<keyof I["localDisks"], "$type" | keyof {
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
            securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["networkInterfaces"][number]["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                        ttl?: number | undefined;
                        fqdn?: string | undefined;
                        dnsZoneId?: string | undefined;
                        ptr?: boolean | undefined;
                    }[]>, never>) | undefined;
                    ipVersion?: IpVersion | undefined;
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
                } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["networkInterfaces"][number]["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
        } & Record<Exclude<keyof I["networkInterfaces"][number], "$type" | "subnetId" | "securityGroupIds" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>)[] & Record<Exclude<keyof I["networkInterfaces"], "$type" | keyof {
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
        } & Record<Exclude<keyof I["gpuSettings"], "$type" | "gpuClusterId">, never>) | undefined;
        schedulingPolicy?: ({
            preemptible?: boolean | undefined;
        } & {
            preemptible?: boolean | undefined;
        } & Record<Exclude<keyof I["schedulingPolicy"], "$type" | "preemptible">, never>) | undefined;
        networkSettings?: ({
            type?: NetworkSettings_Type | undefined;
        } & {
            type?: NetworkSettings_Type | undefined;
        } & Record<Exclude<keyof I["networkSettings"], "$type" | "type">, never>) | undefined;
        placementPolicy?: ({
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] | undefined;
        } & {
            placementGroupId?: string | undefined;
            placementGroupPartition?: number | undefined;
            hostAffinityRules?: ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[] & ({
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & {
                values?: (string[] & string[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            } & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["placementPolicy"]["hostAffinityRules"], "$type" | keyof {
                values?: string[] | undefined;
                key?: string | undefined;
                op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["placementPolicy"], "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "metadata" | "status" | "folderId" | "labels" | "zoneId" | "resources" | "filesystems" | "platformId" | "fqdn" | "serviceAccountId" | "hostGroupId" | "hostId" | "metadataOptions" | "bootDisk" | "secondaryDisks" | "localDisks" | "networkInterfaces" | "gpuSettings" | "schedulingPolicy" | "networkSettings" | "placementPolicy">, never>>(object: I): Instance;
};
export declare const Instance_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.Instance.LabelsEntry";
    encode(message: Instance_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance_LabelsEntry;
    fromJSON(object: any): Instance_LabelsEntry;
    toJSON(message: Instance_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Instance_LabelsEntry;
};
export declare const Instance_MetadataEntry: {
    $type: "yandex.cloud.compute.v1.Instance.MetadataEntry";
    encode(message: Instance_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Instance_MetadataEntry;
    fromJSON(object: any): Instance_MetadataEntry;
    toJSON(message: Instance_MetadataEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Instance_MetadataEntry;
};
export declare const Resources: {
    $type: "yandex.cloud.compute.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction" | "gpus">, never>>(object: I): Resources;
};
export declare const AttachedDisk: {
    $type: "yandex.cloud.compute.v1.AttachedDisk";
    encode(message: AttachedDisk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedDisk;
    fromJSON(object: any): AttachedDisk;
    toJSON(message: AttachedDisk): unknown;
    fromPartial<I extends {
        mode?: AttachedDisk_Mode | undefined;
        diskId?: string | undefined;
        deviceName?: string | undefined;
        autoDelete?: boolean | undefined;
    } & {
        mode?: AttachedDisk_Mode | undefined;
        diskId?: string | undefined;
        deviceName?: string | undefined;
        autoDelete?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "diskId" | "deviceName" | "autoDelete">, never>>(object: I): AttachedDisk;
};
export declare const AttachedLocalDisk: {
    $type: "yandex.cloud.compute.v1.AttachedLocalDisk";
    encode(message: AttachedLocalDisk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedLocalDisk;
    fromJSON(object: any): AttachedLocalDisk;
    toJSON(message: AttachedLocalDisk): unknown;
    fromPartial<I extends {
        size?: number | undefined;
        deviceName?: string | undefined;
    } & {
        size?: number | undefined;
        deviceName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "size" | "deviceName">, never>>(object: I): AttachedLocalDisk;
};
export declare const AttachedFilesystem: {
    $type: "yandex.cloud.compute.v1.AttachedFilesystem";
    encode(message: AttachedFilesystem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttachedFilesystem;
    fromJSON(object: any): AttachedFilesystem;
    toJSON(message: AttachedFilesystem): unknown;
    fromPartial<I extends {
        mode?: AttachedFilesystem_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & {
        mode?: AttachedFilesystem_Mode | undefined;
        filesystemId?: string | undefined;
        deviceName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "mode" | "filesystemId" | "deviceName">, never>>(object: I): AttachedFilesystem;
};
export declare const NetworkInterface: {
    $type: "yandex.cloud.compute.v1.NetworkInterface";
    encode(message: NetworkInterface, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkInterface;
    fromJSON(object: any): NetworkInterface;
    toJSON(message: NetworkInterface): unknown;
    fromPartial<I extends {
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
        securityGroupIds?: (string[] & string[] & Record<Exclude<keyof I["securityGroupIds"], "$type" | keyof string[]>, never>) | undefined;
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
                } & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV4Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV4Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV4Address"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV4Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
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
                } & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                    ttl?: number | undefined;
                    fqdn?: string | undefined;
                    dnsZoneId?: string | undefined;
                    ptr?: boolean | undefined;
                }[]>, never>) | undefined;
                ipVersion?: IpVersion | undefined;
            } & Record<Exclude<keyof I["primaryV6Address"]["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
            } & Record<Exclude<keyof I["primaryV6Address"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["primaryV6Address"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["primaryV6Address"], "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "securityGroupIds" | "index" | "macAddress" | "primaryV4Address" | "primaryV6Address">, never>>(object: I): NetworkInterface;
};
export declare const PrimaryAddress: {
    $type: "yandex.cloud.compute.v1.PrimaryAddress";
    encode(message: PrimaryAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryAddress;
    fromJSON(object: any): PrimaryAddress;
    toJSON(message: PrimaryAddress): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["oneToOneNat"]["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["oneToOneNat"]["dnsRecords"], "$type" | keyof {
                ttl?: number | undefined;
                fqdn?: string | undefined;
                dnsZoneId?: string | undefined;
                ptr?: boolean | undefined;
            }[]>, never>) | undefined;
            ipVersion?: IpVersion | undefined;
        } & Record<Exclude<keyof I["oneToOneNat"], "$type" | "address" | "dnsRecords" | "ipVersion">, never>) | undefined;
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
        } & Record<Exclude<keyof I["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecords"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "oneToOneNat" | "dnsRecords">, never>>(object: I): PrimaryAddress;
};
export declare const OneToOneNat: {
    $type: "yandex.cloud.compute.v1.OneToOneNat";
    encode(message: OneToOneNat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OneToOneNat;
    fromJSON(object: any): OneToOneNat;
    toJSON(message: OneToOneNat): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["dnsRecords"][number], "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>)[] & Record<Exclude<keyof I["dnsRecords"], "$type" | keyof {
            ttl?: number | undefined;
            fqdn?: string | undefined;
            dnsZoneId?: string | undefined;
            ptr?: boolean | undefined;
        }[]>, never>) | undefined;
        ipVersion?: IpVersion | undefined;
    } & Record<Exclude<keyof I, "$type" | "address" | "dnsRecords" | "ipVersion">, never>>(object: I): OneToOneNat;
};
export declare const DnsRecord: {
    $type: "yandex.cloud.compute.v1.DnsRecord";
    encode(message: DnsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DnsRecord;
    fromJSON(object: any): DnsRecord;
    toJSON(message: DnsRecord): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "ttl" | "fqdn" | "dnsZoneId" | "ptr">, never>>(object: I): DnsRecord;
};
export declare const SchedulingPolicy: {
    $type: "yandex.cloud.compute.v1.SchedulingPolicy";
    encode(message: SchedulingPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulingPolicy;
    fromJSON(object: any): SchedulingPolicy;
    toJSON(message: SchedulingPolicy): unknown;
    fromPartial<I extends {
        preemptible?: boolean | undefined;
    } & {
        preemptible?: boolean | undefined;
    } & Record<Exclude<keyof I, "$type" | "preemptible">, never>>(object: I): SchedulingPolicy;
};
export declare const NetworkSettings: {
    $type: "yandex.cloud.compute.v1.NetworkSettings";
    encode(message: NetworkSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetworkSettings;
    fromJSON(object: any): NetworkSettings;
    toJSON(message: NetworkSettings): unknown;
    fromPartial<I extends {
        type?: NetworkSettings_Type | undefined;
    } & {
        type?: NetworkSettings_Type | undefined;
    } & Record<Exclude<keyof I, "$type" | "type">, never>>(object: I): NetworkSettings;
};
export declare const GpuSettings: {
    $type: "yandex.cloud.compute.v1.GpuSettings";
    encode(message: GpuSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GpuSettings;
    fromJSON(object: any): GpuSettings;
    toJSON(message: GpuSettings): unknown;
    fromPartial<I extends {
        gpuClusterId?: string | undefined;
    } & {
        gpuClusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "gpuClusterId">, never>>(object: I): GpuSettings;
};
export declare const PlacementPolicy: {
    $type: "yandex.cloud.compute.v1.PlacementPolicy";
    encode(message: PlacementPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy;
    fromJSON(object: any): PlacementPolicy;
    toJSON(message: PlacementPolicy): unknown;
    fromPartial<I extends {
        placementGroupId?: string | undefined;
        placementGroupPartition?: number | undefined;
        hostAffinityRules?: {
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[] | undefined;
    } & {
        placementGroupId?: string | undefined;
        placementGroupPartition?: number | undefined;
        hostAffinityRules?: ({
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[] & ({
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        } & {
            values?: (string[] & string[] & Record<Exclude<keyof I["hostAffinityRules"][number]["values"], "$type" | keyof string[]>, never>) | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        } & Record<Exclude<keyof I["hostAffinityRules"][number], "$type" | "values" | "key" | "op">, never>)[] & Record<Exclude<keyof I["hostAffinityRules"], "$type" | keyof {
            values?: string[] | undefined;
            key?: string | undefined;
            op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "placementGroupId" | "placementGroupPartition" | "hostAffinityRules">, never>>(object: I): PlacementPolicy;
};
export declare const PlacementPolicy_HostAffinityRule: {
    $type: "yandex.cloud.compute.v1.PlacementPolicy.HostAffinityRule";
    encode(message: PlacementPolicy_HostAffinityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementPolicy_HostAffinityRule;
    fromJSON(object: any): PlacementPolicy_HostAffinityRule;
    toJSON(message: PlacementPolicy_HostAffinityRule): unknown;
    fromPartial<I extends {
        values?: string[] | undefined;
        key?: string | undefined;
        op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
    } & {
        values?: (string[] & string[] & Record<Exclude<keyof I["values"], "$type" | keyof string[]>, never>) | undefined;
        key?: string | undefined;
        op?: PlacementPolicy_HostAffinityRule_Operator | undefined;
    } & Record<Exclude<keyof I, "$type" | "values" | "key" | "op">, never>>(object: I): PlacementPolicy_HostAffinityRule;
};
export declare const MetadataOptions: {
    $type: "yandex.cloud.compute.v1.MetadataOptions";
    encode(message: MetadataOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MetadataOptions;
    fromJSON(object: any): MetadataOptions;
    toJSON(message: MetadataOptions): unknown;
    fromPartial<I extends {
        gceHttpEndpoint?: MetadataOption | undefined;
        awsV1HttpEndpoint?: MetadataOption | undefined;
        gceHttpToken?: MetadataOption | undefined;
        awsV1HttpToken?: MetadataOption | undefined;
    } & {
        gceHttpEndpoint?: MetadataOption | undefined;
        awsV1HttpEndpoint?: MetadataOption | undefined;
        gceHttpToken?: MetadataOption | undefined;
        awsV1HttpToken?: MetadataOption | undefined;
    } & Record<Exclude<keyof I, "$type" | "gceHttpEndpoint" | "awsV1HttpEndpoint" | "gceHttpToken" | "awsV1HttpToken">, never>>(object: I): MetadataOptions;
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
