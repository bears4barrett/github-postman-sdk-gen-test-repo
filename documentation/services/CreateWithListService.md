# CreateWithListService

A list of all methods in the `CreateWithListService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                       | Description                                   |
| :-------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| [creates_list_of_users_with_given_input_array](#creates_list_of_users_with_given_input_array) | Creates list of users with given input array. |

## creates_list_of_users_with_given_input_array

Creates list of users with given input array.

- HTTP Method: `POST`
- Endpoint: `/user/createWithList`

**Parameters**

| Name         | Type                                                                                                            | Required | Description       |
| :----------- | :-------------------------------------------------------------------------------------------------------------- | :------- | :---------------- |
| request_body | [List[CreatesListOfUsersWithGivenInputArrayRequest]](../models/CreatesListOfUsersWithGivenInputArrayRequest.md) | ✅       | The request body. |
| accept       | str                                                                                                             | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = [
    {
        "id_": 10,
        "username": "theUser",
        "first_name": "John",
        "last_name": "James",
        "email": "john@email.com",
        "password": "12345",
        "phone": "12345",
        "user_status": 1
    }
]

result = sdk.create_with_list.creates_list_of_users_with_given_input_array(
    request_body=request_body,
    accept="application/json"
)

print(result)
```
