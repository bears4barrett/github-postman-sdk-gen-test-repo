from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..pet_id import PetIdService
from ...net.sdk_config import SdkConfig
from ...models.utils.sentinel import SENTINEL


class PetIdServiceAsync(PetIdService):
    """
    Async Wrapper for PetIdServiceAsync
    """

    def find_pet_by_id(
        self,
        pet_id: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().find_pet_by_id)(
            pet_id, accept, request_config=request_config
        )

    def updates_a_pet_in_the_store_with_form_data(
        self,
        pet_id: str,
        accept: Union[str, None],
        name: Union[str, None] = SENTINEL,
        status: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().updates_a_pet_in_the_store_with_form_data)(
            pet_id, accept, name, status, request_config=request_config
        )

    def deletes_a_pet(
        self,
        pet_id: str,
        api_key: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().deletes_a_pet)(
            pet_id, api_key, request_config=request_config
        )
