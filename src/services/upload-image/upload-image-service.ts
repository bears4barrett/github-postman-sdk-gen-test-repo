import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { UploadsAnImage_Params } from './request-params';

/**
 * Service class for UploadImageService operations.
 * Provides methods to interact with UploadImageService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UploadImageService extends BaseService {
  protected uploadsAnImage_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for uploadsAnImage_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUploadsAnImage_Config(config: Partial<SdkConfig>): this {
    this.uploadsAnImage_Config = config;
    return this;
  }

  /**
   * Upload image of the pet.
   * @param {string} petId -
   * @param {string} params.accept -
   * @param {string} [params.additionalMetadata] - Additional Metadata
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async uploadsAnImage_(
    petId: string,
    body: ArrayBuffer,
    params: UploadsAnImage_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.uploadsAnImage_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/pet/{petId}/uploadImage')
      .setRequestSchema(z.any())
      .addApiKeyAuth(resolvedConfig?.apiKey, 'api_key')
      .setRequestContentType(ContentType.Binary)
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
        key: 'petId',
        value: petId,
      })
      .addQueryParam({
        key: 'additionalMetadata',
        value: params?.additionalMetadata,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/octet-stream' })
      .addBody(body)
      .build();
    return this.client.call<any>(request);
  }
}
