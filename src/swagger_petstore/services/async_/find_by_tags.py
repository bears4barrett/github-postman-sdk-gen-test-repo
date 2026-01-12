from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..find_by_tags import FindByTagsService
from ...net.sdk_config import SdkConfig
from ...models.utils.sentinel import SENTINEL


class FindByTagsServiceAsync(FindByTagsService):
    """
    Async Wrapper for FindByTagsServiceAsync
    """

    def finds_pets_by_tags(
        self,
        accept: Union[str, None],
        tags: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().finds_pets_by_tags)(
            accept, tags, request_config=request_config
        )
