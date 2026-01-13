from typing import Optional
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


class LogoutService(BaseService):
    """
    Service class for LogoutService operations.
    Provides methods to interact with LogoutService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._logs_out_current_logged_in_user_session_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_logs_out_current_logged_in_user_session_config(self, config: SdkConfig):
        """
        Sets method-level configuration for logs_out_current_logged_in_user_session.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._logs_out_current_logged_in_user_session_config = config
        return self

    @cast_models
    def logs_out_current_logged_in_user_session(
        self, *, request_config: Optional[SdkConfig] = None
    ) -> SwaggerPetstoreResponse[any]:
        """Log user out of the system.

        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        resolved_config = self._get_resolved_config(
            self._logs_out_current_logged_in_user_session_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/user/logout",
                [],
                resolved_config,
            )
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
