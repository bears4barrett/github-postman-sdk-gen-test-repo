from typing import Awaitable, Optional, List, Union
from .utils.to_async import to_async
from ..create_with_list import CreateWithListService
from ...net.sdk_config import SdkConfig
from ...models import CreatesListOfUsersWithGivenInputArrayRequest


class CreateWithListServiceAsync(CreateWithListService):
    """
    Async Wrapper for CreateWithListServiceAsync
    """

    def creates_list_of_users_with_given_input_array(
        self,
        request_body: List[CreatesListOfUsersWithGivenInputArrayRequest],
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None
    ) -> Awaitable[any]:
        return to_async(super().creates_list_of_users_with_given_input_array)(
            request_body, accept, request_config=request_config
        )
