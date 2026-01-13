from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..find_by_status import FindByStatusService
from ...net.sdk_config import SdkConfig
from ...models.utils.sentinel import SENTINEL


class FindByStatusServiceAsync(FindByStatusService):
    """
    Async Wrapper for FindByStatusServiceAsync
    """

    def finds_pets_by_status(
        self,
        accept: Union[str, None],
        status: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().finds_pets_by_status)(
            accept, status, request_config=request_config
        )
