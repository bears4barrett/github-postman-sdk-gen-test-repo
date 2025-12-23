import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { FindByStatusService } from './services/find-by-status';
import { FindByTagsService } from './services/find-by-tags';
import { UploadImageService } from './services/upload-image';
import { PetIdService } from './services/pet-id';
import { PetService } from './services/pet';
import { InventoryService } from './services/inventory';
import { OrderIdService } from './services/order-id';
import { OrderService } from './services/order';
import { CreateWithListService } from './services/create-with-list';
import { LoginService } from './services/login';
import { LogoutService } from './services/logout';
import { UsernameService } from './services/username';
import { UserService } from './services/user';

export * from './services/find-by-status';
export * from './services/find-by-tags';
export * from './services/upload-image';
export * from './services/pet-id';
export * from './services/pet';
export * from './services/inventory';
export * from './services/order-id';
export * from './services/order';
export * from './services/create-with-list';
export * from './services/login';
export * from './services/logout';
export * from './services/username';
export * from './services/user';

export * from './http';
export { Environment } from './http/environment';

export class SwaggerPetstore {
  public readonly findByStatus: FindByStatusService;

  public readonly findByTags: FindByTagsService;

  public readonly uploadImage: UploadImageService;

  public readonly petId: PetIdService;

  public readonly pet: PetService;

  public readonly inventory: InventoryService;

  public readonly orderId: OrderIdService;

  public readonly order: OrderService;

  public readonly createWithList: CreateWithListService;

  public readonly login: LoginService;

  public readonly logout: LogoutService;

  public readonly username: UsernameService;

  public readonly user: UserService;

  constructor(public config: SdkConfig) {
    this.findByStatus = new FindByStatusService(this.config);

    this.findByTags = new FindByTagsService(this.config);

    this.uploadImage = new UploadImageService(this.config);

    this.petId = new PetIdService(this.config);

    this.pet = new PetService(this.config);

    this.inventory = new InventoryService(this.config);

    this.orderId = new OrderIdService(this.config);

    this.order = new OrderService(this.config);

    this.createWithList = new CreateWithListService(this.config);

    this.login = new LoginService(this.config);

    this.logout = new LogoutService(this.config);

    this.username = new UsernameService(this.config);

    this.user = new UserService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.findByStatus.baseUrl = baseUrl;
    this.findByTags.baseUrl = baseUrl;
    this.uploadImage.baseUrl = baseUrl;
    this.petId.baseUrl = baseUrl;
    this.pet.baseUrl = baseUrl;
    this.inventory.baseUrl = baseUrl;
    this.orderId.baseUrl = baseUrl;
    this.order.baseUrl = baseUrl;
    this.createWithList.baseUrl = baseUrl;
    this.login.baseUrl = baseUrl;
    this.logout.baseUrl = baseUrl;
    this.username.baseUrl = baseUrl;
    this.user.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.findByStatus.baseUrl = environment;
    this.findByTags.baseUrl = environment;
    this.uploadImage.baseUrl = environment;
    this.petId.baseUrl = environment;
    this.pet.baseUrl = environment;
    this.inventory.baseUrl = environment;
    this.orderId.baseUrl = environment;
    this.order.baseUrl = environment;
    this.createWithList.baseUrl = environment;
    this.login.baseUrl = environment;
    this.logout.baseUrl = environment;
    this.username.baseUrl = environment;
    this.user.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.findByStatus.timeoutMs = timeoutMs;
    this.findByTags.timeoutMs = timeoutMs;
    this.uploadImage.timeoutMs = timeoutMs;
    this.petId.timeoutMs = timeoutMs;
    this.pet.timeoutMs = timeoutMs;
    this.inventory.timeoutMs = timeoutMs;
    this.orderId.timeoutMs = timeoutMs;
    this.order.timeoutMs = timeoutMs;
    this.createWithList.timeoutMs = timeoutMs;
    this.login.timeoutMs = timeoutMs;
    this.logout.timeoutMs = timeoutMs;
    this.username.timeoutMs = timeoutMs;
    this.user.timeoutMs = timeoutMs;
  }

  set apiKey(apiKey: string) {
    this.findByStatus.apiKey = apiKey;
    this.findByTags.apiKey = apiKey;
    this.uploadImage.apiKey = apiKey;
    this.petId.apiKey = apiKey;
    this.pet.apiKey = apiKey;
    this.inventory.apiKey = apiKey;
    this.orderId.apiKey = apiKey;
    this.order.apiKey = apiKey;
    this.createWithList.apiKey = apiKey;
    this.login.apiKey = apiKey;
    this.logout.apiKey = apiKey;
    this.username.apiKey = apiKey;
    this.user.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.findByStatus.apiKeyHeader = apiKeyHeader;
    this.findByTags.apiKeyHeader = apiKeyHeader;
    this.uploadImage.apiKeyHeader = apiKeyHeader;
    this.petId.apiKeyHeader = apiKeyHeader;
    this.pet.apiKeyHeader = apiKeyHeader;
    this.inventory.apiKeyHeader = apiKeyHeader;
    this.orderId.apiKeyHeader = apiKeyHeader;
    this.order.apiKeyHeader = apiKeyHeader;
    this.createWithList.apiKeyHeader = apiKeyHeader;
    this.login.apiKeyHeader = apiKeyHeader;
    this.logout.apiKeyHeader = apiKeyHeader;
    this.username.apiKeyHeader = apiKeyHeader;
    this.user.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
