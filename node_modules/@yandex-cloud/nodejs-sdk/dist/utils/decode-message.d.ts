import { Any } from '../generated/google/protobuf/any';
import { UnknownMessage } from '../generated/typeRegistry';
export declare const decodeMessage: <T extends UnknownMessage>(data: Any) => T;
