# OrderService

A list of all methods in the `OrderService` service. Click on the method name to view detailed information about that method.

| Methods                                        | Description                     |
| :--------------------------------------------- | :------------------------------ |
| [placeAnOrderForAPet\_](#placeanorderforapet_) | Place a new order in the store. |

## placeAnOrderForAPet\_

Place a new order in the store.

- HTTP Method: `POST`
- Endpoint: `/store/order`

**Parameters**

| Name   | Type                                                                  | Required | Description       |
| :----- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body   | [PlaceAnOrderForAPetRequest](../models/PlaceAnOrderForAPetRequest.md) | ✅       | The request body. |
| accept | string                                                                | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PlaceAnOrderForAPetRequest, SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const placeAnOrderForAPetRequest: PlaceAnOrderForAPetRequest = {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: '1946-11-30T04:39:04.949Z',
    status: 'approved',
    complete: true,
  };

  const { data } = await swaggerPetstore.order.placeAnOrderForAPet_(placeAnOrderForAPetRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
