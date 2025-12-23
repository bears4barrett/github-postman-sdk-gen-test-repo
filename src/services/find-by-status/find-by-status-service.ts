import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { FindsPetsByStatus_Params } from './request-params';

/**
 * Service class for FindByStatusService operations.
 * Provides methods to interact with FindByStatusService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class FindByStatusService extends BaseService {
  protected findsPetsByStatus_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for findsPetsByStatus_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFindsPetsByStatus_Config(config: Partial<SdkConfig>): this {
    this.findsPetsByStatus_Config = config;
    return this;
  }

  /**
   * Multiple status values can be provided with comma separated strings.
   * @param {string} params.accept -
   * @param {string} [params.status] - (Required) Status values that need to be considered for filter
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async findsPetsByStatus_(
    params: FindsPetsByStatus_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.findsPetsByStatus_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/pet/findByStatus')
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
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }
}
