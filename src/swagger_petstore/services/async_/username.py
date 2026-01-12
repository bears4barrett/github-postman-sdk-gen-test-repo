from typing import Awaitable, Optional, Union
from .utils.to_async import to_async
from ..username import UsernameService
from ...net.sdk_config import SdkConfig
from ...models import UpdateUserResourceRequest


class UsernameServiceAsync(UsernameService):
    """
    Async Wrapper for UsernameServiceAsync
    """

    def get_user_by_user_name(
        self,
        username: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().get_user_by_user_name)(
            username, accept, request_config=request_config
        )

    def update_user_resource(
        self,
        request_body: UpdateUserResourceRequest,
        username: str,
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().update_user_resource)(
            request_body, username, request_config=request_config
        )

    def delete_user_resource(
        self, username: str, *, request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().delete_user_resource)(
            username, request_config=request_config
        )
