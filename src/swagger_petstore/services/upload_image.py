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


class UploadImageService(BaseService):
    """
    Service class for UploadImageService operations.
    Provides methods to interact with UploadImageService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._uploads_an_image_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_uploads_an_image_config(self, config: SdkConfig):
        """
        Sets method-level configuration for uploads_an_image.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._uploads_an_image_config = config
        return self

    @cast_models
    def uploads_an_image(
        self,
        request_body: bytes,
        pet_id: str,
        accept: Union[str, None],
        additional_metadata: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Upload image of the pet.

        :param request_body: The request body.
        :type request_body: bytes
        :param pet_id: pet_id
        :type pet_id: str
        :param accept: accept
        :type accept: str
        :param additional_metadata: Additional Metadata, defaults to None
        :type additional_metadata: str, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(bytes).is_nullable().validate(request_body)
        Validator(str).validate(pet_id)
        Validator(str).is_nullable().validate(accept)
        Validator(str).is_optional().is_nullable().validate(additional_metadata)

        resolved_config = self._get_resolved_config(
            self._uploads_an_image_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet/{{petId}}/uploadImage",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_path("petId", pet_id)
            .add_query("additionalMetadata", additional_metadata, nullable=True)
            .serialize()
            .set_method("POST")
            .set_body(request_body, "application/octet-stream")
        )

        response, status, _ = self.send_request(serialized_request)
        return SwaggerPetstoreResponse(
            data=response,
            raw=self._last_response.raw,
            metadata=SwaggerPetstoreMetadata(
                headers=dict(self._last_response.headers), status_code=status
            ),
        )
