/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Trigger_Rule, Trigger } from "../../../../../yandex/cloud/serverless/triggers/v1/trigger";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.serverless.triggers.v1";
export interface GetTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest";
    /**
     * ID of the trigger to return.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface ListTriggersRequest {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest";
    /**
     * ID of the folder to list triggers in.
     *
     * To get a folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggersResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters triggers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-trigger`.
     */
    filter: string;
}
export interface ListTriggersResponse {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse";
    /** List of triggers in the specified folder. */
    triggers: Trigger[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggersRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest";
    /**
     * ID of the folder to create a trigger in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the trigger.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the trigger. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** Trigger type. */
    rule?: Trigger_Rule;
}
export interface CreateTriggerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateTriggerMetadata {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata";
    /** ID of the trigger that is being created. */
    triggerId: string;
}
export interface UpdateTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest";
    /**
     * ID of the trigger to update.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
    /** Field mask that specifies which attributes of the trigger should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the trigger.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the trigger. */
    description: string;
    /**
     * Trigger labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [TriggerService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
    /** New parameters for trigger. */
    rule?: Trigger_Rule;
}
export interface UpdateTriggerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateTriggerMetadata {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata";
    /** ID of the trigger that is being updated. */
    triggerId: string;
}
export interface DeleteTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest";
    /**
     * ID of the trigger to delete.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface DeleteTriggerMetadata {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata";
    /** ID of the trigger that is being deleted. */
    triggerId: string;
}
export interface PauseTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest";
    /**
     * ID of the trigger to pause
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface PauseTriggerMetadata {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata";
    /** ID of the trigger that is being paused. */
    triggerId: string;
}
export interface ResumeTriggerRequest {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest";
    /**
     * ID of the trigger to pause
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}
export interface ResumeTriggerMetadata {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata";
    /** ID of the trigger that is being paused. */
    triggerId: string;
}
export interface ListTriggerOperationsRequest {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest";
    /** ID of the trigger to list operations for. */
    triggerId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-function`.
     */
    filter: string;
}
export interface ListTriggerOperationsResponse {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse";
    /** List of operations for the specified trigger. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggerOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const GetTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.GetTriggerRequest";
    encode(message: GetTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTriggerRequest;
    fromJSON(object: any): GetTriggerRequest;
    toJSON(message: GetTriggerRequest): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): GetTriggerRequest;
};
export declare const ListTriggersRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersRequest";
    encode(message: ListTriggersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggersRequest;
    fromJSON(object: any): ListTriggersRequest;
    toJSON(message: ListTriggersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListTriggersRequest;
};
export declare const ListTriggersResponse: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggersResponse";
    encode(message: ListTriggersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggersResponse;
    fromJSON(object: any): ListTriggersResponse;
    toJSON(message: ListTriggersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        triggers?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_Status | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        triggers?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_Status | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_Status | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
            status?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_Status | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["triggers"][number]["labels"], string | number>, never>) | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["dataStream"], "$type" | "stream" | "serviceAccountId" | "database" | "endpoint" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeFunctionWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeFunctionWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeFunctionWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeFunctionWithRetry"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeContainerWithRetry"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeContainerWithRetry"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeContainerWithRetry"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"]["invokeContainerWithRetry"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["timer"], "$type" | "invokeFunction" | "cronExpression" | "payload" | "invokeFunctionWithRetry" | "invokeContainerWithRetry">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
                    invokeFunction?: ({
                        serviceAccountId?: string | undefined;
                        functionId?: string | undefined;
                        functionTag?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        functionId?: string | undefined;
                        functionTag?: string | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag">, never>) | undefined;
                    invokeContainer?: ({
                        path?: string | undefined;
                        serviceAccountId?: string | undefined;
                        containerId?: string | undefined;
                    } & {
                        path?: string | undefined;
                        serviceAccountId?: string | undefined;
                        containerId?: string | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId">, never>) | undefined;
                    queueId?: string | undefined;
                    visibilityTimeout?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"]["visibilityTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["messageQueue"], "$type" | "serviceAccountId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "queueId" | "visibilityTimeout">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    mqttTopic?: string | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotMessage"], "$type" | "registryId" | "deviceId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    mqttTopic?: string | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["iotBrokerMessage"], "$type" | "brokerId" | "batchSettings" | "invokeFunction" | "invokeContainer" | "mqttTopic">, never>) | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[]>, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["objectStorage"], "$type" | "prefix" | "bucketId" | "suffix" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType">, never>) | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[]>, never>) | undefined;
                    imageName?: string | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["containerRegistry"], "$type" | "registryId" | "tag" | "batchSettings" | "invokeFunction" | "invokeContainer" | "eventType" | "imageName">, never>) | undefined;
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
                    logGroupId?: (string[] & string[] & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["logGroupId"], "$type" | keyof string[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["cloudLogs"], "$type" | "logGroupId" | "batchSettings" | "invokeFunction" | "invokeContainer">, never>) | undefined;
                logging?: ({
                    resourceId?: string[] | undefined;
                    logGroupId?: string | undefined;
                    streamName?: string[] | undefined;
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                    resourceId?: (string[] & string[] & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["resourceId"], "$type" | keyof string[]>, never>) | undefined;
                    logGroupId?: string | undefined;
                    streamName?: (string[] & string[] & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["streamName"], "$type" | keyof string[]>, never>) | undefined;
                    levels?: (import("../../../logging/v1/log_entry").LogLevel_Level[] & import("../../../logging/v1/log_entry").LogLevel_Level[] & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["levels"], "$type" | keyof import("../../../logging/v1/log_entry").LogLevel_Level[]>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    resourceType?: (string[] & string[] & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"]["resourceType"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["logging"], "$type" | "resourceId" | "logGroupId" | "streamName" | "levels" | "batchSettings" | "invokeFunction" | "invokeContainer" | "resourceType">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["billingBudget"], "$type" | "billingAccountId" | "budgetId" | "invokeFunction" | "invokeContainer">, never>) | undefined;
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
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["batchSettings"]["cutoff"], "$type" | "seconds" | "nanos">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["batchSettings"], "$type" | "size" | "cutoff">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeFunction"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeFunction"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeFunction"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeFunction"], "$type" | "serviceAccountId" | "functionId" | "functionTag" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
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
                            } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeContainer"]["retrySettings"]["interval"], "$type" | "seconds" | "nanos">, never>) | undefined;
                            retryAttempts?: number | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeContainer"]["retrySettings"], "$type" | "interval" | "retryAttempts">, never>) | undefined;
                        deadLetterQueue?: ({
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & {
                            serviceAccountId?: string | undefined;
                            queueId?: string | undefined;
                        } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeContainer"]["deadLetterQueue"], "$type" | "serviceAccountId" | "queueId">, never>) | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["invokeContainer"], "$type" | "path" | "serviceAccountId" | "containerId" | "retrySettings" | "deadLetterQueue">, never>) | undefined;
                    attachmentsBucket?: ({
                        serviceAccountId?: string | undefined;
                        bucketId?: string | undefined;
                    } & {
                        serviceAccountId?: string | undefined;
                        bucketId?: string | undefined;
                    } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"]["attachmentsBucket"], "$type" | "serviceAccountId" | "bucketId">, never>) | undefined;
                } & Record<Exclude<keyof I["triggers"][number]["rule"]["mail"], "$type" | "email" | "batchSettings" | "invokeFunction" | "invokeContainer" | "attachmentsBucket">, never>) | undefined;
            } & Record<Exclude<keyof I["triggers"][number]["rule"], "$type" | "dataStream" | "timer" | "messageQueue" | "iotMessage" | "iotBrokerMessage" | "objectStorage" | "containerRegistry" | "cloudLogs" | "logging" | "billingBudget" | "mail">, never>) | undefined;
        } & Record<Exclude<keyof I["triggers"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "labels" | "rule">, never>)[] & Record<Exclude<keyof I["triggers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_Status | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                    eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                    levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "triggers">, never>>(object: I): ListTriggersResponse;
};
export declare const CreateTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest";
    encode(message: CreateTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerRequest;
    fromJSON(object: any): CreateTriggerRequest;
    toJSON(message: CreateTriggerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
        name?: string | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["rule"]["objectStorage"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[]>, never>) | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["rule"]["containerRegistry"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[]>, never>) | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                levels?: (import("../../../logging/v1/log_entry").LogLevel_Level[] & import("../../../logging/v1/log_entry").LogLevel_Level[] & Record<Exclude<keyof I["rule"]["logging"]["levels"], "$type" | keyof import("../../../logging/v1/log_entry").LogLevel_Level[]>, never>) | undefined;
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
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "rule">, never>>(object: I): CreateTriggerRequest;
};
export declare const CreateTriggerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerRequest.LabelsEntry";
    encode(message: CreateTriggerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerRequest_LabelsEntry;
    fromJSON(object: any): CreateTriggerRequest_LabelsEntry;
    toJSON(message: CreateTriggerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateTriggerRequest_LabelsEntry;
};
export declare const CreateTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.CreateTriggerMetadata";
    encode(message: CreateTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTriggerMetadata;
    fromJSON(object: any): CreateTriggerMetadata;
    toJSON(message: CreateTriggerMetadata): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): CreateTriggerMetadata;
};
export declare const UpdateTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest";
    encode(message: UpdateTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerRequest;
    fromJSON(object: any): UpdateTriggerRequest;
    toJSON(message: UpdateTriggerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
        triggerId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] | undefined;
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
                eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[] & Record<Exclude<keyof I["rule"]["objectStorage"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ObjectStorageEventType[]>, never>) | undefined;
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
                eventType?: import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] | undefined;
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
                eventType?: (import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[] & Record<Exclude<keyof I["rule"]["containerRegistry"]["eventType"], "$type" | keyof import("../../../../../yandex/cloud/serverless/triggers/v1/trigger").Trigger_ContainerRegistryEventType[]>, never>) | undefined;
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
                levels?: import("../../../logging/v1/log_entry").LogLevel_Level[] | undefined;
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
                levels?: (import("../../../logging/v1/log_entry").LogLevel_Level[] & import("../../../logging/v1/log_entry").LogLevel_Level[] & Record<Exclude<keyof I["rule"]["logging"]["levels"], "$type" | keyof import("../../../logging/v1/log_entry").LogLevel_Level[]>, never>) | undefined;
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
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "rule" | "triggerId">, never>>(object: I): UpdateTriggerRequest;
};
export declare const UpdateTriggerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerRequest.LabelsEntry";
    encode(message: UpdateTriggerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerRequest_LabelsEntry;
    fromJSON(object: any): UpdateTriggerRequest_LabelsEntry;
    toJSON(message: UpdateTriggerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateTriggerRequest_LabelsEntry;
};
export declare const UpdateTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.UpdateTriggerMetadata";
    encode(message: UpdateTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTriggerMetadata;
    fromJSON(object: any): UpdateTriggerMetadata;
    toJSON(message: UpdateTriggerMetadata): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): UpdateTriggerMetadata;
};
export declare const DeleteTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerRequest";
    encode(message: DeleteTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTriggerRequest;
    fromJSON(object: any): DeleteTriggerRequest;
    toJSON(message: DeleteTriggerRequest): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): DeleteTriggerRequest;
};
export declare const DeleteTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.DeleteTriggerMetadata";
    encode(message: DeleteTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTriggerMetadata;
    fromJSON(object: any): DeleteTriggerMetadata;
    toJSON(message: DeleteTriggerMetadata): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): DeleteTriggerMetadata;
};
export declare const PauseTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerRequest";
    encode(message: PauseTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseTriggerRequest;
    fromJSON(object: any): PauseTriggerRequest;
    toJSON(message: PauseTriggerRequest): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): PauseTriggerRequest;
};
export declare const PauseTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.PauseTriggerMetadata";
    encode(message: PauseTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PauseTriggerMetadata;
    fromJSON(object: any): PauseTriggerMetadata;
    toJSON(message: PauseTriggerMetadata): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): PauseTriggerMetadata;
};
export declare const ResumeTriggerRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerRequest";
    encode(message: ResumeTriggerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeTriggerRequest;
    fromJSON(object: any): ResumeTriggerRequest;
    toJSON(message: ResumeTriggerRequest): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): ResumeTriggerRequest;
};
export declare const ResumeTriggerMetadata: {
    $type: "yandex.cloud.serverless.triggers.v1.ResumeTriggerMetadata";
    encode(message: ResumeTriggerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResumeTriggerMetadata;
    fromJSON(object: any): ResumeTriggerMetadata;
    toJSON(message: ResumeTriggerMetadata): unknown;
    fromPartial<I extends {
        triggerId?: string | undefined;
    } & {
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "triggerId">, never>>(object: I): ResumeTriggerMetadata;
};
export declare const ListTriggerOperationsRequest: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsRequest";
    encode(message: ListTriggerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggerOperationsRequest;
    fromJSON(object: any): ListTriggerOperationsRequest;
    toJSON(message: ListTriggerOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        triggerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        triggerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "triggerId">, never>>(object: I): ListTriggerOperationsRequest;
};
export declare const ListTriggerOperationsResponse: {
    $type: "yandex.cloud.serverless.triggers.v1.ListTriggerOperationsResponse";
    encode(message: ListTriggerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTriggerOperationsResponse;
    fromJSON(object: any): ListTriggerOperationsResponse;
    toJSON(message: ListTriggerOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListTriggerOperationsResponse;
};
/** A set of methods for managing triggers for serverless functions. */
export declare const TriggerServiceService: {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTriggerRequest;
        readonly responseSerialize: (value: Trigger) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Trigger;
    };
    /** Retrieves the list of triggers in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTriggersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTriggersRequest;
        readonly responseSerialize: (value: ListTriggersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTriggersResponse;
    };
    /** Creates a trigger in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified trigger. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified trigger. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Pauses the specified trigger. */
    readonly pause: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Pause";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PauseTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PauseTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Restarts the specified trigger. */
    readonly resume: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/Resume";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResumeTriggerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResumeTriggerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified trigger. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.triggers.v1.TriggerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTriggerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTriggerOperationsRequest;
        readonly responseSerialize: (value: ListTriggerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTriggerOperationsResponse;
    };
};
export interface TriggerServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get: handleUnaryCall<GetTriggerRequest, Trigger>;
    /** Retrieves the list of triggers in the specified folder. */
    list: handleUnaryCall<ListTriggersRequest, ListTriggersResponse>;
    /** Creates a trigger in the specified folder. */
    create: handleUnaryCall<CreateTriggerRequest, Operation>;
    /** Updates the specified trigger. */
    update: handleUnaryCall<UpdateTriggerRequest, Operation>;
    /** Deletes the specified trigger. */
    delete: handleUnaryCall<DeleteTriggerRequest, Operation>;
    /** Pauses the specified trigger. */
    pause: handleUnaryCall<PauseTriggerRequest, Operation>;
    /** Restarts the specified trigger. */
    resume: handleUnaryCall<ResumeTriggerRequest, Operation>;
    /** Lists operations for the specified trigger. */
    listOperations: handleUnaryCall<ListTriggerOperationsRequest, ListTriggerOperationsResponse>;
}
export interface TriggerServiceClient extends Client {
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get(request: GetTriggerRequest, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    get(request: GetTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    get(request: GetTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Trigger) => void): ClientUnaryCall;
    /** Retrieves the list of triggers in the specified folder. */
    list(request: ListTriggersRequest, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    list(request: ListTriggersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    list(request: ListTriggersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTriggersResponse) => void): ClientUnaryCall;
    /** Creates a trigger in the specified folder. */
    create(request: CreateTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified trigger. */
    update(request: UpdateTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified trigger. */
    delete(request: DeleteTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Pauses the specified trigger. */
    pause(request: PauseTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    pause(request: PauseTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Restarts the specified trigger. */
    resume(request: ResumeTriggerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeTriggerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    resume(request: ResumeTriggerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified trigger. */
    listOperations(request: ListTriggerOperationsRequest, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTriggerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListTriggerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTriggerOperationsResponse) => void): ClientUnaryCall;
}
export declare const TriggerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TriggerServiceClient;
    service: typeof TriggerServiceService;
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
