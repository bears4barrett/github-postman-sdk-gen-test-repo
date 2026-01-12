from typing import Union
from .net.environment import Environment
from .sdk import SwaggerPetstore
from .services.async_.find_by_status import FindByStatusServiceAsync
from .services.async_.find_by_tags import FindByTagsServiceAsync
from .services.async_.upload_image import UploadImageServiceAsync
from .services.async_.pet_id import PetIdServiceAsync
from .services.async_.pet import PetServiceAsync
from .services.async_.inventory import InventoryServiceAsync
from .services.async_.order_id import OrderIdServiceAsync
from .services.async_.order import OrderServiceAsync
from .services.async_.create_with_list import CreateWithListServiceAsync
from .services.async_.login import LoginServiceAsync
from .services.async_.logout import LogoutServiceAsync
from .services.async_.username import UsernameServiceAsync
from .services.async_.user import UserServiceAsync


class SwaggerPetstoreAsync(SwaggerPetstore):
    """
    SwaggerPetstoreAsync is the asynchronous version of the SwaggerPetstore SDK Client.
    """

    def __init__(
        self,
        api_key: str = None,
        api_key_header: str = "X-API-KEY",
        base_url: Union[Environment, str, None] = None,
        timeout: int = 60000,
    ):
        super().__init__(
            api_key=api_key,
            api_key_header=api_key_header,
            base_url=base_url,
            timeout=timeout,
        )

        self.find_by_status = FindByStatusServiceAsync(base_url=self._base_url)
        self.find_by_tags = FindByTagsServiceAsync(base_url=self._base_url)
        self.upload_image = UploadImageServiceAsync(base_url=self._base_url)
        self.pet_id = PetIdServiceAsync(base_url=self._base_url)
        self.pet = PetServiceAsync(base_url=self._base_url)
        self.inventory = InventoryServiceAsync(base_url=self._base_url)
        self.order_id = OrderIdServiceAsync(base_url=self._base_url)
        self.order = OrderServiceAsync(base_url=self._base_url)
        self.create_with_list = CreateWithListServiceAsync(base_url=self._base_url)
        self.login = LoginServiceAsync(base_url=self._base_url)
        self.logout = LogoutServiceAsync(base_url=self._base_url)
        self.username = UsernameServiceAsync(base_url=self._base_url)
        self.user = UserServiceAsync(base_url=self._base_url)
