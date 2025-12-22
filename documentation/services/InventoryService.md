# InventoryService

A list of all methods in the `InventoryService` service. Click on the method name to view detailed information about that method.

| Methods                                                            | Description                                  |
| :----------------------------------------------------------------- | :------------------------------------------- |
| [returnsPetInventoriesByStatus\_](#returnspetinventoriesbystatus_) | Returns a map of status codes to quantities. |

## returnsPetInventoriesByStatus\_

Returns a map of status codes to quantities.

- HTTP Method: `GET`
- Endpoint: `/store/inventory`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| accept | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.inventory.returnsPetInventoriesByStatus_({
    accept: 'application/json',
  });

  console.log(data);
})();
```
