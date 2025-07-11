/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { PrivateVisibility, PublicVisibility, DnsZone, RecordSet } from "../../../../yandex/cloud/dns/v1/dns_zone";
import { FieldMask } from "../../../../google/protobuf/field_mask";
import { Operation } from "../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.dns.v1";
export interface UpdateDnsZonePrivateNetworksRequest {
    $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksRequest";
    /** ID of the DNS zone which private networks will be updated */
    dnsZoneId: string;
    /** Network IDs to remove */
    privateNetworkIdAdditions: string[];
    /** Network IDs to add */
    privateNetworkIdDeletions: string[];
}
export interface UpdateDnsZonePrivateNetworksMetadata {
    $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksMetadata";
    /** ID of the DNS zone which private networks was updated */
    dnsZoneId: string;
}
export interface GetDnsZoneRequest {
    $type: "yandex.cloud.dns.v1.GetDnsZoneRequest";
    /**
     * ID of the DNS zone to return.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
}
export interface ListDnsZonesRequest {
    $type: "yandex.cloud.dns.v1.ListDnsZonesRequest";
    /**
     * ID of the folder to list DNS zones in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDnsZonesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDnsZonesResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS zones listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-zone`.
     */
    filter: string;
}
export interface ListDnsZonesResponse {
    $type: "yandex.cloud.dns.v1.ListDnsZonesResponse";
    /** List of DNS zones in the specified folder. */
    dnsZones: DnsZone[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZonesRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZonesRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateDnsZoneRequest {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest";
    /**
     * ID of the folder to create DNS zones in.
     *
     * To get a folder ID, make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the DNS zone.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the DNS zone. */
    description: string;
    /** DNS zone labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** DNS zone suffix. */
    zone: string;
    /**
     * Privately visible zone settings.
     * At least one of two visibility fields must be set.
     */
    privateVisibility?: PrivateVisibility;
    /**
     * Publicly visible zone settings.
     * At least one of two visibility fields must be set.
     */
    publicVisibility?: PublicVisibility;
}
export interface CreateDnsZoneRequest_LabelsEntry {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateDnsZoneMetadata {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneMetadata";
    /** ID of the DNS zone that is being created. */
    dnsZoneId: string;
}
export interface UpdateDnsZoneRequest {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest";
    /**
     * ID of the DNS zone to update.
     *
     * To get the DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Field mask specifying which fields of the DNS zone resource are going to be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the DNS zone.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description of the DNS zone. */
    description: string;
    /**
     * DNS zone labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label:
     * 1. Get the current set of labels with a [DnsZoneService.Get] request.
     * 2. Add or remove a label in this set.
     * 3. Send the new set in this field.
     */
    labels: {
        [key: string]: string;
    };
    /** Change network IDs for private visibility. */
    privateVisibility?: PrivateVisibility;
    /** Public visibility configuration. */
    publicVisibility?: PublicVisibility;
}
export interface UpdateDnsZoneRequest_LabelsEntry {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateDnsZoneMetadata {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneMetadata";
    /** ID of the DNS zone that is being updated. */
    dnsZoneId: string;
}
export interface DeleteDnsZoneRequest {
    $type: "yandex.cloud.dns.v1.DeleteDnsZoneRequest";
    /**
     * ID of the DNS zone to delete.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
}
export interface DeleteDnsZoneMetadata {
    $type: "yandex.cloud.dns.v1.DeleteDnsZoneMetadata";
    /** ID of the DNS zone that is being deleted. */
    dnsZoneId: string;
}
export interface GetDnsZoneRecordSetRequest {
    $type: "yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest";
    /**
     * ID of the DNS zone to get record set from.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Name of the record set. */
    name: string;
    /** Type of the record set. */
    type: string;
}
export interface ListDnsZoneRecordSetsRequest {
    $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest";
    /**
     * ID of the DNS zone to list record sets in.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `page_size`, the service returns a [ListDnsZoneRecordSetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `page_token` to the
     * [ListDnsZoneRecordSetsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters record sets listed in the response. The expression consists of one or more conditions united by `AND` operator: `<condition1> [AND <condition2> [<...> AND <conditionN>]]`.
     *
     * Each condition has the form `<field> <operator> <value>`, where:
     * 1. `<field>` is the field name. Currently you can use filtering only on the [RecordSet.name] and [RecordSet.type] fields.
     * 2. `<operator>` is a logical operator, one of `=`, `!=`, `IN`, `NOT IN`.
     * 3. `<value>` represents a value.
     * 3.1. In case of single value condition (`=` or `!=`), the value is a string in double (`"`) or single (`'`) quotes. C-style escape sequences are supported (`\"` turns to `"`, `\'` to `'`, `\\` to backslash).
     * 3.2. In case of a list of values condition (`IN` or `NOT IN`), the value is `(<string1>, <string2>, .., <stringN>)`, where `<string>` is a string in double (`"`) or single (`'`) quotes.
     *
     * Examples of a filter: `name="my-record-set"`, `type IN ("MX","A") AND name="works.on.my.machine."`.
     */
    filter: string;
}
export interface ListDnsZoneRecordSetsResponse {
    $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse";
    /** List of record sets in the specified DNS zone. */
    recordSets: RecordSet[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZoneRecordSetsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZoneRecordSetsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface UpdateRecordSetsRequest {
    $type: "yandex.cloud.dns.v1.UpdateRecordSetsRequest";
    /**
     * ID of the DNS zone to update record sets in.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** List of record sets to delete. */
    deletions: RecordSet[];
    /** List of record sets to add. */
    additions: RecordSet[];
}
export interface UpdateRecordSetsMetadata {
    $type: "yandex.cloud.dns.v1.UpdateRecordSetsMetadata";
}
export interface UpsertRecordSetsRequest {
    $type: "yandex.cloud.dns.v1.UpsertRecordSetsRequest";
    /**
     * ID of the DNS zone to upsert record sets to.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /** Delete only specified records from corresponding record sets. */
    deletions: RecordSet[];
    /** Entirely replace specified record sets. */
    replacements: RecordSet[];
    /** Replace specified records or add new ones if no such record sets exists. */
    merges: RecordSet[];
}
export interface UpsertRecordSetsMetadata {
    $type: "yandex.cloud.dns.v1.UpsertRecordSetsMetadata";
}
export interface RecordSetDiff {
    $type: "yandex.cloud.dns.v1.RecordSetDiff";
    /** List of record sets that were added */
    additions: RecordSet[];
    /** List of record sets that were deleted */
    deletions: RecordSet[];
}
export interface ListDnsZoneOperationsRequest {
    $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsRequest";
    /**
     * ID of the DNS zone to list operations for.
     *
     * To get a DNS zone ID, make a [DnsZoneService.List] request.
     */
    dnsZoneId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size], the service returns a [ListDnsZoneOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListDnsZoneOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters DNS zones listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on the [DnsZone.name] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Example of a filter: `name=my-dns-zone`.
     */
    filter: string;
}
export interface ListDnsZoneOperationsResponse {
    $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsResponse";
    /** List of operations for the specified DNS zone. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListDnsZoneOperationsRequest.page_size], use `next_page_token` as the value
     * for the [ListDnsZoneOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `next_page_token` to continue paging through the results.
     */
    nextPageToken: string;
}
export declare const UpdateDnsZonePrivateNetworksRequest: {
    $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksRequest";
    encode(message: UpdateDnsZonePrivateNetworksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZonePrivateNetworksRequest;
    fromJSON(object: any): UpdateDnsZonePrivateNetworksRequest;
    toJSON(message: UpdateDnsZonePrivateNetworksRequest): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
        privateNetworkIdAdditions?: string[] | undefined;
        privateNetworkIdDeletions?: string[] | undefined;
    } & {
        dnsZoneId?: string | undefined;
        privateNetworkIdAdditions?: (string[] & string[] & Record<Exclude<keyof I["privateNetworkIdAdditions"], "$type" | keyof string[]>, never>) | undefined;
        privateNetworkIdDeletions?: (string[] & string[] & Record<Exclude<keyof I["privateNetworkIdDeletions"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId" | "privateNetworkIdAdditions" | "privateNetworkIdDeletions">, never>>(object: I): UpdateDnsZonePrivateNetworksRequest;
};
export declare const UpdateDnsZonePrivateNetworksMetadata: {
    $type: "yandex.cloud.dns.v1.UpdateDnsZonePrivateNetworksMetadata";
    encode(message: UpdateDnsZonePrivateNetworksMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZonePrivateNetworksMetadata;
    fromJSON(object: any): UpdateDnsZonePrivateNetworksMetadata;
    toJSON(message: UpdateDnsZonePrivateNetworksMetadata): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): UpdateDnsZonePrivateNetworksMetadata;
};
export declare const GetDnsZoneRequest: {
    $type: "yandex.cloud.dns.v1.GetDnsZoneRequest";
    encode(message: GetDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDnsZoneRequest;
    fromJSON(object: any): GetDnsZoneRequest;
    toJSON(message: GetDnsZoneRequest): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): GetDnsZoneRequest;
};
export declare const ListDnsZonesRequest: {
    $type: "yandex.cloud.dns.v1.ListDnsZonesRequest";
    encode(message: ListDnsZonesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZonesRequest;
    fromJSON(object: any): ListDnsZonesRequest;
    toJSON(message: ListDnsZonesRequest): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListDnsZonesRequest;
};
export declare const ListDnsZonesResponse: {
    $type: "yandex.cloud.dns.v1.ListDnsZonesResponse";
    encode(message: ListDnsZonesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZonesResponse;
    fromJSON(object: any): ListDnsZonesResponse;
    toJSON(message: ListDnsZonesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        dnsZones?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zone?: string | undefined;
            privateVisibility?: {
                networkIds?: string[] | undefined;
            } | undefined;
            publicVisibility?: {} | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        dnsZones?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zone?: string | undefined;
            privateVisibility?: {
                networkIds?: string[] | undefined;
            } | undefined;
            publicVisibility?: {} | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zone?: string | undefined;
            privateVisibility?: {
                networkIds?: string[] | undefined;
            } | undefined;
            publicVisibility?: {} | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["dnsZones"][number]["labels"], string | number>, never>) | undefined;
            zone?: string | undefined;
            privateVisibility?: ({
                networkIds?: string[] | undefined;
            } & {
                networkIds?: (string[] & string[] & Record<Exclude<keyof I["dnsZones"][number]["privateVisibility"]["networkIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["dnsZones"][number]["privateVisibility"], "$type" | "networkIds">, never>) | undefined;
            publicVisibility?: ({} & {} & Record<Exclude<keyof I["dnsZones"][number]["publicVisibility"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["dnsZones"][number], "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "zone" | "privateVisibility" | "publicVisibility">, never>)[] & Record<Exclude<keyof I["dnsZones"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            zone?: string | undefined;
            privateVisibility?: {
                networkIds?: string[] | undefined;
            } | undefined;
            publicVisibility?: {} | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "dnsZones">, never>>(object: I): ListDnsZonesResponse;
};
export declare const CreateDnsZoneRequest: {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest";
    encode(message: CreateDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneRequest;
    fromJSON(object: any): CreateDnsZoneRequest;
    toJSON(message: CreateDnsZoneRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        zone?: string | undefined;
        privateVisibility?: {
            networkIds?: string[] | undefined;
        } | undefined;
        publicVisibility?: {} | undefined;
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
        zone?: string | undefined;
        privateVisibility?: ({
            networkIds?: string[] | undefined;
        } & {
            networkIds?: (string[] & string[] & Record<Exclude<keyof I["privateVisibility"]["networkIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["privateVisibility"], "$type" | "networkIds">, never>) | undefined;
        publicVisibility?: ({} & {} & Record<Exclude<keyof I["publicVisibility"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "labels" | "zone" | "privateVisibility" | "publicVisibility">, never>>(object: I): CreateDnsZoneRequest;
};
export declare const CreateDnsZoneRequest_LabelsEntry: {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneRequest.LabelsEntry";
    encode(message: CreateDnsZoneRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneRequest_LabelsEntry;
    fromJSON(object: any): CreateDnsZoneRequest_LabelsEntry;
    toJSON(message: CreateDnsZoneRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateDnsZoneRequest_LabelsEntry;
};
export declare const CreateDnsZoneMetadata: {
    $type: "yandex.cloud.dns.v1.CreateDnsZoneMetadata";
    encode(message: CreateDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDnsZoneMetadata;
    fromJSON(object: any): CreateDnsZoneMetadata;
    toJSON(message: CreateDnsZoneMetadata): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): CreateDnsZoneMetadata;
};
export declare const UpdateDnsZoneRequest: {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest";
    encode(message: UpdateDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneRequest;
    fromJSON(object: any): UpdateDnsZoneRequest;
    toJSON(message: UpdateDnsZoneRequest): unknown;
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
        dnsZoneId?: string | undefined;
        privateVisibility?: {
            networkIds?: string[] | undefined;
        } | undefined;
        publicVisibility?: {} | undefined;
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
        dnsZoneId?: string | undefined;
        privateVisibility?: ({
            networkIds?: string[] | undefined;
        } & {
            networkIds?: (string[] & string[] & Record<Exclude<keyof I["privateVisibility"]["networkIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["privateVisibility"], "$type" | "networkIds">, never>) | undefined;
        publicVisibility?: ({} & {} & Record<Exclude<keyof I["publicVisibility"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "dnsZoneId" | "privateVisibility" | "publicVisibility">, never>>(object: I): UpdateDnsZoneRequest;
};
export declare const UpdateDnsZoneRequest_LabelsEntry: {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneRequest.LabelsEntry";
    encode(message: UpdateDnsZoneRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneRequest_LabelsEntry;
    fromJSON(object: any): UpdateDnsZoneRequest_LabelsEntry;
    toJSON(message: UpdateDnsZoneRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateDnsZoneRequest_LabelsEntry;
};
export declare const UpdateDnsZoneMetadata: {
    $type: "yandex.cloud.dns.v1.UpdateDnsZoneMetadata";
    encode(message: UpdateDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateDnsZoneMetadata;
    fromJSON(object: any): UpdateDnsZoneMetadata;
    toJSON(message: UpdateDnsZoneMetadata): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): UpdateDnsZoneMetadata;
};
export declare const DeleteDnsZoneRequest: {
    $type: "yandex.cloud.dns.v1.DeleteDnsZoneRequest";
    encode(message: DeleteDnsZoneRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDnsZoneRequest;
    fromJSON(object: any): DeleteDnsZoneRequest;
    toJSON(message: DeleteDnsZoneRequest): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): DeleteDnsZoneRequest;
};
export declare const DeleteDnsZoneMetadata: {
    $type: "yandex.cloud.dns.v1.DeleteDnsZoneMetadata";
    encode(message: DeleteDnsZoneMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteDnsZoneMetadata;
    fromJSON(object: any): DeleteDnsZoneMetadata;
    toJSON(message: DeleteDnsZoneMetadata): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
    } & {
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId">, never>>(object: I): DeleteDnsZoneMetadata;
};
export declare const GetDnsZoneRecordSetRequest: {
    $type: "yandex.cloud.dns.v1.GetDnsZoneRecordSetRequest";
    encode(message: GetDnsZoneRecordSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetDnsZoneRecordSetRequest;
    fromJSON(object: any): GetDnsZoneRecordSetRequest;
    toJSON(message: GetDnsZoneRecordSetRequest): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        name?: string | undefined;
        dnsZoneId?: string | undefined;
    } & {
        type?: string | undefined;
        name?: string | undefined;
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "name" | "dnsZoneId">, never>>(object: I): GetDnsZoneRecordSetRequest;
};
export declare const ListDnsZoneRecordSetsRequest: {
    $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsRequest";
    encode(message: ListDnsZoneRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneRecordSetsRequest;
    fromJSON(object: any): ListDnsZoneRecordSetsRequest;
    toJSON(message: ListDnsZoneRecordSetsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        dnsZoneId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "dnsZoneId">, never>>(object: I): ListDnsZoneRecordSetsRequest;
};
export declare const ListDnsZoneRecordSetsResponse: {
    $type: "yandex.cloud.dns.v1.ListDnsZoneRecordSetsResponse";
    encode(message: ListDnsZoneRecordSetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneRecordSetsResponse;
    fromJSON(object: any): ListDnsZoneRecordSetsResponse;
    toJSON(message: ListDnsZoneRecordSetsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        recordSets?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        recordSets?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["recordSets"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["recordSets"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["recordSets"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "recordSets">, never>>(object: I): ListDnsZoneRecordSetsResponse;
};
export declare const UpdateRecordSetsRequest: {
    $type: "yandex.cloud.dns.v1.UpdateRecordSetsRequest";
    encode(message: UpdateRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRecordSetsRequest;
    fromJSON(object: any): UpdateRecordSetsRequest;
    toJSON(message: UpdateRecordSetsRequest): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
        deletions?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
        additions?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
    } & {
        dnsZoneId?: string | undefined;
        deletions?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["deletions"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["deletions"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["deletions"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
        additions?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["additions"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["additions"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["additions"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId" | "deletions" | "additions">, never>>(object: I): UpdateRecordSetsRequest;
};
export declare const UpdateRecordSetsMetadata: {
    $type: "yandex.cloud.dns.v1.UpdateRecordSetsMetadata";
    encode(_: UpdateRecordSetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRecordSetsMetadata;
    fromJSON(_: any): UpdateRecordSetsMetadata;
    toJSON(_: UpdateRecordSetsMetadata): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): UpdateRecordSetsMetadata;
};
export declare const UpsertRecordSetsRequest: {
    $type: "yandex.cloud.dns.v1.UpsertRecordSetsRequest";
    encode(message: UpsertRecordSetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRecordSetsRequest;
    fromJSON(object: any): UpsertRecordSetsRequest;
    toJSON(message: UpsertRecordSetsRequest): unknown;
    fromPartial<I extends {
        dnsZoneId?: string | undefined;
        deletions?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
        replacements?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
        merges?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
    } & {
        dnsZoneId?: string | undefined;
        deletions?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["deletions"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["deletions"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["deletions"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
        replacements?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["replacements"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["replacements"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["replacements"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
        merges?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["merges"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["merges"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["merges"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "dnsZoneId" | "deletions" | "replacements" | "merges">, never>>(object: I): UpsertRecordSetsRequest;
};
export declare const UpsertRecordSetsMetadata: {
    $type: "yandex.cloud.dns.v1.UpsertRecordSetsMetadata";
    encode(_: UpsertRecordSetsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpsertRecordSetsMetadata;
    fromJSON(_: any): UpsertRecordSetsMetadata;
    toJSON(_: UpsertRecordSetsMetadata): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): UpsertRecordSetsMetadata;
};
export declare const RecordSetDiff: {
    $type: "yandex.cloud.dns.v1.RecordSetDiff";
    encode(message: RecordSetDiff, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecordSetDiff;
    fromJSON(object: any): RecordSetDiff;
    toJSON(message: RecordSetDiff): unknown;
    fromPartial<I extends {
        deletions?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
        additions?: {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] | undefined;
    } & {
        deletions?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["deletions"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["deletions"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["deletions"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
        additions?: ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[] & ({
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        } & {
            type?: string | undefined;
            name?: string | undefined;
            data?: (string[] & string[] & Record<Exclude<keyof I["additions"][number]["data"], "$type" | keyof string[]>, never>) | undefined;
            ttl?: number | undefined;
        } & Record<Exclude<keyof I["additions"][number], "$type" | "type" | "name" | "data" | "ttl">, never>)[] & Record<Exclude<keyof I["additions"], "$type" | keyof {
            type?: string | undefined;
            name?: string | undefined;
            data?: string[] | undefined;
            ttl?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "deletions" | "additions">, never>>(object: I): RecordSetDiff;
};
export declare const ListDnsZoneOperationsRequest: {
    $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsRequest";
    encode(message: ListDnsZoneOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneOperationsRequest;
    fromJSON(object: any): ListDnsZoneOperationsRequest;
    toJSON(message: ListDnsZoneOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        dnsZoneId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        dnsZoneId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "dnsZoneId">, never>>(object: I): ListDnsZoneOperationsRequest;
};
export declare const ListDnsZoneOperationsResponse: {
    $type: "yandex.cloud.dns.v1.ListDnsZoneOperationsResponse";
    encode(message: ListDnsZoneOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListDnsZoneOperationsResponse;
    fromJSON(object: any): ListDnsZoneOperationsResponse;
    toJSON(message: ListDnsZoneOperationsResponse): unknown;
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
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListDnsZoneOperationsResponse;
};
/** A set of methods for managing DNS zones. */
export declare const DnsZoneServiceService: {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDnsZoneRequest;
        readonly responseSerialize: (value: DnsZone) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DnsZone;
    };
    /** Retrieves the list of DNS zones in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZonesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZonesRequest;
        readonly responseSerialize: (value: ListDnsZonesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZonesResponse;
    };
    /** Creates a DNS zone in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified DNS zone. */
    readonly update: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified DNS zone. */
    readonly delete: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteDnsZoneRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteDnsZoneRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the specified record set. */
    readonly getRecordSet: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/GetRecordSet";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetDnsZoneRecordSetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetDnsZoneRecordSetRequest;
        readonly responseSerialize: (value: RecordSet) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RecordSet;
    };
    /** Retrieves the list of record sets in the specified folder. */
    readonly listRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZoneRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZoneRecordSetsRequest;
        readonly responseSerialize: (value: ListDnsZoneRecordSetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZoneRecordSetsResponse;
    };
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    readonly updateRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateRecordSetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    readonly upsertRecordSets: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpsertRecordSets";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpsertRecordSetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpsertRecordSetsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Lists operations for the specified DNS zone. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListDnsZoneOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListDnsZoneOperationsRequest;
        readonly responseSerialize: (value: ListDnsZoneOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListDnsZoneOperationsResponse;
    };
    /** Lists existing access bindings for the specified DNS zone. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified DNS zone. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified DNS zone. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Atomically updates zone private networks */
    readonly updatePrivateNetworks: {
        readonly path: "/yandex.cloud.dns.v1.DnsZoneService/UpdatePrivateNetworks";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateDnsZonePrivateNetworksRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateDnsZonePrivateNetworksRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface DnsZoneServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get: handleUnaryCall<GetDnsZoneRequest, DnsZone>;
    /** Retrieves the list of DNS zones in the specified folder. */
    list: handleUnaryCall<ListDnsZonesRequest, ListDnsZonesResponse>;
    /** Creates a DNS zone in the specified folder. */
    create: handleUnaryCall<CreateDnsZoneRequest, Operation>;
    /** Updates the specified DNS zone. */
    update: handleUnaryCall<UpdateDnsZoneRequest, Operation>;
    /** Deletes the specified DNS zone. */
    delete: handleUnaryCall<DeleteDnsZoneRequest, Operation>;
    /** Returns the specified record set. */
    getRecordSet: handleUnaryCall<GetDnsZoneRecordSetRequest, RecordSet>;
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets: handleUnaryCall<ListDnsZoneRecordSetsRequest, ListDnsZoneRecordSetsResponse>;
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets: handleUnaryCall<UpdateRecordSetsRequest, Operation>;
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets: handleUnaryCall<UpsertRecordSetsRequest, Operation>;
    /** Lists operations for the specified DNS zone. */
    listOperations: handleUnaryCall<ListDnsZoneOperationsRequest, ListDnsZoneOperationsResponse>;
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
    /** Atomically updates zone private networks */
    updatePrivateNetworks: handleUnaryCall<UpdateDnsZonePrivateNetworksRequest, Operation>;
}
export interface DnsZoneServiceClient extends Client {
    /**
     * Returns the specified DNS zone.
     *
     * To get the list of all available DNS zones, make a [List] request.
     */
    get(request: GetDnsZoneRequest, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    get(request: GetDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    get(request: GetDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DnsZone) => void): ClientUnaryCall;
    /** Retrieves the list of DNS zones in the specified folder. */
    list(request: ListDnsZonesRequest, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    list(request: ListDnsZonesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    list(request: ListDnsZonesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZonesResponse) => void): ClientUnaryCall;
    /** Creates a DNS zone in the specified folder. */
    create(request: CreateDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified DNS zone. */
    update(request: UpdateDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified DNS zone. */
    delete(request: DeleteDnsZoneRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDnsZoneRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteDnsZoneRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the specified record set. */
    getRecordSet(request: GetDnsZoneRecordSetRequest, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    getRecordSet(request: GetDnsZoneRecordSetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    getRecordSet(request: GetDnsZoneRecordSetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RecordSet) => void): ClientUnaryCall;
    /** Retrieves the list of record sets in the specified folder. */
    listRecordSets(request: ListDnsZoneRecordSetsRequest, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    listRecordSets(request: ListDnsZoneRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    listRecordSets(request: ListDnsZoneRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZoneRecordSetsResponse) => void): ClientUnaryCall;
    /**
     * Method with strict control for changing zone state. Returns error when:
     * 1. Deleted record is not found.
     * 2. Found record with matched type and name but different TTL or value.
     * 3. Attempted to add record with existing name and type.
     * Deletions happen first. If a record with the same name and type exists in both lists,
     * then the existing record will be deleted, and a new one added.
     */
    updateRecordSets(request: UpdateRecordSetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRecordSets(request: UpdateRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateRecordSets(request: UpdateRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /**
     * Method without strict control for changing zone state. Nothing happens if deleted record doesn't exist.
     * Deletes records that match all specified fields which allows to delete only specified records from a record set.
     */
    upsertRecordSets(request: UpsertRecordSetsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsertRecordSets(request: UpsertRecordSetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    upsertRecordSets(request: UpsertRecordSetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Lists operations for the specified DNS zone. */
    listOperations(request: ListDnsZoneOperationsRequest, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDnsZoneOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListDnsZoneOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListDnsZoneOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified DNS zone. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified DNS zone. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified DNS zone. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Atomically updates zone private networks */
    updatePrivateNetworks(request: UpdateDnsZonePrivateNetworksRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updatePrivateNetworks(request: UpdateDnsZonePrivateNetworksRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updatePrivateNetworks(request: UpdateDnsZonePrivateNetworksRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const DnsZoneServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): DnsZoneServiceClient;
    service: typeof DnsZoneServiceService;
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
