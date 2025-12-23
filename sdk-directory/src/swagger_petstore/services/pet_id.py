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


class PetIdService(BaseService):
    """
    Service class for PetIdService operations.
    Provides methods to interact with PetIdService-related API endpoints.
    Inherits common functionality from BaseService including authentication and request handling.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the service and method-level configurations."""
        super().__init__(*args, **kwargs)
        self._find_pet_by_id_config: SdkConfig = {"environment": Environment.PETSTORE3}
        self._updates_a_pet_in_the_store_with_form_data_config: SdkConfig = {
            "environment": Environment.PETSTORE3
        }
        self._deletes_a_pet_config: SdkConfig = {"environment": Environment.PETSTORE3}

    def set_find_pet_by_id_config(self, config: SdkConfig):
        """
        Sets method-level configuration for find_pet_by_id.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._find_pet_by_id_config = config
        return self

    def set_updates_a_pet_in_the_store_with_form_data_config(self, config: SdkConfig):
        """
        Sets method-level configuration for updates_a_pet_in_the_store_with_form_data.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._updates_a_pet_in_the_store_with_form_data_config = config
        return self

    def set_deletes_a_pet_config(self, config: SdkConfig):
        """
        Sets method-level configuration for deletes_a_pet.

        :param SdkConfig config: Configuration dictionary to override service-level defaults.
        :return: The service instance for method chaining.
        """
        self._deletes_a_pet_config = config
        return self

    @cast_models
    def find_pet_by_id(
        self,
        pet_id: str,
        accept: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Returns a single pet.

        :param pet_id: pet_id
        :type pet_id: str
        :param accept: accept
        :type accept: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(pet_id)
        Validator(str).is_nullable().validate(accept)

        resolved_config = self._get_resolved_config(
            self._find_pet_by_id_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet/{{petId}}",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_path("petId", pet_id)
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
    def updates_a_pet_in_the_store_with_form_data(
        self,
        pet_id: str,
        accept: Union[str, None],
        name: Union[str, None] = SENTINEL,
        status: Union[str, None] = SENTINEL,
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Updates a pet resource based on the form data.

        :param pet_id: pet_id
        :type pet_id: str
        :param accept: accept
        :type accept: str
        :param name: Name of pet that needs to be updated, defaults to None
        :type name: str, optional
        :param status: Status of pet that needs to be updated, defaults to None
        :type status: str, optional
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(pet_id)
        Validator(str).is_nullable().validate(accept)
        Validator(str).is_optional().is_nullable().validate(name)
        Validator(str).is_optional().is_nullable().validate(status)

        resolved_config = self._get_resolved_config(
            self._updates_a_pet_in_the_store_with_form_data_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet/{{petId}}",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("Accept", accept)
            .add_path("petId", pet_id)
            .add_query("name", name, nullable=True)
            .add_query("status", status, nullable=True)
            .serialize()
            .set_method("POST")
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
    def deletes_a_pet(
        self,
        pet_id: str,
        api_key: Union[str, None],
        *,
        request_config: Optional[SdkConfig] = None,
    ) -> SwaggerPetstoreResponse[any]:
        """Delete a pet.

        :param pet_id: pet_id
        :type pet_id: str
        :param api_key: api_key
        :type api_key: str
        ...
        :raises RequestError: Raised when a request fails, with optional HTTP status code and details.
        ...
        :return: The parsed response data.
        :rtype: any
        """

        Validator(str).validate(pet_id)
        Validator(str).is_nullable().validate(api_key)

        resolved_config = self._get_resolved_config(
            self._deletes_a_pet_config, request_config
        )

        serialized_request = (
            Serializer(
                f"{resolved_config.get('base_url') or self.base_url or Environment.PETSTORE3.url or Environment.DEFAULT.url}/pet/{{petId}}",
                [self.get_api_key(resolved_config)],
                resolved_config,
            )
            .add_header("api_key", api_key)
            .add_path("petId", pet_id)
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
