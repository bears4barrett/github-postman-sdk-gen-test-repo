from __future__ import annotations
from typing import List
from typing import Union
from .utils.json_map import JsonMap
from .utils.base_model import BaseModel
from .utils.sentinel import SENTINEL
from .update_an_existing_pet_request_category import UpdateAnExistingPetRequestCategory
from .update_an_existing_pet_request_tags import UpdateAnExistingPetRequestTags


@JsonMap({"photo_urls": "photoUrls", "id_": "id"})
class UpdateAnExistingPetRequest(BaseModel):
    """UpdateAnExistingPetRequest

    :param name: name, defaults to None
    :type name: str, optional
    :param photo_urls: photo_urls, defaults to None
    :type photo_urls: List[str], optional
    :param id_: id_, defaults to None
    :type id_: float, optional
    :param category: category, defaults to None
    :type category: UpdateAnExistingPetRequestCategory, optional
    :param tags: tags, defaults to None
    :type tags: List[UpdateAnExistingPetRequestTags], optional
    :param status: status, defaults to None
    :type status: str, optional
    """

    def __init__(
        self,
        name: Union[str, None] = SENTINEL,
        photo_urls: Union[List[str], None] = SENTINEL,
        id_: Union[float, None] = SENTINEL,
        category: Union[UpdateAnExistingPetRequestCategory, None] = SENTINEL,
        tags: Union[List[UpdateAnExistingPetRequestTags], None] = SENTINEL,
        status: Union[str, None] = SENTINEL,
        **kwargs,
    ):
        """UpdateAnExistingPetRequest

        :param name: name, defaults to None
        :type name: str, optional
        :param photo_urls: photo_urls, defaults to None
        :type photo_urls: List[str], optional
        :param id_: id_, defaults to None
        :type id_: float, optional
        :param category: category, defaults to None
        :type category: UpdateAnExistingPetRequestCategory, optional
        :param tags: tags, defaults to None
        :type tags: List[UpdateAnExistingPetRequestTags], optional
        :param status: status, defaults to None
        :type status: str, optional
        """
        if name is not SENTINEL:
            self.name = self._define_str("name", name, nullable=True)
        if photo_urls is not SENTINEL:
            self.photo_urls = photo_urls
        if id_ is not SENTINEL:
            self.id_ = self._define_number("id_", id_, nullable=True)
        if category is not SENTINEL:
            self.category = self._define_object(
                category, UpdateAnExistingPetRequestCategory, nullable=True
            )
        if tags is not SENTINEL:
            self.tags = self._define_list(
                tags, UpdateAnExistingPetRequestTags, nullable=True
            )
        if status is not SENTINEL:
            self.status = self._define_str("status", status, nullable=True)
        self._kwargs = kwargs
