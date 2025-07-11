/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Job, MapreduceJob, SparkJob, PysparkJob, HiveJob } from "../../../../yandex/cloud/dataproc/v1/job";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
export interface GetJobRequest {
    $type: "yandex.cloud.dataproc.v1.GetJobRequest";
    /** ID of the cluster to request a job from. */
    clusterId: string;
    /**
     * ID of the job to return.
     *
     * To get a job ID make a [JobService.List] request.
     */
    jobId: string;
}
export interface ListJobsRequest {
    $type: "yandex.cloud.dataproc.v1.ListJobsRequest";
    /** ID of the cluster to list jobs for. */
    clusterId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListJobsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListJobsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters jobs listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Job.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-job`.
     */
    filter: string;
}
export interface ListJobsResponse {
    $type: "yandex.cloud.dataproc.v1.ListJobsResponse";
    /** List of jobs for the specified cluster. */
    jobs: Job[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListJobsRequest.page_size], use `next_page_token` as the value
     * for the [ListJobsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateJobRequest {
    $type: "yandex.cloud.dataproc.v1.CreateJobRequest";
    /** ID of the cluster to create a job for. */
    clusterId: string;
    /** Name of the job. */
    name: string;
    /** Specification for a MapReduce job. */
    mapreduceJob?: MapreduceJob | undefined;
    /** Specification for a Spark job. */
    sparkJob?: SparkJob | undefined;
    /** Specification for a PySpark job. */
    pysparkJob?: PysparkJob | undefined;
    /** Specification for a Hive job. */
    hiveJob?: HiveJob | undefined;
}
export interface CreateJobMetadata {
    $type: "yandex.cloud.dataproc.v1.CreateJobMetadata";
    /** ID of the cluster that the job is being created for. */
    clusterId: string;
    /** ID of the job being created. */
    jobId: string;
}
export interface CancelJobRequest {
    $type: "yandex.cloud.dataproc.v1.CancelJobRequest";
    /** Required. ID of the Dataproc cluster. */
    clusterId: string;
    /** Required. ID of the Dataproc job to cancel. */
    jobId: string;
}
export interface ListJobLogRequest {
    $type: "yandex.cloud.dataproc.v1.ListJobLogRequest";
    /** ID of the cluster that the job is being created for. */
    clusterId: string;
    /** ID of the job being created. */
    jobId: string;
    /**
     * The maximum bytes of job log per response to return. If the number of available
     * bytes is larger than [page_size], the service returns a [ListJobLogResponse.next_page_token]
     * that can be used to get the next page of output in subsequent list requests.
     * Default value: 1048576.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListJobLogResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
}
export interface ListJobLogResponse {
    $type: "yandex.cloud.dataproc.v1.ListJobLogResponse";
    /** Requested part of Data Proc Job log. */
    content: string;
    /**
     * This token allows you to get the next page of results for ListLog requests,
     * if the number of results is larger than `page_size` specified in the request.
     * To get the next page, specify the value of `next_page_token` as a value for
     * the `page_token` parameter in the next ListLog request. Subsequent ListLog
     * requests will have their own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetJobRequest: {
    $type: "yandex.cloud.dataproc.v1.GetJobRequest";
    encode(message: GetJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetJobRequest;
    fromJSON(object: any): GetJobRequest;
    toJSON(message: GetJobRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "jobId">, never>>(object: I): GetJobRequest;
};
export declare const ListJobsRequest: {
    $type: "yandex.cloud.dataproc.v1.ListJobsRequest";
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
    $type: "yandex.cloud.dataproc.v1.ListJobsResponse";
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
            status?: import("../../../../yandex/cloud/dataproc/v1/job").Job_Status | undefined;
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
            status?: import("../../../../yandex/cloud/dataproc/v1/job").Job_Status | undefined;
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
            status?: import("../../../../yandex/cloud/dataproc/v1/job").Job_Status | undefined;
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
            status?: import("../../../../yandex/cloud/dataproc/v1/job").Job_Status | undefined;
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
            status?: import("../../../../yandex/cloud/dataproc/v1/job").Job_Status | undefined;
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
export declare const CreateJobRequest: {
    $type: "yandex.cloud.dataproc.v1.CreateJobRequest";
    encode(message: CreateJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateJobRequest;
    fromJSON(object: any): CreateJobRequest;
    toJSON(message: CreateJobRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        clusterId?: string | undefined;
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
    } & {
        name?: string | undefined;
        clusterId?: string | undefined;
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
            } & Record<Exclude<keyof I["mapreduceJob"]["properties"], string | number>, never>) | undefined;
            args?: (string[] & string[] & Record<Exclude<keyof I["mapreduceJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
            jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["mapreduceJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
            fileUris?: (string[] & string[] & Record<Exclude<keyof I["mapreduceJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
            archiveUris?: (string[] & string[] & Record<Exclude<keyof I["mapreduceJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
            mainJarFileUri?: string | undefined;
            mainClass?: string | undefined;
        } & Record<Exclude<keyof I["mapreduceJob"], "$type" | "properties" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass">, never>) | undefined;
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
            } & Record<Exclude<keyof I["sparkJob"]["properties"], string | number>, never>) | undefined;
            repositories?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["repositories"], "$type" | keyof string[]>, never>) | undefined;
            args?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
            jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
            fileUris?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
            archiveUris?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
            mainJarFileUri?: string | undefined;
            mainClass?: string | undefined;
            packages?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["packages"], "$type" | keyof string[]>, never>) | undefined;
            excludePackages?: (string[] & string[] & Record<Exclude<keyof I["sparkJob"]["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["sparkJob"], "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass" | "packages" | "excludePackages">, never>) | undefined;
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
            } & Record<Exclude<keyof I["pysparkJob"]["properties"], string | number>, never>) | undefined;
            repositories?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["repositories"], "$type" | keyof string[]>, never>) | undefined;
            args?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["args"], "$type" | keyof string[]>, never>) | undefined;
            jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
            fileUris?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["fileUris"], "$type" | keyof string[]>, never>) | undefined;
            archiveUris?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
            packages?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["packages"], "$type" | keyof string[]>, never>) | undefined;
            excludePackages?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
            mainPythonFileUri?: string | undefined;
            pythonFileUris?: (string[] & string[] & Record<Exclude<keyof I["pysparkJob"]["pythonFileUris"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pysparkJob"], "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "packages" | "excludePackages" | "mainPythonFileUri" | "pythonFileUris">, never>) | undefined;
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
            } & Record<Exclude<keyof I["hiveJob"]["properties"], string | number>, never>) | undefined;
            jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["hiveJob"]["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
            continueOnFailure?: boolean | undefined;
            scriptVariables?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["hiveJob"]["scriptVariables"], string | number>, never>) | undefined;
            queryFileUri?: string | undefined;
            queryList?: ({
                queries?: string[] | undefined;
            } & {
                queries?: (string[] & string[] & Record<Exclude<keyof I["hiveJob"]["queryList"]["queries"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["hiveJob"]["queryList"], "$type" | "queries">, never>) | undefined;
        } & Record<Exclude<keyof I["hiveJob"], "$type" | "properties" | "jarFileUris" | "continueOnFailure" | "scriptVariables" | "queryFileUri" | "queryList">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "clusterId" | "mapreduceJob" | "sparkJob" | "pysparkJob" | "hiveJob">, never>>(object: I): CreateJobRequest;
};
export declare const CreateJobMetadata: {
    $type: "yandex.cloud.dataproc.v1.CreateJobMetadata";
    encode(message: CreateJobMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateJobMetadata;
    fromJSON(object: any): CreateJobMetadata;
    toJSON(message: CreateJobMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "jobId">, never>>(object: I): CreateJobMetadata;
};
export declare const CancelJobRequest: {
    $type: "yandex.cloud.dataproc.v1.CancelJobRequest";
    encode(message: CancelJobRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelJobRequest;
    fromJSON(object: any): CancelJobRequest;
    toJSON(message: CancelJobRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & {
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "jobId">, never>>(object: I): CancelJobRequest;
};
export declare const ListJobLogRequest: {
    $type: "yandex.cloud.dataproc.v1.ListJobLogRequest";
    encode(message: ListJobLogRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobLogRequest;
    fromJSON(object: any): ListJobLogRequest;
    toJSON(message: ListJobLogRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        jobId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId" | "jobId">, never>>(object: I): ListJobLogRequest;
};
export declare const ListJobLogResponse: {
    $type: "yandex.cloud.dataproc.v1.ListJobLogResponse";
    encode(message: ListJobLogResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListJobLogResponse;
    fromJSON(object: any): ListJobLogResponse;
    toJSON(message: ListJobLogResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        content?: string | undefined;
    } & {
        nextPageToken?: string | undefined;
        content?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "content">, never>>(object: I): ListJobLogResponse;
};
/** A set of methods for managing Data Proc jobs. */
export declare const JobServiceService: {
    /** Retrieves a list of jobs for a cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobsRequest;
        readonly responseSerialize: (value: ListJobsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobsResponse;
    };
    /** Creates a job for a cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateJobRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified job. */
    readonly get: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetJobRequest;
        readonly responseSerialize: (value: Job) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Job;
    };
    /** Returns a log for specified job. */
    readonly listLog: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/ListLog";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListJobLogRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListJobLogRequest;
        readonly responseSerialize: (value: ListJobLogResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListJobLogResponse;
    };
    /** Cancels the specified Dataproc job. */
    readonly cancel: {
        readonly path: "/yandex.cloud.dataproc.v1.JobService/Cancel";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CancelJobRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CancelJobRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface JobServiceServer extends UntypedServiceImplementation {
    /** Retrieves a list of jobs for a cluster. */
    list: handleUnaryCall<ListJobsRequest, ListJobsResponse>;
    /** Creates a job for a cluster. */
    create: handleUnaryCall<CreateJobRequest, Operation>;
    /** Returns the specified job. */
    get: handleUnaryCall<GetJobRequest, Job>;
    /** Returns a log for specified job. */
    listLog: handleUnaryCall<ListJobLogRequest, ListJobLogResponse>;
    /** Cancels the specified Dataproc job. */
    cancel: handleUnaryCall<CancelJobRequest, Operation>;
}
export interface JobServiceClient extends Client {
    /** Retrieves a list of jobs for a cluster. */
    list(request: ListJobsRequest, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    list(request: ListJobsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    list(request: ListJobsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobsResponse) => void): ClientUnaryCall;
    /** Creates a job for a cluster. */
    create(request: CreateJobRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified job. */
    get(request: GetJobRequest, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    get(request: GetJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Job) => void): ClientUnaryCall;
    /** Returns a log for specified job. */
    listLog(request: ListJobLogRequest, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
    listLog(request: ListJobLogRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
    listLog(request: ListJobLogRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListJobLogResponse) => void): ClientUnaryCall;
    /** Cancels the specified Dataproc job. */
    cancel(request: CancelJobRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelJobRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    cancel(request: CancelJobRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
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
