# LogoutService

A list of all methods in the `LogoutService` service. Click on the method name to view detailed information about that method.

| Methods                                                                             | Description                 |
| :---------------------------------------------------------------------------------- | :-------------------------- |
| [logs_out_current_logged_in_user_session](#logs_out_current_logged_in_user_session) | Log user out of the system. |

## logs_out_current_logged_in_user_session

Log user out of the system.

- HTTP Method: `GET`
- Endpoint: `/user/logout`

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

result = sdk.logout.logs_out_current_logged_in_user_session()

print(result)
```
