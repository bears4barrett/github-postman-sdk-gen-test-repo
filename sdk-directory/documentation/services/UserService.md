# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                     | Description                                  |
| :-------------------------- | :------------------------------------------- |
| [create_user](#create_user) | This can only be done by the logged in user. |

## create_user

This can only be done by the logged in user.

- HTTP Method: `POST`
- Endpoint: `/user`

**Parameters**

| Name         | Type                                                | Required | Description       |
| :----------- | :-------------------------------------------------- | :------- | :---------------- |
| request_body | [CreateUserRequest](../models/CreateUserRequest.md) | ✅       | The request body. |
| accept       | str                                                 | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment
from swagger_petstore.models import CreateUserRequest

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = CreateUserRequest(
    id_=10,
    username="theUser",
    first_name="John",
    last_name="James",
    email="john@email.com",
    password="12345",
    phone="12345",
    user_status=1
)

result = sdk.user.create_user(
    request_body=request_body,
    accept="application/json"
)

print(result)
```
