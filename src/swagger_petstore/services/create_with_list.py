from typing import List, Optional, Union
from .utils.validator import Validator
from .utils.base_service import BaseService
from ..net.transport.swagger_petstore_response import (
    SwaggerPetstoreResponse,
    SwaggerPetstoreMetadata,
)
from ..net.transport.serializer import Serializer
from ..net.sdk_config import SdkConfig
from ..net.environment.environment import Environment
from ..models.utils.cast_models import cast_models
from ..models import CreatesListOfUsersWithGivenInputArrayRequest


class CreateWithListService(BaseService):
    """
    Service class for CreateWithListService operations.
    Provides methods to interact with CreateWithListService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._creates_list_of_users_with_given_input_array_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_creates_list_of_users_with_given_input_array_config(
        self, config: SdkConfig
    ):
        """
        Sets method-level configuration for creates_list_of_users_with_given_input_array.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._creates_list_of_users_with_given_input_array_config = config
        return self

    @cast_models
    def creates_list_of_users_with_given_input_array(
        self,
        request_body: List[CreatesListOfUsersWithGivenInputArrayRequest],
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Creates list of users with given input array.

        :param request_body: The request body.
        :type request_body: List[CreatesListOfUsersWithGivenInputArrayRequest]
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(
            CreatesListOfUsersWithGivenInputArrayRequest
        ).is_array().is_nullable().validate(request_body)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._creates_list_of_users_with_given_input_array_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/createWithList",
                [],
                resolved_config,
            )
            .add_header("Accept", accept)
            .serialize()
            .set_method("POST")
            .set_body(request_body)
        )

        response, status, _ = self.send_request(serialized_request)
        return SwaggerPetstoreResponse(
            data=response,
            raw=self._last_response.raw,
            metadata=SwaggerPetstoreMetadata(
                headers=dict(self._last_response.headers), status_code=status
            ),
        )
