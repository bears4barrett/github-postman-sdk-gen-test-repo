import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  PlaceAnOrderForAPetRequest,
  placeAnOrderForAPetRequestRequest,
} from './models/place-an-order-for-a-pet-request';
import { PlaceAnOrderForAPet_Params } from './request-params';

/**
 * Service class for OrderService operations.
 * Provides methods to interact with OrderService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OrderService extends BaseService {
  protected placeAnOrderForAPet_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for placeAnOrderForAPet_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPlaceAnOrderForAPet_Config(config: Partial<SdkConfig>): this {
    this.placeAnOrderForAPet_Config = config;
    return this;
  }

  /**
   * Place a new order in the store.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async placeAnOrderForAPet_(
    body: PlaceAnOrderForAPetRequest,
    params: PlaceAnOrderForAPet_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.placeAnOrderForAPet_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/store/order')
      .setRequestSchema(placeAnOrderForAPetRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .setRetryAttempts(resolvedConfig)
      .setRetryDelayMs(resolvedConfig)
      .setResponseValidation(resolvedConfig)
      .setTimeoutMs(resolvedConfig)
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<any>(request);
  }
}
