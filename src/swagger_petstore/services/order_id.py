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


class OrderIdService(BaseService):
    """
    Service class for OrderIdService operations.
    Provides methods to interact with OrderIdService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._find_purchase_order_by_id_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }
        self._delete_purchase_order_by_identifier_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_find_purchase_order_by_id_config(self, config: SdkConfig):
        """
        Sets method-level configuration for find_purchase_order_by_id.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._find_purchase_order_by_id_config = config
        return self

    def set_delete_purchase_order_by_identifier_config(self, config: SdkConfig):
        """
        Sets method-level configuration for delete_purchase_order_by_identifier.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._delete_purchase_order_by_identifier_config = config
        return self

    @cast_models
    def find_purchase_order_by_id(
        self,
        order_id: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

        :param order_id: order_id
        :type order_id: str
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(order_id)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._find_purchase_order_by_id_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/store/order/{{orderId}}",
                [],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_path("orderId", order_id)
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
    def delete_purchase_order_by_identifier(
        self, order_id: str, *, request_config: Optional[SdkConfig] = None
    ) -> SwaggerPetstoreResponse[any]:
        """For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.

        :param order_id: order_id
        :type order_id: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(order_id)

        resolved_config = self._get_resolved_config(
            self._delete_purchase_order_by_identifier_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/store/order/{{orderId}}",
                [],
                resolved_config,
            )
            .add_path("orderId", order_id)
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
