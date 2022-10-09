import { HttpService } from '@nestjs/axios';
import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class OffapiService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async findOne(barcode: string): Promise<any> {
    const result = await this.httpService.axiosRef.get(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}`,
    );
    console.log('Cache', await this.cacheManager.get('key'));
    return result.data;
  }
}
