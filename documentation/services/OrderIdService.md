# OrderIdService

A list of all methods in the `OrderIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                                | Description                                                                                                          |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [findPurchaseOrderById\_](#findpurchaseorderbyid_)                     | For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.                 |
| [deletePurchaseOrderByIdentifier\_](#deletepurchaseorderbyidentifier_) | For valid response try integer IDs with value \< 1000. Anything above 1000 or non-integers will generate API errors. |

## findPurchaseOrderById\_

For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.

- HTTP Method: `GET`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| orderId | string | ✅       |             |
| accept  | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.orderId.findPurchaseOrderById_('orderId', {
    accept: 'application/json',
  });

  console.log(data);
})();
```

## deletePurchaseOrderByIdentifier\_

For valid response try integer IDs with value \< 1000. Anything above 1000 or non-integers will generate API errors.

- HTTP Method: `DELETE`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| orderId | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.orderId.deletePurchaseOrderByIdentifier_('orderId');

  console.log(data);
})();
```
