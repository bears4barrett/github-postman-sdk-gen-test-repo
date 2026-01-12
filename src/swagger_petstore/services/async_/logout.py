from typing import Awaitable, Optional
from .utils.to_async import to_async
from ..logout import LogoutService
from ...net.sdk_config import SdkConfig


class LogoutServiceAsync(LogoutService):
    """
    Async Wrapper for LogoutServiceAsync
    """

    def logs_out_current_logged_in_user_session(
        self, *, request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().logs_out_current_logged_in_user_session)(
            request_config=request_config
        )
