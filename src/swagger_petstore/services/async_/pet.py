from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..pet import PetService
from ...net.sdk_config import SdkConfig
from ...models import UpdateAnExistingPetRequest, AddANewPetToTheStoreRequest


class PetServiceAsync(PetService):
    """
    Async Wrapper for PetServiceAsync
    """

    def update_an_existing_pet(
        self,
        request_body: UpdateAnExistingPetRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().update_an_existing_pet)(
            request_body, accept, request_config=request_config
        )

    def add_a_new_pet_to_the_store(
        self,
        request_body: AddANewPetToTheStoreRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().add_a_new_pet_to_the_store)(
            request_body, accept, request_config=request_config
        )
