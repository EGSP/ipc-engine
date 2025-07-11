/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { SessionState, QueryStatement } from "../../../../../yandex/cloud/mdb/postgresql/v1/perf_diag";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
export interface ListRawStatementsRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest";
    /**
     * ID of a PostgreSQL cluster to request query statistics for.
     *
     * To get a PostgreSQL cluster ID, use the [ClusterService.List] method.
     */
    clusterId: string;
    /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
    fromTime?: Date;
    /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
    toTime?: Date;
    /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawStatementsResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListRawStatementsResponse.next_page_token] returned by the previous SQL statement list request. */
    pageToken: string;
}
export interface ListRawSessionStatesRequest {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest";
    /**
     * ID of a PostgreSQL cluster to request session statistics for.
     *
     * To get a PostgreSQL cluster ID, use the [ClusterService.List] request.
     */
    clusterId: string;
    /** Beginning of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
    fromTime?: Date;
    /** End of the period for which you need to request data (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
    toTime?: Date;
    /** The maximum number of results per page to return. If the number of the results is larger than [page_size], the service returns [ListRawSessionStatesResponse.next_page_token]. You can use it to get the next page of the results in subsequent requests. */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListRawSessionStatesResponse.next_page_token] returned by the previous PostgreSQL session list request. */
    pageToken: string;
}
export interface ListRawSessionStatesResponse {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse";
    /** List of PostgreSQL sessions. */
    sessionStates: SessionState[];
    /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawSessionStatesRequest.page_size], use the [next_page_token] as the value for the [ListRawSessionStatesRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
    nextPageToken: string;
}
export interface ListRawStatementsResponse {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse";
    /** List of SQL statements (queries). */
    statements: QueryStatement[];
    /** This token allows you to get the next page of results when requesting the PostgreSQL session list. If the number of the results is larger than [ListRawStatementsRequest.page_size], use the [next_page_token] as the value for the [ListRawStatementsRequest.page_token] parameter in the next request. Each subsequent request will have its own [next_page_token] to continue paging through the results. */
    nextPageToken: string;
}
export declare const ListRawStatementsRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsRequest";
    encode(message: ListRawStatementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRawStatementsRequest;
    fromJSON(object: any): ListRawStatementsRequest;
    toJSON(message: ListRawStatementsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId" | "fromTime" | "toTime">, never>>(object: I): ListRawStatementsRequest;
};
export declare const ListRawSessionStatesRequest: {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesRequest";
    encode(message: ListRawSessionStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRawSessionStatesRequest;
    fromJSON(object: any): ListRawSessionStatesRequest;
    toJSON(message: ListRawSessionStatesRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
        fromTime?: Date | undefined;
        toTime?: Date | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId" | "fromTime" | "toTime">, never>>(object: I): ListRawSessionStatesRequest;
};
export declare const ListRawSessionStatesResponse: {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawSessionStatesResponse";
    encode(message: ListRawSessionStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRawSessionStatesResponse;
    fromJSON(object: any): ListRawSessionStatesResponse;
    toJSON(message: ListRawSessionStatesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        sessionStates?: {
            host?: string | undefined;
            time?: Date | undefined;
            state?: string | undefined;
            database?: string | undefined;
            user?: string | undefined;
            pid?: number | undefined;
            applicationName?: string | undefined;
            waitEventType?: string | undefined;
            waitEvent?: string | undefined;
            query?: string | undefined;
            backendType?: string | undefined;
            clientAddr?: string | undefined;
            clientHostname?: string | undefined;
            clientPort?: number | undefined;
            backendXid?: number | undefined;
            backendXmin?: number | undefined;
            blockingPids?: string | undefined;
            queryId?: string | undefined;
            backendStart?: Date | undefined;
            xactStart?: Date | undefined;
            queryStart?: Date | undefined;
            stateChange?: Date | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        sessionStates?: ({
            host?: string | undefined;
            time?: Date | undefined;
            state?: string | undefined;
            database?: string | undefined;
            user?: string | undefined;
            pid?: number | undefined;
            applicationName?: string | undefined;
            waitEventType?: string | undefined;
            waitEvent?: string | undefined;
            query?: string | undefined;
            backendType?: string | undefined;
            clientAddr?: string | undefined;
            clientHostname?: string | undefined;
            clientPort?: number | undefined;
            backendXid?: number | undefined;
            backendXmin?: number | undefined;
            blockingPids?: string | undefined;
            queryId?: string | undefined;
            backendStart?: Date | undefined;
            xactStart?: Date | undefined;
            queryStart?: Date | undefined;
            stateChange?: Date | undefined;
        }[] & ({
            host?: string | undefined;
            time?: Date | undefined;
            state?: string | undefined;
            database?: string | undefined;
            user?: string | undefined;
            pid?: number | undefined;
            applicationName?: string | undefined;
            waitEventType?: string | undefined;
            waitEvent?: string | undefined;
            query?: string | undefined;
            backendType?: string | undefined;
            clientAddr?: string | undefined;
            clientHostname?: string | undefined;
            clientPort?: number | undefined;
            backendXid?: number | undefined;
            backendXmin?: number | undefined;
            blockingPids?: string | undefined;
            queryId?: string | undefined;
            backendStart?: Date | undefined;
            xactStart?: Date | undefined;
            queryStart?: Date | undefined;
            stateChange?: Date | undefined;
        } & {
            host?: string | undefined;
            time?: Date | undefined;
            state?: string | undefined;
            database?: string | undefined;
            user?: string | undefined;
            pid?: number | undefined;
            applicationName?: string | undefined;
            waitEventType?: string | undefined;
            waitEvent?: string | undefined;
            query?: string | undefined;
            backendType?: string | undefined;
            clientAddr?: string | undefined;
            clientHostname?: string | undefined;
            clientPort?: number | undefined;
            backendXid?: number | undefined;
            backendXmin?: number | undefined;
            blockingPids?: string | undefined;
            queryId?: string | undefined;
            backendStart?: Date | undefined;
            xactStart?: Date | undefined;
            queryStart?: Date | undefined;
            stateChange?: Date | undefined;
        } & Record<Exclude<keyof I["sessionStates"][number], "$type" | "host" | "time" | "state" | "database" | "user" | "pid" | "applicationName" | "waitEventType" | "waitEvent" | "query" | "backendType" | "clientAddr" | "clientHostname" | "clientPort" | "backendXid" | "backendXmin" | "blockingPids" | "queryId" | "backendStart" | "xactStart" | "queryStart" | "stateChange">, never>)[] & Record<Exclude<keyof I["sessionStates"], "$type" | keyof {
            host?: string | undefined;
            time?: Date | undefined;
            state?: string | undefined;
            database?: string | undefined;
            user?: string | undefined;
            pid?: number | undefined;
            applicationName?: string | undefined;
            waitEventType?: string | undefined;
            waitEvent?: string | undefined;
            query?: string | undefined;
            backendType?: string | undefined;
            clientAddr?: string | undefined;
            clientHostname?: string | undefined;
            clientPort?: number | undefined;
            backendXid?: number | undefined;
            backendXmin?: number | undefined;
            blockingPids?: string | undefined;
            queryId?: string | undefined;
            backendStart?: Date | undefined;
            xactStart?: Date | undefined;
            queryStart?: Date | undefined;
            stateChange?: Date | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "sessionStates">, never>>(object: I): ListRawSessionStatesResponse;
};
export declare const ListRawStatementsResponse: {
    $type: "yandex.cloud.mdb.postgresql.v1.ListRawStatementsResponse";
    encode(message: ListRawStatementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRawStatementsResponse;
    fromJSON(object: any): ListRawStatementsResponse;
    toJSON(message: ListRawStatementsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        statements?: {
            key?: {
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } | undefined;
            stats?: {
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        statements?: ({
            key?: {
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } | undefined;
            stats?: {
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } | undefined;
        }[] & ({
            key?: {
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } | undefined;
            stats?: {
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } | undefined;
        } & {
            key?: ({
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } & {
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } & Record<Exclude<keyof I["statements"][number]["key"], "$type" | "host" | "database" | "user" | "queryId" | "toplevel" | "planId">, never>) | undefined;
            stats?: ({
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } & {
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } & Record<Exclude<keyof I["statements"][number]["stats"], "$type" | "time" | "query" | "normalizedPlan" | "examplePlan" | "plans" | "totalPlanTime" | "minPlanTime" | "maxPlanTime" | "meanPlanTime" | "stddevPlanTime" | "calls" | "totalTime" | "minTime" | "maxTime" | "meanTime" | "stddevTime" | "rows" | "sharedBlksHit" | "sharedBlksRead" | "sharedBlksDirtied" | "sharedBlksWritten" | "localBlksHit" | "localBlksRead" | "localBlksDirtied" | "localBlksWritten" | "tempBlksRead" | "tempBlksWritten" | "blkReadTime" | "blkWriteTime" | "tempBlkReadTime" | "tempBlkWriteTime" | "walRecords" | "walFpi" | "walBytes" | "jitFunctions" | "jitGenerationTime" | "jitInliningCount" | "jitInliningTime" | "jitOptimizationCount" | "jitOptimizationTime" | "jitEmissionCount" | "jitEmissionTime" | "startupCost" | "totalCost" | "planRows" | "planWidth" | "reads" | "writes" | "userTime" | "systemTime">, never>) | undefined;
        } & Record<Exclude<keyof I["statements"][number], "$type" | "key" | "stats">, never>)[] & Record<Exclude<keyof I["statements"], "$type" | keyof {
            key?: {
                host?: string | undefined;
                database?: string | undefined;
                user?: string | undefined;
                queryId?: string | undefined;
                toplevel?: boolean | undefined;
                planId?: string | undefined;
            } | undefined;
            stats?: {
                time?: Date | undefined;
                query?: string | undefined;
                normalizedPlan?: string | undefined;
                examplePlan?: string | undefined;
                plans?: number | undefined;
                totalPlanTime?: number | undefined;
                minPlanTime?: number | undefined;
                maxPlanTime?: number | undefined;
                meanPlanTime?: number | undefined;
                stddevPlanTime?: number | undefined;
                calls?: number | undefined;
                totalTime?: number | undefined;
                minTime?: number | undefined;
                maxTime?: number | undefined;
                meanTime?: number | undefined;
                stddevTime?: number | undefined;
                rows?: number | undefined;
                sharedBlksHit?: number | undefined;
                sharedBlksRead?: number | undefined;
                sharedBlksDirtied?: number | undefined;
                sharedBlksWritten?: number | undefined;
                localBlksHit?: number | undefined;
                localBlksRead?: number | undefined;
                localBlksDirtied?: number | undefined;
                localBlksWritten?: number | undefined;
                tempBlksRead?: number | undefined;
                tempBlksWritten?: number | undefined;
                blkReadTime?: number | undefined;
                blkWriteTime?: number | undefined;
                tempBlkReadTime?: number | undefined;
                tempBlkWriteTime?: number | undefined;
                walRecords?: number | undefined;
                walFpi?: number | undefined;
                walBytes?: number | undefined;
                jitFunctions?: number | undefined;
                jitGenerationTime?: number | undefined;
                jitInliningCount?: number | undefined;
                jitInliningTime?: number | undefined;
                jitOptimizationCount?: number | undefined;
                jitOptimizationTime?: number | undefined;
                jitEmissionCount?: number | undefined;
                jitEmissionTime?: number | undefined;
                startupCost?: number | undefined;
                totalCost?: number | undefined;
                planRows?: number | undefined;
                planWidth?: number | undefined;
                reads?: number | undefined;
                writes?: number | undefined;
                userTime?: number | undefined;
                systemTime?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "statements">, never>>(object: I): ListRawStatementsResponse;
};
/** A set of methods for PostgreSQL performance diagnostics. */
export declare const PerformanceDiagnosticsServiceService: {
    /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    readonly listRawSessionStates: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawSessionStates";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRawSessionStatesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRawSessionStatesRequest;
        readonly responseSerialize: (value: ListRawSessionStatesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRawSessionStatesResponse;
    };
    /** Retrieves statistics on planning and execution of SQL statements (queries). */
    readonly listRawStatements: {
        readonly path: "/yandex.cloud.mdb.postgresql.v1.PerformanceDiagnosticsService/ListRawStatements";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRawStatementsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRawStatementsRequest;
        readonly responseSerialize: (value: ListRawStatementsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListRawStatementsResponse;
    };
};
export interface PerformanceDiagnosticsServiceServer extends UntypedServiceImplementation {
    /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    listRawSessionStates: handleUnaryCall<ListRawSessionStatesRequest, ListRawSessionStatesResponse>;
    /** Retrieves statistics on planning and execution of SQL statements (queries). */
    listRawStatements: handleUnaryCall<ListRawStatementsRequest, ListRawStatementsResponse>;
}
export interface PerformanceDiagnosticsServiceClient extends Client {
    /** Retrieves raw statistics on sessions. Corresponds to the [pg_stat_activity view](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    listRawSessionStates(request: ListRawSessionStatesRequest, callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void): ClientUnaryCall;
    listRawSessionStates(request: ListRawSessionStatesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void): ClientUnaryCall;
    listRawSessionStates(request: ListRawSessionStatesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRawSessionStatesResponse) => void): ClientUnaryCall;
    /** Retrieves statistics on planning and execution of SQL statements (queries). */
    listRawStatements(request: ListRawStatementsRequest, callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void): ClientUnaryCall;
    listRawStatements(request: ListRawStatementsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void): ClientUnaryCall;
    listRawStatements(request: ListRawStatementsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListRawStatementsResponse) => void): ClientUnaryCall;
}
export declare const PerformanceDiagnosticsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): PerformanceDiagnosticsServiceClient;
    service: typeof PerformanceDiagnosticsServiceService;
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
