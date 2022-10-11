import { HttpService } from '@nestjs/axios';
export declare class OffapiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findOne(barcode: string): Promise<any>;
}
