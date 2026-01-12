# UsernameService

A list of all methods in the `UsernameService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                  |
| :---------------------------------------------- | :------------------------------------------- |
| [get_user_by_user_name](#get_user_by_user_name) | Get user detail based on username.           |
| [update_user_resource](#update_user_resource)   | This can only be done by the logged in user. |
| [delete_user_resource](#delete_user_resource)   | This can only be done by the logged in user. |

## get_user_by_user_name

Get user detail based on username.

- HTTP Method: `GET`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type | Required | Description |
| :------- | :--- | :------- | :---------- |
| username | str  | ✅       |             |
| accept   | str  | ✅       |             |

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

result = sdk.username.get_user_by_user_name(
    username="username",
    accept="application/json"
)

print(result)
```

## update_user_resource

This can only be done by the logged in user.

- HTTP Method: `PUT`
- Endpoint: `/user/{username}`

**Parameters**

| Name         | Type                                                                | Required | Description       |
| :----------- | :------------------------------------------------------------------ | :------- | :---------------- |
| request_body | [UpdateUserResourceRequest](../models/UpdateUserResourceRequest.md) | ✅       | The request body. |
| username     | str                                                                 | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment
from swagger_petstore.models import UpdateUserResourceRequest

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = UpdateUserResourceRequest(
    id_=10,
    username="theUser",
    first_name="John",
    last_name="James",
    email="john@email.com",
    password="12345",
    phone="12345",
    user_status=1
)

result = sdk.username.update_user_resource(
    request_body=request_body,
    username="username"
)

print(result)
```

## delete_user_resource

This can only be done by the logged in user.

- HTTP Method: `DELETE`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type | Required | Description |
| :------- | :--- | :------- | :---------- |
| username | str  | ✅       |             |

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

result = sdk.username.delete_user_resource(username="username")

print(result)
```
