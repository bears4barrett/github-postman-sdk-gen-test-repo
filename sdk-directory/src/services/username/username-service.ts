import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { GetUserByUserName_Params } from './request-params';
import {
  UpdateUserResourceRequest,
  updateUserResourceRequestRequest,
} from './models/update-user-resource-request';

/**
 * Service class for UsernameService operations.
 * Provides methods to interact with UsernameService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UsernameService extends BaseService {
  protected getUserByUserName_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  protected updateUserResource_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  protected deleteUserResource_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for getUserByUserName_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUserByUserName_Config(config: Partial<SdkConfig>): this {
    this.getUserByUserName_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for updateUserResource_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateUserResource_Config(config: Partial<SdkConfig>): this {
    this.updateUserResource_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteUserResource_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteUserResource_Config(config: Partial<SdkConfig>): this {
    this.deleteUserResource_Config = config;
    return this;
  }

  /**
   * Get user detail based on username.
   * @param {string} username -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async getUserByUserName_(
    username: string,
    params: GetUserByUserName_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.getUserByUserName_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/user/{username}')
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
        key: 'username',
        value: username,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }

  /**
   * This can only be done by the logged in user.
   * @param {string} username -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateUserResource_(
    username: string,
    body: UpdateUserResourceRequest,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.updateUserResource_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/user/{username}')
      .setRequestSchema(updateUserResourceRequestRequest)
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
        key: 'username',
        value: username,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<any>(request);
  }

  /**
   * This can only be done by the logged in user.
   * @param {string} username -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deleteUserResource_(
    username: string,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.deleteUserResource_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/user/{username}')
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
        key: 'username',
        value: username,
      })
      .build();
    return this.client.call<any>(request);
  }
}
