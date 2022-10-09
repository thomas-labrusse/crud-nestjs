import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OffapiService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(barcode: string): Promise<any> {
    const baseURL = 'https://world.openfoodfacts.org/api/v2/product/';
    const result = await this.httpService.axiosRef.request({
      url: barcode,
      baseURL: baseURL,
      headers: {
        'User-Agent': 'Crud Assignment - Version 1.0',
      },
    });
    return result.data;
  }
}
