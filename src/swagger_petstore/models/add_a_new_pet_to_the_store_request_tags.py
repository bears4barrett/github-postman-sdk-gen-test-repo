from typing import Union
from .utils.json_map import JsonMap
from .utils.base_model import BaseModel
from .utils.sentinel import SENTINEL


@JsonMap({"id_": "id"})
class AddANewPetToTheStoreRequestTags(BaseModel):
    """AddANewPetToTheStoreRequestTags

    :param id_: id_, defaults to None
    :type id_: float, optional
    :param name: name, defaults to None
    :type name: str, optional
    """

    def __init__(
        self,
        id_: Union[float, None] = SENTINEL,
        name: Union[str, None] = SENTINEL,
        **kwargs
    ):
        """AddANewPetToTheStoreRequestTags

        :param id_: id_, defaults to None
        :type id_: float, optional
        :param name: name, defaults to None
        :type name: str, optional
        """
        if id_ is not SENTINEL:
            self.id_ = self._define_number("id_", id_, nullable=True)
        if name is not SENTINEL:
            self.name = self._define_str("name", name, nullable=True)
        self._kwargs = kwargs
