export declare const protobufPackage = "yandex.cloud.loadtesting.api.v1.agent";
export declare enum Status {
    STATUS_UNSPECIFIED = 0,
    PREPARING_TEST = 1,
    READY_FOR_TEST = 2,
    TESTING = 3,
    TANK_FAILED = 4,
    PROVISIONING = 5,
    STOPPING = 6,
    STOPPED = 7,
    STARTING = 8,
    RESTARTING = 9,
    UPDATING = 10,
    ERROR = 11,
    CRASHED = 12,
    DELETING = 13,
    INITIALIZING_CONNECTION = 15,
    LOST_CONNECTION_WITH_AGENT = 16,
    UPLOADING_ARTIFACTS = 17,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
