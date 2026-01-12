from typing import Union
from .utils.json_map import JsonMap
from .utils.base_model import BaseModel
from .utils.sentinel import SENTINEL


@JsonMap({"id_": "id", "pet_id": "petId", "ship_date": "shipDate"})
class PlaceAnOrderForAPetRequest(BaseModel):
    """PlaceAnOrderForAPetRequest

    :param id_: id_, defaults to None
    :type id_: float, optional
    :param pet_id: pet_id, defaults to None
    :type pet_id: float, optional
    :param quantity: quantity, defaults to None
    :type quantity: float, optional
    :param ship_date: ship_date, defaults to None
    :type ship_date: str, optional
    :param status: status, defaults to None
    :type status: str, optional
    :param complete: complete, defaults to None
    :type complete: bool, optional
    """

    def __init__(
        self,
        id_: Union[float, None] = SENTINEL,
        pet_id: Union[float, None] = SENTINEL,
        quantity: Union[float, None] = SENTINEL,
        ship_date: Union[str, None] = SENTINEL,
        status: Union[str, None] = SENTINEL,
        complete: Union[bool, None] = SENTINEL,
        **kwargs
    ):
        """PlaceAnOrderForAPetRequest

        :param id_: id_, defaults to None
        :type id_: float, optional
        :param pet_id: pet_id, defaults to None
        :type pet_id: float, optional
        :param quantity: quantity, defaults to None
        :type quantity: float, optional
        :param ship_date: ship_date, defaults to None
        :type ship_date: str, optional
        :param status: status, defaults to None
        :type status: str, optional
        :param complete: complete, defaults to None
        :type complete: bool, optional
        """
        if id_ is not SENTINEL:
            self.id_ = self._define_number("id_", id_, nullable=True)
        if pet_id is not SENTINEL:
            self.pet_id = self._define_number("pet_id", pet_id, nullable=True)
        if quantity is not SENTINEL:
            self.quantity = self._define_number("quantity", quantity, nullable=True)
        if ship_date is not SENTINEL:
            self.ship_date = self._define_str("ship_date", ship_date, nullable=True)
        if status is not SENTINEL:
            self.status = self._define_str("status", status, nullable=True)
        if complete is not SENTINEL:
            self.complete = complete
        self._kwargs = kwargs
