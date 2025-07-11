import { Operation } from '../../generated/yandex/cloud/operation/operation';
import { Session } from '../../session';
export declare const waitForOperation: (op: Operation, session: Session, timeoutMs?: number, operationServiceEndpoint?: string | undefined) => Promise<Operation>;
