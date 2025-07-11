/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { CustomerPerson, Customer } from "../../../../yandex/cloud/billing/v1/customer";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface ListCustomersRequest {
    $type: "yandex.cloud.billing.v1.ListCustomersRequest";
    /** ID of the reseller. */
    resellerId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListCustomersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListCustomersResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListCustomersResponse {
    $type: "yandex.cloud.billing.v1.ListCustomersResponse";
    /** List of customers. */
    customers: Customer[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListCustomersRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListCustomersRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface InviteCustomerRequest {
    $type: "yandex.cloud.billing.v1.InviteCustomerRequest";
    /** ID of the reseller that customer will be associated with. */
    resellerId: string;
    /** Name of the customer. */
    name: string;
    /** Customer email to send invitation to. */
    invitationEmail: string;
    /** Person of the customer. */
    person?: CustomerPerson;
}
export interface CreateResellerServedCustomerRequest {
    $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest";
    /** ID of the reseller that customer will be associated with. */
    resellerId: string;
    /** Name of the customer. */
    name: string;
    /** Person of the customer. */
    person?: CustomerPerson;
}
export interface ActivateCustomerRequest {
    $type: "yandex.cloud.billing.v1.ActivateCustomerRequest";
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}
export interface SuspendCustomerRequest {
    $type: "yandex.cloud.billing.v1.SuspendCustomerRequest";
    /**
     * ID of the customer.
     * To get the customer ID, use [CustomerService.List] request.
     */
    customerId: string;
}
export interface CustomerMetadata {
    $type: "yandex.cloud.billing.v1.CustomerMetadata";
    /** ID of the reseller. */
    resellerId: string;
    /** ID of the customer. */
    customerId: string;
}
export declare const ListCustomersRequest: {
    $type: "yandex.cloud.billing.v1.ListCustomersRequest";
    encode(message: ListCustomersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCustomersRequest;
    fromJSON(object: any): ListCustomersRequest;
    toJSON(message: ListCustomersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        resellerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        resellerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "resellerId">, never>>(object: I): ListCustomersRequest;
};
export declare const ListCustomersResponse: {
    $type: "yandex.cloud.billing.v1.ListCustomersResponse";
    encode(message: ListCustomersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListCustomersResponse;
    fromJSON(object: any): ListCustomersResponse;
    toJSON(message: ListCustomersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        customers?: {
            id?: string | undefined;
            billingAccountId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        customers?: ({
            id?: string | undefined;
            billingAccountId?: string | undefined;
        }[] & ({
            id?: string | undefined;
            billingAccountId?: string | undefined;
        } & {
            id?: string | undefined;
            billingAccountId?: string | undefined;
        } & Record<Exclude<keyof I["customers"][number], "$type" | "id" | "billingAccountId">, never>)[] & Record<Exclude<keyof I["customers"], "$type" | keyof {
            id?: string | undefined;
            billingAccountId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "customers">, never>>(object: I): ListCustomersResponse;
};
export declare const InviteCustomerRequest: {
    $type: "yandex.cloud.billing.v1.InviteCustomerRequest";
    encode(message: InviteCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InviteCustomerRequest;
    fromJSON(object: any): InviteCustomerRequest;
    toJSON(message: InviteCustomerRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resellerId?: string | undefined;
        invitationEmail?: string | undefined;
        person?: {
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        resellerId?: string | undefined;
        invitationEmail?: string | undefined;
        person?: ({
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } & {
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } & Record<Exclude<keyof I["person"], "$type" | "name" | "longname" | "phone" | "email" | "postCode" | "postAddress" | "legalAddress" | "tin">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resellerId" | "invitationEmail" | "person">, never>>(object: I): InviteCustomerRequest;
};
export declare const CreateResellerServedCustomerRequest: {
    $type: "yandex.cloud.billing.v1.CreateResellerServedCustomerRequest";
    encode(message: CreateResellerServedCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateResellerServedCustomerRequest;
    fromJSON(object: any): CreateResellerServedCustomerRequest;
    toJSON(message: CreateResellerServedCustomerRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        resellerId?: string | undefined;
        person?: {
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        resellerId?: string | undefined;
        person?: ({
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } & {
            name?: string | undefined;
            longname?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            postCode?: string | undefined;
            postAddress?: string | undefined;
            legalAddress?: string | undefined;
            tin?: string | undefined;
        } & Record<Exclude<keyof I["person"], "$type" | "name" | "longname" | "phone" | "email" | "postCode" | "postAddress" | "legalAddress" | "tin">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "resellerId" | "person">, never>>(object: I): CreateResellerServedCustomerRequest;
};
export declare const ActivateCustomerRequest: {
    $type: "yandex.cloud.billing.v1.ActivateCustomerRequest";
    encode(message: ActivateCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateCustomerRequest;
    fromJSON(object: any): ActivateCustomerRequest;
    toJSON(message: ActivateCustomerRequest): unknown;
    fromPartial<I extends {
        customerId?: string | undefined;
    } & {
        customerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "customerId">, never>>(object: I): ActivateCustomerRequest;
};
export declare const SuspendCustomerRequest: {
    $type: "yandex.cloud.billing.v1.SuspendCustomerRequest";
    encode(message: SuspendCustomerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SuspendCustomerRequest;
    fromJSON(object: any): SuspendCustomerRequest;
    toJSON(message: SuspendCustomerRequest): unknown;
    fromPartial<I extends {
        customerId?: string | undefined;
    } & {
        customerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "customerId">, never>>(object: I): SuspendCustomerRequest;
};
export declare const CustomerMetadata: {
    $type: "yandex.cloud.billing.v1.CustomerMetadata";
    encode(message: CustomerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CustomerMetadata;
    fromJSON(object: any): CustomerMetadata;
    toJSON(message: CustomerMetadata): unknown;
    fromPartial<I extends {
        resellerId?: string | undefined;
        customerId?: string | undefined;
    } & {
        resellerId?: string | undefined;
        customerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resellerId" | "customerId">, never>>(object: I): CustomerMetadata;
};
/** A set of methods for managing Customer resources. */
export declare const CustomerServiceService: {
    /** Retrieves the list of customers associated with the specified reseller. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListCustomersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListCustomersRequest;
        readonly responseSerialize: (value: ListCustomersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListCustomersResponse;
    };
    /** Invites customer to the specified reseller. */
    readonly invite: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Invite";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InviteCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InviteCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Creates new reseller-served customer. */
    readonly createResellerServed: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/CreateResellerServed";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateResellerServedCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateResellerServedCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    readonly activate: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Activate";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ActivateCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ActivateCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    readonly suspend: {
        readonly path: "/yandex.cloud.billing.v1.CustomerService/Suspend";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SuspendCustomerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SuspendCustomerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface CustomerServiceServer extends UntypedServiceImplementation {
    /** Retrieves the list of customers associated with the specified reseller. */
    list: handleUnaryCall<ListCustomersRequest, ListCustomersResponse>;
    /** Invites customer to the specified reseller. */
    invite: handleUnaryCall<InviteCustomerRequest, Operation>;
    /** Creates new reseller-served customer. */
    createResellerServed: handleUnaryCall<CreateResellerServedCustomerRequest, Operation>;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate: handleUnaryCall<ActivateCustomerRequest, Operation>;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend: handleUnaryCall<SuspendCustomerRequest, Operation>;
}
export interface CustomerServiceClient extends Client {
    /** Retrieves the list of customers associated with the specified reseller. */
    list(request: ListCustomersRequest, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    list(request: ListCustomersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    list(request: ListCustomersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListCustomersResponse) => void): ClientUnaryCall;
    /** Invites customer to the specified reseller. */
    invite(request: InviteCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    invite(request: InviteCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    invite(request: InviteCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Creates new reseller-served customer. */
    createResellerServed(request: CreateResellerServedCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createResellerServed(request: CreateResellerServedCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    createResellerServed(request: CreateResellerServedCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Activates specified customer. After customer is activated, he can use resources associated with his billing account. */
    activate(request: ActivateCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    activate(request: ActivateCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Suspend specified customer. After customer is suspended, he can't use resources associated with his billing account. */
    suspend(request: SuspendCustomerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    suspend(request: SuspendCustomerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    suspend(request: SuspendCustomerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const CustomerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): CustomerServiceClient;
    service: typeof CustomerServiceService;
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
