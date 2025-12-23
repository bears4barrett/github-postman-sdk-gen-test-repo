# LogoutService

A list of all methods in the `LogoutService` service. Click on the method name to view detailed information about that method.

| Methods                                                                    | Description                 |
| :------------------------------------------------------------------------- | :-------------------------- |
| [logsOutCurrentLoggedInUserSession\_](#logsoutcurrentloggedinusersession_) | Log user out of the system. |

## logsOutCurrentLoggedInUserSession\_

Log user out of the system.

- HTTP Method: `GET`
- Endpoint: `/user/logout`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.logout.logsOutCurrentLoggedInUserSession_();

  console.log(data);
})();
```
