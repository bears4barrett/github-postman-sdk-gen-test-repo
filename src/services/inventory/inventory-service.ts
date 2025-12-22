import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { ReturnsPetInventoriesByStatus_Params } from './request-params';

/**
 * Service class for InventoryService operations.
 * Provides methods to interact with InventoryService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class InventoryService extends BaseService {
  protected returnsPetInventoriesByStatus_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for returnsPetInventoriesByStatus_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setReturnsPetInventoriesByStatus_Config(config: Partial<SdkConfig>): this {
    this.returnsPetInventoriesByStatus_Config = config;
    return this;
  }

  /**
   * Returns a map of status codes to quantities.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async returnsPetInventoriesByStatus_(
    params: ReturnsPetInventoriesByStatus_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(
      this.returnsPetInventoriesByStatus_Config,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/store/inventory')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'api_key')
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
      .build();
    return this.client.call<any>(request);
  }
}
