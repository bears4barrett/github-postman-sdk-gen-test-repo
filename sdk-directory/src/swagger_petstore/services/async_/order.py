from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..order import OrderService
from ...net.sdk_config import SdkConfig
from ...models import PlaceAnOrderForAPetRequest


class OrderServiceAsync(OrderService):
    """
    Async Wrapper for OrderServiceAsync
    """

    def place_an_order_for_a_pet(
        self,
        request_body: PlaceAnOrderForAPetRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().place_an_order_for_a_pet)(
            request_body, accept, request_config=request_config
        )
