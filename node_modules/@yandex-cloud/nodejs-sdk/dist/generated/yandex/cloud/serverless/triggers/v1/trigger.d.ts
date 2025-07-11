import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
import { LogLevel_Level } from "../../../../../yandex/cloud/logging/v1/log_entry";
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export declare enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,
    /** TIMER - The trigger is activated on a timer. */
    TIMER = 2,
    /**
     * MESSAGE_QUEUE - The trigger is activated by messages from a message queue.
     *
     * Only Message Queue is currently supported.
     */
    MESSAGE_QUEUE = 3,
    /** IOT_MESSAGE - The trigger is activated by messages from IoT Core. */
    IOT_MESSAGE = 4,
    IOT_BROKER_MESSAGE = 12,
    OBJECT_STORAGE = 5,
    CONTAINER_REGISTRY = 6,
    /** CLOUD_LOGS - The trigger is activated by cloud log group events */
    CLOUD_LOGS = 7,
    /** LOGGING - The trigger is activated by logging group events */
    LOGGING = 8,
    /** BILLING_BUDGET - The trigger is activated by billing events */
    BILLING_BUDGET = 9,
    /** YDS - The trigger is activated by YDS events */
    YDS = 10,
    /** MAIL - The trigger is activated by email */
    MAIL = 11,
    UNRECOGNIZED = -1
}
export declare function triggerTypeFromJSON(object: any): TriggerType;
export declare function triggerTypeToJSON(object: TriggerType): string;
/** A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger). */
export interface Trigger {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger";
    /** ID of the trigger. Generated at creation time. */
    id: string;
    /** ID of the folder that the trigger belongs to. */
    folderId: string;
    /** Creation timestamp for the trigger. */
    createdAt?: Date;
    /** Name of the trigger. */
    name: string;
    /** Description of the trigger. */
    description: string;
    /** Trigger labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Rule for trigger activation (always consistent with the trigger type). */
    rule?: Trigger_Rule;
    /** Trigger status. */
    status: Trigger_Status;
}
export declare enum Trigger_ObjectStorageEventType {
    OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,
    OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,
    OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,
    OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
    UNRECOGNIZED = -1
}
export declare function trigger_ObjectStorageEventTypeFromJSON(object: any): Trigger_ObjectStorageEventType;
export declare function trigger_ObjectStorageEventTypeToJSON(object: Trigger_ObjectStorageEventType): string;
export declare enum Trigger_ContainerRegistryEventType {
    CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,
    CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,
    CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
    UNRECOGNIZED = -1
}
export declare function trigger_ContainerRegistryEventTypeFromJSON(object: any): Trigger_ContainerRegistryEventType;
export declare function trigger_ContainerRegistryEventTypeToJSON(object: Trigger_ContainerRegistryEventType): string;
export declare enum Trigger_Status {
    STATUS_UNSPECIFIED = 0,
    ACTIVE = 1,
    PAUSED = 2,
    UNRECOGNIZED = -1
}
export declare function trigger_StatusFromJSON(object: any): Trigger_Status;
export declare function trigger_StatusToJSON(object: Trigger_Status): string;
export interface Trigger_LabelsEntry {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry";
    key: string;
    value: string;
}
/** Description of a rule for trigger activation. */
export interface Trigger_Rule {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule";
    /** Rule for a timed trigger. */
    timer?: Trigger_Timer | undefined;
    /** Rule for a message queue trigger. */
    messageQueue?: Trigger_MessageQueue | undefined;
    /** Rule for a IoT Core trigger. */
    iotMessage?: Trigger_IoTMessage | undefined;
    iotBrokerMessage?: Trigger_IoTBrokerMessage | undefined;
    objectStorage?: Trigger_ObjectStorage | undefined;
    containerRegistry?: Trigger_ContainerRegistry | undefined;
    cloudLogs?: Trigger_CloudLogs | undefined;
    logging?: Trigger_Logging | undefined;
    billingBudget?: BillingBudget | undefined;
    dataStream?: DataStream | undefined;
    mail?: Mail | undefined;
}
/** Rule for activating a timed trigger. */
export interface Trigger_Timer {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer";
    /** Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer). */
    cronExpression: string;
    /** Payload to be passed to function. */
    payload: string;
    /** Instructions for invoking a function once. */
    invokeFunction?: InvokeFunctionOnce | undefined;
    /** Instructions for invoking a function with retry. */
    invokeFunctionWithRetry?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retry. */
    invokeContainerWithRetry?: InvokeContainerWithRetry | undefined;
}
/** Rule for activating a message queue trigger. */
export interface Trigger_MessageQueue {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue";
    /** ID of the message queue in Message Queue. */
    queueId: string;
    /** ID of the service account which has read access to the message queue. */
    serviceAccountId: string;
    /** Batch settings for processing messages in the queue. */
    batchSettings?: BatchSettings;
    /** Queue visibility timeout override. */
    visibilityTimeout?: Duration;
    /** Instructions for invoking a function once. */
    invokeFunction?: InvokeFunctionOnce | undefined;
    /** Instructions for invoking a container once. */
    invokeContainer?: InvokeContainerOnce | undefined;
}
/** Rule for activating a IoT Core trigger. */
export interface Trigger_IoTMessage {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage";
    /** ID of the IoT Core registry. */
    registryId: string;
    /** ID of the IoT Core device in the registry. */
    deviceId: string;
    /** MQTT topic whose messages activate the trigger. */
    mqttTopic: string;
    /** Batch settings for processing events. */
    batchSettings?: BatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
/** Rule for activating a IoT Core Broker trigger. */
export interface Trigger_IoTBrokerMessage {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage";
    /** ID of the IoT Core broker. */
    brokerId: string;
    /** MQTT topic whose messages activate the trigger. */
    mqttTopic: string;
    /** Batch settings for processing events. */
    batchSettings?: BatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface Trigger_ObjectStorage {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage";
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ObjectStorageEventType[];
    /** ID of the bucket. */
    bucketId: string;
    /** Prefix of the object key. Filter, optional. */
    prefix: string;
    /** Suffix of the object key. Filter, optional. */
    suffix: string;
    /** Batch settings for processing events. */
    batchSettings?: BatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface Trigger_ContainerRegistry {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry";
    /** Type (name) of events, at least one value is required. */
    eventType: Trigger_ContainerRegistryEventType[];
    /** ID of the registry. */
    registryId: string;
    /** Docker-image name. Filter, optional. */
    imageName: string;
    /** Docker-image tag. Filter, optional. */
    tag: string;
    /** Batch settings for processing events. */
    batchSettings?: BatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface Trigger_CloudLogs {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs";
    /** Log group identifiers, at least one value is required. */
    logGroupId: string[];
    /** Batch settings for processing log events. */
    batchSettings?: CloudLogsBatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface Trigger_Logging {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging";
    /** Log events filter settings. */
    logGroupId: string;
    resourceType: string[];
    resourceId: string[];
    streamName: string[];
    levels: LogLevel_Level[];
    /** Batch settings for processing log events. */
    batchSettings?: LoggingBatchSettings;
    /** Instructions for invoking a function with retries as needed. */
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    /** Instructions for invoking a container with retries as needed. */
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
/** A single function invocation. */
export interface InvokeFunctionOnce {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce";
    /** ID of the function to invoke. */
    functionId: string;
    /** Version tag of the function to execute. */
    functionTag: string;
    /** ID of the service account that should be used to invoke the function. */
    serviceAccountId: string;
}
/** A function invocation with retries. */
export interface InvokeFunctionWithRetry {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry";
    /** ID of the function to invoke. */
    functionId: string;
    /** Version tag of the function to execute. */
    functionTag: string;
    /** ID of the service account which has permission to invoke the function. */
    serviceAccountId: string;
    /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
    retrySettings?: RetrySettings;
    /** DLQ policy (no value means discarding a message). */
    deadLetterQueue?: PutQueueMessage;
}
/** A single container invocation. */
export interface InvokeContainerOnce {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce";
    /** ID of the container to invoke. */
    containerId: string;
    /** Endpoint HTTP path to invoke. */
    path: string;
    /** ID of the service account which has permission to invoke the container. */
    serviceAccountId: string;
}
/** A container invocation with retries. */
export interface InvokeContainerWithRetry {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry";
    /** ID of the container to invoke. */
    containerId: string;
    /** Endpoint HTTP path to invoke. */
    path: string;
    /** ID of the service account which has permission to invoke the container. */
    serviceAccountId: string;
    /** Retry policy. If the field is not specified, or the value is empty, no retries will be attempted. */
    retrySettings?: RetrySettings;
    /** DLQ policy (no value means discarding a message). */
    deadLetterQueue?: PutQueueMessage;
}
export interface PutQueueMessage {
    $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage";
    /** ID of the queue. */
    queueId: string;
    /** Service account which has write permission on the queue. */
    serviceAccountId: string;
}
/** Settings for batch processing of messages in a queue. */
export interface BatchSettings {
    $type: "yandex.cloud.serverless.triggers.v1.BatchSettings";
    /**
     * Batch size. Trigger will send the batch of messages to the function
     * when the number of messages in the queue reaches [size], or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages to the function when
     * the number of messages in the queue reaches [size], or the [cutoff] time has passed.
     */
    cutoff?: Duration;
}
export interface CloudLogsBatchSettings {
    $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings";
    /**
     * Batch size. Trigger will send the batch of messages to the function
     * when the number of messages in the log group reaches [size], or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages to the function when
     * the number of messages in the log group reaches [size], or the [cutoff] time has passed.
     */
    cutoff?: Duration;
}
export interface LoggingBatchSettings {
    $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings";
    /**
     * Batch size. Trigger will send the batch of messages to the associated function
     * when the number of log events reaches this value, or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages the time since the last batch
     * exceeds the `cutoff` value, regardless of the amount of log events.
     */
    cutoff?: Duration;
}
/** Settings for retrying to invoke a function. */
export interface RetrySettings {
    $type: "yandex.cloud.serverless.triggers.v1.RetrySettings";
    /** Maximum number of retries (extra invokes) before the action is considered failed. */
    retryAttempts: number;
    /** Time in seconds to wait between individual retries. */
    interval?: Duration;
}
export interface BillingBudget {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget";
    billingAccountId: string;
    budgetId: string;
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface DataStreamBatchSettings {
    $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings";
    /**
     * Batch size in bytes. Trigger will send the batch of messages to the associated function
     * when size of log events reaches this value, or the [cutoff] time has passed.
     */
    size: number;
    /**
     * Maximum wait time. Trigger will send the batch of messages the time since the last batch
     * exceeds the `cutoff` value, regardless of the amount of log events.
     */
    cutoff?: Duration;
}
export interface DataStream {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream";
    /** Data stream endpoint. */
    endpoint: string;
    /** Data stream database. */
    database: string;
    /** Stream name. */
    stream: string;
    /** ID of the service account which has permission to read data stream. */
    serviceAccountId: string;
    /** Batch settings for processing events. */
    batchSettings?: DataStreamBatchSettings;
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export interface ObjectStorageBucketSettings {
    $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings";
    /** Bucket for saving. */
    bucketId: string;
    /** SA which has write permission on storage. */
    serviceAccountId: string;
}
export interface Mail {
    $type: "yandex.cloud.serverless.triggers.v1.Mail";
    /**
     * Address to receive emails for trigger activation.
     * Field is ignored for write requests and populated on trigger creation.
     */
    email: string;
    /** Batch settings for processing events. */
    batchSettings?: BatchSettings;
    /** Bucket settings for saving attachments. */
    attachmentsBucket?: ObjectStorageBucketSettings;
    invokeFunction?: InvokeFunctionWithRetry | undefined;
    invokeContainer?: InvokeContainerWithRetry | undefined;
}
export declare const Trigger: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger";
    encode(message: Trigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger;
    fromJSON(object: any): Trigger;
    toJSON(message: Trigger): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Trigger_Status | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        rule?: {
            dataStream?: {
                stream?: string | undefined;
                serviceAccountId?: string | undefined;
                database?: string | undefined;
                endpoint?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            timer?: {
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                cronExpression?: string | undefined;
                payload?: string | undefined;
                invokeFunctionWithRetry?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainerWithRetry?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            messageQueue?: {
                serviceAccountId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                } | undefined;
                queueId?: string | undefined;
                visibilityTimeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            iotMessage?: {
                registryId?: string | undefined;
                deviceId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } | undefined;
            iotBrokerMessage?: {
                brokerId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } | undefined;
            objectStorage?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                suffix?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ObjectStorageEventType[] | undefined;
            } | undefined;
            containerRegistry?: {
                registryId?: string | undefined;
                tag?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ContainerRegistryEventType[] | undefined;
                imageName?: string | undefined;
            } | undefined;
            cloudLogs?: {
                logGroupId?: string[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            logging?: {
                resourceId?: string[] | undefined;
                logGroupId?: string | undefined;
                streamName?: string[] | undefined;
                levels?: LogLevel_Level[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                resourceType?: string[] | undefined;
            } | undefined;
            billingBudget?: {
                billingAccountId?: string | undefined;
                budgetId?: string | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            mail?: {
                email?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                attachmentsBucket?: {
                    serviceAccountId?: string | undefined;
                    bucketId?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        status?: Trigger_Status | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        rule?: ({
            dataStream?: {
                stream?: string | undefined;
                serviceAccountId?: string | undefined;
                database?: string | undefined;
                endpoint?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            timer?: {
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                cronExpression?: string | undefined;
                payload?: string | undefined;
                invokeFunctionWithRetry?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainerWithRetry?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            messageQueue?: {
                serviceAccountId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                } | undefined;
                queueId?: string | undefined;
                visibilityTimeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            iotMessage?: {
                registryId?: string | undefined;
                deviceId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } | undefined;
            iotBrokerMessage?: {
                brokerId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } | undefined;
            objectStorage?: {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                suffix?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ObjectStorageEventType[] | undefined;
            } | undefined;
            containerRegistry?: {
                registryId?: string | undefined;
                tag?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ContainerRegistryEventType[] | undefined;
                imageName?: string | undefined;
            } | undefined;
            cloudLogs?: {
                logGroupId?: string[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            logging?: {
                resourceId?: string[] | undefined;
                logGroupId?: string | undefined;
                streamName?: string[] | undefined;
                levels?: LogLevel_Level[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                resourceType?: string[] | undefined;
            } | undefined;
            billingBudget?: {
                billingAccountId?: string | undefined;
                budgetId?: string | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            mail?: {
                email?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                attachmentsBucket?: {
                    serviceAccountId?: string | undefined;
                    bucketId?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            dataStream?: ({
                stream?: string | undefined;
                serviceAccountId?: string | undefined;
                database?: string | undefined;
                endpoint?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                stream?: string | undefined;
                serviceAccountId?: string | undefined;
                database?: string | undefined;
                endpoint?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["dataStream"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["dataStream"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["dataStream"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["dataStream"], "$type" | "stream" | "serviceAccountId" | "database" | "endpoint" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
            timer?: ({
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                cronExpression?: string | undefined;
                payload?: string | undefined;
                invokeFunctionWithRetry?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainerWithRetry?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } & Record<Exclude<keyof I["rule"]["timer"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
                cronExpression?: string | undefined;
                payload?: string | undefined;
                invokeFunctionWithRetry?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["timer"]["invokeFunctionWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["timer"]["invokeFunctionWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["timer"]["invokeFunctionWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["timer"]["invokeFunctionWithRetry"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainerWithRetry?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["timer"]["invokeContainerWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["timer"]["invokeContainerWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["timer"]["invokeContainerWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["timer"]["invokeContainerWithRetry"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["timer"], "$type" | "invokeFunction" | "cronExpression" | "payload" | "invokeFunctionWithRetry" | "invokeContainerWithRetry">, never>) | undefined;
            messageQueue?: ({
                serviceAccountId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                } | undefined;
                queueId?: string | undefined;
                visibilityTimeout?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["messageQueue"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["messageQueue"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                } & Record<Exclude<keyof I["rule"]["messageQueue"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                } & Record<Exclude<keyof I["rule"]["messageQueue"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId">, never>) | undefined;
                queueId?: string | undefined;
                visibilityTimeout?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["rule"]["messageQueue"]["visibilityTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["messageQueue"], "$type" | "serviceAccountId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "queueId" | "visibilityTimeout">, never>) | undefined;
            iotMessage?: ({
                registryId?: string | undefined;
                deviceId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } & {
                registryId?: string | undefined;
                deviceId?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                mqttTopic?: string | undefined;
            } & Record<Exclude<keyof I["rule"]["iotMessage"], "$type" | "registryId" | "deviceId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
            iotBrokerMessage?: ({
                brokerId?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                mqttTopic?: string | undefined;
            } & {
                brokerId?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                mqttTopic?: string | undefined;
            } & Record<Exclude<keyof I["rule"]["iotBrokerMessage"], "$type" | "brokerId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
            objectStorage?: ({
                prefix?: string | undefined;
                bucketId?: string | undefined;
                suffix?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ObjectStorageEventType[] | undefined;
            } & {
                prefix?: string | undefined;
                bucketId?: string | undefined;
                suffix?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["objectStorage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["objectStorage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["objectStorage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                eventType?: (Trigger_ObjectStorageEventType[] & Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["rule"]["objectStorage"]["eventType"], "$type" | keyof Trigger_ObjectStorageEventType[]>, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["objectStorage"], "$type" | "prefix" | "bucketId" | "suffix" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType">, never>) | undefined;
            containerRegistry?: ({
                registryId?: string | undefined;
                tag?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                eventType?: Trigger_ContainerRegistryEventType[] | undefined;
                imageName?: string | undefined;
            } & {
                registryId?: string | undefined;
                tag?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["containerRegistry"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["containerRegistry"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["containerRegistry"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                eventType?: (Trigger_ContainerRegistryEventType[] & Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["rule"]["containerRegistry"]["eventType"], "$type" | keyof Trigger_ContainerRegistryEventType[]>, never>) | undefined;
                imageName?: string | undefined;
            } & Record<Exclude<keyof I["rule"]["containerRegistry"], "$type" | "registryId" | "tag" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType" | "imageName">, never>) | undefined;
            cloudLogs?: ({
                logGroupId?: string[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                logGroupId?: (string[] & string[] & Record<Exclude<keyof I["rule"]["cloudLogs"]["logGroupId"], "$type" | keyof string[]>, never>) | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["cloudLogs"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["cloudLogs"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["cloudLogs"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["cloudLogs"], "$type" | "logGroupId" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
            logging?: ({
                resourceId?: string[] | undefined;
                logGroupId?: string | undefined;
                streamName?: string[] | undefined;
                levels?: LogLevel_Level[] | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                resourceType?: string[] | undefined;
            } & {
                resourceId?: (string[] & string[] & Record<Exclude<keyof I["rule"]["logging"]["resourceId"], "$type" | keyof string[]>, never>) | undefined;
                logGroupId?: string | undefined;
                streamName?: (string[] & string[] & Record<Exclude<keyof I["rule"]["logging"]["streamName"], "$type" | keyof string[]>, never>) | undefined;
                levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["rule"]["logging"]["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["logging"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["logging"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["logging"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["logging"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["logging"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["logging"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["logging"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["logging"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["logging"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["logging"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                resourceType?: (string[] & string[] & Record<Exclude<keyof I["rule"]["logging"]["resourceType"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["logging"], "$type" | "resourceId" | "logGroupId" | "streamName" | "levels" | "batchSettings" | "invokeFunction" | "invokeContainer" | "resourceType">, never>) | undefined;
            billingBudget?: ({
                billingAccountId?: string | undefined;
                budgetId?: string | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                billingAccountId?: string | undefined;
                budgetId?: string | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["billingBudget"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["billingBudget"], "$type" | "billingAccountId" | "budgetId" | "invokeFunction" | "invokeContainer">, never>) | undefined;
            mail?: ({
                email?: string | undefined;
                batchSettings?: {
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                invokeFunction?: {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                invokeContainer?: {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } | undefined;
                attachmentsBucket?: {
                    serviceAccountId?: string | undefined;
                    bucketId?: string | undefined;
                } | undefined;
            } & {
                email?: string | undefined;
                batchSettings?: ({
                    size?: number | undefined;
                    cutoff?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    size?: number | undefined;
                    cutoff?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["mail"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["mail"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                invokeFunction?: ({
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    functionId?: string | undefined;
                    functionTag?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["mail"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["mail"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["mail"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["mail"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                invokeContainer?: ({
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: {
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } | undefined;
                    deadLetterQueue?: {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } | undefined;
                } & {
                    path?: string | undefined;
                    serviceAccountId?: string | undefined;
                    containerId?: string | undefined;
                    retrySettings?: ({
                        interval?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        retryAttempts?: number | undefined;
                    } & {
                        interval?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["rule"]["mail"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                        retryAttempts?: number | undefined;
                    } & Record<Exclude<keyof I["rule"]["mail"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                    deadLetterQueue?: ({
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        queueId?: string | undefined;
                    } & Record<Exclude<keyof I["rule"]["mail"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                } & Record<Exclude<keyof I["rule"]["mail"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                attachmentsBucket?: ({
                    serviceAccountId?: string | undefined;
                    bucketId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    bucketId?: string | undefined;
                } & Record<Exclude<keyof I["rule"]["mail"]["attachmentsBucket"], "$type" | "serviceAccountId" | "bucketId">, never>) | undefined;
            } & Record<Exclude<keyof I["rule"]["mail"], "$type" | "email" | "batchSettings" | "invokeFunction" | "invokeContainer" | "attachmentsBucket">, never>) | undefined;
        } & Record<Exclude<keyof I["rule"], "$type" | "dataStream" | "timer" | "messageQueue" | "iotMessage" | "iotBrokerMessage" | "objectStorage" | "containerRegistry" | "cloudLogs" | "logging" | "billingBudget" | "mail">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "rule">, never>>(object: I): Trigger;
};
export declare const Trigger_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.LabelsEntry";
    encode(message: Trigger_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_LabelsEntry;
    fromJSON(object: any): Trigger_LabelsEntry;
    toJSON(message: Trigger_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Trigger_LabelsEntry;
};
export declare const Trigger_Rule: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Rule";
    encode(message: Trigger_Rule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Rule;
    fromJSON(object: any): Trigger_Rule;
    toJSON(message: Trigger_Rule): unknown;
    fromPartial<I extends {
        dataStream?: {
            stream?: string | undefined;
            serviceAccountId?: string | undefined;
            database?: string | undefined;
            endpoint?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        timer?: {
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } | undefined;
            cronExpression?: string | undefined;
            payload?: string | undefined;
            invokeFunctionWithRetry?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainerWithRetry?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        messageQueue?: {
            serviceAccountId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
            } | undefined;
            queueId?: string | undefined;
            visibilityTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        iotMessage?: {
            registryId?: string | undefined;
            deviceId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            mqttTopic?: string | undefined;
        } | undefined;
        iotBrokerMessage?: {
            brokerId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            mqttTopic?: string | undefined;
        } | undefined;
        objectStorage?: {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            suffix?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            eventType?: Trigger_ObjectStorageEventType[] | undefined;
        } | undefined;
        containerRegistry?: {
            registryId?: string | undefined;
            tag?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            eventType?: Trigger_ContainerRegistryEventType[] | undefined;
            imageName?: string | undefined;
        } | undefined;
        cloudLogs?: {
            logGroupId?: string[] | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        logging?: {
            resourceId?: string[] | undefined;
            logGroupId?: string | undefined;
            streamName?: string[] | undefined;
            levels?: LogLevel_Level[] | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            resourceType?: string[] | undefined;
        } | undefined;
        billingBudget?: {
            billingAccountId?: string | undefined;
            budgetId?: string | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        mail?: {
            email?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            attachmentsBucket?: {
                serviceAccountId?: string | undefined;
                bucketId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        dataStream?: ({
            stream?: string | undefined;
            serviceAccountId?: string | undefined;
            database?: string | undefined;
            endpoint?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            stream?: string | undefined;
            serviceAccountId?: string | undefined;
            database?: string | undefined;
            endpoint?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["dataStream"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["dataStream"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["dataStream"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["dataStream"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["dataStream"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["dataStream"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["dataStream"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["dataStream"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["dataStream"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["dataStream"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        } & Record<Exclude<keyof I["dataStream"], "$type" | "stream" | "serviceAccountId" | "database" | "endpoint" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
        timer?: ({
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } | undefined;
            cronExpression?: string | undefined;
            payload?: string | undefined;
            invokeFunctionWithRetry?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainerWithRetry?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } & Record<Exclude<keyof I["timer"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
            cronExpression?: string | undefined;
            payload?: string | undefined;
            invokeFunctionWithRetry?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["timer"]["invokeFunctionWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["timer"]["invokeFunctionWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["timer"]["invokeFunctionWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["timer"]["invokeFunctionWithRetry"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainerWithRetry?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["timer"]["invokeContainerWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["timer"]["invokeContainerWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["timer"]["invokeContainerWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["timer"]["invokeContainerWithRetry"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        } & Record<Exclude<keyof I["timer"], "$type" | "invokeFunction" | "cronExpression" | "payload" | "invokeFunctionWithRetry" | "invokeContainerWithRetry">, never>) | undefined;
        messageQueue?: ({
            serviceAccountId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
            } | undefined;
            queueId?: string | undefined;
            visibilityTimeout?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["messageQueue"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["messageQueue"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
            } & Record<Exclude<keyof I["messageQueue"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
            } & Record<Exclude<keyof I["messageQueue"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId">, never>) | undefined;
            queueId?: string | undefined;
            visibilityTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["messageQueue"]["visibilityTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["messageQueue"], "$type" | "serviceAccountId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "queueId" | "visibilityTimeout">, never>) | undefined;
        iotMessage?: ({
            registryId?: string | undefined;
            deviceId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            mqttTopic?: string | undefined;
        } & {
            registryId?: string | undefined;
            deviceId?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["iotMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["iotMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["iotMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["iotMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["iotMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["iotMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["iotMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["iotMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["iotMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["iotMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            mqttTopic?: string | undefined;
        } & Record<Exclude<keyof I["iotMessage"], "$type" | "registryId" | "deviceId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
        iotBrokerMessage?: ({
            brokerId?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            mqttTopic?: string | undefined;
        } & {
            brokerId?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["iotBrokerMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["iotBrokerMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["iotBrokerMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            mqttTopic?: string | undefined;
        } & Record<Exclude<keyof I["iotBrokerMessage"], "$type" | "brokerId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
        objectStorage?: ({
            prefix?: string | undefined;
            bucketId?: string | undefined;
            suffix?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            eventType?: Trigger_ObjectStorageEventType[] | undefined;
        } & {
            prefix?: string | undefined;
            bucketId?: string | undefined;
            suffix?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["objectStorage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["objectStorage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["objectStorage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["objectStorage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["objectStorage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["objectStorage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["objectStorage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["objectStorage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["objectStorage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["objectStorage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            eventType?: (Trigger_ObjectStorageEventType[] & Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["objectStorage"]["eventType"], "$type" | keyof Trigger_ObjectStorageEventType[]>, never>) | undefined;
        } & Record<Exclude<keyof I["objectStorage"], "$type" | "prefix" | "bucketId" | "suffix" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType">, never>) | undefined;
        containerRegistry?: ({
            registryId?: string | undefined;
            tag?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            eventType?: Trigger_ContainerRegistryEventType[] | undefined;
            imageName?: string | undefined;
        } & {
            registryId?: string | undefined;
            tag?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["containerRegistry"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["containerRegistry"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["containerRegistry"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["containerRegistry"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["containerRegistry"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["containerRegistry"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["containerRegistry"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["containerRegistry"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["containerRegistry"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["containerRegistry"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            eventType?: (Trigger_ContainerRegistryEventType[] & Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["containerRegistry"]["eventType"], "$type" | keyof Trigger_ContainerRegistryEventType[]>, never>) | undefined;
            imageName?: string | undefined;
        } & Record<Exclude<keyof I["containerRegistry"], "$type" | "registryId" | "tag" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType" | "imageName">, never>) | undefined;
        cloudLogs?: ({
            logGroupId?: string[] | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            logGroupId?: (string[] & string[] & Record<Exclude<keyof I["cloudLogs"]["logGroupId"], "$type" | keyof string[]>, never>) | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["cloudLogs"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["cloudLogs"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["cloudLogs"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["cloudLogs"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["cloudLogs"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["cloudLogs"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["cloudLogs"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["cloudLogs"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["cloudLogs"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["cloudLogs"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        } & Record<Exclude<keyof I["cloudLogs"], "$type" | "logGroupId" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
        logging?: ({
            resourceId?: string[] | undefined;
            logGroupId?: string | undefined;
            streamName?: string[] | undefined;
            levels?: LogLevel_Level[] | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            resourceType?: string[] | undefined;
        } & {
            resourceId?: (string[] & string[] & Record<Exclude<keyof I["logging"]["resourceId"], "$type" | keyof string[]>, never>) | undefined;
            logGroupId?: string | undefined;
            streamName?: (string[] & string[] & Record<Exclude<keyof I["logging"]["streamName"], "$type" | keyof string[]>, never>) | undefined;
            levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["logging"]["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["logging"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["logging"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["logging"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["logging"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["logging"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["logging"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["logging"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["logging"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["logging"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["logging"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            resourceType?: (string[] & string[] & Record<Exclude<keyof I["logging"]["resourceType"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["logging"], "$type" | "resourceId" | "logGroupId" | "streamName" | "levels" | "batchSettings" | "invokeFunction" | "invokeContainer" | "resourceType">, never>) | undefined;
        billingBudget?: ({
            billingAccountId?: string | undefined;
            budgetId?: string | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            billingAccountId?: string | undefined;
            budgetId?: string | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["billingBudget"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["billingBudget"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["billingBudget"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["billingBudget"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["billingBudget"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["billingBudget"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["billingBudget"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["billingBudget"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        } & Record<Exclude<keyof I["billingBudget"], "$type" | "billingAccountId" | "budgetId" | "invokeFunction" | "invokeContainer">, never>) | undefined;
        mail?: ({
            email?: string | undefined;
            batchSettings?: {
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            invokeFunction?: {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            invokeContainer?: {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } | undefined;
            attachmentsBucket?: {
                serviceAccountId?: string | undefined;
                bucketId?: string | undefined;
            } | undefined;
        } & {
            email?: string | undefined;
            batchSettings?: ({
                size?: number | undefined;
                cutoff?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                size?: number | undefined;
                cutoff?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["mail"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
            } & Record<Exclude<keyof I["mail"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
            invokeFunction?: ({
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                serviceAccountId?: string | undefined;
                functionId?: string | undefined;
                functionTag?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["mail"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["mail"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["mail"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["mail"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            invokeContainer?: ({
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: {
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } | undefined;
                deadLetterQueue?: {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } | undefined;
            } & {
                path?: string | undefined;
                serviceAccountId?: string | undefined;
                containerId?: string | undefined;
                retrySettings?: ({
                    interval?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    retryAttempts?: number | undefined;
                } & {
                    interval?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["mail"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    retryAttempts?: number | undefined;
                } & Record<Exclude<keyof I["mail"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                deadLetterQueue?: ({
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & {
                    serviceAccountId?: string | undefined;
                    queueId?: string | undefined;
                } & Record<Exclude<keyof I["mail"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
            } & Record<Exclude<keyof I["mail"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
            attachmentsBucket?: ({
                serviceAccountId?: string | undefined;
                bucketId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                bucketId?: string | undefined;
            } & Record<Exclude<keyof I["mail"]["attachmentsBucket"], "$type" | "serviceAccountId" | "bucketId">, never>) | undefined;
        } & Record<Exclude<keyof I["mail"], "$type" | "email" | "batchSettings" | "invokeFunction" | "invokeContainer" | "attachmentsBucket">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dataStream" | "timer" | "messageQueue" | "iotMessage" | "iotBrokerMessage" | "objectStorage" | "containerRegistry" | "cloudLogs" | "logging" | "billingBudget" | "mail">, never>>(object: I): Trigger_Rule;
};
export declare const Trigger_Timer: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Timer";
    encode(message: Trigger_Timer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Timer;
    fromJSON(object: any): Trigger_Timer;
    toJSON(message: Trigger_Timer): unknown;
    fromPartial<I extends {
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } | undefined;
        cronExpression?: string | undefined;
        payload?: string | undefined;
        invokeFunctionWithRetry?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainerWithRetry?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
        cronExpression?: string | undefined;
        payload?: string | undefined;
        invokeFunctionWithRetry?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunctionWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunctionWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunctionWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunctionWithRetry"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainerWithRetry?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainerWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainerWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainerWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainerWithRetry"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "invokeFunction" | "cronExpression" | "payload" | "invokeFunctionWithRetry" | "invokeContainerWithRetry">, never>>(object: I): Trigger_Timer;
};
export declare const Trigger_MessageQueue: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.MessageQueue";
    encode(message: Trigger_MessageQueue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_MessageQueue;
    fromJSON(object: any): Trigger_MessageQueue;
    toJSON(message: Trigger_MessageQueue): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
        } | undefined;
        queueId?: string | undefined;
        visibilityTimeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        serviceAccountId?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId">, never>) | undefined;
        queueId?: string | undefined;
        visibilityTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["visibilityTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "queueId" | "visibilityTimeout">, never>>(object: I): Trigger_MessageQueue;
};
export declare const Trigger_IoTMessage: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTMessage";
    encode(message: Trigger_IoTMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_IoTMessage;
    fromJSON(object: any): Trigger_IoTMessage;
    toJSON(message: Trigger_IoTMessage): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
        deviceId?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        mqttTopic?: string | undefined;
    } & {
        registryId?: string | undefined;
        deviceId?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        mqttTopic?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId" | "deviceId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>>(object: I): Trigger_IoTMessage;
};
export declare const Trigger_IoTBrokerMessage: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.IoTBrokerMessage";
    encode(message: Trigger_IoTBrokerMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_IoTBrokerMessage;
    fromJSON(object: any): Trigger_IoTBrokerMessage;
    toJSON(message: Trigger_IoTBrokerMessage): unknown;
    fromPartial<I extends {
        brokerId?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        mqttTopic?: string | undefined;
    } & {
        brokerId?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        mqttTopic?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "brokerId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>>(object: I): Trigger_IoTBrokerMessage;
};
export declare const Trigger_ObjectStorage: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ObjectStorage";
    encode(message: Trigger_ObjectStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_ObjectStorage;
    fromJSON(object: any): Trigger_ObjectStorage;
    toJSON(message: Trigger_ObjectStorage): unknown;
    fromPartial<I extends {
        prefix?: string | undefined;
        bucketId?: string | undefined;
        suffix?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        eventType?: Trigger_ObjectStorageEventType[] | undefined;
    } & {
        prefix?: string | undefined;
        bucketId?: string | undefined;
        suffix?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        eventType?: (Trigger_ObjectStorageEventType[] & Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["eventType"], "$type" | keyof Trigger_ObjectStorageEventType[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "prefix" | "bucketId" | "suffix" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType">, never>>(object: I): Trigger_ObjectStorage;
};
export declare const Trigger_ContainerRegistry: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.ContainerRegistry";
    encode(message: Trigger_ContainerRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_ContainerRegistry;
    fromJSON(object: any): Trigger_ContainerRegistry;
    toJSON(message: Trigger_ContainerRegistry): unknown;
    fromPartial<I extends {
        registryId?: string | undefined;
        tag?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        eventType?: Trigger_ContainerRegistryEventType[] | undefined;
        imageName?: string | undefined;
    } & {
        registryId?: string | undefined;
        tag?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        eventType?: (Trigger_ContainerRegistryEventType[] & Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["eventType"], "$type" | keyof Trigger_ContainerRegistryEventType[]>, never>) | undefined;
        imageName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "registryId" | "tag" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType" | "imageName">, never>>(object: I): Trigger_ContainerRegistry;
};
export declare const Trigger_CloudLogs: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.CloudLogs";
    encode(message: Trigger_CloudLogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_CloudLogs;
    fromJSON(object: any): Trigger_CloudLogs;
    toJSON(message: Trigger_CloudLogs): unknown;
    fromPartial<I extends {
        logGroupId?: string[] | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        logGroupId?: (string[] & string[] & Record<Exclude<keyof I["logGroupId"], "$type" | keyof string[]>, never>) | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "logGroupId" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>>(object: I): Trigger_CloudLogs;
};
export declare const Trigger_Logging: {
    $type: "yandex.cloud.serverless.triggers.v1.Trigger.Logging";
    encode(message: Trigger_Logging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Trigger_Logging;
    fromJSON(object: any): Trigger_Logging;
    toJSON(message: Trigger_Logging): unknown;
    fromPartial<I extends {
        resourceId?: string[] | undefined;
        logGroupId?: string | undefined;
        streamName?: string[] | undefined;
        levels?: LogLevel_Level[] | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        resourceType?: string[] | undefined;
    } & {
        resourceId?: (string[] & string[] & Record<Exclude<keyof I["resourceId"], "$type" | keyof string[]>, never>) | undefined;
        logGroupId?: string | undefined;
        streamName?: (string[] & string[] & Record<Exclude<keyof I["streamName"], "$type" | keyof string[]>, never>) | undefined;
        levels?: (LogLevel_Level[] & LogLevel_Level[] & Record<Exclude<keyof I["levels"], "$type" | keyof LogLevel_Level[]>, never>) | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        resourceType?: (string[] & string[] & Record<Exclude<keyof I["resourceType"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "logGroupId" | "streamName" | "levels" | "batchSettings" | "invokeFunction" | "invokeContainer" | "resourceType">, never>>(object: I): Trigger_Logging;
};
export declare const InvokeFunctionOnce: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionOnce";
    encode(message: InvokeFunctionOnce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeFunctionOnce;
    fromJSON(object: any): InvokeFunctionOnce;
    toJSON(message: InvokeFunctionOnce): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        functionId?: string | undefined;
        functionTag?: string | undefined;
    } & {
        serviceAccountId?: string | undefined;
        functionId?: string | undefined;
        functionTag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>>(object: I): InvokeFunctionOnce;
};
export declare const InvokeFunctionWithRetry: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeFunctionWithRetry";
    encode(message: InvokeFunctionWithRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeFunctionWithRetry;
    fromJSON(object: any): InvokeFunctionWithRetry;
    toJSON(message: InvokeFunctionWithRetry): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        functionId?: string | undefined;
        functionTag?: string | undefined;
        retrySettings?: {
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            retryAttempts?: number | undefined;
        } | undefined;
        deadLetterQueue?: {
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } | undefined;
    } & {
        serviceAccountId?: string | undefined;
        functionId?: string | undefined;
        functionTag?: string | undefined;
        retrySettings?: ({
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            retryAttempts?: number | undefined;
        } & {
            interval?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
            retryAttempts?: number | undefined;
        } & Record<Exclude<keyof I["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
        deadLetterQueue?: ({
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } & Record<Exclude<keyof I["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>>(object: I): InvokeFunctionWithRetry;
};
export declare const InvokeContainerOnce: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerOnce";
    encode(message: InvokeContainerOnce, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeContainerOnce;
    fromJSON(object: any): InvokeContainerOnce;
    toJSON(message: InvokeContainerOnce): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        serviceAccountId?: string | undefined;
        containerId?: string | undefined;
    } & {
        path?: string | undefined;
        serviceAccountId?: string | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "serviceAccountId" | "containerId">, never>>(object: I): InvokeContainerOnce;
};
export declare const InvokeContainerWithRetry: {
    $type: "yandex.cloud.serverless.triggers.v1.InvokeContainerWithRetry";
    encode(message: InvokeContainerWithRetry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InvokeContainerWithRetry;
    fromJSON(object: any): InvokeContainerWithRetry;
    toJSON(message: InvokeContainerWithRetry): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        serviceAccountId?: string | undefined;
        containerId?: string | undefined;
        retrySettings?: {
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            retryAttempts?: number | undefined;
        } | undefined;
        deadLetterQueue?: {
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } | undefined;
    } & {
        path?: string | undefined;
        serviceAccountId?: string | undefined;
        containerId?: string | undefined;
        retrySettings?: ({
            interval?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            retryAttempts?: number | undefined;
        } & {
            interval?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
            retryAttempts?: number | undefined;
        } & Record<Exclude<keyof I["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
        deadLetterQueue?: ({
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            queueId?: string | undefined;
        } & Record<Exclude<keyof I["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>>(object: I): InvokeContainerWithRetry;
};
export declare const PutQueueMessage: {
    $type: "yandex.cloud.serverless.triggers.v1.PutQueueMessage";
    encode(message: PutQueueMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PutQueueMessage;
    fromJSON(object: any): PutQueueMessage;
    toJSON(message: PutQueueMessage): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        queueId?: string | undefined;
    } & {
        serviceAccountId?: string | undefined;
        queueId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "queueId">, never>>(object: I): PutQueueMessage;
};
export declare const BatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.BatchSettings";
    encode(message: BatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BatchSettings;
    fromJSON(object: any): BatchSettings;
    toJSON(message: BatchSettings): unknown;
    fromPartial<I extends {
        size?: number | undefined;
        cutoff?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        size?: number | undefined;
        cutoff?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "size" | "cutoff">, never>>(object: I): BatchSettings;
};
export declare const CloudLogsBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.CloudLogsBatchSettings";
    encode(message: CloudLogsBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CloudLogsBatchSettings;
    fromJSON(object: any): CloudLogsBatchSettings;
    toJSON(message: CloudLogsBatchSettings): unknown;
    fromPartial<I extends {
        size?: number | undefined;
        cutoff?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        size?: number | undefined;
        cutoff?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "size" | "cutoff">, never>>(object: I): CloudLogsBatchSettings;
};
export declare const LoggingBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.LoggingBatchSettings";
    encode(message: LoggingBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LoggingBatchSettings;
    fromJSON(object: any): LoggingBatchSettings;
    toJSON(message: LoggingBatchSettings): unknown;
    fromPartial<I extends {
        size?: number | undefined;
        cutoff?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        size?: number | undefined;
        cutoff?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "size" | "cutoff">, never>>(object: I): LoggingBatchSettings;
};
export declare const RetrySettings: {
    $type: "yandex.cloud.serverless.triggers.v1.RetrySettings";
    encode(message: RetrySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetrySettings;
    fromJSON(object: any): RetrySettings;
    toJSON(message: RetrySettings): unknown;
    fromPartial<I extends {
        interval?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        retryAttempts?: number | undefined;
    } & {
        interval?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
        retryAttempts?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "interval" | "retryAttempts">, never>>(object: I): RetrySettings;
};
export declare const BillingBudget: {
    $type: "yandex.cloud.serverless.triggers.v1.BillingBudget";
    encode(message: BillingBudget, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BillingBudget;
    fromJSON(object: any): BillingBudget;
    toJSON(message: BillingBudget): unknown;
    fromPartial<I extends {
        billingAccountId?: string | undefined;
        budgetId?: string | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        billingAccountId?: string | undefined;
        budgetId?: string | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "billingAccountId" | "budgetId" | "invokeFunction" | "invokeContainer">, never>>(object: I): BillingBudget;
};
export declare const DataStreamBatchSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.DataStreamBatchSettings";
    encode(message: DataStreamBatchSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataStreamBatchSettings;
    fromJSON(object: any): DataStreamBatchSettings;
    toJSON(message: DataStreamBatchSettings): unknown;
    fromPartial<I extends {
        size?: number | undefined;
        cutoff?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        size?: number | undefined;
        cutoff?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "size" | "cutoff">, never>>(object: I): DataStreamBatchSettings;
};
export declare const DataStream: {
    $type: "yandex.cloud.serverless.triggers.v1.DataStream";
    encode(message: DataStream, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataStream;
    fromJSON(object: any): DataStream;
    toJSON(message: DataStream): unknown;
    fromPartial<I extends {
        stream?: string | undefined;
        serviceAccountId?: string | undefined;
        database?: string | undefined;
        endpoint?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        stream?: string | undefined;
        serviceAccountId?: string | undefined;
        database?: string | undefined;
        endpoint?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "stream" | "serviceAccountId" | "database" | "endpoint" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>>(object: I): DataStream;
};
export declare const ObjectStorageBucketSettings: {
    $type: "yandex.cloud.serverless.triggers.v1.ObjectStorageBucketSettings";
    encode(message: ObjectStorageBucketSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ObjectStorageBucketSettings;
    fromJSON(object: any): ObjectStorageBucketSettings;
    toJSON(message: ObjectStorageBucketSettings): unknown;
    fromPartial<I extends {
        serviceAccountId?: string | undefined;
        bucketId?: string | undefined;
    } & {
        serviceAccountId?: string | undefined;
        bucketId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "serviceAccountId" | "bucketId">, never>>(object: I): ObjectStorageBucketSettings;
};
export declare const Mail: {
    $type: "yandex.cloud.serverless.triggers.v1.Mail";
    encode(message: Mail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Mail;
    fromJSON(object: any): Mail;
    toJSON(message: Mail): unknown;
    fromPartial<I extends {
        email?: string | undefined;
        batchSettings?: {
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        invokeFunction?: {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        invokeContainer?: {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } | undefined;
        attachmentsBucket?: {
            serviceAccountId?: string | undefined;
            bucketId?: string | undefined;
        } | undefined;
    } & {
        email?: string | undefined;
        batchSettings?: ({
            size?: number | undefined;
            cutoff?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            size?: number | undefined;
            cutoff?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
        } & Record<Exclude<keyof I["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
        invokeFunction?: ({
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            serviceAccountId?: string | undefined;
            functionId?: string | undefined;
            functionTag?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        invokeContainer?: ({
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: {
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } | undefined;
            deadLetterQueue?: {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } | undefined;
        } & {
            path?: string | undefined;
            serviceAccountId?: string | undefined;
            containerId?: string | undefined;
            retrySettings?: ({
                interval?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                retryAttempts?: number | undefined;
            } & {
                interval?: ({
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                retryAttempts?: number | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
            deadLetterQueue?: ({
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & {
                serviceAccountId?: string | undefined;
                queueId?: string | undefined;
            } & Record<Exclude<keyof I["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
        } & Record<Exclude<keyof I["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
        attachmentsBucket?: ({
            serviceAccountId?: string | undefined;
            bucketId?: string | undefined;
        } & {
            serviceAccountId?: string | undefined;
            bucketId?: string | undefined;
        } & Record<Exclude<keyof I["attachmentsBucket"], "$type" | "serviceAccountId" | "bucketId">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "email" | "batchSettings" | "invokeFunction" | "invokeContainer" | "attachmentsBucket">, never>>(object: I): Mail;
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
