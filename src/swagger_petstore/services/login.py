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
from ..models.utils.sentinel import SENTINEL
from ..models.utils.cast_models import cast_models


class LoginService(BaseService):
    """
    Service class for LoginService operations.
    Provides methods to interact with LoginService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._logs_user_into_the_system_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_logs_user_into_the_system_config(self, config: SdkConfig):
        """
        Sets method-level configuration for logs_user_into_the_system.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._logs_user_into_the_system_config = config
        return self

    @cast_models
    def logs_user_into_the_system(
        self,
        accept: Union[str, None],
        username: Union[str, None] = SENTINEL,
        password: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Log into the system.

        :param accept: accept
        :type accept: str
        :param username: The user name for login, defaults to None
        :type username: str, optional
        :param password: The password for login in clear text, defaults to None
        :type password: str, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).is_nullable().validate(accept)
        Validator(str).is_optional().is_nullable().validate(username)
        Validator(str).is_optional().is_nullable().validate(password)

        resolved_config = self._get_resolved_config(
            self._logs_user_into_the_system_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/login",
                [],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_query("username", username, nullable=True)
            .add_query("password", password, nullable=True)
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
