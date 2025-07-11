import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.dataproc.v1";
/** A Data Proc job. For details about the concept, see [documentation](/docs/data-proc/concepts/jobs). */
export interface Job {
    $type: "yandex.cloud.dataproc.v1.Job";
    /** ID of the job. Generated at creation time. */
    id: string;
    /** ID of the Data Proc cluster that the job belongs to. */
    clusterId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /** The time when the job was started. */
    startedAt?: Date;
    /** The time when the job was finished. */
    finishedAt?: Date;
    /** Name of the job, specified in the [JobService.Create] request. */
    name: string;
    /** The id of the user who created the job */
    createdBy: string;
    /** Job status. */
    status: Job_Status;
    /** Specification for a MapReduce job. */
    mapreduceJob?: MapreduceJob | undefined;
    /** Specification for a Spark job. */
    sparkJob?: SparkJob | undefined;
    /** Specification for a PySpark job. */
    pysparkJob?: PysparkJob | undefined;
    /** Specification for a Hive job. */
    hiveJob?: HiveJob | undefined;
    /** Attributes of YARN application. */
    applicationInfo?: ApplicationInfo;
}
export declare enum Job_Status {
    STATUS_UNSPECIFIED = 0,
    /** PROVISIONING - Job is logged in the database and is waiting for the agent to run it. */
    PROVISIONING = 1,
    /** PENDING - Job is acquired by the agent and is in the queue for execution. */
    PENDING = 2,
    /** RUNNING - Job is being run in the cluster. */
    RUNNING = 3,
    /** ERROR - Job failed to finish the run properly. */
    ERROR = 4,
    /** DONE - Job is finished. */
    DONE = 5,
    /** CANCELLED - Job is cancelled. */
    CANCELLED = 6,
    /** CANCELLING - Job is waiting for cancellation. */
    CANCELLING = 7,
    UNRECOGNIZED = -1
}
export declare function job_StatusFromJSON(object: any): Job_Status;
export declare function job_StatusToJSON(object: Job_Status): string;
export interface ApplicationAttempt {
    $type: "yandex.cloud.dataproc.v1.ApplicationAttempt";
    /** ID of YARN application attempt */
    id: string;
    /** ID of YARN Application Master container */
    amContainerId: string;
}
export interface ApplicationInfo {
    $type: "yandex.cloud.dataproc.v1.ApplicationInfo";
    /** ID of YARN application */
    id: string;
    /** YARN application attempts */
    applicationAttempts: ApplicationAttempt[];
}
export interface MapreduceJob {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob";
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and MapReduce. */
    properties: {
        [key: string]: string;
    };
    /** HCFS URI of the .jar file containing the driver class. */
    mainJarFileUri: string | undefined;
    /** The name of the driver class. */
    mainClass: string | undefined;
}
export interface MapreduceJob_PropertiesEntry {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry";
    key: string;
    value: string;
}
export interface SparkJob {
    $type: "yandex.cloud.dataproc.v1.SparkJob";
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and Spark. */
    properties: {
        [key: string]: string;
    };
    /** The HCFS URI of the JAR file containing the `main` class for the job. */
    mainJarFileUri: string;
    /** The name of the driver class. */
    mainClass: string;
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}
export interface SparkJob_PropertiesEntry {
    $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry";
    key: string;
    value: string;
}
export interface PysparkJob {
    $type: "yandex.cloud.dataproc.v1.PysparkJob";
    /** Optional arguments to pass to the driver. */
    args: string[];
    /** JAR file URIs to add to CLASSPATH of the Data Proc driver and each task. */
    jarFileUris: string[];
    /**
     * URIs of resource files to be copied to the working directory of Data Proc drivers
     * and distributed Hadoop tasks.
     */
    fileUris: string[];
    /** URIs of archives to be extracted to the working directory of Data Proc drivers and tasks. */
    archiveUris: string[];
    /** Property names and values, used to configure Data Proc and PySpark. */
    properties: {
        [key: string]: string;
    };
    /** URI of the file with the driver code. Must be a .py file. */
    mainPythonFileUri: string;
    /** URIs of Python files to pass to the PySpark framework. */
    pythonFileUris: string[];
    /** List of maven coordinates of jars to include on the driver and executor classpaths. */
    packages: string[];
    /** List of additional remote repositories to search for the maven coordinates given with --packages. */
    repositories: string[];
    /** List of groupId:artifactId, to exclude while resolving the dependencies provided in --packages to avoid dependency conflicts. */
    excludePackages: string[];
}
export interface PysparkJob_PropertiesEntry {
    $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry";
    key: string;
    value: string;
}
export interface QueryList {
    $type: "yandex.cloud.dataproc.v1.QueryList";
    /** List of Hive queries. */
    queries: string[];
}
export interface HiveJob {
    $type: "yandex.cloud.dataproc.v1.HiveJob";
    /** Property names and values, used to configure Data Proc and Hive. */
    properties: {
        [key: string]: string;
    };
    /** Flag indicating whether a job should continue to run if a query fails. */
    continueOnFailure: boolean;
    /** Query variables and their values. */
    scriptVariables: {
        [key: string]: string;
    };
    /** JAR file URIs to add to CLASSPATH of the Hive driver and each task. */
    jarFileUris: string[];
    /** URI of the script with all the necessary Hive queries. */
    queryFileUri: string | undefined;
    /** List of Hive queries to be used in the job. */
    queryList?: QueryList | undefined;
}
export interface HiveJob_PropertiesEntry {
    $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry";
    key: string;
    value: string;
}
export interface HiveJob_ScriptVariablesEntry {
    $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry";
    key: string;
    value: string;
}
export declare const Job: {
    $type: "yandex.cloud.dataproc.v1.Job";
    encode(message: Job, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Job;
    fromJSON(object: any): Job;
    toJSON(message: Job): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, "$type" | "id" | "name" | "createdBy" | "createdAt" | "status" | "startedAt" | "clusterId" | "finishedAt" | "mapreduceJob" | "sparkJob" | "pysparkJob" | "hiveJob" | "applicationInfo">, never>>(object: I): Job;
};
export declare const ApplicationAttempt: {
    $type: "yandex.cloud.dataproc.v1.ApplicationAttempt";
    encode(message: ApplicationAttempt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationAttempt;
    fromJSON(object: any): ApplicationAttempt;
    toJSON(message: ApplicationAttempt): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        amContainerId?: string | undefined;
    } & {
        id?: string | undefined;
        amContainerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "amContainerId">, never>>(object: I): ApplicationAttempt;
};
export declare const ApplicationInfo: {
    $type: "yandex.cloud.dataproc.v1.ApplicationInfo";
    encode(message: ApplicationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ApplicationInfo;
    fromJSON(object: any): ApplicationInfo;
    toJSON(message: ApplicationInfo): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["applicationAttempts"][number], "$type" | "id" | "amContainerId">, never>)[] & Record<Exclude<keyof I["applicationAttempts"], "$type" | keyof {
            id?: string | undefined;
            amContainerId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "applicationAttempts">, never>>(object: I): ApplicationInfo;
};
export declare const MapreduceJob: {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob";
    encode(message: MapreduceJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob;
    fromJSON(object: any): MapreduceJob;
    toJSON(message: MapreduceJob): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
        jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
        fileUris?: (string[] & string[] & Record<Exclude<keyof I["fileUris"], "$type" | keyof string[]>, never>) | undefined;
        archiveUris?: (string[] & string[] & Record<Exclude<keyof I["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
        mainJarFileUri?: string | undefined;
        mainClass?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass">, never>>(object: I): MapreduceJob;
};
export declare const MapreduceJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.MapreduceJob.PropertiesEntry";
    encode(message: MapreduceJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MapreduceJob_PropertiesEntry;
    fromJSON(object: any): MapreduceJob_PropertiesEntry;
    toJSON(message: MapreduceJob_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): MapreduceJob_PropertiesEntry;
};
export declare const SparkJob: {
    $type: "yandex.cloud.dataproc.v1.SparkJob";
    encode(message: SparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob;
    fromJSON(object: any): SparkJob;
    toJSON(message: SparkJob): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        repositories?: (string[] & string[] & Record<Exclude<keyof I["repositories"], "$type" | keyof string[]>, never>) | undefined;
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
        jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
        fileUris?: (string[] & string[] & Record<Exclude<keyof I["fileUris"], "$type" | keyof string[]>, never>) | undefined;
        archiveUris?: (string[] & string[] & Record<Exclude<keyof I["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
        mainJarFileUri?: string | undefined;
        mainClass?: string | undefined;
        packages?: (string[] & string[] & Record<Exclude<keyof I["packages"], "$type" | keyof string[]>, never>) | undefined;
        excludePackages?: (string[] & string[] & Record<Exclude<keyof I["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "mainJarFileUri" | "mainClass" | "packages" | "excludePackages">, never>>(object: I): SparkJob;
};
export declare const SparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.SparkJob.PropertiesEntry";
    encode(message: SparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SparkJob_PropertiesEntry;
    fromJSON(object: any): SparkJob_PropertiesEntry;
    toJSON(message: SparkJob_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SparkJob_PropertiesEntry;
};
export declare const PysparkJob: {
    $type: "yandex.cloud.dataproc.v1.PysparkJob";
    encode(message: PysparkJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob;
    fromJSON(object: any): PysparkJob;
    toJSON(message: PysparkJob): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        repositories?: (string[] & string[] & Record<Exclude<keyof I["repositories"], "$type" | keyof string[]>, never>) | undefined;
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
        jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
        fileUris?: (string[] & string[] & Record<Exclude<keyof I["fileUris"], "$type" | keyof string[]>, never>) | undefined;
        archiveUris?: (string[] & string[] & Record<Exclude<keyof I["archiveUris"], "$type" | keyof string[]>, never>) | undefined;
        packages?: (string[] & string[] & Record<Exclude<keyof I["packages"], "$type" | keyof string[]>, never>) | undefined;
        excludePackages?: (string[] & string[] & Record<Exclude<keyof I["excludePackages"], "$type" | keyof string[]>, never>) | undefined;
        mainPythonFileUri?: string | undefined;
        pythonFileUris?: (string[] & string[] & Record<Exclude<keyof I["pythonFileUris"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "repositories" | "args" | "jarFileUris" | "fileUris" | "archiveUris" | "packages" | "excludePackages" | "mainPythonFileUri" | "pythonFileUris">, never>>(object: I): PysparkJob;
};
export declare const PysparkJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.PysparkJob.PropertiesEntry";
    encode(message: PysparkJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PysparkJob_PropertiesEntry;
    fromJSON(object: any): PysparkJob_PropertiesEntry;
    toJSON(message: PysparkJob_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): PysparkJob_PropertiesEntry;
};
export declare const QueryList: {
    $type: "yandex.cloud.dataproc.v1.QueryList";
    encode(message: QueryList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryList;
    fromJSON(object: any): QueryList;
    toJSON(message: QueryList): unknown;
    fromPartial<I extends {
        queries?: string[] | undefined;
    } & {
        queries?: (string[] & string[] & Record<Exclude<keyof I["queries"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "queries">, never>>(object: I): QueryList;
};
export declare const HiveJob: {
    $type: "yandex.cloud.dataproc.v1.HiveJob";
    encode(message: HiveJob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob;
    fromJSON(object: any): HiveJob;
    toJSON(message: HiveJob): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["properties"], string | number>, never>) | undefined;
        jarFileUris?: (string[] & string[] & Record<Exclude<keyof I["jarFileUris"], "$type" | keyof string[]>, never>) | undefined;
        continueOnFailure?: boolean | undefined;
        scriptVariables?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["scriptVariables"], string | number>, never>) | undefined;
        queryFileUri?: string | undefined;
        queryList?: ({
            queries?: string[] | undefined;
        } & {
            queries?: (string[] & string[] & Record<Exclude<keyof I["queryList"]["queries"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["queryList"], "$type" | "queries">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "properties" | "jarFileUris" | "continueOnFailure" | "scriptVariables" | "queryFileUri" | "queryList">, never>>(object: I): HiveJob;
};
export declare const HiveJob_PropertiesEntry: {
    $type: "yandex.cloud.dataproc.v1.HiveJob.PropertiesEntry";
    encode(message: HiveJob_PropertiesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob_PropertiesEntry;
    fromJSON(object: any): HiveJob_PropertiesEntry;
    toJSON(message: HiveJob_PropertiesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): HiveJob_PropertiesEntry;
};
export declare const HiveJob_ScriptVariablesEntry: {
    $type: "yandex.cloud.dataproc.v1.HiveJob.ScriptVariablesEntry";
    encode(message: HiveJob_ScriptVariablesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HiveJob_ScriptVariablesEntry;
    fromJSON(object: any): HiveJob_ScriptVariablesEntry;
    toJSON(message: HiveJob_ScriptVariablesEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): HiveJob_ScriptVariablesEntry;
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
