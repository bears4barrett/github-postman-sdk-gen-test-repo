import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  DeletesAPet_Params,
  FindPetById_Params,
  UpdatesAPetInTheStoreWithFormData_Params,
} from './request-params';

/**
 * Service class for PetIdService operations.
 * Provides methods to interact with PetIdService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PetIdService extends BaseService {
  protected findPetById_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  protected updatesAPetInTheStoreWithFormData_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  protected deletesAPet_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  /**
   * Sets method-level configuration for findPetById_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setFindPetById_Config(config: Partial<SdkConfig>): this {
    this.findPetById_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for updatesAPetInTheStoreWithFormData_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdatesAPetInTheStoreWithFormData_Config(config: Partial<SdkConfig>): this {
    this.updatesAPetInTheStoreWithFormData_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for deletesAPet_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeletesAPet_Config(config: Partial<SdkConfig>): this {
    this.deletesAPet_Config = config;
    return this;
  }

  /**
   * Returns a single pet.
   * @param {string} petId -
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async findPetById_(
    petId: string,
    params: FindPetById_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.findPetById_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('GET')
      .setPath('/pet/{petId}')
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
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .build();
    return this.client.call<any>(request);
  }

  /**
   * Updates a pet resource based on the form data.
   * @param {string} petId -
   * @param {string} params.accept -
   * @param {string} [params.name] - Name of pet that needs to be updated
   * @param {string} [params.status] - Status of pet that needs to be updated
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updatesAPetInTheStoreWithFormData_(
    petId: string,
    params: UpdatesAPetInTheStoreWithFormData_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(
      this.updatesAPetInTheStoreWithFormData_Config,
      requestConfig,
    );
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/pet/{petId}')
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
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
      })
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

  /**
   * Delete a pet.
   * @param {string} petId -
   * @param {string} params.apiKey -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async deletesAPet_(
    petId: string,
    params: DeletesAPet_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.deletesAPet_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('DELETE')
      .setPath('/pet/{petId}')
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
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addHeaderParam({
        key: 'api_key',
        value: params?.apiKey,
      })
      .build();
    return this.client.call<any>(request);
  }
}
