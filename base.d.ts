type Config = {
    providerName: string;
    baseURL: string;
};
export declare abstract class Base {
    private providerName;
    private baseURL;
    constructor(config: Config);
}
export {};
