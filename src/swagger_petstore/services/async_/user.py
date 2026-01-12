from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..user import UserService
from ...net.sdk_config import SdkConfig
from ...models import CreateUserRequest


class UserServiceAsync(UserService):
    """
    Async Wrapper for UserServiceAsync
    """

    def create_user(
        self,
        request_body: CreateUserRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().create_user)(
            request_body, accept, request_config=request_config
        )
