# LoginService

A list of all methods in the `LoginService` service. Click on the method name to view detailed information about that method.

| Methods                                            | Description          |
| :------------------------------------------------- | :------------------- |
| [logsUserIntoTheSystem\_](#logsuserintothesystem_) | Log into the system. |

## logsUserIntoTheSystem\_

Log into the system.

- HTTP Method: `GET`
- Endpoint: `/user/login`

**Parameters**

| Name     | Type   | Required | Description                          |
| :------- | :----- | :------- | :----------------------------------- |
| accept   | string | ✅       |                                      |
| username | string | ❌       | The user name for login              |
| password | string | ❌       | The password for login in clear text |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.login.logsUserIntoTheSystem_({
    username: 'ea in enim',
    password: 'ea in enim',
    accept: 'application/xml',
  });

  console.log(data);
})();
```
