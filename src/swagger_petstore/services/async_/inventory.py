from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..inventory import InventoryService
from ...net.sdk_config import SdkConfig


class InventoryServiceAsync(InventoryService):
    """
    Async Wrapper for InventoryServiceAsync
    """

    def returns_pet_inventories_by_status(
        self, accept: Union[str, None], *, request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().returns_pet_inventories_by_status)(
            accept, request_config=request_config
        )
