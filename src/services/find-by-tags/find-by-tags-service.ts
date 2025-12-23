import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { FindsPetsByTags_Params } from './request-params';

/**
 * Service class for FindByTagsService operations.
 * Provides methods to interact with FindByTagsService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class FindByTagsService extends BaseService {
  protected findsPetsByTags_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for findsPetsByTags_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFindsPetsByTags_Config(config: Partial<SdkConfig>): this {
    this.findsPetsByTags_Config = config;
    return this;
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @param {string} params.accept -
   * @param {string} [params.tags] - (Required) Tags to filter by
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async findsPetsByTags_(
    params: FindsPetsByTags_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.findsPetsByTags_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/pet/findByTags')
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
        key: 'tags',
        value: params?.tags,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }
}
