# PetIdService

A list of all methods in the `PetIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                                    | Description                                    |
| :------------------------------------------------------------------------- | :--------------------------------------------- |
| [findPetById\_](#findpetbyid_)                                             | Returns a single pet.                          |
| [updatesAPetInTheStoreWithFormData\_](#updatesapetinthestorewithformdata_) | Updates a pet resource based on the form data. |
| [deletesAPet\_](#deletesapet_)                                             | Delete a pet.                                  |

## findPetById\_

Returns a single pet.

- HTTP Method: `GET`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| petId  | string | ✅       |             |
| accept | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.petId.findPetById_('petId', {
    accept: 'application/json',
  });

  console.log(data);
})();
```

## updatesAPetInTheStoreWithFormData\_

Updates a pet resource based on the form data.

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type   | Required | Description                            |
| :----- | :----- | :------- | :------------------------------------- |
| petId  | string | ✅       |                                        |
| accept | string | ✅       |                                        |
| name   | string | ❌       | Name of pet that needs to be updated   |
| status | string | ❌       | Status of pet that needs to be updated |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.petId.updatesAPetInTheStoreWithFormData_('petId', {
    name: 'ea in enim',
    status: 'ea in enim',
    accept: 'application/json',
  });

  console.log(data);
})();
```

## deletesAPet\_

Delete a pet.

- HTTP Method: `DELETE`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| petId  | string | ✅       |             |
| apiKey | string | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstore } from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const { data } = await swaggerPetstore.petId.deletesAPet_('petId', {
    apiKey: 'ea in enim',
  });

  console.log(data);
})();
```
