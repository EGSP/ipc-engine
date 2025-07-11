import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.mdb.postgresql.v1";
export interface SessionState {
    $type: "yandex.cloud.mdb.postgresql.v1.SessionState";
    /** Time of collecting statistics on sessions (in the [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format). */
    time?: Date;
    /** Host of the connected client. */
    host: string;
    /** Server process ID. For client connections, this is a client connection ID. */
    pid: number;
    /** Database ID. */
    database: string;
    /** User ID. */
    user: string;
    /** Application name on the connected client. */
    applicationName: string;
    /** Time when a given process was started. For client connections, this is the time when the client connected to the server. */
    backendStart?: Date;
    /**
     * Time when a transaction of a given process was started. Returns [NULL] if no transaction is active.
     *
     * If the currently active query is the first of its transaction, the value of this parameter is equal to the value of the [query_start] parameter.
     */
    xactStart?: Date;
    /**
     * Time when the currently active query was started.
     *
     * If the [state] parameter does not take the value [active], the parameter returns the time when the lastest query was started.
     */
    queryStart?: Date;
    /** Time when the [state] parameter was last changed. */
    stateChange?: Date;
    /**
     * Type of event for which the backend is waiting. Such an event is called a wait event. A backend refers to the process that maintains the client connection.
     *
     * For the list of wait events, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
     */
    waitEventType: string;
    /**
     * Wait event name.
     *
     * For the list of such names, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#WAIT-EVENT-ACTIVITY-TABLE). If the backend is not waiting for any event, the parameter returns [NULL].
     */
    waitEvent: string;
    /** Current backend state. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    state: string;
    /**
     * Text of the most recent query.
     *
     * If the [state] parameter takes the value [active], the parameter shows the currently executing query. For the rest of the states, the parameter shows the last query that was executed. By default, the query text is truncated to 1024 bytes.
     */
    query: string;
    /** Current backend type. For the list of possible values, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW). */
    backendType: string;
    /**
     * IP address of the connected client.
     *
     * The parameter returns [NULL] in the following cases:
     * - The client is connected via a Unix socket on the server.
     * - A given process is internal (for example, autovacuum).
     */
    clientAddr: string;
    /** Host name of the connected client (relevant for IP connections). */
    clientHostname: string;
    /**
     * TCP port number that the client is using for communication with the server.
     *
     * Returns [-1] if the client is connected via a Unix socket on the server. Returns [NULL] if a given process is internal (for example, autovacuum).
     */
    clientPort: number;
    /** Top-level transaction ID, if any. */
    backendXid: number;
    /** Current [xmin horizon]. */
    backendXmin: number;
    /** Process IDs that are blocking a given server process ID. */
    blockingPids: string;
    /** Query ID. */
    queryId: string;
}
export interface PrimaryKey {
    $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey";
    /** Host of the connected client. */
    host: string;
    /** User ID. */
    user: string;
    /** Database ID. */
    database: string;
    /** Returns [true] if a query is executed as a top-level SQL statement or if the [pg_stat_statements.track](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is set to the value [top]. */
    toplevel: boolean;
    /** Query ID. */
    queryId: string;
    /** Query planning ID. */
    planId: string;
}
export interface QueryStats {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStats";
    /** Time of collecting statistics on planning and execution of queries. */
    time?: Date;
    /** Statement text. */
    query: string;
    /** Normalized query plan. */
    normalizedPlan: string;
    /** Example of a query execution plan (without normalization). */
    examplePlan: string;
    /**
     * Number of times that a query was planned.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning](https://www.postgresql.org/docs/current/pgstatstatements.html#id-1.11.7.41.9) parameter is enabled.
     */
    plans: number;
    /**
     * Total time taken to plan a query, in milliseconds.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
     */
    totalPlanTime: number;
    /**
     * Minimum time taken to plan a query, in milliseconds.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
     */
    minPlanTime: number;
    /**
     * Maximum time taken to plan a query, in milliseconds.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
     */
    maxPlanTime: number;
    /**
     * Average time taken to plan a query, in milliseconds.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
     */
    meanPlanTime: number;
    /**
     * Population standard deviation of the time taken to plan a query, in milliseconds.
     *
     * The parameter returns a non-zero value if the [pg_stat_statements.track_planning] parameter is enabled.
     */
    stddevPlanTime: number;
    /** Number of times that a query was executed. */
    calls: number;
    /** Total time taken to execute a query, in milliseconds. */
    totalTime: number;
    /** Minimum time taken to execute a query, in milliseconds. */
    minTime: number;
    /** Maximum time taken to execute a query, in milliseconds. */
    maxTime: number;
    /** Average time taken to execute a query, in milliseconds. */
    meanTime: number;
    /** Population standard deviation of the time taken to execute a query, in milliseconds. */
    stddevTime: number;
    /** Number of retrieved or affected rows. */
    rows: number;
    /** Number of shared blocks that are hit from cache. */
    sharedBlksHit: number;
    /** Number of read shared blocks. */
    sharedBlksRead: number;
    /** Number of 'dirtied' shared blocks. */
    sharedBlksDirtied: number;
    /** Number of written shared blocks. */
    sharedBlksWritten: number;
    /** Number of local blocks that are hit from cache. */
    localBlksHit: number;
    /** Number of read local blocks. */
    localBlksRead: number;
    /** Number of 'dirtied' local blocks. */
    localBlksDirtied: number;
    /** Number of written local blocks. */
    localBlksWritten: number;
    /** Number of read temporary blocks. */
    tempBlksRead: number;
    /** Number of written temporary blocks. */
    tempBlksWritten: number;
    /**
     * Time taken to read data blocks, in milliseconds.
     *
     * The parameter returns a non-zero value if the [track_io_timing](https://www.postgresql.org/docs/current/runtime-config-statistics.html#GUC-TRACK-IO-TIMING) parameter is enabled.
     */
    blkReadTime: number;
    /**
     * Time taken to record data blocks, in milliseconds.
     *
     * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
     */
    blkWriteTime: number;
    /**
     * Time taken to read temporary data blocks, in milliseconds.
     *
     * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
     */
    tempBlkReadTime: number;
    /**
     * Time taken to record temporary data blocks, in milliseconds.
     *
     * The parameter returns a non-zero value if the [track_io_timing] parameter is enabled.
     */
    tempBlkWriteTime: number;
    /** Number of WAL records generated during a given period. */
    walRecords: number;
    /** Number of WAL full page images generated during a given period. */
    walFpi: number;
    /** Number of WAL logs generated during a given period, in bytes. */
    walBytes: number;
    /** Number of JIT-compiled functions. */
    jitFunctions: number;
    /** Time taken to generate JIT code, in milliseconds. */
    jitGenerationTime: number;
    /** Number of times that functions have been inlined. */
    jitInliningCount: number;
    /** Time taken to inline functions, in milliseconds. */
    jitInliningTime: number;
    /** Number of times that a query was optimized. */
    jitOptimizationCount: number;
    /** Time taken to optimize a query, in milliseconds. */
    jitOptimizationTime: number;
    /** Number of times that code was emitted. */
    jitEmissionCount: number;
    /** Time taken to emit code. */
    jitEmissionTime: number;
    /** Cost of receiving a response to a query before the first row of the response is issued. */
    startupCost: number;
    /** Cost of receiving a response to a query when all the rows of the response are issued. */
    totalCost: number;
    /** Expected number of rows that a given plan node should issue. */
    planRows: number;
    /** Expected average size of rows that a given plan node should issue. */
    planWidth: number;
    /** Number of bytes that the filesystem layer has read. */
    reads: number;
    /** Number of bytes that the filesystem layer has written. */
    writes: number;
    /** User CPU time used. */
    userTime: number;
    /** System CPU time used. */
    systemTime: number;
}
export interface QueryStatement {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement";
    /** Primary keys in tables with the statistics on planning and execution of queries. */
    key?: PrimaryKey;
    /** Statistics on planning and execution of queries. */
    stats?: QueryStats;
}
export declare const SessionState: {
    $type: "yandex.cloud.mdb.postgresql.v1.SessionState";
    encode(message: SessionState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SessionState;
    fromJSON(object: any): SessionState;
    toJSON(message: SessionState): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "host" | "time" | "state" | "database" | "user" | "pid" | "applicationName" | "waitEventType" | "waitEvent" | "query" | "backendType" | "clientAddr" | "clientHostname" | "clientPort" | "backendXid" | "backendXmin" | "blockingPids" | "queryId" | "backendStart" | "xactStart" | "queryStart" | "stateChange">, never>>(object: I): SessionState;
};
export declare const PrimaryKey: {
    $type: "yandex.cloud.mdb.postgresql.v1.PrimaryKey";
    encode(message: PrimaryKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrimaryKey;
    fromJSON(object: any): PrimaryKey;
    toJSON(message: PrimaryKey): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "host" | "database" | "user" | "queryId" | "toplevel" | "planId">, never>>(object: I): PrimaryKey;
};
export declare const QueryStats: {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStats";
    encode(message: QueryStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryStats;
    fromJSON(object: any): QueryStats;
    toJSON(message: QueryStats): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "time" | "query" | "normalizedPlan" | "examplePlan" | "plans" | "totalPlanTime" | "minPlanTime" | "maxPlanTime" | "meanPlanTime" | "stddevPlanTime" | "calls" | "totalTime" | "minTime" | "maxTime" | "meanTime" | "stddevTime" | "rows" | "sharedBlksHit" | "sharedBlksRead" | "sharedBlksDirtied" | "sharedBlksWritten" | "localBlksHit" | "localBlksRead" | "localBlksDirtied" | "localBlksWritten" | "tempBlksRead" | "tempBlksWritten" | "blkReadTime" | "blkWriteTime" | "tempBlkReadTime" | "tempBlkWriteTime" | "walRecords" | "walFpi" | "walBytes" | "jitFunctions" | "jitGenerationTime" | "jitInliningCount" | "jitInliningTime" | "jitOptimizationCount" | "jitOptimizationTime" | "jitEmissionCount" | "jitEmissionTime" | "startupCost" | "totalCost" | "planRows" | "planWidth" | "reads" | "writes" | "userTime" | "systemTime">, never>>(object: I): QueryStats;
};
export declare const QueryStatement: {
    $type: "yandex.cloud.mdb.postgresql.v1.QueryStatement";
    encode(message: QueryStatement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryStatement;
    fromJSON(object: any): QueryStatement;
    toJSON(message: QueryStatement): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["key"], "$type" | "host" | "database" | "user" | "queryId" | "toplevel" | "planId">, never>) | undefined;
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
        } & Record<Exclude<keyof I["stats"], "$type" | "time" | "query" | "normalizedPlan" | "examplePlan" | "plans" | "totalPlanTime" | "minPlanTime" | "maxPlanTime" | "meanPlanTime" | "stddevPlanTime" | "calls" | "totalTime" | "minTime" | "maxTime" | "meanTime" | "stddevTime" | "rows" | "sharedBlksHit" | "sharedBlksRead" | "sharedBlksDirtied" | "sharedBlksWritten" | "localBlksHit" | "localBlksRead" | "localBlksDirtied" | "localBlksWritten" | "tempBlksRead" | "tempBlksWritten" | "blkReadTime" | "blkWriteTime" | "tempBlkReadTime" | "tempBlkWriteTime" | "walRecords" | "walFpi" | "walBytes" | "jitFunctions" | "jitGenerationTime" | "jitInliningCount" | "jitInliningTime" | "jitOptimizationCount" | "jitOptimizationTime" | "jitEmissionCount" | "jitEmissionTime" | "startupCost" | "totalCost" | "planRows" | "planWidth" | "reads" | "writes" | "userTime" | "systemTime">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "key" | "stats">, never>>(object: I): QueryStatement;
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
