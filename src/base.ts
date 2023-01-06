
type Config = {
    providerName: string,
    baseURL: string
}

export abstract class Base{
    private providerName: string;
    private baseURL: string;

    constructor(config: Config) {
       this.providerName= config.providerName;
       this.baseURL= config.baseURL || "http://localhost:8000"; 
    }
    
    
}