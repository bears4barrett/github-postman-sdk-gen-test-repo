from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..upload_image import UploadImageService
from ...net.sdk_config import SdkConfig
from ...models.utils.sentinel import SENTINEL


class UploadImageServiceAsync(UploadImageService):
    """
    Async Wrapper for UploadImageServiceAsync
    """

    def uploads_an_image(
        self,
        request_body: bytes,
        pet_id: str,
        accept: Union[str, None],
        additional_metadata: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().uploads_an_image)(
            request_body,
            pet_id,
            accept,
            additional_metadata,
            request_config=request_config,
        )
