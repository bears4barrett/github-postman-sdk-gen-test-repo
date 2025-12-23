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
from ..models import AddANewPetToTheStoreRequest, UpdateAnExistingPetRequest


class PetService(BaseService):
    """
    Service class for PetService operations.
    Provides methods to interact with PetService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._update_an_existing_pet_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }
        self._add_a_new_pet_to_the_store_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }

    def set_update_an_existing_pet_config(self, config: SdkConfig):
        """
        Sets method-level configuration for update_an_existing_pet.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._update_an_existing_pet_config = config
        return self

    def set_add_a_new_pet_to_the_store_config(self, config: SdkConfig):
        """
        Sets method-level configuration for add_a_new_pet_to_the_store.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._add_a_new_pet_to_the_store_config = config
        return self

    @cast_models
    def update_an_existing_pet(
        self,
        request_body: UpdateAnExistingPetRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Update an existing pet by Id.

        :param request_body: The request body.
        :type request_body: UpdateAnExistingPetRequest
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(UpdateAnExistingPetRequest).is_nullable().validate(request_body)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._update_an_existing_pet_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("Accept", accept)
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
    def add_a_new_pet_to_the_store(
        self,
        request_body: AddANewPetToTheStoreRequest,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Add a new pet to the store.

        :param request_body: The request body.
        :type request_body: AddANewPetToTheStoreRequest
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(AddANewPetToTheStoreRequest).is_nullable().validate(request_body)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._add_a_new_pet_to_the_store_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet",
                [self.get_api_key(resolved_config)],
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
