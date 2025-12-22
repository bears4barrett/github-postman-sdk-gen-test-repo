import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { LogsUserIntoTheSystem_Params } from './request-params';

/**
 * Service class for LoginService operations.
 * Provides methods to interact with LoginService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LoginService extends BaseService {
  protected logsUserIntoTheSystem_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for logsUserIntoTheSystem_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogsUserIntoTheSystem_Config(config: Partial<SdkConfig>): this {
    this.logsUserIntoTheSystem_Config = config;
    return this;
  }

  /**
   * Log into the system.
   * @param {string} params.accept -
   * @param {string} [params.username] - The user name for login
   * @param {string} [params.password] - The password for login in clear text
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logsUserIntoTheSystem_(
    params: LogsUserIntoTheSystem_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.logsUserIntoTheSystem_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/user/login')
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
      .addQueryParam({
        key: 'username',
        value: params?.username,
      })
      .addQueryParam({
        key: 'password',
        value: params?.password,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }
}
