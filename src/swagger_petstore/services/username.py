from typing import Optional, Union
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
from ..models import UpdateUserResourceRequest


class UsernameService(BaseService):
    """
    Service class for UsernameService operations.
    Provides methods to interact with UsernameService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._get_user_by_user_name_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }
        self._update_user_resource_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }
        self._delete_user_resource_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_get_user_by_user_name_config(self, config: SdkConfig):
        """
        Sets method-level configuration for get_user_by_user_name.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._get_user_by_user_name_config = config
        return self

    def set_update_user_resource_config(self, config: SdkConfig):
        """
        Sets method-level configuration for update_user_resource.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._update_user_resource_config = config
        return self

    def set_delete_user_resource_config(self, config: SdkConfig):
        """
        Sets method-level configuration for delete_user_resource.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._delete_user_resource_config = config
        return self

    @cast_models
    def get_user_by_user_name(
        self,
        username: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Get user detail based on username.

        :param username: username
        :type username: str
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(username)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._get_user_by_user_name_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/{{username}}",
                [],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_path("username", username)
            .serialize()
            .set_method("GET")
        )

        response, status, _ = self.send_request(serialized_request)
        return SwaggerPetstoreResponse(
            data=response,
            raw=self._last_response.raw,
            metadata=SwaggerPetstoreMetadata(
                headers=dict(self._last_response.headers), status_code=status
            ),
        )

    @cast_models
    def update_user_resource(
        self,
        request_body: UpdateUserResourceRequest,
        username: str,
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """This can only be done by the logged in user.

        :param request_body: The request body.
        :type request_body: UpdateUserResourceRequest
        :param username: username
        :type username: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(UpdateUserResourceRequest).is_nullable().validate(request_body)
        Validator(str).validate(username)

        resolved_config = self._get_resolved_config(
            self._update_user_resource_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/{{username}}",
                [],
                resolved_config,
            )
            .add_path("username", username)
            .serialize()
            .set_method("PUT")
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

    @cast_models
    def delete_user_resource(
        self, username: str, *, request_config: Optional[SdkConfig] = None
    ) -> SwaggerPetstoreResponse[any]:
        """This can only be done by the logged in user.

        :param username: username
        :type username: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(username)

        resolved_config = self._get_resolved_config(
            self._delete_user_resource_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/{{username}}",
                [],
                resolved_config,
            )
            .add_path("username", username)
            .serialize()
            .set_method("DELETE")
        )

        response, status, _ = self.send_request(serialized_request)
        return SwaggerPetstoreResponse(
            data=response,
            raw=self._last_response.raw,
            metadata=SwaggerPetstoreMetadata(
                headers=dict(self._last_response.headers), status_code=status
            ),
        )
