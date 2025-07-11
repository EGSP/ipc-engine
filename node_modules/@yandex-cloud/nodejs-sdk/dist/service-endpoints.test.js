"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_endpoints_1 = require("./service-endpoints");
const _1 = require(".");
describe('service endpoints', () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', () => {
        for (const [, ServiceClient] of Object.entries(_1.serviceClients)) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            expect(() => {
                const endpoint = (0, service_endpoints_1.getServiceClientEndpoint)(ServiceClient);
                expect(endpoint).toBeTruthy();
            }).not.toThrow();
        }
    });
    it('should throw exception if endpoint was not found', () => {
        const serviceName = 'myCustomService';
        expect(() => {
            (0, service_endpoints_1.getServiceClientEndpoint)({ serviceName });
        }).toThrow(`Endpoint for service ${serviceName} is no defined`);
    });
    it('should throw exception if client class has no serviceName option', () => {
        expect(() => {
            (0, service_endpoints_1.getServiceClientEndpoint)({});
        }).toThrow('Unable to retrieve serviceName of provided service client class');
    });
});
