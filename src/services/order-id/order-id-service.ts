import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { FindPurchaseOrderById_Params } from './request-params';

/**
 * Service class for OrderIdService operations.
 * Provides methods to interact with OrderIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class OrderIdService extends BaseService {
  protected findPurchaseOrderById_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  protected deletePurchaseOrderByIdentifier_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for findPurchaseOrderById_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFindPurchaseOrderById_Config(config: Partial<SdkConfig>): this {
    this.findPurchaseOrderById_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deletePurchaseOrderByIdentifier_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeletePurchaseOrderByIdentifier_Config(config: Partial<SdkConfig>): this {
    this.deletePurchaseOrderByIdentifier_Config = config;
    return this;
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   * @param {string} orderId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async findPurchaseOrderById_(
    orderId: string,
    params: FindPurchaseOrderById_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.findPurchaseOrderById_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/store/order/{orderId}')
      .setRequestSchema(z.any())
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
      .addPathParam({
        key: 'orderId',
        value: orderId,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.
   * @param {string} orderId -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deletePurchaseOrderByIdentifier_(
    orderId: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(
      this.deletePurchaseOrderByIdentifier_Config,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/store/order/{orderId}')
      .setRequestSchema(z.any())
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
      .addPathParam({
        key: 'orderId',
        value: orderId,
      })
      .build();
    return this.client.call<any>(request);
  }
}
