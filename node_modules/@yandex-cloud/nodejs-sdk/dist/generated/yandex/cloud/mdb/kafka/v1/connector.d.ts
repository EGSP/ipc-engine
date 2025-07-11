import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
/**
 * An object that represents an Apache Kafka® connector.
 *
 * See [the documentation](/docs/managed-kafka/concepts/connectors) for details.
 */
export interface ConnectorSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec";
    /** Name of the connector. */
    name: string;
    /** Maximum number of connector tasks. Default value is the number of brokers. */
    tasksMax?: number;
    /**
     * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
     * Example: `sync.topics.config.enabled: true`.
     */
    properties: {
        [key: string]: string;
    };
    /** Configuration of the MirrorMaker connector. */
    connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec | undefined;
    /** Configuration of S3-Sink connector. */
    connectorConfigS3Sink?: ConnectorConfigS3SinkSpec | undefined;
}
export interface ConnectorSpec_PropertiesEntry {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry";
    key: string;
    value: string;
}
export interface UpdateConnectorSpec {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec";
    /** Maximum number of connector tasks to update. */
    tasksMax?: number;
    /**
     * A set of new or changed properties to update for the connector. They are passed with the connector configuration to Managed Service for Apache Kafka®.
     * Example: `sync.topics.config.enabled: false`.
     */
    properties: {
        [key: string]: string;
    };
    /** Configuration of the MirrorMaker connector. */
    connectorConfigMirrormaker?: ConnectorConfigMirrorMakerSpec | undefined;
    /** Update specification for S3-Sink Connector. */
    connectorConfigS3Sink?: UpdateConnectorConfigS3SinkSpec | undefined;
}
export interface UpdateConnectorSpec_PropertiesEntry {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry";
    key: string;
    value: string;
}
export interface ConnectorConfigMirrorMakerSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec";
    /** Source cluster configuration for the MirrorMaker connector. */
    sourceCluster?: ClusterConnectionSpec;
    /** Target cluster configuration for the MirrorMaker connector. */
    targetCluster?: ClusterConnectionSpec;
    /** List of Kafka topics, separated by `,`. */
    topics: string;
    /** Replication factor for automatically created topics. */
    replicationFactor?: number;
}
export interface ClusterConnectionSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec";
    /**
     * Alias of cluster connection configuration.
     * Examples: `source`, `target`.
     */
    alias: string;
    /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
    thisCluster?: ThisClusterSpec | undefined;
    /** Configuration of connection to an external cluster with all the necessary credentials. */
    externalCluster?: ExternalClusterConnectionSpec | undefined;
}
export interface ThisClusterSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec";
}
export interface ExternalClusterConnectionSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec";
    /** List of bootstrap servers of the cluster, separated by `,`. */
    bootstrapServers: string;
    /** SASL username to use for connection to the cluster. */
    saslUsername: string;
    /** SASL password to use for connection to the cluster. */
    saslPassword: string;
    /** SASL mechanism to use for connection to the cluster. */
    saslMechanism: string;
    /** Security protocol to use for connection to the cluster. */
    securityProtocol: string;
    /**
     * CA in PEM format to connect to external cluster.
     * Lines of certificate separated by '\n' symbol.
     */
    sslTruststoreCertificates: string;
}
/** Specification for Kafka S3-Sink Connector. */
export interface ConnectorConfigS3SinkSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec";
    /** List of Kafka topics, separated by ','. */
    topics: string;
    /**
     * The compression type used for files put on GCS.
     * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
     * Optional, the default is `none`.
     */
    fileCompressionType: string;
    /** Max records per file. */
    fileMaxRecords?: number;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: S3ConnectionSpec;
}
/** Specification for update Kafka S3-Sink Connector. */
export interface UpdateConnectorConfigS3SinkSpec {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec";
    /** List of Kafka topics, separated by ','. */
    topics: string;
    /** Max records per file. */
    fileMaxRecords?: number;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: S3ConnectionSpec;
}
/**
 * Specification for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3ConnectionSpec {
    $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec";
    bucketName: string;
    externalS3?: ExternalS3StorageSpec | undefined;
}
export interface ExternalS3StorageSpec {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec";
    accessKeyId: string;
    secretAccessKey: string;
    endpoint: string;
    /** Default is 'us-east-1'. */
    region: string;
}
export interface Connector {
    $type: "yandex.cloud.mdb.kafka.v1.Connector";
    /** Name of the connector. */
    name: string;
    /** Maximum number of connector tasks. Default value is the number of brokers. */
    tasksMax?: number;
    /**
     * A set of properties passed to Managed Service for Apache Kafka® with the connector configuration.
     * Example: `sync.topics.config.enabled: true`.
     */
    properties: {
        [key: string]: string;
    };
    /** Connector health. */
    health: Connector_Health;
    /** Current status of the connector. */
    status: Connector_Status;
    /** ID of the Apache Kafka® cluster that the connector belongs to. */
    clusterId: string;
    /** Configuration of the MirrorMaker connector. */
    connectorConfigMirrormaker?: ConnectorConfigMirrorMaker | undefined;
    /** Configuration of S3-Sink connector. */
    connectorConfigS3Sink?: ConnectorConfigS3Sink | undefined;
}
export declare enum Connector_Health {
    /** HEALTH_UNKNOWN - Health of the connector is unknown. */
    HEALTH_UNKNOWN = 0,
    /** ALIVE - Connector is running. */
    ALIVE = 1,
    /** DEAD - Connector has failed to start. */
    DEAD = 2,
    UNRECOGNIZED = -1
}
export declare function connector_HealthFromJSON(object: any): Connector_Health;
export declare function connector_HealthToJSON(object: Connector_Health): string;
export declare enum Connector_Status {
    /** STATUS_UNKNOWN - Connector state is unknown. */
    STATUS_UNKNOWN = 0,
    /** RUNNING - Connector is running normally. */
    RUNNING = 1,
    /** ERROR - Connector has encountered a problem and cannot operate. */
    ERROR = 2,
    /** PAUSED - Connector is paused. */
    PAUSED = 3,
    UNRECOGNIZED = -1
}
export declare function connector_StatusFromJSON(object: any): Connector_Status;
export declare function connector_StatusToJSON(object: Connector_Status): string;
export interface Connector_PropertiesEntry {
    $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry";
    key: string;
    value: string;
}
export interface ConnectorConfigMirrorMaker {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker";
    /** Source cluster connection configuration. */
    sourceCluster?: ClusterConnection;
    /** Target cluster connection configuration. */
    targetCluster?: ClusterConnection;
    /** List of Kafka topics, separated by `,`. */
    topics: string;
    /** Replication factor for automatically created topics. */
    replicationFactor?: number;
}
export interface ClusterConnection {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection";
    /**
     * Alias of cluster connection configuration.
     * Examples: `source`, `target`.
     */
    alias: string;
    /** Connection configuration of the cluster the connector belongs to. As all credentials are already known, leave this parameter empty. */
    thisCluster?: ThisCluster | undefined;
    /** Configuration of connection to an external cluster with all the necessary credentials. */
    externalCluster?: ExternalClusterConnection | undefined;
}
export interface ThisCluster {
    $type: "yandex.cloud.mdb.kafka.v1.ThisCluster";
}
export interface ExternalClusterConnection {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection";
    /** List of bootstrap servers of the cluster, separated by `,`. */
    bootstrapServers: string;
    /** SASL username to use for connection to the cluster. */
    saslUsername: string;
    /** SASL mechanism to use for connection to the cluster. */
    saslMechanism: string;
    /** Security protocol to use for connection to the cluster. */
    securityProtocol: string;
}
/**
 * An Apache Kafka® S3-Sink
 * connector resource.
 */
export interface ConnectorConfigS3Sink {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink";
    /** List of Kafka topics, separated by ','. */
    topics: string;
    /**
     * The compression type used for files put on GCS.
     * The supported values are: `gzip`, `snappy`, `zstd`, `none`.
     * Optional, the default is `none`.
     */
    fileCompressionType: string;
    /** Max records per file. */
    fileMaxRecords?: number;
    /** Credentials for connecting to S3 storage. */
    s3Connection?: S3Connection;
}
/**
 * Resource for S3Connection -
 * settings of connection to AWS-compatible S3 storage, that
 * are source or target of Kafka S3-connectors.
 * YC Object Storage is AWS-compatible.
 */
export interface S3Connection {
    $type: "yandex.cloud.mdb.kafka.v1.S3Connection";
    bucketName: string;
    externalS3?: ExternalS3Storage | undefined;
}
export interface ExternalS3Storage {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage";
    accessKeyId: string;
    endpoint: string;
    /** Default is 'us-east-1' */
    region: string;
}
export declare const ConnectorSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec";
    encode(message: ConnectorSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorSpec;
    fromJSON(object: any): ConnectorSpec;
    toJSON(message: ConnectorSpec): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        properties?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: {
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } | undefined;
        connectorConfigS3Sink?: {
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        properties?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: ({
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } & {
            replicationFactor?: number | undefined;
            sourceCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            targetCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            topics?: string | undefined;
        } & Record<Exclude<keyof I["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
        connectorConfigS3Sink?: ({
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: ({
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } & {
                bucketName?: string | undefined;
                externalS3?: ({
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
        } & Record<Exclude<keyof I["connectorConfigS3Sink"], "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "properties" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>>(object: I): ConnectorSpec;
};
export declare const ConnectorSpec_PropertiesEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorSpec.PropertiesEntry";
    encode(message: ConnectorSpec_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorSpec_PropertiesEntry;
    fromJSON(object: any): ConnectorSpec_PropertiesEntry;
    toJSON(message: ConnectorSpec_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ConnectorSpec_PropertiesEntry;
};
export declare const UpdateConnectorSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec";
    encode(message: UpdateConnectorSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateConnectorSpec;
    fromJSON(object: any): UpdateConnectorSpec;
    toJSON(message: UpdateConnectorSpec): unknown;
    fromPartial<I extends {
        properties?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: {
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } | undefined;
        connectorConfigS3Sink?: {
            topics?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        properties?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: ({
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } & {
            replicationFactor?: number | undefined;
            sourceCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            targetCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    saslPassword?: string | undefined;
                    bootstrapServers?: string | undefined;
                    sslTruststoreCertificates?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            topics?: string | undefined;
        } & Record<Exclude<keyof I["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
        connectorConfigS3Sink?: ({
            topics?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            topics?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: ({
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } & {
                bucketName?: string | undefined;
                externalS3?: ({
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & {
                    accessKeyId?: string | undefined;
                    secretAccessKey?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
        } & Record<Exclude<keyof I["connectorConfigS3Sink"], "$type" | "topics" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>>(object: I): UpdateConnectorSpec;
};
export declare const UpdateConnectorSpec_PropertiesEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorSpec.PropertiesEntry";
    encode(message: UpdateConnectorSpec_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateConnectorSpec_PropertiesEntry;
    fromJSON(object: any): UpdateConnectorSpec_PropertiesEntry;
    toJSON(message: UpdateConnectorSpec_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateConnectorSpec_PropertiesEntry;
};
export declare const ConnectorConfigMirrorMakerSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMakerSpec";
    encode(message: ConnectorConfigMirrorMakerSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigMirrorMakerSpec;
    fromJSON(object: any): ConnectorConfigMirrorMakerSpec;
    toJSON(message: ConnectorConfigMirrorMakerSpec): unknown;
    fromPartial<I extends {
        replicationFactor?: number | undefined;
        sourceCluster?: {
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } | undefined;
        } | undefined;
        targetCluster?: {
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } | undefined;
        } | undefined;
        topics?: string | undefined;
    } & {
        replicationFactor?: number | undefined;
        sourceCluster?: ({
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } | undefined;
        } & {
            alias?: string | undefined;
            thisCluster?: ({} & {} & Record<Exclude<keyof I["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
            externalCluster?: ({
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } & {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } & Record<Exclude<keyof I["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
        } & Record<Exclude<keyof I["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
        targetCluster?: ({
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } | undefined;
        } & {
            alias?: string | undefined;
            thisCluster?: ({} & {} & Record<Exclude<keyof I["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
            externalCluster?: ({
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } & {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                saslPassword?: string | undefined;
                bootstrapServers?: string | undefined;
                sslTruststoreCertificates?: string | undefined;
            } & Record<Exclude<keyof I["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
        } & Record<Exclude<keyof I["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
        topics?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>>(object: I): ConnectorConfigMirrorMakerSpec;
};
export declare const ClusterConnectionSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnectionSpec";
    encode(message: ClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConnectionSpec;
    fromJSON(object: any): ClusterConnectionSpec;
    toJSON(message: ClusterConnectionSpec): unknown;
    fromPartial<I extends {
        alias?: string | undefined;
        thisCluster?: {} | undefined;
        externalCluster?: {
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            bootstrapServers?: string | undefined;
            sslTruststoreCertificates?: string | undefined;
        } | undefined;
    } & {
        alias?: string | undefined;
        thisCluster?: ({} & {} & Record<Exclude<keyof I["thisCluster"], "$type">, never>) | undefined;
        externalCluster?: ({
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            bootstrapServers?: string | undefined;
            sslTruststoreCertificates?: string | undefined;
        } & {
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            saslPassword?: string | undefined;
            bootstrapServers?: string | undefined;
            sslTruststoreCertificates?: string | undefined;
        } & Record<Exclude<keyof I["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "alias" | "thisCluster" | "externalCluster">, never>>(object: I): ClusterConnectionSpec;
};
export declare const ThisClusterSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ThisClusterSpec";
    encode(_: ThisClusterSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThisClusterSpec;
    fromJSON(_: any): ThisClusterSpec;
    toJSON(_: ThisClusterSpec): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ThisClusterSpec;
};
export declare const ExternalClusterConnectionSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnectionSpec";
    encode(message: ExternalClusterConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalClusterConnectionSpec;
    fromJSON(object: any): ExternalClusterConnectionSpec;
    toJSON(message: ExternalClusterConnectionSpec): unknown;
    fromPartial<I extends {
        securityProtocol?: string | undefined;
        saslMechanism?: string | undefined;
        saslUsername?: string | undefined;
        saslPassword?: string | undefined;
        bootstrapServers?: string | undefined;
        sslTruststoreCertificates?: string | undefined;
    } & {
        securityProtocol?: string | undefined;
        saslMechanism?: string | undefined;
        saslUsername?: string | undefined;
        saslPassword?: string | undefined;
        bootstrapServers?: string | undefined;
        sslTruststoreCertificates?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>>(object: I): ExternalClusterConnectionSpec;
};
export declare const ConnectorConfigS3SinkSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3SinkSpec";
    encode(message: ConnectorConfigS3SinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigS3SinkSpec;
    fromJSON(object: any): ConnectorConfigS3SinkSpec;
    toJSON(message: ConnectorConfigS3SinkSpec): unknown;
    fromPartial<I extends {
        topics?: string | undefined;
        fileCompressionType?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: {
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        topics?: string | undefined;
        fileCompressionType?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: ({
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } & {
            bucketName?: string | undefined;
            externalS3?: ({
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & Record<Exclude<keyof I["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
        } & Record<Exclude<keyof I["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>>(object: I): ConnectorConfigS3SinkSpec;
};
export declare const UpdateConnectorConfigS3SinkSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorConfigS3SinkSpec";
    encode(message: UpdateConnectorConfigS3SinkSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateConnectorConfigS3SinkSpec;
    fromJSON(object: any): UpdateConnectorConfigS3SinkSpec;
    toJSON(message: UpdateConnectorConfigS3SinkSpec): unknown;
    fromPartial<I extends {
        topics?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: {
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        topics?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: ({
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } & {
            bucketName?: string | undefined;
            externalS3?: ({
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & {
                accessKeyId?: string | undefined;
                secretAccessKey?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & Record<Exclude<keyof I["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
        } & Record<Exclude<keyof I["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "topics" | "fileMaxRecords" | "s3Connection">, never>>(object: I): UpdateConnectorConfigS3SinkSpec;
};
export declare const S3ConnectionSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.S3ConnectionSpec";
    encode(message: S3ConnectionSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3ConnectionSpec;
    fromJSON(object: any): S3ConnectionSpec;
    toJSON(message: S3ConnectionSpec): unknown;
    fromPartial<I extends {
        bucketName?: string | undefined;
        externalS3?: {
            accessKeyId?: string | undefined;
            secretAccessKey?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } | undefined;
    } & {
        bucketName?: string | undefined;
        externalS3?: ({
            accessKeyId?: string | undefined;
            secretAccessKey?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } & {
            accessKeyId?: string | undefined;
            secretAccessKey?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } & Record<Exclude<keyof I["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "bucketName" | "externalS3">, never>>(object: I): S3ConnectionSpec;
};
export declare const ExternalS3StorageSpec: {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3StorageSpec";
    encode(message: ExternalS3StorageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalS3StorageSpec;
    fromJSON(object: any): ExternalS3StorageSpec;
    toJSON(message: ExternalS3StorageSpec): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
        secretAccessKey?: string | undefined;
        endpoint?: string | undefined;
        region?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
        secretAccessKey?: string | undefined;
        endpoint?: string | undefined;
        region?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>>(object: I): ExternalS3StorageSpec;
};
export declare const Connector: {
    $type: "yandex.cloud.mdb.kafka.v1.Connector";
    encode(message: Connector, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connector;
    fromJSON(object: any): Connector;
    toJSON(message: Connector): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        status?: Connector_Status | undefined;
        properties?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        health?: Connector_Health | undefined;
        clusterId?: string | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: {
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } | undefined;
        connectorConfigS3Sink?: {
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        status?: Connector_Status | undefined;
        properties?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        health?: Connector_Health | undefined;
        clusterId?: string | undefined;
        tasksMax?: number | undefined;
        connectorConfigMirrormaker?: ({
            replicationFactor?: number | undefined;
            sourceCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } | undefined;
            targetCluster?: {
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } | undefined;
            topics?: string | undefined;
        } & {
            replicationFactor?: number | undefined;
            sourceCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            targetCluster?: ({
                alias?: string | undefined;
                thisCluster?: {} | undefined;
                externalCluster?: {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } | undefined;
            } & {
                alias?: string | undefined;
                thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
                externalCluster?: ({
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } & {
                    securityProtocol?: string | undefined;
                    saslMechanism?: string | undefined;
                    saslUsername?: string | undefined;
                    bootstrapServers?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
            topics?: string | undefined;
        } & Record<Exclude<keyof I["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
        connectorConfigS3Sink?: ({
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: {
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            topics?: string | undefined;
            fileCompressionType?: string | undefined;
            fileMaxRecords?: number | undefined;
            s3Connection?: ({
                bucketName?: string | undefined;
                externalS3?: {
                    accessKeyId?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } | undefined;
            } & {
                bucketName?: string | undefined;
                externalS3?: ({
                    accessKeyId?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & {
                    accessKeyId?: string | undefined;
                    endpoint?: string | undefined;
                    region?: string | undefined;
                } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "endpoint" | "region">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
        } & Record<Exclude<keyof I["connectorConfigS3Sink"], "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "status" | "properties" | "health" | "clusterId" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>>(object: I): Connector;
};
export declare const Connector_PropertiesEntry: {
    $type: "yandex.cloud.mdb.kafka.v1.Connector.PropertiesEntry";
    encode(message: Connector_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connector_PropertiesEntry;
    fromJSON(object: any): Connector_PropertiesEntry;
    toJSON(message: Connector_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Connector_PropertiesEntry;
};
export declare const ConnectorConfigMirrorMaker: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigMirrorMaker";
    encode(message: ConnectorConfigMirrorMaker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigMirrorMaker;
    fromJSON(object: any): ConnectorConfigMirrorMaker;
    toJSON(message: ConnectorConfigMirrorMaker): unknown;
    fromPartial<I extends {
        replicationFactor?: number | undefined;
        sourceCluster?: {
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } | undefined;
        } | undefined;
        targetCluster?: {
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } | undefined;
        } | undefined;
        topics?: string | undefined;
    } & {
        replicationFactor?: number | undefined;
        sourceCluster?: ({
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } | undefined;
        } & {
            alias?: string | undefined;
            thisCluster?: ({} & {} & Record<Exclude<keyof I["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
            externalCluster?: ({
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } & {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } & Record<Exclude<keyof I["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
        } & Record<Exclude<keyof I["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
        targetCluster?: ({
            alias?: string | undefined;
            thisCluster?: {} | undefined;
            externalCluster?: {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } | undefined;
        } & {
            alias?: string | undefined;
            thisCluster?: ({} & {} & Record<Exclude<keyof I["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
            externalCluster?: ({
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } & {
                securityProtocol?: string | undefined;
                saslMechanism?: string | undefined;
                saslUsername?: string | undefined;
                bootstrapServers?: string | undefined;
            } & Record<Exclude<keyof I["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
        } & Record<Exclude<keyof I["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
        topics?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>>(object: I): ConnectorConfigMirrorMaker;
};
export declare const ClusterConnection: {
    $type: "yandex.cloud.mdb.kafka.v1.ClusterConnection";
    encode(message: ClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClusterConnection;
    fromJSON(object: any): ClusterConnection;
    toJSON(message: ClusterConnection): unknown;
    fromPartial<I extends {
        alias?: string | undefined;
        thisCluster?: {} | undefined;
        externalCluster?: {
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            bootstrapServers?: string | undefined;
        } | undefined;
    } & {
        alias?: string | undefined;
        thisCluster?: ({} & {} & Record<Exclude<keyof I["thisCluster"], "$type">, never>) | undefined;
        externalCluster?: ({
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            bootstrapServers?: string | undefined;
        } & {
            securityProtocol?: string | undefined;
            saslMechanism?: string | undefined;
            saslUsername?: string | undefined;
            bootstrapServers?: string | undefined;
        } & Record<Exclude<keyof I["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "alias" | "thisCluster" | "externalCluster">, never>>(object: I): ClusterConnection;
};
export declare const ThisCluster: {
    $type: "yandex.cloud.mdb.kafka.v1.ThisCluster";
    encode(_: ThisCluster, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ThisCluster;
    fromJSON(_: any): ThisCluster;
    toJSON(_: ThisCluster): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ThisCluster;
};
export declare const ExternalClusterConnection: {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalClusterConnection";
    encode(message: ExternalClusterConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalClusterConnection;
    fromJSON(object: any): ExternalClusterConnection;
    toJSON(message: ExternalClusterConnection): unknown;
    fromPartial<I extends {
        securityProtocol?: string | undefined;
        saslMechanism?: string | undefined;
        saslUsername?: string | undefined;
        bootstrapServers?: string | undefined;
    } & {
        securityProtocol?: string | undefined;
        saslMechanism?: string | undefined;
        saslUsername?: string | undefined;
        bootstrapServers?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>>(object: I): ExternalClusterConnection;
};
export declare const ConnectorConfigS3Sink: {
    $type: "yandex.cloud.mdb.kafka.v1.ConnectorConfigS3Sink";
    encode(message: ConnectorConfigS3Sink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectorConfigS3Sink;
    fromJSON(object: any): ConnectorConfigS3Sink;
    toJSON(message: ConnectorConfigS3Sink): unknown;
    fromPartial<I extends {
        topics?: string | undefined;
        fileCompressionType?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: {
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        topics?: string | undefined;
        fileCompressionType?: string | undefined;
        fileMaxRecords?: number | undefined;
        s3Connection?: ({
            bucketName?: string | undefined;
            externalS3?: {
                accessKeyId?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } | undefined;
        } & {
            bucketName?: string | undefined;
            externalS3?: ({
                accessKeyId?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & {
                accessKeyId?: string | undefined;
                endpoint?: string | undefined;
                region?: string | undefined;
            } & Record<Exclude<keyof I["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "endpoint" | "region">, never>) | undefined;
        } & Record<Exclude<keyof I["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>>(object: I): ConnectorConfigS3Sink;
};
export declare const S3Connection: {
    $type: "yandex.cloud.mdb.kafka.v1.S3Connection";
    encode(message: S3Connection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3Connection;
    fromJSON(object: any): S3Connection;
    toJSON(message: S3Connection): unknown;
    fromPartial<I extends {
        bucketName?: string | undefined;
        externalS3?: {
            accessKeyId?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } | undefined;
    } & {
        bucketName?: string | undefined;
        externalS3?: ({
            accessKeyId?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } & {
            accessKeyId?: string | undefined;
            endpoint?: string | undefined;
            region?: string | undefined;
        } & Record<Exclude<keyof I["externalS3"], "$type" | "accessKeyId" | "endpoint" | "region">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "bucketName" | "externalS3">, never>>(object: I): S3Connection;
};
export declare const ExternalS3Storage: {
    $type: "yandex.cloud.mdb.kafka.v1.ExternalS3Storage";
    encode(message: ExternalS3Storage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalS3Storage;
    fromJSON(object: any): ExternalS3Storage;
    toJSON(message: ExternalS3Storage): unknown;
    fromPartial<I extends {
        accessKeyId?: string | undefined;
        endpoint?: string | undefined;
        region?: string | undefined;
    } & {
        accessKeyId?: string | undefined;
        endpoint?: string | undefined;
        region?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "accessKeyId" | "endpoint" | "region">, never>>(object: I): ExternalS3Storage;
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
