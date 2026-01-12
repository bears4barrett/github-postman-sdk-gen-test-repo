from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..login import LoginService
from ...net.sdk_config import SdkConfig
from ...models.utils.sentinel import SENTINEL


class LoginServiceAsync(LoginService):
    """
    Async Wrapper for LoginServiceAsync
    """

    def logs_user_into_the_system(
        self,
        accept: Union[str, None],
        username: Union[str, None] = SENTINEL,
        password: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().logs_user_into_the_system)(
            accept, username, password, request_config=request_config
        )
