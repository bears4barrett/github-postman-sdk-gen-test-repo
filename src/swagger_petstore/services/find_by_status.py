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


class FindByStatusService(BaseService):
    """
    Service class for FindByStatusService operations.
    Provides methods to interact with FindByStatusService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._finds_pets_by_status_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_finds_pets_by_status_config(self, config: SdkConfig):
        """
        Sets method-level configuration for finds_pets_by_status.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._finds_pets_by_status_config = config
        return self

    @cast_models
    def finds_pets_by_status(
        self,
        accept: Union[str, None],
        status: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Multiple status values can be provided with comma separated strings.

        :param accept: accept
        :type accept: str
        :param status: (Required) Status values that need to be considered for filter, defaults to None
        :type status: str, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).is_nullable().validate(accept)
        Validator(str).is_optional().is_nullable().validate(status)

        resolved_config = self._get_resolved_config(
            self._finds_pets_by_status_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet/findByStatus",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_query("status", status, nullable=True)
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
