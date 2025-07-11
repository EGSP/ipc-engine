import { IIAmCredentials, ISslCredentials, TokenService } from '../types';
export declare class IamTokenService implements TokenService {
    readonly sslCredentials?: ISslCredentials;
    private readonly iamCredentials;
    private jwtExpirationTimeout;
    private tokenExpirationTimeout;
    private tokenRequestTimeout;
    private token;
    private tokenTimestamp;
    constructor(iamCredentials: IIAmCredentials, sslCredentials?: ISslCredentials);
    private get expired();
    getToken(): Promise<string>;
    private client;
    private getJwtRequest;
    private initialize;
    private requestToken;
}
