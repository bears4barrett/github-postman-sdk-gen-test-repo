import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';

/**
 * Service class for LogoutService operations.
 * Provides methods to interact with LogoutService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class LogoutService extends BaseService {
  protected logsOutCurrentLoggedInUserSession_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for logsOutCurrentLoggedInUserSession_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setLogsOutCurrentLoggedInUserSession_Config(config: Partial<SdkConfig>): this {
    this.logsOutCurrentLoggedInUserSession_Config = config;
    return this;
  }

  /**
   * Log user out of the system.
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async logsOutCurrentLoggedInUserSession_(
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(
      this.logsOutCurrentLoggedInUserSession_Config,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/user/logout')
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
      .build();
    return this.client.call<any>(request);
  }
}
