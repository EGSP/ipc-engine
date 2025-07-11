/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ConnectorSpec, UpdateConnectorSpec, Connector } from "../../../../../yandex/cloud/mdb/kafka/v1/connector";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export interface GetConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster the connector belongs to.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to return information about.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}
export interface ListConnectorsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest";
    /**
     * ID of the Apache Kafka® cluster to list connectors in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the API returns a [ListConnectorsResponse.next_page_token] that can be used to get the next page of results in the subsequent [ConnectorService.List] requests.
     */
    pageSize: number;
    /**
     * Page token that can be used to iterate through multiple pages of results.
     *
     * To get the next page of results, set [page_token] to the [ListConnectorsResponse.next_page_token] returned by the previous [ConnectorService.List] request.
     */
    pageToken: string;
}
export interface ListConnectorsResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse";
    /** List of Apache Kafka® Connectors. */
    connectors: Connector[];
    /**
     * The token that can be used to get the next page of results.
     *
     * If the number of results is larger than [ListConnectorsRequest.page_size], use the [next_page_token] as the value for the [ListConnectorsRequest.page_token] in the subsequent [ConnectorService.List] request to iterate through multiple pages of results.
     */
    nextPageToken: string;
}
export interface CreateConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster to create the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the connector to create. */
    connectorSpec?: ConnectorSpec;
}
export interface CreateConnectorMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata";
    /** ID of the Apache Kafka® cluster the connector is being created in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being created. */
    connectorName: string;
}
export interface UpdateConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster to update the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the connector to update.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
    /** Field mask that specifies which settings of the connector should be updated. */
    updateMask?: FieldMask;
    /** Configuration of the connector to update. */
    connectorSpec?: UpdateConnectorSpec;
}
export interface UpdateConnectorMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata";
    /** ID of the Apache Kafka® cluster the connector is being updated in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being updated. */
    connectorName: string;
}
export interface DeleteConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster to delete the connector from.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the connector to delete.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}
export interface DeleteConnectorMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata";
    /** ID of the Apache Kafka® cluster the connector is being deleted from. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being deleted. */
    connectorName: string;
}
export interface ResumeConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster to resume the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to resume.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}
export interface ResumeConnectorMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata";
    /** ID of the Apache Kafka® cluster the connector is being resumed in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is beign resumed. */
    connectorName: string;
}
export interface PauseConnectorRequest {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest";
    /**
     * ID of the Apache Kafka® cluster to pause the connector in.
     *
     * To get this ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Apache Kafka® connector to pause.
     *
     * To get this name, make a [ConnectorService.List] request.
     */
    connectorName: string;
}
export interface PauseConnectorMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata";
    /** ID of the Apache Kafka® cluster the connector is being paused in. */
    clusterId: string;
    /** Name of the Apache Kafka® connector that is being paused. */
    connectorName: string;
}
export declare const GetConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GetConnectorRequest";
    encode(message: GetConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetConnectorRequest;
    fromJSON(object: any): GetConnectorRequest;
    toJSON(message: GetConnectorRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): GetConnectorRequest;
};
export declare const ListConnectorsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsRequest";
    encode(message: ListConnectorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListConnectorsRequest;
    fromJSON(object: any): ListConnectorsRequest;
    toJSON(message: ListConnectorsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListConnectorsRequest;
};
export declare const ListConnectorsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListConnectorsResponse";
    encode(message: ListConnectorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListConnectorsResponse;
    fromJSON(object: any): ListConnectorsResponse;
    toJSON(message: ListConnectorsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        connectors?: {
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Status | undefined;
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Health | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        connectors?: ({
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Status | undefined;
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Health | undefined;
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
        }[] & ({
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Status | undefined;
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Health | undefined;
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
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Status | undefined;
            properties?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["connectors"][number]["properties"], string | number>, never>) | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Health | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
                } & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "bootstrapServers">, never>) | undefined;
                } & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
                topics?: string | undefined;
            } & Record<Exclude<keyof I["connectors"][number]["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectors"][number]["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "endpoint" | "region">, never>) | undefined;
                } & Record<Exclude<keyof I["connectors"][number]["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
            } & Record<Exclude<keyof I["connectors"][number]["connectorConfigS3Sink"], "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
        } & Record<Exclude<keyof I["connectors"][number], "$type" | "name" | "status" | "properties" | "health" | "clusterId" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>)[] & Record<Exclude<keyof I["connectors"], "$type" | keyof {
            name?: string | undefined;
            status?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Status | undefined;
            properties?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            health?: import("../../../../../yandex/cloud/mdb/kafka/v1/connector").Connector_Health | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "connectors">, never>>(object: I): ListConnectorsResponse;
};
export declare const CreateConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorRequest";
    encode(message: CreateConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateConnectorRequest;
    fromJSON(object: any): CreateConnectorRequest;
    toJSON(message: CreateConnectorRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorSpec?: {
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
        } | undefined;
    } & {
        clusterId?: string | undefined;
        connectorSpec?: ({
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
            } & Record<Exclude<keyof I["connectorSpec"]["properties"], string | number>, never>) | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
                topics?: string | undefined;
            } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"], "$type" | "topics" | "fileCompressionType" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
        } & Record<Exclude<keyof I["connectorSpec"], "$type" | "name" | "properties" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorSpec">, never>>(object: I): CreateConnectorRequest;
};
export declare const CreateConnectorMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateConnectorMetadata";
    encode(message: CreateConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateConnectorMetadata;
    fromJSON(object: any): CreateConnectorMetadata;
    toJSON(message: CreateConnectorMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): CreateConnectorMetadata;
};
export declare const UpdateConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorRequest";
    encode(message: UpdateConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateConnectorRequest;
    fromJSON(object: any): UpdateConnectorRequest;
    toJSON(message: UpdateConnectorRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        clusterId?: string | undefined;
        connectorName?: string | undefined;
        connectorSpec?: {
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
        } | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        clusterId?: string | undefined;
        connectorName?: string | undefined;
        connectorSpec?: ({
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
            } & Record<Exclude<keyof I["connectorSpec"]["properties"], string | number>, never>) | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["sourceCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
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
                    thisCluster?: ({} & {} & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"]["thisCluster"], "$type">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"]["externalCluster"], "$type" | "securityProtocol" | "saslMechanism" | "saslUsername" | "saslPassword" | "bootstrapServers" | "sslTruststoreCertificates">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"]["targetCluster"], "$type" | "alias" | "thisCluster" | "externalCluster">, never>) | undefined;
                topics?: string | undefined;
            } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigMirrormaker"], "$type" | "replicationFactor" | "sourceCluster" | "targetCluster" | "topics">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"]["s3Connection"]["externalS3"], "$type" | "accessKeyId" | "secretAccessKey" | "endpoint" | "region">, never>) | undefined;
                } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"]["s3Connection"], "$type" | "bucketName" | "externalS3">, never>) | undefined;
            } & Record<Exclude<keyof I["connectorSpec"]["connectorConfigS3Sink"], "$type" | "topics" | "fileMaxRecords" | "s3Connection">, never>) | undefined;
        } & Record<Exclude<keyof I["connectorSpec"], "$type" | "properties" | "tasksMax" | "connectorConfigMirrormaker" | "connectorConfigS3Sink">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "clusterId" | "connectorName" | "connectorSpec">, never>>(object: I): UpdateConnectorRequest;
};
export declare const UpdateConnectorMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateConnectorMetadata";
    encode(message: UpdateConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateConnectorMetadata;
    fromJSON(object: any): UpdateConnectorMetadata;
    toJSON(message: UpdateConnectorMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): UpdateConnectorMetadata;
};
export declare const DeleteConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorRequest";
    encode(message: DeleteConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteConnectorRequest;
    fromJSON(object: any): DeleteConnectorRequest;
    toJSON(message: DeleteConnectorRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): DeleteConnectorRequest;
};
export declare const DeleteConnectorMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteConnectorMetadata";
    encode(message: DeleteConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteConnectorMetadata;
    fromJSON(object: any): DeleteConnectorMetadata;
    toJSON(message: DeleteConnectorMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): DeleteConnectorMetadata;
};
export declare const ResumeConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorRequest";
    encode(message: ResumeConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeConnectorRequest;
    fromJSON(object: any): ResumeConnectorRequest;
    toJSON(message: ResumeConnectorRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): ResumeConnectorRequest;
};
export declare const ResumeConnectorMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.ResumeConnectorMetadata";
    encode(message: ResumeConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeConnectorMetadata;
    fromJSON(object: any): ResumeConnectorMetadata;
    toJSON(message: ResumeConnectorMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): ResumeConnectorMetadata;
};
export declare const PauseConnectorRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorRequest";
    encode(message: PauseConnectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseConnectorRequest;
    fromJSON(object: any): PauseConnectorRequest;
    toJSON(message: PauseConnectorRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): PauseConnectorRequest;
};
export declare const PauseConnectorMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.PauseConnectorMetadata";
    encode(message: PauseConnectorMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseConnectorMetadata;
    fromJSON(object: any): PauseConnectorMetadata;
    toJSON(message: PauseConnectorMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        connectorName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "connectorName">, never>>(object: I): PauseConnectorMetadata;
};
/** A set of methods for managing Apache Kafka® connectors. */
export declare const ConnectorServiceService: {
    /** Returns information about an Apache Kafka® connector. */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetConnectorRequest;
        readonly responseSerialize: (value: Connector) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Connector;
    };
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListConnectorsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListConnectorsRequest;
        readonly responseSerialize: (value: ListConnectorsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListConnectorsResponse;
    };
    /** Creates a new Apache Kafka® connector in a cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates an Apache Kafka® connector. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes an Apache Kafka® connector. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Resumes an Apache Kafka® connector. */
    readonly resume: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Resume";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Pauses an Apache Kafka® connector. */
    readonly pause: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.ConnectorService/Pause";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseConnectorRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseConnectorRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ConnectorServiceServer extends UntypedServiceImplementation {
    /** Returns information about an Apache Kafka® connector. */
    get: handleUnaryCall<GetConnectorRequest, Connector>;
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list: handleUnaryCall<ListConnectorsRequest, ListConnectorsResponse>;
    /** Creates a new Apache Kafka® connector in a cluster. */
    create: handleUnaryCall<CreateConnectorRequest, Operation>;
    /** Updates an Apache Kafka® connector. */
    update: handleUnaryCall<UpdateConnectorRequest, Operation>;
    /** Deletes an Apache Kafka® connector. */
    delete: handleUnaryCall<DeleteConnectorRequest, Operation>;
    /** Resumes an Apache Kafka® connector. */
    resume: handleUnaryCall<ResumeConnectorRequest, Operation>;
    /** Pauses an Apache Kafka® connector. */
    pause: handleUnaryCall<PauseConnectorRequest, Operation>;
}
export interface ConnectorServiceClient extends Client {
    /** Returns information about an Apache Kafka® connector. */
    get(request: GetConnectorRequest, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    get(request: GetConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    get(request: GetConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Connector) => void): ClientUnaryCall;
    /** Retrieves the list of Apache Kafka® connectors in a cluster. */
    list(request: ListConnectorsRequest, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    list(request: ListConnectorsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    list(request: ListConnectorsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListConnectorsResponse) => void): ClientUnaryCall;
    /** Creates a new Apache Kafka® connector in a cluster. */
    create(request: CreateConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates an Apache Kafka® connector. */
    update(request: UpdateConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes an Apache Kafka® connector. */
    delete(request: DeleteConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Resumes an Apache Kafka® connector. */
    resume(request: ResumeConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Pauses an Apache Kafka® connector. */
    pause(request: PauseConnectorRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseConnectorRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseConnectorRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ConnectorServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ConnectorServiceClient;
    service: typeof ConnectorServiceService;
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
