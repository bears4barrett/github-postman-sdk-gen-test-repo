from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..order_id import OrderIdService
from ...net.sdk_config import SdkConfig


class OrderIdServiceAsync(OrderIdService):
    """
    Async Wrapper for OrderIdServiceAsync
    """

    def find_purchase_order_by_id(
        self,
        order_id: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().find_purchase_order_by_id)(
            order_id, accept, request_config=request_config
        )

    def delete_purchase_order_by_identifier(
        self, order_id: str, *, request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().delete_purchase_order_by_identifier)(
            order_id, request_config=request_config
        )
