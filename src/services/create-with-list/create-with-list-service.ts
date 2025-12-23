import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  CreatesListOfUsersWithGivenInputArrayRequest,
  createsListOfUsersWithGivenInputArrayRequestRequest,
} from './models/creates-list-of-users-with-given-input-array-request';
import { CreatesListOfUsersWithGivenInputArray_Params } from './request-params';

/**
 * Service class for CreateWithListService operations.
 * Provides methods to interact with CreateWithListService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CreateWithListService extends BaseService {
  protected createsListOfUsersWithGivenInputArray_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for createsListOfUsersWithGivenInputArray_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setCreatesListOfUsersWithGivenInputArray_Config(config: Partial<SdkConfig>): this {
    this.createsListOfUsersWithGivenInputArray_Config = config;
    return this;
  }

  /**
   * Creates list of users with given input array.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async createsListOfUsersWithGivenInputArray_(
    body: CreatesListOfUsersWithGivenInputArrayRequest[],
    params: CreatesListOfUsersWithGivenInputArray_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(
      this.createsListOfUsersWithGivenInputArray_Config,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/user/createWithList')
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
