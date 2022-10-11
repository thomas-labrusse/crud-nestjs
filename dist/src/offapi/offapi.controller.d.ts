import { OffapiService } from './offapi.service';
export declare class OffapiController {
    private readonly offapiService;
    constructor(offapiService: OffapiService);
    findOne(barcode: string): Promise<any>;
}
