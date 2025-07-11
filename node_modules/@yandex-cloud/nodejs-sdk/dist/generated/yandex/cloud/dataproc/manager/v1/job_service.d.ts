/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Job_Status, ApplicationInfo, Job } from "../../../../../yandex/cloud/dataproc/manager/v1/job";
export declare const protobufPackage = "yandex.cloud.dataproc.manager.v1";
export interface ListJobsRequest {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest";
    /** Required. ID of the cluster to list Data Proc jobs of. */
    clusterId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `page_size`, the service returns a `next_page_token` that can be used
     * to get the next page of results in subsequent ListJobs requests.
     * Acceptable values are 0 to 1000, inclusive. Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set `page_token` to the `next_page_token` returned by a previous ListJobs
     * request to get the next page of results.
     */
    pageToken: string;
    /** String that describes a display filter. */
    filter: string;
}
export interface ListJobsResponse {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse";
    /** Requested list of Data Proc jobs. */
    jobs: Job[];
    /**
     * This token allows you to get the next page of results for ListJobs requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListClusters request. Subsequent ListClusters
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateJobStatusRequest {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest";
    /** Required. ID of the Data Proc cluster. */
    clusterId: string;
    /** Required. ID of the Data Proc job to update. */
    jobId: string;
    /** Required. New status of the job. */
    status: Job_Status;
    /** Attributes of YARN application. */
    applicationInfo?: ApplicationInfo;
}
export interface UpdateJobStatusResponse {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse";
}
export declare const ListJobsRequest: {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsRequest";
    encode(message: ListJobsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobsRequest;
    fromJSON(object: any): ListJobsRequest;
    toJSON(message: ListJobsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "clusterId">, never>>(object: I): ListJobsRequest;
};
export declare const ListJobsResponse: {
    $type: "yandex.cloud.dataproc.manager.v1.ListJobsResponse";
    encode(message: ListJobsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobsResponse;
    fromJSON(object: any): ListJobsResponse;
    toJSON(message: ListJobsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        jobs?: {
            id?: string | undefined;
            name?: string | undefined;
            createdBy?: string | undefined;
            createdAt?: Date | undefined;
            status?: Job_Status | undefined;
            startedAt?: Date | undefined;
            clusterId?: string | undefined;
            finishedAt?: Date | undefined;
            mapreduceJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } | undefined;
            sparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
            } | undefined;
            pysparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: string[] | undefined;
            } | undefined;
            hiveJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                jarFileUris?: string[] | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                queryFileUri?: string | undefined;
                queryList?: {
                    queries?: string[] | undefined;
                } | undefined;
            } | undefined;
            applicationInfo?: {
                id?: string | undefined;
                applicationAttempts?: {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        jobs?: ({
            id?: string | undefined;
            name?: string | undefined;
            createdBy?: string | undefined;
            createdAt?: Date | undefined;
            status?: Job_Status | undefined;
            startedAt?: Date | undefined;
            clusterId?: string | undefined;
            finishedAt?: Date | undefined;
            mapreduceJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } | undefined;
            sparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
            } | undefined;
            pysparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: string[] | undefined;
            } | undefined;
            hiveJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                jarFileUris?: string[] | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                queryFileUri?: string | undefined;
                queryList?: {
                    queries?: string[] | undefined;
                } | undefined;
            } | undefined;
            applicationInfo?: {
                id?: string | undefined;
                applicationAttempts?: {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            createdBy?: string | undefined;
            createdAt?: Date | undefined;
            status?: Job_Status | undefined;
            startedAt?: Date | undefined;
            clusterId?: string | undefined;
            finishedAt?: Date | undefined;
            mapreduceJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } | undefined;
            sparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
            } | undefined;
            pysparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: string[] | undefined;
            } | undefined;
            hiveJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                jarFileUris?: string[] | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                queryFileUri?: string | undefined;
                queryList?: {
                    queries?: string[] | undefined;
                } | undefined;
            } | undefined;
            applicationInfo?: {
                id?: string | undefined;
                applicationAttempts?: {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            createdBy?: string | undefined;
            createdAt?: Date | undefined;
            status?: Job_Status | undefined;
            startedAt?: Date | undefined;
            clusterId?: string | undefined;
            finishedAt?: Date | undefined;
            mapreduceJob?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"]["properties"], string | number>, never>) | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
                jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
                fileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
                archiveUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } & Record<Exclude<keyof I["jobs"][number]["mapreduceJob"], "$type" | "properties" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass">, never>) | undefined;
            sparkJob?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["properties"], string | number>, never>) | undefined;
                repositories?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["repositories"], "$type" | keyof string[]>, never>) | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
                jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
                fileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
                archiveUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["packages"], "$type" | keyof string[]>, never>) | undefined;
                excludePackages?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["sparkJob"]["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["jobs"][number]["sparkJob"], "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass" | "packages" | "excludePackages">, never>) | undefined;
            pysparkJob?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: string[] | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["properties"], string | number>, never>) | undefined;
                repositories?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["repositories"], "$type" | keyof string[]>, never>) | undefined;
                args?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
                jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
                fileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
                archiveUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
                packages?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["packages"], "$type" | keyof string[]>, never>) | undefined;
                excludePackages?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["pysparkJob"]["pythonFileUris"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["jobs"][number]["pysparkJob"], "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "packages" | "excludePackages" | "mainPythonFileUri" | "pythonFileUris">, never>) | undefined;
            hiveJob?: ({
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                jarFileUris?: string[] | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                queryFileUri?: string | undefined;
                queryList?: {
                    queries?: string[] | undefined;
                } | undefined;
            } & {
                properties?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["hiveJob"]["properties"], string | number>, never>) | undefined;
                jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["hiveJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["hiveJob"]["scriptVariables"], string | number>, never>) | undefined;
                queryFileUri?: string | undefined;
                queryList?: ({
                    queries?: string[] | undefined;
                } & {
                    queries?: (string[] & string[] & Record<Exclude<keyof I["jobs"][number]["hiveJob"]["queryList"]["queries"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["hiveJob"]["queryList"], "$type" | "queries">, never>) | undefined;
            } & Record<Exclude<keyof I["jobs"][number]["hiveJob"], "$type" | "properties" | "jarFileUris" | "continueOnFailure" | "scriptVariables" | "queryFileUri" | "queryList">, never>) | undefined;
            applicationInfo?: ({
                id?: string | undefined;
                applicationAttempts?: {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] | undefined;
            } & {
                id?: string | undefined;
                applicationAttempts?: ({
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                } & {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                } & Record<Exclude<keyof I["jobs"][number]["applicationInfo"]["applicationAttempts"][number], "$type" | "id" | "amContainerId">, never>)[] & Record<Exclude<keyof I["jobs"][number]["applicationInfo"]["applicationAttempts"], "$type" | keyof {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["jobs"][number]["applicationInfo"], "$type" | "id" | "applicationAttempts">, never>) | undefined;
        } & Record<Exclude<keyof I["jobs"][number], "$type" | "id" | "name" | "createdBy" | "createdAt" | "status" | "startedAt" | "clusterId" | "finishedAt" | "mapreduceJob" | "sparkJob" | "pysparkJob" | "hiveJob" | "applicationInfo">, never>)[] & Record<Exclude<keyof I["jobs"], "$type" | keyof {
            id?: string | undefined;
            name?: string | undefined;
            createdBy?: string | undefined;
            createdAt?: Date | undefined;
            status?: Job_Status | undefined;
            startedAt?: Date | undefined;
            clusterId?: string | undefined;
            finishedAt?: Date | undefined;
            mapreduceJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
            } | undefined;
            sparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                mainJarFileUri?: string | undefined;
                mainClass?: string | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
            } | undefined;
            pysparkJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                repositories?: string[] | undefined;
                args?: string[] | undefined;
                jarFileUris?: string[] | undefined;
                fileUris?: string[] | undefined;
                archiveUris?: string[] | undefined;
                packages?: string[] | undefined;
                excludePackages?: string[] | undefined;
                mainPythonFileUri?: string | undefined;
                pythonFileUris?: string[] | undefined;
            } | undefined;
            hiveJob?: {
                properties?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                jarFileUris?: string[] | undefined;
                continueOnFailure?: boolean | undefined;
                scriptVariables?: {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } | undefined;
                queryFileUri?: string | undefined;
                queryList?: {
                    queries?: string[] | undefined;
                } | undefined;
            } | undefined;
            applicationInfo?: {
                id?: string | undefined;
                applicationAttempts?: {
                    id?: string | undefined;
                    amContainerId?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "jobs">, never>>(object: I): ListJobsResponse;
};
export declare const UpdateJobStatusRequest: {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusRequest";
    encode(message: UpdateJobStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateJobStatusRequest;
    fromJSON(object: any): UpdateJobStatusRequest;
    toJSON(message: UpdateJobStatusRequest): unknown;
    fromPartial<I extends {
        status?: Job_Status | undefined;
        clusterId?: string | undefined;
        applicationInfo?: {
            id?: string | undefined;
            applicationAttempts?: {
                id?: string | undefined;
                amContainerId?: string | undefined;
            }[] | undefined;
        } | undefined;
        jobId?: string | undefined;
    } & {
        status?: Job_Status | undefined;
        clusterId?: string | undefined;
        applicationInfo?: ({
            id?: string | undefined;
            applicationAttempts?: {
                id?: string | undefined;
                amContainerId?: string | undefined;
            }[] | undefined;
        } & {
            id?: string | undefined;
            applicationAttempts?: ({
                id?: string | undefined;
                amContainerId?: string | undefined;
            }[] & ({
                id?: string | undefined;
                amContainerId?: string | undefined;
            } & {
                id?: string | undefined;
                amContainerId?: string | undefined;
            } & Record<Exclude<keyof I["applicationInfo"]["applicationAttempts"][number], "$type" | "id" | "amContainerId">, never>)[] & Record<Exclude<keyof I["applicationInfo"]["applicationAttempts"], "$type" | keyof {
                id?: string | undefined;
                amContainerId?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["applicationInfo"], "$type" | "id" | "applicationAttempts">, never>) | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "status" | "clusterId" | "applicationInfo" | "jobId">, never>>(object: I): UpdateJobStatusRequest;
};
export declare const UpdateJobStatusResponse: {
    $type: "yandex.cloud.dataproc.manager.v1.UpdateJobStatusResponse";
    encode(_: UpdateJobStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateJobStatusResponse;
    fromJSON(_: any): UpdateJobStatusResponse;
    toJSON(_: UpdateJobStatusResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): UpdateJobStatusResponse;
};
export declare const JobServiceService: {
    /** Retrieves a list of jobs for Data Proc cluster. */
    readonly listActive: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/ListActive";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobsRequest;
        readonly responseSerialize: (value: ListJobsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobsResponse;
    };
    /** Currently used to update Job status. */
    readonly updateStatus: {
        readonly path: "/yandex.cloud.dataproc.manager.v1.JobService/UpdateStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateJobStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateJobStatusRequest;
        readonly responseSerialize: (value: UpdateJobStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateJobStatusResponse;
    };
};
export interface JobServiceServer extends UntypedServiceImplementation {
    /** Retrieves a list of jobs for Data Proc cluster. */
    listActive: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
    /** Currently used to update Job status. */
    updateStatus: handleUnaryCall<UpdateJobStatusRequest, UpdateJobStatusResponse>;
}
export interface JobServiceClient extends Client {
    /** Retrieves a list of jobs for Data Proc cluster. */
    listActive(request: ListJobsRequest, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    listActive(request: ListJobsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    listActive(request: ListJobsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    /** Currently used to update Job status. */
    updateStatus(request: UpdateJobStatusRequest, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateJobStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
    updateStatus(request: UpdateJobStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateJobStatusResponse) => void): ClientUnaryCall;
}
export declare const JobServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): JobServiceClient;
    service: typeof JobServiceService;
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
