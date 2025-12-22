import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import {
  UpdateAnExistingPetRequest,
  updateAnExistingPetRequestRequest,
} from './models/update-an-existing-pet-request';
import { AddANewPetToTheStore_Params, UpdateAnExistingPet_Params } from './request-params';
import {
  AddANewPetToTheStoreRequest,
  addANewPetToTheStoreRequestRequest,
} from './models/add-a-new-pet-to-the-store-request';

/**
 * Service class for PetService operations.
 * Provides methods to interact with PetService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PetService extends BaseService {
  protected updateAnExistingPet_Config: Partial<SdkConfig> = { environment: Environment.PETSTORE3 };

  protected addANewPetToTheStore_Config: Partial<SdkConfig> = {
    environment: Environment.PETSTORE3,
  };

  /**
   * Sets method-level configuration for updateAnExistingPet_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setUpdateAnExistingPet_Config(config: Partial<SdkConfig>): this {
    this.updateAnExistingPet_Config = config;
    return this;
  }

  /**
   * Sets method-level configuration for addANewPetToTheStore_.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setAddANewPetToTheStore_Config(config: Partial<SdkConfig>): this {
    this.addANewPetToTheStore_Config = config;
    return this;
  }

  /**
   * Update an existing pet by Id.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async updateAnExistingPet_(
    body: UpdateAnExistingPetRequest,
    params: UpdateAnExistingPet_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.updateAnExistingPet_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('PUT')
      .setPath('/pet')
      .setRequestSchema(updateAnExistingPetRequestRequest)
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<any>(request);
  }

  /**
   * Add a new pet to the store.
   * @param {string} params.accept -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async addANewPetToTheStore_(
    body: AddANewPetToTheStoreRequest,
    params: AddANewPetToTheStore_Params,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<HttpResponse<any>> {
    const resolvedConfig = this.getResolvedConfig(this.addANewPetToTheStore_Config, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/pet')
      .setRequestSchema(addANewPetToTheStoreRequestRequest)
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
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<any>(request);
  }
}
