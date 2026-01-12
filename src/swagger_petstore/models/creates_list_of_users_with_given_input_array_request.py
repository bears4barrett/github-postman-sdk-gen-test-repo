from typing import Union
from .utils.json_map import JsonMap
from .utils.base_model import BaseModel
from .utils.sentinel import SENTINEL


@JsonMap(
    {
        "id_": "id",
        "first_name": "firstName",
        "last_name": "lastName",
        "user_status": "userStatus",
    }
)
class CreatesListOfUsersWithGivenInputArrayRequest(BaseModel):
    """CreatesListOfUsersWithGivenInputArrayRequest

    :param id_: id_, defaults to None
    :type id_: float, optional
    :param username: username, defaults to None
    :type username: str, optional
    :param first_name: first_name, defaults to None
    :type first_name: str, optional
    :param last_name: last_name, defaults to None
    :type last_name: str, optional
    :param email: email, defaults to None
    :type email: str, optional
    :param password: password, defaults to None
    :type password: str, optional
    :param phone: phone, defaults to None
    :type phone: str, optional
    :param user_status: user_status, defaults to None
    :type user_status: float, optional
    """

    def __init__(
        self,
        id_: Union[float, None] = SENTINEL,
        username: Union[str, None] = SENTINEL,
        first_name: Union[str, None] = SENTINEL,
        last_name: Union[str, None] = SENTINEL,
        email: Union[str, None] = SENTINEL,
        password: Union[str, None] = SENTINEL,
        phone: Union[str, None] = SENTINEL,
        user_status: Union[float, None] = SENTINEL,
        **kwargs
    ):
        """CreatesListOfUsersWithGivenInputArrayRequest

        :param id_: id_, defaults to None
        :type id_: float, optional
        :param username: username, defaults to None
        :type username: str, optional
        :param first_name: first_name, defaults to None
        :type first_name: str, optional
        :param last_name: last_name, defaults to None
        :type last_name: str, optional
        :param email: email, defaults to None
        :type email: str, optional
        :param password: password, defaults to None
        :type password: str, optional
        :param phone: phone, defaults to None
        :type phone: str, optional
        :param user_status: user_status, defaults to None
        :type user_status: float, optional
        """
        if id_ is not SENTINEL:
            self.id_ = self._define_number("id_", id_, nullable=True)
        if username is not SENTINEL:
            self.username = self._define_str("username", username, nullable=True)
        if first_name is not SENTINEL:
            self.first_name = self._define_str("first_name", first_name, nullable=True)
        if last_name is not SENTINEL:
            self.last_name = self._define_str("last_name", last_name, nullable=True)
        if email is not SENTINEL:
            self.email = self._define_str("email", email, nullable=True)
        if password is not SENTINEL:
            self.password = self._define_str("password", password, nullable=True)
        if phone is not SENTINEL:
            self.phone = self._define_str("phone", phone, nullable=True)
        if user_status is not SENTINEL:
            self.user_status = self._define_number(
                "user_status", user_status, nullable=True
            )
        self._kwargs = kwargs
