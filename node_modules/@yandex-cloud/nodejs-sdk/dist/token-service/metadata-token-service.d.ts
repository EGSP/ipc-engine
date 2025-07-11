import { AxiosRequestConfig } from 'axios';
import { TokenService } from '../types';
declare type Options = AxiosRequestConfig;
export declare class MetadataTokenService implements TokenService {
    private readonly url;
    private readonly opts;
    private token?;
    constructor(url?: string, options?: Options);
    getToken(): Promise<string>;
    private fetchToken;
    private initialize;
}
export {};
