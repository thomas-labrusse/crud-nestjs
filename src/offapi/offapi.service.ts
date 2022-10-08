import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OffapiService {
  constructor(private readonly httpService: HttpService) {}
  async findOne(barcode: string): Promise<any> {
    const result = await this.httpService.axiosRef.get(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}`,
    );
    console.log('RESULT', result.data);
    return result.data;
  }
}
