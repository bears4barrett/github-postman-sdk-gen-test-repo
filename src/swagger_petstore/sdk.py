from typing import Union
from .services.find_by_status import FindByStatusService
from .services.find_by_tags import FindByTagsService
from .services.upload_image import UploadImageService
from .services.pet_id import PetIdService
from .services.pet import PetService
from .services.inventory import InventoryService
from .services.order_id import OrderIdService
from .services.order import OrderService
from .services.create_with_list import CreateWithListService
from .services.login import LoginService
from .services.logout import LogoutService
from .services.username import UsernameService
from .services.user import UserService
from .net.environment import Environment


class SwaggerPetstore:
    """
    Main SDK client class for SwaggerPetstore.
    Provides centralized configuration and access to all service endpoints.
    Supports authentication, environment management, and global timeout settings.
    """

    def __init__(
        self,
        api_key: str = None,
        api_key_header: str = "X-API-KEY",
        base_url: Union[Environment, str, None] = None,
        timeout: int = 60000,
    ):
        """
        Initializes SwaggerPetstore the SDK class.
        """

        self._base_url = (
            base_url.value if isinstance(base_url, Environment) else base_url
        )
        self.find_by_status = FindByStatusService(base_url=self._base_url)
        self.find_by_tags = FindByTagsService(base_url=self._base_url)
        self.upload_image = UploadImageService(base_url=self._base_url)
        self.pet_id = PetIdService(base_url=self._base_url)
        self.pet = PetService(base_url=self._base_url)
        self.inventory = InventoryService(base_url=self._base_url)
        self.order_id = OrderIdService(base_url=self._base_url)
        self.order = OrderService(base_url=self._base_url)
        self.create_with_list = CreateWithListService(base_url=self._base_url)
        self.login = LoginService(base_url=self._base_url)
        self.logout = LogoutService(base_url=self._base_url)
        self.username = UsernameService(base_url=self._base_url)
        self.user = UserService(base_url=self._base_url)
        self.set_api_key(api_key, api_key_header)
        self.set_timeout(timeout)

    def set_base_url(self, base_url: Union[Environment, str]):
        """
        Sets the base URL for the entire SDK.

        :param Union[Environment, str] base_url: The base URL to be set.
        :return: The SDK instance.
        """
        self._base_url = (
            base_url.value if isinstance(base_url, Environment) else base_url
        )

        self.find_by_status.set_base_url(self._base_url)
        self.find_by_tags.set_base_url(self._base_url)
        self.upload_image.set_base_url(self._base_url)
        self.pet_id.set_base_url(self._base_url)
        self.pet.set_base_url(self._base_url)
        self.inventory.set_base_url(self._base_url)
        self.order_id.set_base_url(self._base_url)
        self.order.set_base_url(self._base_url)
        self.create_with_list.set_base_url(self._base_url)
        self.login.set_base_url(self._base_url)
        self.logout.set_base_url(self._base_url)
        self.username.set_base_url(self._base_url)
        self.user.set_base_url(self._base_url)

        return self

    def set_api_key(self, api_key: str, api_key_header="X-API-KEY"):
        """
        Sets the api key and the api key header for the entire SDK.
        """
        self.find_by_status.set_api_key(api_key, api_key_header)
        self.find_by_tags.set_api_key(api_key, api_key_header)
        self.upload_image.set_api_key(api_key, api_key_header)
        self.pet_id.set_api_key(api_key, api_key_header)
        self.pet.set_api_key(api_key, api_key_header)
        self.inventory.set_api_key(api_key, api_key_header)
        self.order_id.set_api_key(api_key, api_key_header)
        self.order.set_api_key(api_key, api_key_header)
        self.create_with_list.set_api_key(api_key, api_key_header)
        self.login.set_api_key(api_key, api_key_header)
        self.logout.set_api_key(api_key, api_key_header)
        self.username.set_api_key(api_key, api_key_header)
        self.user.set_api_key(api_key, api_key_header)

        return self

    def set_timeout(self, timeout: int):
        """
        Sets the timeout for the entire SDK.

        :param int timeout: The timeout (ms) to be set.
        :return: The SDK instance.
        """
        self.find_by_status.set_timeout(timeout)
        self.find_by_tags.set_timeout(timeout)
        self.upload_image.set_timeout(timeout)
        self.pet_id.set_timeout(timeout)
        self.pet.set_timeout(timeout)
        self.inventory.set_timeout(timeout)
        self.order_id.set_timeout(timeout)
        self.order.set_timeout(timeout)
        self.create_with_list.set_timeout(timeout)
        self.login.set_timeout(timeout)
        self.logout.set_timeout(timeout)
        self.username.set_timeout(timeout)
        self.user.set_timeout(timeout)

        return self


# c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
