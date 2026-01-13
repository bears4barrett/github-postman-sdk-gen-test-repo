# LoginService

A list of all methods in the `LoginService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description          |
| :------------------------------------------------------ | :------------------- |
| [logs_user_into_the_system](#logs_user_into_the_system) | Log into the system. |

## logs_user_into_the_system

Log into the system.

- HTTP Method: `GET`
- Endpoint: `/user/login`

**Parameters**

| Name     | Type | Required | Description                          |
| :------- | :--- | :------- | :----------------------------------- |
| accept   | str  | ✅       |                                      |
| username | str  | ❌       | The user name for login              |
| password | str  | ❌       | The password for login in clear text |

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

result = sdk.login.logs_user_into_the_system(
    accept="application/xml",
    username="ea in enim",
    password="ea in enim"
)

print(result)
```
