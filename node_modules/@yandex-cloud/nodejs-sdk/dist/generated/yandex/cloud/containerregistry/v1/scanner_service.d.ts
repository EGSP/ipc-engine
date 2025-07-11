/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { ScanResult, Vulnerability } from "../../../../yandex/cloud/containerregistry/v1/scanner";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.containerregistry.v1";
export interface ScanRequest {
    $type: "yandex.cloud.containerregistry.v1.ScanRequest";
    /** ID of the Image to be scanned for vulnerabilities. */
    imageId: string;
}
export interface ScanMetadata {
    $type: "yandex.cloud.containerregistry.v1.ScanMetadata";
    /** ID of the ScanResult that is being created. */
    scanResultId: string;
}
export interface GetScanResultRequest {
    $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest";
    /** ID of the ScanResult to return. */
    scanResultId: string;
}
export interface GetLastScanResultRequest {
    $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest";
    /** ID of the Image to get last finished ScanResult. */
    imageId: string;
}
export interface ListScanResultsRequest {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest";
    imageId: string | undefined;
    repositoryId: string | undefined;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`).
     */
    filter: string;
    /**
     * An order expression that orders resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [ScanResult.status] field.
     * 2. Order selector. Currently you can use ordering only on `ScanResult.status` field (critical first).
     */
    orderBy: string;
}
export interface ListScanResultsResponse {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse";
    /** List of ScanResult resources. */
    scanResults: ScanResult[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface ListVulnerabilitiesRequest {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest";
    /** ID of the ScanResult to get list of vulnerabilities for. */
    scanResultId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`).
     */
    filter: string;
    /**
     * An order expression that orders resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Vulnerability.severity] and [PackageVulnerability.name] fields.
     * 2. Order selector. Currently you can use ordering only on `Vulnerability.severity` field (recent first).
     */
    orderBy: string;
}
export interface ListVulnerabilitiesResponse {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse";
    /** List of Vulnerability resources. */
    vulnerabilities: Vulnerability[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const ScanRequest: {
    $type: "yandex.cloud.containerregistry.v1.ScanRequest";
    encode(message: ScanRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScanRequest;
    fromJSON(object: any): ScanRequest;
    toJSON(message: ScanRequest): unknown;
    fromPartial<I extends {
        imageId?: string | undefined;
    } & {
        imageId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageId">, never>>(object: I): ScanRequest;
};
export declare const ScanMetadata: {
    $type: "yandex.cloud.containerregistry.v1.ScanMetadata";
    encode(message: ScanMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ScanMetadata;
    fromJSON(object: any): ScanMetadata;
    toJSON(message: ScanMetadata): unknown;
    fromPartial<I extends {
        scanResultId?: string | undefined;
    } & {
        scanResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanResultId">, never>>(object: I): ScanMetadata;
};
export declare const GetScanResultRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetScanResultRequest";
    encode(message: GetScanResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetScanResultRequest;
    fromJSON(object: any): GetScanResultRequest;
    toJSON(message: GetScanResultRequest): unknown;
    fromPartial<I extends {
        scanResultId?: string | undefined;
    } & {
        scanResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "scanResultId">, never>>(object: I): GetScanResultRequest;
};
export declare const GetLastScanResultRequest: {
    $type: "yandex.cloud.containerregistry.v1.GetLastScanResultRequest";
    encode(message: GetLastScanResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLastScanResultRequest;
    fromJSON(object: any): GetLastScanResultRequest;
    toJSON(message: GetLastScanResultRequest): unknown;
    fromPartial<I extends {
        imageId?: string | undefined;
    } & {
        imageId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageId">, never>>(object: I): GetLastScanResultRequest;
};
export declare const ListScanResultsRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsRequest";
    encode(message: ListScanResultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScanResultsRequest;
    fromJSON(object: any): ListScanResultsRequest;
    toJSON(message: ListScanResultsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        imageId?: string | undefined;
        repositoryId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        imageId?: string | undefined;
        repositoryId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "orderBy" | "imageId" | "repositoryId">, never>>(object: I): ListScanResultsRequest;
};
export declare const ListScanResultsResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListScanResultsResponse";
    encode(message: ListScanResultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListScanResultsResponse;
    fromJSON(object: any): ListScanResultsResponse;
    toJSON(message: ListScanResultsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        scanResults?: {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/scanner").ScanResult_Status | undefined;
            imageId?: string | undefined;
            scannedAt?: Date | undefined;
            vulnerabilities?: {
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        scanResults?: ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/scanner").ScanResult_Status | undefined;
            imageId?: string | undefined;
            scannedAt?: Date | undefined;
            vulnerabilities?: {
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/scanner").ScanResult_Status | undefined;
            imageId?: string | undefined;
            scannedAt?: Date | undefined;
            vulnerabilities?: {
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/scanner").ScanResult_Status | undefined;
            imageId?: string | undefined;
            scannedAt?: Date | undefined;
            vulnerabilities?: ({
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } & {
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } & Record<Exclude<keyof I["scanResults"][number]["vulnerabilities"], "undefined" | "$type" | "critical" | "high" | "medium" | "low" | "negligible">, never>) | undefined;
        } & Record<Exclude<keyof I["scanResults"][number], "$type" | "id" | "status" | "imageId" | "scannedAt" | "vulnerabilities">, never>)[] & Record<Exclude<keyof I["scanResults"], "$type" | keyof {
            id?: string | undefined;
            status?: import("../../../../yandex/cloud/containerregistry/v1/scanner").ScanResult_Status | undefined;
            imageId?: string | undefined;
            scannedAt?: Date | undefined;
            vulnerabilities?: {
                undefined?: number | undefined;
                critical?: number | undefined;
                high?: number | undefined;
                medium?: number | undefined;
                low?: number | undefined;
                negligible?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "scanResults">, never>>(object: I): ListScanResultsResponse;
};
export declare const ListVulnerabilitiesRequest: {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesRequest";
    encode(message: ListVulnerabilitiesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVulnerabilitiesRequest;
    fromJSON(object: any): ListVulnerabilitiesRequest;
    toJSON(message: ListVulnerabilitiesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        scanResultId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        orderBy?: string | undefined;
        scanResultId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "orderBy" | "scanResultId">, never>>(object: I): ListVulnerabilitiesRequest;
};
export declare const ListVulnerabilitiesResponse: {
    $type: "yandex.cloud.containerregistry.v1.ListVulnerabilitiesResponse";
    encode(message: ListVulnerabilitiesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListVulnerabilitiesResponse;
    fromJSON(object: any): ListVulnerabilitiesResponse;
    toJSON(message: ListVulnerabilitiesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        vulnerabilities?: {
            severity?: import("../../../../yandex/cloud/containerregistry/v1/scanner").Vulnerability_Severity | undefined;
            package?: {
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        vulnerabilities?: ({
            severity?: import("../../../../yandex/cloud/containerregistry/v1/scanner").Vulnerability_Severity | undefined;
            package?: {
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } | undefined;
        }[] & ({
            severity?: import("../../../../yandex/cloud/containerregistry/v1/scanner").Vulnerability_Severity | undefined;
            package?: {
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } | undefined;
        } & {
            severity?: import("../../../../yandex/cloud/containerregistry/v1/scanner").Vulnerability_Severity | undefined;
            package?: ({
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } & {
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } & Record<Exclude<keyof I["vulnerabilities"][number]["package"], "$type" | "link" | "name" | "source" | "package" | "version" | "fixedBy">, never>) | undefined;
        } & Record<Exclude<keyof I["vulnerabilities"][number], "$type" | "severity" | "package">, never>)[] & Record<Exclude<keyof I["vulnerabilities"], "$type" | keyof {
            severity?: import("../../../../yandex/cloud/containerregistry/v1/scanner").Vulnerability_Severity | undefined;
            package?: {
                link?: string | undefined;
                name?: string | undefined;
                source?: string | undefined;
                package?: string | undefined;
                version?: string | undefined;
                fixedBy?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "vulnerabilities">, never>>(object: I): ListVulnerabilitiesResponse;
};
/** A set of methods for scanning Docker images. */
export declare const ScannerServiceService: {
    /** Executes scanning of specified image. */
    readonly scan: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/Scan";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ScanRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ScanRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetScanResultRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetScanResultRequest;
        readonly responseSerialize: (value: ScanResult) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ScanResult;
    };
    /** Returns the last finished ScanResult for the specified Image. */
    readonly getLast: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/GetLast";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLastScanResultRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLastScanResultRequest;
        readonly responseSerialize: (value: ScanResult) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ScanResult;
    };
    /** Retrieves the list of ScanResults for specified Image. */
    readonly list: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListScanResultsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListScanResultsRequest;
        readonly responseSerialize: (value: ListScanResultsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListScanResultsResponse;
    };
    /** Retrieves the list of vulnerabilities found in particular scan. */
    readonly listVulnerabilities: {
        readonly path: "/yandex.cloud.containerregistry.v1.ScannerService/ListVulnerabilities";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListVulnerabilitiesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListVulnerabilitiesRequest;
        readonly responseSerialize: (value: ListVulnerabilitiesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListVulnerabilitiesResponse;
    };
};
export interface ScannerServiceServer extends UntypedServiceImplementation {
    /** Executes scanning of specified image. */
    scan: handleUnaryCall<ScanRequest, Operation>;
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get: handleUnaryCall<GetScanResultRequest, ScanResult>;
    /** Returns the last finished ScanResult for the specified Image. */
    getLast: handleUnaryCall<GetLastScanResultRequest, ScanResult>;
    /** Retrieves the list of ScanResults for specified Image. */
    list: handleUnaryCall<ListScanResultsRequest, ListScanResultsResponse>;
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities: handleUnaryCall<ListVulnerabilitiesRequest, ListVulnerabilitiesResponse>;
}
export interface ScannerServiceClient extends Client {
    /** Executes scanning of specified image. */
    scan(request: ScanRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scan(request: ScanRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    scan(request: ScanRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Returns the specified ScanResult resource.
     *
     * To get the list of ScanResults for specified Image, make a [List] request.
     */
    get(request: GetScanResultRequest, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    get(request: GetScanResultRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    get(request: GetScanResultRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    /** Returns the last finished ScanResult for the specified Image. */
    getLast(request: GetLastScanResultRequest, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    getLast(request: GetLastScanResultRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    getLast(request: GetLastScanResultRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ScanResult) => void): ClientUnaryCall;
    /** Retrieves the list of ScanResults for specified Image. */
    list(request: ListScanResultsRequest, callback: (error: ServiceError | null, response: ListScanResultsResponse) => void): ClientUnaryCall;
    list(request: ListScanResultsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListScanResultsResponse) => void): ClientUnaryCall;
    list(request: ListScanResultsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListScanResultsResponse) => void): ClientUnaryCall;
    /** Retrieves the list of vulnerabilities found in particular scan. */
    listVulnerabilities(request: ListVulnerabilitiesRequest, callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void): ClientUnaryCall;
    listVulnerabilities(request: ListVulnerabilitiesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void): ClientUnaryCall;
    listVulnerabilities(request: ListVulnerabilitiesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListVulnerabilitiesResponse) => void): ClientUnaryCall;
}
export declare const ScannerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ScannerServiceClient;
    service: typeof ScannerServiceService;
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
